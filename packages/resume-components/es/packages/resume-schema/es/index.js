import e from "../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { basicsSchema as o } from "./basics/index.js";
import { resumeConfigSchema as m } from "./config/index.js";
import { sectionsSchema as r } from "./sections/index.js";
import { sectionSchema as h } from "./sections/index.js";
import { itemSchema as S } from "./shared/item.js";
import { idSchema as x } from "./shared/id.js";
import { urlSchema as u } from "./shared/url.js";
import { educationSchema as l } from "./sections/education.js";
import { projectSchema as j } from "./sections/project.js";
import { skillSchema as k } from "./sections/skill.js";
e.object({
  basics: o,
  sections: r,
  config: m
});
export {
  o as basicsSchema,
  l as educationSchema,
  x as idSchema,
  S as itemSchema,
  j as projectSchema,
  m as resumeConfigSchema,
  h as sectionSchema,
  r as sectionsSchema,
  k as skillSchema,
  u as urlSchema
};
//# sourceMappingURL=index.js.map
