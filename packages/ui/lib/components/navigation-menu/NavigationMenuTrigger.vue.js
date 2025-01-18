"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("../../lib/utils.js"),n=require("radix-vue"),l=require("./index.js"),c=require("../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/ChevronDownIcon.js"),d=e.defineComponent({__name:"NavigationMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(a){const r=a,s=e.computed(()=>{const{class:t,...o}=r;return o}),u=n.useForwardProps(s);return(t,o)=>(e.openBlock(),e.createBlock(e.unref(n.NavigationMenuTrigger),e.mergeProps(e.unref(u),{class:e.unref(i.cn)(e.unref(l.navigationMenuTriggerStyle)(),"group",r.class)}),{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default"),e.createVNode(e.unref(c.default),{class:"relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]),_:3},16,["class"]))}});exports.default=d;
//# sourceMappingURL=NavigationMenuTrigger.vue.js.map
