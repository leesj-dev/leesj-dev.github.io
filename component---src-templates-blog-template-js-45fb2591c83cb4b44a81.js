"use strict";(self.webpackChunkleesj_me=self.webpackChunkleesj_me||[]).push([[637],{5758:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(6180),s=a(6618),c=a(8232);var l=function(e){let{post:t,viewCount:a}=e;return r.createElement("header",{className:"post-header"},t.emoji&&r.createElement("div",{className:"emoji"},t.emoji),r.createElement("div",{className:"info"},r.createElement("div",{className:"categories"},t.categories.map((e=>r.createElement(c.Link,{className:"category",key:e,to:"/posts/"+e},e))))),r.createElement("h1",{className:"title"},t.title),r.createElement("div",{className:"info"},r.createElement("div",{className:"author"},"posted by ",r.createElement("strong",null,t.author),",")," ",t.date,a&&" · "+a+" views"))};var i=function(e){let{prevPost:t,nextPost:a}=e;return r.createElement("div",{className:"post-navigator"},r.createElement("div",{className:"post-navigator-card-wrapper"},a&&r.createElement(c.Link,{className:"post-card prev",key:a.id,to:a.slug},r.createElement("div",{className:"direction"},"이전 글"),r.createElement("div",{className:"title"},a.title))),r.createElement("div",{className:"post-navigator-card-wrapper"},t&&r.createElement(c.Link,{className:"post-card next",key:t.id,to:t.slug},r.createElement("div",{className:"direction"},"다음 글"),r.createElement("div",{className:"title"},t.title))))},o=a(1613);var m=function(e){let{html:t}=e;return r.createElement("div",{className:"post-content"},r.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}}))};var u=function(e){let{repo:t,path:a}=e;const n=(0,r.createRef)(),s=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{if(!n.current||s.current)return;const e=localStorage.getItem("isDarkMode"),a=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:JSON.parse(e)?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((e=>{a.setAttribute(e,r[e])})),n.current.appendChild(a),s.current=!0}),[t,n,a]),r.createElement("div",{className:"utterances",ref:n})};var d=function(e){var t,a;let{data:c}=e;const{0:d,1:p}=(0,r.useState)(null),v=new o.Z(c.cur),E=c.prev&&new o.Z(c.prev),h=c.next&&new o.Z(c.next),{siteUrl:f,comments:N}=null===(t=c.site)||void 0===t?void 0:t.siteMetadata,g=null==N||null===(a=N.utterances)||void 0===a?void 0:a.repo;return(0,r.useEffect)((()=>{if(!f)return;const e=f.replace(/(^\w+:|^)\/\//,""),t=v.slug.replace(/\//g,"");fetch("https://api.countapi.xyz/hit/"+e+"/"+t).then((async e=>{const t=await e.json();p(t.value)}))}),[f,v.slug]),r.createElement(n.Z,null,r.createElement(s.Z,{title:null==v?void 0:v.title,description:null==v?void 0:v.excerpt}),r.createElement(l,{post:v,viewCount:d}),r.createElement(m,{html:v.html}),r.createElement(i,{prevPost:E,nextPost:h}),g&&r.createElement(u,{repo:g,path:v.slug}))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-45fb2591c83cb4b44a81.js.map