import{aR as yt,n as k,r as K,az as wt,S as He,aS as ye,h as n,p as v,w as Be,q as P,s as L,v as X,d as H,z as we,aT as xt,aj as Ve,G as _e,aU as Ct,f as We,aV as Rt,aW as St,aX as $t,g as qe,j as de,aY as kt,aZ as se,m as Pe,V as _t,a_ as ge,E as Xe,H as F,a$ as Ye,x as Bt,ai as Pt,Q as Te,b0 as Tt,b1 as zt,N as Z,b2 as Ke,b3 as Qe,b4 as Je,b5 as Ze,aP as oe,A as xe,K as ze,M as et,b6 as De,b7 as Dt,t as Ce,b8 as tt,b9 as Ie,am as re,ba as It,bb as Lt,J as Nt,bc as Ot,bd as Ft,be as Ut,F as $e,bf as jt,C as Et,bg as Le,R as Mt,U as Ne,W as J,X as $,Y as G,D as Gt,$ as At,a0 as Ht,a8 as z,bh as Vt,a5 as _,ae as I,ax as Wt,bi as qt,aA as Oe,a4 as ne,aB as ce,aq as q,bj as Xt,a3 as me,aF as Yt,af as Kt,at as fe,aC as ve,ac as Qt,bk as Jt,ap as Zt,_ as er}from"./index.2026010903.js";import{a as tr,D as rr,N as or}from"./Image-BD3oqrVe.js";import{d as nr}from"./download-C2161hUv.js";import{A as ir}from"./Add-DKPyegP8.js";import{T as lr}from"./Trash-_QCUiGFO.js";import{N as Re}from"./Switch-C0Xpqub-.js";import{N as ar}from"./Select-C7GwHtkt.js";import{N as sr}from"./Alert-K4nxSS4B.js";import"./Empty-Dtprdsyr.js";function dr(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[o,i]=r.split(":");i===void 0?t[""]=o:t[o]=i}),t}function ie(e,t){var r;if(e==null)return;const o=dr(e);if(t===void 0)return o[""];if(typeof t=="string")return(r=o[t])!==null&&r!==void 0?r:o[""];if(Array.isArray(t)){for(let i=t.length-1;i>=0;--i){const l=t[i];if(l in o)return o[l]}return o[""]}else{let i,l=-1;return Object.keys(o).forEach(a=>{const u=Number(a);!Number.isNaN(u)&&t>=u&&u>=l&&(l=u,i=o[a])}),i}}const ur={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function cr(e){return`(min-width: ${e}px)`}const pe={};function fr(e=ur){if(!yt)return k(()=>[]);if(typeof window.matchMedia!="function")return k(()=>[]);const t=K({}),r=Object.keys(e),o=(i,l)=>{i.matches?t.value[l]=!0:t.value[l]=!1};return r.forEach(i=>{const l=e[i];let a,u;pe[l]===void 0?(a=window.matchMedia(cr(l)),a.addEventListener?a.addEventListener("change",c=>{u.forEach(f=>{f(c,i)})}):a.addListener&&a.addListener(c=>{u.forEach(f=>{f(c,i)})}),u=new Set,pe[l]={mql:a,cbs:u}):(a=pe[l].mql,u=pe[l].cbs),u.add(o),a.matches&&u.forEach(c=>{c(a,i)})}),wt(()=>{r.forEach(i=>{const{cbs:l}=pe[e[i]];l.has(o)&&l.delete(o)})}),k(()=>{const{value:i}=t;return r.filter(l=>i[l])})}function pr(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:o})=>o===He);return!!(r&&r.value===!1)}const gr=ye("attach",()=>n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),hr=ye("cancel",()=>n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),mr=ye("retry",()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),n("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),vr=ye("trash",()=>n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),n("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),n("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),n("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),U="0!important",rt="-1px!important";function le(e){return P(`${e}-type`,[L("& +",[v("button",{},[P(`${e}-type`,[X("border",{borderLeftWidth:U}),X("state-border",{left:rt})])])])])}function ae(e){return P(`${e}-type`,[L("& +",[v("button",[P(`${e}-type`,[X("border",{borderTopWidth:U}),X("state-border",{top:rt})])])])])}const br=v("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[Be("vertical",{flexDirection:"row"},[Be("rtl",[v("button",[L("&:first-child:not(:last-child)",`
 margin-right: ${U};
 border-top-right-radius: ${U};
 border-bottom-right-radius: ${U};
 `),L("&:last-child:not(:first-child)",`
 margin-left: ${U};
 border-top-left-radius: ${U};
 border-bottom-left-radius: ${U};
 `),L("&:not(:first-child):not(:last-child)",`
 margin-left: ${U};
 margin-right: ${U};
 border-radius: ${U};
 `),le("default"),P("ghost",[le("primary"),le("info"),le("success"),le("warning"),le("error")])])])]),P("vertical",{flexDirection:"column"},[v("button",[L("&:first-child:not(:last-child)",`
 margin-bottom: ${U};
 margin-left: ${U};
 margin-right: ${U};
 border-bottom-left-radius: ${U};
 border-bottom-right-radius: ${U};
 `),L("&:last-child:not(:first-child)",`
 margin-top: ${U};
 margin-left: ${U};
 margin-right: ${U};
 border-top-left-radius: ${U};
 border-top-right-radius: ${U};
 `),L("&:not(:first-child):not(:last-child)",`
 margin: ${U};
 border-radius: ${U};
 `),ae("default"),P("ghost",[ae("primary"),ae("info"),ae("success"),ae("warning"),ae("error")])])])]),yr={size:{type:String,default:void 0},vertical:Boolean},wr=H({name:"ButtonGroup",props:yr,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=we(e);return xt("-button-group",br,t),_e(Ct,e),{rtlEnabled:Ve("ButtonGroup",r,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return n("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});function xr(e){const{infoColor:t,successColor:r,warningColor:o,errorColor:i,textColor2:l,progressRailColor:a,fontSize:u,fontWeight:c}=e;return{fontSize:u,fontSizeCircle:"28px",fontWeightCircle:c,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:r,iconColorWarning:o,iconColorError:i,textColorCircle:l,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:l,fillColor:t,fillColorInfo:t,fillColorSuccess:r,fillColorWarning:o,fillColorError:i,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const ot={name:"Progress",common:We,self:xr};function Cr(e){const{iconColor:t,primaryColor:r,errorColor:o,textColor2:i,successColor:l,opacityDisabled:a,actionColor:u,borderColor:c,hoverColor:f,lineHeight:p,borderRadius:h,fontSize:y}=e;return{fontSize:y,lineHeight:p,borderRadius:h,draggerColor:u,draggerBorder:`1px dashed ${c}`,draggerBorderHover:`1px dashed ${r}`,itemColorHover:f,itemColorHoverError:$t(o,{alpha:.06}),itemTextColor:i,itemTextColorError:o,itemTextColorSuccess:l,itemIconColor:t,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${o}`,itemBorderImageCard:`1px solid ${c}`}}const Rr=Rt({name:"Upload",common:We,peers:{Button:St,Progress:ot},self:Cr}),Fe=1,nt=qe("n-grid"),it=1,Sr={span:{type:[Number,String],default:it},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},$r=H({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Sr,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:o,layoutShiftDisabledRef:i}=de(nt),l=kt();return{overflow:o,itemStyle:r,layoutShiftDisabled:i,mergedXGap:k(()=>se(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:a=it,privateShow:u=!0,privateColStart:c=void 0,privateOffset:f=0}=l.vnode.props,{value:p}=t,h=se(p||0);return{display:u?"":"none",gridColumn:`${c??`span ${a}`} / span ${a}`,marginLeft:f?`calc((100% - (${a} - 1) * ${h}) / ${a} * ${f} + ${h} * ${f})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:o,mergedXGap:i}=this;return n("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:o?`calc((100% - (${r} - 1) * ${i}) / ${r} * ${o} + ${i} * ${o})`:""}},this.$slots)}return n("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),kr={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},lt=24,Se="__ssr__",_r={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:lt},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Br=H({name:"Grid",inheritAttrs:!1,props:_r,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=we(e),o=/^\d+$/,i=K(void 0),l=fr(r?.value||kr),a=ge(()=>!!(e.itemResponsive||!o.test(e.cols.toString())||!o.test(e.xGap.toString())||!o.test(e.yGap.toString()))),u=k(()=>{if(a.value)return e.responsive==="self"?i.value:l.value}),c=ge(()=>{var C;return(C=Number(ie(e.cols.toString(),u.value)))!==null&&C!==void 0?C:lt}),f=ge(()=>ie(e.xGap.toString(),u.value)),p=ge(()=>ie(e.yGap.toString(),u.value)),h=C=>{i.value=C.contentRect.width},y=C=>{Tt(h,C)},B=K(!1),w=k(()=>{if(e.responsive==="self")return y}),m=K(!1),T=K();return Xe(()=>{const{value:C}=T;C&&C.hasAttribute(Se)&&(C.removeAttribute(Se),m.value=!0)}),_e(nt,{layoutShiftDisabledRef:F(e,"layoutShiftDisabled"),isSsrRef:m,itemStyleRef:F(e,"itemStyle"),xGapRef:f,overflowRef:B}),{isSsr:!Ye,contentEl:T,mergedClsPrefix:t,style:k(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:se(e.xGap),rowGap:se(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${c.value}, minmax(0, 1fr))`,columnGap:se(f.value),rowGap:se(p.value)}),isResponsive:a,responsiveQuery:u,responsiveCols:c,handleResize:w,overflow:B}},render(){if(this.layoutShiftDisabled)return n("div",Pe({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,o,i,l,a,u;this.overflow=!1;const c=Bt(Pt(this)),f=[],{collapsed:p,collapsedRows:h,responsiveCols:y,responsiveQuery:B}=this;c.forEach(b=>{var O,R,s,d,x;if(((O=b?.type)===null||O===void 0?void 0:O.__GRID_ITEM__)!==!0)return;if(pr(b)){const M=Te(b);M.props?M.props.privateShow=!1:M.props={privateShow:!1},f.push({child:M,rawChildSpan:0});return}b.dirs=((R=b.dirs)===null||R===void 0?void 0:R.filter(({dir:M})=>M!==He))||null,((s=b.dirs)===null||s===void 0?void 0:s.length)===0&&(b.dirs=null);const D=Te(b),S=Number((x=ie((d=D.props)===null||d===void 0?void 0:d.span,B))!==null&&x!==void 0?x:Fe);S!==0&&f.push({child:D,rawChildSpan:S})});let w=0;const m=(t=f[f.length-1])===null||t===void 0?void 0:t.child;if(m?.props){const b=(r=m.props)===null||r===void 0?void 0:r.suffix;b!==void 0&&b!==!1&&(w=Number((i=ie((o=m.props)===null||o===void 0?void 0:o.span,B))!==null&&i!==void 0?i:Fe),m.props.privateSpan=w,m.props.privateColStart=y+1-w,m.props.privateShow=(l=m.props.privateShow)!==null&&l!==void 0?l:!0)}let T=0,C=!1;for(const{child:b,rawChildSpan:O}of f){if(C&&(this.overflow=!0),!C){const R=Number((u=ie((a=b.props)===null||a===void 0?void 0:a.offset,B))!==null&&u!==void 0?u:0),s=Math.min(O+R,y);if(b.props?(b.props.privateSpan=s,b.props.privateOffset=R):b.props={privateSpan:s,privateOffset:R},p){const d=T%y;s+d>y&&(T+=y-d),s+T+w>h*y?C=!0:T+=s}}C&&(b.props?b.props.privateShow!==!0&&(b.props.privateShow=!1):b.props={privateShow:!1})}return n("div",Pe({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Se]:this.isSsr||void 0},this.$attrs),f.map(({child:b})=>b))};return this.isResponsive&&this.responsive==="self"?n(_t,{onResize:this.handleResize},{default:e}):e()}}),Pr={success:n(Ze,null),error:n(Je,null),warning:n(Qe,null),info:n(Ke,null)},Tr=H({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const r=k(()=>{const l="gradient",{fillColor:a}=e;return typeof a=="object"?`${l}-${zt(JSON.stringify(a))}`:l});function o(l,a,u,c){const{gapDegree:f,viewBoxWidth:p,strokeWidth:h}=e,y=50,B=0,w=y,m=0,T=2*y,C=50+h/2,b=`M ${C},${C} m ${B},${w}
      a ${y},${y} 0 1 1 ${m},${-T}
      a ${y},${y} 0 1 1 ${-m},${T}`,O=Math.PI*2*y,R={stroke:c==="rail"?u:typeof e.fillColor=="object"?`url(#${r.value})`:u,strokeDasharray:`${l/100*(O-f)}px ${p*8}px`,strokeDashoffset:`-${f/2}px`,transformOrigin:a?"center":void 0,transform:a?`rotate(${a}deg)`:void 0};return{pathString:b,pathStyle:R}}const i=()=>{const l=typeof e.fillColor=="object",a=l?e.fillColor.stops[0]:"",u=l?e.fillColor.stops[1]:"";return l&&n("defs",null,n("linearGradient",{id:r.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},n("stop",{offset:"0%","stop-color":a}),n("stop",{offset:"100%","stop-color":u})))};return()=>{const{fillColor:l,railColor:a,strokeWidth:u,offsetDegree:c,status:f,percentage:p,showIndicator:h,indicatorTextColor:y,unit:B,gapOffsetDegree:w,clsPrefix:m}=e,{pathString:T,pathStyle:C}=o(100,0,a,"rail"),{pathString:b,pathStyle:O}=o(p,c,l,"fill"),R=100+u;return n("div",{class:`${m}-progress-content`,role:"none"},n("div",{class:`${m}-progress-graph`,"aria-hidden":!0},n("div",{class:`${m}-progress-graph-circle`,style:{transform:w?`rotate(${w}deg)`:void 0}},n("svg",{viewBox:`0 0 ${R} ${R}`},i(),n("g",null,n("path",{class:`${m}-progress-graph-circle-rail`,d:T,"stroke-width":u,"stroke-linecap":"round",fill:"none",style:C})),n("g",null,n("path",{class:[`${m}-progress-graph-circle-fill`,p===0&&`${m}-progress-graph-circle-fill--empty`],d:b,"stroke-width":u,"stroke-linecap":"round",fill:"none",style:O}))))),h?n("div",null,t.default?n("div",{class:`${m}-progress-custom-content`,role:"none"},t.default()):f!=="default"?n("div",{class:`${m}-progress-icon`,"aria-hidden":!0},n(Z,{clsPrefix:m},{default:()=>Pr[f]})):n("div",{class:`${m}-progress-text`,style:{color:y},role:"none"},n("span",{class:`${m}-progress-text__percentage`},p),n("span",{class:`${m}-progress-text__unit`},B))):null)}}}),zr={success:n(Ze,null),error:n(Je,null),warning:n(Qe,null),info:n(Ke,null)},Dr=H({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const r=k(()=>oe(e.height)),o=k(()=>{var a,u;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[0]} , ${(u=e.fillColor)===null||u===void 0?void 0:u.stops[1]})`:e.fillColor}),i=k(()=>e.railBorderRadius!==void 0?oe(e.railBorderRadius):e.height!==void 0?oe(e.height,{c:.5}):""),l=k(()=>e.fillBorderRadius!==void 0?oe(e.fillBorderRadius):e.railBorderRadius!==void 0?oe(e.railBorderRadius):e.height!==void 0?oe(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:a,railColor:u,railStyle:c,percentage:f,unit:p,indicatorTextColor:h,status:y,showIndicator:B,processing:w,clsPrefix:m}=e;return n("div",{class:`${m}-progress-content`,role:"none"},n("div",{class:`${m}-progress-graph`,"aria-hidden":!0},n("div",{class:[`${m}-progress-graph-line`,{[`${m}-progress-graph-line--indicator-${a}`]:!0}]},n("div",{class:`${m}-progress-graph-line-rail`,style:[{backgroundColor:u,height:r.value,borderRadius:i.value},c]},n("div",{class:[`${m}-progress-graph-line-fill`,w&&`${m}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:o.value,height:r.value,lineHeight:r.value,borderRadius:l.value}},a==="inside"?n("div",{class:`${m}-progress-graph-line-indicator`,style:{color:h}},t.default?t.default():`${f}${p}`):null)))),B&&a==="outside"?n("div",null,t.default?n("div",{class:`${m}-progress-custom-content`,style:{color:h},role:"none"},t.default()):y==="default"?n("div",{role:"none",class:`${m}-progress-icon ${m}-progress-icon--as-text`,style:{color:h}},f,p):n("div",{class:`${m}-progress-icon`,"aria-hidden":!0},n(Z,{clsPrefix:m},{default:()=>zr[y]}))):null)}}});function Ue(e,t,r=100){return`m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Ir=H({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const r=k(()=>e.percentage.map((l,a)=>`${Math.PI*l/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*a)-e.circleGap*a)*2}, ${e.viewBoxWidth*8}`)),o=(i,l)=>{const a=e.fillColor[l],u=typeof a=="object"?a.stops[0]:"",c=typeof a=="object"?a.stops[1]:"";return typeof e.fillColor[l]=="object"&&n("linearGradient",{id:`gradient-${l}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},n("stop",{offset:"0%","stop-color":u}),n("stop",{offset:"100%","stop-color":c}))};return()=>{const{viewBoxWidth:i,strokeWidth:l,circleGap:a,showIndicator:u,fillColor:c,railColor:f,railStyle:p,percentage:h,clsPrefix:y}=e;return n("div",{class:`${y}-progress-content`,role:"none"},n("div",{class:`${y}-progress-graph`,"aria-hidden":!0},n("div",{class:`${y}-progress-graph-circle`},n("svg",{viewBox:`0 0 ${i} ${i}`},n("defs",null,h.map((B,w)=>o(B,w))),h.map((B,w)=>n("g",{key:w},n("path",{class:`${y}-progress-graph-circle-rail`,d:Ue(i/2-l/2*(1+2*w)-a*w,l,i),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:f[w]},p[w]]}),n("path",{class:[`${y}-progress-graph-circle-fill`,B===0&&`${y}-progress-graph-circle-fill--empty`],d:Ue(i/2-l/2*(1+2*w)-a*w,l,i),"stroke-width":l,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:r.value[w],strokeDashoffset:0,stroke:typeof c[w]=="object"?`url(#gradient-${w})`:c[w]}})))))),u&&t.default?n("div",null,n("div",{class:`${y}-progress-text`},t.default())):null)}}}),Lr=L([v("progress",{display:"inline-block"},[v("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),P("line",`
 width: 100%;
 display: block;
 `,[v("progress-content",`
 display: flex;
 align-items: center;
 `,[v("progress-graph",{flex:1})]),v("progress-custom-content",{marginLeft:"14px"}),v("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[P("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),P("circle, dashboard",{width:"120px"},[v("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),v("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),v("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),P("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[v("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),v("progress-content",{position:"relative"}),v("progress-graph",{position:"relative"},[v("progress-graph-circle",[L("svg",{verticalAlign:"bottom"}),v("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[P("empty",{opacity:0})]),v("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),v("progress-graph-line",[P("indicator-inside",[v("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[v("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),v("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),P("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[v("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),v("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),v("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[v("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[P("processing",[L("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),L("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Nr=Object.assign(Object.assign({},xe.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),at=H({name:"Progress",props:Nr,setup(e){const t=k(()=>e.indicatorPlacement||e.indicatorPosition),r=k(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:o,inlineThemeDisabled:i}=we(e),l=xe("Progress","-progress",Lr,ot,e,o),a=k(()=>{const{status:c}=e,{common:{cubicBezierEaseInOut:f},self:{fontSize:p,fontSizeCircle:h,railColor:y,railHeight:B,iconSizeCircle:w,iconSizeLine:m,textColorCircle:T,textColorLineInner:C,textColorLineOuter:b,lineBgProcessing:O,fontWeightCircle:R,[ze("iconColor",c)]:s,[ze("fillColor",c)]:d}}=l.value;return{"--n-bezier":f,"--n-fill-color":d,"--n-font-size":p,"--n-font-size-circle":h,"--n-font-weight-circle":R,"--n-icon-color":s,"--n-icon-size-circle":w,"--n-icon-size-line":m,"--n-line-bg-processing":O,"--n-rail-color":y,"--n-rail-height":B,"--n-text-color-circle":T,"--n-text-color-line-inner":C,"--n-text-color-line-outer":b}}),u=i?et("progress",k(()=>e.status[0]),a,e):void 0;return{mergedClsPrefix:o,mergedIndicatorPlacement:t,gapDeg:r,cssVars:i?void 0:a,themeClass:u?.themeClass,onRender:u?.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:r,showIndicator:o,status:i,railColor:l,railStyle:a,color:u,percentage:c,viewBoxWidth:f,strokeWidth:p,mergedIndicatorPlacement:h,unit:y,borderRadius:B,fillBorderRadius:w,height:m,processing:T,circleGap:C,mergedClsPrefix:b,gapDeg:O,gapOffsetDegree:R,themeClass:s,$slots:d,onRender:x}=this;return x?.(),n("div",{class:[s,`${b}-progress`,`${b}-progress--${e}`,`${b}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?n(Tr,{clsPrefix:b,status:i,showIndicator:o,indicatorTextColor:r,railColor:l,fillColor:u,railStyle:a,offsetDegree:this.offsetDegree,percentage:c,viewBoxWidth:f,strokeWidth:p,gapDegree:O===void 0?e==="dashboard"?75:0:O,gapOffsetDegree:R,unit:y},d):e==="line"?n(Dr,{clsPrefix:b,status:i,showIndicator:o,indicatorTextColor:r,railColor:l,fillColor:u,railStyle:a,percentage:c,processing:T,indicatorPlacement:h,unit:y,fillBorderRadius:w,railBorderRadius:B,height:m},d):e==="multiple-circle"?n(Ir,{clsPrefix:b,strokeWidth:p,railColor:l,fillColor:u,railStyle:a,viewBoxWidth:f,percentage:c,showIndicator:o,circleGap:C},d):null)}}),ue=qe("n-upload"),Or=L([v("upload","width: 100%;",[P("dragger-inside",[v("upload-trigger",`
 display: block;
 `)]),P("drag-over",[v("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),v("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[L("&:hover",`
 border: var(--n-dragger-border-hover);
 `),P("disabled",`
 cursor: not-allowed;
 `)]),v("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[L("+",[v("upload-file-list","margin-top: 8px;")]),P("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),P("image-card",`
 width: 96px;
 height: 96px;
 `,[v("base-icon",`
 font-size: 24px;
 `),v("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),v("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[L("a, img","outline: none;"),P("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[v("upload-file","cursor: not-allowed;")]),P("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),v("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[De(),v("progress",[De({foldPadding:!0})]),L("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[v("upload-file-info",[X("action",`
 opacity: 1;
 `)])]),P("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[v("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[v("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),X("name",`
 padding: 0 8px;
 `),X("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[L("img",`
 width: 100%;
 `)])])]),P("text-type",[v("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),P("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[v("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),v("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[X("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[L("img",`
 width: 100%;
 `)])]),L("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),L("&:hover",[L("&::before","opacity: 1;"),v("upload-file-info",[X("thumbnail","opacity: .12;")])])]),P("error-status",[L("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),v("upload-file-info",[X("name","color: var(--n-item-text-color-error);"),X("thumbnail","color: var(--n-item-text-color-error);")]),P("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),P("with-url",`
 cursor: pointer;
 `,[v("upload-file-info",[X("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[L("a",`
 text-decoration: underline;
 `)])])]),v("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[X("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[v("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),X("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[v("button",[L("&:not(:last-child)",{marginRight:"4px"}),v("base-icon",[L("svg",[Dt()])])]),P("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),P("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),X("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[L("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),v("upload-file-input",`
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]),st="__UPLOAD_DRAGGER__",dt=H({name:"UploadDragger",[st]:!0,setup(e,{slots:t}){const r=de(ue,null);return r||Ce("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:o},mergedDisabledRef:{value:i},maxReachedRef:{value:l}}=r;return n("div",{class:[`${o}-upload-dragger`,(i||l)&&`${o}-upload-dragger--disabled`]},t)}}});function Fr(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},n("g",{fill:"none"},n("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"})))}function Ur(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},n("g",{fill:"none"},n("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})))}const jr=H({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:de(ue).mergedThemeRef}},render(){return n(tt,null,{default:()=>this.show?n(at,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}});var ke=function(e,t,r,o){function i(l){return l instanceof r?l:new r(function(a){a(l)})}return new(r||(r=Promise))(function(l,a){function u(p){try{f(o.next(p))}catch(h){a(h)}}function c(p){try{f(o.throw(p))}catch(h){a(h)}}function f(p){p.done?l(p.value):i(p.value).then(u,c)}f((o=o.apply(e,t||[])).next())})};function ut(e){return e.includes("image/")}function je(e=""){const t=e.split("/"),o=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(o)||[""])[0]}const Ee=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,ct=e=>{if(e.type)return ut(e.type);const t=je(e.name||"");if(Ee.test(t))return!0;const r=e.thumbnailUrl||e.url||"",o=je(r);return!!(/^data:image\//.test(r)||Ee.test(o))};function Er(e){return ke(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!ut(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const Mr=Ye&&window.FileReader&&window.File;function Gr(e){return e.isDirectory}function Ar(e){return e.isFile}function Hr(e,t){return ke(this,void 0,void 0,function*(){const r=[];function o(i){return ke(this,void 0,void 0,function*(){for(const l of i)if(l){if(t&&Gr(l)){const a=l.createReader();let u=[],c;try{do c=yield new Promise((f,p)=>{a.readEntries(f,p)}),u=u.concat(c);while(c.length>0)}catch(f){Ie("upload","error happens when handling directory upload",f)}yield o(u)}else if(Ar(l))try{const a=yield new Promise((u,c)=>{l.file(u,c)});r.push({file:a,entry:l,source:"dnd"})}catch(a){Ie("upload","error happens when handling file upload",a)}}})}return yield o(e),r})}function he(e){const{id:t,name:r,percentage:o,status:i,url:l,file:a,thumbnailUrl:u,type:c,fullPath:f,batchId:p}=e;return{id:t,name:r,percentage:o??null,status:i,url:l??null,file:a??null,thumbnailUrl:u??null,type:c??null,fullPath:f??null,batchId:p??null}}function Vr(e,t,r){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),r=r.toLocaleLowerCase(),r.split(",").map(i=>i.trim()).filter(Boolean).some(i=>{if(i.startsWith(".")){if(e.endsWith(i))return!0}else if(i.includes("/")){const[l,a]=t.split("/"),[u,c]=i.split("/");if((u==="*"||l&&u&&u===l)&&(c==="*"||a&&c&&c===a))return!0}else return!0;return!1})}var Me=function(e,t,r,o){function i(l){return l instanceof r?l:new r(function(a){a(l)})}return new(r||(r=Promise))(function(l,a){function u(p){try{f(o.next(p))}catch(h){a(h)}}function c(p){try{f(o.throw(p))}catch(h){a(h)}}function f(p){p.done?l(p.value):i(p.value).then(u,c)}f((o=o.apply(e,t||[])).next())})};const be={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},Wr=H({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0},index:{type:Number,required:!0}},setup(e){const t=de(ue),r=K(null),o=K(""),i=k(()=>{const{file:s}=e;return s.status==="finished"?"success":s.status==="error"?"error":"info"}),l=k(()=>{const{file:s}=e;if(s.status==="error")return"error"}),a=k(()=>{const{file:s}=e;return s.status==="uploading"}),u=k(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:s}=e;return["uploading","pending","error"].includes(s.status)}),c=k(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:s}=e;return["finished"].includes(s.status)}),f=k(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:s}=e;return["finished"].includes(s.status)}),p=k(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:s}=e;return["error"].includes(s.status)}),h=ge(()=>o.value||e.file.thumbnailUrl||e.file.url),y=k(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:s},listType:d}=e;return["finished"].includes(s)&&h.value&&d==="image-card"});function B(){return Me(this,void 0,void 0,function*(){const s=t.onRetryRef.value;s&&(yield s({file:e.file}))===!1||t.submit(e.file.id)})}function w(s){s.preventDefault();const{file:d}=e;["finished","pending","error"].includes(d.status)?T(d):["uploading"].includes(d.status)?b(d):Ot("upload","The button clicked type is unknown.")}function m(s){s.preventDefault(),C(e.file)}function T(s){const{xhrMap:d,doChange:x,onRemoveRef:{value:D},mergedFileListRef:{value:S}}=t;Promise.resolve(D?D({file:Object.assign({},s),fileList:S,index:e.index}):!0).then(M=>{if(M===!1)return;const g=Object.assign({},s,{status:"removed"});d.delete(s.id),x(g,void 0,{remove:!0})})}function C(s){const{onDownloadRef:{value:d},customDownloadRef:{value:x}}=t;Promise.resolve(d?d(Object.assign({},s)):!0).then(D=>{D!==!1&&(x?x(Object.assign({},s)):nr(s.url,s.name))})}function b(s){const{xhrMap:d}=t,x=d.get(s.id);x?.abort(),T(Object.assign({},s))}function O(s){const{onPreviewRef:{value:d}}=t;if(d)d(e.file,{event:s});else if(e.listType==="image-card"){const{value:x}=r;if(!x)return;x.showPreview()}}const R=()=>Me(this,void 0,void 0,function*(){const{listType:s}=e;s!=="image"&&s!=="image-card"||t.shouldUseThumbnailUrlRef.value(e.file)&&(o.value=yield t.getFileThumbnailUrlResolver(e.file))});return Nt(()=>{R()}),{mergedTheme:t.mergedThemeRef,progressStatus:i,buttonType:l,showProgress:a,disabled:t.mergedDisabledRef,showCancelButton:u,showRemoveButton:c,showDownloadButton:f,showRetryButton:p,showPreviewButton:y,mergedThumbnailUrl:h,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:r,handleRemoveOrCancelClick:w,handleDownloadClick:m,handleRetryClick:B,handlePreviewClick:O}},render(){const{clsPrefix:e,mergedTheme:t,listType:r,file:o,renderIcon:i}=this;let l;const a=r==="image";a||r==="image-card"?l=!this.shouldUseThumbnailUrl(o)||!this.mergedThumbnailUrl?n("span",{class:`${e}-upload-file-info__thumbnail`},i?i(o):ct(o)?n(Z,{clsPrefix:e},{default:Fr}):n(Z,{clsPrefix:e},{default:Ur})):n("a",{rel:"noopener noreferer",target:"_blank",href:o.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},r==="image-card"?n(tr,{src:this.mergedThumbnailUrl||void 0,previewSrc:o.url||void 0,alt:o.name,ref:"imageRef"}):n("img",{src:this.mergedThumbnailUrl||void 0,alt:o.name})):l=n("span",{class:`${e}-upload-file-info__thumbnail`},i?i(o):n(Z,{clsPrefix:e},{default:()=>n(gr,null)}));const c=n(jr,{show:this.showProgress,percentage:o.percentage||0,status:this.progressStatus}),f=r==="text"||r==="image";return n("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,o.url&&o.status!=="error"&&r!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${r}-type`]},n("div",{class:`${e}-upload-file-info`},l,n("div",{class:`${e}-upload-file-info__name`},f&&(o.url&&o.status!=="error"?n("a",{rel:"noopener noreferer",target:"_blank",href:o.url||void 0,onClick:this.handlePreviewClick},o.name):n("span",{onClick:this.handlePreviewClick},o.name)),a&&c),n("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${r}-type`]},this.showPreviewButton?n(re,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:be},{icon:()=>n(Z,{clsPrefix:e},{default:()=>n(It,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&n(re,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:be,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>n(Lt,null,{default:()=>this.showRemoveButton?n(Z,{clsPrefix:e,key:"trash"},{default:()=>n(vr,null)}):n(Z,{clsPrefix:e,key:"cancel"},{default:()=>n(hr,null)})})}),this.showRetryButton&&!this.disabled&&n(re,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:be},{icon:()=>n(Z,{clsPrefix:e},{default:()=>n(mr,null)})}),this.showDownloadButton?n(re,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:be},{icon:()=>n(Z,{clsPrefix:e},{default:()=>n(rr,null)})}):null)),!a&&c)}}),ft=H({name:"UploadTrigger",props:{abstract:Boolean},slots:Object,setup(e,{slots:t}){const r=de(ue,null);r||Ce("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:o,mergedDisabledRef:i,maxReachedRef:l,listTypeRef:a,dragOverRef:u,openOpenFileDialog:c,draggerInsideRef:f,handleFileAddition:p,mergedDirectoryDndRef:h,triggerClassRef:y,triggerStyleRef:B}=r,w=k(()=>a.value==="image-card");function m(){i.value||l.value||c()}function T(R){R.preventDefault(),u.value=!0}function C(R){R.preventDefault(),u.value=!0}function b(R){R.preventDefault(),u.value=!1}function O(R){var s;if(R.preventDefault(),!f.value||i.value||l.value){u.value=!1;return}const d=(s=R.dataTransfer)===null||s===void 0?void 0:s.items;d?.length?Hr(Array.from(d).map(x=>x.webkitGetAsEntry()),h.value).then(x=>{p(x)}).finally(()=>{u.value=!1}):u.value=!1}return()=>{var R;const{value:s}=o;return e.abstract?(R=t.default)===null||R===void 0?void 0:R.call(t,{handleClick:m,handleDrop:O,handleDragOver:T,handleDragEnter:C,handleDragLeave:b}):n("div",{class:[`${s}-upload-trigger`,(i.value||l.value)&&`${s}-upload-trigger--disabled`,w.value&&`${s}-upload-trigger--image-card`,y.value],style:B.value,onClick:m,onDrop:O,onDragover:T,onDragenter:C,onDragleave:b},w.value?n(dt,null,{default:()=>Ft(t.default,()=>[n(Z,{clsPrefix:s},{default:()=>n(ir,null)})])}):t)}}}),qr=H({name:"UploadFileList",setup(e,{slots:t}){const r=de(ue,null);r||Ce("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:o,mergedClsPrefixRef:i,listTypeRef:l,mergedFileListRef:a,fileListClassRef:u,fileListStyleRef:c,cssVarsRef:f,themeClassRef:p,maxReachedRef:h,showTriggerRef:y,imageGroupPropsRef:B}=r,w=k(()=>l.value==="image-card"),m=()=>a.value.map((C,b)=>n(Wr,{clsPrefix:i.value,key:C.id,file:C,index:b,listType:l.value})),T=()=>w.value?n(or,Object.assign({},B.value),{default:m}):n(tt,{group:!0},{default:m});return()=>{const{value:C}=i,{value:b}=o;return n("div",{class:[`${C}-upload-file-list`,w.value&&`${C}-upload-file-list--grid`,b?p?.value:void 0,u.value],style:[b&&f?f.value:"",c.value]},T(),y.value&&!h.value&&w.value&&n(ft,null,t))}}});var Ge=function(e,t,r,o){function i(l){return l instanceof r?l:new r(function(a){a(l)})}return new(r||(r=Promise))(function(l,a){function u(p){try{f(o.next(p))}catch(h){a(h)}}function c(p){try{f(o.throw(p))}catch(h){a(h)}}function f(p){p.done?l(p.value):i(p.value).then(u,c)}f((o=o.apply(e,t||[])).next())})};function Xr(e,t,r){const{doChange:o,xhrMap:i}=e;let l=0;function a(c){var f;let p=Object.assign({},t,{status:"error",percentage:l});i.delete(t.id),p=he(((f=e.onError)===null||f===void 0?void 0:f.call(e,{file:p,event:c}))||p),o(p,c)}function u(c){var f;if(e.isErrorState){if(e.isErrorState(r)){a(c);return}}else if(r.status<200||r.status>=300){a(c);return}let p=Object.assign({},t,{status:"finished",percentage:l});i.delete(t.id),p=he(((f=e.onFinish)===null||f===void 0?void 0:f.call(e,{file:p,event:c}))||p),o(p,c)}return{handleXHRLoad:u,handleXHRError:a,handleXHRAbort(c){const f=Object.assign({},t,{status:"removed",file:null,percentage:l});i.delete(t.id),o(f,c)},handleXHRProgress(c){const f=Object.assign({},t,{status:"uploading"});if(c.lengthComputable){const p=Math.ceil(c.loaded/c.total*100);f.percentage=p,l=p}o(f,c)}}}function Yr(e){const{inst:t,file:r,data:o,headers:i,withCredentials:l,action:a,customRequest:u}=e,{doChange:c}=e.inst;let f=0;u({file:r,data:o,headers:i,withCredentials:l,action:a,onProgress(p){const h=Object.assign({},r,{status:"uploading"}),y=p.percent;h.percentage=y,f=y,c(h)},onFinish(){var p;let h=Object.assign({},r,{status:"finished",percentage:f});h=he(((p=t.onFinish)===null||p===void 0?void 0:p.call(t,{file:h}))||h),c(h)},onError(){var p;let h=Object.assign({},r,{status:"error",percentage:f});h=he(((p=t.onError)===null||p===void 0?void 0:p.call(t,{file:h}))||h),c(h)}})}function Kr(e,t,r){const o=Xr(e,t,r);r.onabort=o.handleXHRAbort,r.onerror=o.handleXHRError,r.onload=o.handleXHRLoad,r.upload&&(r.upload.onprogress=o.handleXHRProgress)}function pt(e,t){return typeof e=="function"?e({file:t}):e||{}}function Qr(e,t,r){const o=pt(t,r);o&&Object.keys(o).forEach(i=>{e.setRequestHeader(i,o[i])})}function Jr(e,t,r){const o=pt(t,r);o&&Object.keys(o).forEach(i=>{e.append(i,o[i])})}function Zr(e,t,r,{method:o,action:i,withCredentials:l,responseType:a,headers:u,data:c}){const f=new XMLHttpRequest;f.responseType=a,e.xhrMap.set(r.id,f),f.withCredentials=l;const p=new FormData;if(Jr(p,c,r),r.file!==null&&p.append(t,r.file),Kr(e,r,f),i!==void 0){f.open(o.toUpperCase(),i),Qr(f,u,r),f.send(p);const h=Object.assign({},r,{status:"uploading"});e.doChange(h)}}const eo=Object.assign(Object.assign({},xe.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onRetry:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,customDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListClass:String,fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>Mr?ct(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerClass:String,triggerStyle:[String,Object],renderIcon:Function}),to=H({name:"Upload",props:eo,setup(e){e.abstract&&e.listType==="image-card"&&Ce("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:o}=we(e),i=xe("Upload","-upload",Or,Rr,e,t),l=Ve("Upload",o,t),a=jt(e),u=K(e.defaultFileList),c=F(e,"fileList"),f=K(null),p={value:!1},h=K(!1),y=new Map,B=Et(c,u),w=k(()=>B.value.map(he)),m=k(()=>{const{max:g}=e;return g!==void 0?w.value.length>=g:!1});function T(){var g;(g=f.value)===null||g===void 0||g.click()}function C(g){const N=g.target;s(N.files?Array.from(N.files).map(j=>({file:j,entry:null,source:"input"})):null,g),N.value=""}function b(g){const{"onUpdate:fileList":N,onUpdateFileList:j}=e;N&&Ne(N,g),j&&Ne(j,g),u.value=g}const O=k(()=>e.multiple||e.directory),R=(g,N,j={append:!1,remove:!1})=>{const{append:Y,remove:V}=j,W=Array.from(w.value),A=W.findIndex(E=>E.id===g.id);if(Y||V||~A){Y?W.push(g):V?W.splice(A,1):W.splice(A,1,g);const{onChange:E}=e;E&&E({file:g,fileList:W,event:N}),b(W)}};function s(g,N){if(!g||g.length===0)return;const{onBeforeUpload:j}=e;g=O.value?g:[g[0]];const{max:Y,accept:V}=e;g=g.filter(({file:A,source:E})=>E==="dnd"&&V?.trim()?Vr(A.name,A.type,V):!0),Y&&(g=g.slice(0,Y-w.value.length));const W=Le();Promise.all(g.map(A=>Ge(this,[A],void 0,function*({file:E,entry:ee}){var Q;const te={id:Le(),batchId:W,name:E.name,status:"pending",percentage:0,file:E,url:null,type:E.type,thumbnailUrl:null,fullPath:(Q=ee?.fullPath)!==null&&Q!==void 0?Q:`/${E.webkitRelativePath||E.name}`};return!j||(yield j({file:te,fileList:w.value}))!==!1?te:null}))).then(A=>Ge(this,void 0,void 0,function*(){let E=Promise.resolve();A.forEach(ee=>{E=E.then(Mt).then(()=>{ee&&R(ee,N,{append:!0})})}),yield E})).then(()=>{e.defaultUpload&&d()})}function d(g){const{method:N,action:j,withCredentials:Y,headers:V,data:W,name:A}=e,E=g!==void 0?w.value.filter(Q=>Q.id===g):w.value,ee=g!==void 0;E.forEach(Q=>{const{status:te}=Q;(te==="pending"||te==="error"&&ee)&&(e.customRequest?Yr({inst:{doChange:R,xhrMap:y,onFinish:e.onFinish,onError:e.onError},file:Q,action:j,withCredentials:Y,headers:V,data:W,customRequest:e.customRequest}):Zr({doChange:R,xhrMap:y,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},A,Q,{method:N,action:j,withCredentials:Y,responseType:e.responseType,headers:V,data:W}))})}function x(g){var N;if(g.thumbnailUrl)return g.thumbnailUrl;const{createThumbnailUrl:j}=e;return j?(N=j(g.file,g))!==null&&N!==void 0?N:g.url||"":g.url?g.url:g.file?Er(g.file):""}const D=k(()=>{const{common:{cubicBezierEaseInOut:g},self:{draggerColor:N,draggerBorder:j,draggerBorderHover:Y,itemColorHover:V,itemColorHoverError:W,itemTextColorError:A,itemTextColorSuccess:E,itemTextColor:ee,itemIconColor:Q,itemDisabledOpacity:te,lineHeight:gt,borderRadius:ht,fontSize:mt,itemBorderImageCardError:vt,itemBorderImageCard:bt}}=i.value;return{"--n-bezier":g,"--n-border-radius":ht,"--n-dragger-border":j,"--n-dragger-border-hover":Y,"--n-dragger-color":N,"--n-font-size":mt,"--n-item-color-hover":V,"--n-item-color-hover-error":W,"--n-item-disabled-opacity":te,"--n-item-icon-color":Q,"--n-item-text-color":ee,"--n-item-text-color-error":A,"--n-item-text-color-success":E,"--n-line-height":gt,"--n-item-border-image-card-error":vt,"--n-item-border-image-card":bt}}),S=r?et("upload",void 0,D,e):void 0;_e(ue,{mergedClsPrefixRef:t,mergedThemeRef:i,showCancelButtonRef:F(e,"showCancelButton"),showDownloadButtonRef:F(e,"showDownloadButton"),showRemoveButtonRef:F(e,"showRemoveButton"),showRetryButtonRef:F(e,"showRetryButton"),onRemoveRef:F(e,"onRemove"),onDownloadRef:F(e,"onDownload"),customDownloadRef:F(e,"customDownload"),mergedFileListRef:w,triggerClassRef:F(e,"triggerClass"),triggerStyleRef:F(e,"triggerStyle"),shouldUseThumbnailUrlRef:F(e,"shouldUseThumbnailUrl"),renderIconRef:F(e,"renderIcon"),xhrMap:y,submit:d,doChange:R,showPreviewButtonRef:F(e,"showPreviewButton"),onPreviewRef:F(e,"onPreview"),getFileThumbnailUrlResolver:x,listTypeRef:F(e,"listType"),dragOverRef:h,openOpenFileDialog:T,draggerInsideRef:p,handleFileAddition:s,mergedDisabledRef:a.mergedDisabledRef,maxReachedRef:m,fileListClassRef:F(e,"fileListClass"),fileListStyleRef:F(e,"fileListStyle"),abstractRef:F(e,"abstract"),acceptRef:F(e,"accept"),cssVarsRef:r?void 0:D,themeClassRef:S?.themeClass,onRender:S?.onRender,showTriggerRef:F(e,"showTrigger"),imageGroupPropsRef:F(e,"imageGroupProps"),mergedDirectoryDndRef:k(()=>{var g;return(g=e.directoryDnd)!==null&&g!==void 0?g:e.directory}),onRetryRef:F(e,"onRetry")});const M={clear:()=>{u.value=[]},submit:d,openOpenFileDialog:T};return Object.assign({mergedClsPrefix:t,draggerInsideRef:p,rtlEnabled:l,inputElRef:f,mergedTheme:i,dragOver:h,mergedMultiple:O,cssVars:r?void 0:D,themeClass:S?.themeClass,onRender:S?.onRender,handleFileInputChange:C},M)},render(){var e,t;const{draggerInsideRef:r,mergedClsPrefix:o,$slots:i,directory:l,onRender:a}=this;if(i.default&&!this.abstract){const c=i.default()[0];!((e=c?.type)===null||e===void 0)&&e[st]&&(r.value=!0)}const u=n("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${o}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:l||void 0,directory:l||void 0}));return this.abstract?n($e,null,(t=i.default)===null||t===void 0?void 0:t.call(i),n(Ut,{to:"body"},u)):(a?.(),n("div",{class:[`${o}-upload`,this.rtlEnabled&&`${o}-upload--rtl`,r.value&&`${o}-upload--dragger-inside`,this.dragOver&&`${o}-upload--drag-over`,this.themeClass],style:this.cssVars},u,this.showTrigger&&this.listType!=="image-card"&&n(ft,null,i),this.showFileList&&n(qr,null,i)))}}),ro={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},oo=H({name:"DocumentsSharp",render:function(t,r){return G(),J("svg",ro,r[0]||(r[0]=[$("path",{d:"M307.94 248L216 154.52V242a6 6 0 0 0 6 6z",fill:"currentColor"},null,-1),$("path",{d:"M184 268V144H60a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h248a12 12 0 0 0 12-12V280H196a12 12 0 0 1-12-12z",fill:"currentColor"},null,-1),$("path",{d:"M366 120h85.94L360 26.52V114a6 6 0 0 0 6 6z",fill:"currentColor"},null,-1),$("path",{d:"M340 152a12 12 0 0 1-12-12V16H172a12 12 0 0 0-12 12v84h42.12A40.81 40.81 0 0 1 231 124.14l109.16 111a41.11 41.11 0 0 1 11.83 29V400H452a12 12 0 0 0 12-12V152z",fill:"currentColor"},null,-1)]))}}),no={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},io=H({name:"InformationCircleOutline",render:function(t,r){return G(),J("svg",no,r[0]||(r[0]=[$("path",{d:"M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184s184-82.39 184-184S349.61 64 248 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M220 220h32v116"},null,-1),$("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M208 340h88"},null,-1),$("path",{d:"M248 130a26 26 0 1 0 26 26a26 26 0 0 0-26-26z",fill:"currentColor"},null,-1)]))}}),lo={class:"zp-container"},ao={class:"opt-item"},so={class:"opt-item"},uo={class:"opt-item"},co={class:"opt-item"},fo={class:"opt-label watermark-label"},po={class:"upload-box"},go={class:"dragger-inner"},ho={class:"up-btns"},mo={key:0,class:"empty"},vo={key:1,class:"file-list"},bo={class:"thumb"},yo=["src"],wo={key:1,class:"thumb-placeholder"},xo={class:"meta"},Co={class:"name"},Ro={class:"status"},So={key:4,class:"error-msg"},$o={key:1,class:"result"},ko={class:"info"},Ae="upload_options",_o="image/jpeg,image/png,image/gif,image/bmp,image/webp",Bo=H({__name:"UploadView",setup(e){const t={dedup:!0,album_id:0,compress:!0,watermark:!1},r=localStorage.getItem(Ae),o=r?{...t,...JSON.parse(r)}:t,i=K(o);Gt(i,s=>{localStorage.setItem(Ae,JSON.stringify(s))},{deep:!0});const l=At(),a=k(()=>(l.albums||[]).map(s=>({label:s.name,value:s.album_id})));Xe(async()=>{await l.fetchAlbumList()});const u=K([]),c=K(!1),f=Ht();function p(){return Math.random().toString(36).slice(2)}function h(s){return new Promise(d=>{const x=new FileReader;x.onload=()=>{const D=new Image;D.onload=()=>{const S=document.createElement("canvas"),M=S.getContext("2d"),g=120,N=90;S.width=g,S.height=N,M.fillStyle="#f5f5f5",M.fillRect(0,0,g,N);const j=Math.min(g/D.width,N/D.height),Y=Math.max(1,Math.floor(D.width*j)),V=Math.max(1,Math.floor(D.height*j)),W=Math.floor((g-Y)/2),A=Math.floor((N-V)/2);M.imageSmoothingQuality="high",M.drawImage(D,W,A,Y,V),d(S.toDataURL("image/webp"))},D.onerror=()=>d(""),D.src=x.result},x.onerror=()=>d(""),x.readAsDataURL(s)})}const y=k(()=>JSON.stringify({watermark:i.value.watermark,dedup:i.value.dedup,compress:i.value.compress,album_id:i.value.album_id}));function B(s){return`${s.name}_${s.size}_${s.lastModified}`}async function w(s){const x=s?.file?.file;if(!x)return;const D=B(x);if(u.value.some(N=>B(N.file)===D)){u.value.length>50&&f.warning("上传队列过长，请清理后再添加"),m();return}const g={id:p(),file:x,name:x.name,progress:0,status:"pending"};g.thumbUrl=await h(x),u.value.unshift(g),u.value.length>50&&f.warning("上传队列过长，请清理后再添加"),m()}function m(){if(c.value)return;const s=u.value.find(d=>d.status==="pending");s&&T(s)}async function T(s){c.value=!0,s.status="uploading",s.progress=1;try{const d=Jt({file:s.file,params:y.value}),D=(await Zt.post("/api/user/upload",d,{onUploadProgress:S=>{S.total?s.progress=Math.min(99,Math.round(S.loaded/S.total*100)):s.progress=Math.min(99,s.progress+1)}})).data;if(D?.code===200){const S=D.data;s.status="success",s.progress=100,s.result={url:S.url,width:S.width,height:S.height,size:S.size,filename:S.filename}}else s.status="error",s.errorMsg=D?.msg||"上传失败",s.progress=0}catch(d){s.status="error",s.errorMsg=d?.response?.data?.msg||d?.message||"网络错误",s.errorMsg=="The token is invalid."&&(s.errorMsg="请先登录"),s.progress=0}finally{c.value=!1,m()}}function C(){u.value=[],f.info("已清空队列")}function b(s){const d=s.result?.url||"",x=s.result?.filename||s.name;return[{key:`copy|${d}`,label:"原始 URL"},{key:`copy|![${x}](${d})`,label:"Markdown"},{key:`copy|<img src="${d}" alt="${x}" />`,label:"HTML"},{key:`copy|[img]${d}[/img]`,label:"BBCode"}]}async function O(s){if(!s.startsWith("copy|"))return;const d=s.slice(5);try{await navigator.clipboard.writeText(d),f.success("已复制到剪贴板")}catch{f.error("复制失败")}}function R(s){if(!s||s<0)return"0 KB";const d=1024,x=d*1024;return s>=x?(s/x).toFixed(2)+" MB":(s/d).toFixed(2)+" KB"}return(s,d)=>{const x=$r,D=Xt,S=Br,M=wr;return G(),J($e,null,[z(Vt),$("div",lo,[z(I(Wt),{vertical:"",size:"large"},{default:_(()=>[z(I(Oe),{size:"small",class:"toolbar-card"},{default:_(()=>[z(S,{cols:"2 m:4",responsive:"screen","x-gap":"12","y-gap":"12"},{default:_(()=>[z(x,null,{default:_(()=>[$("div",ao,[d[6]||(d[6]=$("span",{class:"opt-label"},"图片去重",-1)),z(I(Re),{value:i.value.dedup,"onUpdate:value":d[0]||(d[0]=g=>i.value.dedup=g),"default-value":!0,size:"small"},{checked:_(()=>[...d[4]||(d[4]=[q("开",-1)])]),unchecked:_(()=>[...d[5]||(d[5]=[q("关",-1)])]),_:1},8,["value"])])]),_:1}),z(x,null,{default:_(()=>[$("div",so,[d[9]||(d[9]=$("span",{class:"opt-label"},"图片压缩",-1)),z(I(Re),{value:i.value.compress,"onUpdate:value":d[1]||(d[1]=g=>i.value.compress=g),"default-value":!0,size:"small"},{checked:_(()=>[...d[7]||(d[7]=[q("开",-1)])]),unchecked:_(()=>[...d[8]||(d[8]=[q("关",-1)])]),_:1},8,["value"])])]),_:1}),z(x,null,{default:_(()=>[$("div",uo,[d[10]||(d[10]=$("span",{class:"opt-label"},"选择相册",-1)),z(I(ar),{value:i.value.album_id,"onUpdate:value":d[2]||(d[2]=g=>i.value.album_id=g),options:a.value,"consistent-menu-width":!1,placeholder:"选择相册",size:"small",class:"opt-select"},null,8,["value","options"])])]),_:1}),z(x,null,{default:_(()=>[$("div",co,[$("span",fo,[d[12]||(d[12]=$("span",null,"文字水印",-1)),z(D,{trigger:"hover",placement:"bottom"},{trigger:_(()=>[z(I(me),{size:"24"},{default:_(()=>[z(I(io))]),_:1})]),default:_(()=>[d[11]||(d[11]=q(" 付费用户请联系管理员申请开启，否则此功能无效！ ",-1))]),_:1})]),z(I(Re),{value:i.value.watermark,"onUpdate:value":d[3]||(d[3]=g=>i.value.watermark=g),"default-value":!1,size:"small"},{checked:_(()=>[...d[13]||(d[13]=[q("开",-1)])]),unchecked:_(()=>[...d[14]||(d[14]=[q("关",-1)])]),_:1},8,["value"])])]),_:1})]),_:1}),u.value.length>50?(G(),ne(I(sr),{key:0,type:"warning",class:"mt-8",closable:""},{default:_(()=>[...d[15]||(d[15]=[q(" 上传队列过长，请清理后再添加 ",-1)])]),_:1})):ce("",!0)]),_:1}),$("div",po,[z(I(to),{multiple:"","directory-dnd":"",max:20,accept:_o,"default-upload":!1,"show-file-list":!1,onChange:w,width:"80%"},{default:_(()=>[z(I(dt),{class:"uploader-dragger"},{default:_(()=>[$("div",go,[z(I(me),{component:I(Yt),size:"36",color:"#7c7c7c"},null,8,["component"]),d[16]||(d[16]=$("div",{class:"tip1"},"请选择或拖拽图片进行上传",-1)),d[17]||(d[17]=$("div",{class:"tip1"},"支持 JPG、PNG、GIF、BMP、WebP 格式图片",-1))])]),_:1})]),_:1}),d[20]||(d[20]=$("div",{class:"agree"},[$("div",{class:"agree-tips"}," 上传即代表同意我们的： "),$("div",{class:"tip2"},[$("a",{class:"link",href:"/privacy",target:"_blank",rel:"noopener"},"隐私协议"),$("span",{class:"sep"},"·"),$("a",{class:"link",href:"/terms",target:"_blank",rel:"noopener"},"使用条款")])],-1)),$("div",ho,[z(M,null,{default:_(()=>[z(I(re),{type:"default"},{icon:_(()=>[z(I(me),null,{default:_(()=>[z(I(oo))]),_:1})]),default:_(()=>[d[18]||(d[18]=q(" 批量复制 ",-1))]),_:1}),z(I(re),{type:"default",onClick:C},{icon:_(()=>[z(I(me),null,{default:_(()=>[z(I(lr))]),_:1})]),default:_(()=>[d[19]||(d[19]=q(" 清空队列 ",-1))]),_:1})]),_:1})])]),z(I(Oe),{size:"small"},{default:_(()=>[u.value.length===0?(G(),J("div",mo," 请选择或拖拽图片进行上传 ")):(G(),J("div",vo,[(G(!0),J($e,null,Kt(u.value,g=>(G(),J("div",{key:g.id,class:"file-item"},[$("div",bo,[g.thumbUrl?(G(),J("img",{key:0,src:g.thumbUrl,alt:"thumb"},null,8,yo)):(G(),J("div",wo,"预览"))]),$("div",xo,[$("div",Co,fe(g.name),1),$("div",Ro,[g.status==="pending"?(G(),ne(I(ve),{key:0,size:"small",type:"info",bordered:!1},{default:_(()=>[...d[21]||(d[21]=[q("待上传",-1)])]),_:1})):g.status==="uploading"?(G(),ne(I(ve),{key:1,size:"small",type:"warning",bordered:!1},{default:_(()=>[...d[22]||(d[22]=[q("上传中",-1)])]),_:1})):g.status==="success"?(G(),ne(I(ve),{key:2,size:"small",type:"success",bordered:!1},{default:_(()=>[...d[23]||(d[23]=[q("成功",-1)])]),_:1})):g.status==="error"?(G(),ne(I(ve),{key:3,size:"small",type:"error",bordered:!1},{default:_(()=>[...d[24]||(d[24]=[q("失败",-1)])]),_:1})):ce("",!0),g.status==="error"?(G(),J("span",So,"："+fe(g.errorMsg),1)):ce("",!0)]),g.status==="uploading"?(G(),ne(I(at),{key:0,percentage:g.progress,type:"line","show-indicator":!1,status:"success",class:"progress"},null,8,["percentage"])):ce("",!0),g.status==="success"?(G(),J("div",$o,[$("div",ko,fe(g.result?.width)+" × "+fe(g.result?.height)+" · "+fe(R(g.result?.size)),1),z(I(Qt),{trigger:"click",options:b(g),onSelect:O},{default:_(()=>[z(I(re),{size:"small",quaternary:""},{default:_(()=>[...d[25]||(d[25]=[q("复制链接",-1)])]),_:1})]),_:1},8,["options"])])):ce("",!0)])]))),128))]))]),_:1})]),_:1})]),z(qt)],64)}}}),Uo=er(Bo,[["__scopeId","data-v-238b383b"]]);export{Uo as default};
