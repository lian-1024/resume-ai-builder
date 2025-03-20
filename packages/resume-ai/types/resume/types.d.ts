export declare const ContentTypeMap: {
    readonly Education: "education";
    readonly Project: "project";
    readonly Skill: "skill";
};
export type ContentType = (typeof ContentTypeMap)[keyof typeof ContentTypeMap];
