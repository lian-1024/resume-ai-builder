"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js"),t=require("../shared/item.js");require("../shared/id.js");const r=require("../shared/url.js"),i=t.itemSchema.extend({company:e.default.string(),position:e.default.string(),location:e.default.string(),date:e.default.string(),summary:e.default.string(),url:r.urlSchema}),n={...t.defaultItem,company:"",position:"",location:"",date:"",summary:"",url:r.defaultUrl};exports.defaultExperience=n;exports.experienceSchema=i;
