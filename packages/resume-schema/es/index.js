import e from "./node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.js";
import { basicsSchema as o, defaultBasics as t } from "./basics/index.js";
import { resumeConfigSchema as m, defaultResumeConfig as a } from "./config/index.js";
import { sectionsSchema as c, defaultSections as r } from "./sections/index.js";
import { defaultSection as d, sectionSchema as h } from "./sections/index.js";
import { Example as b } from "./example.js";
import { defaultItem as j, itemSchema as k } from "./shared/item.js";
import { idSchema as D } from "./shared/id.js";
import { defaultEducation as R, educationSchema as z } from "./sections/education.js";
import { defaultProject as I, projectSchema as P } from "./sections/project.js";
import { defaultSkill as v, skillSchema as w } from "./sections/skill.js";
const l = e.object({
  basics: o,
  sections: c,
  config: m
}), n = {
  basics: t,
  sections: r,
  config: a
};
export {
  b as Example,
  o as basicsSchema,
  t as defaultBasics,
  R as defaultEducation,
  j as defaultItem,
  I as defaultProject,
  a as defaultResumeConfig,
  n as defaultResumeData,
  d as defaultSection,
  r as defaultSections,
  v as defaultSkill,
  z as educationSchema,
  D as idSchema,
  k as itemSchema,
  P as projectSchema,
  m as resumeConfigSchema,
  l as resumeDataSchema,
  h as sectionSchema,
  c as sectionsSchema,
  w as skillSchema
};
