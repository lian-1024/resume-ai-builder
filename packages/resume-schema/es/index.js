import { z as e } from "zod";
import { basicsSchema as t, defaultBasics as o } from "./basics/index.js";
import { resumeConfigSchema as r, defaultResumeConfig as a } from "./config/index.js";
import { sectionsSchema as m, defaultSections as c } from "./sections/index.js";
import { defaultSection as d, sectionSchema as h } from "./sections/index.js";
import { Simple as g } from "./examples/index.js";
import { defaultItem as C, itemSchema as j } from "./shared/item.js";
import { idSchema as R } from "./shared/id.js";
import { defaultUrl as w, urlSchema as D } from "./shared/url.js";
import { awardSchema as I, defaultAward as v } from "./sections/award.js";
import { certificationSchema as A, defaultCertification as B } from "./sections/certification.js";
import { customSectionSchema as U, defaultCustomSection as V } from "./sections/custom-section.js";
import { defaultEducation as y, educationSchema as F } from "./sections/education.js";
import { defaultExperience as H, experienceSchema as J } from "./sections/experience.js";
import { defaultInterest as M, interestSchema as N } from "./sections/interest.js";
import { defaultLanguage as Q, languageSchema as T } from "./sections/language.js";
import { defaultProfile as X, profileSchema as Y } from "./sections/profile.js";
import { defaultProject as _, projectSchema as $ } from "./sections/project.js";
import { defaultPublication as te, publicationSchema as oe } from "./sections/publication.js";
import { defaultReference as ae, referenceSchema as me } from "./sections/reference.js";
import { defaultSkill as fe, skillSchema as ie } from "./sections/skill.js";
import { defaultVolunteer as le, volunteerSchema as ne } from "./sections/volunteer.js";
const n = e.object({
  basics: t,
  sections: m,
  config: r
}), p = {
  basics: o,
  sections: c,
  config: a
};
export {
  g as Simple,
  I as awardSchema,
  t as basicsSchema,
  A as certificationSchema,
  U as customSectionSchema,
  v as defaultAward,
  o as defaultBasics,
  B as defaultCertification,
  V as defaultCustomSection,
  y as defaultEducation,
  H as defaultExperience,
  M as defaultInterest,
  C as defaultItem,
  Q as defaultLanguage,
  X as defaultProfile,
  _ as defaultProject,
  te as defaultPublication,
  ae as defaultReference,
  a as defaultResumeConfig,
  p as defaultResumeData,
  d as defaultSection,
  c as defaultSections,
  fe as defaultSkill,
  w as defaultUrl,
  le as defaultVolunteer,
  F as educationSchema,
  J as experienceSchema,
  R as idSchema,
  N as interestSchema,
  j as itemSchema,
  T as languageSchema,
  Y as profileSchema,
  $ as projectSchema,
  oe as publicationSchema,
  me as referenceSchema,
  r as resumeConfigSchema,
  n as resumeDataSchema,
  h as sectionSchema,
  m as sectionsSchema,
  ie as skillSchema,
  D as urlSchema,
  ne as volunteerSchema
};
