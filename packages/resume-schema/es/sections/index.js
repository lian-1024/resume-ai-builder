import { z as e } from "zod";
import { awardSchema as i } from "./award.js";
import { defaultAward as V } from "./award.js";
import { certificationSchema as a } from "./certification.js";
import { defaultCertification as q } from "./certification.js";
import { educationSchema as o } from "./education.js";
import { defaultEducation as D } from "./education.js";
import { experienceSchema as m } from "./experience.js";
import { defaultExperience as G } from "./experience.js";
import { interestSchema as n } from "./interest.js";
import { defaultInterest as J } from "./interest.js";
import { languageSchema as s } from "./language.js";
import { defaultLanguage as M } from "./language.js";
import { profileSchema as l } from "./profile.js";
import { defaultProfile as O } from "./profile.js";
import { projectSchema as c } from "./project.js";
import { defaultProject as T } from "./project.js";
import { publicationSchema as d } from "./publication.js";
import { defaultPublication as W } from "./publication.js";
import { referenceSchema as f } from "./reference.js";
import { defaultReference as Y } from "./reference.js";
import { skillSchema as u } from "./skill.js";
import { defaultSkill as _ } from "./skill.js";
import { volunteerSchema as p } from "./volunteer.js";
import { defaultVolunteer as ee } from "./volunteer.js";
import { customSectionSchema as re, defaultCustomSection as ie } from "./custom-section.js";
const t = e.object({
  name: e.string(),
  columns: e.number().max(5).default(1),
  separateLinks: e.boolean().default(!0),
  visible: e.boolean().default(!0)
}), C = e.object({
  summary: t.extend({
    id: e.literal("summary"),
    content: e.string().default("")
  }),
  awards: t.extend({
    id: e.literal("awards"),
    items: e.array(i)
  }),
  certifications: t.extend({
    id: e.literal("certifications"),
    items: e.array(a)
  }),
  education: t.extend({
    id: e.literal("education"),
    items: e.array(o)
  }),
  experience: t.extend({
    id: e.literal("experience"),
    items: e.array(m)
  }),
  volunteer: t.extend({
    id: e.literal("volunteer"),
    items: e.array(p)
  }),
  interests: t.extend({
    id: e.literal("interests"),
    items: e.array(n)
  }),
  languages: t.extend({
    id: e.literal("languages"),
    items: e.array(s)
  }),
  profiles: t.extend({
    id: e.literal("profiles"),
    items: e.array(l)
  }),
  projects: t.extend({
    id: e.literal("projects"),
    items: e.array(c)
  }),
  publications: t.extend({
    id: e.literal("publications"),
    items: e.array(d)
  }),
  references: t.extend({
    id: e.literal("references"),
    items: e.array(f)
  }),
  skills: t.extend({
    id: e.literal("skills"),
    items: e.array(u)
  })
  // custom: z.record(z.string(), customSchema)
}), r = {
  name: "",
  columns: 1,
  separateLinks: !0,
  visible: !0
}, A = {
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
  skills: { ...r, id: "skills", name: "Skills", items: [] }
  // custom: {}
};
export {
  i as awardSchema,
  a as certificationSchema,
  re as customSectionSchema,
  V as defaultAward,
  q as defaultCertification,
  ie as defaultCustomSection,
  D as defaultEducation,
  G as defaultExperience,
  J as defaultInterest,
  M as defaultLanguage,
  O as defaultProfile,
  T as defaultProject,
  W as defaultPublication,
  Y as defaultReference,
  r as defaultSection,
  A as defaultSections,
  _ as defaultSkill,
  ee as defaultVolunteer,
  o as educationSchema,
  m as experienceSchema,
  n as interestSchema,
  s as languageSchema,
  l as profileSchema,
  c as projectSchema,
  d as publicationSchema,
  f as referenceSchema,
  t as sectionSchema,
  C as sectionsSchema,
  u as skillSchema,
  p as volunteerSchema
};
