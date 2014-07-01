'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var EsriBootstrapMapGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous EsriBootstrapMap generator!'));

        var prompts = [
            {
                type: 'choices',
                name: 'template',
                message: 'Which EsriBootstrapMap template would you like to install?',
                choices: [
                    'fullmap',
                    'geosearch',
                    'starter',
                    'webmap'
                ],
                default: true
            }
        ];

        this.prompt(prompts, function (props) {
            this.someOption = props.someOption;

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('app');
        this.mkdir('app/css');
        this.mkdir('app/javascript');
        this.mkdir('app/templates');

        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    }
});

module.exports = EsriBootstrapMapGenerator;
