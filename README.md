INTRODUCTION 
===============

The name of this software module is ISN Mobler Cards. It is Mobile Web Application developed in ISN ETH Zurich and its main purpose is to run Learning Cards for Courses on an Ilias LMS. 


FEATURES
============

ISN Mobler Cards consists of a front-end and a backend module. The front-end module (client) provides the user interface of the application and enables the interaction of the end user with it.
The front end module's code and logic is structured according to an MVC architecture. The backend module is responsible for the communication between the mobile application and the server. 
It loads and sends data to the server.

HOW YOU CAN HELP
==================

We are always looking for translations of the language specific interfaces. 

Use the [textualStrings_en.properties](https://github.com/ISN-Zurich/ISN-Learning-Cards/blob/master/www/translations/textualStrings_en.properties) file as a reference for your translation.

- rename the file into "textualStrings_[YOU 2 LETTER LANGUAGE CODE].properties". 
- open the file with the text editor of your preference. 
- Translate all parts behind equal signs.
- Save the file and upload it to github and send a pull request.

Note: You can ignore lines that start with a hash character ('#'). 


INSTALLATION
=================

- Install Phonegap on various IDE's. More info can be found at : http://docs.phonegap.com/en/2.1.0/guide_getting-started_index.md.html#Getting%20Started%20Guides
- Download any external libraries.


GENERAL NOTES
=============

Mobler Cards is using the following external libaries:

- Phonegap/cordova: PhoneGap is an open source framework for quickly building cross-platform mobile apps using HTML5, Javascript and CSS.More info on http://phonegap.comg
- Jester: It is a javascript library for capturing and describing mobile gestures such as swipe, pinch, tab. More infob about
          this can be found on https://github.com/plainview/Jester REMARK: Mobler Cards uses a modified  and extended version of jester.
- JQuery: A javascript library that simplifies the way of handling various javascript notions such as: event handling, document traversing etc. More info on http://jquery.com
- JQuery- ui: It is built on top of jQuery and is used in mobler Cards to build mobile sorting gestures.
- jQuery.i18n.properties: A lightweight jquery plugin for localisation. There is list of .properties files in Mobler Cards
- icoMoon: An icon font app, that uses

GETTING SUPPORT
===============

For more information you can visit the wiki on https://github.com/ISN-Zurich/ISN-Learning-Cards/wiki 
or the issues page on https://github.com/ISN-Zurich/ISN-Learning-Cards/issues?state=open.


LICENSES
========

- The front end is licensed under  Apache License V2. The liense is available at http://www.apache.org/licenses/LICENSE-2.0.html and in www/LICENSES.TXT
- The back end is licensed under an Aferro GPL License. The license is available at http://www.gnu.org/licenses/agpl-3.0.html

COPYRIGHT
=========

Copyright 2012, ETH Zürich 


CONTRIBUTORS
=============

- Isabella Nake
- Evangelia Mitsopoulou
- Christian Glahn
- Reto Beat Schillinger
- Oderbolz Beat Emil
- Tim Wendel

Acknowledgements
===================

This software has been partially funded by the "Swiss ADL Research and Prototype Development” grant funded by 
the ADL Co-Lab and awarded by the Office of Naval Research Global (ONRG) under the Grant No. "N62909-12-1-7022".
The views and solutions expressed herein are solely those of the contributors and do not represent or reflect the 
views of any academic, government or industry organization mentioned herein.

