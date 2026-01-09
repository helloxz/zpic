import{f as re,bl as R,s as C,p as n,bT as ae,bU as de,w as A,q as v,v as y,d as L,x as ce,h as p,c5 as pe,ai as be,z as ne,A as V,n as X,K as U,M as le,B as ge,F as ie,a0 as he,r as N,E as ue,W as j,Y as _,a8 as u,a5 as m,ae as b,as as me,a4 as G,aB as ve,X as Q,aq as S,at as O,ax as Z,af as fe,aC as ee,an as xe,am as te,aA as Ce,ap as K,_ as ye}from"./index.2026010903.js";import{N as we}from"./Empty-Dtprdsyr.js";function oe(t,r="default",a=[]){const{children:s}=t;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const d=s[r];if(typeof d=="function")return d()}return a}const _e={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function Se(t){const{tableHeaderColor:r,textColor2:a,textColor1:s,cardColor:d,modalColor:e,popoverColor:o,dividerColor:g,borderRadius:f,fontWeightStrong:l,lineHeight:h,fontSizeSmall:i,fontSizeMedium:z,fontSizeLarge:w}=t;return Object.assign(Object.assign({},_e),{lineHeight:h,fontSizeSmall:i,fontSizeMedium:z,fontSizeLarge:w,titleTextColor:s,thColor:R(d,r),thColorModal:R(e,r),thColorPopover:R(o,r),thTextColor:s,thFontWeight:l,tdTextColor:a,tdColor:d,tdColorModal:e,tdColorPopover:o,borderColor:R(d,g),borderColorModal:R(e,g),borderColorPopover:R(o,g),borderRadius:f})}const ze={common:re,self:Se},Pe=C([n("descriptions",{fontSize:"var(--n-font-size)"},[n("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),n("descriptions-table-wrapper",[n("descriptions-table",[n("descriptions-table-row",[n("descriptions-table-header",{padding:"var(--n-th-padding)"}),n("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),A("bordered",[n("descriptions-table-wrapper",[n("descriptions-table",[n("descriptions-table-row",[C("&:last-child",[n("descriptions-table-content",{paddingBottom:0})])])])])]),v("left-label-placement",[n("descriptions-table-content",[C("> *",{verticalAlign:"top"})])]),v("left-label-align",[C("th",{textAlign:"left"})]),v("center-label-align",[C("th",{textAlign:"center"})]),v("right-label-align",[C("th",{textAlign:"right"})]),v("bordered",[n("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[n("descriptions-table",[n("descriptions-table-row",[C("&:not(:last-child)",[n("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),n("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),n("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[C("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),n("descriptions-table-content",[C("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),n("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),n("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[n("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[n("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[n("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),n("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),y("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),n("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ae(n("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),de(n("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),se="DESCRIPTION_ITEM_FLAG";function $e(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[se]:!1}const Re=Object.assign(Object.assign({},V.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),ke=L({name:"Descriptions",props:Re,slots:Object,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=ne(t),s=V("Descriptions","-descriptions",Pe,ze,t,r),d=X(()=>{const{size:o,bordered:g}=t,{common:{cubicBezierEaseInOut:f},self:{titleTextColor:l,thColor:h,thColorModal:i,thColorPopover:z,thTextColor:w,thFontWeight:I,tdTextColor:E,tdColor:Y,tdColorModal:W,tdColorPopover:c,borderColor:k,borderColorModal:F,borderColorPopover:x,borderRadius:P,lineHeight:B,[U("fontSize",o)]:M,[U(g?"thPaddingBordered":"thPadding",o)]:$,[U(g?"tdPaddingBordered":"tdPadding",o)]:T}}=s.value;return{"--n-title-text-color":l,"--n-th-padding":$,"--n-td-padding":T,"--n-font-size":M,"--n-bezier":f,"--n-th-font-weight":I,"--n-line-height":B,"--n-th-text-color":w,"--n-td-text-color":E,"--n-th-color":h,"--n-th-color-modal":i,"--n-th-color-popover":z,"--n-td-color":Y,"--n-td-color-modal":W,"--n-td-color-popover":c,"--n-border-radius":P,"--n-border-color":k,"--n-border-color-modal":F,"--n-border-color-popover":x}}),e=a?le("descriptions",X(()=>{let o="";const{size:g,bordered:f}=t;return f&&(o+="a"),o+=g[0],o}),d,t):void 0;return{mergedClsPrefix:r,cssVars:a?void 0:d,themeClass:e?.themeClass,onRender:e?.onRender,compitableColumn:ge(t,["columns","column"]),inlineThemeDisabled:a}},render(){const t=this.$slots.default,r=t?ce(t()):[];r.length;const{contentClass:a,labelClass:s,compitableColumn:d,labelPlacement:e,labelAlign:o,size:g,bordered:f,title:l,cssVars:h,mergedClsPrefix:i,separator:z,onRender:w}=this;w?.();const I=r.filter(c=>$e(c)),E={span:0,row:[],secondRow:[],rows:[]},W=I.reduce((c,k,F)=>{const x=k.props||{},P=I.length-1===F,B=["label"in x?x.label:oe(k,"label")],M=[oe(k)],$=x.span||1,T=c.span;c.span+=$;const H=x.labelStyle||x["label-style"]||this.labelStyle,q=x.contentStyle||x["content-style"]||this.contentStyle;if(e==="left")f?c.row.push(p("th",{class:[`${i}-descriptions-table-header`,s],colspan:1,style:H},B),p("td",{class:[`${i}-descriptions-table-content`,a],colspan:P?(d-T)*2+1:$*2-1,style:q},M)):c.row.push(p("td",{class:`${i}-descriptions-table-content`,colspan:P?(d-T)*2:$*2},p("span",{class:[`${i}-descriptions-table-content__label`,s],style:H},[...B,z&&p("span",{class:`${i}-descriptions-separator`},z)]),p("span",{class:[`${i}-descriptions-table-content__content`,a],style:q},M)));else{const J=P?(d-T)*2:$*2;c.row.push(p("th",{class:[`${i}-descriptions-table-header`,s],colspan:J,style:H},B)),c.secondRow.push(p("td",{class:[`${i}-descriptions-table-content`,a],colspan:J,style:q},M))}return(c.span>=d||P)&&(c.span=0,c.row.length&&(c.rows.push(c.row),c.row=[]),e!=="left"&&c.secondRow.length&&(c.rows.push(c.secondRow),c.secondRow=[])),c},E).rows.map(c=>p("tr",{class:`${i}-descriptions-table-row`},c));return p("div",{style:h,class:[`${i}-descriptions`,this.themeClass,`${i}-descriptions--${e}-label-placement`,`${i}-descriptions--${o}-label-align`,`${i}-descriptions--${g}-size`,f&&`${i}-descriptions--bordered`]},l||this.$slots.header?p("div",{class:`${i}-descriptions-header`},l||be(this,"header")):null,p("div",{class:`${i}-descriptions-table-wrapper`},p("table",{class:`${i}-descriptions-table`},p("tbody",null,e==="top"&&p("tr",{class:`${i}-descriptions-table-row`,style:{visibility:"collapse"}},pe(d*2,p("td",null))),W))))}}),Be={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},D=L({name:"DescriptionsItem",[se]:!0,props:Be,slots:Object,render(){return null}});function Me(t){const{textColor1:r,dividerColor:a,fontWeightStrong:s}=t;return{textColor:r,color:a,fontWeight:s}}const Te={common:re,self:Me},Oe=n("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[A("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[A("no-title",`
 display: flex;
 align-items: center;
 `)]),y("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),v("title-position-left",[y("line",[v("left",{width:"28px"})])]),v("title-position-right",[y("line",[v("right",{width:"28px"})])]),v("dashed",[y("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),v("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),y("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),A("dashed",[y("line",{backgroundColor:"var(--n-color)"})]),v("dashed",[y("line",{borderColor:"var(--n-color)"})]),v("vertical",{backgroundColor:"var(--n-color)"})]),De=Object.assign(Object.assign({},V.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Ie=L({name:"Divider",props:De,setup(t){const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=ne(t),s=V("Divider","-divider",Oe,Te,t,r),d=X(()=>{const{common:{cubicBezierEaseInOut:o},self:{color:g,textColor:f,fontWeight:l}}=s.value;return{"--n-bezier":o,"--n-color":g,"--n-text-color":f,"--n-font-weight":l}}),e=a?le("divider",void 0,d,t):void 0;return{mergedClsPrefix:r,cssVars:a?void 0:d,themeClass:e?.themeClass,onRender:e?.onRender}},render(){var t;const{$slots:r,titlePlacement:a,vertical:s,dashed:d,cssVars:e,mergedClsPrefix:o}=this;return(t=this.onRender)===null||t===void 0||t.call(this),p("div",{role:"separator",class:[`${o}-divider`,this.themeClass,{[`${o}-divider--vertical`]:s,[`${o}-divider--no-title`]:!r.default,[`${o}-divider--dashed`]:d,[`${o}-divider--title-position-${a}`]:r.default&&a}],style:e},s?null:p("div",{class:`${o}-divider__line ${o}-divider__line--left`}),!s&&r.default?p(ie,null,p("div",{class:`${o}-divider__title`},this.$slots),p("div",{class:`${o}-divider__line ${o}-divider__line--right`})):null)}}),Ne={class:"license-container"},je={key:0},Ae={key:1},Le={class:"form-section"},Ve=L({__name:"license",setup(t){const r=he(),a=N(!1),s=N(!1),d=N(!1),e=N(null),o=async()=>{a.value=!0;try{const l=await K.get("/api/admin/get_license");l.data.code===200?e.value=l.data.data:r.error(l.data.msg||"获取许可证信息失败")}catch(l){console.error(l),r.error("网络请求错误")}finally{a.value=!1}},g=async()=>{if(e.value){s.value=!0;try{const l=await K.post("/api/admin/save_license",{license_content:e.value.license_content});l.data.code===200?(r.success(l.data.msg||"保存成功"),await o()):r.error(l.data.msg||"保存失败")}catch(l){console.error(l),r.error("网络请求错误")}finally{s.value=!1}}},f=async()=>{d.value=!0;try{const l=await K.post("/api/admin/remove_license");l.data.code===200?(r.success(l.data.msg||"移除成功"),await o()):r.error(l.data.msg||"移除失败")}catch(l){console.error(l),r.error("网络请求错误")}finally{d.value=!1}};return ue(()=>{o()}),(l,h)=>(_(),j("div",Ne,[u(b(Ce),{title:"授权管理",class:"license-card",size:"medium",bordered:!0},{default:m(()=>[u(b(me),{show:a.value},{default:m(()=>[e.value?(_(),j("div",je,[u(b(ke),{"label-placement":"left",column:1,bordered:""},{default:m(()=>[u(b(D),{label:"邮箱"},{default:m(()=>[S(O(e.value.email||"-"),1)]),_:1}),u(b(D),{label:"订单号"},{default:m(()=>[S(O(e.value.order_id||"-"),1)]),_:1}),u(b(D),{label:"授权域名"},{default:m(()=>[e.value.domains&&e.value.domains.length>0?(_(),G(b(Z),{key:0,size:"small"},{default:m(()=>[(_(!0),j(ie,null,fe(e.value.domains,i=>(_(),G(b(ee),{key:i,type:"success",size:"small",bordered:!1},{default:m(()=>[S(O(i),1)]),_:2},1024))),128))]),_:1})):(_(),j("span",Ae,"-"))]),_:1}),u(b(D),{label:"用户数"},{default:m(()=>[S(O(e.value.max_users),1)]),_:1}),u(b(D),{label:"版本"},{default:m(()=>[u(b(ee),{type:"warning",strong:""},{default:m(()=>[S(O(e.value.edition.toUpperCase()),1)]),_:1})]),_:1})]),_:1}),u(b(Ie)),Q("div",Le,[h[1]||(h[1]=Q("div",{class:"label"},"许可证内容",-1)),u(b(xe),{value:e.value.license_content,"onUpdate:value":h[0]||(h[0]=i=>e.value.license_content=i),type:"textarea",placeholder:"请输入许可证内容",autosize:{minRows:5,maxRows:10},class:"license-input"},null,8,["value"])]),u(b(Z),{class:"action-buttons"},{default:m(()=>[u(b(te),{type:"primary",size:"large",onClick:g,class:"action-btn",loading:s.value},{default:m(()=>[...h[2]||(h[2]=[S(" 保存授权 ",-1)])]),_:1},8,["loading"]),u(b(te),{type:"error",size:"large",onClick:f,class:"action-btn",loading:d.value},{default:m(()=>[...h[3]||(h[3]=[S(" 移除授权 ",-1)])]),_:1},8,["loading"])]),_:1})])):a.value?ve("",!0):(_(),G(b(we),{key:1,description:"暂无许可证信息",class:"mt-4"}))]),_:1},8,["show"])]),_:1})]))}}),Fe=ye(Ve,[["__scopeId","data-v-4f49b037"]]);export{Fe as default};
