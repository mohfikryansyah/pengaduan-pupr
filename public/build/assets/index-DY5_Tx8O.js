import{c as Pe}from"./utils-BcJn-yPY.js";import{r as i,j as l,b as Te,R as xe}from"./app-DvGGSOt5.js";import{d as Ae,u as k,c as Ie,R as we,h as Se,a as _e,e as Fe,b as j}from"./Combination-D5Zdc9yt.js";import{a as _,b as Me}from"./index-DMAdhObS.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=Pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function P(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function Z(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function oe(...e){return t=>{let n=!1;const o=e.map(r=>{const s=Z(r,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<o.length;r++){const s=o[r];typeof s=="function"?s():Z(e[r],null)}}}}function x(...e){return i.useCallback(oe(...e),e)}var V=i.forwardRef((e,t)=>{const{children:n,...o}=e,r=i.Children.toArray(n),s=r.find(je);if(s){const c=s.props.children,a=r.map(d=>d===s?i.Children.count(c)>1?i.Children.only(null):i.isValidElement(c)?c.props.children:null:d);return l.jsx(B,{...o,ref:t,children:i.isValidElement(c)?i.cloneElement(c,void 0,a):null})}return l.jsx(B,{...o,ref:t,children:n})});V.displayName="Slot";var B=i.forwardRef((e,t)=>{const{children:n,...o}=e;if(i.isValidElement(n)){const r=Ue(n);return i.cloneElement(n,{...We(o,n.props),ref:t?oe(t,r):r})}return i.Children.count(n)>1?i.Children.only(null):null});B.displayName="SlotClone";var Le=({children:e})=>l.jsx(l.Fragment,{children:e});function je(e){return i.isValidElement(e)&&e.type===Le}function We(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...a)=>{s(...a),r(...a)}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}function Ue(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ke=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],N=ke.reduce((e,t)=>{const n=i.forwardRef((o,r)=>{const{asChild:s,...c}=o,a=s?V:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),l.jsx(a,{...c,ref:r})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Be(e,t){e&&Te.flushSync(()=>e.dispatchEvent(t))}var Ke="DismissableLayer",K="dismissableLayer.update",Ve="dismissableLayer.pointerDownOutside",$e="dismissableLayer.focusOutside",q,re=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),se=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:c,onDismiss:a,...d}=e,u=i.useContext(re),[f,h]=i.useState(null),g=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=i.useState({}),A=x(t,v=>h(v)),p=Array.from(u.layers),[D]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),E=p.indexOf(D),O=f?p.indexOf(f):-1,b=u.layersWithOutsidePointerEventsDisabled.size>0,y=O>=E,I=He(v=>{const w=v.target,Y=[...u.branches].some(L=>L.contains(w));!y||Y||(r==null||r(v),c==null||c(v),v.defaultPrevented||a==null||a())},g),X=Xe(v=>{const w=v.target;[...u.branches].some(L=>L.contains(w))||(s==null||s(v),c==null||c(v),v.defaultPrevented||a==null||a())},g);return Ae(v=>{O===u.layers.size-1&&(o==null||o(v),!v.defaultPrevented&&a&&(v.preventDefault(),a()))},g),i.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(q=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),J(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=q)}},[f,g,n,u]),i.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),J())},[f,u]),i.useEffect(()=>{const v=()=>m({});return document.addEventListener(K,v),()=>document.removeEventListener(K,v)},[]),l.jsx(N.div,{...d,ref:A,style:{pointerEvents:b?y?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,X.onFocusCapture),onBlurCapture:P(e.onBlurCapture,X.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,I.onPointerDownCapture)})});se.displayName=Ke;var Ge="DismissableLayerBranch",ze=i.forwardRef((e,t)=>{const n=i.useContext(re),o=i.useRef(null),r=x(t,o);return i.useEffect(()=>{const s=o.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),l.jsx(N.div,{...e,ref:r})});ze.displayName=Ge;function He(e,t=globalThis==null?void 0:globalThis.document){const n=_(e),o=i.useRef(!1),r=i.useRef(()=>{});return i.useEffect(()=>{const s=a=>{if(a.target&&!o.current){let d=function(){ie(Ve,n,u,{discrete:!0})};const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=d,t.addEventListener("click",r.current,{once:!0})):d()}else t.removeEventListener("click",r.current);o.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",s),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Xe(e,t=globalThis==null?void 0:globalThis.document){const n=_(e),o=i.useRef(!1);return i.useEffect(()=>{const r=s=>{s.target&&!o.current&&ie($e,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function J(){const e=new CustomEvent(K);document.dispatchEvent(e)}function ie(e,t,n,{discrete:o}){const r=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?Be(r,s):r.dispatchEvent(s)}var W="focusScope.autoFocusOnMount",U="focusScope.autoFocusOnUnmount",Q={bubbles:!1,cancelable:!0},Ye="FocusScope",ae=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:o=!1,onMountAutoFocus:r,onUnmountAutoFocus:s,...c}=e,[a,d]=i.useState(null),u=_(r),f=_(s),h=i.useRef(null),g=x(t,p=>d(p)),m=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(o){let p=function(b){if(m.paused||!a)return;const y=b.target;a.contains(y)?h.current=y:R(h.current,{select:!0})},D=function(b){if(m.paused||!a)return;const y=b.relatedTarget;y!==null&&(a.contains(y)||R(h.current,{select:!0}))},E=function(b){if(document.activeElement===document.body)for(const I of b)I.removedNodes.length>0&&R(a)};document.addEventListener("focusin",p),document.addEventListener("focusout",D);const O=new MutationObserver(E);return a&&O.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",p),document.removeEventListener("focusout",D),O.disconnect()}}},[o,a,m.paused]),i.useEffect(()=>{if(a){te.add(m);const p=document.activeElement;if(!a.contains(p)){const E=new CustomEvent(W,Q);a.addEventListener(W,u),a.dispatchEvent(E),E.defaultPrevented||(Ze(tt(ce(a)),{select:!0}),document.activeElement===p&&R(a))}return()=>{a.removeEventListener(W,u),setTimeout(()=>{const E=new CustomEvent(U,Q);a.addEventListener(U,f),a.dispatchEvent(E),E.defaultPrevented||R(p??document.body,{select:!0}),a.removeEventListener(U,f),te.remove(m)},0)}}},[a,u,f,m]);const A=i.useCallback(p=>{if(!n&&!o||m.paused)return;const D=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,E=document.activeElement;if(D&&E){const O=p.currentTarget,[b,y]=qe(O);b&&y?!p.shiftKey&&E===y?(p.preventDefault(),n&&R(b,{select:!0})):p.shiftKey&&E===b&&(p.preventDefault(),n&&R(y,{select:!0})):E===O&&p.preventDefault()}},[n,o,m.paused]);return l.jsx(N.div,{tabIndex:-1,...c,ref:g,onKeyDown:A})});ae.displayName=Ye;function Ze(e,{select:t=!1}={}){const n=document.activeElement;for(const o of e)if(R(o,{select:t}),document.activeElement!==n)return}function qe(e){const t=ce(e),n=ee(t,e),o=ee(t.reverse(),e);return[n,o]}function ce(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const r=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||r?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ee(e,t){for(const n of e)if(!Je(n,{upTo:t}))return n}function Je(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Qe(e){return e instanceof HTMLInputElement&&"select"in e}function R(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Qe(e)&&t&&e.select()}}var te=et();function et(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ne(e,t),e.unshift(t)},remove(t){var n;e=ne(e,t),(n=e[0])==null||n.resume()}}}function ne(e,t){const n=[...e],o=n.indexOf(t);return o!==-1&&n.splice(o,1),n}function tt(e){return e.filter(t=>t.tagName!=="A")}var nt="Portal",ue=i.forwardRef((e,t)=>{var a;const{container:n,...o}=e,[r,s]=i.useState(!1);k(()=>s(!0),[]);const c=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return c?xe.createPortal(l.jsx(N.div,{...o,ref:t}),c):null});ue.displayName=nt;function ot(e,t){return i.useReducer((n,o)=>t[n][o]??n,e)}var M=e=>{const{present:t,children:n}=e,o=rt(t),r=typeof n=="function"?n({present:o.isPresent}):i.Children.only(n),s=x(o.ref,st(r));return typeof n=="function"||o.isPresent?i.cloneElement(r,{ref:s}):null};M.displayName="Presence";function rt(e){const[t,n]=i.useState(),o=i.useRef({}),r=i.useRef(e),s=i.useRef("none"),c=e?"mounted":"unmounted",[a,d]=ot(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const u=S(o.current);s.current=a==="mounted"?u:"none"},[a]),k(()=>{const u=o.current,f=r.current;if(f!==e){const g=s.current,m=S(u);e?d("MOUNT"):m==="none"||(u==null?void 0:u.display)==="none"?d("UNMOUNT"):d(f&&g!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,d]),k(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,h=m=>{const p=S(o.current).includes(m.animationName);if(m.target===t&&p&&(d("ANIMATION_END"),!r.current)){const D=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=D)})}},g=m=>{m.target===t&&(s.current=S(o.current))};return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:i.useCallback(u=>{u&&(o.current=getComputedStyle(u)),n(u)},[])}}function S(e){return(e==null?void 0:e.animationName)||"none"}function st(e){var o,r;let t=(o=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var $="Dialog",[le,yt]=Ie($),[it,C]=le($),de=e=>{const{__scopeDialog:t,children:n,open:o,defaultOpen:r,onOpenChange:s,modal:c=!0}=e,a=i.useRef(null),d=i.useRef(null),[u=!1,f]=Me({prop:o,defaultProp:r,onChange:s});return l.jsx(it,{scope:t,triggerRef:a,contentRef:d,contentId:j(),titleId:j(),descriptionId:j(),open:u,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(h=>!h),[f]),modal:c,children:n})};de.displayName=$;var fe="DialogTrigger",pe=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=C(fe,n),s=x(t,r.triggerRef);return l.jsx(N.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":H(r.open),...o,ref:s,onClick:P(e.onClick,r.onOpenToggle)})});pe.displayName=fe;var G="DialogPortal",[at,me]=le(G,{forceMount:void 0}),ve=e=>{const{__scopeDialog:t,forceMount:n,children:o,container:r}=e,s=C(G,t);return l.jsx(at,{scope:t,forceMount:n,children:i.Children.map(o,c=>l.jsx(M,{present:n||s.open,children:l.jsx(ue,{asChild:!0,container:r,children:c})}))})};ve.displayName=G;var F="DialogOverlay",ge=i.forwardRef((e,t)=>{const n=me(F,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,s=C(F,e.__scopeDialog);return s.modal?l.jsx(M,{present:o||s.open,children:l.jsx(ct,{...r,ref:t})}):null});ge.displayName=F;var ct=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=C(F,n);return l.jsx(we,{as:V,allowPinchZoom:!0,shards:[r.contentRef],children:l.jsx(N.div,{"data-state":H(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),T="DialogContent",Ee=i.forwardRef((e,t)=>{const n=me(T,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,s=C(T,e.__scopeDialog);return l.jsx(M,{present:o||s.open,children:s.modal?l.jsx(ut,{...r,ref:t}):l.jsx(lt,{...r,ref:t})})});Ee.displayName=T;var ut=i.forwardRef((e,t)=>{const n=C(T,e.__scopeDialog),o=i.useRef(null),r=x(t,n.contentRef,o);return i.useEffect(()=>{const s=o.current;if(s)return Se(s)},[]),l.jsx(he,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,a=c.button===0&&c.ctrlKey===!0;(c.button===2||a)&&s.preventDefault()}),onFocusOutside:P(e.onFocusOutside,s=>s.preventDefault())})}),lt=i.forwardRef((e,t)=>{const n=C(T,e.__scopeDialog),o=i.useRef(!1),r=i.useRef(!1);return l.jsx(he,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var c,a;(c=e.onCloseAutoFocus)==null||c.call(e,s),s.defaultPrevented||(o.current||(a=n.triggerRef.current)==null||a.focus(),s.preventDefault()),o.current=!1,r.current=!1},onInteractOutside:s=>{var d,u;(d=e.onInteractOutside)==null||d.call(e,s),s.defaultPrevented||(o.current=!0,s.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const c=s.target;((u=n.triggerRef.current)==null?void 0:u.contains(c))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&r.current&&s.preventDefault()}})}),he=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:r,onCloseAutoFocus:s,...c}=e,a=C(T,n),d=i.useRef(null),u=x(t,d);return _e(),l.jsxs(l.Fragment,{children:[l.jsx(ae,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:r,onUnmountAutoFocus:s,children:l.jsx(se,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":H(a.open),...c,ref:u,onDismiss:()=>a.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(dt,{titleId:a.titleId}),l.jsx(pt,{contentRef:d,descriptionId:a.descriptionId})]})]})}),z="DialogTitle",ye=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=C(z,n);return l.jsx(N.h2,{id:r.titleId,...o,ref:t})});ye.displayName=z;var be="DialogDescription",Ce=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=C(be,n);return l.jsx(N.p,{id:r.descriptionId,...o,ref:t})});Ce.displayName=be;var De="DialogClose",Ne=i.forwardRef((e,t)=>{const{__scopeDialog:n,...o}=e,r=C(De,n);return l.jsx(N.button,{type:"button",...o,ref:t,onClick:P(e.onClick,()=>r.onOpenChange(!1))})});Ne.displayName=De;function H(e){return e?"open":"closed"}var Oe="DialogTitleWarning",[bt,Re]=Fe(Oe,{contentName:T,titleName:z,docsSlug:"dialog"}),dt=({titleId:e})=>{const t=Re(Oe),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},ft="DialogDescriptionWarning",pt=({contentRef:e,descriptionId:t})=>{const o=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Re(ft).contentName}}.`;return i.useEffect(()=>{var s;const r=(s=e.current)==null?void 0:s.getAttribute("aria-describedby");t&&r&&(document.getElementById(t)||console.warn(o))},[o,e,t]),null},Ct=de,Dt=pe,Nt=ve,Ot=ge,Rt=Ee,Pt=ye,Tt=Ce,xt=Ne;export{Rt as C,Tt as D,Ot as O,Nt as P,Ct as R,Dt as T,ht as X,xt as a,Pt as b};
