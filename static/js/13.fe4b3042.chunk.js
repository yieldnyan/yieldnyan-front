(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{891:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return l}));var c=n(2),a=n.n(c),r=n(6),i=n(93),o=n.n(i),s=n(80),u=function(e,t){return new(new o.a(e).eth.Contract)(s,t)},j=function(){var e=Object(r.a)(a.a.mark((function e(t,n,c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.allowance(c,n.options.address).call();case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","0");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,c){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(a.a.mark((function e(t,n,c){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(t,n),e.prev=1,e.next=4,r.methods.balanceOf(c).call();case 4:return i=e.sent,e.abrupt("return",i);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},893:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return x}));var c=n(2),a=n.n(c),r=n(6),i=n(19),o=n(0),s=n(8),u=n.n(s),j=n(51),l=n(237),b=n(54),p=n(891),d=n(31),f=n(162),O=function(){var e=Object(f.a)().slowRefresh,t=Object(o.useState)(),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(o.useEffect)((function(){function e(){return(e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.a)(l,Object(d.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,s(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},x=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(j.j)(),b=l.account,d=l.ethereum,O=Object(f.a)().slowRefresh;return Object(o.useEffect)((function(){b&&d&&function(){var t=Object(r.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.c)(d,e,"0x000000000000000000000000000000000000dEaD");case 2:n=t.sent,s(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b,d,e,O]),c};t.a=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(j.j)(),b=l.account,d=l.ethereum,O=Object(f.a)().fastRefresh;return Object(o.useEffect)((function(){b&&d&&function(){var t=Object(r.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.c)(d,e,b);case 2:n=t.sent,s(new u.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b,d,e,O]),c}},937:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return je}));var c,a,r,i,o,s,u,j,l,b,p,d,f,O=n(13),x=n(0),h=n(3),m=n(14),g=n(38),v=n(136),w=n(2),k=n.n(w),y=n(6),z=n(19),S=n(51),T=n(250),N=n(16),Q=n(8),C=n.n(Q),Y=n(48),A=n(31),E=n(85),L=n(235),R=n(162),I=function(){var e=Object(x.useState)([]),t=Object(z.a)(e,2),n=t[0],c=t[1],a=Object(S.j)().account,r=Object(R.a)().fastRefresh;return Object(x.useEffect)((function(){a&&function(){var e=Object(y.a)(k.a.mark((function e(){var t,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L.b.map((function(e){return{address:Object(A.e)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(Y.a)(E,t);case 3:n=e.sent,r=L.b.map((function(e,t){return Object(N.a)(Object(N.a)({},e),{},{balance:new C.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},B=n(234),F=function(){var e=Object(x.useState)([]),t=Object(z.a)(e,2),n=t[0],c=t[1],a=Object(S.j)().account,r=Object(R.a)().fastRefresh;return Object(x.useEffect)((function(){a&&function(){var e=Object(y.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L.b.map((function(e){return{address:Object(A.e)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(Y.a)(E,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},H=n(408),W=n(1),q=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=Object(H.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),i=r.countUp,o=r.update,s=Object(x.useRef)(o);return Object(x.useEffect)((function(){s.current(t)}),[t,s]),Object(W.jsx)(m.T,{bold:!0,fontSize:a,color:"primary",children:i})},J=function(){var e=Object(g.a)(),t=Object(S.j)().account,n=F().reduce((function(e,t){return e+new C.a(t).div(new C.a(10).pow(18)).toNumber()}),0);return t?Object(W.jsx)(q,{value:n}):Object(W.jsx)(m.T,{color:"text",style:{lineHeight:"60px"},children:e(298,"Locked")})},P=n(893),U=n(53),V=function(){var e=Object(g.a)(),t=Object(P.a)(Object(A.a)());return Object(S.j)().account?Object(W.jsx)(q,{value:Object(U.a)(t),fontSize:"24px"}):Object(W.jsx)(m.T,{color:"text",style:{lineHeight:"36px"},children:e(298,"Locked")})},_=Object(h.e)(m.l)(c||(c=Object(O.a)(["\nmargin-top:140px;\noverflow: visible;\n  padding: 10px;\n  box-shadow: -8px 12px 18px 0 rgba(25, 42, 70, 0.13);\n  min-height: 376px;\n"]))),D=h.e.div(a||(a=Object(O.a)(["\nmargin-top: 70px;\nposition: absolute;\n"]))),$=h.e.img(r||(r=Object(O.a)(["\nfloat: right;\nz-index:-99;\n"]))),G=h.e.div(i||(i=Object(O.a)(["\n  color: ",";\n  font-size: 14px;\n  white-space: nowrap!important;\n"])),(function(e){return e.theme.colors.primary})),K=h.e.div(o||(o=Object(O.a)(["\n  margin-top: 24px;\n"]))),M=function(){var e=Object(x.useState)(!1),t=Object(z.a)(e,2),n=t[0],c=t[1],a=Object(S.j)().account,r=Object(g.a)(),i=I().filter((function(e){return e.balance.toNumber()>0})),o=Object(T.a)(i.map((function(e){return e.pid}))).onReward,s=Object(x.useCallback)(Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,o();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[o]);return Object(W.jsxs)(_,{children:[Object(W.jsx)($,{style:{position:"absolute",left:"-10px",top:"-180px"},src:"/images/cats_one.png",alt:"cake logo",width:314}),Object(W.jsxs)(m.m,{children:[Object(W.jsx)(m.z,{size:"llg",mb:"24px",children:r(542,"Farms & Staking")}),Object(W.jsxs)(D,{children:[Object(W.jsx)(J,{}),Object(W.jsx)(G,{children:r(544,"NYAN to Harvest")}),Object(W.jsx)(V,{}),Object(W.jsx)(G,{children:r(546,"NYAN in Wallet")})]}),Object(W.jsx)($,{style:{position:"relative",right:"-100px",top:"-40px",zIndex:"auto"},src:"/images/cat_two.png",alt:"cake logo",width:280,height:300}),Object(W.jsx)(K,{children:a?Object(W.jsx)(m.h,{id:"harvest-all",disabled:i.length<=0||n,onClick:s,fullWidth:!0,children:n?r(548,"Collecting NYAN"):r(999,"Harvest all (".concat(i.length,")"))}):Object(W.jsx)(B.a,{fullWidth:!0})})]})]})},X=n(61),Z=n(24),ee=Object(h.e)(m.l)(s||(s=Object(O.a)(["\n  padding: 24px;\n  align-items: center;\n  flex: 1;\n  box-shadow:none;\n"]))),te=function(){for(var e=Object(g.a)(),t=Object(X.c)(),n=Object(X.h)(),c=Object(X.g)(),a=new C.a(0),r=0;r<t.length;r++){var i=t[r];i.lpTotalInQuoteToken&&(a=i.quoteTokenSymbol===Z.b.BNB?a.plus(new C.a(i.lpTotalInQuoteToken).times(c)):i.quoteTokenSymbol===Z.b.NYAN?a.plus(n.times(i.lpTotalInQuoteToken)):a.plus(i.lpTotalInQuoteToken))}var o=a.toNumber().toLocaleString();return Object(W.jsxs)(ee,{children:[Object(W.jsx)(m.z,{size:"llg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),o?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(m.z,{size:"xl",color:"primary",children:"$".concat(o)}),Object(W.jsx)(m.T,{color:"text",children:e(999,"Across all LPs and Catnip Pools")})]}):Object(W.jsx)(W.Fragment,{children:Object(W.jsx)(m.Q,{height:66})})]})},ne=Object(h.e)(m.l)(u||(u=Object(O.a)(["\nmargin-top:140px;\nmargin-left: auto;\nmargin-right: auto;\noverflow: visible;\n  box-shadow: -8px 12px 18px 0 rgba(25, 42, 70, 0.13);\n"]))),ce=h.e.div(j||(j=Object(O.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=h.e.img(l||(l=Object(O.a)(["\nfloat: right;\n"]))),re=function(){var e=Object(g.a)(),t=Object(P.c)(),n=Object(P.b)(Object(A.a)()),c=t?Object(U.a)(t)-Object(U.a)(n):0;return Object(W.jsxs)(ne,{children:[Object(W.jsx)(ae,{style:{position:"absolute",left:"30px",top:"-95px"},src:"/images/catt1.png",alt:"cake logo",width:64,height:108}),Object(W.jsx)(ae,{style:{position:"absolute",right:"30px",top:"-170px"},src:"/images/catt2.png",alt:"cake logo",width:141,height:206}),Object(W.jsxs)(m.m,{children:[Object(W.jsx)(m.z,{size:"llg",mb:"24px",children:e(534,"Token Stats")}),Object(W.jsxs)(ce,{children:[Object(W.jsx)(m.T,{fontSize:"14px",children:e(536,"Total NYAN Supply")}),c&&Object(W.jsx)(q,{fontSize:"14px",value:c})]}),Object(W.jsxs)(ce,{children:[Object(W.jsx)(m.T,{fontSize:"14px",children:e(538,"Total NYAN Burned")}),Object(W.jsx)(q,{fontSize:"14px",value:Object(U.a)(n)})]}),Object(W.jsxs)(ce,{children:[Object(W.jsx)(m.T,{fontSize:"14px",children:e(540,"New NYAN/block")}),Object(W.jsx)(q,{fontSize:"14px",decimals:0,value:1})]})]}),Object(W.jsx)(te,{})]})},ie=h.e.div(b||(b=Object(O.a)(["\nbackground: url('/images/patty1.png') #ffffff;\nz-index:0;\nposition:relative;\n  max-width: 100%;\n\n  "," {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),oe=Object(h.e)(ie)(p||(p=Object(O.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  "," {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  "," {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),se=h.e.div(d||(d=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),ue=Object(h.e)(m.d)(f||(f=Object(O.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 90%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),je=function(){var e=Object(g.a)();return Object(W.jsx)(oe,{children:Object(W.jsxs)(v.a,{children:[Object(W.jsxs)(se,{children:[Object(W.jsx)(m.z,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"YieldNyan")}),Object(W.jsx)(m.T,{children:e(578,"Yield Farming on Binance Smart Chain with Lovely Nyan Cats.")})]}),Object(W.jsx)("div",{children:Object(W.jsxs)(ue,{children:[Object(W.jsx)(M,{}),Object(W.jsx)(re,{})]})})]})})}}}]);
//# sourceMappingURL=13.fe4b3042.chunk.js.map