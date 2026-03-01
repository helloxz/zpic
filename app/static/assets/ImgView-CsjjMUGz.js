import{k as i,l as n,m as v,d as S,n as K,p as J,q as Q,c,a as f,o as d,s as W,u as X,v as Y,r as w,x as Z,y as T,b as tt,e,g as r,z as C,f as B,i as t,B as x,h as l,N as I,t as u,F as H,j as et}from"./index.2026030105.js";import{H as rt,F as ot}from"./footer-CYyob9Y4.js";import{u as at,a as st,r as M,N as A,_ as it}from"./_plugin-vue_export-helper-Dy1r_2Wr.js";import{A as lt}from"./Adsense-vIeDJLDn.js";import{N as nt,C as dt,a as ut,_ as mt}from"./sidebar.vue_vue_type_style_index_0_lang-CG9S4ADV.js";import{N as pt,a as F}from"./Grid-vj5hvJxU.js";import{N as ct}from"./text-07-wRjdJ.js";import{N as ft}from"./Alert-CsYCezA-.js";import{N as gt}from"./Input-tXTQBsTn.js";import{N as bt,a as _}from"./DescriptionsItem-Bw3SJ8k_.js";import{N as _t}from"./Spin-Dw2Ju-sx.js";import{N as z}from"./Space-n1N-ss0U.js";import{N as ht}from"./Image-BbaJ2sro.js";import"./LayoutHeader-TQwLSP0o.js";import"./MenuOutline-QpMAF4bj.js";import"./Divider-C18YZxAR.js";import"./use-locale-B3DVYRZe.js";import"./Suffix-DKA51MnF.js";import"./download-C2161hUv.js";const vt=i("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[n(">",[i("input",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),n("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),i("button",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),n("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),n("*",[n("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[n(">",[i("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),i("base-selection",[i("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),i("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),n("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[n(">",[i("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),i("base-selection",[i("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),i("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),wt={},xt=S({name:"InputGroup",props:wt,setup(g){const{mergedClsPrefixRef:b}=J(g);return Q("-input-group",vt,b),{mergedClsPrefix:b}},render(){const{mergedClsPrefix:g}=this;return K("div",{class:`${g}-input-group`},this.$slots)}}),yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Nt=S({name:"AlertCircleOutline",render:function(b,h){return d(),c("svg",yt,h[0]||(h[0]=[f("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),f("path",{d:"M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),f("path",{d:"M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",fill:"currentColor"},null,-1)]))}}),kt={class:"img-view-wrapper"},Ct={key:0,class:"result-container"},Bt={class:"image-container"},It={class:"image-toolbar"},Mt={key:0},zt={key:1},St=["innerHTML"],$t={key:1,class:"google"},Tt=S({__name:"ImgView",props:{imgid:{}},setup(g){const b=at(),h=st(),G=g,L=W(),V=X(),$=Y(),y=w(""),N=w(!0),s=w(null),R=w([]),m=Z({show:!1,message:"未知错误"}),D=T(()=>{if(!s.value)return[];const o=s.value.url,a=s.value.filename;return[{label:"URL",value:o},{label:"Markdown",value:`![${a}](${o})`},{label:"BBCode",value:`[img]${o}[/img]`},{label:"HTML",value:`<img src="${o}" alt="${a}">`}]}),P=o=>{if(o===0)return"0 B";const a=1024,k=["B","KB","MB","GB","TB"],p=Math.floor(Math.log(o)/Math.log(a));return parseFloat((o/Math.pow(a,p)).toFixed(2))+" "+k[p]},O=async o=>{try{await navigator.clipboard.writeText(o),$.success("已复制到剪贴板")}catch{$.error("复制失败")}},j=()=>{V.push("/")},q=T(()=>G.imgid||L.params.imgid||"");tt(async()=>{E(),setTimeout(()=>{U()},100);const o=q.value;if(!o){m.show=!0,m.message="无效的图片ID",N.value=!1;return}try{const{data:a}=await M.post(`/api/image_info/${o}`);a.code===200?s.value=a.data:(m.show=!0,m.message=a.msg||"获取图片信息失败")}catch(a){m.show=!0,m.message=a?.response?.data?.msg||"网络请求失败，请稍后重试"}finally{N.value=!1}});const E=()=>{M.get("/api/get_public_config?key=other_config").then(o=>{o.data.code===200&&(y.value=o.data.data.img_page_notice||"")})},U=()=>{M.get("/api/get_public_config?key=ad_config").then(o=>{o.data.code===200&&(R.value=o.data.data.right_sidebar||[])})};return(o,a)=>{const k=ft;return d(),c(H,null,[e(rt),f("div",kt,[e(t(_t),{show:N.value,size:"large"},{default:r(()=>[m.show?(d(),c("div",Ct,[e(t(nt),{status:"error",title:"出错了",description:m.message},{footer:r(()=>[e(t(x),{onClick:j},{default:r(()=>[...a[0]||(a[0]=[l("返回首页",-1)])]),_:1})]),_:1},8,["description"])])):s.value?(d(),C(t(pt),{key:1,"x-gap":"24","y-gap":"24",cols:"1 s:24 m:24 l:24 xl:24",responsive:"screen",class:"main-grid"},{default:r(()=>[e(t(F),{span:"24 s:24 m:16 l:16 xl:16"},{default:r(()=>[e(t(z),{vertical:"",size:24},{default:r(()=>[e(t(I),{class:"image-card",bordered:!1},{header:r(()=>[e(t(ut),{class:"image-title"},{default:r(()=>[l(u(s.value.filename),1)]),_:1})]),footer:r(()=>[f("div",It,[e(t(z),{align:"center"},{default:r(()=>[e(t(A),{component:t(dt)},null,8,["component"]),e(t(ct),{depth:3},{default:r(()=>[l("上传于 "+u(s.value.upload_at),1)]),_:1})]),_:1}),e(t(x),{type:"warning",secondary:"",size:"small"},{icon:r(()=>[e(t(A),{component:t(Nt)},null,8,["component"])]),default:r(()=>[a[1]||(a[1]=l(" 举报 ",-1))]),_:1})])]),default:r(()=>[f("div",Bt,[e(t(ht),{src:s.value.url,alt:s.value.filename,class:"main-image"},null,8,["src","alt"])])]),_:1}),e(k,{title:"提示",type:"info"},{default:r(()=>[y.value==""?(d(),c("div",Mt,"此图片来自网友上传，不代表本站立场，若有侵权，请联系网站管理员删除！")):(d(),c("div",zt,[f("span",{innerHTML:y.value},null,8,St)]))]),_:1}),e(t(I),{title:"图片链接",bordered:!1,size:"small"},{default:r(()=>[e(t(z),{vertical:""},{default:r(()=>[(d(!0),c(H,null,et(D.value,p=>(d(),C(t(xt),{key:p.label},{default:r(()=>[e(t(x),{style:{width:"25%"}},{default:r(()=>[l(u(p.label),1)]),_:2},1024),e(t(gt),{value:p.value,readonly:""},null,8,["value"]),e(t(x),{type:"primary",ghost:"",onClick:Ht=>O(p.value)},{default:r(()=>[...a[2]||(a[2]=[l("复制",-1)])]),_:1},8,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(t(F),{span:"24 s:24 m:8 l:8 xl:8"},{default:r(()=>[e(t(I),{title:"图片详情",bordered:!1,size:"small",class:"sticky-card"},{default:r(()=>[e(t(bt),{"label-placement":"left",column:1,size:"small",bordered:""},{default:r(()=>[e(t(_),{label:"图片大小"},{default:r(()=>[l(u(P(s.value.size)),1)]),_:1}),e(t(_),{label:"上传日期"},{default:r(()=>[l(u(s.value.upload_at.split(" ")[0]),1)]),_:1}),e(t(_),{label:"图片类型"},{default:r(()=>[l(u(s.value.mime_type),1)]),_:1}),e(t(_),{label:"图片后缀"},{default:r(()=>[l(u(s.value.ext),1)]),_:1}),e(t(_),{label:"像素"},{default:r(()=>[l(u(s.value.width)+" x "+u(s.value.height),1)]),_:1})]),_:1})]),_:1}),t(h).userInfo.tier!="paid"?(d(),C(mt,{key:0})):B("",!0),t(b).showAd?(d(),c("div",$t,[e(t(lt),{adStyle:"display:block",format:"autorelaxed",clientId:"ca-pub-1198592826613859",slotId:"8644126670"})])):B("",!0)]),_:1})]),_:1})):B("",!0)]),_:1},8,["show"])]),e(ot)],64)}}}),Zt=it(Tt,[["__scopeId","data-v-9966af8a"]]);export{Zt as default};
