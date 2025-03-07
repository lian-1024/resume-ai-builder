import { ResumeData } from '@lianqq/resume-schema';

export declare const IframeMessageTypeMap: {
    readonly UPDATE_RESUME: "UPDATE_RESUME";
    readonly INIT_RESUME: "INIT_RESUME";
    readonly READY: "READY";
    readonly EXPORT_PDF: "EXPORT_PDF";
    readonly SET_RESUME: "SET_RESUME";
    readonly CHANGE_THEME: "CHANGE_THEME";
    readonly SET_STYLE: "SET_STYLE";
};
export type IframeMessageType = (typeof IframeMessageTypeMap)[keyof typeof IframeMessageTypeMap];
export declare const useIframeResume: () => {
    iframe: import('vue').Ref<HTMLIFrameElement | null, HTMLIFrameElement | null>;
    initIframe: (iframeElement: HTMLIFrameElement | null) => Promise<unknown>;
    updateResumeData: (type: IframeMessageType, data: any) => Promise<unknown>;
    exportResumeToPdf: () => Promise<unknown>;
    setResume: (resume: ResumeData) => Promise<unknown>;
};
