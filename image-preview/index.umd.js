var X=Object.defineProperty;var Y=(l,e,d)=>e in l?X(l,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[e]=d;var i=(l,e,d)=>(Y(l,typeof e!="symbol"?e+"":e,d),d);(function(l,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(l=typeof globalThis!="undefined"?globalThis:l||self,e(l.index={},l.Vue))})(this,function(l,e){"use strict";const d={url:{type:String,default:"",required:!0},previewUrlList:{type:Array,default:()=>[],required:!0},zIndex:{type:Number,required:!1},backDropZIndex:{type:Number,required:!1}};class b{constructor(t,n={}){i(this,"el");i(this,"oTransformX",0);i(this,"oTransformY",0);i(this,"transformX");i(this,"transformY");i(this,"zoom");i(this,"rotate");i(this,"STEP",.25);i(this,"MIN_SCALE",.2);i(this,"MAX_SCALE",2.5);i(this,"TRANSFORMX",0);i(this,"TRANSFORMY",0);i(this,"ZOOM",1);i(this,"ROTATE",0);this.el=t,this.transformX=n.transformX||this.TRANSFORMX,this.transformY=n.transformY||this.TRANSFORMY,this.zoom=n.zoom||this.ZOOM,this.rotate=n.rotate||this.ROTATE,this.handleDefaultDraggable(),this.onDraggable(),this.onMouseWheel()}handleDefaultDraggable(){document.body.ondragstart=()=>(window.event.returnValue=!1,!1)}onDraggable(){this.el.onmousedown=t=>{const n=t.clientX,r=t.clientY;document.onmousemove=s=>{const c=s.clientX-n,m=s.clientY-r;this.transformX=this.oTransformX+c,this.transformY=this.oTransformY+m,this.el.style.cursor="grabbing",this.setPosition()}},document.onmouseup=()=>{document.onmousemove=null,this.oTransformX=this.transformX,this.oTransformY=this.transformY,this.el.style.cursor="grab"}}onMouseWheel(){const t=this.throttle(this.setMouseWheel,100);this.el.onmousewheel=n=>{const r=-n.wheelDelta||n.deltaY||n.detail;t(r)}}throttle(t,n){let r=null;return(...s)=>{r||setTimeout(()=>{r=null,t.apply(this,s)},n)}}setMouseWheel(t){if(t<0){if(this.zoom>=this.MAX_SCALE){this.el.style.cursor="not-allowed";return}this.el.style.cursor="zoom-in",this.setZoomIn(this.STEP)}else{if(this.zoom<=this.MIN_SCALE){this.el.style.cursor="not-allowed";return}this.el.style.cursor="zoom-out",this.setZoomOut(this.STEP)}this.setPosition()}setZoomIn(t=this.STEP){this.zoom=Math.min(this.MAX_SCALE,this.zoom+t),this.setPosition()}setZoomOut(t=this.STEP){this.zoom=Math.max(this.MIN_SCALE,this.zoom-t),this.setPosition()}setZoomBest(){this.reset(),this.setPosition()}setZoomOriginal(){this.reset(),this.setPosition()}setRotate(){this.rotate+=.25,this.setPosition()}reset(){this.transformX=this.TRANSFORMX,this.transformY=this.TRANSFORMY,this.oTransformX=this.transformX,this.oTransformY=this.transformY,this.zoom=this.ZOOM}setPosition(){this.el.style.transform=`translate(${this.transformX}px, ${this.transformY}px) scale(${this.zoom}) rotate(${this.rotate}turn)`}}function f(o,t,n){let r=o;return t&&(r+=`__${t}`),n&&(r+=`--${n}`),r}function I(o,t=!1){const n=t?`.b-${o}`:`b-${o}`;return{b:()=>f(n),e:a=>a?f(n,a):"",m:a=>a?f(n,"",a):"",em:(a,L)=>a&&L?f(n,a,L):""}}var R="",Z=e.defineComponent({name:"DImagePreview",props:d,emits:[],setup(o){const t=I("image-preview");let n=null;const r=e.ref(0),s=e.computed(()=>o.previewUrlList[r.value]),c=o.zIndex?{zIndex:o.zIndex}:{},m=o.backDropZIndex?{zIndex:o.backDropZIndex}:{};function a(){const h=document.querySelector(`.${t.e("main-image")}`);n=new b(h)}function L(){r.value=o.previewUrlList.findIndex(h=>h===o.url)}function g(){r.value=r.value<=0?o.previewUrlList.length-1:r.value-1}function p(){r.value=r.value>=o.previewUrlList.length-1?0:r.value+1}function V(){u.close()}function T(){n.setZoomIn()}function $(){n.setZoomOut()}function D(){n.setRotate()}function A(){n.setZoomBest()}function E(){n.setZoomOriginal()}function k(h){h.defaultPrevented||(h.code==="Escape"?V():h.code==="ArrowLeft"?g():h.code==="ArrowRight"&&p())}function S(){document.addEventListener("keydown",k,!1)}function O(){document.removeEventListener("keydown",k,!1)}return e.onMounted(()=>{L(),a(),S()}),e.onUnmounted(()=>{O()}),()=>e.createVNode(e.Fragment,null,[e.createVNode("div",{class:t.b(),style:c},[e.createVNode("img",{class:t.e("main-image"),src:s.value},null),e.createVNode("button",{class:t.e("close-btn"),onClick:V},[e.createVNode("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("polygon",{fill:"#293040","fill-rule":"nonzero",points:"8 6.58578644 12.2426407 2.34314575 13.6568542 3.75735931 9.41421356 8                     13.6568542 12.2426407 12.2426407 13.6568542 8 9.41421356 3.75735931 13.6568542                      2.34314575 12.2426407 6.58578644 8 2.34314575 3.75735931 3.75735931 2.34314575"},null)])])]),e.createVNode("button",{class:t.e("arrow-left"),onClick:g},[e.createVNode("svg",{width:"18px",height:"18px",viewBox:"0 0 16 16",version:"1.1"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("polygon",{fill:"#293040","fill-rule":"nonzero",points:"10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322                     2.29289322 10.7071068 3.70710678 6.41421356 8"},null)])])]),e.createVNode("button",{class:t.e("arrow-right"),onClick:p},[e.createVNode("svg",{width:"18px",height:"18px",viewBox:"0 0 16 16",version:"1.1"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("polygon",{fill:"#293040","fill-rule":"nonzero",transform:"translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000) ",points:"11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322                     11.7071068 3.70710678 7.41421356 8"},null)])])]),e.createVNode("div",{class:t.e("toolbar")},[e.createVNode("button",{onClick:T},[e.createVNode("svg",{width:"18px",height:"18px",viewBox:"0 0 16 16"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("g",{fill:"#293040","fill-rule":"nonzero"},[e.createVNode("path",{d:"M6,6 L6,4 L8,4 L8,6 L10,6 L10,8 L8,8 L8,10 L6,10 L6,8 L4,8 L4,6 L6,6 Z                       M12.6063847,11.1921711 L15.6568542,14.2426407 L14.2426407,15.6568542 L11.1921711,12.6063847                       C10.0235906,13.4815965 8.5723351,14 7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675                        3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.5723351 13.4815965,10.0235906                         12.6063847,11.1921711 L12.6063847,11.1921711 Z M7,12 C9.76142375,12 12,9.76142375                          12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375                           4.23857625,12 7,12 Z"},null)])])])]),e.createVNode("button",{onClick:$},[e.createVNode("svg",{width:"18px",height:"18px",viewBox:"0 0 16 16"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("g",{fill:"#293040","fill-rule":"nonzero"},[e.createVNode("path",{d:"M12.6063847,11.1921711 L15.6568542,14.2426407 L14.2426407,15.6568542                       L11.1921711,12.6063847 C10.0235906,13.4815965 8.5723351,14 7,14 C3.13400675,14 0,10.8659932                        0,7 C0,3.13400675 3.13400675,0 7,0 C10.8659932,0 14,3.13400675 14,7 C14,8.5723351                         13.4815965,10.0235906 12.6063847,11.1921711 L12.6063847,11.1921711 Z M7,12 C9.76142375,12                          12,9.76142375 12,7 C12,4.23857625 9.76142375,2 7,2 C4.23857625,2 2,4.23857625 2,7 C2,9.76142375                           4.23857625,12 7,12 Z M4,6 L10,6 L10,8 L4,8 L4,6 Z"},null)])])])]),e.createVNode("button",{onClick:D},[e.createVNode("svg",{width:"18px",height:"18px",viewBox:"0 0 16 16",version:"1.1"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("path",{d:"M7.5,3.02242151 L7.5,4 L4.5,2 L7.5,0 L7.5,1.01640228 C7.66526181,1.00552468                       7.83198572,1 8,1 C12.1421356,1 15.5,4.35786438 15.5,8.5 C15.5,12.6421356                        12.1421356,16 8,16 C3.85786438,16 0.5,12.6421356 0.5,8.5 C0.5,6.9828355                         0.950484514,5.5708873 1.72499011,4.39061882 L3.42173231,5.4510827 C2.83944149,6.32371289                          2.5,7.37221604 2.5,8.5 C2.5,11.5375661 4.96243388,14 8,14 C11.0375661,14 13.5,11.5375661                           13.5,8.5 C13.5,5.46243388 11.0375661,3 8,3 C7.83145515,3 7.66468102,3.00758131 7.5,3.02242151                            Z M8,11 C6.61928813,11 5.5,9.88071187 5.5,8.5 C5.5,7.11928813 6.61928813,6 8,6 C9.38071187,6                             10.5,7.11928813 10.5,8.5 C10.5,9.88071187 9.38071187,11 8,11 Z M8,10 C8.82842712,10 9.5,9.32842712                              9.5,8.5 C9.5,7.67157288 8.82842712,7 8,7 C7.17157288,7 6.5,7.67157288 6.5,8.5 C6.5,9.32842712                               7.17157288,10 8,10 Z",fill:"#293040"},null)])])]),e.createVNode("button",{onClick:g},[e.createVNode("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("polygon",{fill:"#293040","fill-rule":"nonzero",points:"10.7071068 12.2928932 9.29289322 13.7071068 3.58578644 8 9.29289322 2.29289322                       10.7071068 3.70710678 6.41421356 8"},null)])])]),e.createVNode("span",{class:t.e("index")},[r.value+1,e.createTextVNode(":"),o.previewUrlList.length]),e.createVNode("button",{onClick:p},[e.createVNode("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("polygon",{fill:"#293040","fill-rule":"nonzero",transform:"translate(8.146447, 8.000000) scale(-1, 1) translate(-8.146447, -8.000000) ",points:"11.7071068 12.2928932 10.2928932 13.7071068 4.58578644 8 10.2928932 2.29289322                       11.7071068 3.70710678 7.41421356 8"},null)])])]),e.createVNode("button",{onClick:A},[e.createVNode("svg",{width:"18px",height:"18px",viewBox:"0 0 16 16"},[e.createVNode("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[e.createVNode("path",{d:"M16,16 L11.429,16 L11.429,15 L14.456,15 L11.006,11.226 L11.652,10.519 L15.086,14.275                       L15.086,11 L16,11 L16,16 Z M15.164,1.544 L12.009,4.994 L11.418,4.348 L14.558,0.914                        L11.82,0.914 L11.82,0 L16,0 L16,4.571 L15.164,4.571 L15.164,1.544 Z M5,15 L5,16                         L0,16 L0,11 L1,11 L1,14.275 L4.756,10.519 L5.463,11.226 L1.689,15 L5,15 Z M4.365,4.994                          L0.914,1.544 L0.914,4.571 L3.41060513e-13,4.571 L3.41060513e-13,0 L4.571,0 L4.571,0.914                           L1.578,0.914 L5.011,4.348 L4.365,4.994 Z",fill:"#293040","fill-rule":"nonzero"},null)])])]),e.createVNode("button",{onClick:E},[e.createVNode("span",null,[e.createTextVNode("1:1")])])])]),e.createVNode("div",{class:t.e("bg"),style:m},null)])}});function M(o){return e.createApp(Z,o)}class u{static open(t){this.$body=document.body,this.$div=document.createElement("div"),this.$overflow=this.$body.style.overflow,this.$body.appendChild(this.$div),M(t).mount(this.$div),this.$body.style.setProperty("overflow","hidden","important")}static close(){var t,n;(t=this.$body)==null||t.style.setProperty("overflow",this.$overflow),this.$overflow=null,this.$div&&((n=this.$body)==null||n.removeChild(this.$div)),this.$body=null,this.$div=null}}i(u,"$body",null),i(u,"$div",null),i(u,"$overflow","");function x(o){u.open({url:o.url,previewUrlList:o.previewUrlList,zIndex:o.zIndex,backDropZIndex:o.backDropZIndex})}function N(){u.close()}function C(o){return[...o.querySelectorAll("img")].map(r=>{var s;return(s=r.getAttribute("preview-src")||r.getAttribute("src"))!=null?s:""})}function v(o){var r;o.stopPropagation();const t=o.currentTarget,n=o.target;if(((r=n==null?void 0:n.nodeName)==null?void 0:r.toLowerCase())==="img"){const s=C(t),c=n.getAttribute("src");if(!c)return console.error("attribute is not exist");x({url:c,previewUrlList:s,zIndex:t==null?void 0:t.zIndex,backDropZIndex:t==null?void 0:t.backDropZIndex})}}function w(o){o.addEventListener("click",v)}function z(o){o.removeEventListener("click",v)}var y={mounted(o,t){if(!(t==null?void 0:t.value))return w(o);const{custom:n,disableDefault:r}=t.value;n instanceof Object&&(n.open=()=>{const s=C(o);x({url:s==null?void 0:s[0],previewUrlList:s,zIndex:o==null?void 0:o.zIndex,backDropZIndex:o==null?void 0:o.backDropZIndex})},n.close=()=>N()),!r&&w(o)},unmounted(){N()},updated(o,t){var n,r;if(o.zIndex=(n=t==null?void 0:t.value)==null?void 0:n.zIndex,o.backDropZIndex=(r=t==null?void 0:t.value)==null?void 0:r.backDropZIndex,t==null?void 0:t.value){const{value:{disableDefault:s},oldValue:{disableDefault:c}}=t;s!==c&&(s?z(o):w(o))}}},P={title:"ImagePreview \u56FE\u7247\u9884\u89C8",category:"\u6570\u636E\u5C55\u793A",status:"100%",install(o){o.directive("d-image-preview",y),o.config.globalProperties.$imagePreviewService=u}};l.ImagePreviewDirective=y,l.ImagePreviewService=u,l.default=P,l.imagePreviewProps=d,Object.defineProperty(l,"__esModule",{value:!0}),l[Symbol.toStringTag]="Module"});