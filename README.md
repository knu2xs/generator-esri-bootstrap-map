# generator-esri-bootstrap-map [![Build Status](https://secure.travis-ci.org/knu2xs/generator-esri-bootstrap-map.png?branch=master)](https://travis-ci.org/knu2xs/generator-esri-bootstrap-map)

Esri created [Esri-Bootstrap-Map-JS](https://github.com/Esri/bootstrap-map-js), a really slick set of templates combining [Twitter Bootstrap](http://getbootstrap.com) and the [Esri ArcGIS JavaScript API](https://developers.arcgis.com/javascript/). Although the project comes with four templates, it took me the better part of an afternoon to get one of them working the first time around. It really should not be this difficult.

![App](https://raw.github.com/Esri/bootstrap-map-js/master/bootstrapmapjs.png)

Enter this project, a [Yeoman](http://yeoman.io/) Generator for Esri-Bootstrap-Map-JS. This project, Generator-Esri-Bootstrap-Map, marries Yeoman with slightly refactored versions of the four templates included in the original repository created by Esri. Using Yeoman cuts the learning curve from an afternoon to about five minutes to get up and running with these templates.

## BIG DISCLAIMER & Status
This thing is under heavy development. Right now my initial and very limited testing indicates it will create the templates and the templates will run. However, live reloading is not yet working and I have yet to figure out how to write tests. As a result, I have not submitted this to the npm repository yet. Hence, the directions for installation will not work. However, if you know how and would like to locally install and link it up, please feel free to test and provide assistance to get this to a working beta state.

## Installation

To utilize this project, you will need [Node.js](http://nodejs.org/) installed with [Yeoman](http://yeoman.io) and this generator, generator-esri-bootstrap-map installed in Yeoman. Fret not. Installation is much easier than installing ArcMap.

### 1) Install Node.js

Head over to [Node.js](http://nodejs.org/) and whack the big green install button right in the middle of the landing page. Run the install for your platform. You now have Node.js installed on your computer with the Node Package Manager. You will now use the node package manager to install Yeoman.

### 2) Install Yeoman
Installing Yeoman is pretty easy. Just enter the following command at the command prompt.

```bash
npm install -g yo
```

Although Yeoman does require and use both [Bower](http://bower.io) and [Grunt](http://gruntjs.com/), NPM takes care of downloading and installing these dependencies for you. Yes, NPM takes care of a lot of potential headaches for you.

### 3) Install this generator

Finally, to install generator-esri-bootstrap-map from npm, run:

```bash
npm install -g generator-esri-bootstrap-map
```


## Use

To use the generator, create a directory, navigate to it at the command line and scaffold your new web application by entering the following. 

```bash
yo esri-bootstrap-map
```

This will move some files around and download JQuery and Bootstrap. Once the waterfall of text stops and you are again looking at a command prompt, get the application set up using a grunt command.

```bash
grunt setup
```

Now everything is scaffolded out and you are ready to look at your handiwork. Do this by again using a little grunt.

```bash
grunt serve
```

Hopefully this helps you out!

## Contribute

This project was started and is maintained by [a guy](http://joelmccune.com) with a degree in Parks, Recreation and Tourism who happens to really like maps, GIS and is interested in web development. If you can help and make it better, please fork it, improve it and shoot me a pull request! I welcome assistance and input to make this a better resource for everybody.

# License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.