(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(80),s=n(27),u=n(42),o=n(40),c=n(56),i=n(53),l=n(57),d=n(0),b=n.n(d),m=n(20),f=n(213),h=n(34),p=n(377),g=(n(212),n(54)),v=function(e){var t=e.text,n=e.onClick,a=e.type,r=e.loading;return b.a.createElement("button",{type:a,className:"jelly-button",onClick:n},r?b.a.createElement("p",{className:"super-slide"},"Loading..."):b.a.createElement("p",{className:"super-slide"},t))};v.defaultProps={onClick:null,loading:!1};var w=function(e){return e.subscribtions.subs},O=function(e){return e.subscribtions.loading.getSubs},j=function(e){return e.subscribtions.loading.addSub},x=function(e){return e.subscribtions.date.sameDayAdded},E=function(e){return e.subscribtions.date.sameWeekAdded},S=function(e){return e.subscribtions.date.sameMonthAdded},y=function(e){return e.subscribtions.date.lastYearAdded};function k(){var e=Object(a.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]);return k=function(){return e},e}var C=function(){return f.b.error("\ud83e\udd2a Sub already exists",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},_=function(e){return f.b.success("\ud83e\udd1f Sub added! Total ammout:  ".concat(e),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",userID:""},n.warn=function(e){return f.b.warn("\ud83d\ude24\ud83d\ude24\ud83d\ude24 ".concat(e||"Fill the field!!!"," "),{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;return n.setState(Object(g.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.userID;return""===a.trim()||""===r.trim()?n.warn():r.includes("/")?n.warn('Forgot to remove "/" '):(n.props.handleSubmit(n.state),n.setState({name:"",userID:""}))},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.userID,a=this.props,r=a.handleFilterSubs,s=a.query,u=a.showFavorites,o=a.onChangeText,c=a.loading,i=a.onReset;return b.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"sub-form"},b.a.createElement("input",{type:"text",autoComplete:"off",value:t,name:"name",onChange:this.handleInputChange,className:"sub-form__input",placeholder:"Add sub here"}),b.a.createElement("input",{type:"text",autoComplete:"off",value:n,name:"userID",onChange:this.handleInputChange,className:"sub-form__input",placeholder:"User id"}),b.a.createElement("input",{type:"text",autoComplete:"off",value:s,onBlur:function(){return i()},autoFocus:!0,placeholder:"filter sub here",name:"query",onChange:r,className:"sub-form__input"}),b.a.createElement("div",{className:"multi-button"},b.a.createElement("button",{type:"submit"},c?"Loading...":"Add"),b.a.createElement("button",{text:o,type:"button",onClick:function(){return u()}},o)),b.a.createElement(f.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))}}]),t}(d.Component),F=(h.a.div(k()),Object(m.b)(function(e){return{loading:j(e)}})(N)),A=n(51),P=n(376),L=n(6),D=n.n(L),I=n(18),T=n(259),q=n(72),H=n(8),B=n(31),M=n.n(B),Y="https://steam-subscribtions.herokuapp.com",z=function(e){return M.a.get("".concat(Y,"/subscribers/").concat(e)).then(function(e){return e.data.subs})},J=function(e){return M.a.post("".concat(Y,"/subscribers"),e).then(function(e){return e.data.newSub})},W=function(e,t){return M.a.patch("".concat(Y,"/subscribers/updateSub/").concat(e),t).then(function(e){return e.data.updatedSub})},R=n(49),U=n(37),X=function(e){var t=e._id,n=e.name,a=e.date,r=e.favorite,s=e.updateFavSub,u=Object(d.useState)(!1),o=Object(A.a)(u,2),c=o[0],i=o[1],l=function(){var e=Object(I.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,s(t,{favorite:!r});case 3:setTimeout(Object(I.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i(!1);case 1:case"end":return e.stop()}},e)})),1e3);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return b.a.createElement("tr",{className:"subs-row"},b.a.createElement("td",{className:"subs-row__item item_name"},n),b.a.createElement("td",{className:"subs-row__item item_date_added"},"".concat(Object(U.e)(a),", ").concat(a)),b.a.createElement("td",{className:"subs-row__item item_favorite"},b.a.createElement("button",{type:"button",className:"image-wrapper",onClick:function(){return l()}},c?b.a.createElement(T.ClipLoader,{color:"#fff",loading:c}):b.a.createElement("img",{className:"item-image",src:r?"https://image.flaticon.com/icons/svg/148/148838.svg":"https://image.flaticon.com/icons/svg/149/149219.svg",alt:"fav"}))))};X.defaultProps={favorite:!1};var Q={updateFavSub:function(e,t){return function(){var n=Object(I.a)(D.a.mark(function n(a,r){var s,u;return D.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s=Object(R.e)(r())){n.next=3;break}return n.abrupt("return");case 3:return Object(q.a)(s),a(Object(H.i)()),n.prev=5,n.next=8,W(e,t);case 8:return u=n.sent,n.next=11,a(Object(H.j)(u));case 11:return n.abrupt("return",n.sent);case 14:n.prev=14,n.t0=n.catch(5),a(Object(H.h)(n.t0)),console.error("error while updating favorite sub: ".concat(n.t0));case 18:case"end":return n.stop()}},n,null,[[5,14]])}));return function(e,t){return n.apply(this,arguments)}}()}},V=Object(m.b)(null,Q)(X);function G(){var e=Object(a.a)(["\n  width: 100%;\n  height: calc(100vh - 200px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-bottom: 10px;\n\n  /* width */\n  ::-webkit-scrollbar {\n    width: 2px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(a.a)(["\n  width: 100%;\n  font-size: 20px;\n  padding: 2rem;\n  color: #fff;\n  margin: 10px auto;\n"]);return K=function(){return e},e}function Z(){var e=Object(a.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return Z=function(){return e},e}var $=h.a.div(Z()),ee=h.a.table(K()),te=h.a.div(G()),ne=Object(m.b)(function(e){return{addSubLoading:j(e)}})(function(e){var t=e.subscribers,n=e.addSubLoading,a=Object(d.useState)(!1),r=Object(A.a)(a,2),s=r[0],u=r[1];return Object(d.useEffect)(function(){return u(!!n)},[n]),t.length>0&&b.a.createElement("div",null,s&&b.a.createElement($,null,b.a.createElement(P.a,null)),b.a.createElement(ee,null,b.a.createElement("tbody",null,b.a.createElement("tr",{className:"subs-head"},b.a.createElement("th",{className:"subs-head__item item_name"},"Name"),b.a.createElement("th",{className:"subs-head__item item_date_added"},"Date Added"),b.a.createElement("th",{className:"subs-head__item item_favorite"},"Favorite")))),b.a.createElement(te,null,b.a.createElement(ee,null,b.a.createElement("tbody",{className:"subs-body"},t.map(function(e){return b.a.createElement(V,Object.assign({key:e.userID},e))})))))}),ae=1,re=20;function se(){var e=Object(a.a)(["\n  display: flex;\n  padding: 14px;\n  border-radius: 10px;\n  transition: all 0.4s;\n  align-items: center;\n  margin-bottom: 10px;\n  font-size: 24px;\n  justify-content: space-between;\n  width: 100%;\n  color: rgba(156, 146, 146, 0.616);\n  &:hover {\n    color: white;\n    transform: translateX(-10px) scale(1.1) rotateX(10deg);\n    box-shadow: 6px 6px 11px -2px rgba(107, 107, 107, 1);\n  }\n"]);return se=function(){return e},e}function ue(e){var t=e.showTotalAmmountOfSubs,n=e.sameDayAdded,a=e.sameWeekAdded,r=e.sameMonthAdded,s=e.lastYearAdded;return b.a.createElement("div",{className:"subs-length-wrap"},b.a.createElement(oe,null,b.a.createElement("p",{className:"subs-length-text"},"Today added:"),b.a.createElement("span",{className:"subs-length-text__num"},n)),b.a.createElement(oe,null,b.a.createElement("p",{className:"subs-length-text"},"Added this week:"),b.a.createElement("span",{className:"subs-length-text__num"},a)),b.a.createElement(oe,null,b.a.createElement("p",{className:"subs-length-text"},"Added this month:"),b.a.createElement("span",{className:"subs-length-text__num"},r)),b.a.createElement(oe,null,b.a.createElement("p",{className:"subs-length-text"},"Added last year:"),b.a.createElement("span",{className:"subs-length-text__num"},s)),b.a.createElement(oe,null,b.a.createElement("p",{className:"subs-length-text"},"Total:"),b.a.createElement("span",{className:"subs-length-text__num"},t)))}var oe=h.a.div(se());ue.defaultProps={lastYearAdded:0};var ce=Object(m.b)(function(e){return{sameDayAdded:x(e),sameWeekAdded:E(e),sameMonthAdded:S(e),lastYearAdded:y(e)}})(ue);function ie(){var e=Object(a.a)(["\n  position: relative;\n  width: 60%;\n"]);return ie=function(){return e},e}function le(){var e=Object(a.a)(["\n  width: 30%;\n  /* margin: 0 auto; */\n  display: flex;\n  flex-direction: column;\n"]);return le=function(){return e},e}function de(){var e=Object(a.a)(["\n  display: flex;\n  width: 90%;\n  margin: 0 auto;\n  justify-content: space-between;\n"]);return de=function(){return e},e}function be(){var e=Object(a.a)(["\n  text-align: center;\n"]);return be=function(){return e},e}var me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.userID===t})},fe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",showFavorites:!1,onChangeText:"Show favourites",perPage:re,currentPage:ae},n.resetFilter=function(){return n.setState({query:""})},n.handleChangePageOnFilter=function(){var e=n.state.currentPage;e>n.maxPage()&&n.setState({currentPage:n.maxPage()}),e<1&&n.setState({currentPage:1})},n.maxPage=function(){return Math.ceil(n.renderSubsList().length/re)},n.handleSubmit=function(e){var t=n.props,a=t.isAuth,r=t.addSub,u=t.subs,o=t.ownerId;a&&(u.find(function(t){return t.name.toLowerCase().trim()===e.name.toLocaleLowerCase().trim()||t.userID===e.userID.trim()})?C():r(Object(s.a)({favorite:!1,date:"".concat((new Date).toLocaleDateString()," ").concat((new Date).toLocaleTimeString())},e,{ownerId:o})).then(function(e){return e?_(u.length+1):C()}))},n.handleFilterSubs=function(e){return n.setState({query:e.target.value})},n.filterFavorites=function(){return n.props.subs.filter(function(e){return e.favorite})},n.showFavorites=function(){return n.setState(function(e){return{showFavorites:!e.showFavorites,onChangeText:e.showFavorites?"Favorites":"All"}})},n.filteredSubs=function(e,t){return me(e,t)},n.showTotalAmmountOfSubs=function(){var e=n.props.subs,t=n.state,a=t.showFavorites,r=t.query;return a?n.filteredSubs(n.filterFavorites(),r).length:n.filteredSubs(e,r).length},n.renderSubsList=function(){var e=n.props.subs,t=n.state,a=t.showFavorites,r=t.query;return a?n.filteredSubs(n.filterFavorites(),r):n.filteredSubs(e,r)},n.handleChangePage=function(e){n.setState({currentPage:e})},n.renderPaginationList=function(){var e=n.state,t=e.currentPage,a=e.perPage,s=t*a,u=s-a;return Object(r.a)(n.renderSubsList().reverse()).slice(u,s)},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuth,n=e.getSubs,a=e.ownerId;t&&n(a)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.query,a=this.props.subs;e.subs!==a&&n&&console.log("works"),t.query!==n&&this.handleChangePageOnFilter()}},{key:"render",value:function(){var e=this.state,t=e.query,n=e.onChangeText,a=e.perPage,r=this.props.subsLoad;return b.a.createElement(pe,null,r&&b.a.createElement("div",{className:"rainbow-marker-loader"}),b.a.createElement(ge,null,b.a.createElement(F,{handleSubmit:this.handleSubmit,query:t,handleFilterSubs:this.handleFilterSubs,showFavorites:this.showFavorites,onChangeText:n,onReset:this.resetFilter}),b.a.createElement(ce,{showTotalAmmountOfSubs:this.showTotalAmmountOfSubs()})),b.a.createElement(ve,null,b.a.createElement(ne,{subscribers:this.renderPaginationList()}),this.renderSubsList().length>0&&b.a.createElement(he,null,b.a.createElement(p.a,{showQuickJumper:!0,defaultCurrent:1,defaultPageSize:a,total:this.renderSubsList().length,onChange:this.handleChangePage})),b.a.createElement(f.a,null)))}}]),t}(d.Component),he=h.a.div(be()),pe=h.a.div(de()),ge=h.a.div(le()),ve=h.a.div(ie()),we={getSubs:function(e){return function(){var t=Object(I.a)(D.a.mark(function t(n,a){var r,s;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(R.e)(a())){t.next=3;break}return t.abrupt("return");case 3:return Object(q.a)(r),n(Object(H.f)()),t.prev=5,t.next=8,z(e);case 8:s=t.sent,n(Object(H.g)(s)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),console.error("error while getting subs: ".concat(t.t0)),n(Object(H.e)(t.t0));case 16:case"end":return t.stop()}},t,null,[[5,12]])}));return function(e,n){return t.apply(this,arguments)}}()},addSub:function(e){return function(){var t=Object(I.a)(D.a.mark(function t(n,a){var r,s;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(R.e)(a())){t.next=3;break}return t.abrupt("return");case 3:return Object(q.a)(r),n(Object(H.c)()),t.prev=5,t.next=8,J(e);case 8:return s=t.sent,t.abrupt("return",n(Object(H.d)(s)));case 12:t.prev=12,t.t0=t.catch(5),console.error("error while adding sub: ".concat(t.t0)),n(Object(H.b)(t.t0));case 16:case"end":return t.stop()}},t,null,[[5,12]])}));return function(e,n){return t.apply(this,arguments)}}()}};t.default=Object(m.b)(function(e){return{isAuth:Object(R.c)(e),subs:w(e),subsLoad:O(e),addSubLoad:j(e),ownerId:Object(R.d)(e)}},we)(fe)}}]);
//# sourceMappingURL=9.d04eb749.chunk.js.map