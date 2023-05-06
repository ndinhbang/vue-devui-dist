(function(d,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(d=typeof globalThis!="undefined"?globalThis:d||self,e(d.index={},d.Vue))})(this,function(d,e){"use strict";const P={modelValue:{type:Number,default:0},space:{type:Number},alignCenter:{type:Boolean,default:!1},direction:{type:String,default:"horizontal"},simple:{type:Boolean,default:!1}};function y(a,n,o){let s=a;return n&&(s+=`__${n}`),o&&(s+=`--${o}`),s}function v(a,n=!1){const o=n?`.b-${a}`:`b-${a}`;return{b:()=>y(o),e:t=>t?y(o,t):"",m:t=>t?y(o,"",t):"",em:(t,r)=>t&&r?y(o,t,r):""}}var w="";const D="active-step",I="steps",z="steps-props";var C=e.defineComponent({name:"DSteps",props:P,emits:["update:modelValue"],setup(a,{slots:n}){const{modelValue:o,direction:s,simple:u}=e.toRefs(a),l=v("steps"),c=e.ref(o.value);e.provide(D,c),e.provide(z,a);const t=e.ref([]);e.provide(I,t),e.watch(o,i=>{c.value=i});const r=e.computed(()=>{const i=s.value==="vertical"?" vertical":"",p=u.value?" simple":"";return`${l.b()}${i}${p}`});return()=>{var i;return e.createVNode("div",{class:r.value},[(i=n.default)==null?void 0:i.call(n)])}}});const x={title:{type:String,required:!0},description:{type:String},icon:{type:String},status:{type:String}},E={name:{type:String,default:"",required:!0},size:{type:[Number,String],default:"inherit"},color:{type:String,default:"inherit"},component:{type:Object,default:null},classPrefix:{type:String,default:"icon"},operable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rotate:{type:[Number,String]}},T={name:{type:String,default:"",required:!0},color:{type:String,default:"inherit"},size:{type:[Number,String],default:"inherit"}};var M="",_=e.defineComponent({name:"DSvgIcon",props:T,setup(a){const{name:n,color:o,size:s}=e.toRefs(a),u=v("svg-icon"),l=e.computed(()=>`#icon-${n.value}`),c=e.computed(()=>typeof s.value=="number"?`${s.value}px`:s.value),t={width:c.value,height:c.value};return()=>e.createVNode("svg",{class:u.b(),style:t},[e.createVNode("use",{"xlink:href":l.value,fill:o.value},null)])}});function j(a){return/^((http|https):)?\/\//.test(a)}function A(a,n){const{component:o,name:s,size:u,color:l,classPrefix:c,rotate:t}=e.toRefs(a),r=v("icon"),i=e.computed(()=>typeof u.value=="number"?`${u.value}px`:u.value),p=o.value?e.resolveDynamicComponent(o.value):e.resolveDynamicComponent(_),m=()=>e.createVNode("img",e.mergeProps({src:s.value,alt:s.value.split("/")[s.value.split("/").length-1],class:[(t==null?void 0:t.value)==="infinite"&&r.m("spin")],style:{width:i.value||"",transform:`rotate(${t==null?void 0:t.value}deg)`,verticalAlign:"middle"}},n.attrs),null),S=()=>e.createVNode(p,e.mergeProps({name:s.value,color:l.value,size:i.value,class:[(t==null?void 0:t.value)==="infinite"&&r.m("spin")],style:{transform:`rotate(${t==null?void 0:t.value}deg)`}},n.attrs),null),h=()=>{const N=/^icon-/.test(s.value)?s.value:`${c.value}-${s.value}`;return e.createVNode("i",e.mergeProps({class:[c.value,N,(t==null?void 0:t.value)==="infinite"&&r.m("spin")],style:{fontSize:i.value,color:l.value,transform:`rotate(${t==null?void 0:t.value}deg)`}},n.attrs),null)};return{iconDom:()=>o.value?S():j(s.value)?m():h()}}var g=e.defineComponent({name:"DIcon",props:E,emits:["click"],setup(a,n){const{disabled:o,operable:s}=e.toRefs(a),{iconDom:u}=A(a,n),l=v("icon"),c=e.computed(()=>({[l.e("container")]:!0,[l.m("disabled")]:o.value,[l.m("operable")]:s.value,[l.m("no-slots")]:!Object.keys(n.slots).length})),t=r=>{o.value||n.emit("click",r)};return()=>{var r,i,p,m;return e.createVNode("div",{class:c.value,onClick:t},[(i=(r=n.slots).prefix)==null?void 0:i.call(r),u(),(m=(p=n.slots).suffix)==null?void 0:m.call(p)])}}}),U="";e.defineComponent({name:"DIconGroup",setup(a,n){const o=v("icon-group");return()=>{var s,u;return e.createVNode("div",{class:o.b()},[(u=(s=n.slots).default)==null?void 0:u.call(s)])}}});var G="",V=e.defineComponent({name:"DStep",props:x,setup(a,{slots:n}){const{title:o,description:s,icon:u,status:l}=e.toRefs(a),c=v("step"),t=e.getCurrentInstance(),r=e.inject(D),i=e.inject(I);i.value.push(t);const p=e.inject(z),m=i.value.indexOf(t),S=e.computed(()=>{const f=r.value===m?" active":"",$=r.value>m?" finished":"",O=p.alignCenter?" center":"",F=(l==null?void 0:l.value)?` ${l==null?void 0:l.value}`:"",k=p.simple?` ${c.m("simple")}`:"";return`${c.b()}${f}${$}${O}${F}${k}`}),h=e.computed(()=>{const f={};return p.space?f.width=`${p.space}px`:f.flexBasis=p.alignCenter||p.simple?`${100/i.value.length}%`:`${100/(i.value.length-1)}%`,f}),b=e.computed(()=>{const f=r.value===m,$=r.value>m;return f?"var(--devui-brand)":$?"var(--devui-success)":"var(--devui-placeholder)"}),N={finish:e.createVNode(g,{name:"right-o",color:"var(--devui-success)",size:"24px"},null),success:e.createVNode(g,{name:"right-o",color:"var(--devui-success)",size:"24px"},null),error:e.createVNode(g,{name:"error-o",color:"var(--devui-danger)",size:"24px"},null)},B=()=>{var f;return n.icon?(f=n.icon)==null?void 0:f.call(n,b.value):u.value?e.createVNode(g,{name:u.value,color:b.value,size:"24px"},null):l.value&&N[l.value]?N[l.value]:r.value>i.value.indexOf(t)?e.createVNode(g,{name:"right-o",color:"var(--devui-success)",size:"24px"},null):e.createVNode("span",{class:c.e("dot")},[m+1])};return()=>e.createVNode(e.Fragment,null,[p.simple?e.createVNode("div",{class:S.value,style:h.value},[o.value]):e.createVNode("div",{class:S.value,style:h.value},[e.createVNode("div",{class:c.e("dot-container")},[B(),e.createVNode("div",{class:c.e("line")},null)]),e.createVNode("div",{class:c.e("content")},[e.createVNode("span",{class:c.e("title")},[o.value]),s.value&&e.createVNode("span",{class:c.e("description")},[s.value])])])])}}),R={title:"Steps \u6B65\u9AA4\u6761",category:"\u6570\u636E\u5C55\u793A",status:"100%",install(a){a.component(C.name,C),a.component(V.name,V)}};d.Step=V,d.Steps=C,d.default=R,d.stepProps=x,d.stepsProps=P,Object.defineProperty(d,"__esModule",{value:!0}),d[Symbol.toStringTag]="Module"});
