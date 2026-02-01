import{l as V,p as N,C as J,h as I,d as Q,m as Z}from"./_plugin-vue_export-helper-wCZfEhzQ.js";import{k as a,J as v,d as x,n as c,ar as W,r as k,p as H,D as L,as as U,y as m,G as D,U as ee,a4 as q,m as s,l as w,C as oe,V as te,a5 as Y,ae as j,c as M,a as y,o as A}from"./index.2026020105.js";const le=a("layout",`
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
 `),v("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),re={embedded:Boolean,position:N,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},X=ee("n-layout");function ne(e){return x({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},L.props),re),setup(o){const t=k(null),g=k(null),{mergedClsPrefixRef:p,inlineThemeDisabled:h}=H(o),T=L("Layout","-layout",le,V,o,p);function O(i,d){if(o.nativeScrollbar){const{value:u}=t;u&&(d===void 0?u.scrollTo(i):u.scrollTo(i,d))}else{const{value:u}=g;u&&u.scrollTo(i,d)}}q(X,o);let z=0,_=0;const E=i=>{var d;const u=i.target;z=u.scrollLeft,_=u.scrollTop,(d=o.onScroll)===null||d===void 0||d.call(o,i)};U(()=>{if(o.nativeScrollbar){const i=t.value;i&&(i.scrollTop=_,i.scrollLeft=z)}});const R={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},B={scrollTo:O},P=m(()=>{const{common:{cubicBezierEaseInOut:i},self:d}=T.value;return{"--n-bezier":i,"--n-color":o.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),f=h?D("layout",m(()=>o.embedded?"e":""),P,o):void 0;return Object.assign({mergedClsPrefix:p,scrollableElRef:t,scrollbarInstRef:g,hasSiderStyle:R,mergedTheme:T,handleNativeElScroll:E,cssVars:h?void 0:P,themeClass:f?.themeClass,onRender:f?.onRender},B)},render(){var o;const{mergedClsPrefix:t,hasSider:g}=this;(o=this.onRender)===null||o===void 0||o.call(this);const p=g?this.hasSiderStyle:void 0,h=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return c("div",{class:h,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,p],onScroll:this.handleNativeElScroll},this.$slots):c(W,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,p]}),this.$slots))}})}const fe=ne(!1),se=a("layout-sider",`
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
`,[v("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[v("bordered",[s("border",`
 right: 0;
 `)])]),v("right-placement",`
 justify-content: flex-start;
 `,[v("bordered",[s("border",`
 left: 0;
 `)]),v("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[w("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[w("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),v("collapsed",[a("layout-toggle-bar",[w("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
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
 `),w("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),w("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
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
 `),v("show-content",[a("layout-sider-scroll-container",{opacity:1})]),v("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ae=x({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ie=x({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(oe,{clsPrefix:e},{default:()=>c(J,null)}))}}),ce={position:N,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ve=x({name:"LayoutSider",props:Object.assign(Object.assign({},L.props),ce),setup(e){const o=te(X),t=k(null),g=k(null),p=k(e.defaultCollapsed),h=Q(Y(e,"collapsed"),p),T=m(()=>I(h.value?e.collapsedWidth:e.width)),O=m(()=>e.collapseMode!=="transform"?{}:{minWidth:I(e.width)}),z=m(()=>o?o.siderPlacement:"left");function _(n,l){if(e.nativeScrollbar){const{value:r}=t;r&&(l===void 0?r.scrollTo(n):r.scrollTo(n,l))}else{const{value:r}=g;r&&r.scrollTo(n,l)}}function E(){const{"onUpdate:collapsed":n,onUpdateCollapsed:l,onExpand:r,onCollapse:$}=e,{value:S}=h;l&&j(l,!S),n&&j(n,!S),p.value=!S,S?r&&j(r):$&&j($)}let R=0,B=0;const P=n=>{var l;const r=n.target;R=r.scrollLeft,B=r.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,n)};U(()=>{if(e.nativeScrollbar){const n=t.value;n&&(n.scrollTop=B,n.scrollLeft=R)}}),q(Z,{collapsedRef:h,collapseModeRef:Y(e,"collapseMode")});const{mergedClsPrefixRef:f,inlineThemeDisabled:i}=H(e),d=L("Layout","-layout-sider",se,V,e,f);function u(n){var l,r;n.propertyName==="max-width"&&(h.value?(l=e.onAfterLeave)===null||l===void 0||l.call(e):(r=e.onAfterEnter)===null||r===void 0||r.call(e))}const K={scrollTo:_},F=m(()=>{const{common:{cubicBezierEaseInOut:n},self:l}=d.value,{siderToggleButtonColor:r,siderToggleButtonBorder:$,siderToggleBarColor:S,siderToggleBarColorHover:G}=l,b={"--n-bezier":n,"--n-toggle-button-color":r,"--n-toggle-button-border":$,"--n-toggle-bar-color":S,"--n-toggle-bar-color-hover":G};return e.inverted?(b["--n-color"]=l.siderColorInverted,b["--n-text-color"]=l.textColorInverted,b["--n-border-color"]=l.siderBorderColorInverted,b["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColorInverted,b.__invertScrollbar=l.__invertScrollbar):(b["--n-color"]=l.siderColor,b["--n-text-color"]=l.textColor,b["--n-border-color"]=l.siderBorderColor,b["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColor),b}),C=i?D("layout-sider",m(()=>e.inverted?"a":"b"),F,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:g,mergedClsPrefix:f,mergedTheme:d,styleMaxWidth:T,mergedCollapsed:h,scrollContainerStyle:O,siderPlacement:z,handleNativeElScroll:P,handleTransitionend:u,handleTriggerClick:E,inlineThemeDisabled:i,cssVars:F,themeClass:C?.themeClass,onRender:C?.onRender},K)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:g}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:I(this.width)}]},this.nativeScrollbar?c("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(W,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),g?g==="bar"?c(ae,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(ie,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}}),de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pe=x({name:"ArrowForwardCircleSharp",render:function(o,t){return A(),M("svg",de,t[0]||(t[0]=[y("path",{d:"M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256L262.7 358.63z",fill:"currentColor"},null,-1)]))}}),ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},me=x({name:"ReceiptOutline",render:function(o,t){return A(),M("svg",ue,t[0]||(t[0]=[y("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M160 336V48l32 16l32-16l31.94 16l32.37-16L320 64l31.79-16l31.93 16L416 48l32.01 16L480 48v224"},null,-1),y("path",{d:"M480 272v112a80 80 0 0 1-80 80h0a80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),y("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M224 144h192"},null,-1),y("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M288 224h128"},null,-1)]))}}),ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ye=x({name:"Settings",render:function(o,t){return A(),M("svg",ge,t[0]||(t[0]=[y("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),y("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1)]))}});export{pe as A,me as R,ye as S,ve as _,fe as a,ne as c};
