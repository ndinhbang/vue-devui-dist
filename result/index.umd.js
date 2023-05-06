(function(u,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(u=typeof globalThis!="undefined"?globalThis:u||self,e(u.index={},u.Vue))})(this,function(u,e){"use strict";const y={icon:{type:String,default:"info"},title:{type:String,default:""},desc:{type:String,default:""}},b={name:{type:String,default:"",required:!0},size:{type:[Number,String],default:"inherit"},color:{type:String,default:"inherit"},component:{type:Object,default:null},classPrefix:{type:String,default:"icon"},operable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rotate:{type:[Number,String]}},h={name:{type:String,default:"",required:!0},color:{type:String,default:"inherit"},size:{type:[Number,String],default:"inherit"}};function f(o,s,l){let n=o;return s&&(n+=`__${s}`),l&&(n+=`--${l}`),n}function v(o,s=!1){const l=s?`.b-${o}`:`b-${o}`;return{b:()=>f(l),e:t=>t?f(l,t):"",m:t=>t?f(l,"",t):"",em:(t,c)=>t&&c?f(l,t,c):""}}var z="",N=e.defineComponent({name:"DSvgIcon",props:h,setup(o){const{name:s,color:l,size:n}=e.toRefs(o),r=v("svg-icon"),i=e.computed(()=>`#icon-${s.value}`),a=e.computed(()=>typeof n.value=="number"?`${n.value}px`:n.value),t={width:a.value,height:a.value};return()=>e.createVNode("svg",{class:r.b(),style:t},[e.createVNode("use",{"xlink:href":i.value,fill:l.value},null)])}});function S(o){return/^((http|https):)?\/\//.test(o)}function D(o,s){const{component:l,name:n,size:r,color:i,classPrefix:a,rotate:t}=e.toRefs(o),c=v("icon"),d=e.computed(()=>typeof r.value=="number"?`${r.value}px`:r.value),p=l.value?e.resolveDynamicComponent(l.value):e.resolveDynamicComponent(N),m=()=>e.createVNode("img",e.mergeProps({src:n.value,alt:n.value.split("/")[n.value.split("/").length-1],class:[(t==null?void 0:t.value)==="infinite"&&c.m("spin")],style:{width:d.value||"",transform:`rotate(${t==null?void 0:t.value}deg)`,verticalAlign:"middle"}},s.attrs),null),$=()=>e.createVNode(p,e.mergeProps({name:n.value,color:i.value,size:d.value,class:[(t==null?void 0:t.value)==="infinite"&&c.m("spin")],style:{transform:`rotate(${t==null?void 0:t.value}deg)`}},s.attrs),null),C=()=>{const P=/^icon-/.test(n.value)?n.value:`${a.value}-${n.value}`;return e.createVNode("i",e.mergeProps({class:[a.value,P,(t==null?void 0:t.value)==="infinite"&&c.m("spin")],style:{fontSize:d.value,color:i.value,transform:`rotate(${t==null?void 0:t.value}deg)`}},s.attrs),null)};return{iconDom:()=>l.value?$():S(n.value)?m():C()}}var _=e.defineComponent({name:"DIcon",props:b,emits:["click"],setup(o,s){const{disabled:l,operable:n}=e.toRefs(o),{iconDom:r}=D(o,s),i=v("icon"),a=e.computed(()=>({[i.e("container")]:!0,[i.m("disabled")]:l.value,[i.m("operable")]:n.value,[i.m("no-slots")]:!Object.keys(s.slots).length})),t=c=>{l.value||s.emit("click",c)};return()=>{var c,d,p,m;return e.createVNode("div",{class:a.value,onClick:t},[(d=(c=s.slots).prefix)==null?void 0:d.call(c),r(),(m=(p=s.slots).suffix)==null?void 0:m.call(p)])}}}),R="",g=e.defineComponent({name:"DResult",props:y,setup(o,s){let l;return function(n){n.success="right-o",n.danger="error-o",n.warning="warning-o",n.info="info-o"}(l||(l={})),()=>{var n,r,i,a;return e.createVNode("div",{class:"devui-result"},[s.slots.icon?e.createVNode("div",null,[(n=s.slots)==null?void 0:n.icon()]):e.createVNode(_,{name:l[o.icon]||"",class:`devui-result__icon-${o.icon}`,size:"64px"},null),e.createVNode("div",{class:"devui-result__title"},[s.slots.title?(r=s.slots)==null?void 0:r.title():o.title]),e.createVNode("div",{class:"devui-result__desc"},[s.slots.desc?(i=s.slots)==null?void 0:i.desc():o.desc]),e.createVNode("div",{class:"devui-result__extra"},[s.slots.extra?(a=s.slots)==null?void 0:a.extra():""])])}}}),V={title:"Result \u7ED3\u679C",category:"\u53CD\u9988",status:"100%",install(o){o.component(g.name,g)}};u.Result=g,u.default=V,u.resultProps=y,Object.defineProperty(u,"__esModule",{value:!0}),u[Symbol.toStringTag]="Module"});