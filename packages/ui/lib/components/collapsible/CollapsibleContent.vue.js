"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),l=require("radix-vue"),n=e.defineComponent({__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const o=t;return(a,s)=>(e.openBlock(),e.createBlock(e.unref(l.CollapsibleContent),e.mergeProps(o,{class:"overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"}),{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default")]),_:3},16))}});exports.default=n;
//# sourceMappingURL=CollapsibleContent.vue.js.map
