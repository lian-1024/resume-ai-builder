import e from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import "../shared/item.js";
import { idSchema as i } from "../shared/id.js";
import "../shared/url.js";
import { awardSchema as a } from "./award.js";
import { defaultAward as H } from "./award.js";
import { certificationSchema as o } from "./certification.js";
import { defaultCertification as K } from "./certification.js";
import { customSectionSchema as m } from "./custom-section.js";
import { defaultCustomSection as N } from "./custom-section.js";
import { educationSchema as n } from "./education.js";
import { defaultEducation as Q } from "./education.js";
import { experienceSchema as s } from "./experience.js";
import { defaultExperience as U } from "./experience.js";
import { interestSchema as l } from "./interest.js";
import { defaultInterest as X } from "./interest.js";
import { languageSchema as c } from "./language.js";
import { defaultLanguage as Z } from "./language.js";
import { profileSchema as d } from "./profile.js";
import { defaultProfile as $ } from "./profile.js";
import { projectSchema as f } from "./project.js";
import { defaultProject as te } from "./project.js";
import { publicationSchema as u } from "./publication.js";
import { defaultPublication as ie } from "./publication.js";
import { referenceSchema as p } from "./reference.js";
import { defaultReference as oe } from "./reference.js";
import { skillSchema as x } from "./skill.js";
import { defaultSkill as ne } from "./skill.js";
import { volunteerSchema as S } from "./volunteer.js";
import { defaultVolunteer as le } from "./volunteer.js";
const t = e.object({
  name: e.string(),
  columns: e.number().max(5).default(1),
  separateLinks: e.boolean().default(!0),
  visible: e.boolean().default(!0)
}), g = t.extend({
  id: i,
  items: e.array(m)
}), B = e.object({
  summary: t.extend({
    id: e.literal("summary"),
    content: e.string().default("")
  }),
  awards: t.extend({
    id: e.literal("awards"),
    items: e.array(a)
  }),
  certifications: t.extend({
    id: e.literal("certifications"),
    items: e.array(o)
  }),
  education: t.extend({
    id: e.literal("education"),
    items: e.array(n)
  }),
  experience: t.extend({
    id: e.literal("experience"),
    items: e.array(s)
  }),
  volunteer: t.extend({
    id: e.literal("volunteer"),
    items: e.array(S)
  }),
  interests: t.extend({
    id: e.literal("interests"),
    items: e.array(l)
  }),
  languages: t.extend({
    id: e.literal("languages"),
    items: e.array(c)
  }),
  profiles: t.extend({
    id: e.literal("profiles"),
    items: e.array(d)
  }),
  projects: t.extend({
    id: e.literal("projects"),
    items: e.array(f)
  }),
  publications: t.extend({
    id: e.literal("publications"),
    items: e.array(u)
  }),
  references: t.extend({
    id: e.literal("references"),
    items: e.array(p)
  }),
  skills: t.extend({
    id: e.literal("skills"),
    items: e.array(x)
  }),
  custom: e.record(e.string(), g)
}), r = {
  name: "",
  columns: 1,
  separateLinks: !0,
  visible: !0
}, D = {
  summary: { ...r, id: "summary", name: "Summary", content: "" },
  awards: { ...r, id: "awards", name: "Awards", items: [] },
  certifications: {
    ...r,
    id: "certifications",
    name: "Certifications",
    items: []
  },
  education: {
    ...r,
    id: "education",
    name: "Education",
    items: []
  },
  experience: {
    ...r,
    id: "experience",
    name: "Experience",
    items: []
  },
  volunteer: {
    ...r,
    id: "volunteer",
    name: "Volunteering",
    items: []
  },
  interests: {
    ...r,
    id: "interests",
    name: "Interests",
    items: []
  },
  languages: {
    ...r,
    id: "languages",
    name: "Languages",
    items: []
  },
  profiles: { ...r, id: "profiles", name: "Profiles", items: [] },
  projects: { ...r, id: "projects", name: "Projects", items: [] },
  publications: {
    ...r,
    id: "publications",
    name: "Publications",
    items: []
  },
  references: {
    ...r,
    id: "references",
    name: "References",
    items: []
  },
  skills: { ...r, id: "skills", name: "Skills", items: [] },
  custom: {}
};
export {
  a as awardSchema,
  o as certificationSchema,
  g as customSchema,
  m as customSectionSchema,
  H as defaultAward,
  K as defaultCertification,
  N as defaultCustomSection,
  Q as defaultEducation,
  U as defaultExperience,
  X as defaultInterest,
  Z as defaultLanguage,
  $ as defaultProfile,
  te as defaultProject,
  ie as defaultPublication,
  oe as defaultReference,
  r as defaultSection,
  D as defaultSections,
  ne as defaultSkill,
  le as defaultVolunteer,
  n as educationSchema,
  s as experienceSchema,
  l as interestSchema,
  c as languageSchema,
  d as profileSchema,
  f as projectSchema,
  u as publicationSchema,
  p as referenceSchema,
  t as sectionSchema,
  B as sectionsSchema,
  x as skillSchema,
  S as volunteerSchema
};
