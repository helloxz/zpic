import{t as W,v as Y,C as Q,n as A,j as Z,w as ee}from"./_plugin-vue_export-helper-Cpp5inQi.js";import{v as a,H as p,d as y,s as u,as as V,r as T,z as H,A as $,at as U,n as x,D as q,T as te,a3 as X,x as s,G as k,y as oe,U as le,a4 as F,ad as L,c as P,a as m,o as E}from"./index.2026051103.js";function re(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}let ne={};function se(){return ne}function N(e,t){const o=se(),c=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,i=re(e),h=i.getDay(),S=(h<c?7:0)+h-c;return i.setDate(i.getDate()-S),i.setHours(0,0,0,0),i}function xe(e,t,o){const c=N(e,o),i=N(t,o);return+c==+i}const ae=a("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[a("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),p("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ie={embedded:Boolean,position:Y,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},K=te("n-layout");function ce(e){return y({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},$.props),ie),setup(t){const o=T(null),c=T(null),{mergedClsPrefixRef:i,inlineThemeDisabled:h}=H(t),S=$("Layout","-layout",ae,W,t,i);function I(d,g){if(t.nativeScrollbar){const{value:b}=o;b&&(g===void 0?b.scrollTo(d):b.scrollTo(d,g))}else{const{value:b}=c;b&&b.scrollTo(d,g)}}X(K,t);let z=0,_=0;const M=d=>{var g;const b=d.target;z=b.scrollLeft,_=b.scrollTop,(g=t.onScroll)===null||g===void 0||g.call(t,d)};U(()=>{if(t.nativeScrollbar){const d=o.value;d&&(d.scrollTop=_,d.scrollLeft=z)}});const O={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},R={scrollTo:I},B=x(()=>{const{common:{cubicBezierEaseInOut:d},self:g}=S.value;return{"--n-bezier":d,"--n-color":t.embedded?g.colorEmbedded:g.color,"--n-text-color":g.textColor}}),v=h?q("layout",x(()=>t.embedded?"e":""),B,t):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:o,scrollbarInstRef:c,hasSiderStyle:O,mergedTheme:S,handleNativeElScroll:M,cssVars:h?void 0:B,themeClass:v?.themeClass,onRender:v?.onRender},R)},render(){var t;const{mergedClsPrefix:o,hasSider:c}=this;(t=this.onRender)===null||t===void 0||t.call(this);const i=c?this.hasSiderStyle:void 0,h=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return u("div",{class:h,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):u(V,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const Se=ce(!1),de=a("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[p("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[p("bordered",[s("border",`
 right: 0;
 `)])]),p("right-placement",`
 justify-content: flex-start;
 `,[p("bordered",[s("border",`
 left: 0;
 `)]),p("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[k("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[k("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),p("collapsed",[a("layout-toggle-bar",[k("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),k("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),k("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),p("show-content",[a("layout-sider-scroll-container",{opacity:1})]),p("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ue=y({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ge=y({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(oe,{clsPrefix:e},{default:()=>u(Q,null)}))}}),he={position:Y,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Ce=y({name:"LayoutSider",props:Object.assign(Object.assign({},$.props),he),setup(e){const t=le(K),o=T(null),c=T(null),i=T(e.defaultCollapsed),h=Z(F(e,"collapsed"),i),S=x(()=>A(h.value?e.collapsedWidth:e.width)),I=x(()=>e.collapseMode!=="transform"?{}:{minWidth:A(e.width)}),z=x(()=>t?t.siderPlacement:"left");function _(n,l){if(e.nativeScrollbar){const{value:r}=o;r&&(l===void 0?r.scrollTo(n):r.scrollTo(n,l))}else{const{value:r}=c;r&&r.scrollTo(n,l)}}function M(){const{"onUpdate:collapsed":n,onUpdateCollapsed:l,onExpand:r,onCollapse:j}=e,{value:w}=h;l&&L(l,!w),n&&L(n,!w),i.value=!w,w?r&&L(r):j&&L(j)}let O=0,R=0;const B=n=>{var l;const r=n.target;O=r.scrollLeft,R=r.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,n)};U(()=>{if(e.nativeScrollbar){const n=o.value;n&&(n.scrollTop=R,n.scrollLeft=O)}}),X(ee,{collapsedRef:h,collapseModeRef:F(e,"collapseMode")});const{mergedClsPrefixRef:v,inlineThemeDisabled:d}=H(e),g=$("Layout","-layout-sider",de,W,e,v);function b(n){var l,r;n.propertyName==="max-width"&&(h.value?(l=e.onAfterLeave)===null||l===void 0||l.call(e):(r=e.onAfterEnter)===null||r===void 0||r.call(e))}const G={scrollTo:_},D=x(()=>{const{common:{cubicBezierEaseInOut:n},self:l}=g.value,{siderToggleButtonColor:r,siderToggleButtonBorder:j,siderToggleBarColor:w,siderToggleBarColorHover:J}=l,f={"--n-bezier":n,"--n-toggle-button-color":r,"--n-toggle-button-border":j,"--n-toggle-bar-color":w,"--n-toggle-bar-color-hover":J};return e.inverted?(f["--n-color"]=l.siderColorInverted,f["--n-text-color"]=l.textColorInverted,f["--n-border-color"]=l.siderBorderColorInverted,f["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColorInverted,f.__invertScrollbar=l.__invertScrollbar):(f["--n-color"]=l.siderColor,f["--n-text-color"]=l.textColor,f["--n-border-color"]=l.siderBorderColor,f["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColor),f}),C=d?q("layout-sider",x(()=>e.inverted?"a":"b"),D,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:c,mergedClsPrefix:v,mergedTheme:g,styleMaxWidth:S,mergedCollapsed:h,scrollContainerStyle:I,siderPlacement:z,handleNativeElScroll:B,handleTransitionend:b,handleTriggerClick:M,inlineThemeDisabled:d,cssVars:D,themeClass:C?.themeClass,onRender:C?.onRender},G)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:o,showTrigger:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,o&&`${t}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:A(this.width)}]},this.nativeScrollbar?u("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(V,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),c?c==="bar"?u(ue,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(ge,{clsPrefix:t,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${t}-layout-sider__border`}):null)}}),be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},we=y({name:"ArrowForwardCircleSharp",render:function(t,o){return E(),P("svg",be,o[0]||(o[0]=[m("path",{d:"M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256L262.7 358.63z",fill:"currentColor"},null,-1)]))}}),fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ke=y({name:"ReceiptOutline",render:function(t,o){return E(),P("svg",fe,o[0]||(o[0]=[m("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"},null,-1),m("path",{d:"M480 272v112a80 80 0 0 1-80 80h0a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M224 144h192"},null,-1),m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M288 224h128"},null,-1)]))}}),ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Te=y({name:"Settings",render:function(t,o){return E(),P("svg",ve,o[0]||(o[0]=[m("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),m("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1)]))}}),pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ze=y({name:"Ticket",render:function(t,o){return E(),P("svg",pe,o[0]||(o[0]=[m("path",{d:"M490.18 181.4l-44.13-44.13a20 20 0 0 0-27-1a30.81 30.81 0 0 1-41.68-1.6a30.81 30.81 0 0 1-1.6-41.67a20 20 0 0 0-1-27L330.6 21.82a19.91 19.91 0 0 0-28.13 0l-70.35 70.34a39.87 39.87 0 0 0-9.57 15.5a7.71 7.71 0 0 1-4.83 4.83a39.78 39.78 0 0 0-15.5 9.58l-180.4 180.4a19.91 19.91 0 0 0 0 28.13L66 374.73a20 20 0 0 0 27 1a30.69 30.69 0 0 1 43.28 43.28a20 20 0 0 0 1 27l44.13 44.13a19.91 19.91 0 0 0 28.13 0l180.4-180.4a39.82 39.82 0 0 0 9.58-15.49a7.69 7.69 0 0 1 4.84-4.84a39.84 39.84 0 0 0 15.49-9.57l70.34-70.35a19.91 19.91 0 0 0-.01-28.09zm-228.37-29.65a16 16 0 0 1-22.63 0l-11.51-11.51a16 16 0 0 1 22.63-22.62l11.51 11.5a16 16 0 0 1 0 22.63zm44 44a16 16 0 0 1-22.62 0l-11-11a16 16 0 1 1 22.63-22.63l11 11a16 16 0 0 1 .01 22.66zm44 44a16 16 0 0 1-22.63 0l-11-11a16 16 0 0 1 22.63-22.62l11 11a16 16 0 0 1 .05 22.67zm44.43 44.54a16 16 0 0 1-22.63 0l-11.44-11.5a16 16 0 1 1 22.68-22.57l11.45 11.49a16 16 0 0 1-.01 22.63z",fill:"currentColor"},null,-1)]))}});export{we as A,ke as R,Te as S,ze as T,Ce as _,Se as a,ce as c,se as g,xe as i,N as s,re as t};
