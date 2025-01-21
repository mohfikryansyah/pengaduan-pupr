import{c as d}from"./createLucideIcon-DGLUHFW_.js";import{r as u}from"./app-iOfuzUGb.js";import{u as b}from"./index-AB4lCN4f.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=d("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function g(r){const[h,e]=u.useState(void 0);return b(()=>{if(r){e({width:r.offsetWidth,height:r.offsetHeight});const f=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const c=o[0];let i,t;if("borderBoxSize"in c){const s=c.borderBoxSize,a=Array.isArray(s)?s[0]:s;i=a.inlineSize,t=a.blockSize}else i=r.offsetWidth,t=r.offsetHeight;e({width:i,height:t})});return f.observe(r,{box:"border-box"}),()=>f.unobserve(r)}else e(void 0)},[r]),h}export{y as C,g as u};
