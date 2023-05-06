(function(c,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(c=typeof globalThis!="undefined"?globalThis:c||self,t(c.index={},c.Vue))})(this,function(c,t){"use strict";const g={type:{type:String,default:""},color:{type:String,default:""},titleContent:{type:String,default:""},checked:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1},size:{type:String,default:"md"}};function s(a,e,n){let l=a;return e&&(l+=`__${e}`),n&&(l+=`--${n}`),l}function m(a,e=!1){const n=e?`.b-${a}`:`b-${a}`;return{b:()=>s(n),e:r=>r?s(n,r):"",m:r=>r?s(n,"",r):"",em:(r,f)=>r&&f?s(n,r,f):""}}function C(a){const e=m("tag");return t.computed(()=>{const{type:n,color:l,deletable:u}=a;return`${e.e("item")} ${e.m(n||(l?"colorful":"")||"default")} ${u?e.m("deletable"):""} ${e.m(a.size)}`})}function h(a){return t.computed(()=>{const{color:e,type:n}=a,l={primary:"var(--devui-primary, #5e7ce0)",success:"var(--devui-success, #50d4ab)",warning:"var(--devui-warning, #fac20a)",danger:"var(--devui-danger, #f66f6a)"},u={"blue-w98":"#3383ff","aqua-w98":"#39afcc","olivine-w98":"#2fa898","green-w98":"#4eb15e","yellow-w98":"#b08d1a","orange-w98":"#d47f35","red-w98":"#f66f6a","pink-w98":"#f3689a","purple-w98":"#a97af8"};return!e&&n?l[n]:u[e]||e})}var V="",p=t.defineComponent({name:"DTag",props:g,emits:["click","tagDelete","checkedChange"],setup(a,{slots:e,emit:n}){const l=m("tag"),{type:u,color:d,checked:i,titleContent:r,deletable:f}=t.toRefs(a),k=C(a),v=h(a),T=r.value||"",y=()=>!u.value&&!d.value,$=o=>{n("click",o)},N=o=>{o.stopPropagation(),n("tagDelete",o)},b=t.computed(()=>y()?"":i.value?"#fff":v.value),S=()=>{const o=y()?"error-o":"close";return f.value?t.createVNode("a",{class:"remove-button",onClick:N},[t.createVNode(t.resolveComponent("d-icon"),{size:"12px",name:o,color:b.value},null)]):null},D=t.watch(i,o=>{n("checkedChange",o)});return t.onUnmounted(()=>D()),()=>{var o;return t.createVNode("div",{class:l.b(),onClick:$},[t.createVNode("span",{class:k.value,style:{display:"block",color:b.value,backgroundColor:i.value?v.value:d.value?"var(--devui-base-bg, #ffffff)":""},title:T},[(o=e.default)==null?void 0:o.call(e),S()])])}}}),w={title:"Tag \u6807\u7B7E",category:"\u6570\u636E\u5C55\u793A",status:"100%",install(a){a.component(p.name,p)}};c.Tag=p,c.default=w,c.tagProps=g,Object.defineProperty(c,"__esModule",{value:!0}),c[Symbol.toStringTag]="Module"});