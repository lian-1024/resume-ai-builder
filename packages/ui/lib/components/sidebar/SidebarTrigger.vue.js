"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("../button/index.js");const u=require("../../lib/utils.js"),o=require("lucide-vue-next"),i=require("./utils.js"),a=require("../button/Button.vue.js"),l=e.defineComponent({__name:"SidebarTrigger",props:{class:{}},setup(t){const s=t,{toggleSidebar:n}=i.useSidebar();return(c,r)=>(e.openBlock(),e.createBlock(e.unref(a.default),{"data-sidebar":"trigger",variant:"ghost",size:"icon",class:e.normalizeClass(e.unref(u.cn)("h-7 w-7",s.class)),onClick:e.unref(n)},{default:e.withCtx(()=>[e.createVNode(e.unref(o.PanelLeft)),r[0]||(r[0]=e.createElementVNode("span",{class:"sr-only"},"Toggle Sidebar",-1))]),_:1},8,["class","onClick"]))}});exports.default=l;
//# sourceMappingURL=SidebarTrigger.vue.js.map
