"use strict";(self.webpackChunkdata=self.webpackChunkdata||[]).push([[602],{4602:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var s,i=r(1413),o=r(9439),t=r(2791),a=r(6871),l=r(3504),d=r(9085),c=(r(5462),r(824)),x=r(9194),m=r(4732),u=r(5336),p=r(1134),h=r(4695),b=r(7942),f=r(7408),j=r(175),v=r(868),g=r(168),Z=r(7691).ZP.div(s||(s=(0,g.Z)(["\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dark-primary);\n  .formbox {\n    .titlebox {\n      margin-bottom: 14px;\n    }\n    .title,\n    .hero {\n      text-align: center;\n      font-size: 22px;\n      font-weight: 900;\n    }\n\n    .hero {\n      font-size: 22px;\n    }\n\n    .form {\n      margin-bottom: 13px;\n      label {\n        margin-bottom: 2px;\n      }\n    }\n\n    Input {\n      outline: none;\n      padding: 10px;\n      border-radius: 6px;\n      font-size: 14px;\n      border: 1px solid var(--dark-primary);\n      color: var(--dark-primary);\n      &:hover {\n        border: 1px solid var(--dark-primary);\n      }\n    }\n\n    .btn {\n      margin-top: 20px;\n      display: flex;\n      justify-content: center;\n    }\n\n    .reset_btn {\n      outline: none;\n      padding: 8px 0;\n      background-color: var(--dark-primary);\n      color: white;\n      border-radius: 5px;\n      width: 100px;\n      font-weight: bold;\n      font-size: 14px;\n      cursor: pointer;\n    }\n  }\n"]))),w=r(4641),y=r(184),k=b.Ry({email:b.Z_().required(),code:b.Z_().required(),newPassword:b.Z_().min(5).max(20).required()}).required();var N=function(){var n=(0,a.s0)(),e=(0,t.useState)(!1),r=(0,o.Z)(e,2),s=r[0],b=r[1],g=(0,p.cI)({resolver:(0,h.X)(k)}),N=g.register,I=g.handleSubmit,q=(0,f.useMutation)(j.j0,{onSuccess:function(e){d.Am.success(null===e||void 0===e?void 0:e.message,u.Z),n("/studentlogin")},onError:function(n){d.Am.error(null===n||void 0===n?void 0:n.message,u.Z)}}),P=q.mutate,z=q.isLoading;return(0,y.jsx)(Z,{children:(0,y.jsx)("div",{className:"formbox",children:(0,y.jsxs)("form",{onSubmit:I((function(n){console.log("<<<+++++>>>>",n),P({data:n,url:v.bk})})),children:[(0,y.jsxs)("div",{className:"titlebox",children:[(0,y.jsx)("h1",{className:"title",children:(0,y.jsx)(l.rU,{to:"/",children:"People"})}),(0,y.jsx)("h2",{className:"hero",children:"Reset Your Password"})]}),(0,y.jsx)("div",{className:"form",children:(0,y.jsx)(w.Z,{label:"Email",children:(0,y.jsx)(c.II,(0,i.Z)((0,i.Z)({},N("email")),{},{type:"email",required:!0}))})}),(0,y.jsx)("div",{className:"form",children:(0,y.jsx)(w.Z,{label:"Code",children:(0,y.jsx)(c.II,(0,i.Z)((0,i.Z)({},N("code")),{},{type:"text",required:!0}))})}),(0,y.jsx)("div",{className:"form",children:(0,y.jsx)(w.Z,{label:"New Password",children:(0,y.jsxs)(c.BZ,{children:[(0,y.jsx)(c.II,(0,i.Z)((0,i.Z)({},N("newPassword")),{},{type:s?"text":"password"})),(0,y.jsx)(c.xH,{children:(0,y.jsx)("p",{className:"btn-icon",onClick:function(){return b(!s)},children:s?(0,y.jsx)(m.ON,{color:" #16194F"}):(0,y.jsx)(m.tp,{color:" #16194F"})})})]})})}),(0,y.jsx)("div",{className:"btn",children:(0,y.jsx)("button",{type:"submit",className:"reset_btn",children:z?(0,y.jsx)(x.$,{size:"sm"}):"Send"})})]})})})}}}]);
//# sourceMappingURL=602.f0f95994.chunk.js.map