var n="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,d){a!=Array.prototype&&a!=Object.prototype&&(a[c]=d.value)},p="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,r=function(a,c){if(c){var d=p;a=a.split(".");for(var g=0;g<a.length-1;g++){var e=a[g];e in d||(d[e]={});d=d[e]}a=a[a.length-1];g=d[a];c=c(g);c!=g&&null!=c&&n(d,a,{configurable:!0,writable:!0,value:c})}},t=function(a){var c=0;return function(){return c<a.length?
{done:!1,value:a[c++]}:{done:!0}}},u=function(){u=function(){};p.Symbol||(p.Symbol=v)},w=function(a,c){this.l=a;n(this,"description",{configurable:!0,writable:!0,value:c})};w.prototype.toString=function(){return this.l};
var v=function(){function a(d){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new w("jscomp_symbol_"+(d||"")+"_"+c++,d)}var c=0;return a}(),y=function(){u();var a=p.Symbol.iterator;a||(a=p.Symbol.iterator=p.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&n(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(t(this))}});y=function(){}},x=function(a){y();a={next:a};a[p.Symbol.iterator]=function(){return this};return a},z=function(a){var c=
"undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:t(a)}},A=function(a,c){return Object.prototype.hasOwnProperty.call(a,c)};
r("WeakMap",function(a){function c(){}function d(b){A(b,e)||n(b,e,{value:new c})}function g(b){var h=Object[b];h&&(Object[b]=function(f){if(f instanceof c)return f;d(f);return h(f)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),h=Object.seal({}),f=new a([[b,2],[h,3]]);if(2!=f.get(b)||3!=f.get(h))return!1;f["delete"](b);f.set(h,4);return!f.has(b)&&4==f.get(h)}catch(m){return!1}}())return a;var e="$jscomp_hidden_"+Math.random();g("freeze");g("preventExtensions");g("seal");var l=
0,k=function(b){this.f=(l+=Math.random()+1).toString();if(b){b=z(b);for(var h;!(h=b.next()).done;)h=h.value,this.set(h[0],h[1])}};k.prototype.set=function(b,h){d(b);if(!A(b,e))throw Error("WeakMap key fail: "+b);b[e][this.f]=h;return this};k.prototype.get=function(b){return A(b,e)?b[e][this.f]:void 0};k.prototype.has=function(b){return A(b,e)&&A(b[e],this.f)};k.prototype["delete"]=function(b){return A(b,e)&&A(b[e],this.f)?delete b[e][this.f]:!1};return k});
r("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),h=new a(z([[b,"s"]]));if("s"!=h.get(b)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var f=h.entries(),m=f.next();if(m.done||m.value[0]!=b||"s"!=m.value[1])return!1;m=f.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!f.next().done?!1:!0}catch(q){return!1}}())return a;y();var c=new WeakMap,d=function(b){this.c={};this.a=
l();this.size=0;if(b){b=z(b);for(var h;!(h=b.next()).done;)h=h.value,this.set(h[0],h[1])}};d.prototype.set=function(b,h){b=0===b?0:b;var f=g(this,b);f.list||(f.list=this.c[f.id]=[]);f.entry?f.entry.value=h:(f.entry={next:this.a,previous:this.a.previous,head:this.a,key:b,value:h},f.list.push(f.entry),this.a.previous.next=f.entry,this.a.previous=f.entry,this.size++);return this};d.prototype["delete"]=function(b){b=g(this,b);return b.entry&&b.list?(b.list.splice(b.index,1),b.list.length||delete this.c[b.id],
b.entry.previous.next=b.entry.next,b.entry.next.previous=b.entry.previous,b.entry.head=null,this.size--,!0):!1};d.prototype.clear=function(){this.c={};this.a=this.a.previous=l();this.size=0};d.prototype.has=function(b){return!!g(this,b).entry};d.prototype.get=function(b){return(b=g(this,b).entry)&&b.value};d.prototype.entries=function(){return e(this,function(b){return[b.key,b.value]})};d.prototype.keys=function(){return e(this,function(b){return b.key})};d.prototype.values=function(){return e(this,
function(b){return b.value})};d.prototype.forEach=function(b,h){for(var f=this.entries(),m;!(m=f.next()).done;)m=m.value,b.call(h,m[1],m[0],this)};d.prototype[Symbol.iterator]=d.prototype.entries;var g=function(b,h){var f=h&&typeof h;"object"==f||"function"==f?c.has(h)?f=c.get(h):(f=""+ ++k,c.set(h,f)):f="p_"+h;var m=b.c[f];if(m&&A(b.c,f))for(b=0;b<m.length;b++){var q=m[b];if(h!==h&&q.key!==q.key||h===q.key)return{id:f,list:m,index:b,entry:q}}return{id:f,list:m,index:-1,entry:void 0}},e=function(b,
h){var f=b.a;return x(function(){if(f){for(;f.head!=b.a;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:h(f)};f=null}return{done:!0,value:void 0}})},l=function(){var b={};return b.previous=b.next=b.head=b},k=0;return d});
var B=function(){},C=function(a,c,d){return a.call.apply(a.bind,arguments)},D=function(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,g);return a.apply(c,e)}}return function(){return a.apply(c,arguments)}},E=function(a,c,d){E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C:D;return E.apply(null,arguments)},F=function(a,
c){function d(){}d.prototype=c.prototype;a.o=c.prototype;a.prototype=new d;a.prototype.constructor=a;a.m=function(g,e,l){for(var k=Array(arguments.length-2),b=2;b<arguments.length;b++)k[b-2]=arguments[b];return c.prototype[e].apply(g,k)}};var G=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a))};F(G,Error);G.prototype.name="CustomError";var H=function(a,c){a=a.split("%s");for(var d="",g=a.length-1,e=0;e<g;e++)d+=a[e]+(e<c.length?c[e]:"%s");G.call(this,d+a[g])};F(H,G);H.prototype.name="AssertionError";var I=function(a,c,d){if(!a){var g="Assertion failed";if(c){g+=": "+c;var e=Array.prototype.slice.call(arguments,2)}throw new H(""+g,e||[]);}return a};var J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),K=function(a,c){for(var d,g,e=1;e<arguments.length;e++){g=arguments[e];for(d in g)a[d]=g[d];for(var l=0;l<J.length;l++)d=J[l],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}};var L=function(){this.h=""};L.prototype.toString=function(){return"SafeScript{"+this.h+"}"};L.prototype.b=function(a){this.h=a};(new L).b("");var M=function(){this.j=""};M.prototype.toString=function(){return"SafeStyle{"+this.j+"}"};M.prototype.b=function(a){this.j=a};(new M).b("");var N=function(){this.i=""};N.prototype.toString=function(){return"SafeStyleSheet{"+this.i+"}"};N.prototype.b=function(a){this.i=a};(new N).b("");var O=function(){this.g=""};O.prototype.toString=function(){return"SafeHtml{"+this.g+"}"};O.prototype.b=function(a){this.g=a};(new O).b("<!DOCTYPE html>");(new O).b("");(new O).b("<br>");var P=function(a,c){var d=new FileReader;d.onloadend=function(){d.result&&c(d.result)};var g=new XMLHttpRequest;g.open("GET",a+"=s1200-rw");g.responseType="blob";g.onload=function(){4==g.readyState&&d.readAsDataURL(I(g.response))};g.send()},S=function(){Q(function(a){a.length?chrome.storage.local.clear(function(){chrome.storage.sync.get("lastId",function(c){var d=c.lastId&&c.lastId.id||0;R(d);var g=a[d]||a[0];g.image?P(g.image,function(e){chrome.storage.local.set({assetCount:a.length,currentAsset:{id:d,
image:e,info:g},nextAsset:{}})}):console.log("Initialization failed, no image found.")})}):console.log("Asset data is empty.")})},Q=function(a){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4==c.readyState){var d=JSON.parse(c.responseText);a(d)}};c.open("GET","https://www.gstatic.com/culturalinstitute/tabext/imax_2_1.json");try{c.send()}catch(d){console.log("Something went wrong. Couldn't load asset data.")}},R=function(a){var c={};c.lastId={id:a,timestamp:Date.now()};chrome.storage.sync.set(c,
B)},T={showAppsButton:!1,showDefaultTabLink:!1,showTopSitesButton:!0,turnoverModeDaily:!0},U=function(a){chrome.storage.sync.get("settings",function(c){var d={settings:T};K(d,c);a(d.settings)})};(function(){var a=["page","browser_action"],c=["chrome-extension://"+chrome.i18n.getMessage("@@extension_id")+"/index_compiled.html"],d=function(e,l,k){chrome.contextMenus.create({checked:e[l],contexts:a,documentUrlPatterns:c,id:l,parentId:k,title:chrome.i18n.getMessage(l),type:"radio"})},g=new Map;chrome.runtime.onMessage.addListener(E(function(e,l,k){if(void 0!==e.newTab){var b=g.get(l.tab.id);"number"==typeof b||g.set(l.tab.id,e.newTab);k(b)}else void 0!==e.updateTab?g.set(l.tab.id,e.updateTab):
void 0!==e.settingsUpdate&&"background"!=e.initiator&&(e=e.settingsUpdate,chrome.contextMenus.update("turnoverModeDaily",{checked:e.turnoverModeDaily}),chrome.contextMenus.update("turnoverModeAlways",{checked:e.turnoverModeAlways}))},this));chrome.tabs.onRemoved.addListener(function(e){g["delete"](e.id)});chrome.contextMenus.onClicked.addListener(function(e){e.menuItemId&&U(function(l){if("root"==e.parentMenuItemId){var k="turnoverModeDaily"==e.menuItemId&&e.checked;l.turnoverModeDaily=k;l.turnoverModeAlways=
!k}else l[e.menuItemId]=e.checked;k={};k.settings=l;chrome.storage.sync.set(k,B);k={};k.settingsUpdate=l;k.initiator="background";chrome.runtime.sendMessage(k)})});chrome.browserAction.onClicked.addListener(function(){chrome.tabs.create({url:"https://artsandculture.google.com?utm_source=chrome_extension&utm_medium=default_link&utm_campaign=chrome_extension_2"})});chrome.runtime.onInstalled.addListener(E(function(){S();U(function(e){chrome.contextMenus.create({contexts:a,documentUrlPatterns:c,id:"root",
title:chrome.i18n.getMessage("turnoverGroup")});d(e,"turnoverModeDaily","root");d(e,"turnoverModeAlways","root")})},this))})();
