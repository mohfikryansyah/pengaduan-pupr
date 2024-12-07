import{r as i,j as s}from"./app-C8iCkmTH.js";import{u as O,b as j,S as F,c as re,P as b,a as y,R as se,h as ie,d as ce,F as le,D as de,m as ue,g as fe,e as _,i as ge}from"./Combination-D5evQ1Js.js";import{c as me,a as pe,b as x}from"./utils-WLy0RHGw.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=me("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function he(e,t){return i.useReducer((n,o)=>t[n][o]??n,e)}var E=e=>{const{present:t,children:n}=e,o=xe(t),r=typeof n=="function"?n({present:o.isPresent}):i.Children.only(n),a=O(o.ref,Ne(r));return typeof n=="function"||o.isPresent?i.cloneElement(r,{ref:a}):null};E.displayName="Presence";function xe(e){const[t,n]=i.useState(),o=i.useRef({}),r=i.useRef(e),a=i.useRef("none"),l=e?"mounted":"unmounted",[d,u]=he(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const c=R(o.current);a.current=d==="mounted"?c:"none"},[d]),j(()=>{const c=o.current,f=r.current;if(f!==e){const m=a.current,v=R(c);e?u("MOUNT"):v==="none"||(c==null?void 0:c.display)==="none"?u("UNMOUNT"):u(f&&m!==v?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,u]),j(()=>{if(t){let c;const f=t.ownerDocument.defaultView??window,g=v=>{const D=R(o.current).includes(v.animationName);if(v.target===t&&D&&(u("ANIMATION_END"),!r.current)){const N=t.style.animationFillMode;t.style.animationFillMode="forwards",c=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=N)})}},m=v=>{v.target===t&&(a.current=R(o.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",g),t.addEventListener("animationend",g),()=>{f.clearTimeout(c),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",g),t.removeEventListener("animationend",g)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:i.useCallback(c=>{c&&(o.current=getComputedStyle(c)),n(c)},[])}}function R(e){return(e==null?void 0:e.animationName)||"none"}function Ne(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const M=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,S=pe,k=(e,t)=>n=>{var o;if((t==null?void 0:t.variants)==null)return S(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:a}=t,l=Object.keys(r).map(c=>{const f=n==null?void 0:n[c],g=a==null?void 0:a[c];if(f===null)return null;const m=M(f)||M(g);return r[c][m]}),d=n&&Object.entries(n).reduce((c,f)=>{let[g,m]=f;return m===void 0||(c[g]=m),c},{}),u=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:g,className:m,...v}=f;return Object.entries(v).every(A=>{let[D,N]=A;return Array.isArray(N)?N.includes({...a,...d}[D]):{...a,...d}[D]===N})?[...c,g,m]:c},[]);return S(e,l,u,n==null?void 0:n.class,n==null?void 0:n.className)},ye=k("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),be=i.forwardRef(({className:e,variant:t,size:n,asChild:o=!1,...r},a)=>{const l=o?F:"button";return s.jsx(l,{className:x(ye({variant:t,size:n,className:e})),ref:a,...r})});be.displayName="Button";var P="Dialog",[W,$e]=re(P),[De,p]=W(P),L=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:r,onOpenChange:a,modal:l=!0}=e,d=i.useRef(null),u=i.useRef(null),[c=!1,f]=fe({prop:o,defaultProp:r,onChange:a});return s.jsx(De,{scope:t,triggerRef:d,contentRef:u,contentId:_(),titleId:_(),descriptionId:_(),open:c,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(g=>!g),[f]),modal:l,children:n})};L.displayName=P;var V="DialogTrigger",U=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=p(V,n),a=O(t,r.triggerRef);return s.jsx(b.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":I(r.open),...o,ref:a,onClick:y(e.onClick,r.onOpenToggle)})});U.displayName=V;var T="DialogPortal",[Re,G]=W(T,{forceMount:void 0}),$=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:r}=e,a=p(T,t);return s.jsx(Re,{scope:t,forceMount:n,children:i.Children.map(o,l=>s.jsx(E,{present:n||a.open,children:s.jsx(ge,{asChild:!0,container:r,children:l})}))})};$.displayName=T;var C="DialogOverlay",B=i.forwardRef((e,t)=>{const n=G(C,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=p(C,e.__scopeDialog);return a.modal?s.jsx(E,{present:o||a.open,children:s.jsx(Ce,{...r,ref:t})}):null});B.displayName=C;var Ce=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=p(C,n);return s.jsx(se,{as:F,allowPinchZoom:!0,shards:[r.contentRef],children:s.jsx(b.div,{"data-state":I(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),h="DialogContent",z=i.forwardRef((e,t)=>{const n=G(h,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=p(h,e.__scopeDialog);return s.jsx(E,{present:o||a.open,children:a.modal?s.jsx(Oe,{...r,ref:t}):s.jsx(Ee,{...r,ref:t})})});z.displayName=h;var Oe=i.forwardRef((e,t)=>{const n=p(h,e.__scopeDialog),o=i.useRef(null),r=O(t,n.contentRef,o);return i.useEffect(()=>{const a=o.current;if(a)return ie(a)},[]),s.jsx(H,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:y(e.onCloseAutoFocus,a=>{var l;a.preventDefault(),(l=n.triggerRef.current)==null||l.focus()}),onPointerDownOutside:y(e.onPointerDownOutside,a=>{const l=a.detail.originalEvent,d=l.button===0&&l.ctrlKey===!0;(l.button===2||d)&&a.preventDefault()}),onFocusOutside:y(e.onFocusOutside,a=>a.preventDefault())})}),Ee=i.forwardRef((e,t)=>{const n=p(h,e.__scopeDialog),o=i.useRef(!1),r=i.useRef(!1);return s.jsx(H,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var l,d;(l=e.onCloseAutoFocus)==null||l.call(e,a),a.defaultPrevented||(o.current||(d=n.triggerRef.current)==null||d.focus(),a.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:a=>{var u,c;(u=e.onInteractOutside)==null||u.call(e,a),a.defaultPrevented||(o.current=!0,a.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const l=a.target;((c=n.triggerRef.current)==null?void 0:c.contains(l))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&r.current&&a.preventDefault()}})}),H=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:a,...l}=e,d=p(h,n),u=i.useRef(null),c=O(t,u);return ce(),s.jsxs(s.Fragment,{children:[s.jsx(le,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:a,children:s.jsx(de,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":I(d.open),...l,ref:c,onDismiss:()=>d.onOpenChange(!1)})}),s.jsxs(s.Fragment,{children:[s.jsx(Ae,{titleId:d.titleId}),s.jsx(Pe,{contentRef:u,descriptionId:d.descriptionId})]})]})}),w="DialogTitle",K=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=p(w,n);return s.jsx(b.h2,{id:r.titleId,...o,ref:t})});K.displayName=w;var X="DialogDescription",q=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=p(X,n);return s.jsx(b.p,{id:r.descriptionId,...o,ref:t})});q.displayName=X;var Y="DialogClose",Z=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=p(Y,n);return s.jsx(b.button,{type:"button",...o,ref:t,onClick:y(e.onClick,()=>r.onOpenChange(!1))})});Z.displayName=Y;function I(e){return e?"open":"closed"}var J="DialogTitleWarning",[Be,Q]=ue(J,{contentName:h,titleName:w,docsSlug:"dialog"}),Ae=({titleId:e})=>{const t=Q(J),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},_e="DialogDescriptionWarning",Pe=({contentRef:e,descriptionId:t})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Q(_e).contentName}}.`;return i.useEffect(()=>{var a;const r=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(o))},[o,e,t]),null},Te=L,we=U,Ie=$,ee=B,te=z,ne=K,oe=q,je=Z;const ze=Te,He=we,Me=Ie,ae=i.forwardRef(({className:e,...t},n)=>s.jsx(ee,{className:x("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));ae.displayName=ee.displayName;const Se=k("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),Fe=i.forwardRef(({side:e="right",className:t,children:n,...o},r)=>s.jsxs(Me,{children:[s.jsx(ae,{}),s.jsxs(te,{ref:r,className:x(Se({side:e}),t),...o,children:[n,s.jsxs(je,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[s.jsx(ve,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Fe.displayName=te.displayName;const ke=({className:e,...t})=>s.jsx("div",{className:x("flex flex-col space-y-2 text-center sm:text-left",e),...t});ke.displayName="SheetHeader";const We=i.forwardRef(({className:e,...t},n)=>s.jsx(ne,{ref:n,className:x("text-lg font-semibold text-foreground",e),...t}));We.displayName=ne.displayName;const Le=i.forwardRef(({className:e,...t},n)=>s.jsx(oe,{ref:n,className:x("text-sm text-muted-foreground",e),...t}));Le.displayName=oe.displayName;export{be as B,te as C,oe as D,ee as O,Ie as P,Te as R,ze as S,ne as T,ve as X,je as a,we as b,k as c,He as d,Fe as e,ke as f,We as g,Le as h,E as i};