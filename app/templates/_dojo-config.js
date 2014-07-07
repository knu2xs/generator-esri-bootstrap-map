var package_path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
var dojoConfig = {
    //The location.pathname.replace() logic below may look confusing but all its doing is
    // enabling us to load the api from a CDN and load local modules from the correct location.
    packages: [{
        name: "application",
        location: package_path + '/javascript'
    }]
};