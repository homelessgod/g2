var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca=function(a,b){if(b){var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}};
ca("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});var k=this||self,l=function(a){return"string"==typeof a},m=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length},n=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea=function(a,b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(f,d);return a.apply(b,f)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return p.apply(null,arguments)},ha=Date.now||function(){return+new Date},ia=function(a,b){function c(){}c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.S=function(d,f,e){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];
return b.prototype[f].apply(d,h)}};var q=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,q);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};ia(q,Error);q.prototype.name="CustomError";var r=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,f=0;f<d;f++)c+=a[f]+(f<b.length?b[f]:"%s");q.call(this,c+a[d])};ia(r,q);r.prototype.name="AssertionError";var t=function(a,b,c){if(!a){var d="Assertion failed";if(b){d+=": "+b;var f=Array.prototype.slice.call(arguments,2)}throw new r(""+d,f||[]);}},u=function(a,b){throw new r("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var v=function(a,b){this.B=a===ja&&b||"";this.N=ka};v.prototype.c=!0;v.prototype.a=function(){return this.B};v.prototype.toString=function(){return"Const{"+this.B+"}"};var la=function(a){if(a instanceof v&&a.constructor===v&&a.N===ka)return a.B;u("expected object of type Const, got '"+a+"'");return"type_error:Const"},ka={},ja={};var x=function(){this.A="";this.O=ma};x.prototype.c=!0;x.prototype.a=function(){return this.A.toString()};x.prototype.toString=function(){return"TrustedResourceUrl{"+this.A+"}"};var ma={};var ua=function(a,b){if(b)a=a.replace(na,"&amp;").replace(oa,"&lt;").replace(pa,"&gt;").replace(qa,"&quot;").replace(ra,"&#39;").replace(sa,"&#0;");else{if(!ta.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(na,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(oa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ra,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sa,"&#0;"))}return a},na=/&/g,oa=/</g,pa=/>/g,qa=/"/g,ra=/'/g,
sa=/\x00/g,ta=/[\x00&<>"']/;var y=function(){this.s="";this.M=va};y.prototype.c=!0;y.prototype.a=function(){return this.s.toString()};y.prototype.toString=function(){return"SafeUrl{"+this.s+"}"};
var wa=function(a){if(a instanceof y&&a.constructor===y&&a.M===va)return a.s;u("expected object of type SafeUrl, got '"+a+"' of type "+m(a));return"type_error:SafeUrl"},xa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,za=function(a){if(a instanceof y)return a;a="object"==typeof a&&a.c?a.a():String(a);xa.test(a)||(a="about:invalid#zClosurez");return ya(a)},va={},ya=function(a){var b=new y;b.s=a;return b};ya("about:blank");var Aa=Array.prototype.indexOf?function(a,b){t(null!=a.length);return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ba=Array.prototype.forEach?function(a,b){t(null!=a.length);Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},Ca=Array.prototype.filter?function(a,b){t(null!=a.length);
return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],f=0,e=l(a)?a.split(""):a,h=0;h<c;h++)if(h in e){var g=e[h];b.call(void 0,g,h,a)&&(d[f++]=g)}return d},Da=Array.prototype.map?function(a,b){t(null!=a.length);return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f=l(a)?a.split(""):a,e=0;e<c;e++)e in f&&(d[e]=b.call(void 0,f[e],e,a));return d},Ea=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Fa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ha=function(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<Ga.length;e++)c=Ga[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ia={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var z=function(){this.v=""};z.prototype.c=!0;z.prototype.a=function(){return this.v.toString()};z.prototype.toString=function(){return"SafeScript{"+this.v+"}"};z.prototype.b=function(a){this.v=a;return this};(new z).b("");var A=function(){this.o="";this.L=Ja};A.prototype.c=!0;var Ja={};A.prototype.a=function(){return this.o};A.prototype.toString=function(){return"SafeStyle{"+this.o+"}"};A.prototype.b=function(a){this.o=a;return this};
var Ka=(new A).b(""),Ma=function(a){if(a instanceof y)return'url("'+wa(a).toString().replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof v?la(a):La(String(a));if(/[{;}]/.test(a))throw new r("Value does not allow [{;}], got: %s.",[a]);return a},La=function(a){var b=a.replace(Na,"$1").replace(Na,"$1").replace(Oa,"url");if(Pa.test(b)){if(Qa.test(a))return u("String value disallows comments, got: "+a),"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var f=a.charAt(d);"'"==f&&c?b=!b:'"'==f&&
b&&(c=!c)}if(!b||!c)return u("String value requires balanced quotes, got: "+a),"zClosurez";if(!Ra(a))return u("String value requires balanced square brackets and one identifier per pair of brackets, got: "+a),"zClosurez"}else return u("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: "+a),"zClosurez";return Sa(a)},Ra=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var f=a.charAt(d);if("]"==f){if(b)return!1;b=!0}else if("["==f){if(!b)return!1;b=!1}else if(!b&&
!c.test(f))return!1}return b},Pa=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Oa=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,Na=/\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,Qa=/\/\*/,Sa=function(a){return a.replace(Oa,function(b,c,d,f){var e="";d=d.replace(/^(['"])(.*)\1$/,function(h,g,w){e=g;return w});b=za(d).a();return c+e+b+e+f})};var B=function(){this.w=""};B.prototype.c=!0;B.prototype.a=function(){return this.w};B.prototype.toString=function(){return"SafeStyleSheet{"+this.w+"}"};B.prototype.b=function(a){this.w=a;return this};(new B).b("");var C;a:{var Ta=k.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){C=Ua;break a}}C=""}var D=function(a){return-1!=C.indexOf(a)};var E=function(){this.m="";this.K=Va};E.prototype.c=!0;E.prototype.a=function(){return this.m.toString()};E.prototype.toString=function(){return"SafeHtml{"+this.m+"}"};
var F=function(a){if(a instanceof E&&a.constructor===E&&a.K===Va)return a.m;u("expected object of type SafeHtml, got '"+a+"' of type "+m(a));return"type_error:SafeHtml"},Wa=/^[a-zA-Z0-9-]+$/,Xa={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},Ya={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Za=function(a){if(!Wa.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toUpperCase()in Ya)throw Error("Tag name <"+
a+"> is not allowed for SafeHtml.");},Va={};E.prototype.b=function(a){this.m=a;return this};(new E).b("<!DOCTYPE html>");var $a=(new E).b("");(new E).b("<br>");var ab={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},bb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=F($a);return!b.parentElement});var G=function(a){return a=ua(a,void 0)};var H=function(){this.I={};this.H=0};H.prototype.format=function(a){var b=[],c=G("SafeHtmlFormatter:");a=G(a).replace(new RegExp("\\{"+c+"[\\w&#;]+\\}","g"),p(this.R,this,b));t(0==b.length,"Expected no unclosed tags, got <"+b.join(">, <")+">.");return(new E).b(a)};
H.prototype.R=function(a,b){var c=this.I[b];if(!c)return b;b="";c.g&&(b+="<"+c.g+c.attributes+">",!0===Ia[c.g.toLowerCase()]||a.push(c.g.toLowerCase()));c.j&&(b+=c.j);c.f&&(b+="</"+c.f+">",a=a.pop(),t(a==c.f.toLowerCase(),"Expected </"+a+">, got </"+c.f+">."));return b};
H.prototype.g=function(a,b){Za(a);var c="";if(b)for(var d in b){if(!Wa.test(d))throw Error('Invalid attribute name "'+d+'".');var f=b[d];if(null!=f){var e=a;var h=d;var g=f;if(g instanceof v)g=la(g);else if("style"==h.toLowerCase()){f=void 0;e=g;if(!n(e))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof e+" given: "+e);if(!(e instanceof A)){g="";for(f in e){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("Name allows only [-_a-zA-Z0-9], got: "+f);var w=
e[f];null!=w&&(w="array"==m(w)?Da(w,Ma).join(" "):Ma(w),g+=f+":"+w+";")}e=g?(new A).b(g):Ka}e instanceof A&&e.constructor===A&&e.L===Ja?f=e.o:(u("expected object of type SafeStyle, got '"+e+"' of type "+m(e)),f="type_error:SafeStyle");g=f}else{if(/^on/i.test(h))throw Error('Attribute "'+h+'" requires goog.string.Const value, "'+g+'" given.');if(h.toLowerCase()in Xa)if(g instanceof x)g instanceof x&&g.constructor===x&&g.O===ma?f=g.A:(u("expected object of type TrustedResourceUrl, got '"+g+"' of type "+
m(g)),f="type_error:TrustedResourceUrl"),g=f.toString();else if(g instanceof y)g=wa(g).toString();else if(l(g))g=za(g).a();else throw Error('Attribute "'+h+'" on tag "'+e+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+g+'" given.');}g.c&&(g=g.a());t(l(g)||"number"==typeof g,"String or number value expected, got "+typeof g+" with value: "+g);h=h+'="'+ua(String(g))+'"';c+=" "+h}}return I(this,{g:a,attributes:c})};H.prototype.f=function(a){Za(a);return I(this,{f:a})};
H.prototype.text=function(a){return I(this,{j:G(a)})};var I=function(a,b){a.H++;var c="{SafeHtmlFormatter:"+a.H+"_"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ha()).toString(36))+"}";a.I[G(c)]=b;return c};var cb=D("Opera"),J=D("Trident")||D("MSIE"),db=D("Edge"),eb=D("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),fb=-1!=C.toLowerCase().indexOf("webkit")&&!D("Edge"),gb=function(){var a=k.document;return a?a.documentMode:void 0},K;
a:{var L="",M=function(){var a=C;if(eb)return/rv:([^\);]+)(\)|;)/.exec(a);if(db)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();M&&(L=M?M[1]:"");if(J){var N=gb();if(null!=N&&N>parseFloat(L)){K=String(N);break a}}K=L}var hb=K,ib;var jb=k.document;ib=jb&&J?gb()||("CSS1Compat"==jb.compatMode?parseInt(hb,10):5):void 0;var O=function(a,b,c){this.reset(a,b,c,void 0,void 0)};O.prototype.C=null;var kb=0;O.prototype.reset=function(a,b,c,d,f){"number"==typeof f||kb++;d||ha();this.i=a;this.P=b;delete this.C};O.prototype.J=function(a){this.i=a};O.prototype.getMessage=function(){return this.P};var P=function(a){this.G=a;this.D=this.u=this.i=this.l=null},Q=function(a,b){this.name=a;this.value=b};Q.prototype.toString=function(){return this.name};var lb=new Q("WARNING",900),mb=new Q("INFO",800),nb=new Q("CONFIG",700);P.prototype.getName=function(){return this.G};P.prototype.getParent=function(){return this.l};P.prototype.getChildren=function(){this.u||(this.u={});return this.u};P.prototype.J=function(a){this.i=a};
var ob=function(a){if(a.i)return a.i;if(a.l)return ob(a.l);u("Root logger has no level set.");return null};P.prototype.log=function(a,b,c){if(a.value>=ob(this).value)for("function"==m(b)&&(b=b()),a=new O(a,String(b),this.G),c&&(a.C=c),c=this;c;){var d=c,f=a;if(d.D)for(var e=0;b=d.D[e];e++)b(f);c=c.getParent()}};P.prototype.info=function(a,b){this.log(mb,a,b)};
var R={},S=null,pb=function(a){S||(S=new P(""),R[""]=S,S.J(nb));var b;if(!(b=R[a])){b=new P(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=pb(a.substr(0,c));c.getChildren()[d]=b;b.l=c;R[a]=b}return b};var T;T=pb("secureconnect.ErrorState");var U=new H;function V(a){var b=chrome.i18n?chrome.i18n.getMessage(a):"";return void 0===b?(T&&T.log(lb,"I18n key not found: "+a,void 0),U.format("Error: Ui text not found")):U.format(b)}
var qb={name:"OK",priority:0,message:U.format(""),visualErrorLevel:"normal"},rb={name:"SYNCING_ERROR",priority:100,message:V("syncing_error_text"),visualErrorLevel:"severe"},sb={name:"NO_USERS",priority:200,message:U.format(""),visualErrorLevel:"warning"},tb={name:"PLATFORM_KEYS_DISABLED",priority:290,message:V("platform_keys_disabled_text"),visualErrorLevel:"severe"},ub={name:"NOT_ADMIN_INSTALLED",priority:295,message:V("not_admin_installed_text"),visualErrorLevel:"severe"},vb={name:"NATIVE_HELPER_ERROR",
priority:300,message:U.format(I(U,{j:F(V("native_helper_error_text")).toString()})+" "+U.g("a",{href:D("Macintosh")?"https://dl.google.com/dl/secureconnect/install/mac/EndpointVerification.dmg":D("Windows")?"https://dl.google.com/dl/secureconnect/install/win/EndpointVerification_regular.msi":"https://www.google.com",target:"_blank"})+I(U,{j:F(V("native_helper_install_text")).toString()})+U.f("a")),visualErrorLevel:"severe"},wb={name:"UNSUPPORTED_PLATFORM",priority:400,message:V("unsupported_platform_text"),
visualErrorLevel:"severe"},xb={name:"NO_CONSENT",priority:500,message:U.format(""),visualErrorLevel:"warning"},yb={OK:qb,SYNCING_ERROR:rb,NO_USERS:sb,PLATFORM_KEYS_DISABLED:tb,NOT_ADMIN_INSTALLED:ub,NATIVE_HELPER_ERROR:vb,UNSUPPORTED_PLATFORM:wb,NO_CONSENT:xb};var zb=function(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]},Ab=function(a){a.classList?a=a.classList.contains("invisible"):(a=zb(a),a=0<=Aa(a,"invisible"));return a},Bb=function(){var a=W("loading-spinner");a.classList?a.classList.remove("invisible"):Ab(a)&&(a.className=Ca(zb(a),function(b){return"invisible"!=b}).join(" "))};var X;(X=!J)||(X=9<=Number(ib));var Cb=X;var W=function(a){var b=document;return l(a)?b.getElementById(a):a},Eb=function(a,b){Fa(b,function(c,d){c&&"object"==typeof c&&c.c&&(c=c.a());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Db.hasOwnProperty(d)?a.setAttribute(Db[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})},Db={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",
role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Y=function(a,b,c){var d=arguments,f=document,e=String(d[0]),h=d[1];if(!Cb&&h&&(h.name||h.type)){e=["<",e];h.name&&e.push(' name="',G(h.name),'"');if(h.type){e.push(' type="',G(h.type),'"');var g={};Ha(g,h);delete g.type;h=g}e.push(">");e=e.join("")}e=f.createElement(e);h&&(l(h)?e.className=h:"array"==m(h)?e.className=h.join(" "):Eb(e,h));2<d.length&&Fb(f,e,d);return e},Fb=function(a,b,c){function d(g){g&&b.appendChild(l(g)?
a.createTextNode(g):g)}for(var f=2;f<c.length;f++){var e=c[f];if(!da(e)||n(e)&&0<e.nodeType)d(e);else{a:{if(e&&"number"==typeof e.length){if(n(e)){var h="function"==typeof e.item||"string"==typeof e.item;break a}if("function"==m(e)){h="function"==typeof e.item;break a}}h=!1}Ba(h?Ea(e):e,d)}}};var Z=function(a,b){a.style.display=b?"":"none"};var Gb=function(){this.F=!1;this.h={}};Gb.prototype.start=function(){var a=this;document.addEventListener("DOMContentLoaded",function(){return Hb(a)})};
var Hb=function(a){document.querySelector("#signin-button").addEventListener("click",function(){chrome.tabs.create({url:"https://accounts.google.com/addsession"})});document.querySelector("#sync-button").addEventListener("click",function(){chrome.runtime.sendMessage({action:"sendDeviceState",forceSync:!0})});document.querySelectorAll("[data-i18n]").forEach(function(b){b.textContent=chrome.i18n.getMessage(b.getAttribute("data-i18n"))||"Error: Ui text not found"});chrome.runtime.sendMessage({action:"getConsentStatus"},
function(b){if("yes"===b)Ib(a),Jb();else{document.querySelector("#consent-button-dismiss").addEventListener("click",function(){return Kb(a)});document.querySelector("#consent-button-no").addEventListener("click",function(){window.close()});document.querySelector("#consent-button-yes").addEventListener("click",function(){return Kb(a)});if(b="notice"===b)chrome.runtime.sendMessage({action:"recordUserConsent"}),Jb();Lb(!0,b)}})},Ib=function(a){chrome.runtime.connect({name:"accounts"}).onMessage.addListener(function(b){return Mb(a,
b)});chrome.runtime.connect({name:"errorStatus"}).onMessage.addListener(function(b){var c=yb[b];if(void 0!==c){var d=W("error"),f=W("sync-button"),e="NO_USERS"===b;Z(W("signin"),e);Z(W("sync"),!e);if("OK"===b||"NO_USERS"===b)f.disabled=!1,Z(d,!1);else{f.disabled="SYNCING_ERROR"!==b;Z(d,!0);for(b=W("error-desc");b.firstChild;)b.removeChild(b.firstChild);if(ab[b.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+b.tagName+".");c=c.message;if(bb())for(;b.lastChild;)b.removeChild(b.lastChild);
b.innerHTML=F(c)}}});chrome.runtime.connect({name:"isSyncing"}).onMessage.addListener(function(b){void 0!==b&&(b?Bb():(b=W("loading-spinner"),b.classList?b.classList.add("invisible"):Ab(b)||(b.className+=0<b.className.length?" invisible":"invisible")))})},Jb=function(){chrome.runtime.sendMessage({action:"checkEnabledStatus"});chrome.runtime.sendMessage({action:"sendDeviceState",forceSync:!1})},Lb=function(a,b){Z(W("consent-button-dismiss"),b);Z(W("consent-button-no"),!b);Z(W("consent-button-yes"),
!b);Z(W("consent"),a);Z(W("sync"),!a)},Nb=function(a){return Y("LI",{"class":"mdl-list__item mdl-list__item--two-line popup"},Y("SPAN",{"class":"mdl-list__item-primary-content popup"},Y("IMG",{"class":"mdl-list__item-avatar popup",src:a.photoUrl,height:36,width:36}),Y("SPAN",{"class":"account-name mdl-list__item-title popup",textContent:a.displayName}),Y("SPAN",{"class":"account-email mdl-list__item-sub-title popup",textContent:a.email})))},Mb=function(a,b){if(b){a.F||(a.F=!0,chrome.runtime.connect({name:"syncingStatus"}).onMessage.addListener(function(e){e&&
e.isSyncValid&&a.h.hasOwnProperty(e.gaiaId)&&(a.h[e.gaiaId]=e.syncDate,Ob(a))}));var c=b.enabledAccounts;if(c&&0!=c.length){c.forEach(function(e){a.h.hasOwnProperty(e.gaiaId)||(a.h[e.gaiaId]=0)});Z(W("accounts-list"),!0);Z(W("spinner"),!1);for(b=W("accounts-list");b.firstChild;)b.removeChild(b.firstChild);for(var d=0;d<c.length;d++)b.appendChild(Nb(c[d]))}else if((c=b.signedInAccounts)&&0!=c.length){Z(W("signin-tooltip"),!0);for(b=W("signin-accounts-list");b.firstChild;)b.removeChild(b.firstChild);
d=Math.min(c.length,4);for(var f=0;f<d;f++)b.appendChild(Y("LI",{"class":"mdl-list__item tooltip"},Y("SPAN",{"class":"mdl-list__item-primary-content tooltip"},Y("SPAN",{"class":"mdl-list__item-title tooltip",textContent:c[f].email}))))}else Z(W("signin-tooltip"),!1)}},Ob=function(a){a=Object.values(a.h).reduce(function(b,c){return b<c?b:c});W("sync-status").textContent=0!=a?chrome.i18n.getMessage("last_sync_date")+": "+(new Date(a)).toLocaleString():chrome.i18n.getMessage("no_sync_date")},Kb=function(a){chrome.runtime.sendMessage({action:"recordUserConsent"});
Lb(!1,!1);Ib(a);Jb()};(new Gb).start();
