'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EsriBootstrapMapGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');
    },

    promptUser: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous EsriBootstrapMap generator!'));

        var prompts = [
            {
                type: 'list',
                name: 'template',
                message: 'Which EsriBootstrapMap template would you like to install?',
                choices: [
                    'fullmap',
                    'geosearch',
                    'starter',
                    'webmap'
                ]
            }
        ];

        this.prompt(prompts, function (props) {
            this.template = props.template;
            done();
        }.bind(this));
    },

    scafooldFolders: function () {
        this.mkdir('app');
        this.mkdir('app/style');
        this.mkdir('app/style/fonts');
        this.mkdir('app/javascript');
    },

    copyProjectFiles: function () {

        // general yeoman/bower/node/git resources
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('.gitignore', '.gitignore');

        // bootstrap map resources
        this.copy('_bootstrapmap.js', 'javascript/bootstrapmap.js');
        this.copy('_dojo-config.js', 'javascript/dojo-config.js');
        this.copy('_bootstrapmap.css', 'style/bootstrapmap.css');

        // template specific resources
        var sourceDir = 'map-' + this.template;
        this.copy(sourceDir + '/_index.html', 'app/index.html');
        this.copy(sourceDir + '/_style.css', 'app/style/map-style.css');
        this.copy(sourceDir + '/_map.js', 'app/javascript/map.js');
    },

    getDependencies: function() {
        var done = this.async();
        console.log('\nStarting to install dependencies using Bower and Node Package Manager (npm).');
        this.bowerInstall('', function(){
            console.log('\nSuccessfully installed Bower dependencies.');
        });
        this.npmInstall('', function(){
            console.log('\nSuccessfully installed NPM dependencies.');
        });
    },

    copyDownloadedResources: function() {
        console.log('starting');
        // set the source to the bower_components directory
        generator.sourceRoot(this.dest + '../bower_components');
        console.log(generator.src);

        // copy bootstrap components
        this.copy('bootstrap/dist/js/bootstrap.min.js', 'javascript/bootstrap.min.js');
        var fonts = ['.eot', '.svg', '.ttf', '.woff'];
        for (var i=0; i < fonts.length; i++){
            this.copy(
                'bootstrap/dist/fonts/glyphicons-halflings-regular' + fonts[i],
                'style/fonts/glyphicons-halflings-regular' + fonts[i]
            );
        }
        this.copy('bootstrap/dist/css/bootstrap.css', 'style/bootstrap.css');

        // copy jquery
        this.copy('jquery/dist/jquery.min.js', 'javascript/jquery.min.js');
    }
});

module.exports = EsriBootstrapMapGenerator;
