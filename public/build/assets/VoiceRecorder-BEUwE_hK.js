import{r as o,j as e}from"./app-CML9eYjT.js";import{T as j,M as y}from"./toggle-DEKmSs-6.js";import"./createLucideIcon-ihY9_F_1.js";import"./index-DW48STyt.js";import"./index-CPeofPJ3.js";import"./index-Dzv_MV6Q.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";function S({onAudioReady:s}){const[i,d]=o.useState(!1),[c,n]=o.useState(null),[l,m]=o.useState(null),p=async()=>{n(null);const g=await navigator.mediaDevices.getUserMedia({audio:!0}),a=new MediaRecorder(g);m(a),a.start(),d(!0);const u=[];a.ondataavailable=t=>{u.push(t.data)},a.onstop=()=>{const t=new Blob(u,{type:"audio/mp3"});s(t);const r=new FileReader;r.onloadend=()=>{n(r.result)},r.readAsDataURL(t)}},x=()=>{l&&l.stop(),d(!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"md:flex items-center space-x-3 md:space-y-0 space-y-3",children:[e.jsxs(j,{onClick:i?x:p,className:"bg-gray-100 data-[state=on]:bg-red-500 data-[state=on]:text-white",children:[e.jsx(y,{}),i?"Sedang merekam":"Mulai merekam"]}),c&&e.jsx(R,{audioURL:c})]})})}const R=({audioURL:s})=>e.jsx("div",{className:"audio-player-container",children:e.jsx("div",{className:"audio-player-wrapper",children:e.jsxs("audio",{controls:!0,className:"audio-player",children:[e.jsx("source",{src:s,type:"audio/mp3"}),e.jsx("source",{src:s,type:"audio/webm"}),e.jsx("source",{src:s,type:"audio/wav"}),"Your browser does not support the audio element."]})})});export{S as default};
