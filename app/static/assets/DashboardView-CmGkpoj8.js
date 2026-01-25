const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/assets/home-BMiXNXSV.js","static/assets/index.2026012507.js","static/assets/ImagesOutline-DCHCJszP.js","static/assets/use-locale-l9N6yk9j.js","static/assets/Spin-BWESaqNV.js","static/assets/user-BAI5x237.js","static/assets/Grid-cV6p2eWE.js","static/assets/get-slot-Bk_rJcZu.js","static/assets/Space-DjVt1oym.js","static/assets/Trash-Db0s8PlD.js","static/assets/Settings-egg4CAGM.js","static/assets/Add-ByM8zixN.js","static/assets/GradientText-BVZ2ANzV.js","static/assets/LayoutHeader-DrkBZ9kD.js","static/assets/setting-DuBqDZM3.js","static/assets/Alert-AOlgLWXU.js","static/assets/FormItem-C1zUPexp.js","static/assets/InputNumber-oTUgiiRx.js","static/assets/Input-D5tPT7tM.js","static/assets/Suffix-BD9PenNa.js","static/assets/Switch-BF3wGFch.js","static/assets/composables-BggQHlqn.js","static/assets/Select-hzcFSBOP.js","static/assets/Empty-58G1vw4j.js","static/assets/images-BqiAarPh.js","static/assets/ClipboardOutline-Dp35slit.js","static/assets/DataTable-DO4e3m9R.js","static/assets/Ellipsis-CyQkmY1A.js","static/assets/download-C2161hUv.js","static/assets/Image-CHgBFNDw.js","static/assets/storages-4CEegnhH.js","static/assets/users-BjyJGLTI.js","static/assets/delete_record-D4AtCh52.js","static/assets/subscriptions-Br7g86f-.js","static/assets/plans-DLQeFPmX.js","static/assets/orders-CoP5FsaF.js","static/assets/license-DL83d1Qz.js","static/assets/DescriptionsItem-Cn99zviM.js","static/assets/Divider-nVH3DwTB.js","static/assets/pages-3CHYvMB4.js"])))=>i.map(i=>d[i]);
import{d as O,n as c,r as H,P as zt,Q as Pt,R as ge,T as Rt,A as Lt,U as $t,V as Bt,X as Fe,Y as At,Z as Et,F as Ge,C as Mt,_ as Vt,v as ve,$ as Wt,k as o,J as s,l as z,m as W,a0 as Ht,a1 as Ce,a2 as Me,a3 as Se,p as It,D as Ne,w as he,b as Ue,a4 as Ot,a5 as K,a6 as jt,E as Y,a7 as ue,G as Dt,a8 as Ft,a9 as Gt,aa as Nt,ab as Ut,ac as ke,ad as Xt,ae as fe,c as D,a as C,o as I,K as Xe,i as Kt,x as Yt,y as Te,g as J,af as U,f as Q,u as ze,h as qt,ag as Jt,ah as X}from"./index.2026012507.js";import{c as Ve,d as Qt,b as We,e as Zt,o as ea,_ as Ke,u as ta,a as aa,N as ra,f as na,g as oa,h as ia}from"./user-BAI5x237.js";import{I as la}from"./ImagesOutline-DCHCJszP.js";import{T as sa}from"./Trash-Db0s8PlD.js";import{c as da,S as ca,_ as ba,a as pa,A as ua}from"./Settings-egg4CAGM.js";import{A as fa}from"./Add-ByM8zixN.js";import{_ as va}from"./GradientText-BVZ2ANzV.js";import{_ as ha}from"./LayoutHeader-DrkBZ9kD.js";const ga=Ve(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ve("&::-webkit-scrollbar",{width:0,height:0})]),ma=O({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=H(null);function a(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const n=zt();return ga.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Qt,ssr:n}),Object.assign({selfRef:e,handleWheel:a},{scrollTo(...l){var S;(S=e.value)===null||S===void 0||S.scrollTo(...l)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var xa=/\s/;function ya(e){for(var a=e.length;a--&&xa.test(e.charAt(a)););return a}var _a=/^\s+/;function wa(e){return e&&e.slice(0,ya(e)+1).replace(_a,"")}var He=NaN,Ca=/^[-+]0x[0-9a-f]+$/i,Sa=/^0b[01]+$/i,ka=/^0o[0-7]+$/i,Ta=parseInt;function Ie(e){if(typeof e=="number")return e;if(Pt(e))return He;if(ge(e)){var a=typeof e.valueOf=="function"?e.valueOf():e;e=ge(a)?a+"":a}if(typeof e!="string")return e===0?e:+e;e=wa(e);var n=Sa.test(e);return n||ka.test(e)?Ta(e.slice(2),n?2:8):Ca.test(e)?He:+e}var Pe=function(){return Rt.Date.now()},za="Expected a function",Pa=Math.max,Ra=Math.min;function La(e,a,n){var b,l,S,g,u,_,x=0,y=!1,M=!1,$=!0;if(typeof e!="function")throw new TypeError(za);a=Ie(a)||0,ge(n)&&(y=!!n.leading,M="maxWait"in n,S=M?Pa(Ie(n.maxWait)||0,a):S,$="trailing"in n?!!n.trailing:$);function m(p){var B=b,q=l;return b=l=void 0,x=p,g=e.apply(q,B),g}function P(p){return x=p,u=setTimeout(w,a),y?m(p):g}function k(p){var B=p-_,q=p-x,ee=a-B;return M?Ra(ee,S-q):ee}function T(p){var B=p-_,q=p-x;return _===void 0||B>=a||B<0||M&&q>=S}function w(){var p=Pe();if(T(p))return R(p);u=setTimeout(w,k(p))}function R(p){return u=void 0,$&&b?m(p):(b=l=void 0,g)}function F(){u!==void 0&&clearTimeout(u),x=0,b=_=l=u=void 0}function V(){return u===void 0?g:R(Pe())}function v(){var p=Pe(),B=T(p);if(b=arguments,l=this,_=p,B){if(u===void 0)return P(_);if(M)return clearTimeout(u),u=setTimeout(w,a),m(_)}return u===void 0&&(u=setTimeout(w,a)),g}return v.cancel=F,v.flush=V,v}var $a="Expected a function";function Ba(e,a,n){var b=!0,l=!0;if(typeof e!="function")throw new TypeError($a);return ge(n)&&(b="leading"in n?!!n.leading:b,l="trailing"in n?!!n.trailing:l),La(e,a,{leading:b,maxWait:a,trailing:l})}const Aa={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function Ea(e){const{textColor2:a,primaryColor:n,textColorDisabled:b,closeIconColor:l,closeIconColorHover:S,closeIconColorPressed:g,closeColorHover:u,closeColorPressed:_,tabColor:x,baseColor:y,dividerColor:M,fontWeight:$,textColor1:m,borderRadius:P,fontSize:k,fontWeightStrong:T}=e;return Object.assign(Object.assign({},Aa),{colorSegment:x,tabFontSizeCard:k,tabTextColorLine:m,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:b,tabTextColorSegment:m,tabTextColorActiveSegment:a,tabTextColorHoverSegment:a,tabTextColorDisabledSegment:b,tabTextColorBar:m,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:b,tabTextColorCard:m,tabTextColorHoverCard:m,tabTextColorActiveCard:n,tabTextColorDisabledCard:b,barColor:n,closeIconColor:l,closeIconColorHover:S,closeIconColorPressed:g,closeColorHover:u,closeColorPressed:_,closeBorderRadius:P,tabColor:x,tabColorSegment:y,tabBorderColor:M,tabFontWeightActive:$,tabFontWeight:$,tabBorderRadius:P,paneTextColor:a,fontWeightStrong:T})}const Ma={common:Lt,self:Ea},Va=da(!0),Be=$t("n-tabs"),Ye={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Wa=O({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ye,slots:Object,setup(e){const a=Fe(Be,null);return a||Bt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ha=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Wt(Ye,["displayDirective"])),$e=O({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ha,setup(e){const{mergedClsPrefixRef:a,valueRef:n,typeRef:b,closableRef:l,tabStyleRef:S,addTabStyleRef:g,tabClassRef:u,addTabClassRef:_,tabChangeIdRef:x,onBeforeLeaveRef:y,triggerRef:M,handleAdd:$,activateTab:m,handleClose:P}=Fe(Be);return{trigger:M,mergedClosable:ve(()=>{if(e.internalAddable)return!1;const{closable:k}=e;return k===void 0?l.value:k}),style:S,addStyle:g,tabClass:u,addTabClass:_,clsPrefix:a,value:n,type:b,handleClose(k){k.stopPropagation(),!e.disabled&&P(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){$();return}const{name:k}=e,T=++x.id;if(k!==n.value){const{value:w}=y;w?Promise.resolve(w(e.name,n.value)).then(R=>{R&&x.id===T&&m(k)}):m(k)}}}},render(){const{internalAddable:e,clsPrefix:a,name:n,disabled:b,label:l,tab:S,value:g,mergedClosable:u,trigger:_,$slots:{default:x}}=this,y=l??S;return c("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${a}-tabs-tab-pad`}):null,c("div",Object.assign({key:n,"data-name":n,"data-disabled":b?!0:void 0},At({class:[`${a}-tabs-tab`,g===n&&`${a}-tabs-tab--active`,b&&`${a}-tabs-tab--disabled`,u&&`${a}-tabs-tab--closable`,e&&`${a}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:_==="click"?this.activateTab:void 0,onMouseenter:_==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${a}-tabs-tab__label`},e?c(Ge,null,c("div",{class:`${a}-tabs-tab__height-placeholder`}," "),c(Mt,{clsPrefix:a},{default:()=>c(fa,null)})):x?x():typeof y=="object"?y:Et(y??n)),u&&this.type==="card"?c(Vt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:b}):null))}}),Ia=o("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[o("tabs-rail",[z("&.transition-disabled",[o("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[o("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[o("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
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
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[o("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),o("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
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
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[o("tabs-nav",`
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
 `,[W("prefix, suffix",`
 display: flex;
 align-items: center;
 `),W("prefix","padding-right: 16px;"),W("suffix","padding-left: 16px;")]),s("top, bottom",[z(">",[o("tabs-nav",[o("tabs-nav-scroll-wrapper",[z("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),z("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),s("left, right",[o("tabs-nav-scroll-content",`
 flex-direction: column;
 `),z(">",[o("tabs-nav",[o("tabs-nav-scroll-wrapper",[z("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),z("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),s("shadow-start",[z("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[z("&::after",`
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
 `,[z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),z("&::before, &::after",`
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
 `,[s("disabled",{cursor:"not-allowed"}),W("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W("label",`
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
 `,[z("&.transition-disabled",`
 transition: none;
 `),s("disabled",`
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
 `,[z("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),z("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),z("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),z("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),z("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),o("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),s("line-type, bar-type",[o("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[z("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),o("tabs-nav",[s("line-type",[s("top",[W("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[W("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 right: -1px;
 `)]),s("right",[W("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[W("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-bar",`
 top: -1px;
 `)]),W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),o("tabs-bar",`
 border-radius: 0;
 `)]),s("card-type",[W("prefix, suffix",`
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
 `,[s("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[W("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Ht("disabled",[z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")])]),s("left, right",`
 flex-direction: column; 
 `,[W("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),o("tabs-wrapper",`
 flex-direction: column;
 `),o("tabs-tab-wrapper",`
 flex-direction: column;
 `,[o("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),s("top",[s("card-type",[o("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),W("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[o("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),W("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[o("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),W("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[o("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),W("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),o("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),o("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Re=Ba,Oa=Object.assign(Object.assign({},Ne.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ja=O({name:"Tabs",props:Oa,slots:Object,setup(e,{slots:a}){var n,b,l,S;const{mergedClsPrefixRef:g,inlineThemeDisabled:u}=It(e),_=Ne("Tabs","-tabs",Ia,Ma,e,g),x=H(null),y=H(null),M=H(null),$=H(null),m=H(null),P=H(null),k=H(!0),T=H(!0),w=We(e,["labelSize","size"]),R=We(e,["activeName","value"]),F=H((b=(n=R.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&b!==void 0?b:a.default?(S=(l=Ce(a.default())[0])===null||l===void 0?void 0:l.props)===null||S===void 0?void 0:S.name:null),V=Zt(R,F),v={id:0},p=ve(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});he(V,()=>{v.id=0,A(),se()});function B(){var t;const{value:r}=V;return r===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${r}"]`)}function q(t){if(e.type==="card")return;const{value:r}=y;if(!r)return;const i=r.style.opacity==="0";if(t){const d=`${g.value}-tabs-bar--disabled`,{barWidth:L,placement:G}=e;if(t.dataset.disabled==="true"?r.classList.add(d):r.classList.remove(d),["top","bottom"].includes(G)){if(le(["top","maxHeight","height"]),typeof L=="number"&&t.offsetWidth>=L){const N=Math.floor((t.offsetWidth-L)/2)+t.offsetLeft;r.style.left=`${N}px`,r.style.maxWidth=`${L}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width="8192px",i&&(r.style.transition="none"),r.offsetWidth,i&&(r.style.transition="",r.style.opacity="1")}else{if(le(["left","maxWidth","width"]),typeof L=="number"&&t.offsetHeight>=L){const N=Math.floor((t.offsetHeight-L)/2)+t.offsetTop;r.style.top=`${N}px`,r.style.maxHeight=`${L}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height="8192px",i&&(r.style.transition="none"),r.offsetHeight,i&&(r.style.transition="",r.style.opacity="1")}}}function ee(){if(e.type==="card")return;const{value:t}=y;t&&(t.style.opacity="0")}function le(t){const{value:r}=y;if(r)for(const i of t)r.style[i]=""}function A(){if(e.type==="card")return;const t=B();t?q(t):ee()}function se(){var t;const r=(t=m.value)===null||t===void 0?void 0:t.$el;if(!r)return;const i=B();if(!i)return;const{scrollLeft:d,offsetWidth:L}=r,{offsetLeft:G,offsetWidth:N}=i;d>G?r.scrollTo({top:0,left:G,behavior:"smooth"}):G+N>d+L&&r.scrollTo({top:0,left:G+N-L,behavior:"smooth"})}const te=H(null);let h=0,f=null;function E(t){const r=te.value;if(r){h=t.getBoundingClientRect().height;const i=`${h}px`,d=()=>{r.style.height=i,r.style.maxHeight=i};f?(d(),f(),f=null):f=d}}function Z(t){const r=te.value;if(r){const i=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,r.style.maxHeight=`${i}px`,r.style.height=`${Math.max(h,i)}px`};f?(f(),f=null,d()):f=d}}function me(){const t=te.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:r}=e;if(typeof r=="string")t.style.cssText=r;else if(r){const{maxHeight:i,height:d}=r;i!==void 0&&(t.style.maxHeight=i),d!==void 0&&(t.style.height=d)}}}const de={value:[]},ce=H("next");function xe(t){const r=V.value;let i="next";for(const d of de.value){if(d===r)break;if(d===t){i="prev";break}}ce.value=i,ye(t)}function ye(t){const{onActiveNameChange:r,onUpdateValue:i,"onUpdate:value":d}=e;r&&fe(r,t),i&&fe(i,t),d&&fe(d,t),F.value=t}function be(t){const{onClose:r}=e;r&&fe(r,t)}function j(){const{value:t}=y;if(!t)return;const r="transition-disabled";t.classList.add(r),A(),t.classList.remove(r)}const ae=H(null);function _e({transitionDisabled:t}){const r=x.value;if(!r)return;t&&r.classList.add("transition-disabled");const i=B();i&&ae.value&&(ae.value.style.width=`${i.offsetWidth}px`,ae.value.style.height=`${i.offsetHeight}px`,ae.value.style.transform=`translateX(${i.offsetLeft-Ft(getComputedStyle(r).paddingLeft)}px)`,t&&ae.value.offsetWidth),t&&r.classList.remove("transition-disabled")}he([V],()=>{e.type==="segment"&&ke(()=>{_e({transitionDisabled:!1})})}),Ue(()=>{e.type==="segment"&&_e({transitionDisabled:!0})});let Ae=0;function qe(t){var r;if(t.contentRect.width===0&&t.contentRect.height===0||Ae===t.contentRect.width)return;Ae=t.contentRect.width;const{type:i}=e;if((i==="line"||i==="bar")&&j(),i!=="segment"){const{placement:d}=e;we((d==="top"||d==="bottom"?(r=m.value)===null||r===void 0?void 0:r.$el:P.value)||null)}}const Je=Re(qe,64);he([()=>e.justifyContent,()=>e.size],()=>{ke(()=>{const{type:t}=e;(t==="line"||t==="bar")&&j()})});const re=H(!1);function Qe(t){var r;const{target:i,contentRect:{width:d,height:L}}=t,G=i.parentElement.parentElement.offsetWidth,N=i.parentElement.parentElement.offsetHeight,{placement:oe}=e;if(!re.value)oe==="top"||oe==="bottom"?G<d&&(re.value=!0):N<L&&(re.value=!0);else{const{value:ie}=$;if(!ie)return;oe==="top"||oe==="bottom"?G-d>ie.$el.offsetWidth&&(re.value=!1):N-L>ie.$el.offsetHeight&&(re.value=!1)}we(((r=m.value)===null||r===void 0?void 0:r.$el)||null)}const Ze=Re(Qe,64);function et(){const{onAdd:t}=e;t&&t(),ke(()=>{const r=B(),{value:i}=m;!r||!i||i.scrollTo({left:r.offsetLeft,top:0,behavior:"smooth"})})}function we(t){if(!t)return;const{placement:r}=e;if(r==="top"||r==="bottom"){const{scrollLeft:i,scrollWidth:d,offsetWidth:L}=t;k.value=i<=0,T.value=i+L>=d}else{const{scrollTop:i,scrollHeight:d,offsetHeight:L}=t;k.value=i<=0,T.value=i+L>=d}}const tt=Re(t=>{we(t.target)},64);Ot(Be,{triggerRef:K(e,"trigger"),tabStyleRef:K(e,"tabStyle"),tabClassRef:K(e,"tabClass"),addTabStyleRef:K(e,"addTabStyle"),addTabClassRef:K(e,"addTabClass"),paneClassRef:K(e,"paneClass"),paneStyleRef:K(e,"paneStyle"),mergedClsPrefixRef:g,typeRef:K(e,"type"),closableRef:K(e,"closable"),valueRef:V,tabChangeIdRef:v,onBeforeLeaveRef:K(e,"onBeforeLeave"),activateTab:xe,handleClose:be,handleAdd:et}),ea(()=>{A(),se()}),jt(()=>{const{value:t}=M;if(!t)return;const{value:r}=g,i=`${r}-tabs-nav-scroll-wrapper--shadow-start`,d=`${r}-tabs-nav-scroll-wrapper--shadow-end`;k.value?t.classList.remove(i):t.classList.add(i),T.value?t.classList.remove(d):t.classList.add(d)});const at={syncBarPosition:()=>{A()}},rt=()=>{_e({transitionDisabled:!0})},Ee=ve(()=>{const{value:t}=w,{type:r}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[r],d=`${t}${i}`,{self:{barColor:L,closeIconColor:G,closeIconColorHover:N,closeIconColorPressed:oe,tabColor:ie,tabBorderColor:nt,paneTextColor:ot,tabFontWeight:it,tabBorderRadius:lt,tabFontWeightActive:st,colorSegment:dt,fontWeightStrong:ct,tabColorSegment:bt,closeSize:pt,closeIconSize:ut,closeColorHover:ft,closeColorPressed:vt,closeBorderRadius:ht,[Y("panePadding",t)]:pe,[Y("tabPadding",d)]:gt,[Y("tabPaddingVertical",d)]:mt,[Y("tabGap",d)]:xt,[Y("tabGap",`${d}Vertical`)]:yt,[Y("tabTextColor",r)]:_t,[Y("tabTextColorActive",r)]:wt,[Y("tabTextColorHover",r)]:Ct,[Y("tabTextColorDisabled",r)]:St,[Y("tabFontSize",t)]:kt},common:{cubicBezierEaseInOut:Tt}}=_.value;return{"--n-bezier":Tt,"--n-color-segment":dt,"--n-bar-color":L,"--n-tab-font-size":kt,"--n-tab-text-color":_t,"--n-tab-text-color-active":wt,"--n-tab-text-color-disabled":St,"--n-tab-text-color-hover":Ct,"--n-pane-text-color":ot,"--n-tab-border-color":nt,"--n-tab-border-radius":lt,"--n-close-size":pt,"--n-close-icon-size":ut,"--n-close-color-hover":ft,"--n-close-color-pressed":vt,"--n-close-border-radius":ht,"--n-close-icon-color":G,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":oe,"--n-tab-color":ie,"--n-tab-font-weight":it,"--n-tab-font-weight-active":st,"--n-tab-padding":gt,"--n-tab-padding-vertical":mt,"--n-tab-gap":xt,"--n-tab-gap-vertical":yt,"--n-pane-padding-left":ue(pe,"left"),"--n-pane-padding-right":ue(pe,"right"),"--n-pane-padding-top":ue(pe,"top"),"--n-pane-padding-bottom":ue(pe,"bottom"),"--n-font-weight-strong":ct,"--n-tab-color-segment":bt}}),ne=u?Dt("tabs",ve(()=>`${w.value[0]}${e.type[0]}`),Ee,e):void 0;return Object.assign({mergedClsPrefix:g,mergedValue:V,renderedNames:new Set,segmentCapsuleElRef:ae,tabsPaneWrapperRef:te,tabsElRef:x,barElRef:y,addTabInstRef:$,xScrollInstRef:m,scrollWrapperElRef:M,addTabFixed:re,tabWrapperStyle:p,handleNavResize:Je,mergedSize:w,handleScroll:tt,handleTabsResize:Ze,cssVars:u?void 0:Ee,themeClass:ne?.themeClass,animationDirection:ce,renderNameListRef:de,yScrollElRef:P,handleSegmentResize:rt,onAnimationBeforeLeave:E,onAnimationEnter:Z,onAnimationAfterEnter:me,onRender:ne?.onRender},at)},render(){const{mergedClsPrefix:e,type:a,placement:n,addTabFixed:b,addable:l,mergedSize:S,renderNameListRef:g,onRender:u,paneWrapperClass:_,paneWrapperStyle:x,$slots:{default:y,prefix:M,suffix:$}}=this;u?.();const m=y?Ce(y()).filter(v=>v.type.__TAB_PANE__===!0):[],P=y?Ce(y()).filter(v=>v.type.__TAB__===!0):[],k=!P.length,T=a==="card",w=a==="segment",R=!T&&!w&&this.justifyContent;g.value=[];const F=()=>{const v=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},R?null:c("div",{class:`${e}-tabs-scroll-padding`,style:n==="top"||n==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),k?m.map((p,B)=>(g.value.push(p.props.name),Le(c($e,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:B!==0&&(!R||R==="center"||R==="start"||R==="end")}),p.children?{default:p.children.tab}:void 0)))):P.map((p,B)=>(g.value.push(p.props.name),Le(B!==0&&!R?De(p):p))),!b&&l&&T?je(l,(k?m.length:P.length)!==0):null,R?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T&&l?c(Se,{onResize:this.handleTabsResize},{default:()=>v}):v,T?c("div",{class:`${e}-tabs-pad`}):null,T?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},V=w?"top":n;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${a}-type`,`${e}-tabs--${S}-size`,R&&`${e}-tabs--flex`,`${e}-tabs--${V}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${a}-type`,`${e}-tabs-nav--${V}`,`${e}-tabs-nav`]},Me(M,v=>v&&c("div",{class:`${e}-tabs-nav__prefix`},v)),w?c(Se,{onResize:this.handleSegmentResize},{default:()=>c("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},c("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},c("div",{class:`${e}-tabs-wrapper`},c("div",{class:`${e}-tabs-tab`}))),k?m.map((v,p)=>(g.value.push(v.props.name),c($e,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:p!==0}),v.children?{default:v.children.tab}:void 0))):P.map((v,p)=>(g.value.push(v.props.name),p===0?v:De(v))))}):c(Se,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(V)?c(ma,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:F}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},F()))}),b&&l&&T?je(l,!0):null,Me($,v=>v&&c("div",{class:`${e}-tabs-nav__suffix`},v))),k&&(this.animated&&(V==="top"||V==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,_]},Oe(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Oe(m,this.mergedValue,this.renderedNames)))}});function Oe(e,a,n,b,l,S,g){const u=[];return e.forEach(_=>{const{name:x,displayDirective:y,"display-directive":M}=_.props,$=P=>y===P||M===P,m=a===x;if(_.key!==void 0&&(_.key=x),m||$("show")||$("show:lazy")&&n.has(x)){n.has(x)||n.add(x);const P=!$("if");u.push(P?Gt(_,[[Xt,m]]):_)}}),g?c(Nt,{name:`${g}-transition`,onBeforeLeave:b,onEnter:l,onAfterEnter:S},{default:()=>u}):u}function je(e,a){return c($e,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof e=="object"&&e.disabled})}function De(e){const a=Ut(e);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function Le(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Da={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fa=O({name:"Book",render:function(a,n){return I(),D("svg",Da,n[0]||(n[0]=[C("path",{d:"M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74z",fill:"currentColor"},null,-1),C("path",{d:"M481.92 53.3A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61z",fill:"currentColor"},null,-1)]))}}),Ga={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Na=O({name:"FileTrayFull",render:function(a,n){return I(),D("svg",Ga,n[0]||(n[0]=[C("path",{d:"M479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.65 16.65 0 0 0-.34-3.3zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82z",fill:"currentColor"},null,-1),C("path",{d:"M368 160H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32z",fill:"currentColor"},null,-1),C("path",{d:"M384 224H128a16 16 0 0 1 0-32h256a16 16 0 0 1 0 32z",fill:"currentColor"},null,-1)]))}}),Ua={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Xa=O({name:"Gift",render:function(a,n){return I(),D("svg",Ua,n[0]||(n[0]=[Xe('<path d="M200 144h40v-40a40 40 0 1 0-40 40z" fill="none"></path><path d="M352 104a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40z" fill="none"></path><path d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8z" fill="currentColor"></path><path d="M240 252V144h32v108a4 4 0 0 0 4 4h140a47.93 47.93 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82A72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.93 47.93 0 0 0 96 256h140a4 4 0 0 0 4-4zm32-148a40 40 0 1 1 40 40h-40zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89z" fill="currentColor"></path><path d="M276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4z" fill="currentColor"></path>',5)]))}}),Ka={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ya=O({name:"HomeSharp",render:function(a,n){return I(),D("svg",Ka,n[0]||(n[0]=[C("path",{d:"M416 174.74V48h-80v58.45L256 32L0 272h64v208h144V320h96v160h144V272h64l-96-97.26z",fill:"currentColor"},null,-1)]))}}),qa={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ja=O({name:"Key",render:function(a,n){return I(),D("svg",qa,n[0]||(n[0]=[C("path",{d:"M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32z",fill:"currentColor"},null,-1)]))}}),Qa={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Za=O({name:"ListOutline",render:function(a,n){return I(),D("svg",Qa,n[0]||(n[0]=[Xe('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 144h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 256h288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368h288"></path><circle cx="80" cy="144" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="80" cy="256" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>',6)]))}}),er={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},tr=O({name:"LogOutSharp",render:function(a,n){return I(),D("svg",er,n[0]||(n[0]=[C("path",{d:"M160 240h160V96a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V272H160z",fill:"currentColor"},null,-1),C("path",{d:"M459.31 244.69L368 153.37L345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 0 0 0-22.62z",fill:"currentColor"},null,-1)]))}}),ar={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},rr=O({name:"Pencil",render:function(a,n){return I(),D("svg",ar,n[0]||(n[0]=[C("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44",d:"M358.62 129.28L86.49 402.08L70 442l39.92-16.49l272.8-272.13l-24.1-24.1z"},null,-1),C("path",{d:"M413.07 74.84l-11.79 11.78l24.1 24.1l11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"44"},null,-1)]))}}),nr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},or=O({name:"People",render:function(a,n){return I(),D("svg",nr,n[0]||(n[0]=[C("path",{d:"M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88z",fill:"currentColor"},null,-1),C("path",{d:"M467.83 432H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432z",fill:"currentColor"},null,-1),C("path",{d:"M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91z",fill:"currentColor"},null,-1),C("path",{d:"M212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z",fill:"currentColor"},null,-1)]))}}),ir={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},lr=O({name:"RibbonOutline",render:function(a,n){return I(),D("svg",ir,n[0]||(n[0]=[C("circle",{cx:"256",cy:"160",r:"128",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),C("path",{d:"M143.65 227.82L48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),C("path",{d:"M366.54 224L464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),C("circle",{cx:"256",cy:"160",r:"64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),sr={},dr={class:"home"};function cr(e,a){return I(),D("div",dr,[...a[0]||(a[0]=[C("h1",null,"Welcome to Change Password",-1),C("p",null,"This is the home page of your admin dashboard.",-1)])])}const br=Ke(sr,[["render",cr],["__scopeId","data-v-33a01677"]]),pr={class:"logo"},ur={class:"menu"},fr={class:"right-header"},vr=O({__name:"DashboardView",setup(e){const a=Kt(),n=Yt(),b=ta(),l=aa(),S=U(()=>X(()=>import("./home-BMiXNXSV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),g=U(()=>X(()=>import("./setting-DuBqDZM3.js"),__vite__mapDeps([14,1,5,15,16,17,18,3,19,11,8,7,20,21,22,23,2,9,10,12,13]))),u=U(()=>X(()=>import("./images-BqiAarPh.js"),__vite__mapDeps([24,1,25,5,22,19,23,3,18,26,27,7,28,29,8]))),_=U(()=>X(()=>import("./storages-4CEegnhH.js"),__vite__mapDeps([30,1,5,21,15,26,27,7,19,22,23,3,18,28,16,20,8]))),x=U(()=>X(()=>import("./users-BjyJGLTI.js"),__vite__mapDeps([31,1,5,21,18,3,19,26,27,7,22,23,28,4,16,20,17,11]))),y=U(()=>X(()=>import("./delete_record-D4AtCh52.js"),__vite__mapDeps([32,1,5,18,3,19,26,27,7,22,23,28]))),M=U(()=>X(()=>import("./subscriptions-Br7g86f-.js"),__vite__mapDeps([33,1,3,5,22,19,23,26,27,7,18,28,16,17,11]))),$=U(()=>X(()=>import("./plans-DLQeFPmX.js"),__vite__mapDeps([34,1,5,26,27,7,19,22,23,3,18,28,16,17,11,20,8]))),m=U(()=>X(()=>import("./orders-CoP5FsaF.js"),__vite__mapDeps([35,1,5,18,3,19,26,27,7,22,23,28,8]))),P=U(()=>X(()=>import("./license-DL83d1Qz.js"),__vite__mapDeps([36,1,23,3,5,4,37,7,8,38,18,19]))),k=U(()=>X(()=>import("./pages-3CHYvMB4.js"),__vite__mapDeps([39,1,5,26,27,7,19,22,23,3,18,28,16,8]))),T=[{label:"后台首页",key:"Home",icon:A(Ya)},{label:"图片管理",key:"images",icon:A(la)},{label:"用户管理",key:"users",icon:A(or)},{label:"订单管理",key:"orders",icon:A(Za)},{label:"套餐管理",key:"plans",icon:A(Xa)},{label:"订阅管理",key:"subscriptions",icon:A(lr)},{label:"页面管理",key:"pages",icon:A(Fa)},{label:"删除记录",key:"delete_record",icon:A(sa)},{label:"存储管理",key:"storages",icon:A(Na)},{label:"系统设置",key:"Setting",icon:A(ca)},{label:"授权管理",key:"license",icon:A(Ja)},{label:"修改密码",key:"Password",show:!1}],w=H([]),R=H(void 0),F=H(null),V={Home:S,Setting:g,Password:br,images:u,storages:_,users:x,delete_record:y,subscriptions:M,plans:$,orders:m,license:P,pages:k},v=h=>{if(!h)return;const f=T.find(Z=>Z.key===h);if(!f||!V[h]){a.replace("/dashboard/Home");return}w.value.some(Z=>Z.key===h)||w.value.push({key:f.key,label:f.label}),R.value=h,F.value=h};function p(h){switch(console.log("handleSelect key:",h),h){case"account":a.push("/account/index");break;case"change_password":a.push("/account/change_password");break;case"logout":B();break}}const B=()=>{b.logout().then(()=>{l.success("已退出登录"),setTimeout(()=>{a.push("/")},1500)})};Ue(()=>{b.get_user_info(),b.is_login().then(()=>{if(!b.isLogin){l.error("没有权限，请先登录!"),localStorage.removeItem("token"),setTimeout(()=>{a.replace("/user/login")},2e3);return}});const h=T.find(E=>E.key==="Home");h&&!w.value.some(E=>E.key==="Home")&&w.value.unshift({key:h.key,label:h.label});const f=n.params.name;f&&T.some(E=>E.key===f)?v(f):a.replace("/dashboard/Home")}),he(()=>n.params.name,h=>{v(h)});function q(h){h!==n.params.name&&a.push(`/dashboard/${h}`)}function ee(h){const f=w.value.findIndex(E=>E.key===h);if(f!==-1&&(w.value.splice(f,1),R.value===h)){let E;f<w.value.length?E=w.value[f].key:f>0?E=w.value[f-1].key:E="Home",E&&E!==n.params.name&&a.push(`/dashboard/${E}`)}}function le(h){h!==n.params.name&&a.push(`/dashboard/${h}`)}function A(h){return()=>c(ra,null,{default:()=>c(h)})}const se={itemTextColor:"#c0c4cc",itemIconColor:"#c0c4cc",itemColorHover:"#ffffff"},te=[{label:"用户后台",key:"account",icon:A(ua)},{label:"修改密码",key:"change_password",icon:A(rr)},{label:"退出登录",key:"logout",icon:A(tr)}];return(h,f)=>{const E=va,Z=na,me=pa,de=ia,ce=oa,xe=ha,ye=Va,be=ba;return I(),Te(be,{"has-sider":"",position:"absolute"},{default:J(()=>[Q(me,{class:"left-sidebar"},{default:J(()=>[C("div",pr,[Q(E,{type:"info"},{default:J(()=>[...f[2]||(f[2]=[C("h1",null,"后台管理",-1)])]),_:1})]),C("div",ur,[Q(Z,{"theme-overrides":se,options:T,value:F.value,"onUpdate:value":[f[0]||(f[0]=j=>F.value=j),q]},null,8,["value"])])]),_:1}),Q(be,null,{default:J(()=>[Q(xe,{class:"dashboard-header"},{default:J(()=>[f[3]||(f[3]=C("div",{class:"left-header"},null,-1)),C("div",fr,[Q(ce,{options:te,onSelect:p},{default:J(()=>[Q(de,{round:"",size:"medium",src:ze(b).userInfo.avatar_url},null,8,["src"])]),_:1})])]),_:1}),Q(ye,{class:"dashboard-content"},{default:J(()=>[Q(ze(ja),{value:R.value,"onUpdate:value":[f[1]||(f[1]=j=>R.value=j),le],type:"card",onClose:ee,size:"small"},{default:J(()=>[(I(!0),D(Ge,null,qt(w.value,j=>(I(),Te(ze(Wa),{key:j.key,name:j.key,tab:j.label,closable:j.key!=="Home","display-directive":"show:lazy"},{default:J(()=>[(I(),Te(Jt(V[j.key]),{key:j.key}))]),_:2},1032,["name","tab","closable"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})}}}),hr=Ke(vr,[["__scopeId","data-v-7536e001"]]),kr=Object.freeze(Object.defineProperty({__proto__:null,default:hr},Symbol.toStringTag,{value:"Module"}));export{kr as D,Wa as _,ja as a,Ie as t};
