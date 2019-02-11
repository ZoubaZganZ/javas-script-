'use strict';

let appVersion = document.createElement('span');
appVersion.innerHTML = "Nom du navigateur : " + window.navigator.appVersion;
document.querySelector('#js-navigator').appendChild(appVersion);

let language = document.createElement('span');
language.innerHTML = "Language preferer : " + window.navigator.language;
document.querySelector('#js-language').appendChild(language);

let platform = document.createElement('span');
platform.innerHTML = "Plateforme de mon ordinateur : " + window.navigator.platform;
document.querySelector('#js-platform').appendChild(platform);

let cookie = document.createElement('span');
cookie.innerHTML = "Est-ce que les cookies sont activé : " + window.navigator.cookieEnabled;
document.querySelector('#js-cookies').appendChild(cookie);

let largeur = document.createElement('span');
largeur.innerHTML = "Largeur de l'écran : " + window.screen.availWidth;
document.querySelector('#js-largeur').appendChild(largeur);

let hauteur = document.createElement('span');
hauteur.innerHTML = "Hauteur de l'écran : " + window.screen.availHeight;
document.querySelector('#js-hauteur').appendChild(hauteur);

let orientation = document.createElement('span');
orientation.innerHTML = "Orientation de l'écran : " + window.screen.orientation.type;
document.querySelector('#js-orientation').appendChild(orientation);

let largeurwindow = document.createElement('span');
largeurwindow.innerHTML = "Largeur de la fenêtre d'affichage de votre navigateur : " + window.innerWidth;
document.querySelector('#js-largeur-window').appendChild(largeurwindow);

let hauteurwindow = document.createElement('span');
hauteurwindow.innerHTML = "Hauteur de la fenêtre d'affichage de votre navigateur : " + window.innerHeight;
document.querySelector('#js-hauteur-window').appendChild(hauteurwindow);

let largeurnavigator = document.createElement('span');
largeurnavigator.innerHTML = "Largeur de votre navigateur : " + window.outerWidth;
document.querySelector('#js-largeur-navigator').appendChild(largeurnavigator);

let hauteurnavigator = document.createElement('span');
hauteurnavigator.innerHTML = "Hauteur de votre navigateur : " + window.outerHeight;
document.querySelector('#js-hauteur-navigator').appendChild(hauteurnavigator);

let jslocation = document.createElement('span');
jslocation.innerHTML = "Location : " + window.location.href;
document.querySelector('#js-location').appendChild(jslocation);

let jshost = document.createElement('span');
jshost.innerHTML = "Host : " + window.location.host;
document.querySelector('#js-host').appendChild(jshost);


let jsprotocol = document.createElement('span');
jsprotocol.innerHTML = "Protocole utilisé : " + window.location.protocol;
document.querySelector('#js-protocol').appendChild(jsprotocol);
