import{k as i,l as n,m as v,d as M,n as j,p as q,q as A,c as b,a as c,o as m,r as k,s as E,v as I,x as K,b as U,e as $,f as e,g as r,u as t,F as T,y as H,z as J,B as w,j as l,N as C,t as d,h as Q,i as W}from"./index.2026012704.js";import{H as X,F as Y}from"./header-1dvBj7sj.js";import{N as Z}from"./Spin-Qw03ajqr.js";import{N as tt,C as et,a as rt}from"./CalendarOutline-ChnWsTlF.js";import{N as F,a as ot}from"./Grid-lOEvMzmY.js";import{N as at}from"./Image-BWWOtb_f.js";import{N as st}from"./text-BWwIRCNu.js";import{_ as it}from"./Alert-Qpabennv.js";import{N as lt}from"./Input-RNCF6gMj.js";import{N as nt,a as _}from"./DescriptionsItem-CYdm8zLR.js";import{a as dt,N as G,_ as ut}from"./user-CDWMApw_.js";import{N as B}from"./Space-BCV4WmVv.js";import"./MenuOutline-BP1wkn-c.js";import"./LayoutHeader-BODjEtMT.js";import"./get-slot-Bk_rJcZu.js";import"./use-locale-D6a3ZlVr.js";import"./download-C2161hUv.js";import"./Suffix-D1VPGhaz.js";const mt=i("input-group",`
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
 `)])])])])])]),pt={},ct=M({name:"InputGroup",props:pt,setup(f){const{mergedClsPrefixRef:g}=q(f);return A("-input-group",mt,g),{mergedClsPrefix:g}},render(){const{mergedClsPrefix:f}=this;return j("div",{class:`${f}-input-group`},this.$slots)}}),ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},bt=M({name:"AlertCircleOutline",render:function(g,h){return m(),b("svg",ft,h[0]||(h[0]=[c("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),c("path",{d:"M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),c("path",{d:"M256 367.91a20 20 0 1 1 20-20a20 20 0 0 1-20 20z",fill:"currentColor"},null,-1)]))}}),gt={class:"img-view-wrapper"},_t={key:0,class:"result-container"},ht={class:"image-container"},vt={class:"image-toolbar"},wt={key:0},xt={key:1},Nt=["innerHTML"],yt=M({__name:"ImgView",props:{imgid:{}},setup(f){const g=f,h=K(),L=W(),z=dt(),x=k(""),N=k(!0),s=k(null),u=E({show:!1,message:"未知错误"}),S=I(()=>{if(!s.value)return[];const a=s.value.url,o=s.value.filename;return[{label:"URL",value:a},{label:"Markdown",value:`![${o}](${a})`},{label:"BBCode",value:`[img]${a}[/img]`},{label:"HTML",value:`<img src="${a}" alt="${o}">`}]}),V=a=>{if(a===0)return"0 B";const o=1024,y=["B","KB","MB","GB","TB"],p=Math.floor(Math.log(a)/Math.log(o));return parseFloat((a/Math.pow(o,p)).toFixed(2))+" "+y[p]},R=async a=>{try{await navigator.clipboard.writeText(a),z.success("已复制到剪贴板")}catch{z.error("复制失败")}},D=()=>{L.push("/")},P=I(()=>g.imgid||h.params.imgid||"");U(async()=>{O();const a=P.value;if(!a){u.show=!0,u.message="无效的图片ID",N.value=!1;return}try{const{data:o}=await $.post(`/api/image_info/${a}`);o.code===200?s.value=o.data:(u.show=!0,u.message=o.msg||"获取图片信息失败")}catch(o){u.show=!0,u.message=o?.response?.data?.msg||"网络请求失败，请稍后重试"}finally{N.value=!1}});const O=()=>{$.get("/api/get_public_config?key=other_config").then(a=>{a.data.code===200&&(x.value=a.data.data.img_page_notice||"")})};return(a,o)=>{const y=it;return m(),b(T,null,[e(X),c("div",gt,[e(t(Z),{show:N.value,size:"large"},{default:r(()=>[u.show?(m(),b("div",_t,[e(t(tt),{status:"error",title:"出错了",description:u.message},{footer:r(()=>[e(t(w),{onClick:D},{default:r(()=>[...o[0]||(o[0]=[l("返回首页",-1)])]),_:1})]),_:1},8,["description"])])):s.value?(m(),H(t(ot),{key:1,"x-gap":"24","y-gap":"24",cols:"1 s:24 m:24 l:24 xl:24",responsive:"screen",class:"main-grid"},{default:r(()=>[e(t(F),{span:"24 s:24 m:16 l:16 xl:16"},{default:r(()=>[e(t(B),{vertical:"",size:24},{default:r(()=>[e(t(C),{class:"image-card",bordered:!1},{header:r(()=>[e(t(rt),{class:"image-title"},{default:r(()=>[l(d(s.value.filename),1)]),_:1})]),footer:r(()=>[c("div",vt,[e(t(B),{align:"center"},{default:r(()=>[e(t(G),{component:t(et)},null,8,["component"]),e(t(st),{depth:3},{default:r(()=>[l("上传于 "+d(s.value.upload_at),1)]),_:1})]),_:1}),e(t(w),{type:"warning",secondary:"",size:"small"},{icon:r(()=>[e(t(G),{component:t(bt)},null,8,["component"])]),default:r(()=>[o[1]||(o[1]=l(" 举报 ",-1))]),_:1})])]),default:r(()=>[c("div",ht,[e(t(at),{src:s.value.url,alt:s.value.filename,class:"main-image"},null,8,["src","alt"])])]),_:1}),e(y,{title:"提示",type:"info"},{default:r(()=>[x.value==""?(m(),b("div",wt,"此图片来自网友上传，不代表本站立场，若有侵权，请联系网站管理员删除！")):(m(),b("div",xt,[c("span",{innerHTML:x.value},null,8,Nt)]))]),_:1}),e(t(C),{title:"图片链接",bordered:!1,size:"small"},{default:r(()=>[e(t(B),{vertical:""},{default:r(()=>[(m(!0),b(T,null,Q(S.value,p=>(m(),H(t(ct),{key:p.label},{default:r(()=>[e(t(w),{style:{width:"25%"}},{default:r(()=>[l(d(p.label),1)]),_:2},1024),e(t(lt),{value:p.value,readonly:""},null,8,["value"]),e(t(w),{type:"primary",ghost:"",onClick:kt=>R(p.value)},{default:r(()=>[...o[2]||(o[2]=[l("复制",-1)])]),_:1},8,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),e(t(F),{span:"24 s:24 m:8 l:8 xl:8"},{default:r(()=>[e(t(C),{title:"图片详情",bordered:!1,size:"small",class:"sticky-card"},{default:r(()=>[e(t(nt),{"label-placement":"left",column:1,size:"small",bordered:""},{default:r(()=>[e(t(_),{label:"图片大小"},{default:r(()=>[l(d(V(s.value.size)),1)]),_:1}),e(t(_),{label:"上传日期"},{default:r(()=>[l(d(s.value.upload_at.split(" ")[0]),1)]),_:1}),e(t(_),{label:"图片类型"},{default:r(()=>[l(d(s.value.mime_type),1)]),_:1}),e(t(_),{label:"图片后缀"},{default:r(()=>[l(d(s.value.ext),1)]),_:1}),e(t(_),{label:"像素"},{default:r(()=>[l(d(s.value.width)+" x "+d(s.value.height),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):J("",!0)]),_:1},8,["show"])]),e(Y)],64)}}}),qt=ut(yt,[["__scopeId","data-v-7c5bf628"]]);export{qt as default};
