import e from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { educationSchema as i } from "./education.js";
import { defaultEducation as p } from "./education.js";
import { projectSchema as a } from "./project.js";
import { defaultProject as k } from "./project.js";
import { skillSchema as r } from "./skill.js";
import { defaultSkill as x } from "./skill.js";
const t = e.object({
  name: e.string(),
  columns: e.number().max(5).default(1),
  separateLinks: e.boolean().default(!0),
  visible: e.boolean().default(!0)
}), n = e.object({
  education: t.extend({
    id: e.literal("education"),
    items: e.array(i)
  }),
  projects: t.extend({
    id: e.literal("projects"),
    items: e.array(a)
  }),
  skills: t.extend({
    id: e.literal("skills"),
    items: e.array(r)
  })
  // custom: z.record(z.string(), customSchema)
}), o = {
  name: "",
  columns: 1,
  separateLinks: !0,
  visible: !0
}, d = {
  education: {
    ...o,
    id: "education",
    name: "Education",
    items: []
  },
  projects: { ...o, id: "projects", name: "Projects", items: [] },
  skills: { ...o, id: "skills", name: "Skills", items: [] }
  // custom: {}
};
export {
  p as defaultEducation,
  k as defaultProject,
  o as defaultSection,
  d as defaultSections,
  x as defaultSkill,
  i as educationSchema,
  a as projectSchema,
  t as sectionSchema,
  n as sectionsSchema,
  r as skillSchema
};
