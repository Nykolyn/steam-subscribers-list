(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{94:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(16),s=a(24),u=a(104),o=a(35),c=a(33),i=a(36),l=a(0),d=a.n(l),b=a(17),m=a(140),f=(a(139),a(34)),p=function(e){var t=e.text,a=e.onClick,n=e.type,r=e.loading;return d.a.createElement("button",{type:n,className:"jelly-button",onClick:a},r?d.a.createElement("p",{className:"super-slide"},"Loading..."):d.a.createElement("p",{className:"super-slide"},t))};p.defaultProps={onClick:null,loading:!1};var h=p,g=a(168),v=a.n(g),w=a(226),O=function(e){return e.subscribtions.subs},S=function(e){return e.subscribtions.loading.getSubs},j=function(e){return e.subscribtions.loading.addSub},E=function(e){return e.subscribtions.date.sameDayAdded},C=function(e){return e.subscribtions.date.sameWeekAdded},y=function(e){return e.subscribtions.date.sameMonthAdded},x=function(e){return e.subscribtions.date.lastYearAdded},k=function(){return m.b.error("\ud83e\udd2a Sub already exists",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},P=function(e){return m.b.success("\ud83e\udd1f Sub added! Total ammout:  ".concat(e),{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",userID:""},a.warn=function(e){return m.b.warn("\ud83d\ude24\ud83d\ude24\ud83d\ude24 ".concat(e||"Fill the field!!!"," "),{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;return a.setState(Object(f.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.userID;return""===n.trim()||""===r.trim()?a.warn():r.includes("/")?a.warn('Forgot to remove "/" '):(a.props.handleSubmit(a.state),a.setState({name:"",userID:""}))},a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.userID,n=this.props,r=n.handleFilterSubs,s=n.query,u=n.showFavorites,o=n.onChangeText,c=n.loading,i=n.onReset;return d.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"sub-form"},d.a.createElement("input",{type:"text",autoComplete:"off",value:t,name:"name",onChange:this.handleInputChange,className:"sub-form__input",placeholder:"Add sub here"}),d.a.createElement("input",{type:"text",autoComplete:"off",value:a,name:"userID",onChange:this.handleInputChange,className:"sub-form__input",placeholder:"User id"}),d.a.createElement(h,{text:"Add new sub",loading:c,type:"submit"}),d.a.createElement("div",{className:"sub-form__filter-wrapper"},s&&d.a.createElement("div",{className:"sub-form__clear-button-wrapper"},d.a.createElement(w.a,{onClick:function(){return i()},className:"sub-form__clear-button"},d.a.createElement(v.a,{className:"sub-form__clear-icon"}))),d.a.createElement("input",{type:"text",autoComplete:"off",value:s,autoFocus:!0,placeholder:"filter sub here",name:"query",onChange:r,className:"sub-form__input"})),d.a.createElement(h,{text:o,type:"button",onClick:function(){return u()}}),d.a.createElement(m.a,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}))}}]),t}(l.Component),N=Object(b.b)(function(e){return{loading:j(e)}})(F),A=a(32),L=a(229),_=a(3),D=a.n(_),I=a(11),T=a(169),q=a(48),M=a(5),B=a(18),H=a.n(B),Y="https://steam-subscribtions.herokuapp.com",W=function(e){return H.a.get("".concat(Y,"/subscribers/").concat(e)).then(function(e){return e.data.subs})},J=function(e){return H.a.post("".concat(Y,"/subscribers"),e).then(function(e){return e.data.newSub})},R=function(e,t){return H.a.patch("".concat(Y,"/subscribers/updateSub/").concat(e),t).then(function(e){return e.data.updatedSub})},U=a(30),V=a(21),z=function(e){var t=e._id,a=e.name,n=e.date,r=e.favorite,s=e.updateFavSub,u=Object(l.useState)(!1),o=Object(A.a)(u,2),c=o[0],i=o[1],b=function(){var e=Object(I.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,s(t,{favorite:!r});case 3:setTimeout(Object(I.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i(!1);case 1:case"end":return e.stop()}},e)})),1e3);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("h2",null,a),d.a.createElement("p",{className:"item-date"},"Added: ","".concat(Object(V.e)(n),", ").concat(n))),d.a.createElement("button",{className:"image-wrapper",type:"button",onClick:function(){return b()}},c?d.a.createElement(T.ClipLoader,{color:"#fff",loading:c}):d.a.createElement("img",{className:"item-image",src:r?"https://image.flaticon.com/icons/svg/148/148838.svg":"https://image.flaticon.com/icons/svg/149/149219.svg",alt:"fav"})))};z.defaultProps={favorite:!1};var G={updateFavSub:function(e,t){return function(){var a=Object(I.a)(D.a.mark(function a(n,r){var s,u;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(s=Object(U.e)(r())){a.next=3;break}return a.abrupt("return");case 3:return Object(q.a)(s),n(Object(M.i)()),a.prev=5,a.next=8,R(e,t);case 8:return u=a.sent,a.next=11,n(Object(M.j)(u));case 11:return a.abrupt("return",a.sent);case 14:a.prev=14,a.t0=a.catch(5),n(Object(M.h)(a.t0)),console.error("error while updating favorite sub: ".concat(a.t0));case 18:case"end":return a.stop()}},a,null,[[5,14]])}));return function(e,t){return a.apply(this,arguments)}}()}},K=Object(b.b)(null,G)(z),Q=Object(b.b)(function(e){return{addSubLoading:j(e)}})(function(e){var t=e.subscribers,a=e.addSubLoading,n=Object(l.useState)(!1),r=Object(A.a)(n,2),s=r[0],u=r[1];return Object(l.useEffect)(function(){return u(!!a)},[a]),d.a.createElement("ul",{className:"subs-list container"},s&&d.a.createElement("li",{className:"subs-list__item--loader"},d.a.createElement(L.a,null)),t.map(function(e){return d.a.createElement("li",{key:e.userID,className:"subs-list__item"},d.a.createElement(K,e))}))}),X=1,Z=20,$=a(194),ee=a.n($),te=a(195),ae=a.n(te),ne=function(e){var t=e.maxPage,a=e.handleChangePage,n=e.currentPage;return d.a.createElement("div",{className:"pagination-wrapper"},d.a.createElement(w.a,{className:"pagination-button",color:"primary",name:"prev",disabled:n===X,onClick:function(){return a("prev")}},d.a.createElement(ee.a,{className:"pagination-button",disabled:n===X})),d.a.createElement("h1",null,"Page ",n," of ",t()),d.a.createElement(w.a,{className:"pagination-button",name:"next",disabled:n===t(),onClick:function(){return a("next")}},d.a.createElement(ae.a,{className:"pagination-button",disabled:n===X})))};function re(e){var t=e.showTotalAmmountOfSubs,a=e.sameDayAdded,n=e.sameWeekAdded,r=e.sameMonthAdded,s=e.lastYearAdded;return d.a.createElement("div",{className:"subs-length-wrap"},d.a.createElement("p",{className:"subs-length-text"},"Total length: ",t),d.a.createElement("p",{className:"subs-length-text"},"Today added: ",a),d.a.createElement("p",{className:"subs-length-text"},"Added this week: ",n),d.a.createElement("p",{className:"subs-length-text"},"Added this month: ",r),s&&d.a.createElement("p",{className:"subs-length-text"},"Added last year: ",s))}re.defaultProps={lastYearAdded:0};var se=Object(b.b)(function(e){return{sameDayAdded:E(e),sameWeekAdded:C(e),sameMonthAdded:y(e),lastYearAdded:x(e)}})(re),ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.userID===t})},oe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var u=arguments.length,i=new Array(u),l=0;l<u;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={query:"",showFavorites:!1,onChangeText:"Show favourites",perPage:Z,currentPage:X},a.resetFilter=function(){return a.setState({query:""})},a.handleChangePageOnFilter=function(){var e=a.state.currentPage;e>a.maxPage()&&a.setState({currentPage:a.maxPage()}),e<1&&a.setState({currentPage:1})},a.maxPage=function(){return Math.ceil(a.renderSubsList().length/Z)},a.handleSubmit=function(e){var t=a.props,n=t.isAuth,s=t.addSub,u=t.subs,o=t.ownerId;n&&(u.find(function(t){return t.name.toLowerCase().trim()===e.name.toLocaleLowerCase().trim()||t.userID===e.userID.trim()})?k():s(Object(r.a)({favorite:!1,date:"".concat((new Date).toLocaleDateString()," ").concat((new Date).toLocaleTimeString())},e,{ownerId:o})).then(function(e){return e?P(u.length+1):k()}))},a.handleFilterSubs=function(e){return a.setState({query:e.target.value})},a.filterFavorites=function(){return a.props.subs.filter(function(e){return e.favorite})},a.showFavorites=function(){return a.setState(function(e){return{showFavorites:!e.showFavorites,onChangeText:e.showFavorites?"Show favourites":"Show all"}})},a.filteredSubs=function(e,t){return ue(e,t)},a.showTotalAmmountOfSubs=function(){var e=a.props.subs,t=a.state,n=t.showFavorites,r=t.query;return n?a.filteredSubs(a.filterFavorites(),r).length:a.filteredSubs(e,r).length},a.renderSubsList=function(){var e=a.props.subs,t=a.state,n=t.showFavorites,r=t.query;return n?a.filteredSubs(a.filterFavorites(),r):a.filteredSubs(e,r)},a.handleChangePage=function(e){a.setState(function(t){return{currentPage:"next"===e?t.currentPage+1:t.currentPage-1}})},a.renderPaginationList=function(){var e=a.state,t=e.currentPage,r=e.perPage,s=t*r,u=s-r;return Object(n.a)(a.renderSubsList().reverse()).slice(u,s)},a}return Object(i.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuth,a=e.getSubs,n=e.ownerId;t&&a(n)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.query,n=this.props.subs;e.subs!==n&&a&&console.log("works"),t.query!==a&&this.handleChangePageOnFilter()}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.onChangeText,n=e.currentPage,r=this.props.subsLoad;return d.a.createElement("div",null,r&&d.a.createElement("div",{className:"rainbow-marker-loader"}),d.a.createElement(N,{handleSubmit:this.handleSubmit,query:t,handleFilterSubs:this.handleFilterSubs,showFavorites:this.showFavorites,onChangeText:a,onReset:this.resetFilter}),d.a.createElement(se,{showTotalAmmountOfSubs:this.showTotalAmmountOfSubs()}),d.a.createElement(Q,{subscribers:this.renderPaginationList()}),this.renderSubsList().length>20&&d.a.createElement(ne,{currentPage:n,maxPage:this.maxPage,handleChangePage:this.handleChangePage}),d.a.createElement(m.a,null))}}]),t}(l.Component),ce={getSubs:function(e){return function(){var t=Object(I.a)(D.a.mark(function t(a,n){var r,s;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(U.e)(n())){t.next=3;break}return t.abrupt("return");case 3:return Object(q.a)(r),a(Object(M.f)()),t.prev=5,t.next=8,W(e);case 8:s=t.sent,a(Object(M.g)(s)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),console.error("error while getting subs: ".concat(t.t0)),a(Object(M.e)(t.t0));case 16:case"end":return t.stop()}},t,null,[[5,12]])}));return function(e,a){return t.apply(this,arguments)}}()},addSub:function(e){return function(){var t=Object(I.a)(D.a.mark(function t(a,n){var r,s;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object(U.e)(n())){t.next=3;break}return t.abrupt("return");case 3:return Object(q.a)(r),a(Object(M.c)()),t.prev=5,t.next=8,J(e);case 8:return s=t.sent,t.abrupt("return",a(Object(M.d)(s)));case 12:t.prev=12,t.t0=t.catch(5),console.error("error while adding sub: ".concat(t.t0)),a(Object(M.b)(t.t0));case 16:case"end":return t.stop()}},t,null,[[5,12]])}));return function(e,a){return t.apply(this,arguments)}}()}};t.default=Object(b.b)(function(e){return{isAuth:Object(U.c)(e),subs:O(e),subsLoad:S(e),addSubLoad:j(e),ownerId:Object(U.d)(e)}},ce)(oe)}}]);
//# sourceMappingURL=11.e3446f23.chunk.js.map