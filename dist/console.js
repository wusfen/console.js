"use strict";function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}
/*!
 * @preserve https://github.com/wusfen/console.js
 *
 * #f12 开启 Console控制台
 *
 * hash路由可用以下代替
 * url#/route#f12    url?f12    url?k=v&f12
 */!function(c){function p(n,e,o,t){var r=(3<arguments.length&&void 0!==t?t:300)/15,a=(e-n)/r,c=0,l=setInterval(function(){n+=a,++c>=r&&(n=e,clearInterval(l)),o(n)},15)}function h(){try{throw new Error("trace")}catch(n){var e=n.stack.replace(/^Error.*\n/,"").split(/\n/).slice(2).concat("trace"),o=e[0].match(/([^/?=&#:() ]+)(\?[^?]*?)?(:\d+)(:\d+)\)?$/);return e.__string__=o?"".concat(o[1]).concat(o[3]):e[0],e}}function o(){var n=y.value;if(n){if("clear"==n)return m.innerHTML="",y.value="";var e=w("cmd",[n]);e.code=n,e.addEventListener("click",function(){y.value=e.code},!0),setTimeout(function(){m.scrollTop+=9999}),n=/^\s*{/.test(n)?"("+n+")":n,n=/^await/.test(n)?"(async()=>{console.log(".concat(n,")})()"):n,n="with(console){".concat(n,"}");var o=c.eval(n);y.value="",console.log(o)}}function l(){if(!l.bool){l.bool=!0;var n={log:i,info:i,warn:i,error:i,dir:i,table:i};c.console=c.console||n;var e,o=s({},c.console);for(e in n)!function(n){console[n]=function(){o[n].apply(this,arguments),w(n,arguments,h())}}(e);addEventListener("error",function(n){w("error",[n])},!0);var t=c.XMLHttpRequest||i,r=t.prototype.open,b=t.prototype.send;t.prototype.open=function(d,u){var p=this;r.apply(this,arguments);var f={},o=p.setRequestHeader;p.setRequestHeader=function(n,e){f[n]=e,o.apply(this,arguments)},p.send=function(r){function n(){var n,e,o,t;s&&s.apply(p,arguments),4==p.readyState&&(n=new Date,e=p.status,o=/^(2..|304)$/.test(e)?"ajax success":"ajax error",t=w(o,[{__string__:"[".concat(d,"] (").concat(e,") ").concat(n-i,"ms ").concat(a),url:u,requestHeaders:f,requestBody:function(){r=decodeURIComponent(r);try{return JSON.parse(r)}catch(n){}return r}(),xhr:p,responseHeaders:p.getAllResponseHeaders(),responseBody:function(){var n=p.response||p.responseText;try{return JSON.parse(n)}catch(n){}return n}()}],l),c.parentNode.replaceChild(t,c))}var a=u.split(/\/(?=[^/]+\/[^/]+$)/)[1]||u,c=w("ajax warn",[{__string__:"[".concat(d,"] (pending) ").concat(a),url:u,requestBody:r,xhr:p}]),l=h(),i=new Date,s=p.onreadystatechange;s?p.onreadystatechange=n:setTimeout(function(){s=p.onreadystatechange,p.onreadystatechange=n},0),b.apply(this,arguments)}};var a=c.fetch;a&&(c.fetch=function(c){var l=c.split(/\/(?=[^/]+\/[^/]+$)/)[1]||c,i=arguments[1]||"",s=i.method||"GET",d=w("ajax",[{__string__:"[".concat(s,"] (pending) ").concat(l),url:c,requestInit:i}]),u=h(),p=new Date;return a.apply(this,arguments).then(function(t){var o=new Date,r=t.status,a=/^(2..|304)$/.test(r)?"ajax success":"ajax error";return t.clone().text().then(function(n){var e=w(a,[{__string__:"[".concat(s,"] (").concat(r,") ").concat(o-p,"ms ").concat(l),url:c,requestInit:i,response:t,responseHeaders:function(){for(var n,e=t.headers.keys(),o={};!(n=e.next()).done;)o[n.value]=t.headers.get(n.value);return o}(),responseBody:function(){try{return JSON.parse(n)}catch(n){}return n}()}],u);d.parentNode.replaceChild(e,d)}),t}).catch(function(n){var e=w("ajax error",[{__string__:"[".concat(s,"] (Failed) ").concat(l),url:c,requestInit:i,response:n.message}],u);return d.parentNode.replaceChild(e,d),Promise.reject(n)})}),console.storage={localStorage:localStorage,sessionStorage:sessionStorage,"document.cookie":document.cookie},console.temp1=document,console.$0=document.body,setTimeout(function(){document.documentElement.appendChild(u)},1)}}function f(n,e){d(n,e)||(n.className+=" "+e)}function t(n,e){n.className=n.className.replace(RegExp(" *"+e,"ig"),"")}function b(n,e){(d(n,e)?t:f)(n,e)}var i=function(){},s=function(n,e){for(var o in e)n[o]=e[o];return n},g=function(n){return n instanceof Element?"element":Object.prototype.toString.call(n).slice(8,-1).toLowerCase()},r=function(n){var e=r.el=r.el||document.createElement("div");return e.innerHTML=n,e.children[0]},a=function(n,e){for(var o,t=0;t<n.children.length;t++){if(e==(o=n.children[t]).className||e==o.tagName.toLowerCase())return o;var r=a(o,e);if(r)return r}},d=function(n,e){return n.className.match(e)},u=r('\n  <console>\n    <style>\n      html {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        min-height: 100vh;\n      }\n      console {\n        display:block;\n        z-index: 999999999;\n        position: fixed;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        width: 100%;\n        max-width: 768px;\n        margin: auto auto 0;\n        font-size: 12px;\n        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;\n        line-height: 1.5;\n        color: #333;\n        box-shadow: rgba(125, 125, 125, 0.3) 0px 0 15px 0;\n        text-align: left;\n        cursor: default;\n        text-shadow: 0px 1px 1px #fff;\n        touch-action: manipulation;\n        -webkit-overflow-scrolling: touch;\n        -webkit-text-size-adjust: none;\n      }\n      console key {\n        position: absolute;\n        bottom: 100%;\n        right: 1em;\n        padding: 2px 5px;\n        border: solid 1px #eee;\n        border-bottom: 0;\n        border-radius: 5px 5px 0 0;\n        background: rgba(255, 255, 255, .8);\n        box-shadow: rgba(0, 0, 0, 0.1) 4px -4px 10px -4px;\n        color: #555;\n        cursor: pointer;\n      }\n      console main{\n        display: block;\n        position: relative;\n        height: 322px;\n        max-height: calc(100vh - 30px);\n        transition: .3s cubic-bezier(.25, 0, 1, 1);\n      }\n      console.hidden {\n        display: none;\n      }\n      console.closed main {\n        max-height: 0;\n        overflow: hidden;\n        transition: .3s cubic-bezier(0, 0, .25, 1);\n      }\n      @media all and (min-width:768px) {\n        console ::-webkit-scrollbar {\n          width: 6px;\n          height: 10px;\n        }\n        console ::-webkit-scrollbar-thumb {\n          border-radius: 9px;\n          border: 1px solid transparent;\n          box-shadow: 0 0 0 5px rgba(0, 0, 0, .1) inset;\n        }\n      }\n      @media all and (max-width:768px) {\n        ::-webkit-scrollbar {\n          display: none;\n        }\n      }\n      @media all {\n        console ul {\n          -webkit-overflow-scrolling: touch;\n        }\n        console ul:before {\n          content: "";\n          float: left;\n          height: calc(100% + 1px);\n          width: 1px;\n          margin-left: -1px;\n        }\n      }\n      console * {\n        font: inherit;\n        box-sizing: border-box;\n        transition: .3s, opacity .6s;\n      }\n      console nav{\n        display: flex;\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        right: 0;\n        white-space: nowrap;\n        overflow: auto;\n        border-top: solid 1px rgba(255, 255, 255, 0.2);\n        border-bottom: solid 1px rgba(200, 200, 200, 0.2);\n        background: rgba(250, 250, 250, 0.5);\n        color: #333;\n        -webkit-backdrop-filter: blur(1.5px);\n        backdrop-filter: blur(1.5px);\n      }\n      console nav>*{\n        padding: .25em .5em;\n      }\n      console ul {\n        height: 100%;\n        padding: 0;\n        padding-top: 26px;\n        padding-bottom: 3em;\n        margin: 0;\n        margin-bottom: -3em;\n        overflow: auto;\n        list-style: none;\n        background: rgba(255, 255, 255, 0.95);\n      }\n      console ul li {\n        display: flex;\n        align-items: start;\n        padding: .25em;\n        border-top: solid 1px rgba(255, 255, 255, 0.4);\n        border-bottom: solid 1px rgba(200, 200, 200, 0.2);\n        overflow: auto;\n        white-space: nowrap;\n      }\n      console .log {\n        background: rgba(250, 250, 255, 0.1);\n      }\n      console .info {\n        color: #0095ff;\n        background: rgba(125, 200, 255, 0.1);\n      }\n      console .warn {\n        color: #FF6F00;\n        background: rgba(255, 225, 125, 0.1);\n      }\n      console .error {\n        color: red;\n        background: rgba(255, 125, 125, 0.1);\n      }\n      console .ajax {\n        background: rgba(125, 200, 125, 0.1);\n        background: rgba(125, 243, 255, 0.1);\n      }\n      console .success {\n        color: #0d0;\n        color: #00ccee;\n      }\n      console .cmd {\n        position: relative;\n        background: rgba(255, 255, 255, 0.1);\n      }\n      console .cmd .key:before {\n        content: "$ ";\n        position: absolute;\n        left: 0;\n        color: #ddd;\n      }\n      console li>.obj {\n        display: inline-block;\n        vertical-align: top;\n        padding: 0 .5em;\n      }\n      console .obj {\n        white-space: nowrap;\n      }\n      console .key {\n        color: #a71d5d;\n      }\n      console .value {}\n      console .number>.value { color: #5b00ff }\n      console .string>.value { color: #666 }\n      console .boolean>.value { color: #ff0060 }\n      console .null>.value { color: #ccc }\n      console .undefined>.value { color: #ccc }\n      console .function>.value { color: #489ae0 }\n      console .htmldocument>.value,\n      console .element>.value { color: #a71d5d }\n      console .cmd .value{ color: #0af}\n      console .htmldocument>.value:after,\n      console .element>.value:after {\n        content: \' ⇿\';\n      }\n      console .htmldocument.open>.value:after,\n      console .element.open>.value:after {\n        visibility: hidden;\n      }\n      console .obj.open>.value {\n        display: inline-block;\n        vertical-align: top;\n        max-width: calc(100vw - 2em);\n        width: max-content;\n        white-space: pre-wrap;\n        word-break: break-word;\n      }\n      console :not(.ajax)>.object.open>.value {\n        opacity: .1;\n      }\n      console .children {\n        max-width: 0;\n        max-height: 0;\n        padding-left: 1em;\n        border-left: dotted 1px #ddd;\n        overflow: hidden;\n        opacity: 0;\n        transition: .3s cubic-bezier(0, 1, 0, 1), opacity .6s;\n      }\n      console .open>.children {\n        max-width: 59999px;\n        max-height: 59999px;\n        overflow: auto;\n        opacity: 1;\n        transition: .3s cubic-bezier(1, 0, 1, 0), opacity .6s;\n      }\n      console textarea {\n        line-height: 1.25;\n        display: block;\n        width: 100%;\n        border: none;\n        border-radius: 0;\n        outline: none;\n        height: 3em;\n        padding: .25em 1em;\n        resize: none;\n        position: relative;\n        background: rgba(255, 255, 255, .25);\n        -webkit-backdrop-filter: blur(1.5px);\n        backdrop-filter: blur(1.5px);\n        color: #333;\n      }\n\n      console li>.obj:nth-last-child(2) { flex: 1 }\n      console .obj.trace>.value { color: #ccc }\n\n      @supports (position: sticky){\n        console {\n          position: sticky\n        }\n      }\n      @supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {\n        console ul {\n          background: rgba(255, 255, 255, 0.8);\n          -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n        }\n      }\n    </style>\n    <key>F12</key>\n    <main>\n      <nav>\n        <b>clear</b>\n        <b>location</b>\n        <b>document</b>\n        <b>storage</b>\n        <b>window</b>\n        <b>screen</b>\n        <b>navigator</b>\n        <b>history</b>\n        <b>performance</b>\n        <a href="https://github.com/wusfen/console.js" target="_blank">\n          <svg style="height: 1em;width:1em;vertical-align:middle" viewBox="0 0 16 16" version="1.1" aria-hidden="true">\n            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>\n          </svg>\n          console.js\n        </a>\n      </nav>\n      <ul>\n        <li>\n          <div class="obj">\n            <span class="key"></span>\n            <span class="value"></span>\n            <div class="children"></div>\n          </div>\n        </li>\n      </ul>\n      <textarea placeholder="$"></textarea>\n    </main>\n  </console>\n  '),n=a(u,"key"),m=(a(u,"main"),a(u,"ul")),v=a(u,"li"),x=a(u,"obj"),y=a(u,"textarea"),e=a(u,"nav");m.innerHTML="",n.onclick=function(){b(u,"closed")};var w=function(n,e,o){var t=m.scrollTop+m.clientHeight>m.scrollHeight-40,r=v.cloneNode(!0);f(r,n),r.innerHTML="",m.appendChild(r);var a=(e[0]+"").match(/%c.+?(?=%c|$)+/g);if(a){for(var c=0;c<a.length;c++)k("",a[c].slice(2),r).setAttribute("style",e[c+1]);e=[""]}for(var l=0;l<e.length;l++)k("",e[l],r,n);var i=k("",o||"",r);return f(i,"trace"),500<m.children.length&&m.removeChild(m.children[0]),t&&(m.scrollTop+=9999),r},k=function(n,c,l,i){var s=x.cloneNode(!0),e=a(s,"key"),d=a(s,"value"),u=a(s,"children");return l.appendChild(s),e.innerText=n,d.innerHTML=function n(e){if(!e)return e+"";if(e.__string__){var o=e.__string__;return delete e.__string__,o}if("object"==g(e)){var t=Object.keys(e)[0];if(void 0===t)return"[Object]{}";var r=e[t];return"{ ".concat(t,": ").concat((r+"").slice(0,15)," …}")}if(e.message)return e.message;if("error"===e.type)return"[error] ".concat(n(e.target));if(e instanceof Array)return"("+e.length+")["+e+"]";var a=e||"",c=a.nodeType;return 9==c?a.nodeName:10==c?"<!DOCTYPE html>":1!=c?3==c?a.nodeValue:8==c?"\x3c!--"+a.nodeValue+"--\x3e":e+"":a.cloneNode().outerHTML.split(/(?=<\/|$)/)[0]}(c).replace(/</g,"&lt;").replace(/>/g,"&gt;"),f(s,g(c)),s.onclick=d.onclick=function(n){b(s,"open"),setTimeout(function(){s.offsetLeft<50||p(l.scrollLeft,s.offsetLeft,function(n){return l.scrollLeft=n})},150),setTimeout(function(){var n=m.getBoundingClientRect(),e=s.getBoundingClientRect().top-n.top;p(m.scrollTop,m.scrollTop+e-26-4,function(n){return m.scrollTop=n})},150),c.scrollIntoView&&c.scrollIntoView({behavior:"smooth"});var e=10;if(c instanceof Element){for(;e--;)console["$"+e]=console["$"+(e-1)];console.$0=c}else{for(;e--;)console["temp"+e]=console["temp"+(e-1)];console.temp1=c,console.v=c}if(n.stopPropagation(),"object"==_typeof(c)&&!d._printed){if(d._printed=!0,c&&c.childNodes&&"dir"!==i){for(var o,t=function(n){for(var e=[],o=n.length;o--;)e[o]=n[o];return e}(c.childNodes),r=0;r<t.length;r++)o=t[r],k("",o,u);return}for(var a in c)if(k(a,c[a],u),"array"==g(c)&&500<a)return void k("...","",u)}},s};y.onkeydown=function(n){var e=y.value;return 13==n.keyCode&&e.match(/[[{(,;]$/)?void 0:13==n.keyCode&&""===e?(m.innerHTML="",!1):13==n.keyCode?(o(),!1):void 0},y.onblur=function(){o()},e.onclick=function(n){var e=n.target;/b/i.test(e.tagName)&&(y.value=e.innerHTML,o())};var _=console.show;Object.defineProperty(console,"show",{configurable:!0,set:function(n){(_=n)&&(l(),setTimeout(function(){t(u,"hidden"),f(u,"closed")})),2==n&&setTimeout(function(){t(u,"closed")},100),n||f(u,"hidden")},get:function(){return _}}),_&&(console.show=_),navigator.userAgent.match(/mobile/i)&&l(),location.href.match(/[?&#]f12\b/)&&(console.show=1),addEventListener("hashchange",function(){location.hash.match(/#f12\b/)&&(console.show=1)})}(window);