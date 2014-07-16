require(["esri/map",
        "esri/dijit/Scalebar",
        "esri/dijit/Legend",
        "esri/arcgis/utils",
        "dojo/dom",
        "dojo/on",
        "dojo/query",
        "application/bootstrapmap",
        "dojo/domReady!"],
    function (Map, Scalebar, Legend, esriUtils, dom, on, query, BootstrapMap) {
        var map;
        var scalebar;
        var legend;

        // Load web map when page loads
        loadWebmap();

        function loadWebmap(e) {
            // Get new webmap and extract map and map parts
            var mapDeferred = BootstrapMap.createWebMap("68f12b304ad8495eb77fb55243c0ccc2", "mapDiv", {
                slider: true,
                nav: false,
                smartNavigation: false
            });

            mapDeferred.then(function (response) {
                map = response.map;

                // Add titles
                dom.byId("mapTitle").innerHTML = response.itemInfo.item.title;
                //dom.byId("mapSubTitle").innerHTML = response.itemInfo.item.snippet;
                // Add scalebar and legend
                var layers = esri.arcgis.utils.getLegendLayers(response);
                if (map.loaded) {
                    initMapParts(layers);
                }
                else {
                    on(map, "load", function () {
                        initMapParts(layers);
                    });
                }

            }, function (error) {
                alert("Sorry, couldn't load webmap!");
                console.log("Error loading webmap: " & dojo.toJson(error));
            });
        }

        function initMapParts(layers) {
            //add scalebar
            scalebar = new Scalebar({
                map: map,
                scalebarUnit: 'english'
            });
            //add legend
            if (legend) {
                legend.map = map;
                legend.refresh(layers);
            }
            else {
                legend = new Legend({
                    map: map,
                    layerInfos: layers
                }, "mapLegendDiv");
                legend.startup();
            }
        }
    });