(this["webpackJsonpozi-test-task"]=this["webpackJsonpozi-test-task"]||[]).push([[0],{102:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),i=n.n(r),c=n(16),s=(n(102),n(39)),o=n(158),d=n(175),u=n(162),l=n(163),j=n(171),b=n(164),p=n(84),h=n(79),O=n.n(h).a.create(Object(s.a)({baseURL:"https://cors-anywhere.herokuapp.com/https://nexln.github.io/ozi-test-task/api"},{withCredentials:!0})),f=function(e){return O.post("/auth/user",e)},m=function(){return O.get("/tager/user/profile",{headers:{Authorization:"".concat(z.get("tokenType")," ").concat(z.get("accessToken"))}})},x=n(31),g=function(e,t){e.message.length?t(I({error:e.message})):t(I({error:"Some error occurred"})),t(A({status:"failed"}))},v=function(e,t){t(I({error:e.response.data.message})),t(A({status:"failed"}))},w=Object(x.b)({name:"app",initialState:{status:"idle",isInitialized:!1,error:null},reducers:{setAppStatusAC:function(e,t){e.status=t.payload.status},setIsInitializedAC:function(e,t){e.isInitialized=t.payload.isInitialized},setAppErrorAC:function(e,t){e.error=t.payload.error}}}),y=w.reducer,A=w.actions.setAppStatusAC,I=w.actions.setAppErrorAC,k=w.actions.setIsInitializedAC,C=function(){return function(e){m().then((function(t){t.data.data?(e(k({isInitialized:!0})),e(S({value:!0})),e(A({status:"succeeded"}))):g(t.data,e)})).catch((function(t){v(t,e)})).finally((function(){e(k({isInitialized:!0}))}))}},z=new(n(85).a),T=Object(x.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(e,t){e.isLoggedIn=t.payload.value}}}),L=T.reducer,S=T.actions.setIsLoggedInAC,E=n(12),P=n(6),U=function(){var e=Object(c.c)((function(e){return e.auth.isLoggedIn})),t=Object(c.b)(),n=Object(p.a)({initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=2&&(t.password="Too short password"):t.password="Required",t},onSubmit:function(e){var a;n.resetForm(),t((a=e,function(e){e(A({status:"loading"})),f(a).then((function(t){t.data.data?(z.set("tokenType",t.data.data.tokenType,{path:"/"}),z.set("accessToken",t.data.data.accessToken,{path:"/"}),e(S({value:!0})),e(A({status:"succeeded"}))):g(t.data,e)})).catch((function(t){v(t,e)}))})),setTimeout((function(){t(C())}),2e3)}});return e?Object(P.jsx)(E.a,{to:"/"}):Object(P.jsx)(o.a,{container:!0,justify:"center",children:Object(P.jsx)(o.a,{item:!0,xs:4,children:Object(P.jsx)("form",{onSubmit:n.handleSubmit,children:Object(P.jsxs)(d.a,{children:[Object(P.jsxs)(u.a,{children:[Object(P.jsx)("p",{children:"Use common test account credentials:"}),Object(P.jsx)("p",{children:"Email: user@ozitag.com"}),Object(P.jsx)("p",{children:"Password: user"})]}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(j.a,Object(s.a)({label:"Email",margin:"normal"},n.getFieldProps("email"))),n.touched.email&&n.errors.email?Object(P.jsx)("div",{style:{color:"red"},children:n.errors.email}):null,Object(P.jsx)(j.a,Object(s.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password"))),n.touched.password&&n.errors.password?Object(P.jsx)("div",{style:{color:"red"},children:n.errors.password}):null,Object(P.jsx)(b.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},D=n(166),F=n(167),N=n(165),R=n(168),Z=n(169),q=n(170),B=Object(x.b)({name:"todolist",initialState:{id:1,email:"",name:""},reducers:{setUserDataAC:function(e,t){e.id=t.payload.id,e.email=t.payload.email,e.name=t.payload.name}}}),J=B.reducer,W=B.actions.setUserDataAC,$=function(){var e=Object(c.c)((function(e){return e.auth.isLoggedIn})),t=Object(c.c)((function(e){return e.user.name})),n=Object(c.c)((function(e){return e.user.id})),r=Object(c.c)((function(e){return e.user.email})),i=Object(c.b)();return Object(a.useEffect)((function(){e&&i((function(e){e(A({status:"loading"})),m().then((function(t){t.data.data?(e(A({status:"succeeded"})),e(W({email:t.data.data.email,name:t.data.data.name,id:t.data.data.id}))):g(t.data,e)})).catch((function(t){v(t,e)}))}))}),[e,i]),e?Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{children:t}),Object(P.jsx)("p",{children:n}),Object(P.jsx)("p",{children:r})]}):Object(P.jsx)(E.a,{to:"/login"})},G=n(174),H=n(172);function V(e){return Object(P.jsx)(H.a,Object(s.a)({elevation:6,variant:"filled"},e))}function _(){var e=Object(c.c)((function(e){return e.app.error})),t=Object(c.b)(),n=function(e,n){"clickaway"!==n&&t(I({error:null}))};return Object(P.jsx)(G.a,{open:null!==e,autoHideDuration:6e3,onClose:n,children:Object(P.jsx)(V,{onClose:n,severity:"error",children:e})})}function K(){var e=Object(c.c)((function(e){return e.app.isInitialized})),t=Object(c.c)((function(e){return e.auth.isLoggedIn})),n=Object(c.b)(),r=Object(c.c)((function(e){return e.app.status}));if(Object(a.useEffect)((function(){n(C())}),[n]),!e)return Object(P.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(P.jsx)(D.a,{})});return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsxs)(F.a,{position:"static",color:"primary",children:[Object(P.jsxs)(R.a,{children:[Object(P.jsx)(N.a,{edge:"start",color:"inherit","aria-label":"menu"}),t&&Object(P.jsx)(b.a,{color:"inherit",onClick:function(){n((function(e){e(S({value:!1})),z.remove("tokenType"),z.remove("accessToken")}))},children:"Log out"})]}),"loading"===r&&Object(P.jsx)(Z.a,{color:"secondary"})]}),Object(P.jsx)(q.a,{fixed:!0,children:Object(P.jsxs)(E.d,{children:[Object(P.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(P.jsx)($,{})}}),Object(P.jsx)(E.b,{path:"/login",render:function(){return Object(P.jsx)(U,{})}}),Object(P.jsx)(E.b,{path:"*",render:function(){return Object(P.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(P.jsx)(E.a,{from:"*",to:"/404"})]})}),Object(P.jsx)(_,{})]})}n(124);var M=n(47),Q=n(27),X=Object(Q.b)({app:y,auth:L,user:J}),Y=Object(x.a)({reducer:X,middleware:function(e){return e().prepend(M.a)}});window.store=Y;var ee=n(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(P.jsx)(c.a,{store:Y,children:Object(P.jsx)(ee.a,{children:Object(P.jsx)(K,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.457400b2.chunk.js.map