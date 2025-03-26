import { type SectionKey } from "@lianqq/resume-schema"

export interface SectionValue {
    title?: string;
    component?: any;
    status: SectionStatus;
    visible?: boolean;
}

export type SectionStatus = 'preview' | 'edit'

export type SectionMap = Record<SectionKey, SectionValue>

