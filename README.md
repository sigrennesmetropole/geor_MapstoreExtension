# geor_MapstoreExtension 

:fr: [Version française](https://github.com/sigrennesmetropole/geor_MapstoreExtension/blob/RM/RTGE_main/docs/README_FR.MD).

## I - General Information

This project is used by Rennes Métropole to create custom plugins for Mapstore2. This repository contains the parameters files of these plugins (configuration and translations). It is completed by the repositories of each plugins (as sub-modules), named geor_pluginName_Mapstore, which contain their JS code.

## II - Using this repository

**II.1 - Repository organization**

This repository is a clone of the geosolutions-it MapstoreExtension repository which is a Template for the development of Mapstore2 custom plugins.

The following sub-modules have been added to this repository:

-	Mapstore2-georchestra sub-module: used to make the plugin compatible with Mapstore2 for geOrchestra
-	geor_pluginName_Mapstore submodules: used to reference JS code of custom plugins. The sub-module varies according to the branch selected.

Several branches are available for each custom plugin:

-	RM/pluginName_main branch: contains configuration files for current developments
-	As many RM/pluginName_v.VersionNum branches as there are versions: each contains the plugin configuration files for each official release of the plugin.


**II.2 - Using the repository**

II.2.1 - Setting up the repository

To deploy this repository locally, the follow the steps below:

`git clone --recursive https://github.com/sigrennesmetropole/geor_MapstoreExtension`

Then go inside the created folder

`cd geor_MapstoreExtension/`

select the desired branch:

`git checkout RM/nomPlugin_v.VersionNum`

Where VersionNum is the desired release number. 

Then install the dependencies:

NodeJS >= 12.16.1 is needed

```
npm i
cd MapStore2
npm i
cd ../mapstore2-georchestra
npm i
npm run fe:start
```
The application runs at http://localhost:8081 afterwards.

II.2.2 - Settings

Proxies are managed in ./proxyConfig.js file.

Locales are managed in ./assets/translations/data.lang-LANG.json

Build configuration for local use is managed in ./configs/localConfig.json

Configuration for production build is managed in ./assets/index.json


## II.3 - Plugin deployment and installation

Deployment and installation of custom plugins are managed in each plugin repository: geor_pluginName_Mapstore. Details of these procedures are given in the readme of these repositories.
