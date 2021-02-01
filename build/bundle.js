(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}function l(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e){t.value=null==e?"":e}let g;function y(t){g=t}function b(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}new Set,new Set;const v=[],w=[],k=[],x=[],_=Promise.resolve();let C=!1;function E(t){k.push(t)}let S=!1;const T=new Set;function A(){if(!S){S=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),j(e.$$)}for(y(null),v.length=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];T.has(e)||(T.add(e),e())}k.length=0}while(v.length);for(;x.length;)x.pop()();C=!1,S=!1,T.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;let O;function P(t,e){t&&t.i&&(L.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function M(t){t&&t.c()}function H(t,n,s){const{fragment:i,on_mount:l,on_destroy:r,after_update:a}=t.$$;i&&i.m(n,s),E((()=>{const n=l.map(e).filter(c);r?r.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(E)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(e,c,s,i,l,r,u=[-1]){const d=g;y(e);const f=c.props||{},p=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(p.ctx=s?s(e,f,((t,n,...o)=>{const c=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),h&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),C||(C=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),c.target){if(c.hydrate){const t=(m=c.target,Array.from(m.childNodes));p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();c.intro&&P(e.$$.fragment),H(e,c.target,c.anchor),A()}var m;y(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class W{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(e){let n;return{c(){n=u("footer"),n.innerHTML='<p class="svelte-fuu0f1">Coded with <i class="heart fa fa-heart svelte-fuu0f1"></i></p> \n\t<p class="svelte-fuu0f1">Powered by <a href="https://www.weatherapi.com" title="Free Weather API" class="svelte-fuu0f1">WeatherAPI.com</a></p>',h(n,"class","svelte-fuu0f1")},m(t,e){r(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}const B=class extends W{constructor(t){super(),N(this,t,null,F,s,{})}};class D{constructor(t,e){this.key="6ae72d5bb14f4f79af3223742213001",this.base="https://api.weatherapi.com/v1",this.location=t,this.lang=e}async getCurrent(){const t=new FormData;return t.append("key",this.key),t.append("q",this.location),t.append("lang",this.lang),await fetch(`${this.base}/current.json`,{method:"POST",body:t})}}function z(e){let n,c,s,i,d,m;return{c(){n=u("nav"),c=u("input"),s=f(),i=u("button"),i.textContent="Submit",h(c,"type","text"),h(c,"placeholder","Enter location"),h(c,"class","svelte-9ukkim"),h(i,"class","svelte-9ukkim"),h(n,"class","svelte-9ukkim")},m(t,o){r(t,n,o),l(n,c),$(c,e[0]),l(n,s),l(n,i),d||(m=[p(c,"input",e[3]),p(c,"keydown",e[2]),p(i,"click",e[1])],d=!0)},p(t,[e]){1&e&&c.value!==t[0]&&$(c,t[0])},i:t,o:t,d(t){t&&a(n),d=!1,o(m)}}}function G(t,e,n){let{location:o}=e;return t.$$set=t=>{"location"in t&&n(0,o=t.location)},[o,function(e){b(t,e)},function(e){b(t,e)},function(){o=this.value,n(0,o)}]}const J=class extends W{constructor(t){super(),N(this,t,G,z,s,{location:0})}};function K(e){let n;return{c(){n=u("p"),n.textContent="Enter location and submit it!",h(n,"class","greeting svelte-10ybg32")},m(t,e){r(t,n,e)},p:t,d(t){t&&a(n)}}}function Q(t){let e,n,o=t[1].message+"";return{c(){e=u("p"),n=d(o),h(e,"class","error svelte-10ybg32")},m(t,o){r(t,e,o),l(e,n)},p(t,e){2&e&&o!==(o=t[1].message+"")&&m(n,o)},d(t){t&&a(e)}}}function R(t){let e,n,o,c,s,i,p,$,g,y,b,v,w,k,x,_,C,E,S,T,A,j,L,O,P,q,M,H,I=t[0].cloud+"",N=t[0].humidity+"",W=t[0].temp+"",F=`${t[0].city}, ${t[0].country}`,B=t[0].condition+"";return{c(){e=u("div"),n=u("div"),o=u("i"),c=f(),s=u("p"),i=d(I),p=d("%"),$=f(),g=u("i"),y=f(),b=u("p"),v=d(N),w=d("%"),k=f(),x=u("div"),_=u("p"),C=d(W),E=f(),S=u("sup"),S.textContent="℃",T=f(),A=u("p"),j=d(F),L=f(),O=u("p"),P=d(B),q=f(),M=u("img"),h(o,"class","cloud-icon fa fa-cloud svelte-10ybg32"),h(s,"class","cloud-value svelte-10ybg32"),h(g,"class","humidity-icon fa fa-tint svelte-10ybg32"),h(b,"class","humidity-value svelte-10ybg32"),h(n,"class","cloud-humidity svelte-10ybg32"),h(_,"class","temp-value svelte-10ybg32"),h(S,"class","grade-icon svelte-10ybg32"),h(x,"class","temp-grade svelte-10ybg32"),h(A,"class","city svelte-10ybg32"),h(O,"class","condition-text svelte-10ybg32"),h(M,"class","condition-icon svelte-10ybg32"),M.src!==(H=t[0].icon)&&h(M,"src",H),h(M,"alt","Icon"),h(M,"width","64"),h(M,"height","64"),h(e,"class","current svelte-10ybg32")},m(t,a){r(t,e,a),l(e,n),l(n,o),l(n,c),l(n,s),l(s,i),l(s,p),l(n,$),l(n,g),l(n,y),l(n,b),l(b,v),l(b,w),l(e,k),l(e,x),l(x,_),l(_,C),l(x,E),l(x,S),l(e,T),l(e,A),l(A,j),l(e,L),l(e,O),l(O,P),l(e,q),l(e,M)},p(t,e){1&e&&I!==(I=t[0].cloud+"")&&m(i,I),1&e&&N!==(N=t[0].humidity+"")&&m(v,N),1&e&&W!==(W=t[0].temp+"")&&m(C,W),1&e&&F!==(F=`${t[0].city}, ${t[0].country}`)&&m(j,F),1&e&&B!==(B=t[0].condition+"")&&m(P,B),1&e&&M.src!==(H=t[0].icon)&&h(M,"src",H)},d(t){t&&a(e)}}}function U(t){let e,n,o,c,s,i,l,d;function p(e){t[5].call(null,e)}let m={};function $(t,e){return t[0]?R:t[1]?Q:K}void 0!==t[2]&&(m.location=t[2]),n=new J({props:m}),w.push((()=>function(t,e,n){const o=t.$$.props.location;void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(n,0,p))),n.$on("click",t[3]),n.$on("keydown",t[4]);let g=$(t),y=g(t);return l=new B({}),{c(){e=f(),M(n.$$.fragment),c=f(),s=u("main"),y.c(),i=f(),M(l.$$.fragment),document.title="Weather",h(s,"class","svelte-10ybg32")},m(t,o){r(t,e,o),H(n,t,o),r(t,c,o),r(t,s,o),y.m(s,null),r(t,i,o),H(l,t,o),d=!0},p(t,[e]){const c={};var i;!o&&4&e&&(o=!0,c.location=t[2],i=()=>o=!1,x.push(i)),n.$set(c),g===(g=$(t))&&y?y.p(t,e):(y.d(1),y=g(t),y&&(y.c(),y.m(s,null)))},i(t){d||(P(n.$$.fragment,t),P(l.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),q(l.$$.fragment,t),d=!1},d(t){t&&a(e),I(n,t),t&&a(c),t&&a(s),y.d(),t&&a(i),I(l,t)}}}function V(t,e,n){let o,c,s;const i=()=>{(()=>{const t=navigator.language.split("-")[0];new D(s,t).getCurrent().then((t=>t.json())).then((t=>{if(t.error)return n(0,o=void 0),void n(1,c={code:t.error.code,message:t.error.message});n(0,o={country:t.location.country,city:t.location.name,localtime:t.location.localtime,temp:t.current.temp_c,icon:t.current.condition.icon,condition:t.current.condition.text,cloud:t.current.cloud,humidity:t.current.humidity}),n(1,c=void 0)})).catch((t=>{n(0,o=void 0),n(1,c={code:"0000",message:t})}))})()};return[o,c,s,i,t=>{13==t.keyCode&&i()},function(t){s=t,n(2,s)}]}new class extends W{constructor(t){super(),N(this,t,V,U,s,{})}}({target:document.body})})();