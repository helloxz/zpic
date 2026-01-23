import{m as u,p as b}from"./user-DaVVlxKs.js";import{k as v,J as d,d as m,n as p,p as f,D as i,v as l,G as C}from"./index.2026012302.js";const x=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[d("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),d("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),g={position:b,inverted:Boolean,bordered:{type:Boolean,default:!1}},B=m({name:"LayoutHeader",props:Object.assign(Object.assign({},i.props),g),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=f(e),c=i("Layout","-layout-header",x,u,e,r),a=l(()=>{const{common:{cubicBezierEaseInOut:h},self:t}=c.value,o={"--n-bezier":h};return e.inverted?(o["--n-color"]=t.headerColorInverted,o["--n-text-color"]=t.textColorInverted,o["--n-border-color"]=t.headerBorderColorInverted):(o["--n-color"]=t.headerColor,o["--n-text-color"]=t.textColor,o["--n-border-color"]=t.headerBorderColor),o}),s=n?C("layout-header",l(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:a,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}});export{B as _};
