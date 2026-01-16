import{i,j as n,k as v,d as C,l as L,m as P,n as O,c as w,a as f,o as c,r as z,p as j,q as I,s as q,v as A,x as E,b as e,e as r,u as t,F as M,y as $,z as K,B as _,h as l,N as y,t as d,f as U,g as J}from"./index.2026011601.js";import{H as Q,F as W}from"./header-BQkjMEiB.js";import{N as X}from"./Spin-D-nuZRhc.js";import{N as Y,C as Z,a as tt,b as et}from"./CalendarOutline-BjrS4QZm.js";import{N as F,a as rt}from"./Grid-wiNeP-65.js";import{N as ot}from"./Image-mxP2skOu.js";import{N as at}from"./Input-Ckmy3Cc7.js";import{N as st,a as g}from"./DescriptionsItem-C3QrakSW.js";import{a as it,N as G,_ as lt}from"./user-7-khRLGm.js";import{N as k}from"./Space-DZb-OT1w.js";import"./MenuOutline-ABrqv8xx.js";import"./LayoutHeader-CWhUXvf9.js";import"./get-slot-Bk_rJcZu.js";import"./use-locale-B6BNXCpq.js";import"./download-C2161hUv.js";import"./Suffix-DKz5vqdt.js";const nt=i("input-group",`
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
 `)])])])])])]),dt={},ut=C({name:"InputGroup",props:dt,setup(m){const{mergedClsPrefixRef:b}=P(m);return O("-input-group",nt,b),{mergedClsPrefix:b}},render(){const{mergedClsPrefix:m}=this;return L("div",{class:`${m}-input-group`},this.$slots)}}),mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pt=C({name:"AlertCircleOutline",render:function(b,h){return c(),w("svg",mt,h[0]||(h[0]=[f("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),f("path",{d:"M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),f("path",{d:"M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",fill:"currentColor"},null,-1)]))}}),ct={class:"img-view-wrapper"},ft={key:0,class:"result-container"},bt={class:"image-container"},gt={class:"image-toolbar"},ht=C({__name:"ImgView",props:{imgid:{}},setup(m){const b=m,h=q(),S=J(),B=it(),x=z(!0),a=z(null),u=j({show:!1,message:"未知错误"}),T=I(()=>{if(!a.value)return[];const s=a.value.url,o=a.value.filename;return[{label:"URL",value:s},{label:"Markdown",value:`![${o}](${s})`},{label:"BBCode",value:`[img]${s}[/img]`},{label:"HTML",value:`<img src="${s}" alt="${o}">`}]}),V=s=>{if(s===0)return"0 B";const o=1024,p=["B","KB","MB","GB","TB"],N=Math.floor(Math.log(s)/Math.log(o));return parseFloat((s/Math.pow(o,N)).toFixed(2))+" "+p[N]},H=async s=>{try{await navigator.clipboard.writeText(s),B.success("已复制到剪贴板")}catch{B.error("复制失败")}},R=()=>{S.push("/")},D=I(()=>b.imgid||h.params.imgid||"");return A(async()=>{const s=D.value;if(!s){u.show=!0,u.message="无效的图片ID",x.value=!1;return}try{const{data:o}=await E.post(`/api/image_info/${s}`);o.code===200?a.value=o.data:(u.show=!0,u.message=o.msg||"获取图片信息失败")}catch(o){u.show=!0,u.message=o?.response?.data?.msg||"网络请求失败，请稍后重试"}finally{x.value=!1}}),(s,o)=>(c(),w(M,null,[e(Q),f("div",ct,[e(t(X),{show:x.value,size:"large"},{default:r(()=>[u.show?(c(),w("div",ft,[e(t(Y),{status:"error",title:"出错了",description:u.message},{footer:r(()=>[e(t(_),{onClick:R},{default:r(()=>[...o[0]||(o[0]=[l("返回首页",-1)])]),_:1})]),_:1},8,["description"])])):a.value?(c(),$(t(rt),{key:1,"x-gap":"24","y-gap":"24",cols:"1 s:24 m:24 l:24 xl:24",responsive:"screen",class:"main-grid"},{default:r(()=>[e(t(F),{span:"24 s:24 m:16 l:16 xl:16"},{default:r(()=>[e(t(k),{vertical:"",size:24},{default:r(()=>[e(t(y),{class:"image-card",bordered:!1},{header:r(()=>[e(t(et),{class:"image-title"},{default:r(()=>[l(d(a.value.filename),1)]),_:1})]),footer:r(()=>[f("div",gt,[e(t(k),{align:"center"},{default:r(()=>[e(t(G),{component:t(Z)},null,8,["component"]),e(t(tt),{depth:3},{default:r(()=>[l("上传于 "+d(a.value.upload_at),1)]),_:1})]),_:1}),e(t(_),{type:"warning",secondary:"",size:"small"},{icon:r(()=>[e(t(G),{component:t(pt)},null,8,["component"])]),default:r(()=>[o[1]||(o[1]=l(" 举报 ",-1))]),_:1})])]),default:r(()=>[f("div",bt,[e(t(ot),{src:a.value.url,alt:a.value.filename,class:"main-image"},null,8,["src","alt"])])]),_:1}),e(t(y),{title:"图片链接",bordered:!1,size:"small"},{default:r(()=>[e(t(k),{vertical:""},{default:r(()=>[(c(!0),w(M,null,U(T.value,p=>(c(),$(t(ut),{key:p.label},{default:r(()=>[e(t(_),{style:{width:"25%"}},{default:r(()=>[l(d(p.label),1)]),_:2},1024),e(t(at),{value:p.value,readonly:""},null,8,["value"]),e(t(_),{type:"primary",ghost:"",onClick:N=>H(p.value)},{default:r(()=>[...o[2]||(o[2]=[l("复制",-1)])]),_:1},8,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(t(F),{span:"24 s:24 m:8 l:8 xl:8"},{default:r(()=>[e(t(y),{title:"图片详情",bordered:!1,size:"small",class:"sticky-card"},{default:r(()=>[e(t(st),{"label-placement":"left",column:1,size:"small",bordered:""},{default:r(()=>[e(t(g),{label:"图片大小"},{default:r(()=>[l(d(V(a.value.size)),1)]),_:1}),e(t(g),{label:"上传日期"},{default:r(()=>[l(d(a.value.upload_at.split(" ")[0]),1)]),_:1}),e(t(g),{label:"图片类型"},{default:r(()=>[l(d(a.value.mime_type),1)]),_:1}),e(t(g),{label:"图片后缀"},{default:r(()=>[l(d(a.value.ext),1)]),_:1}),e(t(g),{label:"像素"},{default:r(()=>[l(d(a.value.width)+" x "+d(a.value.height),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):K("",!0)]),_:1},8,["show"])]),e(W)],64))}}),Tt=lt(ht,[["__scopeId","data-v-ff3633d5"]]);export{Tt as default};
