# MapstoreExtension pour geOrchestra RM

:gb: [English Version](https://github.com/sigrennesmetropole/geor_MapstoreExtension/tree/RM/RTGE_main).

## I - Généralités

Ce projet est utilisé par Rennes Métropole dans le cadre de la réalisation de ses plugins personnalisés pour Mapstore2. Ce dépôt contient leurs fichiers de paramétrage (configuration et traductions). Il est complété par les dépôts relatifs à chacun des plugins (comme sous-modules), nommés geor_nomPlugin_Mapstore, qui contiennent leurs code JS.

## II - Utilisation du présent dépôt

**II.1 - Organisation du dépôt**

Ce dépôt est un clone du dépôt MapstoreExtension de geosolutions-it utilisé comme Template pour la création des plugins personnalisés de Mapstore2. 

A ce dépôt sont ajoutés : 

-	Le sous-module mapstore2-georchestra, utilisé pour la compatibilité du plugin avec la version de Mapstore2 pour geOrchestra ;
-	Les sous-modules geor_nomPlugin_Mapstore, utilisés pour référencer le code des plugins personnalisés. Le sous-module varie selon la branche sélectionnée.

Pour chaque plugin plusieurs branches sont disponibles : 

-	La branche RM/nomPlugin_main : est la branche qui contient les fichiers de paramétrage des développements en cours
-	Autant de branches RM/nomPlugin_v.numVersion que de versions : contiennent le paramétrage du plugin pour chaque release officielle du plugin visé.


**II.2 - Utilisation du dépôt**

II.2.1 - Mise en place du dépôt

Pour mettre en place ce dépôt il faut suivre la procédure suivante : 

`git clone --recursive https://github.com/sigrennesmetropole/geor_MapstoreExtension`

Puis aller dans le dossier créé

`cd geor_MapstoreExtension/`

Puis il faut sélectionner la bonne branche

`git checkout RM/nomPlugin_v.VersionNum`

Où NumVersion est le numéro de release souhaité. Il faut par la suite installer les dépendances.

Il faut s'assurer d'avoir une version de NodeJS supérieure à node 12.16.1, puis suivre la procédure suivante : 

```
npm i
npm run fe:start
```
L'application est accessible via http://localhost:8081

II.2.2 - Configuration

La gestion des proxies se tient dans ./proxyConfig.js

La gestion des locales se tient dans ./assets/translations/data.lang-LANG.json

La gestion de la configuration en build pour l'utilisation locale se fait dans ./configs/localConfig.json

La gestion de la configuration pour le build de production 

## II.3 - Déploiement et installation des plugins

Le déploiement et l'installation des plugins personnalisés sont gérés à partir des dépôts associés à chaque plugin : geor_nomPlugin_Mapstore. Le détail de ces opérations est détaillé dans les readme de ces dépôts.
