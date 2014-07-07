require(["esri/map",
        "application/bootstrapmap",
        "dojo/domReady!"],
    function(Map, BootstrapMap) {
        <!-- Get a reference to the ArcGIS Map class -->
        var map = BootstrapMap.create("mapDiv",{
            basemap:"national-geographic",
            center:[-122.45,37.77],
            zoom:12
        });
    });