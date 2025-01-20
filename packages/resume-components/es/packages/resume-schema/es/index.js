import e from "../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { basicsSchema as o } from "./basics/index.js";
import { resumeConfigSchema as r } from "./config/index.js";
import { sectionsSchema as m } from "./sections/index.js";
import { sectionSchema as h } from "./sections/index.js";
import { itemSchema as x } from "./shared/item.js";
import { idSchema as l } from "./shared/id.js";
import { urlSchema as b } from "./shared/url.js";
import { awardSchema as d } from "./sections/award.js";
import { certificationSchema as j } from "./sections/certification.js";
import "./sections/custom-section.js";
import { educationSchema as v } from "./sections/education.js";
import { experienceSchema as z } from "./sections/experience.js";
import { interestSchema as y } from "./sections/interest.js";
import { languageSchema as B } from "./sections/language.js";
import { profileSchema as E } from "./sections/profile.js";
import { projectSchema as G } from "./sections/project.js";
import { publicationSchema as I } from "./sections/publication.js";
import { referenceSchema as K } from "./sections/reference.js";
import { skillSchema as M } from "./sections/skill.js";
import { volunteerSchema as O } from "./sections/volunteer.js";
e.object({
  basics: o,
  sections: m,
  config: r
});
export {
  d as awardSchema,
  o as basicsSchema,
  j as certificationSchema,
  v as educationSchema,
  z as experienceSchema,
  l as idSchema,
  y as interestSchema,
  x as itemSchema,
  B as languageSchema,
  E as profileSchema,
  G as projectSchema,
  I as publicationSchema,
  K as referenceSchema,
  r as resumeConfigSchema,
  h as sectionSchema,
  m as sectionsSchema,
  M as skillSchema,
  b as urlSchema,
  O as volunteerSchema
};
//# sourceMappingURL=index.js.map
