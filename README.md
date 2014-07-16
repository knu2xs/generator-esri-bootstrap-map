# generator-esri-bootstrap-map

Esri created [Esri-Bootstrap-Map-JS](https://github.com/Esri/bootstrap-map-js), a really slick set of templates combining [Twitter Bootstrap](http://getbootstrap.com) and the [Esri ArcGIS JavaScript API](https://developers.arcgis.com/javascript/). Although the project comes with four templates, it took me the better part of an afternoon to get one of them working the first time around. It really should not be this difficult.

![App](https://raw.github.com/Esri/bootstrap-map-js/master/bootstrapmapjs.png)

Enter this project, a [Yeoman](http://yeoman.io/) Generator for Esri-Bootstrap-Map-JS. This project, Generator-Esri-Bootstrap-Map, marries Yeoman with slightly refactored versions of the four templates included in the original repository created by Esri. Using Yeoman cuts the learning curve from an afternoon to about five minutes to get up and running with these templates.

## 1) Installation

To utilize this project, you will need [Node.js](http://nodejs.org/) installed with [Yeoman](http://yeoman.io) and this generator, generator-esri-bootstrap-map installed in Yeoman. Fret not. Installation is much easier than installing ArcMap.

### 1-A) Install Node.js

Head over to [Node.js](http://nodejs.org/) and whack the big green install button right in the middle of the landing page. Run the install for your platform. You now have Node.js installed on your computer with the Node Package Manager. You will now use the node package manager to install Yeoman.

### 1-B) Install Yeoman
Installing Yeoman is pretty easy. Just enter the following command at the command prompt.

```bash
npm install -g yo
```

Although Yeoman does require and use both [Bower](http://bower.io) and [Grunt](http://gruntjs.com/), NPM takes care of downloading and installing these dependencies for you. Yes, NPM takes care of a lot of potential headaches for you.

### 1-C) Install this generator

Finally, to install generator-esri-bootstrap-map from npm, run:

```bash
npm install -g generator-esri-bootstrap-map
```


## 2) Use

To use this generator, first set up your project and start developing.

### 2-A)Project Setup

To use the generator, create a directory, navigate to it at the command line and scaffold your new web application by entering the following. 

```bash
yo esri-bootstrap-map
```

Now everything is ready to go. You are ready to look at your handiwork. Do this by again using a little grunt, and leave the command prompt open after issuing this command.

```bash
grunt serve
```

### 2-B) Develop Your Application with LiveReload 

While the command window is open after you started ```grunt serve```, every time you make a change to the web application and save, the browser will automatically reload to reflect your changes. The application is set up to be configured using the ```app/index.html```, ```app/js/map.js``` and ```app/css/syle.css``` files. If you modify and save any of these files, your browser will automatically reload to reflect your changes, hopefully further contributing to reducing your web mapping application development time.

## 3) Contribute

### 3-A) Code Cleanup

This project was started and is maintained by [a guy](http://joelmccune.com) with a degree in Parks, Recreation and Tourism who happens to really like maps, GIS and is interested in web development. If you can help and make it better, please fork it, improve it and shoot me a pull request! I welcome assistance and input to make this a better resource for everybody.

### 3-B) Create Another Template!

If you have a great template using bootstrap and the ArcGIS JavaScript API, please create a template and add it to this generator! To do this, create a template directory, add your files to the template directory, add your template to the generator file, and send me a pull request on GitHub.

#### Create Your Template Directory
 
Inside the repository, in the ```app/templates``` directory. Each template is in a seperate directory name prefixed with ```map-``` folowed by the name of the template. Hence, the fullmap template is in the ```map-fullmap``` template. To create your own template, just create another directory using this convention with your template name.

#### Create Your Template Files

After creating this directory, add three files for your template: ```_index.html```, ```_map.js``` and ```_style.css``` for your respective html, JavaScript and cascading style sheets. The generator looks for, copies and renames these files in the final product.

#### Add Your Template to The Generator Index File

Next, add the name of your template to the list of templates (choices) on line 26 of ```index.js```. Currently this list includes the four templates and looks like the following:

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

Just add the name of your template to this list. This name must match to the name of your template directory without the ```map-``` prefix.
 
#### Send A Pull Request

After you have this working, please shoot me a pull request. I welcome quality templates to be included in this generator! After all, it makes my life easier as well!

# License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.