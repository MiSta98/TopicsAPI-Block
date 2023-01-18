'use strict';
// Inject topicsblock.js
const injected = document.createElement('script');
injected.src = chrome.extension.getURL('dist/topicsblock.js');
(document.head || document.documentElement).appendChild(injected);