"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("zod"),t=require("../shared/item.js");require("../shared/id.js");const r=require("../shared/url.js"),o=t.itemSchema.extend({organization:e.z.string(),position:e.z.string(),location:e.z.string(),date:e.z.string(),summary:e.z.string(),url:r.urlSchema}),n={...t.defaultItem,organization:"",position:"",location:"",date:"",summary:"",url:r.defaultUrl};exports.defaultVolunteer=n;exports.volunteerSchema=o;
