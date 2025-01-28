import e from "./node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { basicsSchema as o, defaultBasics as t } from "./basics/index.js";
import { resumeConfigSchema as m, defaultResumeConfig as a } from "./config/index.js";
import { sectionsSchema as r, defaultSections as c } from "./sections/index.js";
import { defaultSection as d, sectionSchema as h } from "./sections/index.js";
import { Simple as b } from "./examples/index.js";
import { defaultItem as j, itemSchema as k } from "./shared/item.js";
import { idSchema as D } from "./shared/id.js";
import { defaultUrl as z, urlSchema as B } from "./shared/url.js";
import { defaultEducation as I, educationSchema as P } from "./sections/education.js";
import { defaultProject as q, projectSchema as v } from "./sections/project.js";
import { defaultSkill as y, skillSchema as A } from "./sections/skill.js";
const u = e.object({
  basics: o,
  sections: r,
  config: m
}), p = {
  basics: t,
  sections: c,
  config: a
};
export {
  b as Simple,
  o as basicsSchema,
  t as defaultBasics,
  I as defaultEducation,
  j as defaultItem,
  q as defaultProject,
  a as defaultResumeConfig,
  p as defaultResumeData,
  d as defaultSection,
  c as defaultSections,
  y as defaultSkill,
  z as defaultUrl,
  P as educationSchema,
  D as idSchema,
  k as itemSchema,
  v as projectSchema,
  m as resumeConfigSchema,
  u as resumeDataSchema,
  h as sectionSchema,
  r as sectionsSchema,
  A as skillSchema,
  B as urlSchema
};
