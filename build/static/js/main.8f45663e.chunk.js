(this["webpackJsonpreact-2048"]=this["webpackJsonpreact-2048"]||[]).push([[0],{130:function(n,e,t){},131:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(47),c=t.n(a),i=(t(56),t(7)),l=t(2),u=t(3);function s(){var n=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: lightgoldenrodyellow;\n  overflow: hidden;\n  display: flex;\n\n  aside{\n    display: flex;\n    margin-bottom: auto;\n    margin-top: auto;\n    margin-right: auto;\n  }\n"]);return s=function(){return n},n}var d=u.a.div(s());t(29);function f(n){return Math.floor(Math.random()*n)}var g=function(){return Array.from(Array(4),(function(){return Array(4).fill(0)}))},h=function(n){for(var e=f(4),t=f(4),r=!1;!r;)0===n[e][t]&&(n[e][t]=2,r=!0);return console.log("done"),n};function m(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(35vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 4px solid rgba(108, 122, 137, 1);\n  width: 100%;\n  max-width: 35vw;\n  background: rgba(191, 191, 191, 1);\n  margin: auto;\n  margin-right: 10px;\n"]);return m=function(){return n},n}var v=u.a.div(m(),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width}));function b(){var n=Object(l.a)(["\n  width: auto;\n  background: ",";\n  border: 3px solid;\n  border-color: rgba(191, 191, 191, 1);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n   \n  span{\n      color: slategrey;\n      font-size: x-large;\n      font-weight: bold;\n  }\n"]);return b=function(){return n},n}var p=u.a.div(b(),(function(n){return n.value,"rgba(232, 232, 232, 1)"})),w=function(n){var e=n.value;return o.a.createElement(p,null,o.a.createElement("span",null,0==e?"":e))},x=function(n){var e=n.Board;return o.a.createElement(v,{width:e.length,height:e.length},console.log(e),e.map((function(n){return n.map((function(n,e){return o.a.createElement(w,{key:e,value:n})}))})))};function y(){var n=Object(l.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n"]);return y=function(){return n},n}var k=u.a.button(y()),E=function(n){var e=n.callback;return o.a.createElement(k,{onClick:e},"Start Game")},j=t(29),O=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],a=e[1],c=function(){var n=Object(r.useState)(g()),e=Object(i.a)(n,2),t=e[0],o=e[1];return[t,o,function(n){n.x,n.y;for(var e=j(t),r=[],a=0;a<4;a++){var c=e[a].filter((function(n){return 0!=n})),i=0,l=1;if(c.length>1){for(console.log(a),console.log("row.length",c.length);i<c.length-1&&(console.log("time",i),c[l]);)console.log("row[secondBlock]",c[l]),c[i]===c[l]&&(c[i]+=c[l],c[l]=0),l=++i+1;console.log("secondBlock",l),console.log("row",c)}for(var u=c.length;u<4;u++)c.push(0);r.push(c),console.log("finish",a)}console.log(r),h(r),o(r)}]}(g()),l=Object(i.a)(c,3),u=l[0],s=l[1],f=l[2],m=function(n){f({x:n,y:0})},v=function(n){f({x:0,y:n})};return console.log("rerender",u),o.a.createElement(d,{role:"button",tabIndex:"0",onKeyDown:function(n){return function(n){var e=n.keyCode;t||(37===e?m(0):38===e?v(1):39===e?m(4):40===e&&v(-1))}(n)}},o.a.createElement(x,{Board:u}),o.a.createElement("aside",null,o.a.createElement(E,{callback:function(){console.log("test"),s(function(){var n=g();return h(n),h(n),n}()),a(!1)}})))};t(130);var B=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},51:function(n,e,t){n.exports=t(131)},56:function(n,e,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.8f45663e.chunk.js.map