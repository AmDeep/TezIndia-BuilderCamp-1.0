(this["webpackJsonpwad-workshop-dapp"]=this["webpackJsonpwad-workshop-dapp"]||[]).push([[0],{120:function(e,t){},204:function(e,t){},206:function(e,t){},216:function(e,t){},218:function(e,t){},247:function(e,t){},248:function(e,t){},254:function(e,t){},273:function(e,t){},327:function(e,t){},332:function(e,t,n){},334:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var c=n(35),r=n.n(c),a=n(185),s=n.n(a),i=n(0),u=n(27),o=n(15),j=new(n(193).a)({name:"Tezos Lottery Dapp",preferredNetwork:"ghostnet"}),b=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.requestPermissions({network:{type:"ghostnet"}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.client.getActiveAccount();case 2:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",t.address);case 7:return e.abrupt("return","");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=(n(332),n(19)),d=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){Object(u.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var a=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return e.next=4,p();case 4:t=e.sent,r(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("nav",{children:[Object(l.jsx)("div",{className:"logo",children:"."}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("a",{href:"https://smartpy.io/explorer?address=KT1XCMYEw6BD73cz3BNhVKZCdjEhLgYdyY2q",className:"navbar",children:"Tezos Lottery"})}),Object(l.jsx)("div",{className:"acc",children:Object(l.jsx)("button",{onClick:a,className:"btn3",children:""!==n?n:"Connect Wallet"})})]})},f=(n(334),new(n(53).a)("https://ghostnet.ecadinfra.com"));f.setWalletProvider(j);var h=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.wallet.at("KT1XCMYEw6BD73cz3BNhVKZCdjEhLgYdyY2q");case 3:return t=e.sent,e.next=6,t.methods.buy_ticket().send({amount:1,mutez:!1});case 6:return n=e.sent,e.next=9,n.confirmation(1);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.wallet.at("KT1XCMYEw6BD73cz3BNhVKZCdjEhLgYdyY2q");case 3:return t=e.sent,e.next=6,t.methods.end_game().send();case 6:return n=e.sent,e.next=9,n.confirmation(1);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),v=n(192),x=n.n(v),m=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.ghostnet.tzkt.io/v1/contracts/KT1XCMYEw6BD73cz3BNhVKZCdjEhLgYdyY2q/storage");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(5),s=Object(o.a)(a,2),j=s[0],b=s[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),v=f[0],x=f[1];Object(c.useEffect)((function(){Object(u.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,r(Object.values(t.players)),b(t.tickets_available);case 5:case"end":return e.stop()}}),e)})))()}),[]);var w=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,h();case 4:alert("Transaction succesful!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Transaction Failed:",e.t0.message);case 10:x(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,O();case 4:alert("Transaction succesful!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:x(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"ana",children:[Object(l.jsx)("div",{className:"Ana1",children:"."}),Object(l.jsxs)("div",{className:"tic1",children:[Object(l.jsxs)("div",{className:"py-1",children:["Tickets remaining: ",j]}),j>0?Object(l.jsxs)("button",{onClick:w,className:"btn1",children:[Object(l.jsxs)("span",{children:[" ",!0===v?"Loading...":"Buy Ticket"]}),Object(l.jsx)("i",{})]}):Object(l.jsxs)("button",{onClick:k,className:"btn1",children:[Object(l.jsxs)("span",{children:[" ",v?"Loading...":"End Game"]}),Object(l.jsx)("i",{})]}),Object(l.jsxs)("div",{className:"player",children:[Object(l.jsx)("div",{className:"ticket",children:"."}),Object(l.jsx)("div",{className:"play",children:n.map((function(e,t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("b",{children:["Ticket ",t+1,":"]})," ",e]},t)}))})]})]}),Object(l.jsx)("div",{className:"Ana2",children:"."})]})]})};n(353);s.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}))}},[[354,1,2]]]);
//# sourceMappingURL=main.0f322bef.chunk.js.map