"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),u=require("../../lib/utils.js"),o=require("radix-vue"),c=e.defineComponent({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(s,{emit:d}){const t=s,i=d,r=e.computed(()=>{const{class:a,...n}=t;return n}),l=o.useForwardPropsEmits(r,i);return(a,n)=>(e.openBlock(),e.createBlock(e.unref(o.DropdownMenuPortal),null,{default:e.withCtx(()=>[e.createVNode(e.unref(o.DropdownMenuContent),e.mergeProps(e.unref(l),{class:e.unref(u.cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t.class)}),{default:e.withCtx(()=>[e.renderSlot(a.$slots,"default")]),_:3},16,["class"])]),_:3}))}});exports.default=c;
//# sourceMappingURL=DropdownMenuContent.vue.js.map
