(this.webpackJsonpdartscore=this.webpackJsonpdartscore||[]).push([[0],{42:function(e,n,t){},65:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(0),a=t.n(r),i=t(33),o=t.n(i),u=(t(42),t(13)),s=t(2),l=t(4),j=t(5);function d(){var e=Object(l.a)(["\n    color: #30e06b;\n    font-size: 1em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border: 2px solid #30e06b;\n    border-radius: 3px;\n"]);return d=function(){return e},e}function b(){var e=Object(l.a)(["\n    color: #4fa1ee;\n    font-size: 1em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border: 2px solid#4fa1ee;\n    border-radius: 3px;\n"]);return b=function(){return e},e}var f=j.a.button(b()),h=j.a.button(d());function O(){var e=Object(l.a)(["\n    text-align: center;\n    background-color: #aac4f7;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: #030303;\n"]);return O=function(){return e},e}function p(){var e=Object(l.a)(["\n    text-align: center;\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: calc(10px + 2vmin);\n    //font-family: 'PressStart2P';\n    font-family: source-code-pro;\n    color: white;\n"]);return p=function(){return e},e}function x(){var e=Object(l.a)(["\n    text-align: center;\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]);return x=function(){return e},e}var g=j.a.section(x()),m=j.a.section(p()),v=(j.a.section(O()),function(){var e=Object(s.f)(),n=function(n){e.push(n)};return Object(c.jsxs)(g,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Dartscore"})}),Object(c.jsx)("div",{children:Object(c.jsx)(f,{onClick:function(){return n("/create")},children:"Create Game"})}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){return n("/join")},children:"Join Game"})})]})}),y=t(7);function S(){var e=Object(l.a)(["\n    font-size: 18px;\n    padding: 10px;\n    margin: 10px;\n    background: #b6b6b6;\n    border: none;\n    border-radius: 3px;\n    ::placeholder {\n        color: #666666;\n    }\n    text-transform: uppercase;\n"]);return S=function(){return e},e}var C=j.a.input(S()),w=t(12),k=t.n(w);k.a.defaults.headers.get["Content-Type"]="application/json";var I="https://iukxdiz252.execute-api.us-east-1.amazonaws.com/dev",P=function(e){var n="".concat(I,"/gamestate?game=").concat(e);return k.a.get(n).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))},N=function(){var e=Object(s.f)(),n=Object(r.useState)(""),t=Object(y.a)(n,2),a=t[0],i=t[1],o=Object(r.useState)(""),u=Object(y.a)(o,2),l=u[0],j=u[1];Object(r.useEffect)((function(){l||function(){var e="".concat(I,"/generateid");return k.a.get(e).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))}().then((function(e){var n=e.game_id;l||(j(n),console.log(n))}))}),[l]);var d=function(n){(function(e){var n="".concat(I,"/create");return k.a.post(n,{game_id:e}).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))})(l).then((function(){e.push({pathname:n,state:{gameID:l,player:a}})}))};return Object(c.jsxs)(g,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Dartscore"})}),Object(c.jsx)("div",{children:Object(c.jsxs)("h2",{children:["Game Code: ",l]})}),Object(c.jsx)("div",{children:Object(c.jsx)("label",{children:"Name"})}),Object(c.jsx)("div",{children:Object(c.jsx)(C,{placeholder:"Enter Your Name",onChange:function(e){return i(e.target.value.toUpperCase())}})}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){return d("/lobby")},children:"Play"})})]})},J=function(){var e=Object(r.useState)(""),n=Object(y.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(""),o=Object(y.a)(i,2),u=o[0],l=o[1],j=Object(s.f)();return Object(c.jsxs)(g,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Dartscore"})}),Object(c.jsx)("div",{children:Object(c.jsx)("label",{children:"Game Code"})}),Object(c.jsx)("div",{children:Object(c.jsx)(C,{placeholder:"Enter 4-Letter Code",onChange:function(e){return a(e.target.value.toUpperCase())}})}),Object(c.jsx)("div",{children:Object(c.jsx)("label",{children:"Name"})}),Object(c.jsx)("div",{children:Object(c.jsx)(C,{placeholder:"Enter Your Name",onChange:function(e){return l(e.target.value.toUpperCase())}})}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){return e="/lobby",void j.push({pathname:e,state:{gameID:t,player:u}});var e},children:"Play"})})]})},D=function(){var e=Object(s.g)().state,n=e.gameID,t=e.player,a=Object(r.useState)(""),i=Object(y.a)(a,2),o=i[0],u=i[1],l=Object(r.useState)(""),j=Object(y.a)(l,2),d=j[0],b=j[1],f=Object(r.useState)(!1),O=Object(y.a)(f,2),p=O[0],x=O[1],m=p&&t===o,v=Object(s.f)(),S=Object(r.useRef)(),C="wss://cvc7ipmik7.execute-api.us-east-1.amazonaws.com/dev/?game=".concat(n,"&player=").concat(t),w={game_id:n,msg:"I have connected"};Object(r.useEffect)((function(){S.current||(S.current=new WebSocket(C),S.current.onopen=function(){var e;console.log("ws opened"),null===(e=S.current)||void 0===e||e.send(JSON.stringify(w))},S.current.onmessage=function(){p||function(e){var n="".concat(I,"/lobby?game=").concat(e);return k.a.get(n).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))}(n).then((function(e){var n=e.players;o||(u(n[0].player),console.log(o)),2!==n.length||d||b(n[1].player)}))},S.current.onclose=function(){return console.log("ws closed")})})),Object(r.useEffect)((function(){o&&d&&x(!0)}),[o,d]),Object(r.useEffect)((function(){p&&(S.current.onmessage=function(e){console.log(e),e.data.includes("start")&&P("/game")})}));var P=function(e){v.push({pathname:e,state:{gameID:n,player:t,player1:o,player2:d,connURL:C}})},N={game_id:n,msg:"start"},J=[o,d],D=function(){(function(e,n,t){var c="".concat(I,"/initialize");return k.a.post(c,{game_id:e,players:n,game_type:t}).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))})(n,J,"cricket").then((function(){var e;null===(e=S.current)||void 0===e||e.send(JSON.stringify(N))}))},T=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){D()},children:"Play"})})};return Object(c.jsxs)(g,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("h1",{children:["Dartscore Lobby: ",n]})}),Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:o})}),Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:d})}),m?Object(c.jsx)(T,{}):null]})},T=t(11);var _,z=t(18);function B(e){return function(n){e({type:_.updateGameState,gameState:n})}}function E(){var e=Object(l.a)(["\n    padding: 10px;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n"]);return E=function(){return e},e}function G(){var e=Object(l.a)(["\n    height: 70px;\n"]);return G=function(){return e},e}function L(){var e=Object(l.a)(["\n    padding: 10px;\n    border-top: 3px solid white;\n"]);return L=function(){return e},e}function R(){var e=Object(l.a)(["\n    padding: 10px;\n    border-bottom: 3px solid white;\n"]);return R=function(){return e},e}function U(){var e=Object(l.a)(["\n    border-collapse: collapse;\n    width: 100%;\n"]);return U=function(){return e},e}!function(e){e.updateTargetValueByPlayerId="updateTargetValueByPlayerId",e.updateGameState="updateGameState"}(_||(_={}));var F=j.a.table(U()),V=j.a.th(R()),W=j.a.th(L()),Y=j.a.tr(G()),M=j.a.td(E()),q=function(e){var n,t,a=e.gameID,i=e.player,o=e.player1,u=e.player2,s=e.connURL,l=Object(r.useState)(!1),j=Object(y.a)(l,2),d=(j[0],j[1]),b=i===o?u:o,f=(n={},Object(T.a)(n,o,{15:0,16:0,17:0,18:0,19:0,20:0,Total:0,Bull:0}),Object(T.a)(n,u,{15:0,16:0,17:0,18:0,19:0,20:0,Total:0,Bull:0}),t=n,Object(r.useReducer)((function(e,n){switch(n.type){case _.updateTargetValueByPlayerId:var t=e[n.playerId],c=Object(z.a)(Object(z.a)({},e[n.playerId]),{},Object(T.a)({},n.segment,t[n.segment]++));return Object(z.a)(Object(z.a)({},e),{},Object(T.a)({},n.playerId,c));case _.updateGameState:return n.gameState;default:return e}}),t)),h=Object(y.a)(f,2),O=h[0],p=h[1],x=Object(r.useRef)();Object(r.useEffect)((function(){x.current||(x.current=new WebSocket(s),x.current.onopen=function(){console.log("ws opened"),P(a).then((function(e){var n=e.game_state;d(!1),B(p)(n)}))},x.current.onmessage=function(e){console.log(e.data),console.log(!e.data.includes(i)),P(a).then((function(e){var n=e.game_state;d(!1),B(p)(n)}))},x.current.onclose=function(){return console.log("ws closed")})}));var g=function(e){var n=function(e,n,t,c){var r=JSON.parse(JSON.stringify(c));if(r[n][e]++,r[n][e]>3&&r[t][e]<3){var a="Bull"===e?25:parseInt(e);r[n].Total+=a}return r}(e,i,b,O),t={game_id:a,msg:i};console.log("new game state"),console.log(n),function(e,n){var t="".concat(I,"/update");return k.a.post(t,{game_id:e,game_state:n}).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))}(a,n).then((function(){x.current.send(JSON.stringify(t))}))},m=function(e){return 0===e?"":1===e?"/":2===e?"x":e>=3?" \u24e7 ":void 0};return Object(c.jsx)(F,{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)(Y,{children:[Object(c.jsx)(V,{children:o}),Object(c.jsx)(V,{children:"VS"}),Object(c.jsx)(V,{children:u})]}),["20","19","18","17","16","15","Bull"].map((function(e){return function(e){return Object(c.jsxs)(Y,{children:[Object(c.jsx)("td",{children:m(O[o][e])}),Object(c.jsx)(M,{children:Object(c.jsx)("button",{onClick:function(){g(e),d(!0)},children:e})}),Object(c.jsx)("td",{children:m(O[u][e])})]})}(e)})),Object(c.jsxs)(Y,{children:[Object(c.jsx)(W,{children:O[o].Total}),Object(c.jsx)(W,{}),Object(c.jsx)(W,{children:O[u].Total})]})]})})},A=function(){var e=Object(s.g)().state,n=e.gameID,t=e.player,r=e.player1,a=e.player2,i=e.connURL;return Object(c.jsxs)(m,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Cricket"}),Object(c.jsxs)("h3",{children:["Game Code: ",n]})]}),Object(c.jsx)("div",{children:Object(c.jsx)(q,{gameID:n,connURL:i,player:t,player1:r,player2:a})})]})},H=(t(65),function(){return Object(c.jsx)(u.a,{basename:"/dartscore",children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{path:"/",component:v,exact:!0}),Object(c.jsx)(s.a,{path:"/join",component:J,exact:!0}),Object(c.jsx)(s.a,{path:"/create",component:N,exact:!0}),Object(c.jsx)(s.a,{path:"/lobby",render:function(){return Object(c.jsx)(D,{})},exact:!0}),Object(c.jsx)(s.a,{path:"/game",component:A,exact:!0})]})})}),K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};t.p;o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root")),K()}},[[66,1,2]]]);
//# sourceMappingURL=main.0cae15bc.chunk.js.map