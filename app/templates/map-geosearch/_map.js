require(["esri/map",
        "esri/dijit/Scalebar",
        "esri/dijit/Geocoder",
        "esri/InfoTemplate",
        "esri/graphic",
        "esri/geometry/Multipoint",
        "esri/symbols/PictureMarkerSymbol",
        "esri/dijit/Popup",
        "dojo/dom",
        "dojo/on",
        "application/bootstrapmap",
        "dojo/domReady!"],
    function (Map, Scalebar, Geocoder, InfoTemplate, Graphic, Multipoint, PictureMarkerSymbol, Popup, dom, on, BootstrapMap) {
        <!-- Get a reference to the ArcGIS Map class -->
        var map = BootstrapMap.create("mapDiv", {
            basemap: "streets",
            center: [-122.6819, 45.5200],
            zoom: 10
        });
        var scalebar = new Scalebar({
            map: map,
            scalebarUnit: "dual"
        });

        // Create widget
        var geocoder = new Geocoder({
            value: 'starbucks',
            maxLocations: 10,
            autoComplete: true,
            arcgisGeocoder: true,
            map: map
        }, "geosearch");
        geocoder.startup();
        geocoder.on("select", geocodeSelect);
        geocoder.on("findResults", geocodeResults);
        geocoder.on("clear", clearFindGraphics);

        // Geosearch functions
        on(dom.byId("btnGeosearch"), "click", geosearch);
        on(dom.byId("btnClear"), "click", clearFindGraphics);

        map.on("load", function (e) {
            map.infoWindow.offsetY = 35;
        });

        function geosearch() {
            var def = geocoder.find();
            def.then(function (res) {
                geocodeResults(res);
            });
        }

        function geocodeSelect(item) {
            var g = (item.graphic ? item.graphic : item.result.feature);
            g.setSymbol(sym);
            addPlaceGraphic(item.result, g.symbol);
        }

        function geocodeResults(places) {
            places = places.results;
            if (places.length > 0) {
                clearFindGraphics();
                var symbol = sym;
                // Create and add graphics with pop-ups
                for (var i = 0; i < places.length; i++) {
                    addPlaceGraphic(places[i], symbol);
                }
                zoomToPlaces(places);
            } else {
                alert("Sorry, address or place not found.");
            }
        }

        function addPlaceGraphic(item, symbol) {
            var place = {};
            var attributes, infoTemplate, pt, graphic;
            pt = item.feature.geometry;
            place.address = item.name;
            place.score = item.feature.attributes.Score;
            // Graphic components
            attributes = { address: place.address, score: place.score, lat: pt.getLatitude().toFixed(2), lon: pt.getLongitude().toFixed(2) };
            infoTemplate = new InfoTemplate("${address}", "Latitude: ${lat}<br/>Longitude: ${lon}<br/>Score: ${score}");
            graphic = new Graphic(pt, symbol, attributes, infoTemplate);
            // Add to map
            map.graphics.add(graphic);
        }

        function zoomToPlaces(places) {
            var multiPoint = new Multipoint(map.spatialReference);
            for (var i = 0; i < places.length; i++) {
                //multiPoint.addPoint(places[i].location);
                multiPoint.addPoint(places[i].feature.geometry);
            }
            map.setExtent(multiPoint.getExtent().expand(2.0));
        }

        function clearFindGraphics() {
            map.infoWindow.hide();
            map.graphics.clear();
        }

        function createPictureSymbol(url, xOffset, yOffset, size) {
            return new PictureMarkerSymbol(
                {
                    "angle": 0,
                    "xoffset": xOffset, "yoffset": yOffset, "type": "esriPMS",
                    "url": url,
                    "contentType": "image/png",
                    "width": size, "height": size
                });
        }

        var sym = createPictureSymbol("../images/blue-pin.png", 0, 12, 35);

        // Show modal dialog, hide nav
        $(document).ready(function () {
            // Close menu
            $('.nav a').on('click', function () {
                $(".navbar-toggle").click();
            });
            // Geosearch nav menu is selected
            $("#geosearchNav").click(function (e) {
                $("#geosearchModal").modal("show");
                // Bootstrap work-around
                $("body").css("margin-right", "0px");
                $(".navbar").css("margin-right", "0px");
            });
        });
    });