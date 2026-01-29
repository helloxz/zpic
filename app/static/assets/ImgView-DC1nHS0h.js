import{k as i,l as u,m as v,d as I,n as K,p as U,q as J,c as p,a as f,o as n,r as w,s as Q,v as H,x as W,b as X,e as C,f as e,g as r,u as t,F as B,y as L,z as F,B as x,j as l,N as M,t as m,h as G,i as Y}from"./index.2026012910.js";import{H as Z,F as tt}from"./header-BgV9IKOF.js";import{N as et}from"./Spin-N19yFVKr.js";import{N as rt,C as ot,a as at}from"./CalendarOutline-DSapxHuQ.js";import{N as S,a as st}from"./Grid-vpv5knuF.js";import{N as it}from"./Image-DXO_Bh1K.js";import{N as lt}from"./text-DBRF_iBs.js";import{_ as nt}from"./Alert-BRHH-RKc.js";import{N as dt}from"./Input-DvdbG2Y6.js";import{N as ut,a as _}from"./DescriptionsItem-C5N9Znhl.js";import{a as mt,N as V,_ as pt}from"./user-BoLtvJIY.js";import{N as z}from"./Space-DCsaOzET.js";import"./MenuOutline-4OEK20Gr.js";import"./LayoutHeader-Dy6-kqDJ.js";import"./get-slot-Bk_rJcZu.js";import"./use-locale-CfDqmicv.js";import"./download-C2161hUv.js";import"./Suffix-CorbwN1y.js";const ct=i("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[u(">",[i("input",[u("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),i("button",[u("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),u("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),u("*",[u("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[u(">",[i("input",`
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
 `)])])]),u("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[u(">",[i("input",`
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
 `)])])])])])]),ft={},gt=I({name:"InputGroup",props:ft,setup(g){const{mergedClsPrefixRef:b}=U(g);return J("-input-group",ct,b),{mergedClsPrefix:b}},render(){const{mergedClsPrefix:g}=this;return K("div",{class:`${g}-input-group`},this.$slots)}}),bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},_t=I({name:"AlertCircleOutline",render:function(b,h){return n(),p("svg",bt,h[0]||(h[0]=[f("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),f("path",{d:"M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),f("path",{d:"M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",fill:"currentColor"},null,-1)]))}}),ht={class:"img-view-wrapper"},vt={key:0,class:"result-container"},wt={class:"image-container"},xt={class:"image-toolbar"},Nt={key:0},yt={key:1},kt=["innerHTML"],Ct={class:"custom-right-sidebar"},Bt=["innerHTML"],Mt=I({__name:"ImgView",props:{imgid:{}},setup(g){const b=g,h=W(),R=Y(),T=mt(),N=w(""),y=w(!0),s=w(null),$=w([]),c=Q({show:!1,message:"未知错误"}),D=H(()=>{if(!s.value)return[];const o=s.value.url,a=s.value.filename;return[{label:"URL",value:o},{label:"Markdown",value:`![${a}](${o})`},{label:"BBCode",value:`[img]${o}[/img]`},{label:"HTML",value:`<img src="${o}" alt="${a}">`}]}),P=o=>{if(o===0)return"0 B";const a=1024,k=["B","KB","MB","GB","TB"],d=Math.floor(Math.log(o)/Math.log(a));return parseFloat((o/Math.pow(a,d)).toFixed(2))+" "+k[d]},O=async o=>{try{await navigator.clipboard.writeText(o),T.success("已复制到剪贴板")}catch{T.error("复制失败")}},j=()=>{R.push("/")},q=H(()=>b.imgid||h.params.imgid||"");X(async()=>{A(),setTimeout(()=>{E()},100);const o=q.value;if(!o){c.show=!0,c.message="无效的图片ID",y.value=!1;return}try{const{data:a}=await C.post(`/api/image_info/${o}`);a.code===200?s.value=a.data:(c.show=!0,c.message=a.msg||"获取图片信息失败")}catch(a){c.show=!0,c.message=a?.response?.data?.msg||"网络请求失败，请稍后重试"}finally{y.value=!1}});const A=()=>{C.get("/api/get_public_config?key=other_config").then(o=>{o.data.code===200&&(N.value=o.data.data.img_page_notice||"")})},E=()=>{C.get("/api/get_public_config?key=ad_config").then(o=>{o.data.code===200&&($.value=o.data.data.right_sidebar||[])})};return(o,a)=>{const k=nt;return n(),p(B,null,[e(Z),f("div",ht,[e(t(et),{show:y.value,size:"large"},{default:r(()=>[c.show?(n(),p("div",vt,[e(t(rt),{status:"error",title:"出错了",description:c.message},{footer:r(()=>[e(t(x),{onClick:j},{default:r(()=>[...a[0]||(a[0]=[l("返回首页",-1)])]),_:1})]),_:1},8,["description"])])):s.value?(n(),L(t(st),{key:1,"x-gap":"24","y-gap":"24",cols:"1 s:24 m:24 l:24 xl:24",responsive:"screen",class:"main-grid"},{default:r(()=>[e(t(S),{span:"24 s:24 m:16 l:16 xl:16"},{default:r(()=>[e(t(z),{vertical:"",size:24},{default:r(()=>[e(t(M),{class:"image-card",bordered:!1},{header:r(()=>[e(t(at),{class:"image-title"},{default:r(()=>[l(m(s.value.filename),1)]),_:1})]),footer:r(()=>[f("div",xt,[e(t(z),{align:"center"},{default:r(()=>[e(t(V),{component:t(ot)},null,8,["component"]),e(t(lt),{depth:3},{default:r(()=>[l("上传于 "+m(s.value.upload_at),1)]),_:1})]),_:1}),e(t(x),{type:"warning",secondary:"",size:"small"},{icon:r(()=>[e(t(V),{component:t(_t)},null,8,["component"])]),default:r(()=>[a[1]||(a[1]=l(" 举报 ",-1))]),_:1})])]),default:r(()=>[f("div",wt,[e(t(it),{src:s.value.url,alt:s.value.filename,class:"main-image"},null,8,["src","alt"])])]),_:1}),e(k,{title:"提示",type:"info"},{default:r(()=>[N.value==""?(n(),p("div",Nt,"此图片来自网友上传，不代表本站立场，若有侵权，请联系网站管理员删除！")):(n(),p("div",yt,[f("span",{innerHTML:N.value},null,8,kt)]))]),_:1}),e(t(M),{title:"图片链接",bordered:!1,size:"small"},{default:r(()=>[e(t(z),{vertical:""},{default:r(()=>[(n(!0),p(B,null,G(D.value,d=>(n(),L(t(gt),{key:d.label},{default:r(()=>[e(t(x),{style:{width:"25%"}},{default:r(()=>[l(m(d.label),1)]),_:2},1024),e(t(dt),{value:d.value,readonly:""},null,8,["value"]),e(t(x),{type:"primary",ghost:"",onClick:zt=>O(d.value)},{default:r(()=>[...a[2]||(a[2]=[l("复制",-1)])]),_:1},8,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(t(S),{span:"24 s:24 m:8 l:8 xl:8"},{default:r(()=>[e(t(M),{title:"图片详情",bordered:!1,size:"small",class:"sticky-card"},{default:r(()=>[e(t(ut),{"label-placement":"left",column:1,size:"small",bordered:""},{default:r(()=>[e(t(_),{label:"图片大小"},{default:r(()=>[l(m(P(s.value.size)),1)]),_:1}),e(t(_),{label:"上传日期"},{default:r(()=>[l(m(s.value.upload_at.split(" ")[0]),1)]),_:1}),e(t(_),{label:"图片类型"},{default:r(()=>[l(m(s.value.mime_type),1)]),_:1}),e(t(_),{label:"图片后缀"},{default:r(()=>[l(m(s.value.ext),1)]),_:1}),e(t(_),{label:"像素"},{default:r(()=>[l(m(s.value.width)+" x "+m(s.value.height),1)]),_:1})]),_:1})]),_:1}),(n(!0),p(B,null,G($.value,d=>(n(),p("div",Ct,[d!=""?(n(),p("div",{key:0,class:"box",innerHTML:d},null,8,Bt)):F("",!0)]))),256))]),_:1})]),_:1})):F("",!0)]),_:1},8,["show"])]),e(tt)],64)}}}),Ut=pt(Mt,[["__scopeId","data-v-071e16ab"]]);export{Ut as default};
