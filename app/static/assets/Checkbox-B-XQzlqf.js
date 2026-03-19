import{q as se,aj as be,d as N,s as u,z as _,aH as K,r as P,n as A,a3 as ue,a4 as U,T as he,ad as i,G as m,v as n,bH as fe,bI as ke,H as T,x as S,az as ve,a1 as xe,aC as me,a_ as ge,U as pe,aD as Ce,A as L,ak as ye,C as j,D as ze,aI as we}from"./index.2026031902.js";import{j as E}from"./_plugin-vue_export-helper-ChkOpBTc.js";const Re={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"};function Se(o){const{baseColor:c,inputColorDisabled:h,cardColor:g,modalColor:w,popoverColor:k,textColorDisabled:p,borderColor:d,primaryColor:v,textColor2:r,fontSizeSmall:R,fontSizeMedium:t,fontSizeLarge:a,borderRadiusSmall:x,lineHeight:f}=o;return Object.assign(Object.assign({},Re),{labelLineHeight:f,fontSizeSmall:R,fontSizeMedium:t,fontSizeLarge:a,borderRadius:x,color:c,colorChecked:v,colorDisabled:h,colorDisabledChecked:h,colorTableHeader:g,colorTableHeaderModal:w,colorTableHeaderPopover:k,checkMarkColor:c,checkMarkColorDisabled:p,checkMarkColorDisabledChecked:p,border:`1px solid ${d}`,borderDisabled:`1px solid ${d}`,borderDisabledChecked:`1px solid ${d}`,borderChecked:`1px solid ${v}`,borderFocus:`1px solid ${v}`,boxShadowFocus:`0 0 0 2px ${be(v,{alpha:.3})}`,textColor:r,textColorDisabled:p})}const De={name:"Checkbox",common:se,self:Se},G=he("n-checkbox-group"),Te={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Be=N({name:"CheckboxGroup",props:Te,setup(o){const{mergedClsPrefixRef:c}=_(o),h=K(o),{mergedSizeRef:g,mergedDisabledRef:w}=h,k=P(o.defaultValue),p=A(()=>o.value),d=E(p,k),v=A(()=>{var t;return((t=d.value)===null||t===void 0?void 0:t.length)||0}),r=A(()=>Array.isArray(d.value)?new Set(d.value):new Set);function R(t,a){const{nTriggerFormInput:x,nTriggerFormChange:f}=h,{onChange:l,"onUpdate:value":C,onUpdateValue:y}=o;if(Array.isArray(d.value)){const s=Array.from(d.value),I=s.findIndex(H=>H===a);t?~I||(s.push(a),y&&i(y,s,{actionType:"check",value:a}),C&&i(C,s,{actionType:"check",value:a}),x(),f(),k.value=s,l&&i(l,s)):~I&&(s.splice(I,1),y&&i(y,s,{actionType:"uncheck",value:a}),C&&i(C,s,{actionType:"uncheck",value:a}),l&&i(l,s),k.value=s,x(),f())}else t?(y&&i(y,[a],{actionType:"check",value:a}),C&&i(C,[a],{actionType:"check",value:a}),l&&i(l,[a]),k.value=[a],x(),f()):(y&&i(y,[],{actionType:"uncheck",value:a}),C&&i(C,[],{actionType:"uncheck",value:a}),l&&i(l,[]),k.value=[],x(),f())}return ue(G,{checkedCountRef:v,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:r,disabledRef:w,mergedSizeRef:g,toggleCheckbox:R}),{mergedClsPrefix:c}},render(){return u("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),$e=()=>u("svg",{viewBox:"0 0 64 64",class:"check-icon"},u("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Me=()=>u("svg",{viewBox:"0 0 100 100",class:"line-icon"},u("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Fe=m([n("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[T("show-label","line-height: var(--n-label-line-height);"),m("&:hover",[n("checkbox-box",[S("border","border: var(--n-border-checked);")])]),m("&:focus:not(:active)",[n("checkbox-box",[S("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),T("inside-table",[n("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),T("checked",[n("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[n("checkbox-icon",[m(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("indeterminate",[n("checkbox-box",[n("checkbox-icon",[m(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),m(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),T("checked, indeterminate",[m("&:focus:not(:active)",[n("checkbox-box",[S("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),n("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S("border",{border:"var(--n-border-checked)"})])]),T("disabled",{cursor:"not-allowed"},[T("checked",[n("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[S("border",{border:"var(--n-border-disabled-checked)"}),n("checkbox-icon",[m(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),n("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[S("border",`
 border: var(--n-border-disabled);
 `),n("checkbox-icon",[m(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),S("label",`
 color: var(--n-text-color-disabled);
 `)]),n("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),n("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[S("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),n("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[m(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ve({left:"1px",top:"1px"})])]),S("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[m("&:empty",{display:"none"})])]),fe(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ke(n("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Ie=Object.assign(Object.assign({},L.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Pe=N({name:"Checkbox",props:Ie,setup(o){const c=pe(G,null),h=P(null),{mergedClsPrefixRef:g,inlineThemeDisabled:w,mergedRtlRef:k}=_(o),p=P(o.defaultChecked),d=U(o,"checked"),v=E(d,p),r=Ce(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return v.value===o.checkedValue}),R=K(o,{mergedSize(e){const{size:z}=o;if(z!==void 0)return z;if(c){const{value:b}=c.mergedSizeRef;if(b!==void 0)return b}if(e){const{mergedSize:b}=e;if(b!==void 0)return b.value}return"medium"},mergedDisabled(e){const{disabled:z}=o;if(z!==void 0)return z;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:b},checkedCountRef:D}=c;if(b!==void 0&&D.value>=b&&!r.value)return!0;const{minRef:{value:M}}=c;if(M!==void 0&&D.value<=M&&r.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:t,mergedSizeRef:a}=R,x=L("Checkbox","-checkbox",Fe,De,o,g);function f(e){if(c&&o.value!==void 0)c.toggleCheckbox(!r.value,o.value);else{const{onChange:z,"onUpdate:checked":b,onUpdateChecked:D}=o,{nTriggerFormInput:M,nTriggerFormChange:B}=R,F=r.value?o.uncheckedValue:o.checkedValue;b&&i(b,F,e),D&&i(D,F,e),z&&i(z,F,e),M(),B(),p.value=F}}function l(e){t.value||f(e)}function C(e){if(!t.value)switch(e.key){case" ":case"Enter":f(e)}}function y(e){switch(e.key){case" ":e.preventDefault()}}const s={focus:()=>{var e;(e=h.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=h.value)===null||e===void 0||e.blur()}},I=ye("Checkbox",k,g),H=A(()=>{const{value:e}=a,{common:{cubicBezierEaseInOut:z},self:{borderRadius:b,color:D,colorChecked:M,colorDisabled:B,colorTableHeader:F,colorTableHeaderModal:O,colorTableHeaderPopover:V,checkMarkColor:W,checkMarkColorDisabled:q,border:Y,borderFocus:J,borderDisabled:Q,borderChecked:X,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:re,colorDisabledChecked:ae,borderDisabledChecked:ne,labelPadding:ce,labelLineHeight:le,labelFontWeight:ie,[j("fontSize",e)]:de,[j("size",e)]:te}}=x.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":te,"--n-bezier":z,"--n-border-radius":b,"--n-border":Y,"--n-border-checked":X,"--n-border-focus":J,"--n-border-disabled":Q,"--n-border-disabled-checked":ne,"--n-box-shadow-focus":Z,"--n-color":D,"--n-color-checked":M,"--n-color-table":F,"--n-color-table-modal":O,"--n-color-table-popover":V,"--n-color-disabled":B,"--n-color-disabled-checked":ae,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":W,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":re,"--n-font-size":de,"--n-label-padding":ce}}),$=w?ze("checkbox",A(()=>a.value[0]),H,o):void 0;return Object.assign(R,s,{rtlEnabled:I,selfRef:h,mergedClsPrefix:g,mergedDisabled:t,renderedChecked:r,mergedTheme:x,labelId:we(),handleClick:l,handleKeyUp:C,handleKeyDown:y,cssVars:w?void 0:H,themeClass:$?.themeClass,onRender:$?.onRender})},render(){var o;const{$slots:c,renderedChecked:h,mergedDisabled:g,indeterminate:w,privateInsideTable:k,cssVars:p,labelId:d,label:v,mergedClsPrefix:r,focusable:R,handleKeyUp:t,handleKeyDown:a,handleClick:x}=this;(o=this.onRender)===null||o===void 0||o.call(this);const f=xe(c.default,l=>v||l?u("span",{class:`${r}-checkbox__label`,id:d},v||l):null);return u("div",{ref:"selfRef",class:[`${r}-checkbox`,this.themeClass,this.rtlEnabled&&`${r}-checkbox--rtl`,h&&`${r}-checkbox--checked`,g&&`${r}-checkbox--disabled`,w&&`${r}-checkbox--indeterminate`,k&&`${r}-checkbox--inside-table`,f&&`${r}-checkbox--show-label`],tabindex:g||!R?void 0:0,role:"checkbox","aria-checked":w?"mixed":h,"aria-labelledby":d,style:p,onKeyup:t,onKeydown:a,onClick:x,onMousedown:()=>{ge("selectstart",window,l=>{l.preventDefault()},{once:!0})}},u("div",{class:`${r}-checkbox-box-wrapper`}," ",u("div",{class:`${r}-checkbox-box`},u(me,null,{default:()=>this.indeterminate?u("div",{key:"indeterminate",class:`${r}-checkbox-icon`},Me()):u("div",{key:"check",class:`${r}-checkbox-icon`},$e())}),u("div",{class:`${r}-checkbox-box__border`}))),f)}});export{Be as N,Pe as a,De as c};
