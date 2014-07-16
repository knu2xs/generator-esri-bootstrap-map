require(["esri/map",
        "application/bootstrapmap",
        "dojo/domReady!"],
    function (Map, BootstrapMap) {
        <!-- Get a reference to the ArcGIS Map class -->
        var map = BootstrapMap.create("mapDiv", {
            basemap: "national-geographic",
            center: [-122.6819, 45.5200],
            zoom: 10
        });
    });