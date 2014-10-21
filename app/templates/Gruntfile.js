// Generated on <%= (new Date).toISOString().split('T')[0] %>
'use strict';

// helper variables and functions borrowed from generator-ember
var LIVERELOAD_PORT = 35729;
var liveReloadSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {

    //instead of loadNpmTasks, load all dev dependencies from the package.json
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // read package file for properties
        pkg: grunt.file.readJSON('package.json'),

        // copy files from downloaded packages into directories
        copy: {
            bootstrap: {
                files: {
                    'app/js/lib/bootstrap.min.js': 'app/bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'app/css/lib/bootstrap.min.css': 'app/bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'app/fonts/glyphicons-halflings-regular.eot': 'app/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                    'app/fonts/glyphicons-halflings-regular.svg': 'app/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                    'app/fonts/glyphicons-halflings-regular.ttf': 'app/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                    'app/fonts/glyphicons-halflings-regular.woff': 'app/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
                }
            },
            jquery: {
                files: {
                    'app/js/lib/jquery.min.js': 'app/bower_components/jquery/dist/jquery.min.js'
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                event: ['changed'],
                livereload: true
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'app/js/*.js',
                    'app/css/*.css',
                    'app/index.html'
                ]
            }
        },
        connect: {
            options: {
                port: 3000,
                open: true,
                hostname: 'localhost' // set to 0.0.0.0 if want access from external
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            liveReloadSnippet,
                            mountFolder(connect, 'app')
                        ]
                    }
                }
            }
        }
    });

    // set up aliases
    grunt.registerTask('serve', ['copy', 'connect', 'watch']);
};