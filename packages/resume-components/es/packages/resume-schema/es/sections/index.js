import e from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { educationSchema as t } from "./education.js";
import { projectSchema as s } from "./project.js";
import { skillSchema as i } from "./skill.js";
const a = e.object({
  name: e.string(),
  columns: e.number().max(5).default(1),
  separateLinks: e.boolean().default(!0),
  visible: e.boolean().default(!0)
}), l = e.object({
  education: a.extend({
    id: e.literal("education"),
    items: e.array(t)
  }),
  projects: a.extend({
    id: e.literal("projects"),
    items: e.array(s)
  }),
  skills: a.extend({
    id: e.literal("skills"),
    items: e.array(i)
  })
  // custom: z.record(z.string(), customSchema)
});
export {
  t as educationSchema,
  s as projectSchema,
  a as sectionSchema,
  l as sectionsSchema,
  i as skillSchema
};
//# sourceMappingURL=index.js.map
