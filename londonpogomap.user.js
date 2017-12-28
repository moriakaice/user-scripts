// ==UserScript==
// @name         LondonPogoMap Enchancer
// @namespace    https://github.com/moriakaice/user-scripts
// @version      1.1.0
// @description  Icons for LondonPogoMap + expand the map area
// @author       moriakaice
// @match        https://londonpogomap.com/*
// @grant        none
// ==/UserScript==

(function ($) {
  $('#overlay').remove(); $('.please').remove(); $('#map').attr('style', '');

  var styles = document.createElement('style')
  styles.innerHTML = '#overlay, #toast-container, .please {display: none !important;}'
  document.querySelector('head').appendChild(styles)

  for (var i = 1; i < 1000; i++) { localStorage.setItem('icon' + i, '//pkmref.com/images/set_1/'+i+'.png'); }
})($);
