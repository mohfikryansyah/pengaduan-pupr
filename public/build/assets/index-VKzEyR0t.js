import{c as Pe}from"./utils-CxteQpqs.js";import{r as y,j as _,U as G,b as Oe}from"./app-CDD4Lv-q.js";import{u as ut,S as It,P as gt,b as At,f as Ee}from"./Combination-D2Bk3FxL.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=Pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function Me(t,e=[]){let n=[];function o(s,i){const c=y.createContext(i),l=n.length;n=[...n,i];function a(f){const{scope:m,children:u,...p}=f,h=(m==null?void 0:m[t][l])||c,g=y.useMemo(()=>p,Object.values(p));return _.jsx(h.Provider,{value:g,children:u})}function d(f,m){const u=(m==null?void 0:m[t][l])||c,p=y.useContext(u);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${s}\``)}return a.displayName=s+"Provider",[a,d]}const r=()=>{const s=n.map(i=>y.createContext(i));return function(c){const l=(c==null?void 0:c[t])||s;return y.useMemo(()=>({[`__scope${t}`]:{...c,[t]:l}}),[c,l])}};return r.scopeName=t,[o,De(r,...e)]}function De(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const o=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=o.reduce((c,{useScope:l,scopeName:a})=>{const f=l(s)[`__scope${a}`];return{...c,...f}},{});return y.useMemo(()=>({[`__scope${e.scopeName}`]:i}),[i])}};return n.scopeName=e.scopeName,n}function Xn(t){const e=t+"CollectionProvider",[n,o]=Me(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),i=u=>{const{scope:p,children:h}=u,g=G.useRef(null),x=G.useRef(new Map).current;return _.jsx(r,{scope:p,itemMap:x,collectionRef:g,children:h})};i.displayName=e;const c=t+"CollectionSlot",l=G.forwardRef((u,p)=>{const{scope:h,children:g}=u,x=s(c,h),w=ut(p,x.collectionRef);return _.jsx(It,{ref:w,children:g})});l.displayName=c;const a=t+"CollectionItemSlot",d="data-radix-collection-item",f=G.forwardRef((u,p)=>{const{scope:h,children:g,...x}=u,w=G.useRef(null),b=ut(p,w),v=s(a,h);return G.useEffect(()=>(v.itemMap.set(w,{ref:w,...x}),()=>void v.itemMap.delete(w))),_.jsx(It,{[d]:"",ref:b,children:g})});f.displayName=a;function m(u){const p=s(t+"CollectionConsumer",u);return G.useCallback(()=>{const g=p.collectionRef.current;if(!g)return[];const x=Array.from(g.querySelectorAll(`[${d}]`));return Array.from(p.itemMap.values()).sort((v,A)=>x.indexOf(v.ref.current)-x.indexOf(A.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:i,Slot:l,ItemSlot:f},m,o]}var Te=y.createContext(void 0);function qn(t){const e=y.useContext(Te);return t||e||"ltr"}const $e=["top","right","bottom","left"],U=Math.min,H=Math.max,dt=Math.round,at=Math.floor,z=t=>({x:t,y:t}),Le={left:"right",right:"left",bottom:"top",top:"bottom"},Ne={start:"end",end:"start"};function Ct(t,e,n){return H(t,U(e,n))}function X(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function et(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function Ot(t){return t==="y"?"height":"width"}function Z(t){return["top","bottom"].includes(q(t))?"y":"x"}function Et(t){return Pt(Z(t))}function _e(t,e,n){n===void 0&&(n=!1);const o=et(t),r=Et(t),s=Ot(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=pt(i)),[i,pt(i)]}function ke(t){const e=pt(t);return[Rt(t),e,Rt(e)]}function Rt(t){return t.replace(/start|end/g,e=>Ne[e])}function He(t,e,n){const o=["left","right"],r=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?s:i;default:return[]}}function Fe(t,e,n,o){const r=et(t);let s=He(q(t),n==="start",o);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(Rt)))),s}function pt(t){return t.replace(/left|right|bottom|top/g,e=>Le[e])}function We(t){return{top:0,right:0,bottom:0,left:0,...t}}function Gt(t){return typeof t!="number"?We(t):{top:t,right:t,bottom:t,left:t}}function mt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function zt(t,e,n){let{reference:o,floating:r}=t;const s=Z(e),i=Et(e),c=Ot(i),l=q(e),a=s==="y",d=o.x+o.width/2-r.width/2,f=o.y+o.height/2-r.height/2,m=o[c]/2-r[c]/2;let u;switch(l){case"top":u={x:d,y:o.y-r.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:f};break;case"left":u={x:o.x-r.width,y:f};break;default:u={x:o.x,y:o.y}}switch(et(e)){case"start":u[i]-=m*(n&&a?-1:1);break;case"end":u[i]+=m*(n&&a?-1:1);break}return u}const je=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:i}=n,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=zt(a,o,l),m=o,u={},p=0;for(let h=0;h<c.length;h++){const{name:g,fn:x}=c[h],{x:w,y:b,data:v,reset:A}=await x({x:d,y:f,initialPlacement:o,placement:m,strategy:r,middlewareData:u,rects:a,platform:i,elements:{reference:t,floating:e}});d=w??d,f=b??f,u={...u,[g]:{...u[g],...v}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(a=A.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:d,y:f}=zt(a,m,l)),h=-1)}return{x:d,y:f,placement:m,strategy:r,middlewareData:u}};async function rt(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:m=!1,padding:u=0}=X(e,t),p=Gt(u),g=c[m?f==="floating"?"reference":"floating":f],x=mt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(g)))==null||n?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),w=f==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),v=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},A=mt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:w,offsetParent:b,strategy:l}):w);return{top:(x.top-A.top+p.top)/v.y,bottom:(A.bottom-x.bottom+p.bottom)/v.y,left:(x.left-A.left+p.left)/v.x,right:(A.right-x.right+p.right)/v.x}}const Be=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:s,platform:i,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=X(t,e)||{};if(a==null)return{};const f=Gt(d),m={x:n,y:o},u=Et(r),p=Ot(u),h=await i.getDimensions(a),g=u==="y",x=g?"top":"left",w=g?"bottom":"right",b=g?"clientHeight":"clientWidth",v=s.reference[p]+s.reference[u]-m[u]-s.floating[p],A=m[u]-s.reference[u],R=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a));let P=R?R[b]:0;(!P||!await(i.isElement==null?void 0:i.isElement(R)))&&(P=c.floating[b]||s.floating[p]);const D=v/2-A/2,k=P/2-h[p]/2-1,T=U(f[x],k),L=U(f[w],k),N=T,O=P-h[p]-L,S=P/2-h[p]/2+D,W=Ct(N,S,O),E=!l.arrow&&et(r)!=null&&S!==W&&s.reference[p]/2-(S<N?T:L)-h[p]/2<0,M=E?S<N?S-N:S-O:0;return{[u]:m[u]+M,data:{[u]:W,centerOffset:S-W-M,...E&&{alignmentOffset:M}},reset:E}}}),Ie=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...g}=X(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const x=q(r),w=Z(c),b=q(c)===c,v=await(l.isRTL==null?void 0:l.isRTL(a.floating)),A=m||(b||!h?[pt(c)]:ke(c)),R=p!=="none";!m&&R&&A.push(...Fe(c,h,p,v));const P=[c,...A],D=await rt(e,g),k=[];let T=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&k.push(D[x]),f){const S=_e(r,i,v);k.push(D[S[0]],D[S[1]])}if(T=[...T,{placement:r,overflows:k}],!k.every(S=>S<=0)){var L,N;const S=(((L=s.flip)==null?void 0:L.index)||0)+1,W=P[S];if(W)return{data:{index:S,overflows:T},reset:{placement:W}};let E=(N=T.filter(M=>M.overflows[0]<=0).sort((M,C)=>M.overflows[1]-C.overflows[1])[0])==null?void 0:N.placement;if(!E)switch(u){case"bestFit":{var O;const M=(O=T.filter(C=>{if(R){const $=Z(C.placement);return $===w||$==="y"}return!0}).map(C=>[C.placement,C.overflows.filter($=>$>0).reduce(($,I)=>$+I,0)]).sort((C,$)=>C[1]-$[1])[0])==null?void 0:O[0];M&&(E=M);break}case"initialPlacement":E=c;break}if(r!==E)return{reset:{placement:E}}}return{}}}};function Vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Yt(t){return $e.some(e=>t[e]>=0)}const ze=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=X(t,e);switch(o){case"referenceHidden":{const s=await rt(e,{...r,elementContext:"reference"}),i=Vt(s,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Yt(i)}}}case"escaped":{const s=await rt(e,{...r,altBoundary:!0}),i=Vt(s,n.floating);return{data:{escapedOffsets:i,escaped:Yt(i)}}}default:return{}}}}};async function Ve(t,e){const{placement:n,platform:o,elements:r}=t,s=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=q(n),c=et(n),l=Z(n)==="y",a=["left","top"].includes(i)?-1:1,d=s&&l?-1:1,f=X(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:p}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&typeof p=="number"&&(u=c==="end"?p*-1:p),l?{x:u*d,y:m*a}:{x:m*a,y:u*d}}const Ye=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:s,placement:i,middlewareData:c}=e,l=await Ve(e,t);return i===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:i}}}}},Xe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:i=!1,limiter:c={fn:g=>{let{x,y:w}=g;return{x,y:w}}},...l}=X(t,e),a={x:n,y:o},d=await rt(e,l),f=Z(q(r)),m=Pt(f);let u=a[m],p=a[f];if(s){const g=m==="y"?"top":"left",x=m==="y"?"bottom":"right",w=u+d[g],b=u-d[x];u=Ct(w,u,b)}if(i){const g=f==="y"?"top":"left",x=f==="y"?"bottom":"right",w=p+d[g],b=p-d[x];p=Ct(w,p,b)}const h=c.fn({...e,[m]:u,[f]:p});return{...h,data:{x:h.x-n,y:h.y-o,enabled:{[m]:s,[f]:i}}}}}},qe=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:s,middlewareData:i}=e,{offset:c=0,mainAxis:l=!0,crossAxis:a=!0}=X(t,e),d={x:n,y:o},f=Z(r),m=Pt(f);let u=d[m],p=d[f];const h=X(c,e),g=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(l){const b=m==="y"?"height":"width",v=s.reference[m]-s.floating[b]+g.mainAxis,A=s.reference[m]+s.reference[b]-g.mainAxis;u<v?u=v:u>A&&(u=A)}if(a){var x,w;const b=m==="y"?"width":"height",v=["top","left"].includes(q(r)),A=s.reference[f]-s.floating[b]+(v&&((x=i.offset)==null?void 0:x[f])||0)+(v?0:g.crossAxis),R=s.reference[f]+s.reference[b]+(v?0:((w=i.offset)==null?void 0:w[f])||0)-(v?g.crossAxis:0);p<A?p=A:p>R&&(p=R)}return{[m]:u,[f]:p}}}},Ue=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:s,platform:i,elements:c}=e,{apply:l=()=>{},...a}=X(t,e),d=await rt(e,a),f=q(r),m=et(r),u=Z(r)==="y",{width:p,height:h}=s.floating;let g,x;f==="top"||f==="bottom"?(g=f,x=m===(await(i.isRTL==null?void 0:i.isRTL(c.floating))?"start":"end")?"left":"right"):(x=f,g=m==="end"?"top":"bottom");const w=h-d.top-d.bottom,b=p-d.left-d.right,v=U(h-d[g],w),A=U(p-d[x],b),R=!e.middlewareData.shift;let P=v,D=A;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(D=b),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(P=w),R&&!m){const T=H(d.left,0),L=H(d.right,0),N=H(d.top,0),O=H(d.bottom,0);u?D=p-2*(T!==0||L!==0?T+L:H(d.left,d.right)):P=h-2*(N!==0||O!==0?N+O:H(d.top,d.bottom))}await l({...e,availableWidth:D,availableHeight:P});const k=await i.getDimensions(c.floating);return p!==k.width||h!==k.height?{reset:{rects:!0}}:{}}}};function xt(){return typeof window<"u"}function nt(t){return Jt(t)?(t.nodeName||"").toLowerCase():"#document"}function F(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(Jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Jt(t){return xt()?t instanceof Node||t instanceof F(t).Node:!1}function j(t){return xt()?t instanceof Element||t instanceof F(t).Element:!1}function V(t){return xt()?t instanceof HTMLElement||t instanceof F(t).HTMLElement:!1}function Xt(t){return!xt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof F(t).ShadowRoot}function st(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function Ze(t){return["table","td","th"].includes(nt(t))}function wt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Mt(t){const e=Dt(),n=j(t)?B(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ke(t){let e=K(t);for(;V(e)&&!tt(e);){if(Mt(e))return e;if(wt(e))return null;e=K(e)}return null}function Dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(nt(t))}function B(t){return F(t).getComputedStyle(t)}function yt(t){return j(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Xt(t)&&t.host||Y(t);return Xt(e)?e.host:e}function Qt(t){const e=K(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&st(e)?e:Qt(e)}function it(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Qt(t),s=r===((o=t.ownerDocument)==null?void 0:o.body),i=F(r);if(s){const c=St(i);return e.concat(i,i.visualViewport||[],st(r)?r:[],c&&n?it(c):[])}return e.concat(r,it(r,[],n))}function St(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function te(t){const e=B(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=V(t),s=r?t.offsetWidth:n,i=r?t.offsetHeight:o,c=dt(n)!==s||dt(o)!==i;return c&&(n=s,o=i),{width:n,height:o,$:c}}function Tt(t){return j(t)?t:t.contextElement}function Q(t){const e=Tt(t);if(!V(e))return z(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:s}=te(e);let i=(s?dt(n.width):n.width)/o,c=(s?dt(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const Ge=z(0);function ee(t){const e=F(t);return!Dt()||!e.visualViewport?Ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Je(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==F(t)?!1:e}function J(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Tt(t);let i=z(1);e&&(o?j(o)&&(i=Q(o)):i=Q(t));const c=Je(s,n,o)?ee(s):z(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,d=r.width/i.x,f=r.height/i.y;if(s){const m=F(s),u=o&&j(o)?F(o):o;let p=m,h=St(p);for(;h&&o&&u!==p;){const g=Q(h),x=h.getBoundingClientRect(),w=B(h),b=x.left+(h.clientLeft+parseFloat(w.paddingLeft))*g.x,v=x.top+(h.clientTop+parseFloat(w.paddingTop))*g.y;l*=g.x,a*=g.y,d*=g.x,f*=g.y,l+=b,a+=v,p=F(h),h=St(p)}}return mt({width:d,height:f,x:l,y:a})}function $t(t,e){const n=yt(t).scrollLeft;return e?e.left+n:J(Y(t)).left+n}function ne(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(n?0:$t(t,o)),s=o.top+e.scrollTop;return{x:r,y:s}}function Qe(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const s=r==="fixed",i=Y(o),c=e?wt(e.floating):!1;if(o===i||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=z(1);const d=z(0),f=V(o);if((f||!f&&!s)&&((nt(o)!=="body"||st(i))&&(l=yt(o)),V(o))){const u=J(o);a=Q(o),d.x=u.x+o.clientLeft,d.y=u.y+o.clientTop}const m=i&&!f&&!s?ne(i,l,!0):z(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x+m.x,y:n.y*a.y-l.scrollTop*a.y+d.y+m.y}}function tn(t){return Array.from(t.getClientRects())}function en(t){const e=Y(t),n=yt(t),o=t.ownerDocument.body,r=H(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=H(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+$t(t);const c=-n.scrollTop;return B(o).direction==="rtl"&&(i+=H(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:i,y:c}}function nn(t,e){const n=F(t),o=Y(t),r=n.visualViewport;let s=o.clientWidth,i=o.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const a=Dt();(!a||a&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:s,height:i,x:c,y:l}}function on(t,e){const n=J(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,s=V(t)?Q(t):z(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=o*s.y;return{width:i,height:c,x:l,y:a}}function qt(t,e,n){let o;if(e==="viewport")o=nn(t,n);else if(e==="document")o=en(Y(t));else if(j(e))o=on(e,n);else{const r=ee(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return mt(o)}function oe(t,e){const n=K(t);return n===e||!j(n)||tt(n)?!1:B(n).position==="fixed"||oe(n,e)}function rn(t,e){const n=e.get(t);if(n)return n;let o=it(t,[],!1).filter(c=>j(c)&&nt(c)!=="body"),r=null;const s=B(t).position==="fixed";let i=s?K(t):t;for(;j(i)&&!tt(i);){const c=B(i),l=Mt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||st(i)&&!l&&oe(t,i))?o=o.filter(d=>d!==i):r=c,i=K(i)}return e.set(t,o),o}function sn(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?wt(e)?[]:rn(e,this._c):[].concat(n),o],c=i[0],l=i.reduce((a,d)=>{const f=qt(e,d,r);return a.top=H(f.top,a.top),a.right=U(f.right,a.right),a.bottom=U(f.bottom,a.bottom),a.left=H(f.left,a.left),a},qt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function cn(t){const{width:e,height:n}=te(t);return{width:e,height:n}}function ln(t,e,n){const o=V(e),r=Y(e),s=n==="fixed",i=J(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=z(0);if(o||!o&&!s)if((nt(e)!=="body"||st(r))&&(c=yt(e)),o){const m=J(e,!0,s,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&(l.x=$t(r));const a=r&&!o&&!s?ne(r,c):z(0),d=i.left+c.scrollLeft-l.x-a.x,f=i.top+c.scrollTop-l.y-a.y;return{x:d,y:f,width:i.width,height:i.height}}function vt(t){return B(t).position==="static"}function Ut(t,e){if(!V(t)||B(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Y(t)===n&&(n=n.ownerDocument.body),n}function re(t,e){const n=F(t);if(wt(t))return n;if(!V(t)){let r=K(t);for(;r&&!tt(r);){if(j(r)&&!vt(r))return r;r=K(r)}return n}let o=Ut(t,e);for(;o&&Ze(o)&&vt(o);)o=Ut(o,e);return o&&tt(o)&&vt(o)&&!Mt(o)?n:o||Ke(t)||n}const an=async function(t){const e=this.getOffsetParent||re,n=this.getDimensions,o=await n(t.floating);return{reference:ln(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function fn(t){return B(t).direction==="rtl"}const un={convertOffsetParentRelativeRectToViewportRelativeRect:Qe,getDocumentElement:Y,getClippingRect:sn,getOffsetParent:re,getElementRects:an,getClientRects:tn,getDimensions:cn,getScale:Q,isElement:j,isRTL:fn};function dn(t,e){let n=null,o;const r=Y(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:d,width:f,height:m}=t.getBoundingClientRect();if(c||e(),!f||!m)return;const u=at(d),p=at(r.clientWidth-(a+f)),h=at(r.clientHeight-(d+m)),g=at(a),w={rootMargin:-u+"px "+-p+"px "+-h+"px "+-g+"px",threshold:H(0,U(1,l))||1};let b=!0;function v(A){const R=A[0].intersectionRatio;if(R!==l){if(!b)return i();R?i(!1,R):o=setTimeout(()=>{i(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(v,{...w,root:r.ownerDocument})}catch{n=new IntersectionObserver(v,w)}n.observe(t)}return i(!0),s}function pn(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Tt(t),d=r||s?[...a?it(a):[],...it(e)]:[];d.forEach(x=>{r&&x.addEventListener("scroll",n,{passive:!0}),s&&x.addEventListener("resize",n)});const f=a&&c?dn(a,n):null;let m=-1,u=null;i&&(u=new ResizeObserver(x=>{let[w]=x;w&&w.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=u)==null||b.observe(e)})),n()}),a&&!l&&u.observe(a),u.observe(e));let p,h=l?J(t):null;l&&g();function g(){const x=J(t);h&&(x.x!==h.x||x.y!==h.y||x.width!==h.width||x.height!==h.height)&&n(),h=x,p=requestAnimationFrame(g)}return n(),()=>{var x;d.forEach(w=>{r&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),f==null||f(),(x=u)==null||x.disconnect(),u=null,l&&cancelAnimationFrame(p)}}const mn=Ye,hn=Xe,gn=Ie,xn=Ue,wn=ze,Zt=Be,yn=qe,vn=(t,e,n)=>{const o=new Map,r={platform:un,...n},s={...r.platform,_c:o};return je(t,e,{...r,platform:s})};var ft=typeof document<"u"?y.useLayoutEffect:y.useEffect;function ht(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!ht(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;o--!==0;){const s=r[o];if(!(s==="_owner"&&t.$$typeof)&&!ht(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function ie(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Kt(t,e){const n=ie(t);return Math.round(e*n)/n}function bt(t){const e=y.useRef(t);return ft(()=>{e.current=t}),e}function bn(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:s,floating:i}={},transform:c=!0,whileElementsMounted:l,open:a}=t,[d,f]=y.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,u]=y.useState(o);ht(m,o)||u(o);const[p,h]=y.useState(null),[g,x]=y.useState(null),w=y.useCallback(C=>{C!==R.current&&(R.current=C,h(C))},[]),b=y.useCallback(C=>{C!==P.current&&(P.current=C,x(C))},[]),v=s||p,A=i||g,R=y.useRef(null),P=y.useRef(null),D=y.useRef(d),k=l!=null,T=bt(l),L=bt(r),N=bt(a),O=y.useCallback(()=>{if(!R.current||!P.current)return;const C={placement:e,strategy:n,middleware:m};L.current&&(C.platform=L.current),vn(R.current,P.current,C).then($=>{const I={...$,isPositioned:N.current!==!1};S.current&&!ht(D.current,I)&&(D.current=I,Oe.flushSync(()=>{f(I)}))})},[m,e,n,L,N]);ft(()=>{a===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,f(C=>({...C,isPositioned:!1})))},[a]);const S=y.useRef(!1);ft(()=>(S.current=!0,()=>{S.current=!1}),[]),ft(()=>{if(v&&(R.current=v),A&&(P.current=A),v&&A){if(T.current)return T.current(v,A,O);O()}},[v,A,O,T,k]);const W=y.useMemo(()=>({reference:R,floating:P,setReference:w,setFloating:b}),[w,b]),E=y.useMemo(()=>({reference:v,floating:A}),[v,A]),M=y.useMemo(()=>{const C={position:n,left:0,top:0};if(!E.floating)return C;const $=Kt(E.floating,d.x),I=Kt(E.floating,d.y);return c?{...C,transform:"translate("+$+"px, "+I+"px)",...ie(E.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:$,top:I}},[n,c,E.floating,d.x,d.y]);return y.useMemo(()=>({...d,update:O,refs:W,elements:E,floatingStyles:M}),[d,O,W,E,M])}const An=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:r}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Zt({element:o.current,padding:r}).fn(n):{}:o?Zt({element:o,padding:r}).fn(n):{}}}},Cn=(t,e)=>({...mn(t),options:[t,e]}),Rn=(t,e)=>({...hn(t),options:[t,e]}),Sn=(t,e)=>({...yn(t),options:[t,e]}),Pn=(t,e)=>({...gn(t),options:[t,e]}),On=(t,e)=>({...xn(t),options:[t,e]}),En=(t,e)=>({...wn(t),options:[t,e]}),Mn=(t,e)=>({...An(t),options:[t,e]});var Dn="Arrow",se=y.forwardRef((t,e)=>{const{children:n,width:o=10,height:r=5,...s}=t;return _.jsx(gt.svg,{...s,ref:e,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:_.jsx("polygon",{points:"0,0 30,0 15,10"})})});se.displayName=Dn;var Tn=se;function $n(t,e=[]){let n=[];function o(s,i){const c=y.createContext(i),l=n.length;n=[...n,i];function a(f){const{scope:m,children:u,...p}=f,h=(m==null?void 0:m[t][l])||c,g=y.useMemo(()=>p,Object.values(p));return _.jsx(h.Provider,{value:g,children:u})}function d(f,m){const u=(m==null?void 0:m[t][l])||c,p=y.useContext(u);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${f}\` must be used within \`${s}\``)}return a.displayName=s+"Provider",[a,d]}const r=()=>{const s=n.map(i=>y.createContext(i));return function(c){const l=(c==null?void 0:c[t])||s;return y.useMemo(()=>({[`__scope${t}`]:{...c,[t]:l}}),[c,l])}};return r.scopeName=t,[o,Ln(r,...e)]}function Ln(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const o=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=o.reduce((c,{useScope:l,scopeName:a})=>{const f=l(s)[`__scope${a}`];return{...c,...f}},{});return y.useMemo(()=>({[`__scope${e.scopeName}`]:i}),[i])}};return n.scopeName=e.scopeName,n}function Nn(t){const[e,n]=y.useState(void 0);return At(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let i,c;if("borderBoxSize"in s){const l=s.borderBoxSize,a=Array.isArray(l)?l[0]:l;i=a.inlineSize,c=a.blockSize}else i=t.offsetWidth,c=t.offsetHeight;n({width:i,height:c})});return o.observe(t,{box:"border-box"}),()=>o.unobserve(t)}else n(void 0)},[t]),e}var Lt="Popper",[ce,Un]=$n(Lt),[_n,le]=ce(Lt),ae=t=>{const{__scopePopper:e,children:n}=t,[o,r]=y.useState(null);return _.jsx(_n,{scope:e,anchor:o,onAnchorChange:r,children:n})};ae.displayName=Lt;var fe="PopperAnchor",ue=y.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:o,...r}=t,s=le(fe,n),i=y.useRef(null),c=ut(e,i);return y.useEffect(()=>{s.onAnchorChange((o==null?void 0:o.current)||i.current)}),o?null:_.jsx(gt.div,{...r,ref:c})});ue.displayName=fe;var Nt="PopperContent",[kn,Hn]=ce(Nt),de=y.forwardRef((t,e)=>{var _t,kt,Ht,Ft,Wt,jt;const{__scopePopper:n,side:o="bottom",sideOffset:r=0,align:s="center",alignOffset:i=0,arrowPadding:c=0,avoidCollisions:l=!0,collisionBoundary:a=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:m=!1,updatePositionStrategy:u="optimized",onPlaced:p,...h}=t,g=le(Nt,n),[x,w]=y.useState(null),b=ut(e,ot=>w(ot)),[v,A]=y.useState(null),R=Nn(v),P=(R==null?void 0:R.width)??0,D=(R==null?void 0:R.height)??0,k=o+(s!=="center"?"-"+s:""),T=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},L=Array.isArray(a)?a:[a],N=L.length>0,O={padding:T,boundary:L.filter(Wn),altBoundary:N},{refs:S,floatingStyles:W,placement:E,isPositioned:M,middlewareData:C}=bn({strategy:"fixed",placement:k,whileElementsMounted:(...ot)=>pn(...ot,{animationFrame:u==="always"}),elements:{reference:g.anchor},middleware:[Cn({mainAxis:r+D,alignmentAxis:i}),l&&Rn({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?Sn():void 0,...O}),l&&Pn({...O}),On({...O,apply:({elements:ot,rects:Bt,availableWidth:Ae,availableHeight:Ce})=>{const{width:Re,height:Se}=Bt.reference,lt=ot.floating.style;lt.setProperty("--radix-popper-available-width",`${Ae}px`),lt.setProperty("--radix-popper-available-height",`${Ce}px`),lt.setProperty("--radix-popper-anchor-width",`${Re}px`),lt.setProperty("--radix-popper-anchor-height",`${Se}px`)}}),v&&Mn({element:v,padding:c}),jn({arrowWidth:P,arrowHeight:D}),m&&En({strategy:"referenceHidden",...O})]}),[$,I]=he(E),ct=Ee(p);At(()=>{M&&(ct==null||ct())},[M,ct]);const xe=(_t=C.arrow)==null?void 0:_t.x,we=(kt=C.arrow)==null?void 0:kt.y,ye=((Ht=C.arrow)==null?void 0:Ht.centerOffset)!==0,[ve,be]=y.useState();return At(()=>{x&&be(window.getComputedStyle(x).zIndex)},[x]),_.jsx("div",{ref:S.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:M?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ve,"--radix-popper-transform-origin":[(Ft=C.transformOrigin)==null?void 0:Ft.x,(Wt=C.transformOrigin)==null?void 0:Wt.y].join(" "),...((jt=C.hide)==null?void 0:jt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:_.jsx(kn,{scope:n,placedSide:$,onArrowChange:A,arrowX:xe,arrowY:we,shouldHideArrow:ye,children:_.jsx(gt.div,{"data-side":$,"data-align":I,...h,ref:b,style:{...h.style,animation:M?void 0:"none"}})})})});de.displayName=Nt;var pe="PopperArrow",Fn={top:"bottom",right:"left",bottom:"top",left:"right"},me=y.forwardRef(function(e,n){const{__scopePopper:o,...r}=e,s=Hn(pe,o),i=Fn[s.placedSide];return _.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:_.jsx(Tn,{...r,ref:n,style:{...r.style,display:"block"}})})});me.displayName=pe;function Wn(t){return t!==null}var jn=t=>({name:"transformOrigin",options:t,fn(e){var g,x,w;const{placement:n,rects:o,middlewareData:r}=e,i=((g=r.arrow)==null?void 0:g.centerOffset)!==0,c=i?0:t.arrowWidth,l=i?0:t.arrowHeight,[a,d]=he(n),f={start:"0%",center:"50%",end:"100%"}[d],m=(((x=r.arrow)==null?void 0:x.x)??0)+c/2,u=(((w=r.arrow)==null?void 0:w.y)??0)+l/2;let p="",h="";return a==="bottom"?(p=i?f:`${m}px`,h=`${-l}px`):a==="top"?(p=i?f:`${m}px`,h=`${o.floating.height+l}px`):a==="right"?(p=`${-l}px`,h=i?f:`${u}px`):a==="left"&&(p=`${o.floating.width+l}px`,h=i?f:`${u}px`),{data:{x:p,y:h}}}});function he(t){const[e,n="center"]=t.split("-");return[e,n]}var Zn=ae,Kn=ue,Gn=de,Jn=me,Bn="VisuallyHidden",ge=y.forwardRef((t,e)=>_.jsx(gt.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));ge.displayName=Bn;var Qn=ge;export{Kn as A,Gn as C,Zn as R,ge as V,Un as a,Jn as b,Xn as c,Yn as d,Qn as e,qn as u};