import{r as o,j as e}from"./app-S4qwSaQs.js";const w=()=>{const[a,c]=o.useState([]),i=o.useRef(null),s=()=>{const t=i.current;if(!t)return;const r=t.getBoundingClientRect(),d=Array.from(t.querySelectorAll(".icon")).map(l=>{const n=l.getBoundingClientRect();return{id:l.id,x:n.left-r.left+n.width/2,y:n.top-r.top+n.height/2}});c(d)};return o.useEffect(()=>(s(),window.addEventListener("resize",s),window.addEventListener("scroll",s),()=>{window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}),[]),e.jsxs("div",{ref:i,className:"relative w-full h-[1000px] bg-gray-100 overflow-auto",children:[e.jsx("div",{id:"icon1",className:"icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center",style:{top:50,left:100},children:"🏦"}),e.jsx("div",{id:"icon2",className:"icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center",style:{top:200,left:300},children:"📈"}),e.jsx("div",{id:"icon3",className:"icon absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center",style:{top:150,left:500},children:"💳"}),e.jsx("svg",{className:"absolute w-full h-full pointer-events-none",children:e.jsx("polyline",{points:a.map(t=>`${t.x},${t.y}`).join(" "),stroke:"#0070f3",strokeWidth:"2",fill:"none",strokeDasharray:"300",strokeDashoffset:"300",className:"line-animation"})}),e.jsx("style",{children:`
      .line-animation {
        animation: draw 2s ease-in-out forwards;
      }

      @keyframes draw {
        to {
          stroke-dashoffset: 0;
        }
      }
    `})]})};export{w as default};
