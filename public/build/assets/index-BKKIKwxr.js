import{r as i,j as C}from"./app-b4mXVD5R.js";import{S as U,u as A,c as L}from"./index-cDh_9doZ.js";import{a as F}from"./index-Dicf7H8G.js";import{i as W}from"./component-sl_GCre0.js";function k(e,n,{checkForDefaultPrevented:o=!0}={}){return function(t){if(e==null||e(t),o===!1||!t.defaultPrevented)return n==null?void 0:n(t)}}function T(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function $(...e){return n=>{let o=!1;const r=e.map(t=>{const a=T(t,n);return!o&&typeof a=="function"&&(o=!0),a});if(o)return()=>{for(let t=0;t<r.length;t++){const a=r[t];typeof a=="function"?a():T(e[t],null)}}}}function S(...e){return i.useCallback($(...e),e)}var B=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],y=B.reduce((e,n)=>{const o=i.forwardRef((r,t)=>{const{asChild:a,...u}=r,f=a?U:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(f,{...u,ref:t})});return o.displayName=`Primitive.${n}`,{...e,[n]:o}},{});function G(e,n){return i.useReducer((o,r)=>n[o][r]??o,e)}var I=e=>{const{present:n,children:o}=e,r=q(n),t=typeof o=="function"?o({present:r.isPresent}):i.Children.only(o),a=S(r.ref,V(t));return typeof o=="function"||r.isPresent?i.cloneElement(t,{ref:a}):null};I.displayName="Presence";function q(e){const[n,o]=i.useState(),r=i.useRef({}),t=i.useRef(e),a=i.useRef("none"),u=e?"mounted":"unmounted",[f,c]=G(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const s=v(r.current);a.current=f==="mounted"?s:"none"},[f]),A(()=>{const s=r.current,p=t.current;if(p!==e){const N=a.current,l=v(s);e?c("MOUNT"):l==="none"||(s==null?void 0:s.display)==="none"?c("UNMOUNT"):c(p&&N!==l?"ANIMATION_OUT":"UNMOUNT"),t.current=e}},[e,c]),A(()=>{if(n){let s;const p=n.ownerDocument.defaultView??window,m=l=>{const g=v(r.current).includes(l.animationName);if(l.target===n&&g&&(c("ANIMATION_END"),!t.current)){const R=n.style.animationFillMode;n.style.animationFillMode="forwards",s=p.setTimeout(()=>{n.style.animationFillMode==="forwards"&&(n.style.animationFillMode=R)})}},N=l=>{l.target===n&&(a.current=v(r.current))};return n.addEventListener("animationstart",N),n.addEventListener("animationcancel",m),n.addEventListener("animationend",m),()=>{p.clearTimeout(s),n.removeEventListener("animationstart",N),n.removeEventListener("animationcancel",m),n.removeEventListener("animationend",m)}}else c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:i.useCallback(s=>{s&&(r.current=getComputedStyle(s)),o(s)},[])}}function v(e){return(e==null?void 0:e.animationName)||"none"}function V(e){var r,t;let n=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?e.props.ref:e.props.ref||e.ref)}var P="Collapsible",[z,H]=L(P),[J,O]=z(P),E=i.forwardRef((e,n)=>{const{__scopeCollapsible:o,open:r,defaultOpen:t,disabled:a,onOpenChange:u,...f}=e,[c=!1,s]=F({prop:r,defaultProp:t,onChange:u});return C.jsx(J,{scope:o,disabled:a,contentId:W(),open:c,onOpenToggle:i.useCallback(()=>s(p=>!p),[s]),children:C.jsx(y.div,{"data-state":w(c),"data-disabled":a?"":void 0,...f,ref:n})})});E.displayName=P;var _="CollapsibleTrigger",D=i.forwardRef((e,n)=>{const{__scopeCollapsible:o,...r}=e,t=O(_,o);return C.jsx(y.button,{type:"button","aria-controls":t.contentId,"aria-expanded":t.open||!1,"data-state":w(t.open),"data-disabled":t.disabled?"":void 0,disabled:t.disabled,...r,ref:n,onClick:k(e.onClick,t.onOpenToggle)})});D.displayName=_;var x="CollapsibleContent",j=i.forwardRef((e,n)=>{const{forceMount:o,...r}=e,t=O(x,e.__scopeCollapsible);return C.jsx(I,{present:o||t.open,children:({present:a})=>C.jsx(K,{...r,ref:n,present:a})})});j.displayName=x;var K=i.forwardRef((e,n)=>{const{__scopeCollapsible:o,present:r,children:t,...a}=e,u=O(x,o),[f,c]=i.useState(r),s=i.useRef(null),p=S(n,s),m=i.useRef(0),N=m.current,l=i.useRef(0),b=l.current,g=u.open||f,R=i.useRef(g),h=i.useRef(void 0);return i.useEffect(()=>{const d=requestAnimationFrame(()=>R.current=!1);return()=>cancelAnimationFrame(d)},[]),A(()=>{const d=s.current;if(d){h.current=h.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const M=d.getBoundingClientRect();m.current=M.height,l.current=M.width,R.current||(d.style.transitionDuration=h.current.transitionDuration,d.style.animationName=h.current.animationName),c(r)}},[u.open,r]),C.jsx(y.div,{"data-state":w(u.open),"data-disabled":u.disabled?"":void 0,id:u.contentId,hidden:!g,...a,ref:p,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":b?`${b}px`:void 0,...e.style},children:g&&t})});function w(e){return e?"open":"closed"}var ee=E,ne=D,te=j;export{te as C,ee as R,ne as T,D as a,j as b,H as c};
