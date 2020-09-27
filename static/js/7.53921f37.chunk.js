(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{134:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(19),l=t(41),c=t(201);var o={signUp:l.c};a.default=Object(i.b)(null,o)(function(e){var a=e.signUp;return n.a.createElement(c.a,{submitFunc:a,redirectToText:"Already have an account? Sign in",redirectToPath:"/auth/login",typeOfAuth:"Sign Up"})})},201:function(e,a,t){"use strict";var r=t(54),n=t(27),i=t(174),l=t(0),c=t.n(l),o=t(19),s=t(371),u=t(372),m=t(384),d=t(370),E=t(380),p=t(373),b=t(143),h=t(374),g=t(383),f=t(375),v=t(376),R=t(379),S=t(40),_=t(208),O=t.n(_),w=t(251),j=t(210),M=t.n(j),A=t(211),y=t.n(A),I=t(43),T=t(39),P=function(){function e(){Object(I.a)(this,e)}return Object(T.a)(e,null,[{key:"check",value:function(e,a){switch(a){case"username":return e?"":this.REQUIRED_INPUT_ERR_MSG;case"password":return e?e.length<6?this.SHORT_PASS_ERR_MSG:e.length>16?this.LONG_PASS_ERR_MSG:"":this.REQUIRED_INPUT_ERR_MSG;case"email":return e?this.emailRegex.test(e)?"":this.INVALID_EMAIL_ERR_MSG:this.REQUIRED_INPUT_ERR_MSG;default:return""}}}]),e}();function N(){return c.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Nykolyn Andrii 2019-",(new Date).getFullYear(),".")}P.emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,P.REQUIRED_INPUT_ERR_MSG="This field is required",P.SHORT_PASS_ERR_MSG="Password is too short!",P.LONG_PASS_ERR_MSG="Password is too long!",P.INVALID_EMAIL_ERR_MSG="Email your've entered is invalid",P.validate=function(e,a){return P.check(a.toString().trim(),e)};var x=t(2),G=t(50),U=Object(w.a)(function(e){return{paper:{marginTop:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),k=function(e){var a=e.errorMsg,t=e.loading,o=e.clearAuthErrorMsg,_=e.submitFunc,w=e.redirectToPath,j=e.redirectToText,A=e.typeOfAuth;Object(l.useEffect)(function(){a&&o()},[a,o]);var I=U(),T=Object(l.useState)(""),x=Object(i.a)(T,2),G=x[0],k=x[1],D=Object(l.useState)(""),C=Object(i.a)(D,2),L=C[0],B=C[1],F=Object(l.useState)(!1),Q=Object(i.a)(F,2),W=Q[0],z=Q[1],H=Object(l.useState)({}),J=Object(i.a)(H,2),V=J[0],Z=J[1],q=Object(l.useState)(!1),Y=Object(i.a)(q,2),$=Y[0],K=Y[1],X=function(e){var a=e.target,t=a.name,r=a.value,n=a.checked;switch(t){case"email":return k(r);case"password":return B(r);case"rememberMe":return z(n);default:return""}},ee=function(e){var a=e.target,t=a.name,i=a.value;i&&Z(Object(n.a)({},V,Object(r.a)({},t,P.validate(t,i))))};return c.a.createElement(s.a,{component:"main",maxWidth:"xs"},c.a.createElement(u.a,null),c.a.createElement("div",{className:I.paper},c.a.createElement(m.a,{className:I.avatar},c.a.createElement(O.a,null)),c.a.createElement(d.a,{component:"h1",variant:"h5"},A),c.a.createElement("form",{className:I.form,onSubmit:function(e){e.preventDefault(),function(){var e={email:P.validate("email",G),password:P.validate("password",L)};return Z(e),Object.keys(e).find(function(a){return e[a]})}()||_({password:L,email:G,rememberMe:W})}},c.a.createElement(d.a,{component:"h1",variant:"h5",color:"error",align:"center"},a),c.a.createElement(E.a,{variant:"outlined",margin:"normal",error:Boolean(V.email),helperText:V.email,fullWidth:!0,value:G,onBlur:ee,onChange:X,label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),c.a.createElement(E.a,{variant:"outlined",margin:"normal",onBlur:ee,helperText:V.password,error:Boolean(V.password),fullWidth:!0,name:"password",label:"Password",type:$?"text":"password",value:L,onChange:X,autoComplete:"current-password",InputProps:{endAdornment:c.a.createElement(p.a,{position:"end"},c.a.createElement(b.a,{onClick:function(){K(!$)}},$?c.a.createElement(M.a,null):c.a.createElement(y.a,null)))}}),c.a.createElement(h.a,{control:c.a.createElement(g.a,{value:W,name:"rememberMe",onChange:X,color:"primary"}),label:"Remember me"}),c.a.createElement(f.a,{type:"submit",fullWidth:!0,disabled:t,variant:"contained",color:"primary",className:I.submit},t?"Loading...":"Sign In"),c.a.createElement(v.a,{container:!0},c.a.createElement(v.a,{item:!0,xs:!0}),c.a.createElement(v.a,{item:!0},c.a.createElement(S.b,{to:w,className:"auth-switch"},j))))),c.a.createElement(R.a,{mt:8,mb:4},c.a.createElement(N,null)))};k.defaultProps={errorMsg:""};var D={clearAuthErrorMsg:x.b};a.a=Object(o.b)(function(e){return{errorMsg:Object(G.a)(e),loading:Object(G.b)(e)}},D)(k)}}]);
//# sourceMappingURL=7.53921f37.chunk.js.map