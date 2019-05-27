var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca=function(a,b){if(b){var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}};
ca("String.prototype.repeat",function(a){return a?a:function(b){if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");var c=this+"";if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});var l=this||self,m=function(a){return"string"==typeof a},da=function(){},n=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){return"array"==n(a)},q=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},r=Date.now||function(){return+new Date},t=function(a,b){function c(){}c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.na=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-
2]=arguments[h];return b.prototype[e].apply(d,g)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);u.prototype.name="CustomError";var v=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])};t(v,u);v.prototype.name="AssertionError";
var w=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new v(""+e,f||[]);},x=function(a,b,c){a||w("",null,b,Array.prototype.slice.call(arguments,2));return a},ea=function(a,b){throw new v("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},fa=function(a,b,c){"number"==typeof a||w("Expected number but got %s: %s.",[n(a),a],b,Array.prototype.slice.call(arguments,2));return a},ha=function(a,b,c){m(a)||w("Expected string but got %s: %s.",
[n(a),a],b,Array.prototype.slice.call(arguments,2));return a},ia=function(a,b,c){"function"==n(a)||w("Expected function but got %s: %s.",[n(a),a],b,Array.prototype.slice.call(arguments,2));return a},z=function(a,b,c){"boolean"==typeof a||w("Expected boolean but got %s: %s.",[n(a),a],b,Array.prototype.slice.call(arguments,2));return a};var ja=Array.prototype.indexOf?function(a,b){x(null!=a.length);return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(m(a))return m(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ka=Array.prototype.forEach?function(a,b){x(null!=a.length);Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},la=Array.prototype.map?function(a,b){x(null!=a.length);return Array.prototype.map.call(a,
b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=m(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d};var ma=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},na=function(a,b){return a<b?-1:a>b?1:0};var A;a:{var oa=l.navigator;if(oa){var pa=oa.userAgent;if(pa){A=pa;break a}}A=""}var B=function(a){return-1!=A.indexOf(a)};var qa=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),sa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ra.length;f++)c=ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},ta=function(a){var b=arguments.length;if(1==b&&p(arguments[0]))return ta.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=
!0;return c};var ua=function(){this.S=""};ua.prototype.toString=function(){return"SafeScript{"+this.S+"}"};ua.prototype.c=function(a){this.S=a};(new ua).c("");var va=function(){this.U=""};va.prototype.toString=function(){return"SafeStyle{"+this.U+"}"};va.prototype.c=function(a){this.U=a};(new va).c("");var wa=function(){this.T=""};wa.prototype.toString=function(){return"SafeStyleSheet{"+this.T+"}"};wa.prototype.c=function(a){this.T=a};(new wa).c("");var C=function(){this.R=""};C.prototype.toString=function(){return"SafeHtml{"+this.R+"}"};C.prototype.c=function(a){this.R=a};(new C).c("<!DOCTYPE html>");(new C).c("");(new C).c("<br>");var D=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};var xa=function(a){xa[" "](a);return a};xa[" "]=da;var ya=B("Opera"),E=B("Trident")||B("MSIE"),za=B("Edge"),F=B("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),G=-1!=A.toLowerCase().indexOf("webkit")&&!B("Edge"),Aa,Ba=l.navigator||null;Aa=Ba&&Ba.platform||"";var Ca=B("Macintosh"),H=B("Windows"),Da=function(){var a=l.document;return a?a.documentMode:void 0},Ea;
a:{var Fa="",Ga=function(){var a=A;if(F)return/rv:([^\);]+)(\)|;)/.exec(a);if(za)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(G)return/WebKit\/(\S+)/.exec(a);if(ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ga&&(Fa=Ga?Ga[1]:"");if(E){var Ha=Da();if(null!=Ha&&Ha>parseFloat(Fa)){Ea=String(Ha);break a}}Ea=Fa}var Ia=Ea,Ja={},Ka;var La=l.document;Ka=La&&E?Da()||("CSS1Compat"==La.compatMode?parseInt(Ia,10):5):void 0;var Ma=Object.freeze||function(a){return a};var Na;(Na=!E)||(Na=9<=Number(Ka));var Oa=Na,Pa;
if(Pa=E){var Qa;if(Object.prototype.hasOwnProperty.call(Ja,"9"))Qa=Ja["9"];else{for(var I=0,Ra=ma(String(Ia)).split("."),Sa=ma("9").split("."),Ta=Math.max(Ra.length,Sa.length),J=0;0==I&&J<Ta;J++){var Ua=Ra[J]||"",Va=Sa[J]||"";do{var K=/(\d*)(\D*)(.*)/.exec(Ua)||["","","",""],L=/(\d*)(\D*)(.*)/.exec(Va)||["","","",""];if(0==K[0].length&&0==L[0].length)break;I=na(0==K[1].length?0:parseInt(K[1],10),0==L[1].length?0:parseInt(L[1],10))||na(0==K[2].length,0==L[2].length)||na(K[2],L[2]);Ua=K[3];Va=L[3]}while(0==
I)}Qa=Ja["9"]=0<=I}Pa=!Qa}var Wa=Pa,Xa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",da,b),l.removeEventListener("test",da,b)}catch(c){}return a}();var Ya=function(){};var M=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1;this.V=!0};M.prototype.stopPropagation=function(){this.j=!0};M.prototype.preventDefault=function(){this.defaultPrevented=!0;this.V=!1};var N=function(a,b){M.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.o=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=
b;if(b=a.relatedTarget){if(F){a:{try{xa(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.offsetX=G||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=G||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=
void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=m(a.pointerType)?a.pointerType:Za[a.pointerType]||"";this.state=a.state;this.o=a;a.defaultPrevented&&this.preventDefault()}};t(N,M);
var Za=Ma({2:"touch",3:"pen",4:"mouse"});N.prototype.stopPropagation=function(){N.X.stopPropagation.call(this);this.o.stopPropagation?this.o.stopPropagation():this.o.cancelBubble=!0};N.prototype.preventDefault=function(){N.X.preventDefault.call(this);var a=this.o;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var O="closure_listenable_"+(1E6*Math.random()|0),$a=0;var bb=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.F=e;this.key=++$a;this.removed=this.D=!1},P=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.F=null};var Q=function(a){this.src=a;this.a={};this.C=0};Q.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.C++);var g=cb(a,b,d,e);-1<g?(b=a[g],c||(b.D=!1)):(b=new bb(b,this.src,f,!!d,e),b.D=c,a.push(b));return b};Q.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=cb(e,b,c,d);return-1<b?(P(e[b]),x(null!=e.length),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.C--),!0):!1};
var db=function(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ja(d,b),f;if(f=0<=e)x(null!=d.length),Array.prototype.splice.call(d,e,1);f&&(P(b),0==a.a[c].length&&(delete a.a[c],a.C--))}};Q.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,P(d[e]);delete this.a[c];this.C--}return b};Q.prototype.O=function(a,b,c,d){a=this.a[a.toString()];var e=-1;a&&(e=cb(a,b,c,d));return-1<e?a[e]:null};
Q.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return qa(this.a,function(f){for(var g=0;g<f.length;++g)if(!(c&&f[g].type!=d||e&&f[g].capture!=b))return!0;return!1})};var cb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.F==d)return e}return-1};var eb="closure_lm_"+(1E6*Math.random()|0),fb={},gb=0,R=function(a,b,c,d,e){if(d&&d.once)hb(a,b,c,d,e);else if(p(b))for(var f=0;f<b.length;f++)R(a,b[f],c,d,e);else c=ib(c),a&&a[O]?a.listen(b,c,q(d)?!!d.capture:!!d,e):jb(a,b,c,!1,d,e)},jb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=q(e)?!!e.capture:!!e,h=S(a);h||(a[eb]=h=new Q(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=kb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xa||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(lb(b.toString()),d);else if(a.addListener&&a.removeListener)x("change"===b,"MediaQueryList only has a change event"),a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");gb++}},kb=function(){var a=mb,b=Oa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},hb=function(a,b,c,d,e){if(p(b))for(var f=0;f<b.length;f++)hb(a,b[f],c,d,e);else c=ib(c),a&&a[O]?a.b.add(String(b),
c,!0,q(d)?!!d.capture:!!d,e):jb(a,b,c,!0,d,e)},nb=function(a,b,c,d,e){if(p(b))for(var f=0;f<b.length;f++)nb(a,b[f],c,d,e);else d=q(d)?!!d.capture:!!d,c=ib(c),a&&a[O]?a.b.remove(String(b),c,d,e):a&&(a=S(a))&&(b=a.O(b,c,d,e))&&ob(b)},ob=function(a){if("number"!=typeof a&&a&&!a.removed){var b=a.src;if(b&&b[O])db(b.b,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(lb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);gb--;(c=
S(b))?(db(c,a),0==c.C&&(c.src=null,b[eb]=null)):P(a)}}},lb=function(a){return a in fb?fb[a]:fb[a]="on"+a},qb=function(a,b,c,d){var e=!0;if(a=S(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.removed&&(f=pb(f,d),e=e&&!1!==f)}return e},pb=function(a,b){var c=a.listener,d=a.F||a.src;a.D&&ob(a);return c.call(d,b)},mb=function(a,b){if(a.removed)return!0;if(!Oa){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=
c}d=b;b=new N(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.j&&0<=e;e--){b.currentTarget=d[e];var f=qb(d[e],a,!0,b);c=c&&f}for(e=0;!b.j&&e<d.length;e++)b.currentTarget=d[e],f=qb(d[e],a,!1,b),c=c&&f}return c}return pb(a,new N(b,this))},S=function(a){a=a[eb];return a instanceof Q?a:null},rb="__closure_events_fn_"+
(1E9*Math.random()>>>0),ib=function(a){x(a,"Listener can not be null.");if("function"==n(a))return a;x(a.handleEvent,"An object listener must have handleEvent method.");a[rb]||(a[rb]=function(b){return a.handleEvent(b)});return a[rb]};var sb=function(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();if("undefined"==typeof d)throw Error("[goog.string.format] Template required");return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(e,f,g,h,y,X,Tb,Ub){if("%"==X)return"%";var ab=c.shift();if("undefined"==typeof ab)throw Error("[goog.string.format] Not enough arguments");arguments[0]=ab;return T[X].apply(null,arguments)})},T={s:function(a,b,c){return isNaN(c)||""==c||a.length>=Number(c)?a:a=-1<b.indexOf("-",
0)?a+D(" ",Number(c)-a.length):D(" ",Number(c)-a.length)+a},f:function(a,b,c,d,e){d=a.toString();isNaN(e)||""==e||(d=parseFloat(a).toFixed(e));var f=0>Number(a)?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=Number(a)&&(d=f+d);if(isNaN(c)||d.length>=Number(c))return d;d=isNaN(e)?Math.abs(Number(a)).toString():Math.abs(Number(a)).toFixed(e);a=Number(c)-d.length-f.length;return d=0<=b.indexOf("-",0)?f+d+D(" ",a):f+D(0<=b.indexOf("0",0)?"0":" ",a)+d},d:function(a,b,c,d,e,f,g,h){return T.f(parseInt(a,
10),b,c,d,0,f,g,h)}};T.i=T.d;T.u=T.d;var U=function(){this.b=new Q(this);this.Y=this;this.P=null};t(U,Ya);U.prototype[O]=!0;U.prototype.addEventListener=function(a,b,c,d){R(this,a,b,c,d)};U.prototype.removeEventListener=function(a,b,c,d){nb(this,a,b,c,d)};
U.prototype.dispatchEvent=function(a){tb(this);var b=this.P;if(b){var c=[];for(var d=1;b;b=b.P)c.push(b),x(1E3>++d,"infinite loop")}b=this.Y;d=a.type||a;if(m(a))a=new M(a,b);else if(a instanceof M)a.target=a.target||b;else{var e=a;a=new M(d,b);sa(a,e)}e=!0;if(c)for(var f=c.length-1;!a.j&&0<=f;f--){var g=a.currentTarget=c[f];e=V(g,d,!0,a)&&e}a.j||(g=a.currentTarget=b,e=V(g,d,!0,a)&&e,a.j||(e=V(g,d,!1,a)&&e));if(c)for(f=0;!a.j&&f<c.length;f++)g=a.currentTarget=c[f],e=V(g,d,!1,a)&&e;return e};
U.prototype.listen=function(a,b,c,d){tb(this);return this.b.add(String(a),b,!1,c,d)};var V=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.removed&&g.capture==c){var h=g.listener,y=g.F||g.src;g.D&&db(a.b,g);e=!1!==h.call(y,d)&&e}}return e&&0!=d.V};U.prototype.O=function(a,b,c,d){return this.b.O(String(a),b,c,d)};U.prototype.hasListener=function(a,b){return this.b.hasListener(void 0!==a?String(a):void 0,b)};
var tb=function(a){x(a.b,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var vb=function(a){if(F)a=ub(a);else if(Ca&&G)switch(a){case 93:a=91}return a},ub=function(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};var wb={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"caps-lock",27:"esc",32:"space",33:"pg-up",34:"pg-down",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:"semicolon",61:"equals",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",
93:"context",96:"num-0",97:"num-1",98:"num-2",99:"num-3",100:"num-4",101:"num-5",102:"num-6",103:"num-7",104:"num-8",105:"num-9",106:"num-multiply",107:"num-plus",109:"num-minus",110:"num-period",111:"num-division",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",186:"semicolon",187:"equals",189:"dash",188:",",190:".",191:"/",192:"`",219:"open-square-bracket",220:"\\",221:"close-square-bracket",222:"single-quote",224:"win"};var xb=function(a,b,c,d,e,f,g,h,y,X){this.g=a;this.H=b;this.K=c;this.l=d;this.m=e;this.A=f;this.B=g;this.J=h;this.h=y;this.M=X};xb.prototype.getKey=function(){return this.H};
var Db=function(a){var b=a.o;b=(b="composed"in b&&"composedPath"in b&&b.composed&&b.composedPath())&&0<b.length?b[0]:a.target;return yb(zb(Ab(Bb((new Cb).keyCode(a.keyCode||0).key(a.key||"").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target),b),function(){return a.preventDefault()}),function(){return a.stopPropagation()}))},Cb=function(){this.g=null;this.H="";this.M=this.h=this.J=this.B=this.A=this.m=this.l=this.K=null};k=Cb.prototype;
k.keyCode=function(a){this.g=a;return this};k.key=function(a){this.H=a;return this};k.shiftKey=function(a){this.K=a;return this};k.altKey=function(a){this.l=a;return this};k.ctrlKey=function(a){this.m=a;return this};k.metaKey=function(a){this.A=a;return this};k.target=function(a){this.B=a;return this};var Bb=function(a,b){a.J=b;return a},Ab=function(a,b){a.h=b;return a},zb=function(a,b){a.M=b;return a},yb=function(a){return new xb(fa(a.g),a.H,z(a.K),z(a.l),z(a.m),z(a.A),x(a.B),x(a.J),ia(a.h),ia(a.M))};var W=function(a){U.call(this);this.w=this.L={};this.I=0;this.ca=ta(Eb);this.ma=ta(Fb);this.aa=!0;this.Z=this.ba=!1;this.ja=!0;this.$=!1;this.N=null;this.v=a;R(this.v,"keydown",this.da,void 0,this);R(this.v,"synthetic-keydown",this.fa,void 0,this);H&&(R(this.v,"keypress",this.ha,void 0,this),R(this.v,"synthetic-keypress",this.ia,void 0,this));R(this.v,"keyup",this.ea,void 0,this);R(this.v,"synthetic-keyup",this.ga,void 0,this)},Gb;t(W,U);
var Hb=function(a){this.W=a||null;this.next=a?null:{}},Eb=[27,112,113,114,115,116,117,118,119,120,121,122,123,19],Fb="color date datetime datetime-local email month number password search tel text time url week".split(" ");W.prototype.la=function(a,b){Ib(this.L,Jb(arguments),a)};
var Jb=function(a){if(m(a[1]))a=la(Kb(a[1]),function(d){fa(d.keyCode,"A non-modifier key is needed in each stroke.");return Lb(d.key||"",d.keyCode,d.ka)});else{var b=a,c=1;p(a[1])&&(b=a[1],c=0);for(a=[];c<b.length;c+=2)a.push(Lb("",b[c],b[c+1]))}return a},Kb=function(a){a=a.replace(/[ +]*\+[ +]*/g,"+").replace(/[ ]+/g," ").toLowerCase();a=a.split(" ");for(var b=[],c,d=0;c=a[d];d++){var e=c.split("+"),f=null,g=null;c=0;for(var h,y=0;h=e[y];y++){switch(h){case "shift":c|=1;continue;case "ctrl":c|=2;
continue;case "alt":c|=4;continue;case "meta":c|=8;continue}null===g||ea("At most one non-modifier key can be in a stroke.");e=void 0;f=h;if(!Gb){g={};for(e in wb)g[wb[e]]=vb(parseInt(e,10));Gb=g}g=Gb[f];fa(g,"Key name not found in goog.events.KeyNames: "+h);f=h;break}b.push({key:f,keyCode:g,ka:c})}return b};W.prototype.ea=function(a){a=Db(a);F&&Mb(this,a);H&&!this.G&&Y(a)&&Z(this,a,!0)};W.prototype.ga=function(a){a=a.getData();F&&Mb(this,a);H&&!this.G&&Y(a)&&Z(this,a,!0)};
var Mb=function(a,b){32==a.N&&32==b.g&&(0,b.h)();a.N=null},Y=function(a){return H&&a.m&&a.l};W.prototype.ha=function(a){a=Db(a);32<a.g&&Y(a)&&(this.G=!0)};W.prototype.ia=function(a){a=a.getData();32<a.g&&Y(a)&&(this.G=!0)};
var Ib=function(a,b,c){var d=b.shift();ka(d,function(e){if((e=a[e])&&(0==b.length||e.W))throw Error("Keyboard shortcut conflicts with existing shortcut");});b.length?ka(d,function(e){e=e.toString();var f=new Hb;e=e in a?a[e]:a[e]=f;f=b.slice(0);Ib(x(e.next,"An internal node must have a next map"),f,c)}):ka(d,function(e){a[e]=new Hb(c)})},Nb=function(a,b){for(var c=0;c<b.length;c++){var d=a[b[c]];if(d)return d}},Lb=function(a,b,c){c=c||0;b=["c_"+b+"_"+c];""!=a&&b.push("n_"+a+"_"+c);return b};
W.prototype.da=function(a){Z(this,Db(a))};W.prototype.fa=function(a){Z(this,a.getData())};
var Z=function(a,b,c){a:{var d=b.g;if(""!=b.getKey()){var e=b.getKey();if("Control"==e||"Shift"==e||"Meta"==e||"AltGraph"==e){d=!1;break a}}else if(16==d||17==d||18==d){d=!1;break a}e=b.J;var f="TEXTAREA"==e.tagName||"INPUT"==e.tagName||"BUTTON"==e.tagName||"SELECT"==e.tagName,g=!f&&(e.isContentEditable||e.ownerDocument&&"on"==e.ownerDocument.designMode);d=!f&&!g||a.ca[d]||a.Z?!0:g?!1:a.ja&&(b.l||b.m||b.A)?!0:"INPUT"==e.tagName&&a.ma[e.type]?13==d:"INPUT"==e.tagName||"BUTTON"==e.tagName?a.$?!0:32!=
d:!1}d&&(!c&&Y(b)?a.G=!1:(c=vb(b.g),d=b.getKey(),d=Lb(d,c,(b.K?1:0)|(b.m?2:0)|(b.l?4:0)|(b.A?8:0)),(e=Nb(a.w,d))&&(e=!(1500<=r()-a.I)),e||(a.w=a.L,a.I=r()),(e=Nb(a.w,d))&&e.next&&(a.w=e.next,a.I=r()),e&&(e.next?(0,b.h)():(a.w=a.L,a.I=r(),a.aa&&(0,b.h)(),a.ba&&(0,b.M)(),d=ha(e.W,"A terminal node must have a string shortcut identifier."),e=a.dispatchEvent(new Ob("shortcut",d,b.B)),(e&=a.dispatchEvent(new Ob("shortcut_"+d,d,b.B)))||(0,b.h)(),F&&(a.N=c)))))},Ob=function(a,b,c){M.call(this,a,c);this.identifier=
b};t(Ob,M);var Pb=function(a){return document.getElementById("google"===a?"google-server-textfield":"gaia-server-textfield")},Qb=function(a){var b=Pb(a),c=b.value;""==c?c=void 0:-1!=c.indexOf("/",c.length-1)&&(c=c.substring(0,c.length-1),b.value=c);chrome.runtime.sendMessage({action:"setCustomServers",type:a,custom:c})},Rb=function(){var a=chrome.runtime.getManifest();return sb("Snapshot (at %s) of logs for %s (version %s) on %s:\n",(new Date).toUTCString(),a.name,a.version,Aa)},Sb=function(){chrome.runtime.sendMessage({action:"logEntries"},
function(a){a.unshift(Rb());var b=document.getElementById("log-download");b.href=window.URL.createObjectURL(new Blob(a,{type:"text/plain"}));b.style.display="block";b.click()})};
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-i18n]").forEach(function(b){b.textContent=chrome.i18n.getMessage(b.getAttribute("data-i18n"))||"Error: Ui text not found"});var a=new W(document.body);a.la("modeChange","Ctrl+Shift+d");document.querySelector("#log").addEventListener("click",Sb);document.querySelector("#google-server-textfield").addEventListener("change",Qb.bind(void 0,"google"));document.querySelector("#gaia-server-textfield").addEventListener("change",
Qb.bind(void 0,"gaia"));chrome.runtime.sendMessage({action:"getServer"},function(b){var c=b.google.custom,d=Pb("google");d.placeholder=b.google["default"];d.value=c?c:"";c=b.gaia.custom;d=Pb("gaia");d.placeholder=b.gaia["default"];d.value=c?c:""});R(a,"shortcut",function(){var b=document.querySelector("#google-server-wrapper");null!==b&&b.removeAttribute("hidden");b=document.querySelector("#gaia-server-wrapper");null!==b&&b.removeAttribute("hidden")})});