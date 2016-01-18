
/*!
 * shariff - v1.22.0 - 18.01.2016
 * https://github.com/heiseonline/shariff
 * Copyright (c) 2016 Ines Pauer, Philipp Busse, Sebastian Hilbig, Erich Kramer, Deniz Sesli
 * Licensed under the MIT license
 */


(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=window;

},{}],2:[function(require,module,exports){
(function (global){
!function(e){function o(e){throw RangeError(T[e])}function n(e,o){for(var n=e.length,r=[];n--;)r[n]=o(e[n]);return r}function r(e,o){var r=e.split("@"),t="";r.length>1&&(t=r[0]+"@",e=r[1]),e=e.replace(S,".");var u=e.split("."),i=n(u,o).join(".");return t+i}function t(e){for(var o,n,r=[],t=0,u=e.length;u>t;)o=e.charCodeAt(t++),o>=55296&&56319>=o&&u>t?(n=e.charCodeAt(t++),56320==(64512&n)?r.push(((1023&o)<<10)+(1023&n)+65536):(r.push(o),t--)):r.push(o);return r}function u(e){return n(e,function(e){var o="";return e>65535&&(e-=65536,o+=P(e>>>10&1023|55296),e=56320|1023&e),o+=P(e)}).join("")}function i(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:b}function f(e,o){return e+22+75*(26>e)-((0!=o)<<5)}function c(e,o,n){var r=0;for(e=n?M(e/j):e>>1,e+=M(e/o);e>L*C>>1;r+=b)e=M(e/L);return M(r+(L+1)*e/(e+m))}function l(e){var n,r,t,f,l,s,d,a,p,h,v=[],g=e.length,w=0,m=I,j=A;for(r=e.lastIndexOf(E),0>r&&(r=0),t=0;r>t;++t)e.charCodeAt(t)>=128&&o("not-basic"),v.push(e.charCodeAt(t));for(f=r>0?r+1:0;g>f;){for(l=w,s=1,d=b;f>=g&&o("invalid-input"),a=i(e.charCodeAt(f++)),(a>=b||a>M((x-w)/s))&&o("overflow"),w+=a*s,p=j>=d?y:d>=j+C?C:d-j,!(p>a);d+=b)h=b-p,s>M(x/h)&&o("overflow"),s*=h;n=v.length+1,j=c(w-l,n,0==l),M(w/n)>x-m&&o("overflow"),m+=M(w/n),w%=n,v.splice(w++,0,m)}return u(v)}function s(e){var n,r,u,i,l,s,d,a,p,h,v,g,w,m,j,F=[];for(e=t(e),g=e.length,n=I,r=0,l=A,s=0;g>s;++s)v=e[s],128>v&&F.push(P(v));for(u=i=F.length,i&&F.push(E);g>u;){for(d=x,s=0;g>s;++s)v=e[s],v>=n&&d>v&&(d=v);for(w=u+1,d-n>M((x-r)/w)&&o("overflow"),r+=(d-n)*w,n=d,s=0;g>s;++s)if(v=e[s],n>v&&++r>x&&o("overflow"),v==n){for(a=r,p=b;h=l>=p?y:p>=l+C?C:p-l,!(h>a);p+=b)j=a-h,m=b-h,F.push(P(f(h+j%m,0))),a=M(j/m);F.push(P(f(a,0))),l=c(r,w,u==i),r=0,++u}++r,++n}return F.join("")}function d(e){return r(e,function(e){return F.test(e)?l(e.slice(4).toLowerCase()):e})}function a(e){return r(e,function(e){return O.test(e)?"xn--"+s(e):e})}var p="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,v="object"==typeof global&&global;(v.global===v||v.window===v||v.self===v)&&(e=v);var g,w,x=2147483647,b=36,y=1,C=26,m=38,j=700,A=72,I=128,E="-",F=/^xn--/,O=/[^\x20-\x7E]/,S=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=b-y,M=Math.floor,P=String.fromCharCode;if(g={version:"1.3.2",ucs2:{decode:t,encode:u},decode:l,encode:s,toASCII:a,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return g});else if(p&&h)if(module.exports==p)h.exports=g;else for(w in g)g.hasOwnProperty(w)&&(p[w]=g[w]);else e.punycode=g}(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
"use strict";function hasOwnProperty(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(r,e,t,n){e=e||"&",t=t||"=";var o={};if("string"!=typeof r||0===r.length)return o;var a=/\+/g;r=r.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var p=r.length;s>0&&p>s&&(p=s);for(var y=0;p>y;++y){var u,c,i,l,f=r[y].replace(a,"%20"),v=f.indexOf(t);v>=0?(u=f.substr(0,v),c=f.substr(v+1)):(u=f,c=""),i=decodeURIComponent(u),l=decodeURIComponent(c),hasOwnProperty(o,i)?isArray(o[i])?o[i].push(l):o[i]=[o[i],l]:o[i]=l}return o};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};

},{}],4:[function(require,module,exports){
"use strict";function map(r,e){if(r.map)return r.map(e);for(var t=[],n=0;n<r.length;n++)t.push(e(r[n],n));return t}var stringifyPrimitive=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};module.exports=function(r,e,t,n){return e=e||"&",t=t||"=",null===r&&(r=void 0),"object"==typeof r?map(objectKeys(r),function(n){var i=encodeURIComponent(stringifyPrimitive(n))+t;return isArray(r[n])?map(r[n],function(r){return i+encodeURIComponent(stringifyPrimitive(r))}).join(e):i+encodeURIComponent(stringifyPrimitive(r[n]))}).join(e):n?encodeURIComponent(stringifyPrimitive(n))+t+encodeURIComponent(stringifyPrimitive(r)):""};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)},objectKeys=Object.keys||function(r){var e=[];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.push(t);return e};

},{}],5:[function(require,module,exports){
"use strict";exports.decode=exports.parse=require("./decode"),exports.encode=exports.stringify=require("./encode");

},{"./decode":3,"./encode":4}],6:[function(require,module,exports){
function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function urlParse(t,s,e){if(t&&isObject(t)&&t instanceof Url)return t;var h=new Url;return h.parse(t,s,e),h}function urlFormat(t){return isString(t)&&(t=urlParse(t)),t instanceof Url?t.format():Url.prototype.format.call(t)}function urlResolve(t,s){return urlParse(t,!1,!0).resolve(s)}function urlResolveObject(t,s){return t?urlParse(t,!1,!0).resolveObject(s):s}function isString(t){return"string"==typeof t}function isObject(t){return"object"==typeof t&&null!==t}function isNull(t){return null===t}function isNullOrUndefined(t){return null==t}var punycode=require("punycode");exports.parse=urlParse,exports.resolve=urlResolve,exports.resolveObject=urlResolveObject,exports.format=urlFormat,exports.Url=Url;var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,delims=["<",">",'"',"`"," ","\r","\n","	"],unwise=["{","}","|","\\","^","`"].concat(delims),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},querystring=require("querystring");Url.prototype.parse=function(t,s,e){if(!isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var h=t;h=h.trim();var r=protocolPattern.exec(h);if(r){r=r[0];var o=r.toLowerCase();this.protocol=o,h=h.substr(r.length)}if(e||r||h.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===h.substr(0,2);!a||r&&hostlessProtocol[r]||(h=h.substr(2),this.slashes=!0)}if(!hostlessProtocol[r]&&(a||r&&!slashedProtocol[r])){for(var n=-1,i=0;i<hostEndingChars.length;i++){var l=h.indexOf(hostEndingChars[i]);-1!==l&&(-1===n||n>l)&&(n=l)}var c,u;u=-1===n?h.lastIndexOf("@"):h.lastIndexOf("@",n),-1!==u&&(c=h.slice(0,u),h=h.slice(u+1),this.auth=decodeURIComponent(c)),n=-1;for(var i=0;i<nonHostChars.length;i++){var l=h.indexOf(nonHostChars[i]);-1!==l&&(-1===n||n>l)&&(n=l)}-1===n&&(n=h.length),this.host=h.slice(0,n),h=h.slice(n),this.parseHost(),this.hostname=this.hostname||"";var p="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!p)for(var f=this.hostname.split(/\./),i=0,m=f.length;m>i;i++){var v=f[i];if(v&&!v.match(hostnamePartPattern)){for(var g="",y=0,d=v.length;d>y;y++)g+=v.charCodeAt(y)>127?"x":v[y];if(!g.match(hostnamePartPattern)){var P=f.slice(0,i),b=f.slice(i+1),j=v.match(hostnamePartStart);j&&(P.push(j[1]),b.unshift(j[2])),b.length&&(h="/"+b.join(".")+h),this.hostname=P.join(".");break}}}if(this.hostname.length>hostnameMaxLen?this.hostname="":this.hostname=this.hostname.toLowerCase(),!p){for(var O=this.hostname.split("."),q=[],i=0;i<O.length;++i){var x=O[i];q.push(x.match(/[^A-Za-z0-9_-]/)?"xn--"+punycode.encode(x):x)}this.hostname=q.join(".")}var U=this.port?":"+this.port:"",C=this.hostname||"";this.host=C+U,this.href+=this.host,p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==h[0]&&(h="/"+h))}if(!unsafeProtocol[o])for(var i=0,m=autoEscape.length;m>i;i++){var A=autoEscape[i],E=encodeURIComponent(A);E===A&&(E=escape(A)),h=h.split(A).join(E)}var w=h.indexOf("#");-1!==w&&(this.hash=h.substr(w),h=h.slice(0,w));var R=h.indexOf("?");if(-1!==R?(this.search=h.substr(R),this.query=h.substr(R+1),s&&(this.query=querystring.parse(this.query)),h=h.slice(0,R)):s&&(this.search="",this.query={}),h&&(this.pathname=h),slashedProtocol[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var U=this.pathname||"",x=this.search||"";this.path=U+x}return this.href=this.format(),this},Url.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var s=this.protocol||"",e=this.pathname||"",h=this.hash||"",r=!1,o="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&isObject(this.query)&&Object.keys(this.query).length&&(o=querystring.stringify(this.query));var a=this.search||o&&"?"+o||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||slashedProtocol[s])&&r!==!1?(r="//"+(r||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):r||(r=""),h&&"#"!==h.charAt(0)&&(h="#"+h),a&&"?"!==a.charAt(0)&&(a="?"+a),e=e.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),s+r+e+a+h},Url.prototype.resolve=function(t){return this.resolveObject(urlParse(t,!1,!0)).format()},Url.prototype.resolveObject=function(t){if(isString(t)){var s=new Url;s.parse(t,!1,!0),t=s}var e=new Url;if(Object.keys(this).forEach(function(t){e[t]=this[t]},this),e.hash=t.hash,""===t.href)return e.href=e.format(),e;if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(s){"protocol"!==s&&(e[s]=t[s])}),slashedProtocol[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e;if(t.protocol&&t.protocol!==e.protocol){if(!slashedProtocol[t.protocol])return Object.keys(t).forEach(function(s){e[s]=t[s]}),e.href=e.format(),e;if(e.protocol=t.protocol,t.host||hostlessProtocol[t.protocol])e.pathname=t.pathname;else{for(var h=(t.pathname||"").split("/");h.length&&!(t.host=h.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==h[0]&&h.unshift(""),h.length<2&&h.unshift(""),e.pathname=h.join("/")}if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var r=e.pathname||"",o=e.search||"";e.path=r+o}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var a=e.pathname&&"/"===e.pathname.charAt(0),n=t.host||t.pathname&&"/"===t.pathname.charAt(0),i=n||a||e.host&&t.pathname,l=i,c=e.pathname&&e.pathname.split("/")||[],h=t.pathname&&t.pathname.split("/")||[],u=e.protocol&&!slashedProtocol[e.protocol];if(u&&(e.hostname="",e.port=null,e.host&&(""===c[0]?c[0]=e.host:c.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===h[0]?h[0]=t.host:h.unshift(t.host)),t.host=null),i=i&&(""===h[0]||""===c[0])),n)e.host=t.host||""===t.host?t.host:e.host,e.hostname=t.hostname||""===t.hostname?t.hostname:e.hostname,e.search=t.search,e.query=t.query,c=h;else if(h.length)c||(c=[]),c.pop(),c=c.concat(h),e.search=t.search,e.query=t.query;else if(!isNullOrUndefined(t.search)){if(u){e.hostname=e.host=c.shift();var p=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;p&&(e.auth=p.shift(),e.host=e.hostname=p.shift())}return e.search=t.search,e.query=t.query,isNull(e.pathname)&&isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!c.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var f=c.slice(-1)[0],m=(e.host||t.host)&&("."===f||".."===f)||""===f,v=0,g=c.length;g>=0;g--)f=c[g],"."==f?c.splice(g,1):".."===f?(c.splice(g,1),v++):v&&(c.splice(g,1),v--);if(!i&&!l)for(;v--;v)c.unshift("..");!i||""===c[0]||c[0]&&"/"===c[0].charAt(0)||c.unshift(""),m&&"/"!==c.join("/").substr(-1)&&c.push("");var y=""===c[0]||c[0]&&"/"===c[0].charAt(0);if(u){e.hostname=e.host=y?"":c.length?c.shift():"";var p=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;p&&(e.auth=p.shift(),e.host=e.hostname=p.shift())}return i=i||e.host&&c.length,i&&!y&&c.unshift(""),c.length?e.pathname=c.join("/"):(e.pathname=null,e.path=null),isNull(e.pathname)&&isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e},Url.prototype.parseHost=function(){var t=this.host,s=portPattern.exec(t);s&&(s=s[0],":"!==s&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)};

},{"punycode":2,"querystring":5}],7:[function(require,module,exports){
"use strict";module.exports=function(d){var e=encodeURIComponent(d.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"addthis",faName:"s3uu-addthis",title:{bg:"Сподели в AddThis",da:"Del på AddThis",de:"Bei AddThis teilen",en:"Share on AddThis",es:"Compartir en AddThis",fi:"Jaa AddThisissä",fr:"Partager sur AddThis",hr:"Podijelite na AddThis",hu:"Megosztás AddThisen",it:"Condividi su AddThis",ja:"AddThis上で共有",ko:"AddThis에서 공유하기",nl:"Delen op AddThis",no:"Del på AddThis",pl:"Udostępnij przez AddThis",pt:"Compartilhar no AddThis",ro:"Partajează pe AddThis",ru:"Поделиться на AddThis",sk:"Zdieľať na AddThis",sl:"Deli na AddThis",sr:"Podeli na AddThis",sv:"Dela på AddThis",tr:"AddThis'ta paylaş",zh:"在AddThis上分享"},shareUrl:"http://api.addthis.com/oexchange/0.8/offer?url="+e+d.getReferrerTrack()}};

},{}],8:[function(require,module,exports){
"use strict";module.exports=function(n){var i="",o="";return null!==n.options.bitcoinaddress&&(i=n.options.bitcoinaddress),null!==n.options.bitcoinurl&&(o=n.options.bitcoinurl),{popup:!0,noblank:!1,mobileonly:!1,shareText:{de:"spenden",en:"donate",fr:"faire un don",es:"donar"},name:"bitcoin",faName:"s3uu-bitcoin",title:{de:"Spenden mit Bitcoin",en:"Donate with Bitcoin",fr:"Faire un don via Bitcoin",es:"Donar via Bitcoin"},shareUrl:o+"bitcoin.php?bitcoinaddress="+i}};

},{}],9:[function(require,module,exports){
"use strict";var url=require("url");module.exports=function(e){var r=url.parse("https://sharetodiaspora.github.io/",!0);return r.query.url=e.getURL(),r.query.title=e.getTitle()||e.getMeta("DC.title"),r.protocol="https",delete r.search,{popup:!0,mobileonly:!1,shareText:{de:"teilen",en:"share"},name:"diaspora",faName:"s3uu-diaspora",title:{de:"Bei Diaspora teilen",en:"Share on Diaspora"},shareUrl:url.format(r)+e.getReferrerTrack()}};

},{"url":6}],10:[function(require,module,exports){
"use strict";module.exports=function(e){var o=encodeURIComponent(e.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"facebook",faName:"s3uu-facebook",title:{bg:"Сподели във Facebook",da:"Del på Facebook",de:"Bei Facebook teilen",en:"Share on Facebook",es:"Compartir en Facebook",fi:"Jaa Facebookissa",fr:"Partager sur Facebook",hr:"Podijelite na Facebooku",hu:"Megosztás Facebookon",it:"Condividi su Facebook",ja:"フェイスブック上で共有",ko:"페이스북에서 공유하기",nl:"Delen op Facebook",no:"Del på Facebook",pl:"Udostępnij na Facebooku",pt:"Compartilhar no Facebook",ro:"Partajează pe Facebook",ru:"Поделиться на Facebook",sk:"Zdieľať na Facebooku",sl:"Deli na Facebooku",sr:"Podeli na Facebook-u",sv:"Dela på Facebook",tr:"Facebook'ta paylaş",zh:"在Facebook上分享"},shareUrl:"https://www.facebook.com/sharer/sharer.php?u="+o+e.getReferrerTrack()}};

},{}],11:[function(require,module,exports){
"use strict";module.exports=function(t){var e=encodeURIComponent(t.getURL()),r=t.getMeta("DC.title"),a=t.getMeta("DC.creator"),n="",o="";return r.length>0&&a.length>0?r+=" - "+a:r=t.getTitle(),null!==t.options.flattruser&&(n=t.options.flattruser),o="de"===t.options.lang||"fr"===t.options.lang||"es"===t.options.lang?t.options.lang+"_"+t.options.lang.toUpperCase():"en_US",{popup:!0,noblank:!1,mobileonly:!1,shareText:"flattr",name:"flattr",faName:"s3uu-flattr",title:{de:"Beitrag flattrn!",en:"Flattr this!",fr:"Flattré!",es:"Flattr!"},shareUrl:"https://flattr.com/submit/auto?url="+e+t.getReferrerTrack()+"&title="+encodeURIComponent(r)+"&description=&language="+o+"&tags=&category=text&user_id="+n}};

},{}],12:[function(require,module,exports){
"use strict";module.exports=function(e){var o=encodeURIComponent(e.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"googleplus",faName:"s3uu-google-plus",title:{bg:"Сподели в Google+",da:"Del på Google+",de:"Bei Google+ teilen",en:"Share on Google+",es:"Compartir en Google+",fi:"Jaa Google+:ssa",fr:"Partager sur Goolge+",hr:"Podijelite na Google+",hu:"Megosztás Google+on",it:"Condividi su Google+",ja:"Google+上で共有",ko:"Google+에서 공유하기",nl:"Delen op Google+",no:"Del på Google+",pl:"Udostępnij na Google+",pt:"Compartilhar no Google+",ro:"Partajează pe Google+",ru:"Поделиться на Google+",sk:"Zdieľať na Google+",sl:"Deli na Google+",sr:"Podeli na Google+",sv:"Dela på Google+",tr:"Google+'da paylaş",zh:"在Google+上分享"},shareUrl:"https://plus.google.com/share?url="+o+e.getReferrerTrack()}};

},{}],13:[function(require,module,exports){
"use strict";module.exports=function(e){return{popup:!1,blank:!0,mobileonly:!1,shareText:"Info",name:"info",faName:"s3uu-info",title:{de:"weitere Informationen",en:"more information",es:"más informaciones",fr:"plus d'informations",it:"maggiori informazioni",da:"flere oplysninger",nl:"verdere informatie"},shareUrl:e.getInfoUrl()}};

},{}],14:[function(require,module,exports){
"use strict";module.exports=function(e){var n=encodeURIComponent(e.getURL()),i=e.getMeta("DC.title"),t=e.getMeta("DC.creator");return i.length>0&&t.length>0?i+=" - "+t:i=e.getTitle(),{popup:!0,mobileonly:!1,shareText:{de:"mitteilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"シェア",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"distribuiți",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"linkedin",faName:"s3uu-linkedin",title:{bg:"Сподели в LinkedIn",da:"Del på LinkedIn",de:"Bei LinkedIn teilen",en:"Share on LinkedIn",es:"Compartir en LinkedIn",fi:"Jaa LinkedInissä",fr:"Partager sur LinkedIn",hr:"Podijelite na LinkedIn",hu:"Megosztás LinkedInen",it:"Condividi su LinkedIn",ja:"LinkedIn上で共有",ko:"LinkedIn에서 공유하기",nl:"Delen op LinkedIn",no:"Del på LinkedIn",pl:"Udostępnij przez LinkedIn",pt:"Compartilhar no LinkedIn",ro:"Partajează pe LinkedIn",ru:"Поделиться на LinkedIn",sk:"Zdieľať na LinkedIn",sl:"Deli na LinkedIn",sr:"Podeli na LinkedIn-u",sv:"Dela på LinkedIn",tr:"LinkedIn'ta paylaş",zh:"在LinkedIn上分享"},shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url="+n+e.getReferrerTrack()+"&title="+encodeURIComponent(i)}};

},{}],15:[function(require,module,exports){
"use strict";module.exports=function(e){var i=e.getURL();return{popup:!1,mobileonly:!1,blank:!1,shareText:{bg:"имейл",da:"e-mail",de:"e-mail",en:"e-mail",es:"emilio",fi:"sähköpostitse",fr:"courriel",hr:"e-pošta",hu:"e-mail",it:"e-mail",ja:"e-mail",ko:"e-mail",nl:"e-mail",no:"e-post",pl:"e-mail",pt:"e-mail",ro:"e-mail",ru:"e-mail",sk:"e-mail",sl:"e-mail",sr:"e-mail",sv:"e-post",tr:"e-posta",zh:"e-mail"},name:"mailform",faName:"s3uu-envelope",title:{bg:"Изпрати по имейл",da:"Sende via e-mail",de:"Per E-Mail versenden",en:"Send by email",es:"Enviar por email",fi:"Lähetä sähköpostitse",fr:"Envoyer par courriel",hr:"Pošaljite emailom",hu:"Elküldés e-mailben",it:"Inviare via e-mail",ja:"電子メールで送信",ko:"이메일로 보내기",nl:"Sturen via e-mail",no:"Send via epost",pl:"Wyślij e-mailem",pt:"Enviar por e-mail",ro:"Trimite prin e-mail",ru:"Отправить по эл. почте",sk:"Poslať e-mailom",sl:"Pošlji po elektronski pošti",sr:"Pošalji putem email-a",sv:"Skicka via e-post",tr:"E-posta ile gönder",zh:"通过电子邮件传送"},shareUrl:i+"?view=mail#shariff_mailform"}};

},{}],16:[function(require,module,exports){
"use strict";module.exports=function(e){var i=encodeURIComponent(e.getURL()),a=e.getMeta("DC.title"),l=e.getMeta("DC.creator");return a.length>0&&l.length>0?a+=" - "+l:a=e.getTitle(),{popup:!1,mobileonly:!1,blank:!1,shareText:{bg:"имейл",da:"e-mail",de:"e-mail",en:"e-mail",es:"emilio",fi:"sähköpostitse",fr:"courriel",hr:"e-pošta",hu:"e-mail",it:"e-mail",ja:"e-mail",ko:"e-mail",nl:"e-mail",no:"e-post",pl:"e-mail",pt:"e-mail",ro:"e-mail",ru:"e-mail",sk:"e-mail",sl:"e-mail",sr:"e-mail",sv:"e-post",tr:"e-posta",zh:"e-mail"},name:"mailto",faName:"s3uu-envelope",title:{bg:"Изпрати по имейл",da:"Sende via e-mail",de:"Per E-Mail versenden",en:"Send by email",es:"Enviar por email",fi:"Lähetä sähköpostitse",fr:"Envoyer par courriel",hr:"Pošaljite emailom",hu:"Elküldés e-mailben",it:"Inviare via e-mail",ja:"電子メールで送信",ko:"이메일로 보내기",nl:"Sturen via e-mail",no:"Send via epost",pl:"Wyślij e-mailem",pt:"Enviar por e-mail",ro:"Trimite prin e-mail",ru:"Отправить по эл. почте",sk:"Poslať e-mailom",sl:"Pošlji po elektronski pošti",sr:"Pošalji putem email-a",sv:"Skicka via e-post",tr:"E-posta ile gönder",zh:"通过电子邮件传送"},shareUrl:"mailto:?body="+i+e.getReferrerTrack()+"&subject="+encodeURIComponent(a)}};

},{}],17:[function(require,module,exports){
"use strict";module.exports=function(e){var n="";return null!==e.options.patreonid&&(n=e.options.patreonid),{popup:!0,mobileonly:!1,shareText:"patreon",name:"patreon",faName:"s3uu-patreon",title:{de:"Werde ein patron!",en:"Become a patron!",es:"Conviértete en un patron!",fr:"Devenez un patron!"},shareUrl:"https://www.patreon.com/"+n}};

},{}],18:[function(require,module,exports){
"use strict";module.exports=function(a){var n="";return null!==a.options.paypalbuttonid&&(n=a.options.paypalbuttonid),{popup:!0,noblank:!1,mobileonly:!1,shareText:{de:"spenden",en:"donate",fr:"faire un don",es:"donar"},name:"paypal",faName:"s3uu-paypal",title:{de:"Spenden mit PayPal",en:"Donate with PayPal",fr:"Faire un don via PayPal",es:"Donar via PayPal"},shareUrl:"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id="+n}};

},{}],19:[function(require,module,exports){
"use strict";module.exports=function(a){var e="";return null!==a.options.paypalmeid&&(e=a.options.paypalmeid),{popup:!0,noblank:!1,mobileonly:!1,shareText:{de:"spenden",en:"donate",fr:"faire un don",es:"donar"},name:"paypalme",faName:"s3uu-paypal",title:{de:"Spenden mit PayPal",en:"Donate with PayPal",fr:"Faire un don via PayPal",es:"Donar via PayPal"},shareUrl:"https://www.paypal.me/"+e}};

},{}],20:[function(require,module,exports){
"use strict";module.exports=function(e){var t=encodeURIComponent(e.getURL()),n=e.getMeta("DC.title"),i=e.getMeta("DC.creator");return n.length>0&&i.length>0?n+=" - "+i:n=e.getTitle(),{popup:!0,mobileonly:!1,shareText:{de:"pinnen",en:"pin it"},name:"pinterest",faName:"s3uu-pinterest",title:{de:"Bei Pinterest pinnen",en:"Pin it on Pinterest",es:"Compartir en Pinterest",fr:"Partager sur Pinterest",it:"Condividi su Pinterest",da:"Del på Pinterest",nl:"Delen op Pinterest"},shareUrl:"https://www.pinterest.com/pin/create/link/?url="+t+e.getReferrerTrack()+"&media="+e.getMedia()+"&description="+encodeURIComponent(n)}};

},{}],21:[function(require,module,exports){
"use strict";module.exports=function(r){return{popup:!1,mobileonly:!1,blank:!1,shareText:{de:"drucken",en:"print",fr:"imprimer",es:"imprimir",it:"imprimere",da:"dat trykke",nl:"drukken"},name:"printer",faName:"s3uu-print",title:{de:"drucken",en:"print",fr:"imprimer",es:"imprimir",it:"imprimere",da:"dat trykke",nl:"drukken"},shareUrl:"javascript:window.print()"}};

},{}],22:[function(require,module,exports){
"use strict";module.exports=function(e){var d=encodeURIComponent(e.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"reddit",faName:"s3uu-reddit",title:{de:"Bei Reddit teilen",en:"Share on Reddit",es:"Compartir en Reddit",fr:"Partager sur Reddit",it:"Condividi su Reddit",da:"Del på Reddit",nl:"Delen op Reddit"},shareUrl:"https://www.reddit.com/submit?url="+d+e.getReferrerTrack()}};

},{}],23:[function(require,module,exports){
"use strict";module.exports=function(e){var s="";return null!==e.options.rssfeed&&(s=e.options.rssfeed),{popup:!0,noblank:!1,mobileonly:!1,shareText:{de:"rss-feed",en:"rss feed"},name:"rss",faName:"s3uu-rss",title:{de:"rss-feed",en:"rss feed"},shareUrl:s}};

},{}],24:[function(require,module,exports){
"use strict";module.exports=function(e){var t=encodeURIComponent(e.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"stumbleupon",faName:"s3uu-stumbleupon",title:{de:"Bei StumbleUpon teilen",en:"Share on StumbleUpon",es:"Compartir en StumbleUpon",fr:"Partager sur StumbleUpon",it:"Condividi su StumbleUpon",da:"Del på StumbleUpon",nl:"Delen op StumbleUpon"},shareUrl:"https://www.stumbleupon.com/submit?url="+t+e.getReferrerTrack()}};

},{}],25:[function(require,module,exports){
"use strict";module.exports=function(e){var a=encodeURIComponent(e.getURL()),r=e.getMeta("DC.title"),t=e.getMeta("DC.creator");return r.length>0&&t.length>0?r+=" - "+t:r=e.getTitle(),{popup:!1,mobileonly:!0,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"threema",faName:"s3uu-threema",title:{bg:"Сподели в Threema",da:"Del på Threema",de:"Bei Threema teilen",en:"Share on Threema",es:"Compartir en Threema",fi:"Jaa Threemaissä",fr:"Partager sur Threema",hr:"Podijelite na Threema",hu:"Megosztás Threemaen",it:"Condividi su Threema",ja:"Threema上で共有",ko:"Threema에서 공유하기",nl:"Delen op Threema",no:"Del på Threema",pl:"Udostępnij przez Threema",pt:"Compartilhar no Threema",ro:"Partajează pe Threema",ru:"Поделиться на Threema",sk:"Zdieľať na Threema",sl:"Deli na Threema",sr:"Podeli na Threema-u",sv:"Dela på Threema",tr:"Threema'ta paylaş",zh:"在Threema上分享"},shareUrl:"threema://compose?text="+encodeURIComponent(r)+"%20"+a+e.getReferrerTrack()}};

},{}],26:[function(require,module,exports){
"use strict";module.exports=function(e){var r=encodeURIComponent(e.getURL()),l=e.getMeta("DC.title"),t=e.getMeta("DC.creator");l.length>0&&t.length>0?l+=" - "+t:l=e.getTitle();var a=e.getURL(),u=a.replace("http://","").replace("https://","").replace("www.","").split(/[/?#]/),i=u[0];return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"tumblr",faName:"s3uu-tumblr",title:{bg:"Сподели във Tumblr",da:"Del på Tumblr",de:"Bei Tumblr teilen",en:"Share on Tumblr",es:"Compartir en Tumblr",fi:"Jaa Tumblrissa",fr:"Partager sur Tumblr",hr:"Podijelite na Tumblru",hu:"Megosztás Tumblron",it:"Condividi su Tumblr",ja:"フェイスブック上で共有",ko:"페이스북에서 공유하기",nl:"Delen op Tumblr",no:"Del på Tumblr",pl:"Udostępnij na Tumblru",pt:"Compartilhar no Tumblr",ro:"Partajează pe Tumblr",ru:"Поделиться на Tumblr",sk:"Zdieľať na Tumblru",sl:"Deli na Tumblru",sr:"Podeli na Tumblr-u",sv:"Dela på Tumblr",tr:"Tumblr'ta paylaş",zh:"在Tumblr上分享"},shareUrl:"https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl="+r+e.getReferrerTrack()+"&tags="+i}};

},{}],27:[function(require,module,exports){
(function (global){
"use strict";var url=require("url"),$=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),abbreviateText=function(t,e){var r=$("<div/>").html(t).text();if(r.length<=e)return t;var i=r.substring(0,e-1).lastIndexOf(" ");return r=r.substring(0,i)+"…"};module.exports=function(t){var e=url.parse("https://twitter.com/share",!0),r=t.getMeta("DC.title"),i=t.getMeta("DC.creator");return r.length>0&&i.length>0?r+=" - "+i:r=t.getTitle(),e.query.text=abbreviateText(r,120),e.query.url=t.getURL(),null!==t.options.twitterVia&&(e.query.via=t.options.twitterVia),delete e.search,{popup:!0,mobileonly:!1,shareText:{de:"twittern",en:"tweet"},name:"twitter",faName:"s3uu-twitter",title:{bg:"Сподели в Twitter",da:"Del på Twitter",de:"Bei Twitter teilen",en:"Share on Twitter",es:"Compartir en Twitter",fi:"Jaa Twitterissä",fr:"Partager sur Twitter",hr:"Podijelite na Twitteru",hu:"Megosztás Twitteren",it:"Condividi su Twitter",ja:"ツイッター上で共有",ko:"트위터에서 공유하기",nl:"Delen op Twitter",no:"Del på Twitter",pl:"Udostępnij na Twitterze",pt:"Compartilhar no Twitter",ro:"Partajează pe Twitter",ru:"Поделиться на Twitter",sk:"Zdieľať na Twitteri",sl:"Deli na Twitterju",sr:"Podeli na Twitter-u",sv:"Dela på Twitter",tr:"Twitter'da paylaş",zh:"在Twitter上分享"},shareUrl:url.format(e)+t.getReferrerTrack()}};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"url":6}],28:[function(require,module,exports){
"use strict";module.exports=function(e){var a=encodeURIComponent(e.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"vk",faName:"s3uu-vk",title:{bg:"Сподели във VK",da:"Del på VK",de:"Bei VK teilen",en:"Share on VK",es:"Compartir en VK",fi:"Jaa VKissa",fr:"Partager sur VK",hr:"Podijelite na VKu",hu:"Megosztás VKon",it:"Condividi su VK",ja:"フェイスブック上で共有",ko:"페이스북에서 공유하기",nl:"Delen op VK",no:"Del på VK",pl:"Udostępnij na VKu",pt:"Compartilhar no VK",ro:"Partajează pe VK",ru:"Поделиться на VK",sk:"Zdieľať na VKu",sl:"Deli na VKu",sr:"Podeli na VK-u",sv:"Dela på VK",tr:"VK'ta paylaş",zh:"在VK上分享"},shareUrl:"https://vk.com/share.php?url="+a+e.getReferrerTrack()}};

},{}],29:[function(require,module,exports){
"use strict";module.exports=function(a){var p=encodeURIComponent(a.getURL()),e=a.getMeta("DC.title"),t=a.getMeta("DC.creator");return e.length>0&&t.length>0?e+=" - "+t:e=a.getTitle(),{popup:!1,mobileonly:!0,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"whatsapp",faName:"s3uu-whatsapp",title:{bg:"Сподели в Whatsapp",da:"Del på Whatsapp",de:"Bei Whatsapp teilen",en:"Share on Whatsapp",es:"Compartir en Whatsapp",fi:"Jaa WhatsAppissä",fr:"Partager sur Whatsapp",hr:"Podijelite na Whatsapp",hu:"Megosztás WhatsAppen",it:"Condividi su Whatsapp",ja:"Whatsapp上で共有",ko:"Whatsapp에서 공유하기",nl:"Delen op Whatsapp",no:"Del på Whatsapp",pl:"Udostępnij przez WhatsApp",pt:"Compartilhar no Whatsapp",ro:"Partajează pe Whatsapp",ru:"Поделиться на Whatsapp",sk:"Zdieľať na Whatsapp",sl:"Deli na Whatsapp",sr:"Podeli na WhatsApp-u",sv:"Dela på Whatsapp",tr:"Whatsapp'ta paylaş",zh:"在Whatsapp上分享"},shareUrl:"whatsapp://send?text="+encodeURIComponent(e)+"%20"+p+a.getReferrerTrack()}};

},{}],30:[function(require,module,exports){
"use strict";module.exports=function(e){var r=encodeURIComponent(e.getURL());return{popup:!0,mobileonly:!1,shareText:{bg:"cподеляне",da:"del",de:"teilen",en:"share",es:"compartir",fi:"Jaa",fr:"partager",hr:"podijelite",hu:"megosztás",it:"condividi",ja:"共有",ko:"공유하기",nl:"delen",no:"del",pl:"udostępnij",pt:"compartilhar",ro:"partajează",ru:"поделиться",sk:"zdieľať",sl:"deli",sr:"podeli",sv:"dela",tr:"paylaş",zh:"分享"},name:"xing",faName:"s3uu-xing",title:{de:"Bei XING teilen",en:"Share on XING",es:"Compartir en XING",fr:"Partager sur XING",it:"Condividi su XING",da:"Del på XING",nl:"Delen op XING"},shareUrl:"https://www.xing.com/social_plugins/share?url="+r+e.getReferrerTrack()}};

},{}],31:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null),url=require("url"),window=require("browserify-window"),Shariff=function(e,t){var r=this;this.element=e,$(e).empty(),this.options=$.extend({},this.defaults,t,$(e).data());var i=[require("./services/facebook.js"),require("./services/vk.js"),require("./services/googleplus.js"),require("./services/twitter.js"),require("./services/whatsapp.js"),require("./services/mailform.js"),require("./services/info.js"),require("./services/mailto.js"),require("./services/linkedin.js"),require("./services/xing.js"),require("./services/pinterest.js"),require("./services/reddit.js"),require("./services/stumbleupon.js"),require("./services/printer.js"),require("./services/flattr.js"),require("./services/paypal.js"),require("./services/bitcoin.js"),require("./services/tumblr.js"),require("./services/patreon.js"),require("./services/addthis.js"),require("./services/diaspora.js"),require("./services/threema.js"),require("./services/paypalme.js"),require("./services/rss.js")];this.services=$.map(this.options.services,function(e){var t;return i.forEach(function(i){return i=i(r),"mail"===e&&(e="mailform"),i.name===e?(t=i,null):void 0}),t}),this._addButtonList(),null!==this.options.backendUrl&&this.getShares().then($.proxy(this._updateCounts,this))};Shariff.prototype={defaults:{theme:"default",backendUrl:null,infoUrl:"http://ct.de/-2467514",lang:"de",langFallback:"en",mailUrl:function(){var e=url.parse(this.getURL(),!0);return e.query.view="mail",delete e.search,url.format(e)},mailSubject:function(){return this.getMeta("DC.title")||this.getTitle()},mailBody:function(){return"<"+this.getURL()+">"},mediaUrl:null,orientation:"horizontal",buttonsize:"big",referrerTrack:null,services:["twitter","facebook","googleplus","info"],title:function(){return $("head title").text()},twitterVia:null,flattruser:null,url:function(){var e=global.document.location.href,t=$("link[rel=canonical]").attr("href")||this.getMeta("og:url")||"";return t.length>0&&(t.indexOf("http")<0&&(t=global.document.location.protocol+"//"+global.document.location.host+t),e=t),e}},$socialshareElement:function(){return $(this.element)},getLocalized:function(e,t){return"object"==typeof e[t]?"undefined"==typeof e[t][this.options.lang]?e[t][this.options.langFallback]:e[t][this.options.lang]:"string"==typeof e[t]?e[t]:void 0},getMeta:function(e){var t=$('meta[name="'+e+'"],[property="'+e+'"]').attr("content");return t||""},getInfoUrl:function(){return this.options.infoUrl},getURL:function(){return this.getOption("url")},getOption:function(e){var t=this.options[e];return"function"==typeof t?$.proxy(t,this)():t},getTitle:function(){return this.getOption("title")},getReferrerTrack:function(){return this.options.referrerTrack||""},getMedia:function(){return this.getOption("media")},getShares:function(){var e=url.parse(this.options.backendUrl,!0);return e.query.url=this.getURL(),delete e.search,e.query.timestamp=this.getOption("timestamp"),$.getJSON(url.format(e))},_updateCounts:function(e){var t=this;$.each(e,function(e,r){r>=1e3&&(r=Math.round(r/1e3)+"k"),$(t.element).find("."+e+" a").append('<span class="share_count">'+r)})},_addButtonList:function(){var e=this,t=this.$socialshareElement(),r="theme-"+this.options.theme,i="orientation-"+this.options.orientation,s="col-"+this.options.services.length,n="buttonsize-"+this.options.buttonsize,a=$("<ul>").addClass(r).addClass(i).addClass(s).addClass(n);this.services.forEach(function(t){if(!t.mobileonly||"undefined"!=typeof window.orientation||"object"==typeof window.document.ontouchstart){var r=$('<li class="shariff-button">').addClass(t.name),i='<span class="share_text">'+e.getLocalized(t,"shareText"),s=$("<a>").attr("href",t.shareUrl).append(i);"undefined"!=typeof t.faName&&s.prepend('<span class="s3uu '+t.faName+'">'),t.popup?s.attr("data-rel","popup"):t.blank&&s.attr("target","_blank"),s.attr("title",e.getLocalized(t,"title")),s.attr("role","button"),s.attr("aria-label",e.getLocalized(t,"title")),r.append(s),a.append(r)}}),a.on("click",'[data-rel="popup"]',function(e){e.preventDefault();var t=$(this).attr("href"),r="_blank",i="1000",s="500",n="width="+i+",height="+s+",scrollbars=yes";global.window.open(t,r,n)}),t.append(a)}},module.exports=Shariff,global.Shariff=Shariff,$(".shariff").each(function(){this.hasOwnProperty("shariff")||(this.shariff=new Shariff(this))});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./services/addthis.js":7,"./services/bitcoin.js":8,"./services/diaspora.js":9,"./services/facebook.js":10,"./services/flattr.js":11,"./services/googleplus.js":12,"./services/info.js":13,"./services/linkedin.js":14,"./services/mailform.js":15,"./services/mailto.js":16,"./services/patreon.js":17,"./services/paypal.js":18,"./services/paypalme.js":19,"./services/pinterest.js":20,"./services/printer.js":21,"./services/reddit.js":22,"./services/rss.js":23,"./services/stumbleupon.js":24,"./services/threema.js":25,"./services/tumblr.js":26,"./services/twitter.js":27,"./services/vk.js":28,"./services/whatsapp.js":29,"./services/xing.js":30,"browserify-window":1,"url":6}]},{},[31]);
