"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js"),c=require("./basics/index.js"),i=require("./config/index.js"),e=require("./sections/index.js"),a=require("./shared/item.js"),t=require("./shared/id.js"),n=require("./shared/url.js"),o=require("./sections/award.js"),m=require("./sections/certification.js");require("./sections/custom-section.js");const s=require("./sections/education.js"),S=require("./sections/experience.js"),u=require("./sections/interest.js"),h=require("./sections/language.js"),l=require("./sections/profile.js"),q=require("./sections/project.js"),d=require("./sections/publication.js"),f=require("./sections/reference.js"),p=require("./sections/skill.js"),g=require("./sections/volunteer.js");r.default.object({basics:c.basicsSchema,sections:e.sectionsSchema,config:i.resumeConfigSchema});exports.basicsSchema=c.basicsSchema;exports.resumeConfigSchema=i.resumeConfigSchema;exports.sectionSchema=e.sectionSchema;exports.sectionsSchema=e.sectionsSchema;exports.itemSchema=a.itemSchema;exports.idSchema=t.idSchema;exports.urlSchema=n.urlSchema;exports.awardSchema=o.awardSchema;exports.certificationSchema=m.certificationSchema;exports.educationSchema=s.educationSchema;exports.experienceSchema=S.experienceSchema;exports.interestSchema=u.interestSchema;exports.languageSchema=h.languageSchema;exports.profileSchema=l.profileSchema;exports.projectSchema=q.projectSchema;exports.publicationSchema=d.publicationSchema;exports.referenceSchema=f.referenceSchema;exports.skillSchema=p.skillSchema;exports.volunteerSchema=g.volunteerSchema;
//# sourceMappingURL=index.js.map
