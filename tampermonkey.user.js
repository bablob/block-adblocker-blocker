// ==UserScript==
// @name         Block AdBlocker Blocker
// @namespace    https://github.com/bablob/block-adblocker-blocker
// @version      0.3
// @description  Bloqueia os bloqueadores de AdBlocker
// @author       bablob
// @match        https://revistacasaejardim.globo.com/*
// @match        https://casavogue.globo.com/*
// @match        https://vogue.globo.com/*
// @match        https://epoca.globo.com/*
// @match        https://revistaautoesporte.globo.com/*
// @match        https://revistagalileu.globo.com/*
// @match        https://revistaglamour.globo.com/*
// @match        https://revistaquem.globo.com/*
// @match        https://revistamonet.globo.com/*
// @match        https://gq.globo.com/*
// @match        https://revistacrescer.globo.com/*
// @match        https://revistagloborural.globo.com/*
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @downloadURL  https://github.com/bablob/block-adblocker-blocker/raw/master/tampermonkey.user.js
// @updateURL    https://github.com/bablob/block-adblocker-blocker/raw/master/tampermonkey.user.js
// ==/UserScript==

(function() {
    'use strict';
    console.log('%c👋 Block AdBlocker Blocker: Esperando carregar...','padding:2px;background:yellow;color:black;font-weight:bold;font-size:1.1em;');

    // Function to wait page load
    var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url) {
            this.addEventListener('load', function() {
                console.log('XHR finished loading', method, url);
                runScript();
            });

            this.addEventListener('error', function() {
                console.log('XHR errored out', method, url);
            });
            origOpen.apply(this, arguments);
        };

    // Function to remove element
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    }
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    }
})();

function runScript(){
    document.getElementById('detecta-adblock').remove();
    document.getElementsByTagName("body")[0].style = 'overflow:auto'
    console.log('%c✅ Block AdBlocker Blocker: SUCESSO!','padding:20px;color:white;font-weight:bold;font-size:1.1em;background:green;');
};
