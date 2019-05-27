// Copyright 2014 Google Inc. All Rights Reserved.
(function(){var h=this,k=function(a){return"string"==typeof a},l=function(a){return"number"==typeof a},aa=/^[\w+/_-]+[=]{0,2}$/,m=null,p=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==
c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var r=function(a){if(!l(a))throw"Invalid overlayId";return{type:"ptb_find_clickstrings",overlayId:a}};var t=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=k(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},u=function(a){return Array.prototype.concat.apply([],arguments)},ca=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var v=function(a){if(!da.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ea,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(fa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ha,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ia,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ja,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ka,"&#0;"));return a},ea=/&/g,fa=/</g,ha=/>/g,ia=/"/g,ja=/'/g,ka=/\x00/g,da=/[\x00&<>"']/,la=2147483648*Math.random()|0;var w;a:{var x=h.navigator;if(x){var y=x.userAgent;if(y){w=y;break a}}w=""};var ma=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),na=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<z.length;e++)c=z[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var oa=-1!=w.indexOf("Opera"),A=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),pa=-1!=w.indexOf("Edge"),qa=-1!=w.indexOf("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge"))&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"))&&-1==w.indexOf("Edge"),ra=-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge"),B=function(){var a=h.document;return a?a.documentMode:void 0},C;
a:{var D="",E=function(){var a=w;if(qa)return/rv:([^\);]+)(\)|;)/.exec(a);if(pa)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ra)return/WebKit\/(\S+)/.exec(a);if(oa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();E&&(D=E?E[1]:"");if(A){var F=B();if(null!=F&&F>parseFloat(D)){C=String(F);break a}}C=D}var sa=C,G;var H=h.document;G=H&&A?B()||("CSS1Compat"==H.compatMode?parseInt(sa,10):5):void 0;var I;(I=!A)||(I=9<=Number(G));var ta=I;var K=function(){this.i="";this.a=J};K.prototype.l=!0;var J={},L=function(a){var b=new K;b.i=a;return b};L("");var M=function(a,b){b instanceof K&&b.constructor===K&&b.a===J?b=b.i:(p(b),b="type_error:SafeScript");a.text=b;if(null===m){a:{b=h.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&aa.test(b))break a;b=null}m=b||""}(b=m)&&a.setAttribute("nonce",b)};var ua=function(a,b){ma(b,function(b,d){b&&"object"==typeof b&&b.l&&(b=b.i);"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:N.hasOwnProperty(d)?a.setAttribute(N[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},N={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",
width:"width"},O=function(a,b,c){var d=arguments,f=document,e=String(d[0]),g=d[1];if(!ta&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',v(g.name),'"');if(g.type){e.push(' type="',v(g.type),'"');var n={};na(n,g);delete n.type;g=n}e.push(">");e=e.join("")}e=f.createElement(e);g&&(k(g)?e.className=g:"array"==p(g)?e.className=g.join(" "):ua(e,g));2<d.length&&va(f,e,d);return e},va=function(a,b,c){function d(c){c&&b.appendChild(k(c)?a.createTextNode(c):c)}for(var f=2;f<c.length;f++){var e=c[f];
!ba(e)||q(e)&&0<e.nodeType?d(e):t(wa(e)?ca(e):e,d)}},wa=function(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==p(a))return"function"==typeof a.item}return!1};var P=function(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof P)for(c=a.g(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};P.prototype.f=function(){Q(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};P.prototype.g=function(){Q(this);return this.a.concat()};
P.prototype.clear=function(){this.b={};this.c=this.a.length=0};P.prototype.remove=function(a){return R(this.b,a)?(delete this.b[a],this.c--,this.a.length>2*this.c&&Q(this),!0):!1};var Q=function(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];R(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var f={};for(c=b=0;b<a.a.length;)d=a.a[b],R(f,d)||(a.a[c++]=d,f[d]=1),b++;a.a.length=c}};P.prototype.get=function(a,b){return R(this.b,a)?this.b[a]:b};
P.prototype.set=function(a,b){R(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};P.prototype.forEach=function(a,b){for(var c=this.g(),d=0;d<c.length;d++){var f=c[d],e=this.get(f);a.call(b,e,f,this)}};var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var xa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ya=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),f=null;if(0<=d){var e=a[c].substring(0,d);f=a[c].substring(d+1)}else e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var S=function(a){this.b=this.a=null;this.c=a||null},T=function(a){a.a||(a.a=new P,a.b=0,a.c&&ya(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};S.prototype.add=function(a,b){T(this);this.c=null;a=String(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};S.prototype.remove=function(a){T(this);a=String(a);return R(this.a.b,a)?(this.c=null,this.b-=this.a.get(a).length,this.a.remove(a)):!1};S.prototype.clear=function(){this.a=this.c=null;this.b=0};
var U=function(a,b){T(a);b=String(b);return R(a.a.b,b)};S.prototype.forEach=function(a,b){T(this);this.a.forEach(function(c,d){t(c,function(c){a.call(b,c,d,this)},this)},this)};S.prototype.g=function(){T(this);for(var a=this.a.f(),b=this.a.g(),c=[],d=0;d<b.length;d++)for(var f=a[d],e=0;e<f.length;e++)c.push(b[d]);return c};S.prototype.f=function(a){T(this);var b=[];if(k(a))U(this,a)&&(b=u(b,this.a.get(String(a))));else{a=this.a.f();for(var c=0;c<a.length;c++)b=u(b,a[c])}return b};
S.prototype.set=function(a,b){T(this);this.c=null;a=String(a);U(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};S.prototype.get=function(a,b){if(!a)return b;a=this.f(a);return 0<a.length?String(a[0]):b};
S.prototype.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.g(),c=0;c<b.length;c++){var d=b[c],f=encodeURIComponent(String(d));d=this.f(d);for(var e=0;e<d.length;e++){var g=f;""!==d[e]&&(g+="="+encodeURIComponent(String(d[e])));a.push(g)}}return this.c=a.join("&")};var za=/^http[s]?:\/\/[\w\.\-~]+.(doubleclick\.net|googleadservices\.com)\/(aclk|pagead\/aclk|pagead\/conversion\/[0-9]+\/adclick|pagead\/adview)\?.*$/i,Aa=/^\/(aclk|pagead\/aclk|pagead\/conversion\/[0-9]+\/adclick|pagead\/adview)\?.*$/i,Ba=/vu\("(http[s]?:\/\/[\w\.\-~]+.(doubleclick\.net|googleadservices\.com)\/(aclk|pagead\/aclk|pagead\/conversion\/[0-9]+\/adclick|pagead\/adview)\?.*)"\)/i,V=/http[s]?:\/\/[\w\.\-~]+.doubleclick.net\/click(?:;|%3B).*sscs(?:=|%3D)%3f(http[s]?:\/\/[\w\.\-~]+.(doubleclick\.net|googleadservices\.com)\/(aclk|pagead\/aclk|pagead\/conversion\/[0-9]+\/adclick|pagead\/adview)\?.*)/i,
Ca=/http[s]?:\/\/[\w\.\-~]+.doubleclick.net\/.*;click=(http[s]?:\/\/[\w\.\-~]+.(doubleclick\.net|googleadservices\.com)\/(aclk|pagead\/aclk|pagead\/conversion\/[0-9]+\/adclick|pagead\/adview)\?.*)[;$]/i,Da=/(?:var web_property_code ?= ?"([^"]+)";)?var creative_info ?= ?"([^"]+)";/,W=function(a){var b=Ca.exec(a);if(b)return b[1];try{var c=decodeURIComponent(a.replace(/\\x([0-9A-Fa-f]{2})/g,"%$1")),d=Ba.exec(c);if(d)return d[1]}catch(X){}try{var f=decodeURIComponent(a),e=f.split(/&(amp;)/);for(b=0;b<
e.length;b++){var g=e[b],n=g.indexOf("=");if(0<=n)switch(g.substring(0,n)){case "clickTAG":case "google_click_url":return g.substring(n+1)}}var Y=V.exec(f);if(Y)return Y[1]}catch(X){}for(a=[a];0<a.length;){f=a.pop();if(za.test(f))return f;if(Aa.test(f))return"http://adclick.g.doubleclick.net"+f;if(e=V.exec(f))return e[1];try{var Z=f.match(xa)[6]||null;Z&&(a=a.concat((new S(Z)).f()))}catch(X){}}return null},Ia=function(a){var b=document.body,c=Ea;if(b){Fa(a,1);try{if("IFRAME"==b.tagName)Ga(b,a);else{var d=
Ha(b);d&&c(a,null,d);if("IMG"==b.tagName&&"A"==b.parentNode.tagName){var f=W(b.parentNode.attributes.getNamedItem("href").value);f&&c(a,f,d)}t(b.querySelectorAll("a,param"),function(b){t(b.attributes,function(b){(b=W(b.value))&&c(a,b,d)})});t(b.querySelectorAll("script"),function(b){b=b.innerText.replace(/\\x([0-9A-Fa-f]{2})/g,"%$1");(b=W(b))&&c(a,b,d)});t(b.querySelectorAll("iframe"),function(b){Ga(b,a,d)})}}finally{Fa(a,-1)}}},Fa=function(a,b){if(!l(a))throw"Invalid overlayId: "+a;if(!l(b)||1!=
b&&-1!=b)throw"Invalid delta: "+b;a={type:"ptb_clickstring_search_event",overlayId:a,delta:b};b=JSON.stringify(JSON.stringify(a));a&&(a="window.top.postMessage("+b+", '*');",b=O("SCRIPT"),M(b,L(a)),document.head.appendChild(b))},Ha=function(a){a=a.querySelector("script#PublisherToolbarAdInfo");return a?(a=Da.exec(a.innerText))?{h:a[2],j:a[1]||null}:null:null},Ga=function(a,b,c){var d=r(b);d&&(a.id||(a.id="goog_"+la++),b="("+function(a){if(a.impressionInfo){var b={type:a.type,overlayId:a.overlayId,
webPropertyCode:a.webPropertyCode,impressionInfo:a.impressionInfo,pbci:window.pbci&&window.pbci()};window.top.postMessage(JSON.stringify(b),"*")}document.getElementById(a.nodeId).contentWindow.postMessage(a.jsonMessage,"*")}+")("+JSON.stringify({type:"ptb_bow_data_found",overlayId:b,webPropertyCode:c&&c.j,impressionInfo:c&&c.h,nodeId:a.id,jsonMessage:JSON.stringify(d)})+");",a.ownerDocument!=document?Ja(b,a.ownerDocument):Ja(b))},Ja=function(a,b){b=b||document;var c=O("SCRIPT");M(c,L(a));b.head.appendChild(c)};var Ka=function(a){if(document.body){a:{try{var b=JSON.parse(a.data)}catch(c){a=null;break a}a="ptb_find_clickstrings"!=b.type?null:r(b.overlayId)}a&&Ia(a.overlayId)}},Ea=function(a,b,c){var d=null;if(b){d=c&&c.j;c=c&&c.h;if(!l(a))throw"Invalid overlayId";if(!k(b))throw"Invalid clickThroughUrl";if(c&&!k(c))throw"Invalid impressionInfo";if(d&&!k(d))throw"Invalid web property code: "+d;d={type:"ptb_found_clickstring",overlayId:a,clickThroughUrl:b,webPropertyCode:d||null,impressionInfo:c||null}}else if(c){b=
c.h;if(!l(a))throw"Invalid overlayId: "+a;if(!k(b))throw"Invalid impressionInfo: "+b;d={type:"ptb_bow_data_found",overlayId:a,webPropertyCode:c.j,impressionInfo:b,pbci:null}}d&&(a="window.top.postMessage("+JSON.stringify(JSON.stringify(d))+", '*');",b=O("SCRIPT"),M(b,L(a)),document.head.appendChild(b))};window.clickurl_listener||(window.addEventListener("message",Ka,!1),window.clickurl_listener=Ka);})();