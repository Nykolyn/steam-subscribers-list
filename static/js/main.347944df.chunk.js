(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"g",function(){return o}),n.d(e,"h",function(){return i}),n.d(e,"f",function(){return s}),n.d(e,"j",function(){return S}),n.d(e,"k",function(){return f}),n.d(e,"i",function(){return E}),n.d(e,"b",function(){return d});var r={ACCESS_REQUEST:"ACCESS_REQUEST",ACCESS_GRANTED:"ACCESS_GRANTED",ACCESS_DENIED:"ACCESS_DENIED",CLEAR_ERROR_MSG:"CREAR_ERROR_MSG"},a=function(){return{type:r.ACCESS_REQUEST}},u=function(t){return{type:r.ACCESS_GRANTED,payload:{user:t}}},c=function(t){return{type:r.ACCESS_DENIED,payload:{err:t}}},o=function(){return{type:r.ACCESS_REQUEST}},i=function(t){return{type:r.ACCESS_GRANTED,payload:{user:t}}},s=function(t){return{type:r.ACCESS_DENIED,payload:{err:t}}},S=function(){return{type:r.ACCESS_REQUEST}},f=function(t){return{type:r.ACCESS_GRANTED,payload:{user:t}}},E=function(t){return{type:r.ACCESS_DENIED,payload:{err:t}}},d=function(){return{type:r.CLEAR_ERROR_MSG}}},18:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return a});var r=function(t,e){var n=JSON.stringify(e);return localStorage.setItem(t,n)},a=function(t){return JSON.parse(localStorage.getItem(t))}},28:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return o});var r=function(t){return t.auth.isAuth},a=function(t){return t.auth.user._id},u=function(t){return t.auth.token},c=function(t){return t.auth.loading},o=function(t){return t.auth.error}},35:function(t,e,n){"use strict";var r=n(3),a=n.n(r),u=n(10),c=n(53),o=n.n(c),i=n(1),s=n(17),S=n.n(s),f="https://steam-subscribtions.herokuapp.com",E=function(){var t=Object(u.a)(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.post("".concat(f,"/auth/login"),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(u.a)(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.post("".concat(f,"/auth/register"),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(u.a)(a.a.mark(function t(e){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("".concat(f,"/user/").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),p=n(46),_=n(18);n.d(e,"b",function(){return b}),n.d(e,"c",function(){return h}),n.d(e,"a",function(){return R});var b=function(t){return function(){var e=Object(u.a)(a.a.mark(function e(n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.d)()),e.prev=1,e.next=4,E(t);case 4:r=e.sent,t.rememberMe&&Object(_.b)("token",r.token),n(Object(i.e)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.c)(e.t0.response.data));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(u.a)(a.a.mark(function e(n){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.j)()),e.prev=1,e.next=4,d(t);case 4:r=e.sent,t.rememberMe&&Object(_.b)("token",r.token),n(Object(i.k)(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.i)(e.t0.response.data));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var t=Object(u.a)(a.a.mark(function t(e){var n,r,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(_.a)("token")){t.next=3;break}return t.abrupt("return");case 3:return Object(p.a)(n),e(Object(i.g)()),t.prev=5,r=o()(n),t.next=9,l(r.id);case 9:u=t.sent,e(Object(i.h)(u)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(Object(i.f)(t.t0));case 16:case"end":return t.stop()}},t,null,[[5,13]])}));return function(e){return t.apply(this,arguments)}}()}},46:function(t,e,n){"use strict";var r=n(17),a=n.n(r);e.a=function(t){a.a.defaults.headers.common.Authorization="Bearer ".concat(t)}},47:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});var r=n(0),a=n.n(r),u=a.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(8)]).then(n.bind(null,89))}),c=a.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,90))}),o=a.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(7),n.e(11)]).then(n.bind(null,91))}),i=[{path:"/auth/login",component:u,exact:!0},{path:"/auth/register",component:c,exact:!0}],s=[{path:"/subscribtions",component:o}]},55:function(t,e,n){t.exports=n(88)},6:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"g",function(){return u}),n.d(e,"e",function(){return c}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"i",function(){return S}),n.d(e,"j",function(){return f}),n.d(e,"h",function(){return E});var r={SUBS_REQUEST_START:"SUBS_REQUEST_START",SUBS_REQUEST_SUCCESS:"SUBS_REQUEST_SUCCESS",SUBS_REQUEST_ERROR:"SUBS_REQUEST_ERROR",ADD_SUB_REQUEST:"ADD_SUB_REQUEST",ADD_SUB_SUCCESS:"ADD_SUB_SUCCESS",ADD_SUB_ERROR:"ADD_SUB_ERROR",UPDATE_FAV_SUB_REQUEST:"UPDATE_FAV_SUB_REQUEST",UPDATE_FAV_SUB_SUCCESS:"UPDATE_FAV_SUB_SUCCESS",UPDATE_FAV_SUB_ERROR:"UPDATE_FAV_SUB_ERROR"},a=function(){return{type:r.SUBS_REQUEST_START}},u=function(t){return{type:r.SUBS_REQUEST_SUCCESS,payload:{subs:t}}},c=function(t){return{type:r.SUBS_REQUEST_ERROR,payload:{error:t}}},o=function(){return{type:r.ADD_SUB_REQUEST}},i=function(t){return{type:r.ADD_SUB_SUCCESS,payload:{sub:t}}},s=function(t){return{type:r.ADD_SUB_ERROR,payload:{error:t}}},S=function(){return{type:r.UPDATE_FAV_SUB_REQUEST}},f=function(t){return{type:r.UPDATE_FAV_SUB_SUCCESS,payload:{updatedSub:t}}},E=function(t){return{type:r.UPDATE_FAV_SUB_ERROR,payload:{error:t}}}},87:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),u=n(20),c=n.n(u),o=n(21),i=n(14),s=n(16),S=n(3),f=n.n(S),E=n(10),d=n(32),l=n(33),p=n(30),_=n(34),b=n(22),h=function t(e,n){Object(b.a)(this,t),this.x=e,this.y=n,this.lifetime=0},R=function(t){function e(){var t,n;Object(b.a)(this,e);for(var r=arguments.length,u=new Array(r),c=0;c<r;c++)u[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(u)))).state={cHeight:0,cWidth:0},n.canvas=a.a.createRef(),n.componentDidMount=function(){n.setState({cHeight:2e3,cWidth:document.body.clientWidth}),window.addEventListener("resize",function(){n.setState({cHeight:document.body.clientHeight,cWidth:document.body.clientWidth})},!1),matchMedia("(pointer:fine)").matches&&n.startAnimation()},n.startAnimation=function(){var t=n.canvas.current,e=t.getContext("2d"),r=[];document.addEventListener("mousemove",function(e){var n=e.clientX,a=e.clientY;!function(t,e){var n=new h(t,e);r.push(n)}(n-t.offsetLeft,a-t.offsetTop)},!1);!function t(){e.clearRect(0,0,e.canvas.width,e.canvas.height);for(var n=0;n<r.length;++n){var a=r[n],u=void 0;if(u=void 0!==r[n-1]?r[n-1]:a,a.lifetime+=1,a.lifetime>700/60)r.shift();else{var c=a.lifetime/(700/60),o=7*(1-c);e.lineJoin="round",e.lineWidth=o;var i=Math.floor(190-190*c),s=Math.floor(210+210*c);e.strokeStyle="rgb(".concat(i,",").concat(0,",").concat(s),e.beginPath(),e.moveTo(u.x,u.y),e.lineTo(a.x,a.y),e.stroke(),e.closePath()}}requestAnimationFrame(t)}()},n.render=function(){var t=n.state,e=t.cHeight,r=t.cWidth;return a.a.createElement("canvas",{ref:n.canvas,className:"mouse-trail",width:r,height:e})},n}return Object(_.a)(e,t),e}(a.a.Component),U=n(51),v=n(28),A=function(t){var e=t.component,n=t.isAuth,r=Object(U.a)(t,["component","isAuth"]);return a.a.createElement(i.b,Object.assign({},r,{render:function(t){return n?a.a.createElement(e,t):a.a.createElement(i.a,{to:"/signin"})}}))};A.defaultProps={isAuth:null};var m=Object(s.b)(function(t){return{isAuth:Object(v.c)(t)}})(A),C=n(35),y=n(47),D=n(18),O=a.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,237))}),T={refreshUser:C.a},g=Object(s.b)(null,T)(function(t){var e=t.refreshUser,n=Object(r.useState)(!1),u=Object(d.a)(n,2),c=u[0],o=u[1],s=function(){var t=Object(E.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(D.a)("token")){t.next=3;break}return t.abrupt("return");case 3:return o(!0),t.next=6,e();case 6:setTimeout(function(){o(!1)},1e3);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)(function(){s()},[]);return a.a.createElement("div",{className:"stars-back"},a.a.createElement("div",{id:"stars"}),a.a.createElement("div",{id:"stars2"}),a.a.createElement("div",{id:"stars3"}),a.a.createElement(R,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",{className:"rainbow-marker-loader"})},a.a.createElement(i.d,null,y.b.map(function(t){return a.a.createElement(m,{key:t.path,path:t.path,component:t.component,exact:t.exact})}),c?a.a.createElement("div",{className:"rainbow-marker-loader"}):a.a.createElement(i.b,{path:"/auth",component:O}),a.a.createElement(i.a,{to:"/auth"}))))}),j=n(9),B=(n(86),n(54)),w=n(1),k=Object(j.combineReducers)({isAuth:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case w.a.ACCESS_GRANTED:return!0;default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case w.a.ACCESS_GRANTED:return r.user.user;default:return t}},token:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case w.a.ACCESS_GRANTED:return r.user.token;default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case w.a.ACCESS_REQUEST:return!0;case w.a.ACCESS_GRANTED:case w.a.ACCESS_DENIED:return!1;default:return t}},error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case w.a.ACCESS_DENIED:return r.err.message;case w.a.ACCESS_GRANTED:case w.a.CLEAR_ERROR_MSG:return null;default:return t}}}),x=n(15),Q=n(48),N=n(6),P={getSubs:!1,addSub:!1,updateFavSub:!1},F=Object(j.combineReducers)({subs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case N.a.SUBS_REQUEST_SUCCESS:return r.subs;case N.a.ADD_SUB_SUCCESS:return[].concat(Object(Q.a)(t),[r.sub]);case N.a.UPDATE_FAV_SUB_SUCCESS:var a=r.updatedSub;return t.map(function(t){return t.userID===a.userID?a:t});default:return t}},loading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;switch((arguments.length>1?arguments[1]:void 0).type){case N.a.SUBS_REQUEST_START:return Object(x.a)({},t,{getSubs:!0});case N.a.SUBS_REQUEST_SUCCESS:case N.a.SUBS_REQUEST_ERROR:return Object(x.a)({},t,{getSubs:!1});case N.a.ADD_SUB_REQUEST:return Object(x.a)({},t,{addSub:!0});case N.a.ADD_SUB_SUCCESS:case N.a.ADD_SUB_ERROR:return Object(x.a)({},t,{addSub:!1});case N.a.UPDATE_FAV_SUB_REQUEST:return Object(x.a)({},t,{updateFavSub:!0});case N.a.UPDATE_FAV_SUB_SUCCESS:case N.a.UPDATE_FAV_SUB_ERROR:return Object(x.a)({},t,{updateFavSub:!1});default:return t}}}),G=Object(j.combineReducers)({auth:k,subscribtions:F}),V=[B.a],I=j.applyMiddleware.apply(void 0,V),M=Object(j.createStore)(G,I),W=function(){return a.a.createElement(s.a,{store:M},a.a.createElement(o.a,{basename:"/"},a.a.createElement(i.b,{component:g})))};n(87);c.a.render(a.a.createElement(W,null),document.getElementById("root")),console.log("production")}},[[55,5,6]]]);
//# sourceMappingURL=main.347944df.chunk.js.map