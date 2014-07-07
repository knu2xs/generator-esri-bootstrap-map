# generator-esri-bootstrap-map [![Build Status](https://secure.travis-ci.org/knu2xs/generator-esri-bootstrap-map.png?branch=master)](https://travis-ci.org/knu2xs/generator-esri-bootstrap-map)

Esri created [Esri-Bootstrap-Map-JS](https://github.com/Esri/bootstrap-map-js), a really slick looking set of templates combining [Twitter Bootstrap](http://getbootstrap.com) and the [Esri ArcGIS JavaScript API](https://developers.arcgis.com/javascript/). Although the project comes with four templates, it took me the better part of an afternoon to get one of them working the first time around. It really should not be this difficult.

Enter this project a [Yeoman](http://yeoman.io/) Generator for Esri-Bootstrap-Map-JS. This project, Generator-Esri-Bootstrap-Map, slightly refactors the four templates included in the original repository created by Esri and enables extremely quick scaffolding using the templates from the original project.

## Installation

To utilize this project, you will need [Node.js](http://nodejs.org/) installed with [Yeoman](http://yeoman.io) and this generator, generator-esri-bootstrap-map installed in Yeoman. Fret not. Installation is much easier than installing ArcMap.

### 1) Install Node.js

Head over to [Node.js](http://nodejs.org/) and whack the big green install button right in the middle of the landing page. Run the install for your platform. You now have Node.js installed on your computer with the Node Package Manager. You will now use the node package manager to install Yeoman.

### 2) Install Yeoman
Installing Yeoman is pretty easy. Just enter the following command at the command prompt.

```bash
$ npm install -g yo
```

Although Yeoman does require and use both [Bower](http://bower.io) and [Grunt](http://gruntjs.com/), NPM takes care of downloading and installing these dependencies for you. Yes, NPM takes care of a lot of potential headaches for you.

### 3) Install this generator

Finally, to install generator-esri-bootstrap-map from npm, run:

```bash
$ npm install -g generator-esri-bootstrap-map
```


## Use

To use the generator, create a directory, navigate to it at the command line and scaffold your new web application by entering the following. 

```bash
$ yo esri-bootstrap-map
```

This will scaffold a new application. Explore and have fun!
