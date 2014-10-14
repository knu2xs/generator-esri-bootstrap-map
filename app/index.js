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
        this.log(yosay('Welcome to the Esri-Bootstrap-Map generator! Git in. Sit down. Shut up and hold on.'));

        var prompts = [
            {
                type: 'list',
                name: 'template',
                message: 'Which esri-bootstrap-map template would you like to install?',
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

    scaffoldFolders: function () {
        this.mkdir('app');
        this.mkdir('app/css');
        this.mkdir('app/css/lib');
        this.mkdir('app/fonts');
        this.mkdir('app/js');
        this.mkdir('app/js/lib');
        this.mkdir('app/images');
    },

    copyProjectFiles: function () {

        // general yeoman/bower/node/git resources
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_gitignore', '.gitignore');
        this.copy('Gruntfile.js', 'Gruntfile.js');

        // bootstrap map resources
        this.copy('_bootstrapmap.js', 'app/js/lib/bootstrapmap.js');
        this.copy('_dojo-config.js', 'app/js/lib/dojo-config.js');
        this.copy('_bootstrapmap.css', 'app/css/lib/bootstrapmap.css');

        // template specific resources
        var sourceDir = 'map-' + this.template;
        this.copy(sourceDir + '/_index.html', 'app/index.html');
        this.copy(sourceDir + '/_style.css', 'app/css/map-style.css');
        this.copy(sourceDir + '/_map.js', 'app/js/map.js');

        // images directory used by some of the templates
        this.directory('images', 'app/images');

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
    }
});

module.exports = EsriBootstrapMapGenerator;