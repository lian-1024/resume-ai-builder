"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("../../../components/icon-primary.vue.js"),c=require("../../../node_modules/.pnpm/@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_/node_modules/@iconify/vue/dist/iconify.js");require("../../../packages/resume-schema/es/index.js");const a=require("../../../packages/resume-schema/es/examples/index.js"),r={class:"flex flex-col"},d={class:"flex flex-col"},u={class:"scroll-m-20 text-2xl font-semibold tracking-tight"},m={class:"flex gap-2"},_={class:"text-sm font-medium leading-none"},f={class:"text-sm font-medium leading-none"},p=e.defineComponent({__name:"basic",setup(x){const t=e.ref(a.Simple.basics);return(g,o)=>{var l,n,s;return e.openBlock(),e.createElementBlock("div",r,[e.createElementVNode("div",d,[e.createElementVNode("h3",u,e.toDisplayString((l=t.value)==null?void 0:l.name),1),e.createElementVNode("div",m,[e.createElementVNode("small",_,[e.createVNode(i.default,{icon:"lucide:mail"}),e.createTextVNode(" "+e.toDisplayString((n=t.value)==null?void 0:n.email),1)]),e.createElementVNode("small",f,[e.createVNode(e.unref(c.Icon),{icon:"lucide:phone"}),e.createTextVNode(" "+e.toDisplayString((s=t.value)==null?void 0:s.phone),1)])])]),o[0]||(o[0]=e.createElementVNode("div",null,[e.createElementVNode("img",{src:"",alt:""})],-1))])}}});exports.default=p;
//# sourceMappingURL=basic.vue.js.map
