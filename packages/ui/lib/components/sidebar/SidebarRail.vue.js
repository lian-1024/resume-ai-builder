"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=require("../../lib/utils.js"),d=require("./utils.js"),n=e.defineComponent({__name:"SidebarRail",props:{class:{}},setup(r){const s=r,{toggleSidebar:a}=d.useSidebar();return(l,t)=>(e.openBlock(),e.createElementBlock("button",{"data-sidebar":"rail","aria-label":"Toggle Sidebar",tabindex:-1,title:"Toggle Sidebar",class:e.normalizeClass(e.unref(o.cn)("absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex","[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize","[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize","group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar","[[data-side=left][data-collapsible=offcanvas]_&]:-right-2","[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",s.class)),onClick:t[0]||(t[0]=(...i)=>e.unref(a)&&e.unref(a)(...i))},[e.renderSlot(l.$slots,"default")],2))}});exports.default=n;
//# sourceMappingURL=SidebarRail.vue.js.map
