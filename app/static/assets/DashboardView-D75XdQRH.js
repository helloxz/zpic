const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/assets/home-CGZtgWOw.js","static/assets/index.2026010903.js","static/assets/setting-DJaHbZJ2.js","static/assets/Alert-K4nxSS4B.js","static/assets/InputNumber-CMBKyk2_.js","static/assets/Add-DKPyegP8.js","static/assets/Switch-C0Xpqub-.js","static/assets/Select-C7GwHtkt.js","static/assets/Empty-Dtprdsyr.js","static/assets/Trash-_QCUiGFO.js","static/assets/Settings-DWCTRpxN.js","static/assets/images-BhvO8gwE.js","static/assets/ClipboardOutline-mn8kUgDd.js","static/assets/DataTable-Cub3Ciwb.js","static/assets/download-C2161hUv.js","static/assets/Image-BD3oqrVe.js","static/assets/storages-CGr8qklf.js","static/assets/users-pM8awTao.js","static/assets/delete_record-BnbcSS97.js","static/assets/subscriptions-xFE9eoq4.js","static/assets/plans-B4lnqeM8.js","static/assets/orders-w6JBcgBZ.js","static/assets/license-BZn8eT5c.js"])))=>i.map(i=>d[i]);
import{d as j,h as c,r as H,c as Ae,u as kt,a as zt,i as Rt,b as ve,e as Lt,f as $t,g as Bt,t as At,j as Ge,m as Et,k as Vt,F as Fe,N as Wt,l as Mt,n as fe,o as Ht,p as o,q as l,s as P,v as M,w as It,x as _e,y as Ee,V as we,z as Ot,A as Ne,B as Ve,C as jt,D as ue,E as Ue,G as Dt,H as U,I as Gt,J as Ft,K as X,L as be,M as Nt,O as Ut,P as Xt,T as Kt,Q as Yt,R as Ce,S as qt,U as pe,W as q,X as T,Y as O,Z as Jt,_ as Xe,$ as Qt,a0 as Zt,a1 as ea,a2 as ta,a3 as aa,a4 as Se,a5 as Q,a6 as ra,a7 as K,a8 as Z,a9 as na,aa as oa,ab as ia,ac as la,ad as sa,ae as We,af as da,ag as ca,ah as Y}from"./index.2026010903.js";import{T as ba}from"./Trash-_QCUiGFO.js";import{c as pa,S as fa,_ as ua,a as va,A as ha}from"./Settings-DWCTRpxN.js";import{A as ga}from"./Add-DKPyegP8.js";const ma=Ae(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ae("&::-webkit-scrollbar",{width:0,height:0})]),xa=j({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=H(null);function r(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const n=kt();return ma.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:zt,ssr:n}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...s){var S;(S=e.value)===null||S===void 0||S.scrollTo(...s)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ya=/\s/;function _a(e){for(var r=e.length;r--&&ya.test(e.charAt(r)););return r}var wa=/^\s+/;function Ca(e){return e&&e.slice(0,_a(e)+1).replace(wa,"")}var Me=NaN,Sa=/^[-+]0x[0-9a-f]+$/i,Ta=/^0b[01]+$/i,Pa=/^0o[0-7]+$/i,ka=parseInt;function He(e){if(typeof e=="number")return e;if(Rt(e))return Me;if(ve(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ve(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Ca(e);var n=Ta.test(e);return n||Pa.test(e)?ka(e.slice(2),n?2:8):Sa.test(e)?Me:+e}var Te=function(){return Lt.Date.now()},za="Expected a function",Ra=Math.max,La=Math.min;function $a(e,r,n){var p,s,S,h,f,w,m=0,_=!1,E=!1,B=!0;if(typeof e!="function")throw new TypeError(za);r=He(r)||0,ve(n)&&(_=!!n.leading,E="maxWait"in n,S=E?Ra(He(n.maxWait)||0,r):S,B="trailing"in n?!!n.trailing:B);function g(b){var A=p,J=s;return p=s=void 0,m=b,h=e.apply(J,A),h}function k(b){return m=b,f=setTimeout(R,r),_?g(b):h}function C(b){var A=b-w,J=b-m,V=r-A;return E?La(V,S-J):V}function x(b){var A=b-w,J=b-m;return w===void 0||A>=r||A<0||E&&J>=S}function R(){var b=Te();if(x(b))return L(b);f=setTimeout(R,C(b))}function L(b){return f=void 0,B&&p?g(b):(p=s=void 0,h)}function N(){f!==void 0&&clearTimeout(f),m=0,p=w=s=f=void 0}function W(){return f===void 0?h:L(Te())}function u(){var b=Te(),A=x(b);if(p=arguments,s=this,w=b,A){if(f===void 0)return k(w);if(E)return clearTimeout(f),f=setTimeout(R,r),g(w)}return f===void 0&&(f=setTimeout(R,r)),h}return u.cancel=N,u.flush=W,u}var Ba="Expected a function";function Aa(e,r,n){var p=!0,s=!0;if(typeof e!="function")throw new TypeError(Ba);return ve(n)&&(p="leading"in n?!!n.leading:p,s="trailing"in n?!!n.trailing:s),$a(e,r,{leading:p,maxWait:r,trailing:s})}const Ea={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function Va(e){const{textColor2:r,primaryColor:n,textColorDisabled:p,closeIconColor:s,closeIconColorHover:S,closeIconColorPressed:h,closeColorHover:f,closeColorPressed:w,tabColor:m,baseColor:_,dividerColor:E,fontWeight:B,textColor1:g,borderRadius:k,fontSize:C,fontWeightStrong:x}=e;return Object.assign(Object.assign({},Ea),{colorSegment:m,tabFontSizeCard:C,tabTextColorLine:g,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:p,tabTextColorSegment:g,tabTextColorActiveSegment:r,tabTextColorHoverSegment:r,tabTextColorDisabledSegment:p,tabTextColorBar:g,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:p,tabTextColorCard:g,tabTextColorHoverCard:g,tabTextColorActiveCard:n,tabTextColorDisabledCard:p,barColor:n,closeIconColor:s,closeIconColorHover:S,closeIconColorPressed:h,closeColorHover:f,closeColorPressed:w,closeBorderRadius:k,tabColor:m,tabColorSegment:_,tabBorderColor:E,tabFontWeightActive:B,tabFontWeight:B,tabBorderRadius:k,paneTextColor:r,fontWeightStrong:x})}const Wa={common:$t,self:Va},Ma=pa(!0),Re=Bt("n-tabs"),Ke={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Ha=j({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ke,slots:Object,setup(e){const r=Ge(Re,null);return r||At("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ia=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ht(Ke,["displayDirective"])),ze=j({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ia,setup(e){const{mergedClsPrefixRef:r,valueRef:n,typeRef:p,closableRef:s,tabStyleRef:S,addTabStyleRef:h,tabClassRef:f,addTabClassRef:w,tabChangeIdRef:m,onBeforeLeaveRef:_,triggerRef:E,handleAdd:B,activateTab:g,handleClose:k}=Ge(Re);return{trigger:E,mergedClosable:fe(()=>{if(e.internalAddable)return!1;const{closable:C}=e;return C===void 0?s.value:C}),style:S,addStyle:h,tabClass:f,addTabClass:w,clsPrefix:r,value:n,type:p,handleClose(C){C.stopPropagation(),!e.disabled&&k(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){B();return}const{name:C}=e,x=++m.id;if(C!==n.value){const{value:R}=_;R?Promise.resolve(R(e.name,n.value)).then(L=>{L&&m.id===x&&g(C)}):g(C)}}}},render(){const{internalAddable:e,clsPrefix:r,name:n,disabled:p,label:s,tab:S,value:h,mergedClosable:f,trigger:w,$slots:{default:m}}=this,_=s??S;return c("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${r}-tabs-tab-pad`}):null,c("div",Object.assign({key:n,"data-name":n,"data-disabled":p?!0:void 0},Et({class:[`${r}-tabs-tab`,h===n&&`${r}-tabs-tab--active`,p&&`${r}-tabs-tab--disabled`,f&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:w==="click"?this.activateTab:void 0,onMouseenter:w==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${r}-tabs-tab__label`},e?c(Fe,null,c("div",{class:`${r}-tabs-tab__height-placeholder`}," "),c(Wt,{clsPrefix:r},{default:()=>c(ga,null)})):m?m():typeof _=="object"?_:Vt(_??n)),f&&this.type==="card"?c(Mt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:p}):null))}}),Oa=o("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("segment-type",[o("tabs-rail",[P("&.transition-disabled",[o("tabs-capsule",`
 transition: none;
 `)])])]),l("top",[o("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),l("left",[o("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),l("left, right",`
 flex-direction: row;
 `,[o("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),o("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),l("right",`
 flex-direction: row-reverse;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),o("tabs-bar",`
 left: 0;
 `)]),l("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),o("tabs-bar",`
 top: 0;
 `)]),o("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[o("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),o("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[o("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),l("flex",[o("tabs-nav",`
 width: 100%;
 position: relative;
 `,[o("tabs-wrapper",`
 width: 100%;
 `,[o("tabs-tab",`
 margin-right: 0;
 `)])])]),o("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[M("prefix, suffix",`
 display: flex;
 align-items: center;
 `),M("prefix","padding-right: 16px;"),M("suffix","padding-left: 16px;")]),l("top, bottom",[P(">",[o("tabs-nav",[o("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),l("shadow-start",[P("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[P("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),l("left, right",[o("tabs-nav-scroll-content",`
 flex-direction: column;
 `),P(">",[o("tabs-nav",[o("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l("shadow-start",[P("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[P("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),o("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[o("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),P("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),o("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),o("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),o("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),o("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("disabled",{cursor:"not-allowed"}),M("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),M("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),o("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P("&.transition-disabled",`
 transition: none;
 `),l("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),o("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),o("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),P("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),P("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),P("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),o("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),l("line-type, bar-type",[o("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P("&:hover",{color:"var(--n-tab-text-color-hover)"}),l("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),l("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),o("tabs-nav",[l("line-type",[l("top",[M("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 bottom: -1px;
 `)]),l("left",[M("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 right: -1px;
 `)]),l("right",[M("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 left: -1px;
 `)]),l("bottom",[M("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 top: -1px;
 `)]),M("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-bar",`
 border-radius: 0;
 `)]),l("card-type",[M("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[l("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[M("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),It("disabled",[P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),l("closable","padding-right: 8px;"),l("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),l("disabled","color: var(--n-tab-text-color-disabled);")])]),l("left, right",`
 flex-direction: column; 
 `,[M("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),o("tabs-wrapper",`
 flex-direction: column;
 `),o("tabs-tab-wrapper",`
 flex-direction: column;
 `,[o("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),l("top",[l("card-type",[o("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),M("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-bottom: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),l("left",[l("card-type",[o("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),M("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-right: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),l("right",[l("card-type",[o("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),M("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-left: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),l("bottom",[l("card-type",[o("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),M("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-top: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Pe=Aa,ja=Object.assign(Object.assign({},Ne.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Da=j({name:"Tabs",props:ja,slots:Object,setup(e,{slots:r}){var n,p,s,S;const{mergedClsPrefixRef:h,inlineThemeDisabled:f}=Ot(e),w=Ne("Tabs","-tabs",Oa,Wa,e,h),m=H(null),_=H(null),E=H(null),B=H(null),g=H(null),k=H(null),C=H(!0),x=H(!0),R=Ve(e,["labelSize","size"]),L=Ve(e,["activeName","value"]),N=H((p=(n=L.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&p!==void 0?p:r.default?(S=(s=_e(r.default())[0])===null||s===void 0?void 0:s.props)===null||S===void 0?void 0:S.name:null),W=jt(L,N),u={id:0},b=fe(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ue(W,()=>{u.id=0,ee(),v()});function A(){var t;const{value:a}=W;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function J(t){if(e.type==="card")return;const{value:a}=_;if(!a)return;const i=a.style.opacity==="0";if(t){const d=`${h.value}-tabs-bar--disabled`,{barWidth:$,placement:G}=e;if(t.dataset.disabled==="true"?a.classList.add(d):a.classList.remove(d),["top","bottom"].includes(G)){if(ie(["top","maxHeight","height"]),typeof $=="number"&&t.offsetWidth>=$){const F=Math.floor((t.offsetWidth-$)/2)+t.offsetLeft;a.style.left=`${F}px`,a.style.maxWidth=`${$}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",i&&(a.style.transition="none"),a.offsetWidth,i&&(a.style.transition="",a.style.opacity="1")}else{if(ie(["left","maxWidth","width"]),typeof $=="number"&&t.offsetHeight>=$){const F=Math.floor((t.offsetHeight-$)/2)+t.offsetTop;a.style.top=`${F}px`,a.style.maxHeight=`${$}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",i&&(a.style.transition="none"),a.offsetHeight,i&&(a.style.transition="",a.style.opacity="1")}}}function V(){if(e.type==="card")return;const{value:t}=_;t&&(t.style.opacity="0")}function ie(t){const{value:a}=_;if(a)for(const i of t)a.style[i]=""}function ee(){if(e.type==="card")return;const t=A();t?J(t):V()}function v(){var t;const a=(t=g.value)===null||t===void 0?void 0:t.$el;if(!a)return;const i=A();if(!i)return;const{scrollLeft:d,offsetWidth:$}=a,{offsetLeft:G,offsetWidth:F}=i;d>G?a.scrollTo({top:0,left:G,behavior:"smooth"}):G+F>d+$&&a.scrollTo({top:0,left:G+F-$,behavior:"smooth"})}const y=H(null);let z=0,I=null;function he(t){const a=y.value;if(a){z=t.getBoundingClientRect().height;const i=`${z}px`,d=()=>{a.style.height=i,a.style.maxHeight=i};I?(d(),I(),I=null):I=d}}function ge(t){const a=y.value;if(a){const i=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${i}px`,a.style.height=`${Math.max(z,i)}px`};I?(I(),I=null,d()):I=d}}function me(){const t=y.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:i,height:d}=a;i!==void 0&&(t.style.maxHeight=i),d!==void 0&&(t.style.height=d)}}}const le={value:[]},se=H("next");function de(t){const a=W.value;let i="next";for(const d of le.value){if(d===a)break;if(d===t){i="prev";break}}se.value=i,D(t)}function D(t){const{onActiveNameChange:a,onUpdateValue:i,"onUpdate:value":d}=e;a&&pe(a,t),i&&pe(i,t),d&&pe(d,t),N.value=t}function Ye(t){const{onClose:a}=e;a&&pe(a,t)}function Le(){const{value:t}=_;if(!t)return;const a="transition-disabled";t.classList.add(a),ee(),t.classList.remove(a)}const te=H(null);function xe({transitionDisabled:t}){const a=m.value;if(!a)return;t&&a.classList.add("transition-disabled");const i=A();i&&te.value&&(te.value.style.width=`${i.offsetWidth}px`,te.value.style.height=`${i.offsetHeight}px`,te.value.style.transform=`translateX(${i.offsetLeft-Ut(getComputedStyle(a).paddingLeft)}px)`,t&&te.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ue([W],()=>{e.type==="segment"&&Ce(()=>{xe({transitionDisabled:!1})})}),Ue(()=>{e.type==="segment"&&xe({transitionDisabled:!0})});let $e=0;function qe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||$e===t.contentRect.width)return;$e=t.contentRect.width;const{type:i}=e;if((i==="line"||i==="bar")&&Le(),i!=="segment"){const{placement:d}=e;ye((d==="top"||d==="bottom"?(a=g.value)===null||a===void 0?void 0:a.$el:k.value)||null)}}const Je=Pe(qe,64);ue([()=>e.justifyContent,()=>e.size],()=>{Ce(()=>{const{type:t}=e;(t==="line"||t==="bar")&&Le()})});const ae=H(!1);function Qe(t){var a;const{target:i,contentRect:{width:d,height:$}}=t,G=i.parentElement.parentElement.offsetWidth,F=i.parentElement.parentElement.offsetHeight,{placement:ne}=e;if(!ae.value)ne==="top"||ne==="bottom"?G<d&&(ae.value=!0):F<$&&(ae.value=!0);else{const{value:oe}=B;if(!oe)return;ne==="top"||ne==="bottom"?G-d>oe.$el.offsetWidth&&(ae.value=!1):F-$>oe.$el.offsetHeight&&(ae.value=!1)}ye(((a=g.value)===null||a===void 0?void 0:a.$el)||null)}const Ze=Pe(Qe,64);function et(){const{onAdd:t}=e;t&&t(),Ce(()=>{const a=A(),{value:i}=g;!a||!i||i.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function ye(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:i,scrollWidth:d,offsetWidth:$}=t;C.value=i<=0,x.value=i+$>=d}else{const{scrollTop:i,scrollHeight:d,offsetHeight:$}=t;C.value=i<=0,x.value=i+$>=d}}const tt=Pe(t=>{ye(t.target)},64);Dt(Re,{triggerRef:U(e,"trigger"),tabStyleRef:U(e,"tabStyle"),tabClassRef:U(e,"tabClass"),addTabStyleRef:U(e,"addTabStyle"),addTabClassRef:U(e,"addTabClass"),paneClassRef:U(e,"paneClass"),paneStyleRef:U(e,"paneStyle"),mergedClsPrefixRef:h,typeRef:U(e,"type"),closableRef:U(e,"closable"),valueRef:W,tabChangeIdRef:u,onBeforeLeaveRef:U(e,"onBeforeLeave"),activateTab:de,handleClose:Ye,handleAdd:et}),Gt(()=>{ee(),v()}),Ft(()=>{const{value:t}=E;if(!t)return;const{value:a}=h,i=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;C.value?t.classList.remove(i):t.classList.add(i),x.value?t.classList.remove(d):t.classList.add(d)});const at={syncBarPosition:()=>{ee()}},rt=()=>{xe({transitionDisabled:!0})},Be=fe(()=>{const{value:t}=R,{type:a}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${i}`,{self:{barColor:$,closeIconColor:G,closeIconColorHover:F,closeIconColorPressed:ne,tabColor:oe,tabBorderColor:nt,paneTextColor:ot,tabFontWeight:it,tabBorderRadius:lt,tabFontWeightActive:st,colorSegment:dt,fontWeightStrong:ct,tabColorSegment:bt,closeSize:pt,closeIconSize:ft,closeColorHover:ut,closeColorPressed:vt,closeBorderRadius:ht,[X("panePadding",t)]:ce,[X("tabPadding",d)]:gt,[X("tabPaddingVertical",d)]:mt,[X("tabGap",d)]:xt,[X("tabGap",`${d}Vertical`)]:yt,[X("tabTextColor",a)]:_t,[X("tabTextColorActive",a)]:wt,[X("tabTextColorHover",a)]:Ct,[X("tabTextColorDisabled",a)]:St,[X("tabFontSize",t)]:Tt},common:{cubicBezierEaseInOut:Pt}}=w.value;return{"--n-bezier":Pt,"--n-color-segment":dt,"--n-bar-color":$,"--n-tab-font-size":Tt,"--n-tab-text-color":_t,"--n-tab-text-color-active":wt,"--n-tab-text-color-disabled":St,"--n-tab-text-color-hover":Ct,"--n-pane-text-color":ot,"--n-tab-border-color":nt,"--n-tab-border-radius":lt,"--n-close-size":pt,"--n-close-icon-size":ft,"--n-close-color-hover":ut,"--n-close-color-pressed":vt,"--n-close-border-radius":ht,"--n-close-icon-color":G,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":ne,"--n-tab-color":oe,"--n-tab-font-weight":it,"--n-tab-font-weight-active":st,"--n-tab-padding":gt,"--n-tab-padding-vertical":mt,"--n-tab-gap":xt,"--n-tab-gap-vertical":yt,"--n-pane-padding-left":be(ce,"left"),"--n-pane-padding-right":be(ce,"right"),"--n-pane-padding-top":be(ce,"top"),"--n-pane-padding-bottom":be(ce,"bottom"),"--n-font-weight-strong":ct,"--n-tab-color-segment":bt}}),re=f?Nt("tabs",fe(()=>`${R.value[0]}${e.type[0]}`),Be,e):void 0;return Object.assign({mergedClsPrefix:h,mergedValue:W,renderedNames:new Set,segmentCapsuleElRef:te,tabsPaneWrapperRef:y,tabsElRef:m,barElRef:_,addTabInstRef:B,xScrollInstRef:g,scrollWrapperElRef:E,addTabFixed:ae,tabWrapperStyle:b,handleNavResize:Je,mergedSize:R,handleScroll:tt,handleTabsResize:Ze,cssVars:f?void 0:Be,themeClass:re?.themeClass,animationDirection:se,renderNameListRef:le,yScrollElRef:k,handleSegmentResize:rt,onAnimationBeforeLeave:he,onAnimationEnter:ge,onAnimationAfterEnter:me,onRender:re?.onRender},at)},render(){const{mergedClsPrefix:e,type:r,placement:n,addTabFixed:p,addable:s,mergedSize:S,renderNameListRef:h,onRender:f,paneWrapperClass:w,paneWrapperStyle:m,$slots:{default:_,prefix:E,suffix:B}}=this;f?.();const g=_?_e(_()).filter(u=>u.type.__TAB_PANE__===!0):[],k=_?_e(_()).filter(u=>u.type.__TAB__===!0):[],C=!k.length,x=r==="card",R=r==="segment",L=!x&&!R&&this.justifyContent;h.value=[];const N=()=>{const u=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},L?null:c("div",{class:`${e}-tabs-scroll-padding`,style:n==="top"||n==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),C?g.map((b,A)=>(h.value.push(b.props.name),ke(c(ze,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:A!==0&&(!L||L==="center"||L==="start"||L==="end")}),b.children?{default:b.children.tab}:void 0)))):k.map((b,A)=>(h.value.push(b.props.name),ke(A!==0&&!L?je(b):b))),!p&&s&&x?Oe(s,(C?g.length:k.length)!==0):null,L?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},x&&s?c(we,{onResize:this.handleTabsResize},{default:()=>u}):u,x?c("div",{class:`${e}-tabs-pad`}):null,x?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},W=R?"top":n;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${S}-size`,L&&`${e}-tabs--flex`,`${e}-tabs--${W}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${W}`,`${e}-tabs-nav`]},Ee(E,u=>u&&c("div",{class:`${e}-tabs-nav__prefix`},u)),R?c(we,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),C?g.map((u,b)=>(h.value.push(u.props.name),c(ze,Object.assign({},u.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),u.children?{default:u.children.tab}:void 0))):k.map((u,b)=>(h.value.push(u.props.name),b===0?u:je(u))))}):c(we,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(W)?c(xa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:N}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},N()))}),p&&s&&x?Oe(s,!0):null,Ee(B,u=>u&&c("div",{class:`${e}-tabs-nav__suffix`},u))),C&&(this.animated&&(W==="top"||W==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,w]},Ie(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ie(g,this.mergedValue,this.renderedNames)))}});function Ie(e,r,n,p,s,S,h){const f=[];return e.forEach(w=>{const{name:m,displayDirective:_,"display-directive":E}=w.props,B=k=>_===k||E===k,g=r===m;if(w.key!==void 0&&(w.key=m),g||B("show")||B("show:lazy")&&n.has(m)){n.has(m)||n.add(m);const k=!B("if");f.push(k?Xt(w,[[qt,g]]):w)}}),h?c(Kt,{name:`${h}-transition`,onBeforeLeave:p,onEnter:s,onAfterEnter:S},{default:()=>f}):f}function Oe(e,r){return c(ze,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function je(e){const r=Yt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function ke(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Ga={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fa=j({name:"Archive",render:function(r,n){return O(),q("svg",Ga,n[0]||(n[0]=[T("path",{d:"M64 164v244a56 56 0 0 0 56 56h272a56 56 0 0 0 56-56V164a4 4 0 0 0-4-4H68a4 4 0 0 0-4 4zm267 151.63l-63.69 63.68a16 16 0 0 1-22.62 0L181 315.63c-6.09-6.09-6.65-16-.85-22.38a16 16 0 0 1 23.16-.56L240 329.37V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v105.37l36.69-36.68a16 16 0 0 1 23.16.56c5.8 6.37 5.24 16.29-.85 22.38z",fill:"currentColor"},null,-1),T("rect",{x:"32",y:"48",width:"448",height:"80",rx:"32",ry:"32",fill:"currentColor"},null,-1)]))}}),Na={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ua=j({name:"Gift",render:function(r,n){return O(),q("svg",Na,n[0]||(n[0]=[Jt('<path d="M200 144h40v-40a40 40 0 1 0-40 40z" fill="none"></path><path d="M352 104a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40z" fill="none"></path><path d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8z" fill="currentColor"></path><path d="M240 252V144h32v108a4 4 0 0 0 4 4h140a47.93 47.93 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82A72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.93 47.93 0 0 0 96 256h140a4 4 0 0 0 4-4zm32-148a40 40 0 1 1 40 40h-40zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89z" fill="currentColor"></path><path d="M276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4z" fill="currentColor"></path>',5)]))}}),Xa={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ka=j({name:"HomeSharp",render:function(r,n){return O(),q("svg",Xa,n[0]||(n[0]=[T("path",{d:"M416 174.74V48h-80v58.45L256 32L0 272h64v208h144V320h96v160h144V272h64l-96-97.26z",fill:"currentColor"},null,-1)]))}}),Ya={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},qa=j({name:"Key",render:function(r,n){return O(),q("svg",Ya,n[0]||(n[0]=[T("path",{d:"M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32z",fill:"currentColor"},null,-1)]))}}),Ja={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qa=j({name:"LogOutSharp",render:function(r,n){return O(),q("svg",Ja,n[0]||(n[0]=[T("path",{d:"M160 240h160V96a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V272H160z",fill:"currentColor"},null,-1),T("path",{d:"M459.31 244.69L368 153.37L345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 0 0 0-22.62z",fill:"currentColor"},null,-1)]))}}),Za={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},er=j({name:"Pencil",render:function(r,n){return O(),q("svg",Za,n[0]||(n[0]=[T("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),T("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1)]))}}),tr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},De=j({name:"People",render:function(r,n){return O(),q("svg",tr,n[0]||(n[0]=[T("path",{d:"M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88z",fill:"currentColor"},null,-1),T("path",{d:"M467.83 432H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432z",fill:"currentColor"},null,-1),T("path",{d:"M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91z",fill:"currentColor"},null,-1),T("path",{d:"M212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z",fill:"currentColor"},null,-1)]))}}),ar={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},rr=j({name:"RibbonOutline",render:function(r,n){return O(),q("svg",ar,n[0]||(n[0]=[T("circle",{cx:"256",cy:"160",r:"128",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),T("path",{d:"M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),T("path",{d:"M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),T("circle",{cx:"256",cy:"160",r:"64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),nr={},or={class:"home"};function ir(e,r){return O(),q("div",or,[...r[0]||(r[0]=[T("h1",null,"Welcome to Change Password",-1),T("p",null,"This is the home page of your admin dashboard.",-1)])])}const lr=Xe(nr,[["render",ir],["__scopeId","data-v-33a01677"]]),sr={class:"logo"},dr={class:"menu"},cr={class:"right-header"},br=j({__name:"DashboardView",setup(e){const r=ea(),n=ta(),p=Qt(),s=Zt(),S=K(()=>Y(()=>import("./home-CGZtgWOw.js"),__vite__mapDeps([0,1]))),h=K(()=>Y(()=>import("./setting-DJaHbZJ2.js"),__vite__mapDeps([2,1,3,4,5,6,7,8,9,10]))),f=K(()=>Y(()=>import("./images-BhvO8gwE.js"),__vite__mapDeps([11,1,12,7,8,13,14,15]))),w=K(()=>Y(()=>import("./storages-CGr8qklf.js"),__vite__mapDeps([16,1,13,7,8,14,6]))),m=K(()=>Y(()=>import("./users-pM8awTao.js"),__vite__mapDeps([17,1,13,7,8,14,6,4,5]))),_=K(()=>Y(()=>import("./delete_record-BnbcSS97.js"),__vite__mapDeps([18,1,13,7,8,14]))),E=K(()=>Y(()=>import("./subscriptions-xFE9eoq4.js"),__vite__mapDeps([19,1,7,8,13,14,4,5]))),B=K(()=>Y(()=>import("./plans-B4lnqeM8.js"),__vite__mapDeps([20,1,13,7,8,14,4,5,6]))),g=K(()=>Y(()=>import("./orders-w6JBcgBZ.js"),__vite__mapDeps([21,1,13,7,8,14]))),k=K(()=>Y(()=>import("./license-BZn8eT5c.js"),__vite__mapDeps([22,1,8]))),C=[{label:"首页",key:"Home",icon:V(Ka)},{label:"图片管理",key:"images",icon:V(ra)},{label:"用户管理",key:"users",icon:V(De)},{label:"订单管理",key:"orders",icon:V(De)},{label:"套餐管理",key:"plans",icon:V(Ua)},{label:"订阅管理",key:"subscriptions",icon:V(rr)},{label:"删除记录",key:"delete_record",icon:V(ba)},{label:"存储管理",key:"storages",icon:V(Fa)},{label:"系统设置",key:"Setting",icon:V(fa)},{label:"授权管理",key:"license",icon:V(qa)},{label:"修改密码",key:"Password",show:!1}],x=H([]),R=H(void 0),L=H(null),N={Home:S,Setting:h,Password:lr,images:f,storages:w,users:m,delete_record:_,subscriptions:E,plans:B,orders:g,license:k},W=v=>{if(!v)return;const y=C.find(I=>I.key===v);if(!y||!N[v]){r.replace("/dashboard/Home");return}x.value.some(I=>I.key===v)||x.value.push({key:y.key,label:y.label}),R.value=v,L.value=v};function u(v){switch(console.log("handleSelect key:",v),v){case"account":r.push("/account/index");break;case"change_password":r.push("/account/change_password");break;case"logout":console.log("退出登录");break}}Ue(()=>{p.is_login().then(()=>{if(!p.isLogin){s.error("没有权限，请先登录!"),localStorage.removeItem("token"),setTimeout(()=>{r.replace("/user/login")},2e3);return}});const v=C.find(z=>z.key==="Home");v&&!x.value.some(z=>z.key==="Home")&&x.value.unshift({key:v.key,label:v.label});const y=n.params.name;y&&C.some(z=>z.key===y)?W(y):r.replace("/dashboard/Home")}),ue(()=>n.params.name,v=>{W(v)});function b(v){v!==n.params.name&&r.push(`/dashboard/${v}`)}function A(v){const y=x.value.findIndex(z=>z.key===v);if(y!==-1&&(x.value.splice(y,1),R.value===v)){let z;y<x.value.length?z=x.value[y].key:y>0?z=x.value[y-1].key:z="Home",z&&z!==n.params.name&&r.push(`/dashboard/${z}`)}}function J(v){v!==n.params.name&&r.push(`/dashboard/${v}`)}function V(v){return()=>c(aa,null,{default:()=>c(v)})}const ie={itemTextColor:"#c0c4cc",itemIconColor:"#c0c4cc",itemColorHover:"#ffffff"},ee=[{label:"用户后台",key:"account",icon:V(ha)},{label:"修改密码",key:"change_password",icon:V(er)},{label:"退出登录",key:"logout",icon:V(Qa)}];return(v,y)=>{const z=na,I=oa,he=va,ge=sa,me=la,le=ia,se=Ma,de=ua;return O(),Se(de,{"has-sider":"",position:"absolute"},{default:Q(()=>[Z(he,{class:"left-sidebar"},{default:Q(()=>[T("div",sr,[Z(z,{type:"info"},{default:Q(()=>[...y[2]||(y[2]=[T("h1",null,"后台管理",-1)])]),_:1})]),T("div",dr,[Z(I,{"theme-overrides":ie,options:C,value:L.value,"onUpdate:value":[y[0]||(y[0]=D=>L.value=D),b]},null,8,["value"])])]),_:1}),Z(de,null,{default:Q(()=>[Z(le,{class:"dashboard-header"},{default:Q(()=>[y[3]||(y[3]=T("div",{class:"left-header"},null,-1)),T("div",cr,[Z(me,{options:ee,onSelect:u},{default:Q(()=>[Z(ge,{round:"",size:"medium",src:"https://www.gravatar.com/avatar/a0cb2964dccb9e5f7bd520b021edc6ce?s=32"})]),_:1})])]),_:1}),Z(se,{class:"dashboard-content"},{default:Q(()=>[Z(We(Da),{value:R.value,"onUpdate:value":[y[1]||(y[1]=D=>R.value=D),J],type:"card",onClose:A,size:"small"},{default:Q(()=>[(O(!0),q(Fe,null,da(x.value,D=>(O(),Se(We(Ha),{key:D.key,name:D.key,tab:D.label,closable:D.key!=="Home"},{default:Q(()=>[(O(),Se(ca(N[D.key])))]),_:2},1032,["name","tab","closable"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})}}}),pr=Xe(br,[["__scopeId","data-v-7aadb18b"]]),gr=Object.freeze(Object.defineProperty({__proto__:null,default:pr},Symbol.toStringTag,{value:"Module"}));export{gr as D,Ha as _,Da as a};
