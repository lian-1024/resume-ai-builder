"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=require("../../lib/utils.js"),u=require("radix-vue"),a=e.defineComponent({__name:"SheetTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(r){const t=r,l=e.computed(()=>{const{class:s,...o}=t;return o});return(s,o)=>(e.openBlock(),e.createBlock(e.unref(u.DialogTitle),e.mergeProps({class:e.unref(n.cn)("text-lg font-semibold text-foreground",t.class)},l.value),{default:e.withCtx(()=>[e.renderSlot(s.$slots,"default")]),_:3},16,["class"]))}});exports.default=a;
//# sourceMappingURL=SheetTitle.vue.js.map
