var proxyLegacyGlobals=function(){function s(e){try{e()}catch(e){console.log(e)}}function u(e){return"1"===e}function l(n,e,u){var o=null;return new Proxy(e,{set:function(e,r,t){return o||(o={},setTimeout(function(){s(function(){u(n,o)}),o=null})),e[r]=t,o[r]=t,!0}})}function e(e,n,u,o,r){var i=function(e){return e&&e[o]&&(!r||r(e))},a={};return new Proxy(e,{set:function(e,r,t){return e[r]=t,delete a[r],i(t)&&s(function(){n(t[o],t)}),!0},deleteProperty:function(e,r){var t=e[r],n=i(t);delete e[r],n&&s(function(){u(t[o])})},get:function(e,r){var t=e[r];return i(t)?(a[r]||(a[r]=l(t[o],t,n)),a[r]):e[r]}})}var r=function(e){return"http://group"!==e.url},t=function(e,r){var t={};for(var n in e)r(e[n])&&(t[n]=e[n]);return t};return function(){"undefined"!=typeof Proxy&&reduxApp&&(g_sites=e(g_sites,reduxApp.writeSite,reduxApp.removeSite,"aid",r),reduxApp.writeDataRecord&&(g_securenotes=e(g_securenotes,reduxApp.writeDataRecord,reduxApp.removeDataRecord,"aid")),g_shares=e(g_shares,reduxApp.writeSharedFolder,reduxApp.removeSharedFolder,"id"),reduxApp.writeBlob({sites:t(g_sites,r),notes:g_securenotes,sharedFolders:g_shares,equivalentDomains:g_equivalentdomains,neverUrls:"undefined"==typeof g_neverurls?{}:g_neverurls,urlRules:"undefined"==typeof g_urlrules?[]:g_urlrules.map(function(e){var r=lp_gettld_url(e.url),t=lpParseUri(e.url),n="string"==typeof t.path?t.path:"";return{url:e.url,domain:r,path:n,exactHost:u(e.exacthost),exactPort:u(e.exactport)}})}))}}();