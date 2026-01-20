import{l as F,p as Y,C as J,i as E,e as Q,m as Z}from"./user-ByTeitRD.js";import{k as a,J as v,d as C,n as c,ar as N,r as w,p as V,D as j,as as W,v as p,G as U,U as ee,a4 as D,m as n,l as S,C as oe,a5 as M,X as te,ae as $,c as H,a as I,o as X}from"./index.2026012006.js";const le=a("layout",`
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
 `)]),re={embedded:Boolean,position:Y,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},q=ee("n-layout");function se(e){return C({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),re),setup(o){const t=w(null),g=w(null),{mergedClsPrefixRef:m,inlineThemeDisabled:b}=V(o),T=j("Layout","-layout",le,F,o,m);function L(i,d){if(o.nativeScrollbar){const{value:u}=t;u&&(d===void 0?u.scrollTo(i):u.scrollTo(i,d))}else{const{value:u}=g;u&&u.scrollTo(i,d)}}D(q,o);let z=0,k=0;const O=i=>{var d;const u=i.target;z=u.scrollLeft,k=u.scrollTop,(d=o.onScroll)===null||d===void 0||d.call(o,i)};W(()=>{if(o.nativeScrollbar){const i=t.value;i&&(i.scrollTop=k,i.scrollLeft=z)}});const _={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},B={scrollTo:L},R=p(()=>{const{common:{cubicBezierEaseInOut:i},self:d}=T.value;return{"--n-bezier":i,"--n-color":o.embedded?d.colorEmbedded:d.color,"--n-text-color":d.textColor}}),f=b?U("layout",p(()=>o.embedded?"e":""),R,o):void 0;return Object.assign({mergedClsPrefix:m,scrollableElRef:t,scrollbarInstRef:g,hasSiderStyle:_,mergedTheme:T,handleNativeElScroll:O,cssVars:b?void 0:R,themeClass:f?.themeClass,onRender:f?.onRender},B)},render(){var o;const{mergedClsPrefix:t,hasSider:g}=this;(o=this.onRender)===null||o===void 0||o.call(this);const m=g?this.hasSiderStyle:void 0,b=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return c("div",{class:b,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,m],onScroll:this.handleNativeElScroll},this.$slots):c(N,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,m]}),this.$slots))}})}const he=se(!1),ne=a("layout-sider",`
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
`,[v("bordered",[n("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),n("left-placement",[v("bordered",[n("border",`
 right: 0;
 `)])]),v("right-placement",`
 justify-content: flex-start;
 `,[v("bordered",[n("border",`
 left: 0;
 `)]),v("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[S("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[S("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),v("collapsed",[a("layout-toggle-bar",[S("&:hover",[n("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
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
 `,[n("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),n("bottom",`
 position: absolute;
 top: 34px;
 `),S("&:hover",[n("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),n("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),S("&:hover",[n("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),n("border",`
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
 `)]),ae=C({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},c("div",{class:`${e}-layout-toggle-bar__top`}),c("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ie=C({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},c(oe,{clsPrefix:e},{default:()=>c(J,null)}))}}),ce={position:Y,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},fe=C({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),ce),setup(e){const o=te(q),t=w(null),g=w(null),m=w(e.defaultCollapsed),b=Q(M(e,"collapsed"),m),T=p(()=>E(b.value?e.collapsedWidth:e.width)),L=p(()=>e.collapseMode!=="transform"?{}:{minWidth:E(e.width)}),z=p(()=>o?o.siderPlacement:"left");function k(s,l){if(e.nativeScrollbar){const{value:r}=t;r&&(l===void 0?r.scrollTo(s):r.scrollTo(s,l))}else{const{value:r}=g;r&&r.scrollTo(s,l)}}function O(){const{"onUpdate:collapsed":s,onUpdateCollapsed:l,onExpand:r,onCollapse:P}=e,{value:x}=b;l&&$(l,!x),s&&$(s,!x),m.value=!x,x?r&&$(r):P&&$(P)}let _=0,B=0;const R=s=>{var l;const r=s.target;_=r.scrollLeft,B=r.scrollTop,(l=e.onScroll)===null||l===void 0||l.call(e,s)};W(()=>{if(e.nativeScrollbar){const s=t.value;s&&(s.scrollTop=B,s.scrollLeft=_)}}),D(Z,{collapsedRef:b,collapseModeRef:M(e,"collapseMode")});const{mergedClsPrefixRef:f,inlineThemeDisabled:i}=V(e),d=j("Layout","-layout-sider",ne,F,e,f);function u(s){var l,r;s.propertyName==="max-width"&&(b.value?(l=e.onAfterLeave)===null||l===void 0||l.call(e):(r=e.onAfterEnter)===null||r===void 0||r.call(e))}const K={scrollTo:k},A=p(()=>{const{common:{cubicBezierEaseInOut:s},self:l}=d.value,{siderToggleButtonColor:r,siderToggleButtonBorder:P,siderToggleBarColor:x,siderToggleBarColorHover:G}=l,h={"--n-bezier":s,"--n-toggle-button-color":r,"--n-toggle-button-border":P,"--n-toggle-bar-color":x,"--n-toggle-bar-color-hover":G};return e.inverted?(h["--n-color"]=l.siderColorInverted,h["--n-text-color"]=l.textColorInverted,h["--n-border-color"]=l.siderBorderColorInverted,h["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColorInverted,h.__invertScrollbar=l.__invertScrollbar):(h["--n-color"]=l.siderColor,h["--n-text-color"]=l.textColor,h["--n-border-color"]=l.siderBorderColor,h["--n-toggle-button-icon-color"]=l.siderToggleButtonIconColor),h}),y=i?U("layout-sider",p(()=>e.inverted?"a":"b"),A,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:g,mergedClsPrefix:f,mergedTheme:d,styleMaxWidth:T,mergedCollapsed:b,scrollContainerStyle:L,siderPlacement:z,handleNativeElScroll:R,handleTransitionend:u,handleTriggerClick:O,inlineThemeDisabled:i,cssVars:A,themeClass:y?.themeClass,onRender:y?.onRender},K)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:g}=this;return(e=this.onRender)===null||e===void 0||e.call(this),c("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:E(this.width)}]},this.nativeScrollbar?c("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):c(N,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),g?g==="bar"?c(ae,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):c(ie,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?c("div",{class:`${o}-layout-sider__border`}):null)}}),de={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ve=C({name:"ArrowForwardCircleSharp",render:function(o,t){return X(),H("svg",de,t[0]||(t[0]=[I("path",{d:"M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256L262.7 358.63z",fill:"currentColor"},null,-1)]))}}),ue={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},me=C({name:"Settings",render:function(o,t){return X(),H("svg",ue,t[0]||(t[0]=[I("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),I("path",{d:"M470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175.21 175.21 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67z",fill:"currentColor"},null,-1)]))}});export{ve as A,me as S,he as _,fe as a,se as c};
