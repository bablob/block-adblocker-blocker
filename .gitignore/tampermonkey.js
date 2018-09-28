// ==UserScript==
// @name         Blcok AdBlocker Block
// @namespace    https://github.com/block-adblocker-blockers/block-adblocker-blockers
// @version      0.1
// @description  Bloqueia dos bloqueadores de AdBlocker
// @author       You
// @match        https://revistacasaejardim.globo.com/*
// @match        https://casavogue.globo.com/*
// @grant        none
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
