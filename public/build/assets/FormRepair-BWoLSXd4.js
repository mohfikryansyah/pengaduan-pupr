import{j as e,q as D,r as y,n as l,y as F}from"./app-b4mXVD5R.js";import{u as S,t as L,F as P,a as m,b as g,c as f,d as b,e as v,f as w}from"./index-D0V3v82m.js";import{c as C}from"./utils-CytzSlOG.js";import{P as B,a as V,b as I,g as T,C as E,c as M,d as _,e as G,f as O}from"./popover-C_6QCjLQ.js";import{B as u}from"./button-CLOvu14J.js";import{I as N}from"./input-CoTTzgtV.js";import{F as R}from"./schema-Dpu5_oop.js";import K from"./MyMap-BxgdoyCe.js";import{D as q,a as z,b as A,c as H,d as U,e as J,f as Q,g as W}from"./dialog-DRwp86_T.js";import{C as X}from"./chevrons-up-down-CBZLhHuy.js";import{C as Y}from"./check-DvVWXwJ2.js";import"./index-cDh_9doZ.js";import"./label-CednsVd8.js";import"./index-kBhzfYTe.js";import"./index-BwobEAja.js";import"./component-sl_GCre0.js";import"./index-Dicf7H8G.js";import"./search-CY7MD7zm.js";import"./createLucideIcon-D5Yn-mgR.js";import"./floating-ui.react-dom-BH6ohyj_.js";import"./index-C_RDn0sI.js";import"./leaflet-Deo8y3_M.js";import"./index-BDI4_4gm.js";function ke({complaints:r,items:o}){return e.jsx(e.Fragment,{children:e.jsxs(q,{children:[e.jsx(z,{asChild:!0,children:e.jsx(u,{variant:"outline",children:"Edit Profile"})}),e.jsxs(A,{className:"sm:max-w-[50rem]",onInteractOutside:i=>{i.preventDefault()},children:[e.jsxs(H,{className:"mb-2",children:[e.jsx(U,{children:"Buat Data Perbaikan"}),e.jsx(J,{children:"Deskripsi"})]}),e.jsx("div",{className:"space-y-5 overflow-y-auto h-[70vh] rounded-scrollbar","data-lenis-prevent":!0,children:e.jsx("div",{className:"pr-5 pb-5",children:e.jsx(Z,{items:o,complaints:r})})}),e.jsxs(Q,{children:[e.jsx(W,{asChild:!0,children:e.jsx(u,{type:"button",variant:"secondary",children:"Close"})}),e.jsx(u,{type:"submit",form:"form-repair",children:"Save changes"})]})]})]})})}function Z({className:r,complaints:o,items:i}){D().props;const a=S({resolver:L(R),defaultValues:{item_id:"",complaint_id:"",latitude:"",longitude:"",note:""},mode:"onBlur"});function p(){F.post(route("repair.store"),a.getValues(),{onSuccess:()=>{l.success("Success!"),a.reset()},onError:()=>{l.error("Terjadi Kesalahan!")}})}const c=s=>{a.setValue("latitude",s.lat),a.setValue("longitude",s.lng)},[x,d]=y.useState(null),t=["Belum diproses","Sedang diproses"],n=o.filter(s=>t.includes(s.statuses.status));return console.log(n),e.jsx(P,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(p),encType:"multipart/form-data",className:C("space-y-4",r),id:"form-repair",children:[e.jsx(k,{control:a.control,name:"complaint_id",form:a,label:"Kode Pengaduan",data:n,description:"Silakan pilih barang dari daftar."}),e.jsx(k,{control:a.control,name:"item_id",form:a,label:"Pilih Barang",data:i,description:"Silakan pilih barang dari daftar."}),e.jsxs("div",{className:"space-y-2 w-full",children:[e.jsxs("div",{className:"flex items-center gap-x-1",children:[e.jsx(m,{children:"Pilih Lokasi di Peta"}),e.jsx("span",{className:"text-sm font-medium",children:"atau"}),e.jsx("button",{type:"button",className:"text-sm font-medium text-blue-500 underline",onClick:()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{const{latitude:h,longitude:j}=s.coords;a.setValue("latitude",h),a.setValue("longitude",j),d({lat:h,lng:j}),l.success("Lokasi berhasil diambil!"),console.log(h,j)},s=>{l.error("Tidak dapat mengambil lokasi: "+s.message)}):l.error("Geolocation tidak didukung di browser ini.")},children:"Gunakan Lokasi saat ini"})]}),e.jsx(K,{onCoordinatesChange:c,currentLocation:x})]}),e.jsx(g,{control:a.control,name:"latitude",render:({field:s})=>e.jsxs(f,{children:[e.jsxs(m,{children:["Latitude",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(b,{children:e.jsx(N,{placeholder:"Masukkan Latitude",...s,className:"focus-visible:ring-[#063b3e]"})}),e.jsx(v,{})]})}),e.jsx(g,{control:a.control,name:"longitude",render:({field:s})=>e.jsxs(f,{children:[e.jsxs(m,{children:["Longitude",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(b,{children:e.jsx(N,{placeholder:"Masukkan Longitude",...s,type:"text",className:"focus-visible:ring-[#063b3e]"})}),e.jsx(v,{})]})})]})})}function $({children:r}){return e.jsxs(E,{children:[e.jsx(M,{placeholder:"Cari item...",className:"h-9 focus-visible:ring-0 focus-visible:border-0"}),e.jsxs(_,{className:"min-w-full",children:[e.jsx(G,{children:"No framework found."}),e.jsx(O,{children:r})]})]})}const k=({control:r,name:o,label:i,data:a,form:p,description:c})=>{const[x,d]=y.useState(!1);return e.jsx(g,{control:r,name:o,render:({field:t})=>{var n;return e.jsxs(f,{className:"flex flex-col",children:[e.jsx(m,{children:i}),e.jsxs(B,{open:x,onOpenChange:d,children:[e.jsx(V,{asChild:!0,children:e.jsx(b,{children:e.jsxs(u,{variant:"outline",role:"combobox",className:C("w-full justify-between",!t.value&&"text-muted-foreground"),children:[t.value?(n=a.find(s=>s.id===t.value))==null?void 0:n.name:"Pilih",e.jsx(X,{className:"opacity-50"})]})})}),e.jsx(I,{className:"w-full p-0 popover-content-width-same-as-its-trigger z-[9999]",children:e.jsx($,{children:a.map(s=>e.jsxs(T,{value:s.name,onSelect:()=>{p.setValue(o,s.id),d(!1)},children:[s.name,e.jsx(Y,{className:C("ml-auto",s.id===t.value?"opacity-100":"opacity-0")})]},s.id))})})]}),c&&e.jsx(w,{children:c}),e.jsx(v,{})]})}})};export{ke as default};
