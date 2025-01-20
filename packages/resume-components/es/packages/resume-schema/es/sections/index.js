import e from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { awardSchema as r } from "./award.js";
import { certificationSchema as t } from "./certification.js";
import { educationSchema as i } from "./education.js";
import { experienceSchema as s } from "./experience.js";
import { interestSchema as m } from "./interest.js";
import { languageSchema as o } from "./language.js";
import { profileSchema as c } from "./profile.js";
import { projectSchema as l } from "./project.js";
import { publicationSchema as n } from "./publication.js";
import { referenceSchema as d } from "./reference.js";
import { skillSchema as p } from "./skill.js";
import { volunteerSchema as f } from "./volunteer.js";
import "./custom-section.js";
const a = e.object({
  name: e.string(),
  columns: e.number().max(5).default(1),
  separateLinks: e.boolean().default(!0),
  visible: e.boolean().default(!0)
}), L = e.object({
  summary: a.extend({
    id: e.literal("summary"),
    content: e.string().default("")
  }),
  awards: a.extend({
    id: e.literal("awards"),
    items: e.array(r)
  }),
  certifications: a.extend({
    id: e.literal("certifications"),
    items: e.array(t)
  }),
  education: a.extend({
    id: e.literal("education"),
    items: e.array(i)
  }),
  experience: a.extend({
    id: e.literal("experience"),
    items: e.array(s)
  }),
  volunteer: a.extend({
    id: e.literal("volunteer"),
    items: e.array(f)
  }),
  interests: a.extend({
    id: e.literal("interests"),
    items: e.array(m)
  }),
  languages: a.extend({
    id: e.literal("languages"),
    items: e.array(o)
  }),
  profiles: a.extend({
    id: e.literal("profiles"),
    items: e.array(c)
  }),
  projects: a.extend({
    id: e.literal("projects"),
    items: e.array(l)
  }),
  publications: a.extend({
    id: e.literal("publications"),
    items: e.array(n)
  }),
  references: a.extend({
    id: e.literal("references"),
    items: e.array(d)
  }),
  skills: a.extend({
    id: e.literal("skills"),
    items: e.array(p)
  })
  // custom: z.record(z.string(), customSchema)
});
export {
  r as awardSchema,
  t as certificationSchema,
  i as educationSchema,
  s as experienceSchema,
  m as interestSchema,
  o as languageSchema,
  c as profileSchema,
  l as projectSchema,
  n as publicationSchema,
  d as referenceSchema,
  a as sectionSchema,
  L as sectionsSchema,
  p as skillSchema,
  f as volunteerSchema
};
//# sourceMappingURL=index.js.map
