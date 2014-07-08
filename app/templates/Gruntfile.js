'use strict';

module.exports = function (grunt) {

    // timing, to show elapsed time at end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable output paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    // grunt configuration
    grunt.initConfig({
        yeoman: yeomanConfig,
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'app'
                }
            }
        },
        watch: {
            appFiles: {
                files: ['app/**/*'],
                tasks: ['compass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // tell grunt what plugins to use
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register tasks
    grunt.registerTask('serve', ['connect']);
}