import{r as m,j as e,U as g,Y as fe,b as he,y as ge,_ as je}from"./app-CML9eYjT.js";import be from"./Main-BvCor2Yn.js";import{c as D}from"./utils-CytzSlOG.js";import{M as ye,c as U,P as ve,u as Ne,L as ke,m as A}from"./proxy-DlAEvBqc.js";import we from"./FormPengaduan-C2QSjN27.js";import{I as Ce}from"./input-BvQBzIcY.js";import{B as Ae}from"./button-qH6XEi7z.js";import{c as J}from"./index-9wbMK64p.js";import{S as H}from"./index-BbBRADMR.js";import{a as Q}from"./index-CPeofPJ3.js";import{c as X,R as Ie,T as Re,C as Se}from"./index-ChWcx8C2.js";import{i as Me}from"./component-BRRgamC_.js";import{u as Pe}from"./index-7FB3RZAr.js";import{C as Te}from"./chevron-down-BH6FqJVA.js";import{A as De}from"./arrow-left-Cfkt_QRD.js";import{c as Z}from"./createLucideIcon-ihY9_F_1.js";import{S as Ee}from"./search-DYBkSbm9.js";import"./Navbar-BTxCf8LA.js";import"./sheet-BfKQAG8R.js";import"./index-OjhbIz6f.js";import"./index-BwobEAja.js";import"./index-CS3XIsqb.js";import"./label-DDX1llLi.js";import"./index-Dzv_MV6Q.js";import"./MyMap-B8Lp6aPE.js";import"./leaflet-DGg07sAp.js";import"./VoiceRecorder-BEUwE_hK.js";import"./toggle-DEKmSs-6.js";import"./index-DW48STyt.js";import"./dialog-CWtjEedD.js";import"./index-CydFUz7J.js";import"./use-media-query-D19yua9s.js";import"./circle-help-Bi9JkokJ.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=Z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=Z("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);class Oe extends m.Component{getSnapshotBeforeUpdate(n){const a=this.props.childRef.current;if(a&&n.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=a.offsetHeight||0,s.width=a.offsetWidth||0,s.top=a.offsetTop,s.left=a.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Le({children:t,isPresent:n}){const a=m.useId(),s=m.useRef(null),r=m.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=m.useContext(ye);return m.useInsertionEffect(()=>{const{width:c,height:i,top:l,left:d}=r.current;if(n||!s.current||!c||!i)return;s.current.dataset.motionPopId=a;const x=document.createElement("style");return o&&(x.nonce=o),document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${i}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[n]),e.jsx(Oe,{isPresent:n,childRef:s,sizeRef:r,children:m.cloneElement(t,{ref:s})})}const ze=({children:t,initial:n,isPresent:a,onExitComplete:s,custom:r,presenceAffectsLayout:o,mode:c})=>{const i=U(He),l=m.useId(),d=m.useCallback(p=>{i.set(p,!0);for(const k of i.values())if(!k)return;s&&s()},[i,s]),x=m.useMemo(()=>({id:l,initial:n,isPresent:a,custom:r,onExitComplete:d,register:p=>(i.set(p,!1),()=>i.delete(p))}),o?[Math.random(),d]:[a,d]);return m.useMemo(()=>{i.forEach((p,k)=>i.set(k,!1))},[a]),m.useEffect(()=>{!a&&!i.size&&s&&s()},[a]),c==="popLayout"&&(t=e.jsx(Le,{isPresent:a,children:t})),e.jsx(ve.Provider,{value:x,children:t})};function He(){return new Map}const R=t=>t.key||"";function Y(t){const n=[];return m.Children.forEach(t,a=>{m.isValidElement(a)&&n.push(a)}),n}const ee=({children:t,exitBeforeEnter:n,custom:a,initial:s=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:c="sync"})=>{const i=m.useMemo(()=>Y(t),[t]),l=i.map(R),d=m.useRef(!0),x=m.useRef(i),p=U(()=>new Map),[k,v]=m.useState(i),[h,N]=m.useState(i);Ne(()=>{d.current=!1,x.current=i;for(let u=0;u<h.length;u++){const f=R(h[u]);l.includes(f)?p.delete(f):p.get(f)!==!0&&p.set(f,!1)}},[h,l.length,l.join("-")]);const j=[];if(i!==k){let u=[...i];for(let f=0;f<h.length;f++){const b=h[f],w=R(b);l.includes(w)||(u.splice(f,0,b),j.push(b))}c==="wait"&&j.length&&(u=j),N(Y(u)),v(i);return}const{forceRender:y}=m.useContext(ke);return e.jsx(e.Fragment,{children:h.map(u=>{const f=R(u),b=i===h||l.includes(f),w=()=>{if(p.has(f))p.set(f,!0);else return;let I=!0;p.forEach(O=>{O||(I=!1)}),I&&(y==null||y(),N(x.current),r&&r())};return e.jsx(ze,{isPresent:b,initial:!d.current||s?void 0:!1,custom:b?void 0:a,presenceAffectsLayout:o,mode:c,onExitComplete:b?void 0:w,children:u},f)})})},Ve=({words:t,duration:n=3e3,className:a})=>{const[s,r]=m.useState(t[0]),[o,c]=m.useState(!1),i=m.useCallback(()=>{const l=t[t.indexOf(s)+1]||t[0];r(l),c(!0)},[s,t]);return m.useEffect(()=>{o||setTimeout(()=>{i()},n)},[o,n,i]),e.jsx(ee,{onExitComplete:()=>{c(!1)},children:e.jsx(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-40,x:40,filter:"blur(8px)",scale:2,position:"absolute"},className:D("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",a),children:s.split(" ").map((l,d)=>e.jsxs(A.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:d*.3,duration:.3},className:"inline-block whitespace-nowrap",children:[l.split("").map((x,p)=>e.jsx(A.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:d*.3+p*.05,duration:.2},className:"inline-block",children:x},l+p)),e.jsx("span",{className:"inline-block",children:" "})]},l+d))},s)})};function F(t,n){if(typeof t=="function")return t(n);t!=null&&(t.current=n)}function Be(...t){return n=>{let a=!1;const s=t.map(r=>{const o=F(r,n);return!a&&typeof o=="function"&&(a=!0),o});if(a)return()=>{for(let r=0;r<s.length;r++){const o=s[r];typeof o=="function"?o():F(t[r],null)}}}}function V(...t){return m.useCallback(Be(...t),t)}function qe(t){const n=t+"CollectionProvider",[a,s]=J(n),[r,o]=a(n,{collectionRef:{current:null},itemMap:new Map}),c=v=>{const{scope:h,children:N}=v,j=g.useRef(null),y=g.useRef(new Map).current;return e.jsx(r,{scope:h,itemMap:y,collectionRef:j,children:N})};c.displayName=n;const i=t+"CollectionSlot",l=g.forwardRef((v,h)=>{const{scope:N,children:j}=v,y=o(i,N),u=V(h,y.collectionRef);return e.jsx(H,{ref:u,children:j})});l.displayName=i;const d=t+"CollectionItemSlot",x="data-radix-collection-item",p=g.forwardRef((v,h)=>{const{scope:N,children:j,...y}=v,u=g.useRef(null),f=V(h,u),b=o(d,N);return g.useEffect(()=>(b.itemMap.set(u,{ref:u,...y}),()=>void b.itemMap.delete(u))),e.jsx(H,{[x]:"",ref:f,children:j})});p.displayName=d;function k(v){const h=o(t+"CollectionConsumer",v);return g.useCallback(()=>{const j=h.collectionRef.current;if(!j)return[];const y=Array.from(j.querySelectorAll(`[${x}]`));return Array.from(h.itemMap.values()).sort((b,w)=>y.indexOf(b.ref.current)-y.indexOf(w.ref.current))},[h.collectionRef,h.itemMap])}return[{Provider:c,Slot:l,ItemSlot:p},k,s]}function Ge(t,n,{checkForDefaultPrevented:a=!0}={}){return function(r){if(t==null||t(r),a===!1||!r.defaultPrevented)return n==null?void 0:n(r)}}var We=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],te=We.reduce((t,n)=>{const a=m.forwardRef((s,r)=>{const{asChild:o,...c}=s,i=o?H:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e.jsx(i,{...c,ref:r})});return a.displayName=`Primitive.${n}`,{...t,[n]:a}},{}),C="Accordion",$e=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[q,Ke,Ye]=qe(C),[E,Wt]=J(C,[Ye,X]),G=X(),ae=g.forwardRef((t,n)=>{const{type:a,...s}=t,r=s,o=s;return e.jsx(q.Provider,{scope:t.__scopeAccordion,children:a==="multiple"?e.jsx(Qe,{...o,ref:n}):e.jsx(Je,{...r,ref:n})})});ae.displayName=C;var[ne,Fe]=E(C),[se,Ue]=E(C,{collapsible:!1}),Je=g.forwardRef((t,n)=>{const{value:a,defaultValue:s,onValueChange:r=()=>{},collapsible:o=!1,...c}=t,[i,l]=Q({prop:a,defaultProp:s,onChange:r});return e.jsx(ne,{scope:t.__scopeAccordion,value:i?[i]:[],onItemOpen:l,onItemClose:g.useCallback(()=>o&&l(""),[o,l]),children:e.jsx(se,{scope:t.__scopeAccordion,collapsible:o,children:e.jsx(oe,{...c,ref:n})})})}),Qe=g.forwardRef((t,n)=>{const{value:a,defaultValue:s,onValueChange:r=()=>{},...o}=t,[c=[],i]=Q({prop:a,defaultProp:s,onChange:r}),l=g.useCallback(x=>i((p=[])=>[...p,x]),[i]),d=g.useCallback(x=>i((p=[])=>p.filter(k=>k!==x)),[i]);return e.jsx(ne,{scope:t.__scopeAccordion,value:c,onItemOpen:l,onItemClose:d,children:e.jsx(se,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(oe,{...o,ref:n})})})}),[Xe,_]=E(C),oe=g.forwardRef((t,n)=>{const{__scopeAccordion:a,disabled:s,dir:r,orientation:o="vertical",...c}=t,i=g.useRef(null),l=V(i,n),d=Ke(a),p=Pe(r)==="ltr",k=Ge(t.onKeyDown,v=>{var $;if(!$e.includes(v.key))return;const h=v.target,N=d().filter(L=>{var K;return!((K=L.ref.current)!=null&&K.disabled)}),j=N.findIndex(L=>L.ref.current===h),y=N.length;if(j===-1)return;v.preventDefault();let u=j;const f=0,b=y-1,w=()=>{u=j+1,u>b&&(u=f)},I=()=>{u=j-1,u<f&&(u=b)};switch(v.key){case"Home":u=f;break;case"End":u=b;break;case"ArrowRight":o==="horizontal"&&(p?w():I());break;case"ArrowDown":o==="vertical"&&w();break;case"ArrowLeft":o==="horizontal"&&(p?I():w());break;case"ArrowUp":o==="vertical"&&I();break}const O=u%y;($=N[O].ref.current)==null||$.focus()});return e.jsx(Xe,{scope:a,disabled:s,direction:r,orientation:o,children:e.jsx(q.Slot,{scope:a,children:e.jsx(te.div,{...c,"data-orientation":o,ref:l,onKeyDown:s?void 0:k})})})}),T="AccordionItem",[Ze,W]=E(T),ie=g.forwardRef((t,n)=>{const{__scopeAccordion:a,value:s,...r}=t,o=_(T,a),c=Fe(T,a),i=G(a),l=Me(),d=s&&c.value.includes(s)||!1,x=o.disabled||t.disabled;return e.jsx(Ze,{scope:a,open:d,disabled:x,triggerId:l,children:e.jsx(Ie,{"data-orientation":o.orientation,"data-state":ue(d),...i,...r,ref:n,disabled:x,open:d,onOpenChange:p=>{p?c.onItemOpen(s):c.onItemClose(s)}})})});ie.displayName=T;var re="AccordionHeader",le=g.forwardRef((t,n)=>{const{__scopeAccordion:a,...s}=t,r=_(C,a),o=W(re,a);return e.jsx(te.h3,{"data-orientation":r.orientation,"data-state":ue(o.open),"data-disabled":o.disabled?"":void 0,...s,ref:n})});le.displayName=re;var B="AccordionTrigger",ce=g.forwardRef((t,n)=>{const{__scopeAccordion:a,...s}=t,r=_(C,a),o=W(B,a),c=Ue(B,a),i=G(a);return e.jsx(q.ItemSlot,{scope:a,children:e.jsx(Re,{"aria-disabled":o.open&&!c.collapsible||void 0,"data-orientation":r.orientation,id:o.triggerId,...i,...s,ref:n})})});ce.displayName=B;var de="AccordionContent",me=g.forwardRef((t,n)=>{const{__scopeAccordion:a,...s}=t,r=_(C,a),o=W(de,a),c=G(a);return e.jsx(Se,{role:"region","aria-labelledby":o.triggerId,"data-orientation":r.orientation,...c,...s,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});me.displayName=de;function ue(t){return t?"open":"closed"}var et=ae,tt=ie,at=le,pe=ce,xe=me;const nt=et,S=m.forwardRef(({className:t,...n},a)=>e.jsx(tt,{ref:a,className:D("border-b",t),...n}));S.displayName="AccordionItem";const M=m.forwardRef(({className:t,children:n,...a},s)=>e.jsx(at,{className:"flex",children:e.jsxs(pe,{ref:s,className:D("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...a,children:[n,e.jsx(Te,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));M.displayName=pe.displayName;const P=m.forwardRef(({className:t,children:n,...a},s)=>e.jsx(xe,{ref:s,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...a,children:e.jsx("div",{className:D("pb-4 pt-0",t),children:n})}));P.displayName=xe.displayName;const st=({testimonials:t,autoplay:n=!0})=>{const[a,s]=m.useState(0),r=()=>{s(l=>(l+1)%t.length)},o=()=>{s(l=>(l-1+t.length)%t.length)},c=l=>l===a;m.useEffect(()=>{if(n){const l=setInterval(r,5e3);return()=>clearInterval(l)}},[n]);const i=()=>Math.floor(Math.random()*21)-10;return e.jsx("div",{className:"max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20",children:e.jsxs("div",{className:"relative grid grid-cols-1 md:grid-cols-2  gap-20",children:[e.jsx("div",{children:e.jsx("div",{className:"relative h-80 w-full",children:e.jsx(ee,{children:t.map((l,d)=>e.jsx(A.div,{initial:{opacity:0,scale:.9,z:-100,rotate:i()},animate:{opacity:c(d)?1:.7,scale:c(d)?1:.95,z:c(d)?0:-100,rotate:c(d)?0:i(),zIndex:c(d)?999:t.length+2-d,y:c(d)?[0,-80,0]:0},exit:{opacity:0,scale:.9,z:100,rotate:i()},transition:{duration:.4,ease:"easeInOut"},className:"absolute inset-0 origin-bottom",children:e.jsx("img",{src:l.src,alt:l.name,width:500,height:500,draggable:!1,className:"h-full w-full rounded-3xl object-cover object-center"})},l.src))})})}),e.jsxs("div",{className:"flex justify-between flex-col py-4",children:[e.jsxs(A.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0},transition:{duration:.2,ease:"easeInOut"},children:[e.jsx("h3",{className:"text-2xl font-bold dark:text-white text-black",children:t[a].name}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-neutral-500",children:t[a].designation}),e.jsx(A.p,{className:"text-lg text-gray-500 mt-8 dark:text-neutral-300",children:t[a].quote.split(" ").map((l,d)=>e.jsxs(A.span,{initial:{filter:"blur(10px)",opacity:0,y:5},animate:{filter:"blur(0px)",opacity:1,y:0},transition:{duration:.2,ease:"easeInOut",delay:.02*d},className:"inline-block",children:[l," "]},d))})]},a),e.jsxs("div",{className:"flex gap-4 pt-12 md:pt-0",children:[e.jsx("button",{onClick:o,className:"h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",children:e.jsx(De,{className:"h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"})}),e.jsx("button",{onClick:r,className:"h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button",children:e.jsx(_e,{className:"h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"})})]})]})]})})};function $t(){return e.jsxs(be,{children:[e.jsx(fe,{title:"Dinas Perumahan dan Pemukiman"}),e.jsx(ot,{}),e.jsx(we,{}),e.jsx(it,{}),e.jsx(rt,{}),e.jsx(lt,{}),e.jsx(ct,{}),e.jsx(dt,{})]})}function ot(){const t=["Masyarakat","Online","Cepat Tanggap","Fasilitas Umum","Berbasis Teknologi"],[n,a]=m.useState(""),s=()=>(n.length>9&&ge.get(route("complaint.search"),{query:n}),je.error("Nomor telp tidak valid"));return e.jsxs("div",{className:"bg-[#e9f3f4] w-full h-[70vh] flex item-center justify-around",children:[e.jsxs("div",{className:"md:text-6xl text-4xl flex flex-col gap-y-2 md:-mt-20 md:px-0 px-3 items-start justify-center text-center font-semibold text-[#1d1e20] dark:text-neutral-400",children:[e.jsxs("h1",{children:["Layanan Pengaduan ",e.jsx("br",{})]}),e.jsx(Ve,{words:t,className:"text-[#083247] px-0 font-extrabold"}),e.jsx("p",{className:"md:text-xl my-5 md:max-w-md text-start text-lg text-[#818a9e]",children:"Sampaikan laporan Anda langsung kepada instansi pemerintah berwenang"}),e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"inline-flex items-center bg-white/80 rounded-lg max-w-xl mb-3",children:[e.jsx(Ee,{className:"ml-2 w-5 h-5 text-black/70"}),e.jsx(Ce,{type:"tel",placeholder:"Ketik Nomor Anda",className:"z-[50] py-2 focus-visible:ring-0 focus-visible:border-0 w-[200px] mx-auto focus-visible:ring-offset-0 text-black/80 bg-transparent border-0",onChange:r=>a(r.target.value),value:n})]}),e.jsx(Ae,{onClick:s,className:"ml-2 bg-[#348d9d] active:scale-90 duration-300 transform",children:"Cari Laporan"})]})]}),e.jsx("div",{className:"hidden md:flex flex-col items-start justify-center -mt-20",children:e.jsx("img",{src:"/image/lapor-vector.png",className:"max-w-sm h-auto",alt:"Lapor Vector"})})]})}function it(){return e.jsxs("div",{id:"about",className:"w-full h-auto bg-[#083247] lg:py-20 lg:px-32 md:p-10 p-5",children:[e.jsx("h1",{className:"text-white md:text-4xl text-lg",children:"Alur Pengaduan Disperkim"}),e.jsxs("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10",children:[e.jsxs("div",{className:"bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white",children:[e.jsx("h1",{className:"text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]",children:"1"}),e.jsx("h2",{className:"text-xl font-bold text-[#1989c2]",children:"Ajukan Pengaduan"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Mulailah dengan mengisi formulir pengaduan secara online, yang mencakup deskripsi rinci mengenai masalah yang Anda hadapi. Anda dapat menyertakan foto atau bukti pendukung untuk memperjelas laporan Anda. Proses ini dapat dilakukan melalui perangkat apa saja, kapan saja."})]}),e.jsxs("div",{className:"bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white",children:[e.jsx("h1",{className:"text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]",children:"2"}),e.jsx("h2",{className:"text-xl font-bold text-[#1989c2]",children:"Proses Verifikasi"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Setelah pengaduan Anda diterima, tim Disperkim akan melakukan verifikasi untuk memastikan keakuratan informasi dan keabsahan masalah yang dilaporkan. Jika diperlukan, tim akan menghubungi Anda untuk klarifikasi lebih lanjut sebelum memprosesnya lebih lanjut."})]}),e.jsxs("div",{className:"bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white",children:[e.jsx("h1",{className:"text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]",children:"3"}),e.jsx("h2",{className:"text-xl font-bold text-[#1989c2]",children:"Tindak Lanjut"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Setelah pengaduan diverifikasi, tim terkait akan segera mengambil langkah-langkah untuk menyelesaikan masalah yang dilaporkan. Solusi yang diberikan akan sesuai dengan kebijakan dan prioritas yang ada, dengan tujuan untuk menyelesaikan masalah secepat mungkin."})]}),e.jsxs("div",{className:"bg-[#113a4e] rounded-lg h-auto space-y-2 p-5 text-white",children:[e.jsx("h1",{className:"text-7xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-b from-white to-[#113a4e]",children:"4"}),e.jsx("h2",{className:"text-xl font-bold text-[#1989c2]",children:"Notifikasi"}),e.jsx("p",{className:"text-sm text-gray-300",children:"Selama proses penyelesaian, Anda akan mendapatkan pembaruan status pengaduan melalui email atau notifikasi di aplikasi. Anda akan diberi tahu jika ada perkembangan baru, seperti perubahan status atau penyelesaian masalah, sehingga Anda selalu mengetahui status pengaduan Anda."})]})]})]})}function rt(){return e.jsxs("div",{className:"w-full h-auto py-10 text-center",children:[e.jsxs("div",{className:"max-w-screen-lg mx-auto space-y-3",children:[e.jsx("h2",{className:"uppercase text-[#348d9d] font-semibold text-xl",children:"Why Us"}),e.jsx("h1",{className:"text-3xl max-w-screen-sm mx-auto text-[#1d1e20] font-bold",children:"Kami memberikan solusi cepat, transparan, dan tanggap terhadap setiap pengaduan masyarakat."}),e.jsx("p",{className:"text-gray-500 w-[21rem] mx-auto font-semibold pt-7",children:"Lebih dari 10.000 laporan berhasil ditangani dan penyelesaian rata-rata dalam 3 hari kerja."})]}),e.jsxs("div",{className:"grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 pt-10 max-w-screen-lg mx-auto",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-bold text-7xl text-[#1d1e20]",children:"100"}),e.jsx("p",{className:"font-semibold text-[#083247] text-lg",children:"Laporan belum diproses"})]}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-bold text-7xl text-[#1d1e20]",children:"152"}),e.jsx("p",{className:"font-semibold text-[#083247] text-lg",children:"Laporan sedang diproses"})]}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-bold text-7xl text-[#1d1e20]",children:"10k+"}),e.jsx("p",{className:"font-semibold text-[#083247] text-lg",children:"Laporan selesai diproses"})]}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-bold text-7xl text-[#1d1e20]",children:"1k+"}),e.jsx("p",{className:"font-semibold text-[#083247] text-lg",children:"Laporan ditolak"})]})]})]})}function lt(){const t=[{quote:"Bagus sekali! Saya sangat senang dengan layanan yang diberikan. Sangat mudah digunakan dan hasilnya melebihi ekspektasi kami.",name:"Mohamad Fiqriansyah Panu",designation:"Air bersih",src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{quote:"Layanan yang luar biasa! Saya sangat senang dengan hasilnya. Saya sangat suka!",name:"Oten Syahputra",designation:"CTO at InnovateSphere",src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{quote:"This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",name:"Emily Watson",designation:"Operations Director at CloudScale",src:"https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{quote:"Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",name:"James Kim",designation:"Engineering Lead at DataPro",src:"https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{quote:"The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",name:"Lisa Thompson",designation:"VP of Technology at FutureNet",src:"https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}];return e.jsx("div",{className:"w-full",children:e.jsx(st,{testimonials:t})})}function ct(){return e.jsxs("div",{className:"max-w-screen-lg mx-auto py-10 md:px-0 px-10",children:[e.jsx("h1",{className:"text-4xl",children:"Pertanyaan yang sering diajukan"}),e.jsxs(nt,{type:"single",collapsible:!0,className:"w-full",children:[e.jsxs(S,{value:"item-1",children:[e.jsx(M,{children:"Is it accessible?"}),e.jsx(P,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(S,{value:"item-2",children:[e.jsx(M,{children:"Is it styled?"}),e.jsx(P,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(S,{value:"item-3",children:[e.jsx(M,{children:"Is it animated?"}),e.jsx(P,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})]})}function dt(){return e.jsxs("div",{className:"w-full pb-[10rem] bg-[#f5f9f9] p-5 md:flex justify-around gap-5 text-[#083247]",children:[e.jsx("div",{className:"h-full",children:e.jsxs(he,{href:"https://flowbite.com/",className:"flex items-center space-x-3 rtl:space-x-reverse",children:[e.jsx("img",{src:"/logo-kg.png",className:"w-9 h-auto",alt:"Flowbite Logo"}),e.jsxs("div",{className:"-space-y-2",children:[e.jsx("p",{className:"self-center text-xl font-bold whitespace-nowrap text-gray-800",children:"DISPERKIM"}),e.jsx("p",{className:"self-center text-md font-bold whitespace-nowrap text-gray-800",children:"KOTA GORONTALO"})]})]})}),e.jsxs("div",{className:"h-full grid grid-cols-3 gap-5",children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Solutions"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"})]}),e.jsxs("div",{children:[e.jsx("h1",{children:"Solutions"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"})]}),e.jsxs("div",{children:[e.jsx("h1",{children:"Solutions"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"}),e.jsx("p",{children:"Tes 1"})]})]}),e.jsxs("div",{className:"h-full",children:[e.jsx("h1",{children:"Follow Us"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(z,{className:"w-5 h-5"}),e.jsx(z,{className:"w-5 h-5"}),e.jsx(z,{className:"w-5 h-5"})]})]})]})}export{$t as default};
