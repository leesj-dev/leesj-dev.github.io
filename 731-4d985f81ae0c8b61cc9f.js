"use strict";(self.webpackChunkleesj_dev_github_io=self.webpackChunkleesj_dev_github_io||[]).push([[731],{6731:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(8032),i=n(7294),a=n(7762);n(3204);let r;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,n,o,i,a){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==i||i({wasCached:l})})).catch((e=>{u(this,c),null==a||a(e)})):(u(this,c),null==i||i({wasCached:l}))}return r.addEventListener("load",s),null==o||o({wasCached:l}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&s.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",s)}}function g(e,t,i,a,s,u,g){if(!(0,o.h)()){let o;const v=(m=()=>{o=d(e,t,i,s,u,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,m),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return m(),function(){}}),f=v(e);var b,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=a.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(h=a.objectPosition)?h:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(843).then(n.t.bind(n,4843,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),f()}}var m;return d(e,t,i,s,u,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:l,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=e,h=(0,o._)(e,s);const{width:m,height:v,layout:f,images:w,placeholder:y,backgroundColor:j}=t;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,a.uS)(i.createElement(o.L,{layout:f,width:m,height:v},i.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,f,m,v,j,b,d))),i.createElement(o.M,(0,o.a)({},h,{width:m,height:v,className:l},(0,o.b)(r,c,w,n,u)))))}}}]);
//# sourceMappingURL=731-4d985f81ae0c8b61cc9f.js.map