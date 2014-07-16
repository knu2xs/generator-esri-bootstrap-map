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

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({

        // read package file for properties
        pkg: grunt.file.readJSON('package.json'),

        // copy files from downloaded packages into directories
        copy: {
            bootstrap: {
                files: {
                    'app/js/lib/bootstrap.min.js': 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'app/css/lib/bootstrap.min.css': 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'app/fonts/glyphicons-halflings-regular.eot': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                    'app/fonts/glyphicons-halflings-regular.svg': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                    'app/fonts/glyphicons-halflings-regular.ttf': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                    'app/fonts/glyphicons-halflings-regular.woff': 'bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
                }
            },
            jquery: {
                files: {
                    'app/js/lib/jquery.min.js': 'bower_components/jquery/dist/jquery.min.js'
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                event: ['changed'],
                livereload: true
            },
//            javascript: {
//                files: ['app/js/*.js'],
//                tasks: [ function () {
//                    grunt.log.writeln('javascript changed, updating');
//                }]
//            },
//            style: {
//                files: ['app/css/*.css'],
//                tasks: [ function () {
//                    grunt.log.writeln('css style changed, updating');
//                }]
//            },
//            html: {
//                files: ['*.html'],
//                tasks: [ function () {
//                    grunt.log.writeln('html file changed, updating');
//                }]
//            },
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
        },
        open: true
    });

    // set up aliases
    grunt.registerTask('setup', ['copy']);
    grunt.registerTask('serve', ['connect', 'watch']);
};