"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("../../lib/utils.js"),a=require("radix-vue"),d=require("./NavigationMenuViewport.vue.js"),p=e.defineComponent({__name:"NavigationMenu",props:{modelValue:{},defaultValue:{},dir:{},orientation:{},delayDuration:{},skipDelayDuration:{},disableClickTrigger:{type:Boolean},disableHoverTrigger:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue"],setup(s,{emit:n}){const t=s,u=n,i=e.computed(()=>{const{class:r,...o}=t;return o}),l=a.useForwardPropsEmits(i,u);return(r,o)=>(e.openBlock(),e.createBlock(e.unref(a.NavigationMenuRoot),e.mergeProps(e.unref(l),{class:e.unref(c.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",t.class)}),{default:e.withCtx(()=>[e.renderSlot(r.$slots,"default"),e.createVNode(d.default)]),_:3},16,["class"]))}});exports.default=p;
//# sourceMappingURL=NavigationMenu.vue.js.map
