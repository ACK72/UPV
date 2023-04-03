// Injects the script.js file into the page
const s = document.createElement('script');
s.src = chrome.runtime.getURL('lib/script.js');
s.onload = () => { this.remove() };
(document.head || document.documentElement).appendChild(s);