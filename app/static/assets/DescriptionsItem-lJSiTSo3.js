import{A as F,bG as C,l as g,k as e,bH as G,bI as N,a0 as W,J as $,m as D,d as E,a1 as J,n,bU as K,p as U,D as H,y as L,E as T,G as q}from"./index.2026020105.js";import{g as Q}from"./use-locale-CP981xb5.js";import{b as X}from"./_plugin-vue_export-helper-wCZfEhzQ.js";function _(t,a="default",c=[]){const{children:s}=t;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const l=s[a];if(typeof l=="function")return l()}return c}const Y={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function Z(t){const{tableHeaderColor:a,textColor2:c,textColor1:s,cardColor:l,modalColor:i,popoverColor:d,dividerColor:p,borderRadius:h,fontWeightStrong:u,lineHeight:y,fontSizeSmall:r,fontSizeMedium:f,fontSizeLarge:m}=t;return Object.assign(Object.assign({},Y),{lineHeight:y,fontSizeSmall:r,fontSizeMedium:f,fontSizeLarge:m,titleTextColor:s,thColor:C(l,a),thColorModal:C(i,a),thColorPopover:C(d,a),thTextColor:s,thFontWeight:u,tdTextColor:c,tdColor:l,tdColorModal:i,tdColorPopover:d,borderColor:C(l,p),borderColorModal:C(i,p),borderColorPopover:C(d,p),borderRadius:h})}const ee={common:F,self:Z},oe=g([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),W("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[g("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),$("left-label-placement",[e("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),$("left-label-align",[g("th",{textAlign:"left"})]),$("center-label-align",[g("th",{textAlign:"center"})]),$("right-label-align",[g("th",{textAlign:"right"})]),$("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[g("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[D("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),D("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),G(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),N(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),V="DESCRIPTION_ITEM_FLAG";function re(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[V]:!1}const te=Object.assign(Object.assign({},H.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),de=E({name:"Descriptions",props:te,slots:Object,setup(t){const{mergedClsPrefixRef:a,inlineThemeDisabled:c}=U(t),s=H("Descriptions","-descriptions",oe,ee,t,a),l=L(()=>{const{size:d,bordered:p}=t,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:u,thColor:y,thColorModal:r,thColorPopover:f,thTextColor:m,thFontWeight:R,tdTextColor:M,tdColor:j,tdColorModal:B,tdColorPopover:o,borderColor:S,borderColorModal:A,borderColorPopover:b,borderRadius:v,lineHeight:w,[T("fontSize",d)]:P,[T(p?"thPaddingBordered":"thPadding",d)]:x,[T(p?"tdPaddingBordered":"tdPadding",d)]:z}}=s.value;return{"--n-title-text-color":u,"--n-th-padding":x,"--n-td-padding":z,"--n-font-size":P,"--n-bezier":h,"--n-th-font-weight":R,"--n-line-height":w,"--n-th-text-color":m,"--n-td-text-color":M,"--n-th-color":y,"--n-th-color-modal":r,"--n-th-color-popover":f,"--n-td-color":j,"--n-td-color-modal":B,"--n-td-color-popover":o,"--n-border-radius":v,"--n-border-color":S,"--n-border-color-modal":A,"--n-border-color-popover":b}}),i=c?q("descriptions",L(()=>{let d="";const{size:p,bordered:h}=t;return h&&(d+="a"),d+=p[0],d}),l,t):void 0;return{mergedClsPrefix:a,cssVars:c?void 0:l,themeClass:i?.themeClass,onRender:i?.onRender,compitableColumn:X(t,["columns","column"]),inlineThemeDisabled:c}},render(){const t=this.$slots.default,a=t?J(t()):[];a.length;const{contentClass:c,labelClass:s,compitableColumn:l,labelPlacement:i,labelAlign:d,size:p,bordered:h,title:u,cssVars:y,mergedClsPrefix:r,separator:f,onRender:m}=this;m?.();const R=a.filter(o=>re(o)),M={span:0,row:[],secondRow:[],rows:[]},B=R.reduce((o,S,A)=>{const b=S.props||{},v=R.length-1===A,w=["label"in b?b.label:_(S,"label")],P=[_(S)],x=b.span||1,z=o.span;o.span+=x;const I=b.labelStyle||b["label-style"]||this.labelStyle,O=b.contentStyle||b["content-style"]||this.contentStyle;if(i==="left")h?o.row.push(n("th",{class:[`${r}-descriptions-table-header`,s],colspan:1,style:I},w),n("td",{class:[`${r}-descriptions-table-content`,c],colspan:v?(l-z)*2+1:x*2-1,style:O},P)):o.row.push(n("td",{class:`${r}-descriptions-table-content`,colspan:v?(l-z)*2:x*2},n("span",{class:[`${r}-descriptions-table-content__label`,s],style:I},[...w,f&&n("span",{class:`${r}-descriptions-separator`},f)]),n("span",{class:[`${r}-descriptions-table-content__content`,c],style:O},P)));else{const k=v?(l-z)*2:x*2;o.row.push(n("th",{class:[`${r}-descriptions-table-header`,s],colspan:k,style:I},w)),o.secondRow.push(n("td",{class:[`${r}-descriptions-table-content`,c],colspan:k,style:O},P))}return(o.span>=l||v)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),i!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},M).rows.map(o=>n("tr",{class:`${r}-descriptions-table-row`},o));return n("div",{style:y,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${i}-label-placement`,`${r}-descriptions--${d}-label-align`,`${r}-descriptions--${p}-size`,h&&`${r}-descriptions--bordered`]},u||this.$slots.header?n("div",{class:`${r}-descriptions-header`},u||Q(this,"header")):null,n("div",{class:`${r}-descriptions-table-wrapper`},n("table",{class:`${r}-descriptions-table`},n("tbody",null,i==="top"&&n("tr",{class:`${r}-descriptions-table-row`,style:{visibility:"collapse"}},K(l*2,n("td",null))),B))))}}),ne={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},ae=E({name:"DescriptionsItem",[V]:!0,props:ne,slots:Object,render(){return null}});export{de as N,ae as a};
