import e from "./node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { basicsSchema as t, defaultBasics as a } from "./basics/index.js";
import { metadataSchema as o, defaultMetadata as r } from "./metadata/index.js";
import { sectionsSchema as m, defaultSections as c } from "./sections/index.js";
import { customSchema as n, defaultSection as h, sectionSchema as x } from "./sections/index.js";
import { sampleResume as g } from "./examples/index.js";
import { defaultItem as P, itemSchema as R } from "./shared/item.js";
import { idSchema as w } from "./shared/id.js";
import { defaultUrl as D, urlSchema as E } from "./shared/url.js";
import { awardSchema as v, defaultAward as z } from "./sections/award.js";
import { certificationSchema as B, defaultCertification as L } from "./sections/certification.js";
import { customSectionSchema as U, defaultCustomSection as V } from "./sections/custom-section.js";
import { defaultEducation as y, educationSchema as F } from "./sections/education.js";
import { defaultExperience as H, experienceSchema as J } from "./sections/experience.js";
import { defaultInterest as N, interestSchema as O } from "./sections/interest.js";
import { defaultLanguage as T, languageSchema as W } from "./sections/language.js";
import { defaultProfile as Y, profileSchema as Z } from "./sections/profile.js";
import { defaultProject as $, projectSchema as ee } from "./sections/project.js";
import { defaultPublication as ae, publicationSchema as oe } from "./sections/publication.js";
import { defaultReference as me, referenceSchema as ce } from "./sections/reference.js";
import { defaultSkill as ie, skillSchema as ue } from "./sections/skill.js";
import { defaultVolunteer as de, volunteerSchema as pe } from "./sections/volunteer.js";
const d = e.object({
  basics: t,
  sections: m,
  metadata: o
}), p = {
  basics: a,
  sections: c,
  metadata: r
};
export {
  v as awardSchema,
  t as basicsSchema,
  B as certificationSchema,
  n as customSchema,
  U as customSectionSchema,
  z as defaultAward,
  a as defaultBasics,
  L as defaultCertification,
  V as defaultCustomSection,
  y as defaultEducation,
  H as defaultExperience,
  N as defaultInterest,
  P as defaultItem,
  T as defaultLanguage,
  r as defaultMetadata,
  Y as defaultProfile,
  $ as defaultProject,
  ae as defaultPublication,
  me as defaultReference,
  p as defaultResumeData,
  h as defaultSection,
  c as defaultSections,
  ie as defaultSkill,
  D as defaultUrl,
  de as defaultVolunteer,
  F as educationSchema,
  J as experienceSchema,
  w as idSchema,
  O as interestSchema,
  R as itemSchema,
  W as languageSchema,
  o as metadataSchema,
  Z as profileSchema,
  ee as projectSchema,
  oe as publicationSchema,
  ce as referenceSchema,
  d as resumeDataSchema,
  g as sampleResume,
  x as sectionSchema,
  m as sectionsSchema,
  ue as skillSchema,
  E as urlSchema,
  pe as volunteerSchema
};
