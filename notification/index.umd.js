var K=Object.defineProperty,H=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var L=(c,e,d)=>e in c?K(c,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[e]=d,C=(c,e)=>{for(var d in e||(e={}))J.call(e,d)&&L(c,d,e[d]);if(k)for(var d of k(e))Q.call(e,d)&&L(c,d,e[d]);return c},x=(c,e)=>H(c,W(e));(function(c,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis!="undefined"?globalThis:c||self,e(c.index={},c.Vue))})(this,function(c,e){"use strict";const d={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},type:{type:String,default:"normal"},duration:{type:Number,default:3e3},onClose:{type:Function}},I={name:{type:String,default:"",required:!0},size:{type:[Number,String],default:"inherit"},color:{type:String,default:"inherit"},component:{type:Object,default:null},classPrefix:{type:String,default:"icon"},operable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rotate:{type:[Number,String]}},S={name:{type:String,default:"",required:!0},color:{type:String,default:"inherit"},size:{type:[Number,String],default:"inherit"}};function N(n,t,o){let i=n;return t&&(i+=`__${t}`),o&&(i+=`--${o}`),i}function p(n,t=!1){const o=t?`.b-${n}`:`b-${n}`;return{b:()=>N(o),e:l=>l?N(o,l):"",m:l=>l?N(o,"",l):"",em:(l,a)=>l&&a?N(o,l,a):""}}var ee="",D=e.defineComponent({name:"DSvgIcon",props:S,setup(n){const{name:t,color:o,size:i}=e.toRefs(n),s=p("svg-icon"),r=e.computed(()=>`#icon-${t.value}`),u=e.computed(()=>typeof i.value=="number"?`${i.value}px`:i.value),l={width:u.value,height:u.value};return()=>e.createVNode("svg",{class:s.b(),style:l},[e.createVNode("use",{"xlink:href":r.value,fill:o.value},null)])}});function P(n){return/^((http|https):)?\/\//.test(n)}function $(n,t){const{component:o,name:i,size:s,color:r,classPrefix:u,rotate:l}=e.toRefs(n),a=p("icon"),f=e.computed(()=>typeof s.value=="number"?`${s.value}px`:s.value),g=o.value?e.resolveDynamicComponent(o.value):e.resolveDynamicComponent(D),m=()=>e.createVNode("img",e.mergeProps({src:i.value,alt:i.value.split("/")[i.value.split("/").length-1],class:[(l==null?void 0:l.value)==="infinite"&&a.m("spin")],style:{width:f.value||"",transform:`rotate(${l==null?void 0:l.value}deg)`,verticalAlign:"middle"}},t.attrs),null),v=()=>e.createVNode(g,e.mergeProps({name:i.value,color:r.value,size:f.value,class:[(l==null?void 0:l.value)==="infinite"&&a.m("spin")],style:{transform:`rotate(${l==null?void 0:l.value}deg)`}},t.attrs),null),O=()=>{const G=/^icon-/.test(i.value)?i.value:`${u.value}-${i.value}`;return e.createVNode("i",e.mergeProps({class:[u.value,G,(l==null?void 0:l.value)==="infinite"&&a.m("spin")],style:{fontSize:f.value,color:r.value,transform:`rotate(${l==null?void 0:l.value}deg)`}},t.attrs),null)};return{iconDom:()=>o.value?v():P(i.value)?m():O()}}var _=e.defineComponent({name:"DIcon",props:I,emits:["click"],setup(n,t){const{disabled:o,operable:i}=e.toRefs(n),{iconDom:s}=$(n,t),r=p("icon"),u=e.computed(()=>({[r.e("container")]:!0,[r.m("disabled")]:o.value,[r.m("operable")]:i.value,[r.m("no-slots")]:!Object.keys(t.slots).length})),l=a=>{o.value||t.emit("click",a)};return()=>{var a,f,g,m;return e.createVNode("div",{class:u.value,onClick:l},[(f=(a=t.slots).prefix)==null?void 0:f.call(a),s(),(m=(g=t.slots).suffix)==null?void 0:m.call(g)])}}}),te="";e.defineComponent({name:"DIconGroup",setup(n,t){const o=p("icon-group");return()=>{var i,s;return e.createVNode("div",{class:o.b()},[(s=(i=t.slots).default)==null?void 0:s.call(i)])}}});var M=e.defineComponent({emits:["click"],setup(n,{emit:t}){const o=p("notification");return()=>e.createVNode("div",{class:o.e("icon-close"),onClick:i=>t("click",i)},[e.createVNode(_,{name:"close",size:"14px"},null)])}});const h=p("notification"),V={"xmlns:xlink":"http://www.w3.org/1999/xlink"},y={"xlink:href":"#path-s"};function T(){return e.createVNode("svg",e.mergeProps({width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},V),[e.createVNode("defs",null,[e.createVNode("polygon",{id:"path-s",points:"6.53553391 9.77817459 12.1923882 4.12132034 13.6066017 5.53553391            6.53553391 12.6066017 3 9.07106781 4.41421356 7.65685425 6.53553391 9.77817459"},null)]),e.createVNode("g",{id:"correct",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("mask",{id:"mask-2",fill:"white"},[e.createVNode("use",y,null)]),e.createVNode("use",e.mergeProps({id:"Mask",class:h.e("image-success-path")},y),null)])])}function E(){return e.createVNode("svg",e.mergeProps({width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},V),[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("path",{class:h.e("warning-outer"),d:"M8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117            15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,           15 14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873            0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229 C7.32086049,           0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589 C8.70423071,           0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 Z"},null),e.createVNode("path",{class:h.e("warning-inner"),"stroke-width":"0.3","fill-rule":"nonzero",d:"M8.87894737,13 L7.08947368,13 L7.08947368,11.2105263 L8.87894737,11.2105263 L8.87894737,13 Z M8.62102372,9.86842105            L7.32800539,9.86842105 L7,4.5 L8.96842105,4.5 L8.62102372,9.86842105 Z"},null)])])}function R(){return e.createVNode("svg",e.mergeProps({width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},V),[e.createVNode("g",{id:"info",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("path",{class:h.e("image-info-path"),d:"M7,13 L7,6 L9,6 L9,13 L7,13 Z M7,5 L7,3 L9,3 L9,5 L7,5 Z",id:"info"},null)])])}function z(){return e.createVNode("svg",e.mergeProps({width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},V),[e.createVNode("defs",null,[e.createVNode("polygon",{id:"path-e",points:"8.07106781 6.65685425 10.8994949 3.82842712 12.3137085 5.24264069 9.48528137 8.07106781 12.3137085            10.8994949 10.8994949 12.3137085 8.07106781 9.48528137 5.24264069 12.3137085 3.82842712 10.8994949 6.65685425            8.07106781 3.82842712 5.24264069 5.24264069 3.82842712"},null)]),e.createVNode("g",{id:"error",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("mask",{id:"mask-2",fill:"white"},[e.createVNode("use",y,null)]),e.createVNode("use",e.mergeProps({id:"Mask",class:h.e("image-error-path")},y),null)])])}var B=e.defineComponent({props:{type:{type:String,default:"normal"}},setup(n){const{type:t}=e.toRefs(n),o=p("notification"),i=e.computed(()=>({[o.e("image")]:!0,[o.em("image",t.value)]:!0}));return()=>e.createVNode("span",{class:i.value},[t.value&&t.value!=="normal"&&(t.value==="success"&&e.createVNode(T,null,null)||t.value==="info"&&e.createVNode(R,null,null)||t.value==="warning"&&e.createVNode(E,null,null)||t.value==="error"&&e.createVNode(z,null,null))])}});function j(n){return{classes:e.computed(()=>({"devui-notification-item-container":!0,[`devui-notification-message-${n.type}`]:!0}))}}function A(n,t){let o=null,i;const s=()=>{var a;o&&clearTimeout(o),o=null,(a=n.onClose)==null||a.call(n),t("update:modelValue",!1)},r=()=>{o&&n.duration&&(clearTimeout(o),o=null)},u=()=>{if(n.modelValue&&n.duration){const a=n.duration-(Date.now()-i);o=setTimeout(s,a)}},l=()=>{t("destroy")};return e.watch(()=>n.modelValue,a=>{a&&(i=Date.now(),n.duration&&(o=setTimeout(s,n.duration)))}),{interrupt:r,removeReset:u,close:s,handleDestroy:l}}var ne="",w=e.defineComponent({name:"DNotification",props:d,emits:["update:modelValue","destroy"],setup(n,{emit:t,slots:o}){const{modelValue:i,title:s,type:r}=e.toRefs(n),{classes:u}=j(n),{interrupt:l,removeReset:a,close:f,handleDestroy:g}=A(n,t),m=p("notification");return()=>e.createVNode(e.Transition,{name:"notification-fade",onAfterLeave:g},{default:()=>{var v;return[i.value&&e.createVNode("div",{class:m.b(),onClick:e.withModifiers(()=>({}),["stop"]),onPointerup:e.withModifiers(()=>({}),["stop"])},[e.createVNode("div",{class:u.value,onMouseenter:l,onMouseleave:a},[e.createVNode("div",{class:m.e("item")},[e.createVNode(M,{onClick:f},null),s.value&&e.createVNode(B,{type:r.value},null),e.createVNode("div",{class:m.e("message")},[e.createVNode("span",{class:m.e("title")},[s.value]),e.createVNode("span",{class:m.e("content")},[(v=o.default)==null?void 0:v.call(o)])])])])])]}})}});function F(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!e.isVNode(n)}const Z={modelValue:!1,duration:3e3,type:"normal"};function U(n,t){const o=document.createElement("div");o.classList.add("notification__warpper");const i=document.body.lastElementChild;let s=50;if(i==null?void 0:i.classList.contains("notification__warpper")){const l=i.lastElementChild.getBoundingClientRect(),a=l.height,f=l.top;s=a+f}const r=e.createApp({setup(){return e.onUnmounted(()=>{document.body.removeChild(o)}),()=>e.createVNode(w,e.mergeProps(n,{onDestroy:r.unmount,style:[`top: ${s}px`]}),F(t)?t:{default:()=>[t]})}});return document.body.appendChild(o),r.mount(o),r}function X(n,t){n.modelValue=!1,t==null||t()}class b{static open(t){const o=t.onClose||null,i=t.content;delete t.content;const s=e.reactive(x(C(C({},Z),t),{onClose:()=>{X(s,o)}}));U(s,i),s.modelValue=!0}}var q={title:"Notification \u5168\u5C40\u901A\u77E5",category:"\u53CD\u9988",status:"100%",install(n){n.component(w.name,w),n.config.globalProperties.$notificationService=b}};c.Notification=w,c.NotificationService=b,c.default=q,c.notificationProps=d,Object.defineProperty(c,"__esModule",{value:!0}),c[Symbol.toStringTag]="Module"});