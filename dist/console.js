/*!
 * @preserve https://github.com/wusfen/console.js
 *
 * #f12 开启 Console控制台
 *
 * hash路由可用以下代替
 * url#/page#f12    url##f12    url#/#f12    url?f12    url?k=v&f12
 */
!function(){var s=function(){},d=function(e,o){for(var n in o)e[n]=o[n];return e},f=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},p=function(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")},n=function(e){var o=n.el=n.el||document.createElement("div");return o.innerHTML=e,o.children[0]},u=function(e,o){for(var n=0;n<e.children.length;n++){var r=e.children[n];if(o==r.className||o==r.tagName.toLowerCase())return r;var t=u(r,o);if(t)return t}},i=function(e,o){e.className+=" "+o},r=function(e,o){e.className=e.className.replace(RegExp(" *"+o,"ig"),"")},h=function(e,o){var n;n=o,e.className.match(n)?r(e,o):i(e,o)},g=n('<div console> <style type="text/css"> .console {z-index: 999999999; position: fixed; left: 0; right: 0; bottom: -1px; font-size: 12px; font-family: Menlo, Monaco, Consolas, "Courier New", monospace; line-height: 1.5; background: rgba(255, 255, 255, .98); box-shadow: rgba(0, 0, 0, 0.2) 0px 0 15px 0; transition: .5s; max-height: 0; max-height: 500px; display: none; } .console * {font: inherit; box-sizing: border-box; } .console.show {display: block; } .console.closed {max-height: 0; } .console.closed .f12 {opacity: .8; } .console .f12 {position: absolute; bottom: 100%; right: 0; background: rgba(255, 255, 255, .98); border: solid 1px #eee; border-bottom: 0; border-radius: 5px 5px 0 0; padding: 5px; box-shadow: rgba(0, 0, 0, 0.1) 4px -4px 10px -4px; color: #555; letter-spacing: -1px; cursor: pointer; } .console ul {list-style: none; margin: 0; padding: 0; padding-bottom: 3em; margin-bottom: -3em; max-height: 350px; overflow: auto; -webkit-overflow-scrolling: touch; } .console ul li {padding: .5em; border-bottom: solid 1px #f7f7f7; overflow: auto; } .console ul li>.obj {float: left; max-width: 100%; padding: 0 .5em; } .console .log {color: #555; } .console .info {background: #f3faff; color: #0095ff; } .console .warn {background: #fffaf3; color: #FF6F00; } .console .error {background: #fff7f7; color: red; } .console .cmd {position: relative; background: #fff; color: #0af; } .console .cmd .key:before {content: "$ "; position: absolute; left: 0; color: #ddd; } .console .obj {cursor: default; white-space: nowrap; } .console .obj:after {content: ""; display: table; clear: both; } .console .key {/*float: left;*/ /*margin-right: 1ex;*/ color: #a71d5d; } .console .value {/*float: left;*/ max-width: 10em; overflow: hidden; text-overflow: ellipsis; } .console .children {clear: both; padding-left: 2em; border-left: dotted 1px #ddd; display: none; } .console .open>.value {white-space: pre; overflow: visible; max-width: none; } .console .open>.children {display: block; } .console .input {line-height: 1.25; display: block; width: 100%; border: none; outline: none; height: 3em; padding: .25em 1em; resize: none; position: relative; background: rgba(255, 255, 255, .8); } </style> <div class="console"> <span class="f12">F12</span> <ul> <li> <div class="obj"> <span class="key"></span> <span class="value"></span> <div class="children"></div> </div> </li> </ul> <textarea class="input" placeholder="$" autofocus></textarea> </div> </div>'),o=u(g,"console"),e=u(o,"f12"),l=u(o,"ul"),a=u(o,"li"),v=u(o,"obj"),t=(u(o,"children"),u(o,"input"));l.innerHTML="",e.onclick=function(){h(o,"closed")};var m=function(e,o,n){l.scrollTop+l.clientHeight>l.scrollHeight-20&&setTimeout(function(){l.scrollTop+=999},41);var r=a.cloneNode(!0);i(r,e),r.innerHTML="",l.appendChild(r);for(var t=0;t<o.length;t++)c("",o[t],r,n);200<l.children.length&&l.removeChild(l.children[0])},c=function(e,o,n,r){var t=v.cloneNode(!0),i=u(t,"key"),l=u(t,"value"),a=u(t,"children");if(n.appendChild(t),!r&&o&&o.nodeType){if(1==o.nodeType){var c=o.cloneNode().outerHTML.split("></"),s=c[0]+(c[1]?">":"");c[1];i.innerText=s,l.innerText=""}else 3==o.nodeType?o.nodeValue.match(/\S/)&&(l.innerText=p(o.nodeValue)):9==o.nodeType&&(i.innerText=e,l.innerText=o.nodeName);o.childNodes;o=function(e){for(var o=[],n=e.length;n--;)o[n]=e[n];return o}(o.childNodes)}else i.innerText=e,(!o||o.toString||o.valueOf)&&(l.innerHTML=p(o+"")),"array"==f(o)&&(l.innerText=o.length+"["+o+"]");i.onclick=l.onclick=function(){window.v=o,h(t,"open"),l._printed||(l._printed=!0,b(o,a,r))}},b=function(e,o,n){if("string"!=f(e)){var r="array"==f(e);for(var t in e)if(c(t,e[t],o,n),r&&500<t)return void c("...","",o,n)}};function x(){if(!x.bool){x.bool=!0;var e={log:s,info:s,warn:s,error:s,dir:s};window.console=window.console||e;var o=d({},window.console);for(var n in e)!function(e){console[e]=function(){o[e].apply(console,arguments),m(e,arguments,"dir"==e)}}(n);addEventListener("error",function(e){m("error",c([e]))},!0);var r=window.XMLHttpRequest||s,t=r.prototype.open;r.prototype.open=function(o,n){var r=this;r.onreadystatechange=function(){if(4==r.readyState){var e=400<r.status?"error":"info";console[e]({headers:r.getAllResponseHeaders(),response:function(){try{return JSON.parse(r.responseText)}catch(e){}return r.responseText}(),toString:function(){return o+" "+n}})}},t.apply(this,arguments)},setTimeout(function(){document.body.appendChild(g)},1);for(var i=console._logs||[],l=0;l<i.length;l++){var a=i[l];m(a.type,"error"==a.type?c(a.arr):a.arr)}delete console._logs}function c(e){if(1==e.length){var o=e[0],n=o.target,r=n.src||n.href;if(!r)return o.toString=function(){return o.message},[o,o.filename,o.lineno+":"+o.colno];r=decodeURIComponent(r),o.toString=function(){return r}}return e}}t.onkeydown=function(e){var o=t.value;if(13!=e.keyCode||!o.match(/[{(,;]$/)){if(13==e.keyCode&&""===o)return l.innerHTML="",!1;if(13==e.keyCode){m("cmd",[o]),setTimeout(function(){t.value="",l.scrollTop+=9999},41),o=o.match(/^\s*{/)?"("+o+")":o;var n=window.eval(o);return console.log(n),!1}}},navigator.userAgent.match(/mobile/i)&&x(),location.href.match(/[?&#]f12/)&&(i(o,"show"),x()),addEventListener("hashchange",function(e){location.hash.match("#f12")?(x(),i(o,"show")):r(o,"show")})}();