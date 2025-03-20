import { ComputedRef, Ref } from 'vue';
export declare const SIDEBAR_COOKIE_NAME = "sidebar:state";
export declare const SIDEBAR_COOKIE_MAX_AGE: number;
export declare const SIDEBAR_WIDTH = "12rem";
export declare const SIDEBAR_WIDTH_MOBILE = "18rem";
export declare const SIDEBAR_WIDTH_ICON = "3rem";
export declare const SIDEBAR_KEYBOARD_SHORTCUT = "b";
export declare const useSidebar: <T extends {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
} | null | undefined = {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
}>(fallback?: T | undefined) => T extends null ? {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
} | null : {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
}, provideSidebarContext: (contextValue: {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
}) => {
    state: ComputedRef<"expanded" | "collapsed">;
    open: Ref<boolean>;
    setOpen: (value: boolean) => void;
    isMobile: Ref<boolean>;
    openMobile: Ref<boolean>;
    setOpenMobile: (value: boolean) => void;
    toggleSidebar: () => void;
};
