(this.webpackJsonpdartscore=this.webpackJsonpdartscore||[]).push([[0],{113:function(e,n,t){},114:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(0),a=t.n(r),i=t(13),o=t.n(i),s=(t(86),t(25)),l=t(15),u=t(8),j=t(7),d=t(147);function b(){var e=Object(u.a)(["\n    background-color: #2adcc4; //#5dce41;\n    color: black;\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n    padding: 7px 14px;\n    margin: 10px;\n    &:hover {\n        background-color: #24b39f;\n    }\n"]);return b=function(){return e},e}function f(){var e=Object(u.a)(["\n    background-color: #b989f8; // #6772e5;\n    color: black;\n    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n    padding: 7px 14px;\n    margin: 10px;\n    &:hover {\n        background-color: #9d74d3;\n    }\n"]);return f=function(){return e},e}var O=Object(j.a)(d.a)(f()),h=Object(j.a)(d.a)(b());function x(){var e=Object(u.a)(["\n    height: 20px;\n    width: 20px;\n    background-color: #2adcc4;\n    border-radius: 50%;\n    display: inline-block;\n"]);return x=function(){return e},e}function p(){var e=Object(u.a)(["\n    text-align: center;\n    background-color: #252525;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]);return p=function(){return e},e}function g(){var e=Object(u.a)(["\n    text-align: center;\n    background-color: #252525;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: calc(10px + 2vmin);\n    //font-family: 'PressStart2P';\n    font-family: source-code-pro;\n    color: white;\n"]);return g=function(){return e},e}function m(){var e=Object(u.a)(["\n    text-align: center;\n    background-color: #252525;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]);return m=function(){return e},e}var v=j.a.section(m()),y=j.a.section(g()),S=(j.a.section(p()),j.a.span(x())),k=function(){var e=Object(l.f)(),n=function(n){e.push(n)};return Object(c.jsxs)(v,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Dartscore"})}),Object(c.jsx)("div",{children:Object(c.jsx)(O,{onClick:function(){return n("/create")},children:"Create Game"})}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){return n("/join")},children:"Join Game"})})]})},w=t(9),C=t(157);function N(){var e=Object(u.a)(["\n    font-size: 18px;\n    padding: 10px;\n    margin: 10px;\n    background: #b6b6b6;\n    border: none;\n    border-radius: 3px;\n    ::placeholder {\n        color: #666666;\n    }\n    text-transform: uppercase;\n"]);return N=function(){return e},e}function T(){var e=Object(u.a)(["\n    /* default */\n    .MuiInput-underline:before {\n        border-bottom: 2px solid #2adcc4;\n    }\n    /* hover (double-ampersand needed for specificity reasons. */\n    && .MuiInput-underline:hover:before {\n        border-bottom: 2px solid #2adcc4;\n        color: #9d74d3;\n    }\n    /* focused */\n    .MuiInput-underline:after {\n        border-bottom: 2px solid #9d74d3;\n        color: #9d74d3;\n    }\n    & .Mui-focused:after {\n        color: #9d74d3;\n    }\n    & .MuiInput-root {\n        padding: 10px;\n        margin: 10px;\n        color: #2adcc4;\n    }\n    & ::placeholder {\n        color: #9d74d3; //color: #2adcc4;\n    }\n"]);return T=function(){return e},e}var I=Object(j.a)(C.a)(T()),E=(j.a.input(N()),t(29)),J=t.n(E);J.a.defaults.headers.get["Content-Type"]="application/json";var P="https://iukxdiz252.execute-api.us-east-1.amazonaws.com/dev",D=function(e,n){var t="".concat(P,"/update");return J.a.post(t,{game_id:e,game_state:n}).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))},_=function(e){var n="".concat(P,"/gamestate?game=").concat(e);return J.a.get(n).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))},M=t(161),G=t(151);function L(){var e=Object(u.a)(["\n    background-color: #2adcc4;\n    color: black;\n    &:hover {\n        background-color: #9d74d3;\n        color: black;\n    }\n"]);return L=function(){return e},e}var R=Object(j.a)(M.a)(L()),B=function(){var e=Object(l.f)(),n=Object(r.useState)(""),t=Object(w.a)(n,2),a=t[0],i=t[1],o=Object(r.useState)(""),s=Object(w.a)(o,2),u=s[0],j=s[1],d=Object(r.useState)("cricket"),b=Object(w.a)(d,2),f=b[0],O=b[1];Object(r.useEffect)((function(){u||function(){var e="".concat(P,"/generateid");return J.a.get(e).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))}().then((function(e){var n=e.game_id;u||(j(n),console.log(n))}))}),[u]);var x=function(n){(function(e,n){var t="".concat(P,"/create");return J.a.post(t,{game_id:e,game_type:n}).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))})(u,f).then((function(){e.push({pathname:n,state:{gameID:u,player:a}})}))};return Object(c.jsxs)(v,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Dartscore"})}),Object(c.jsx)("div",{children:Object(c.jsxs)("h2",{children:["Game Code: ",u]})}),Object(c.jsx)("div",{children:Object(c.jsx)("label",{children:"Name"})}),Object(c.jsx)("div",{children:Object(c.jsx)(I,{placeholder:"Enter Your Name",inputProps:{maxLength:12,style:{textTransform:"uppercase",textAlign:"center"}},onChange:function(e){return i(e.target.value.toUpperCase())}})}),Object(c.jsx)("div",{children:Object(c.jsxs)(R,{value:f,onChange:function(e,n){null!==n&&O(n)},exclusive:!0,children:[Object(c.jsx)(G.a,{value:"cricket",children:"Cricket"}),Object(c.jsx)(G.a,{value:"fiveOhOne",children:"501"})]})}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){return x("/lobby")},children:"Play"})})]})},U=function(){var e=Object(r.useState)(""),n=Object(w.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(""),o=Object(w.a)(i,2),s=o[0],u=o[1],j=Object(l.f)();return Object(c.jsxs)(v,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Dartscore"})}),Object(c.jsx)("div",{children:Object(c.jsx)("label",{children:"Game Code"})}),Object(c.jsx)("div",{children:Object(c.jsx)(I,{placeholder:"Enter 4-Letter Code",inputProps:{maxLength:4,style:{textTransform:"uppercase",textAlign:"center"}},onChange:function(e){return a(e.target.value.toUpperCase())}})}),Object(c.jsx)("div",{children:Object(c.jsx)("label",{children:"Name"})}),Object(c.jsx)("div",{children:Object(c.jsx)(I,{placeholder:"Enter Your Name",inputProps:{maxLength:12,style:{textTransform:"uppercase",textAlign:"center"}},onChange:function(e){return u(e.target.value.toUpperCase())}})}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){return e="/lobby",void j.push({pathname:e,state:{gameID:t,player:s}});var e},children:"Play"})})]})},z=function(){var e=Object(l.g)().state,n=e.gameID,t=e.player,a=Object(r.useState)(""),i=Object(w.a)(a,2),o=i[0],s=i[1],u=Object(r.useState)(""),j=Object(w.a)(u,2),d=j[0],b=j[1],f=Object(r.useState)(""),O=Object(w.a)(f,2),x=O[0],p=O[1],g=Object(r.useState)(""),m=Object(w.a)(g,2),y=m[0],S=m[1],k=Object(r.useState)(!1),C=Object(w.a)(k,2),N=C[0],T=C[1],I=N&&t===x,E=Object(l.f)();Object(r.useEffect)((function(){o&&b("cricket"===o?"Cricket":"501")}),[o]);var D=Object(r.useRef)(),_="wss://cvc7ipmik7.execute-api.us-east-1.amazonaws.com/dev/?game=".concat(n,"&player=").concat(t),M={game_id:n,msg:"I have connected"};Object(r.useEffect)((function(){D.current||(D.current=new WebSocket(_),D.current.onopen=function(){var e;console.log("ws opened"),null===(e=D.current)||void 0===e||e.send(JSON.stringify(M))},D.current.onmessage=function(){N||function(e){var n="".concat(P,"/lobby?game=").concat(e);return J.a.get(n).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))}(n).then((function(e){var n=e.players,t=e.game_type;s(t),x||(p(n[0].player),console.log(x)),2!==n.length||y||S(n[1].player)}))},D.current.onclose=function(){return console.log("ws closed")})})),Object(r.useEffect)((function(){x&&y&&T(!0)}),[x,y]),Object(r.useEffect)((function(){N&&(D.current.onmessage=function(e){console.log(e),e.data.includes("start")&&G("/game")})}));var G=function(e){E.push({pathname:e,state:{gameID:n,gameType:o,player:t,player1:x,player2:y,connURL:_}})},L={game_id:n,msg:"start"},R=[x,y],B=function(){(function(e,n,t){var c="".concat(P,"/initialize");return J.a.post(c,{game_id:e,players:n,game_type:t}).then((function(e){return e.data})).catch((function(e){return Promise.reject(JSON.stringify(e))}))})(n,R,o).then((function(){var e;null===(e=D.current)||void 0===e||e.send(JSON.stringify(L))}))},U=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(h,{onClick:function(){B()},children:"Play"})})};return Object(c.jsxs)(v,{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Dartscore Lobby: ",n]}),Object(c.jsx)("h1",{children:d})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:x}),y?Object(c.jsx)("h3",{children:y}):Object(c.jsx)("h3",{children:"Waiting For Opponent"})]}),I?Object(c.jsx)(U,{}):null]})},W=t(21),F=t(159),H=j.a.section({position:"absolute",width:300,height:150,backgroundColor:"#252525",border:"2px solid #000",color:"white",padding:"0 30px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),V=Object(j.a)(F.a)({display:"flex",alignItems:"center",justifyContent:"center"});function A(e,n,t){console.log("In check winstate");for(var c=!0,r=0,a=Object.entries(e[n]);r<a.length;r++){var i=Object(w.a)(a[r],2),o=i[0],s=i[1];if(console.log(o),console.log(s),"Total"!==o&&e[n][o]<3){c=!1,console.log("set p1 false");break}}for(var l=!0,u=0,j=Object.entries(e[t]);u<j.length;u++){var d=Object(w.a)(j[u],2),b=d[0],f=d[1];if("Total"!==b&&f<3){console.log(b),console.log(f),l=!1,console.log("set p2 false");break}}return console.log(e[n].Total>e[t].Total),c&&e[n].Total>e[t].Total?(console.log("returning player 1"),n):l&&e[t].Total>e[n].Total?t:""}function Y(e,n,t){return console.log("In check winstate"),0===e[n].Total?n:0===e[t].Total?t:""}var K,q=t(42);function Q(e){return function(n){e({type:K.updateGameState,gameState:n})}}function X(){var e=Object(u.a)(["\n    padding: 10px;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n"]);return X=function(){return e},e}function Z(){var e=Object(u.a)(["\n    height: 40px;\n"]);return Z=function(){return e},e}function $(){var e=Object(u.a)(["\n    padding: 10px;\n    border-top: 3px solid white;\n"]);return $=function(){return e},e}function ee(){var e=Object(u.a)(["\n    padding: 10px;\n    border-bottom: 3px solid white;\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n    border-collapse: collapse;\n    width: 50vw;\n    table-layout: fixed;\n"]);return ne=function(){return e},e}!function(e){e.updateTargetValueByPlayerId="updateTargetValueByPlayerId",e.updateGameState="updateGameState"}(K||(K={}));var te=j.a.table(ne()),ce=j.a.th(ee()),re=j.a.th($()),ae=j.a.tr(Z()),ie=j.a.td(X()),oe=function(e){var n,t=e.gameID,a=e.player,i=e.player1,o=e.player2,s=e.connURL,u=Object(r.useState)(!1),j=Object(w.a)(u,2),d=(j[0],j[1]),b=a===i?o:i,f=(n={},Object(W.a)(n,i,{15:0,16:0,17:0,18:0,19:0,20:0,Total:0,Bull:0}),Object(W.a)(n,o,{15:0,16:0,17:0,18:0,19:0,20:0,Total:0,Bull:0}),n),x=function(e){return Object(r.useReducer)((function(e,n){switch(n.type){case K.updateTargetValueByPlayerId:var t=e[n.playerId],c=Object(q.a)(Object(q.a)({},e[n.playerId]),{},Object(W.a)({},n.segment,t[n.segment]++));return Object(q.a)(Object(q.a)({},e),{},Object(W.a)({},n.playerId,c));case K.updateGameState:return n.gameState;default:return e}}),e)}(f),p=Object(w.a)(x,2),g=p[0],m=p[1],v=Object(r.useState)(""),y=Object(w.a)(v,2),k=y[0],C=y[1],N=Object(r.useState)(!1),T=Object(w.a)(N,2),I=T[0],E=T[1],J=function(){E(!0)},P=function(){E(!1)};Object(r.useEffect)((function(){k?J():P()}),[k]);var M=Object(r.useRef)();Object(r.useEffect)((function(){M.current||(M.current=new WebSocket(s),M.current.onopen=function(){console.log("ws opened"),_(t).then((function(e){var n=e.game_state;d(!1),Q(m)(n),C(A(n,i,o))}))},M.current.onmessage=function(e){JSON.stringify(e.data).includes("-END-")&&L("/"),_(t).then((function(e){var n=e.game_state;d(!1),Q(m)(n),C(A(n,i,o))}))},M.current.onclose=function(){return console.log("ws closed")})}));var G=Object(l.f)(),L=function(e){G.push(e)},R=function(e){var n=function(e,n,t,c){var r=JSON.parse(JSON.stringify(c));if(r[n][e]++,r[n][e]>3&&r[t][e]<3){var a="Bull"===e?25:parseInt(e);r[n].Total+=a}return r}(e,a,b,g),c={game_id:t,msg:a};console.log("new game state"),console.log(n),D(t,n).then((function(){M.current.send(JSON.stringify(c))}))},B=function(e){return 0===e?"":1===e?"/":2===e?"x":e>=3?" \u24e7 ":void 0},U=function(){var e={game_id:t,msg:a};D(t,f).then((function(){M.current.send(JSON.stringify(e))}))},z=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{onClick:U,children:"New Game"}),Object(c.jsx)(O,{onClick:F,children:"Exit"})]})},F=function(){var e={game_id:t,msg:"-END-"};M.current.send(JSON.stringify(e))},Y=Object(c.jsxs)(H,{children:[k?Object(c.jsxs)("h2",{id:"simple-modal-title",children:[k," Wins!"]}):null,a===i?Object(c.jsx)(z,{}):Object(c.jsx)("h3",{children:"Waiting on Host"})]}),X=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{onClick:J,children:"Menu"})})};return Object(c.jsxs)("div",{children:[a===i?Object(c.jsx)(X,{}):null,Object(c.jsx)(te,{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)(ae,{children:[Object(c.jsxs)(ce,{children:[i,"\xa0",a===i?Object(c.jsx)(S,{}):null]}),Object(c.jsx)(ce,{children:"VS"}),Object(c.jsxs)(ce,{children:[o,"\xa0",a===o?Object(c.jsx)(S,{}):null]})]}),["20","19","18","17","16","15","Bull"].map((function(e){return function(e){return Object(c.jsxs)(ae,{children:[Object(c.jsx)("td",{children:B(g[i][e])}),Object(c.jsx)(ie,{children:Object(c.jsx)(h,{onClick:function(){R(e),d(!0)},children:e})}),Object(c.jsx)("td",{children:B(g[o][e])})]})}(e)})),Object(c.jsxs)(ae,{children:[Object(c.jsx)(re,{children:g[i].Total}),Object(c.jsx)(re,{}),Object(c.jsx)(re,{children:g[o].Total})]})]})}),Object(c.jsx)(V,{open:I,onClose:P,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Y})]})},se=t(152),le=t(156),ue=t(155),je=t(154),de=t(153);function be(){var e=Object(u.a)(["\n    color: white;\n    text-align: left;\n"]);return be=function(){return e},e}function fe(){var e=Object(u.a)(["\n    // pull cricket row out into a separate component\n    height: 300px;\n"]);return fe=function(){return e},e}function Oe(){var e=Object(u.a)(["\n    // pull cricket row out into a separate component\n    height: 20px;\n"]);return Oe=function(){return e},e}function he(){var e=Object(u.a)(["\n    padding: 10px;\n    border-bottom: 3px solid white;\n"]);return he=function(){return e},e}function xe(){var e=Object(u.a)(["\n    border-collapse: collapse;\n    width: 100%;\n"]);return xe=function(){return e},e}function pe(){var e=Object(u.a)(["\n    padding: 40px;\n    font-size: calc(150px + 2vmin);\n"]);return pe=function(){return e},e}function ge(){var e=Object(u.a)(["\n    border-left: 6px solid #9d74d3;\n    height: auto;\n"]);return ge=function(){return e},e}function me(){var e=Object(u.a)(["\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n"]);return me=function(){return e},e}function ve(){var e=Object(u.a)(["\n    justify-content: center;\n    display: flex;\n    flex-direction: row;\n"]);return ve=function(){return e},e}function ye(){var e=Object(u.a)(["\n    //add legs\n    text-align: center;\n    background-color: #252525;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    min-height: 50vh;\n    align-items: center;\n    font-size: calc(10px + 2vmin);\n    //font-family: 'PressStart2P';\n    font-family: source-code-pro;\n    color: white;\n"]);return ye=function(){return e},e}var Se=j.a.section(ye()),ke=j.a.div(ve()),we=j.a.div(me()),Ce=j.a.div(ge()),Ne=j.a.label(pe()),Te=Object(j.a)(se.a)(xe()),Ie=j.a.label(he()),Ee=Object(j.a)(de.a)(Oe()),Je=Object(j.a)(je.a)(fe()),Pe=Object(j.a)(ue.a)(be()),De=function(e){var n,t,a=e.gameID,i=e.player,o=e.player1,s=e.player2,u=e.connURL,j=Object(r.useState)(""),d=Object(w.a)(j,2),b=d[0],f=d[1],x=isNaN(Number(b))?0:Number(b),p=Object(r.useState)(!1),g=Object(w.a)(p,2),m=(g[0],g[1]),v=(n={},Object(W.a)(n,o,{Total:501,Moves:[]}),Object(W.a)(n,s,{Total:501,Moves:[]}),n),y=function(e){return Object(r.useReducer)((function(e,n){switch(n.type){case K.updateGameState:return n.gameState;default:return e}}),e)}((t={},Object(W.a)(t,o,{Total:501,Moves:[]}),Object(W.a)(t,s,{Total:501,Moves:[]}),t)),k=Object(w.a)(y,2),C=k[0],N=k[1],T=Object(r.useState)(""),E=Object(w.a)(T,2),J=E[0],P=E[1],M=Object(r.useState)(!1),G=Object(w.a)(M,2),L=G[0],R=G[1],B=function(){R(!0)},U=function(){R(!1)};Object(r.useEffect)((function(){J?B():U()}),[J]);var z=Object(r.useRef)();Object(r.useEffect)((function(){z.current||(z.current=new WebSocket(u),z.current.onopen=function(){console.log("ws opened"),_(a).then((function(e){var n=e.game_state;m(!1),Q(N)(n),P(Y(n,o,s))}))},z.current.onmessage=function(e){JSON.stringify(e.data).includes("-END-")&&A("/"),_(a).then((function(e){var n=e.game_state;m(!1),Q(N)(n),P(Y(n,o,s))}))},z.current.onclose=function(){return console.log("ws closed")})}));var F=Object(l.f)(),A=function(e){F.push(e)},q=function(){if(x){var e=function(e,n,t){var c=JSON.parse(JSON.stringify(t));if([163,166,169,172,173,175,176,178,179].includes(e)||e>180||e<0)return c;var r=c[n].Total-e;return 0===r&&[159,162,163,165,166,168,169].includes(e)||r<0||(c[n].Total=r,c[n].Moves.push(e)),c}(x,i,C),n={game_id:a,msg:i};document.getElementById("score").value="",D(a,e).then((function(){z.current.send(JSON.stringify(n))}))}else document.getElementById("score").value=""},X=function(){var e={game_id:a,msg:i};D(a,v).then((function(){z.current.send(JSON.stringify(e))}))},Z=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(h,{onClick:X,children:"New Game"}),Object(c.jsx)(O,{onClick:$,children:"Exit"})]})},$=function(){var e={game_id:a,msg:"-END-"};z.current.send(JSON.stringify(e))},ee=Object(c.jsxs)(H,{children:[J?Object(c.jsxs)("h2",{id:"simple-modal-title",children:[J," Wins!"]}):null,i===o?Object(c.jsx)(Z,{}):Object(c.jsx)("h3",{children:"Waiting on Host"})]}),ne=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(O,{onClick:B,children:"Menu"})})},te=function(e){for(var n=[],t=C[e].Moves,r=0;r<t.length;r++)n.push(Object(c.jsxs)(Ee,{children:[Object(c.jsx)(Pe,{children:3*(r+1)}),Object(c.jsx)(Pe,{children:t[r]})]}));return n.reverse()};return Object(c.jsxs)("div",{children:[i===o?Object(c.jsx)(ne,{}):null,Object(c.jsxs)(Se,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(I,{placeholder:"INPUT SCORE",id:"score",onChange:function(e){return f(e.target.value.toUpperCase())},onKeyDown:function(e){return function(e){"Enter"===e.key&&x&&q()}(e)}}),Object(c.jsx)(h,{onClick:q,children:"submit"})]}),Object(c.jsxs)(ke,{children:[Object(c.jsxs)(we,{children:[Object(c.jsx)(Ne,{children:C[o].Total}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:o})," ",i===o?Object(c.jsx)(S,{}):null]}),Object(c.jsx)(Ie,{children:"Scores"}),Object(c.jsx)(Je,{children:Object(c.jsx)(Te,{stickyHeader:!0,children:Object(c.jsx)(le.a,{children:te(o)})})})]}),Object(c.jsx)(Ce,{}),Object(c.jsxs)(we,{children:[Object(c.jsx)(Ne,{children:C[s].Total}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:s})," ",i===s?Object(c.jsx)(S,{}):null]}),Object(c.jsx)(Ie,{children:"Scores"}),Object(c.jsx)(Je,{children:Object(c.jsx)(Te,{stickyHeader:!0,children:Object(c.jsx)(le.a,{children:te(s)})})})]})]})]}),Object(c.jsx)(V,{open:L,onClose:U,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:ee})]})},_e=function(){var e=Object(l.g)().state,n=e.gameID,t=e.gameType,r=e.player,a=e.player1,i=e.player2,o=e.connURL;return"cricket"===t?Object(c.jsxs)(y,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Cricket"}),Object(c.jsxs)("h3",{children:["Game Code: ",n]})]}),Object(c.jsx)("div",{children:Object(c.jsx)(oe,{gameID:n,connURL:o,player:r,player1:a,player2:i})})]}):"fiveOhOne"===t?Object(c.jsxs)(y,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"501"}),Object(c.jsxs)("h3",{children:["Game Code: ",n]})]}),Object(c.jsx)("div",{children:Object(c.jsx)(De,{gameID:n,connURL:o,player:r,player1:a,player2:i})})]}):void 0},Me=t(158),Ge=(t(113),function(){return Object(c.jsx)(Me.b,{injectFirst:!0,children:Object(c.jsx)(s.a,{basename:".",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",component:k,exact:!0}),Object(c.jsx)(l.a,{path:"/join",component:U,exact:!0}),Object(c.jsx)(l.a,{path:"/create",component:B,exact:!0}),Object(c.jsx)(l.a,{path:"/lobby",render:function(){return Object(c.jsx)(z,{})},exact:!0}),Object(c.jsx)(l.a,{path:"/game",component:_e,exact:!0})]})})})}),Le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,162)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};t.p;o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Ge,{})}),document.getElementById("root")),Le()},86:function(e,n,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.1e6b84f0.chunk.js.map