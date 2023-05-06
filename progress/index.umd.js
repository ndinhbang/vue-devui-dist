(function(i,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(i=typeof globalThis!="undefined"?globalThis:i||self,e(i.index={},i.Vue))})(this,function(i,e){"use strict";function N(t,o=0,r=100){let s=0;return s=Math.min(t,r),s=Math.max(s,o),s}const C={height:{type:String,default:"20px"},percentage:{type:Number,default:0},percentageText:{type:String,default:""},barBgColor:{type:String,default:"#5170ff"},isCircle:{type:Boolean,default:!1},strokeWidth:{type:Number,default:6},showContent:{type:Boolean,default:!0},percentageTextPlacement:{type:String,default:"inside"},percentageTextColor:{type:String,default:""}};function P(t,o,r){let s=t;return o&&(s+=`__${o}`),r&&(s+=`--${r}`),s}function $(t,o=!1){const r=o?`.b-${t}`:`b-${t}`;return{b:()=>P(r),e:a=>a?P(r,a):"",m:a=>a?P(r,"",a):"",em:(a,d)=>a&&d?P(r,a,d):""}}var S="",x=e.defineComponent({name:"DProgress",props:C,setup(t){const{height:o,percentage:r,percentageText:s,percentageTextPlacement:g,percentageTextColor:h,barBgColor:f,isCircle:a,strokeWidth:d,showContent:p}=e.toRefs(t),l=e.ref(0);e.effect(()=>{l.value=N(r.value)});const n=e.reactive({pathString:"",trailPath:null,strokePath:null}),y=()=>{if(!a)return;const c=50-d.value/2,k=-c,m=c*-2;n.pathString=`M 50,50 m 0,${k}
      a ${c},${c} 0 1 1 0,${-m}
      a ${c},${c} 0 1 1 0,${m}`;const u=Math.PI*2*c;n.trailPath={stroke:"var(--devui-dividing-line, #dfe1e6)",strokeDasharray:`${u}px ${u}px`,strokeDashoffset:"0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"},n.strokePath={stroke:f||null,strokeDasharray:`${l.value/100*u}px ${u}px`,strokeDashoffset:"0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}};return y(),e.watch([o,l,s,g,h,f,a,d,p],()=>{y()}),{data:n,normalPercentage:l}},render(){var b;const{height:t,normalPercentage:o,percentageText:r,percentageTextPlacement:s,percentageTextColor:g,barBgColor:h,isCircle:f,strokeWidth:a,showContent:d,data:p,$slots:l}=this,n=$("progress"),y=s==="outside",c=s==="insideBg",k=()=>e.createVNode("span",{style:{lineHeight:t,color:g}},[r]),m=e.createVNode("div",{class:n.e("content")},[e.createVNode("div",{class:n.e("line"),style:{height:t,borderRadius:t}},[e.createVNode("div",{class:[n.e("bar"),s],style:{height:t,borderRadius:t,width:`${o}%`,backgroundColor:h}},[!y&&!c?k():null]),c?k():null]),y&&!!r?k():null]),u=e.createVNode("span",{class:n.e("circle-text"),style:{color:g}},[o,e.createTextVNode("%")]),V=e.createVNode("div",{class:n.e("circle")},[e.createVNode("svg",{class:n.e("circle"),viewBox:"0 0 100 100"},[e.createVNode("path",{"fill-opacity":"0","stroke-width":a,style:p.trailPath,d:p.pathString},null),e.createVNode("path",{d:p.pathString,"stroke-linecap":"round","fill-opacity":"0",stroke:h,"stroke-width":o?a:0,style:p.strokePath},null)]),d&&((b=l.default)==null?void 0:b.call(l)),d&&!l.default&&u]);return e.createVNode("div",{class:n.b()},[f?V:m])}}),T={title:"Progress \u8FDB\u5EA6\u6761",category:"\u6570\u636E\u5C55\u793A",status:"100%",install(t){t.component(x.name,x)}};i.Progress=x,i.default=T,i.progressProps=C,Object.defineProperty(i,"__esModule",{value:!0}),i[Symbol.toStringTag]="Module"});