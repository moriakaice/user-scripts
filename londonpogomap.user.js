// ==UserScript==
// @name         LondonPogoMap Enchancer
// @namespace    https://github.com/moriakaice/user-scripts
// @version      1.0.0
// @description  Icons for LondonPogoMap + expand the map area
// @author       moriakaice
// @match        https://londonpogomap.com/*
// @grant        none
// ==/UserScript==

(function ($) {
  $('#overlay').remove(); $('#please_top').remove(); $('#please_bottom').remove(); $('#map').attr('style', '');$('#toast-container').attr('style', 'display: none;');

  for (var i = 1; i < 1000; i++) { localStorage.setItem('icon' + i, '//pkmref.com/images/set_1/'+i+'.png'); }
})($);
