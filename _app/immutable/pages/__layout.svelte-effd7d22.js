import{_ as j}from"../chunks/preload-helper-a0169a62.js";import{E as $t,S as Re,i as Ve,s as Me,t as u,e as w,F as le,b as c,c as k,a as g,G as ne,d as p,f as s,H as At,I as V,g as Nt,h as q,j as l,J as dt,D as Ze,K as Ue,L as Ht,p as S,v as ze,w as qe,x as Le,n as Q,A as Pe,m as mt,o as pt,M as Gt,k as Fe,N as Kt,O as It,P as Wt,Q as Zt,R as Jt,T as Qt,U as Xt}from"../chunks/index-f154218a.js";import{r as Yt}from"../chunks/rules-715edd37.js";import{r as er,w as tr}from"../chunks/index-f61c3b90.js";import{b as N}from"../chunks/paths-396f020f.js";const rr=()=>{const t=$t("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},Qe={subscribe(t){return rr().page.subscribe(t)}};function Je(t){return t.startsWith(N)?t.slice(N.length):t}const Tt=Yt.filter(t=>!t.meta.deprecated),St=["Possible Errors","Security Vulnerability","Best Practices","Stylistic Issues","Extension Rules","System"];Tt.forEach(t=>{if(!St.includes(t.meta.docs.category))throw new Error(`missing categories:${t.meta.docs.category}`)});const lr=St.map(t=>({title:t,children:Tt.filter(e=>e.meta.docs.category===t).map(e=>({title:e.meta.docs.ruleId,path:`/rules/${e.meta.docs.ruleName}/`}))})),Dt={"/rules":[{path:"/",title:"Introduction"},{path:"/user-guide/",title:"User Guide"},{path:"/rules/",title:"Available Rules",children:lr},{path:"/playground/",title:"Playground"},{path:"/migration/",title:"Migration"}],"/":[{path:"/",title:"Introduction"},{path:"/user-guide/",title:"User Guide"},{path:"/rules/",title:"Available Rules"},{path:"/playground/",title:"Playground"},{path:"/migration/",title:"Migration"}]};function $(t,e){return Oe(e.url.pathname)===Oe(t)}function Oe(t){return t=Je(t),`${!t.trim()||t==="/"?"README":t.replace(/^\/|\/$/g,"")}.md`}const ft=tr({children:[]}),xt=er([],function(e){let r={},a={children:[]};const n=Qe.subscribe(o=>{r=o,e(Ut(r,a))}),i=ft.subscribe(o=>{a=o,e(Ut(r,a))});return function(){n(),i()}});function Ut(t,e){const r=[],[,a]=Object.entries(Dt).find(([n])=>Je(t.url.pathname).startsWith(n))||["/",Dt["/"]];for(const{path:n,title:i,children:o}of a)if($(n,t))for(const d of e.children)r.push({...d,path:n,title:i,children:o||d.children});else r.push({path:n,title:i,children:o});return r}var zt="/eslint-plugin-svelte/_app/immutable/assets/logo-06fafbe9.svg";function nr(t){let e,r,a,n,i,o,h,d,f,b,m,v,y,D,F,x,oe,X,A,_,E,U,Y,R,fe,B,G,K,ee,we,W,C,ke,Z,Ee,me,P,z,O,I,L,se,ie,H,pe,J,ae,he,ve,Ae,ge,Xe,ue,Ye,je,ht,et,tt,rt,_e,Ie,lt,nt,be,ot,te,st,re,ye,it,at,ut,Te,ct,vt;return{c(){e=u(`

`),r=w("header"),a=u(`
  `),n=w("div"),i=u(`
    `),o=w("div"),h=u(`
      `),d=le("svg"),f=le("path"),b=u(`
    `),m=u(`
    `),v=w("a"),y=u(`
      `),D=w("img"),x=u(`
    `),oe=u(`
  `),X=u(`

  `),A=w("nav"),_=u(`
    `),E=le("svg"),U=le("path"),Y=u(`
    `),R=w("ul"),fe=u(`
      `),B=w("li"),G=u(`
        `),K=w("a"),ee=u("Home"),we=u(`
      `),W=u(`
      `),C=w("li"),ke=u(`
        `),Z=w("a"),Ee=u("User Guide"),me=u(`
      `),P=u(`
      `),z=w("li"),O=u(`
        `),I=w("a"),L=u("Rules"),se=u(`
      `),ie=u(`
      `),H=w("li"),pe=u(`
        `),J=w("a"),ae=u("Playground"),he=u(`
      `),ve=u(`
    `),Ae=u(`
    `),ge=w("div"),Xe=u(`
      `),ue=w("a"),Ye=u(`
        `),je=w("img"),et=u("eslint-plugin-svelte"),tt=u(`
    `),rt=u(`
    `),_e=le("svg"),Ie=le("path"),lt=u(`
  `),nt=u(`

  `),be=w("div"),ot=u(`
    `),te=w("a"),st=u(`
      `),re=le("svg"),ye=le("path"),it=u(`
    `),at=u(`
  `),ut=u(`
`),Te=u(`

`),this.h()},l(T){e=c(T,`

`),r=k(T,"HEADER",{class:!0});var M=g(r);a=c(M,`
  `),n=k(M,"DIV",{class:!0});var De=g(n);i=c(De,`
    `),o=k(De,"DIV",{class:!0});var Se=g(o);h=c(Se,`
      `),d=ne(Se,"svg",{xmlns:!0,"aria-hidden":!0,role:!0,viewBox:!0,class:!0});var gt=g(d);f=ne(gt,"path",{fill:!0,d:!0,class:!0}),g(f).forEach(p),gt.forEach(p),b=c(Se,`
    `),Se.forEach(p),m=c(De,`
    `),v=k(De,"A",{href:!0,class:!0});var xe=g(v);y=c(xe,`
      `),D=k(xe,"IMG",{src:!0,alt:!0,class:!0}),x=c(xe,`
    `),xe.forEach(p),oe=c(De,`
  `),De.forEach(p),X=c(M,`

  `),A=k(M,"NAV",{class:!0});var ce=g(A);_=c(ce,`
    `),E=ne(ce,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var _t=g(E);U=ne(_t,"path",{d:!0,class:!0}),g(U).forEach(p),_t.forEach(p),Y=c(ce,`
    `),R=k(ce,"UL",{class:!0});var de=g(R);fe=c(de,`
      `),B=k(de,"LI",{class:!0});var Be=g(B);G=c(Be,`
        `),K=k(Be,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var bt=g(K);ee=c(bt,"Home"),bt.forEach(p),we=c(Be,`
      `),Be.forEach(p),W=c(de,`
      `),C=k(de,"LI",{class:!0});var Ce=g(C);ke=c(Ce,`
        `),Z=k(Ce,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var yt=g(Z);Ee=c(yt,"User Guide"),yt.forEach(p),me=c(Ce,`
      `),Ce.forEach(p),P=c(de,`
      `),z=k(de,"LI",{class:!0});var $e=g(z);O=c($e,`
        `),I=k($e,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var wt=g(I);L=c(wt,"Rules"),wt.forEach(p),se=c($e,`
      `),$e.forEach(p),ie=c(de,`
      `),H=k(de,"LI",{class:!0});var Ne=g(H);pe=c(Ne,`
        `),J=k(Ne,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var kt=g(J);ae=c(kt,"Playground"),kt.forEach(p),he=c(Ne,`
      `),Ne.forEach(p),ve=c(de,`
    `),de.forEach(p),Ae=c(ce,`
    `),ge=k(ce,"DIV",{class:!0});var He=g(ge);Xe=c(He,`
      `),ue=k(He,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Ge=g(ue);Ye=c(Ge,`
        `),je=k(Ge,"IMG",{src:!0,alt:!0,class:!0}),et=c(Ge,"eslint-plugin-svelte"),Ge.forEach(p),tt=c(He,`
    `),He.forEach(p),rt=c(ce,`
    `),_e=ne(ce,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Et=g(_e);Ie=ne(Et,"path",{d:!0,class:!0}),g(Ie).forEach(p),Et.forEach(p),lt=c(ce,`
  `),ce.forEach(p),nt=c(M,`

  `),be=k(M,"DIV",{class:!0});var Ke=g(be);ot=c(Ke,`
    `),te=k(Ke,"A",{href:!0,target:!0,class:!0,rel:!0});var We=g(te);st=c(We,`
      `),re=ne(We,"svg",{version:!0,width:!0,height:!0,viewBox:!0,class:!0,"aria-hidden":!0});var jt=g(re);ye=ne(jt,"path",{"fill-rule":!0,d:!0,class:!0}),g(ye).forEach(p),jt.forEach(p),it=c(We,`
    `),We.forEach(p),at=c(Ke,`
  `),Ke.forEach(p),ut=c(M,`
`),M.forEach(p),Te=c(T,`

`),this.h()},h(){s(f,"fill","currentColor"),s(f,"d","M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"),s(f,"class","svelte-jet77t"),s(d,"xmlns","http://www.w3.org/2000/svg"),s(d,"aria-hidden","true"),s(d,"role","img"),s(d,"viewBox","0 0 448 512"),s(d,"class","icon svelte-jet77t"),s(o,"class","sidebar-button svelte-jet77t"),At(D.src,F=zt)||s(D,"src",F),s(D,"alt","Logo"),s(D,"class","svelte-jet77t"),s(v,"href",N+"/"),s(v,"class","home-link svelte-jet77t"),s(n,"class","corner svelte-jet77t"),s(U,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),s(U,"class","svelte-jet77t"),s(E,"viewBox","0 0 2 3"),s(E,"aria-hidden","true"),s(E,"class","svelte-jet77t"),s(K,"sveltekit:prefetch",""),s(K,"href",N+"/"),s(K,"class","svelte-jet77t"),s(B,"class","svelte-jet77t"),V(B,"active",$("/",t[0])),s(Z,"sveltekit:prefetch",""),s(Z,"href",N+"/user-guide/"),s(Z,"class","svelte-jet77t"),s(C,"class","svelte-jet77t"),V(C,"active",$("/user-guide/",t[0])),s(I,"sveltekit:prefetch",""),s(I,"href",N+"/rules/"),s(I,"class","svelte-jet77t"),s(z,"class","svelte-jet77t"),V(z,"active",$("/rules/",t[0])),s(J,"sveltekit:prefetch",""),s(J,"href",N+"/playground/"),s(J,"class","svelte-jet77t"),s(H,"class","svelte-jet77t"),V(H,"active",$("/playground/",t[0])),s(R,"class","svelte-jet77t"),At(je.src,ht=zt)||s(je,"src",ht),s(je,"alt","Logo"),s(je,"class","svelte-jet77t"),s(ue,"sveltekit:prefetch",""),s(ue,"href",N+"/"),s(ue,"class","svelte-jet77t"),s(ge,"class","nav-title svelte-jet77t"),s(Ie,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),s(Ie,"class","svelte-jet77t"),s(_e,"viewBox","0 0 2 3"),s(_e,"aria-hidden","true"),s(_e,"class","svelte-jet77t"),s(A,"class","svelte-jet77t"),s(ye,"fill-rule","evenodd"),s(ye,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"),s(ye,"class","svelte-jet77t"),Nt(ye,"fill","#2c3e50",!1),s(re,"version","1.1"),s(re,"width","16"),s(re,"height","16"),s(re,"viewBox","0 0 16 16"),s(re,"class","octicon octicon-mark-github svelte-jet77t"),s(re,"aria-hidden","true"),s(te,"href","https://github.com/ota-meshi/eslint-plugin-svelte"),s(te,"target","_blank"),s(te,"class","github-link svelte-jet77t"),s(te,"rel","noopener noreferrer"),s(be,"class","corner svelte-jet77t"),s(r,"class","svelte-jet77t")},m(T,M){q(T,e,M),q(T,r,M),l(r,a),l(r,n),l(n,i),l(n,o),l(o,h),l(o,d),l(d,f),l(o,b),l(n,m),l(n,v),l(v,y),l(v,D),l(v,x),l(n,oe),l(r,X),l(r,A),l(A,_),l(A,E),l(E,U),l(A,Y),l(A,R),l(R,fe),l(R,B),l(B,G),l(B,K),l(K,ee),l(B,we),l(R,W),l(R,C),l(C,ke),l(C,Z),l(Z,Ee),l(C,me),l(R,P),l(R,z),l(z,O),l(z,I),l(I,L),l(z,se),l(R,ie),l(R,H),l(H,pe),l(H,J),l(J,ae),l(H,he),l(R,ve),l(A,Ae),l(A,ge),l(ge,Xe),l(ge,ue),l(ue,Ye),l(ue,je),l(ue,et),l(ge,tt),l(A,rt),l(A,_e),l(_e,Ie),l(A,lt),l(r,nt),l(r,be),l(be,ot),l(be,te),l(te,st),l(te,re),l(re,ye),l(te,it),l(be,at),l(r,ut),q(T,Te,M),ct||(vt=dt(o,"click",t[1]),ct=!0)},p(T,[M]){M&1&&V(B,"active",$("/",T[0])),M&1&&V(C,"active",$("/user-guide/",T[0])),M&1&&V(z,"active",$("/rules/",T[0])),M&1&&V(H,"active",$("/playground/",T[0]))},i:Ze,o:Ze,d(T){T&&p(e),T&&p(r),T&&p(Te),ct=!1,vt()}}}function or(t,e,r){let a;Ue(t,Qe,o=>r(0,a=o));const n=Ht();function i(){n("toggle-sidebar-open")}return[a,i]}class sr extends Re{constructor(e){super(),Ve(this,e,or,nr,Me,{})}}function qt(t,e,r){const a=t.slice();return a[3]=e[r],a}function ir(t){let e,r=t[3].title+"",a;return{c(){e=w("span"),a=u(r),this.h()},l(n){e=k(n,"SPAN",{class:!0});var i=g(e);a=c(i,r),i.forEach(p),this.h()},h(){s(e,"class","sidebar-menu-item-title svelte-wy32qo")},m(n,i){q(n,e,i),l(e,a)},p(n,i){i&1&&r!==(r=n[3].title+"")&&Fe(a,r)},d(n){n&&p(e)}}}function ar(t){let e,r=t[3].title+"",a,n;return{c(){e=w("a"),a=u(r),this.h()},l(i){e=k(i,"A",{class:!0,href:!0});var o=g(e);a=c(o,r),o.forEach(p),this.h()},h(){s(e,"class","sidebar-menu-item-title svelte-wy32qo"),s(e,"href",n=""+(N+(t[3].path||`${Je(t[2].url.pathname)}#${t[3].id}`))),V(e,"active",t[3].active||t[3].path&&$(t[3].path,t[2]))},m(i,o){q(i,e,o),l(e,a)},p(i,o){o&1&&r!==(r=i[3].title+"")&&Fe(a,r),o&5&&n!==(n=""+(N+(i[3].path||`${Je(i[2].url.pathname)}#${i[3].id}`)))&&s(e,"href",n),o&5&&V(e,"active",i[3].active||i[3].path&&$(i[3].path,i[2]))},d(i){i&&p(e)}}}function Lt(t){let e,r;return e=new Bt({props:{children:t[3].children,level:t[1]+1}}),{c(){ze(e.$$.fragment)},l(a){qe(e.$$.fragment,a)},m(a,n){Le(e,a,n),r=!0},p(a,n){const i={};n&1&&(i.children=a[3].children),n&2&&(i.level=a[1]+1),e.$set(i)},i(a){r||(S(e.$$.fragment,a),r=!0)},o(a){Q(e.$$.fragment,a),r=!1},d(a){Pe(e,a)}}}function Pt(t){let e,r,a,n,i;function o(b,m){return b[3].path||b[3].id?ar:ir}let h=o(t),d=h(t),f=t[3].children&&t[3].children.length&&Lt(t);return{c(){e=w("li"),r=u(`
      `),d.c(),a=u(`
      `),f&&f.c(),n=u(`
    `),this.h()},l(b){e=k(b,"LI",{class:!0});var m=g(e);r=c(m,`
      `),d.l(m),a=c(m,`
      `),f&&f.l(m),n=c(m,`
    `),m.forEach(p),this.h()},h(){s(e,"class","sidebar-menu-item svelte-wy32qo"),V(e,"active",t[3].active||t[3].path&&$(t[3].path,t[2]))},m(b,m){q(b,e,m),l(e,r),d.m(e,null),l(e,a),f&&f.m(e,null),l(e,n),i=!0},p(b,m){h===(h=o(b))&&d?d.p(b,m):(d.d(1),d=h(b),d&&(d.c(),d.m(e,a))),b[3].children&&b[3].children.length?f?(f.p(b,m),m&1&&S(f,1)):(f=Lt(b),f.c(),S(f,1),f.m(e,n)):f&&(mt(),Q(f,1,1,()=>{f=null}),pt()),m&5&&V(e,"active",b[3].active||b[3].path&&$(b[3].path,b[2]))},i(b){i||(S(f),i=!0)},o(b){Q(f),i=!1},d(b){b&&p(e),d.d(),f&&f.d()}}}function ur(t){let e,r,a,n,i,o,h,d=t[0],f=[];for(let m=0;m<d.length;m+=1)f[m]=Pt(qt(t,d,m));const b=m=>Q(f[m],1,1,()=>{f[m]=null});return{c(){e=u(`

`),r=w("ul"),a=u(`
  `);for(let m=0;m<f.length;m+=1)f[m].c();n=u(`
`),o=u(`

`),this.h()},l(m){e=c(m,`

`),r=k(m,"UL",{class:!0});var v=g(r);a=c(v,`
  `);for(let y=0;y<f.length;y+=1)f[y].l(v);n=c(v,`
`),v.forEach(p),o=c(m,`

`),this.h()},h(){s(r,"class",i="sidebar-menu sidebar-menu--level"+t[1]+" svelte-wy32qo")},m(m,v){q(m,e,v),q(m,r,v),l(r,a);for(let y=0;y<f.length;y+=1)f[y].m(r,null);l(r,n),q(m,o,v),h=!0},p(m,[v]){if(v&7){d=m[0];let y;for(y=0;y<d.length;y+=1){const D=qt(m,d,y);f[y]?(f[y].p(D,v),S(f[y],1)):(f[y]=Pt(D),f[y].c(),S(f[y],1),f[y].m(r,n))}for(mt(),y=d.length;y<f.length;y+=1)b(y);pt()}(!h||v&2&&i!==(i="sidebar-menu sidebar-menu--level"+m[1]+" svelte-wy32qo"))&&s(r,"class",i)},i(m){if(!h){for(let v=0;v<d.length;v+=1)S(f[v]);h=!0}},o(m){f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)Q(f[v]);h=!1},d(m){m&&p(e),m&&p(r),Gt(f,m),m&&p(o)}}}function cr(t,e,r){let a;Ue(t,Qe,o=>r(2,a=o));let{children:n}=e,{level:i=1}=e;return t.$$set=o=>{"children"in o&&r(0,n=o.children),"level"in o&&r(1,i=o.level)},[n,i,a]}class Bt extends Re{constructor(e){super(),Ve(this,e,cr,ur,Me,{children:0,level:1})}}function Ot(t){let e,r,a,n,i;return a=new Bt({props:{children:t[2]}}),{c(){e=w("aside"),r=u(`
    `),ze(a.$$.fragment),n=u(`
  `),this.h()},l(o){e=k(o,"ASIDE",{class:!0});var h=g(e);r=c(h,`
    `),qe(a.$$.fragment,h),n=c(h,`
  `),h.forEach(p),this.h()},h(){s(e,"class","svelte-gyzoew"),V(e,"sidebar-open",t[0])},m(o,h){q(o,e,h),l(e,r),Le(a,e,null),l(e,n),i=!0},p(o,h){const d={};h&4&&(d.children=o[2]),a.$set(d),h&1&&V(e,"sidebar-open",o[0])},i(o){i||(S(a.$$.fragment,o),i=!0)},o(o){Q(a.$$.fragment,o),i=!1},d(o){o&&p(e),Pe(a)}}}function dr(t){let e,r,a,n=(!t[1]||t[0])&&Ot(t);return{c(){e=u(`

`),n&&n.c(),r=u(`

`)},l(i){e=c(i,`

`),n&&n.l(i),r=c(i,`

`)},m(i,o){q(i,e,o),n&&n.m(i,o),q(i,r,o),a=!0},p(i,[o]){!i[1]||i[0]?n?(n.p(i,o),o&3&&S(n,1)):(n=Ot(i),n.c(),S(n,1),n.m(r.parentNode,r)):n&&(mt(),Q(n,1,1,()=>{n=null}),pt())},i(i){a||(S(n),a=!0)},o(i){Q(n),a=!1},d(i){i&&p(e),n&&n.d(i),i&&p(r)}}}function fr(t,e,r){let a;Ue(t,xt,o=>r(2,a=o));let{sidebarOpen:n=!1}=e,{hiddenMenu:i=!1}=e;return t.$$set=o=>{"sidebarOpen"in o&&r(0,n=o.sidebarOpen),"hiddenMenu"in o&&r(1,i=o.hiddenMenu)},[n,i,a]}class mr extends Re{constructor(e){super(),Ve(this,e,fr,dr,Me,{sidebarOpen:0,hiddenMenu:1})}}function Rt(t){let e,r,a,n,i,o,h=t[0].lastUpdated+"",d,f;return{c(){e=w("div"),r=u(`
        `),a=w("span"),n=u("Last Updated:"),i=u(`
        `),o=w("span"),d=u(h),f=u(`
      `),this.h()},l(b){e=k(b,"DIV",{class:!0});var m=g(e);r=c(m,`
        `),a=k(m,"SPAN",{class:!0});var v=g(a);n=c(v,"Last Updated:"),v.forEach(p),i=c(m,`
        `),o=k(m,"SPAN",{class:!0});var y=g(o);d=c(y,h),y.forEach(p),f=c(m,`
      `),m.forEach(p),this.h()},h(){s(a,"class","prefix"),s(o,"class","time"),s(e,"class","last-updated svelte-eairo8")},m(b,m){q(b,e,m),l(e,r),l(e,a),l(a,n),l(e,i),l(e,o),l(o,d),l(e,f)},p(b,m){m&1&&h!==(h=b[0].lastUpdated+"")&&Fe(d,h)},d(b){b&&p(e)}}}function Vt(t){let e,r,a,n=t[3].title+"",i,o;return{c(){e=w("span"),r=u("\u2190"),a=w("a"),i=u(n),this.h()},l(h){e=k(h,"SPAN",{class:!0});var d=g(e);r=c(d,"\u2190"),a=k(d,"A",{href:!0,class:!0});var f=g(a);i=c(f,n),f.forEach(p),d.forEach(p),this.h()},h(){s(a,"href",o=""+(N+t[3].path)),s(a,"class","svelte-eairo8"),s(e,"class","prev")},m(h,d){q(h,e,d),l(e,r),l(e,a),l(a,i)},p(h,d){d&8&&n!==(n=h[3].title+"")&&Fe(i,n),d&8&&o!==(o=""+(N+h[3].path))&&s(a,"href",o)},d(h){h&&p(e)}}}function Mt(t){let e,r,a=t[4].title+"",n,i,o;return{c(){e=w("span"),r=w("a"),n=u(a),o=u(`\u2192
      `),this.h()},l(h){e=k(h,"SPAN",{class:!0});var d=g(e);r=k(d,"A",{href:!0,class:!0});var f=g(r);n=c(f,a),f.forEach(p),o=c(d,`\u2192
      `),d.forEach(p),this.h()},h(){s(r,"href",i=""+(N+t[4].path)),s(r,"class","svelte-eairo8"),s(e,"class","next svelte-eairo8")},m(h,d){q(h,e,d),l(e,r),l(r,n),l(e,o)},p(h,d){d&16&&a!==(a=h[4].title+"")&&Fe(n,a),d&16&&i!==(i=""+(N+h[4].path))&&s(r,"href",i)},d(h){h&&p(e)}}}function pr(t){let e,r,a,n,i,o,h,d,f,b,m,v,y,D,F,x,oe,X,A,_,E,U,Y,R,fe,B,G,K,ee,we,W,C,ke,Z,Ee,me,P=t[0].lastUpdated&&Rt(t),z=t[3]&&Vt(t),O=t[4]&&Mt(t);return{c(){e=u(`

`),r=w("footer"),a=u(`
  `),n=w("div"),i=u(`
    `),o=w("div"),h=u(`
      `),d=w("a"),f=u("Edit this page"),m=u(`
      `),v=w("span"),y=u(`
        `),D=le("svg"),F=le("path"),x=le("polygon"),oe=u(`
      `),X=u(`
    `),A=u(`
    `),P&&P.c(),_=u(`
  `),E=u(`
  `),U=w("div"),Y=u(`
    `),z&&z.c(),R=u(`
    `),O&&O.c(),fe=u(`
  `),B=u(`
  `),G=w("div"),K=u(`
    `),ee=w("span"),we=u("This site was built with "),W=w("a"),C=u("SvelteKit"),ke=u("."),Z=u(`
  `),Ee=u(`
`),me=u(`

`),this.h()},l(I){e=c(I,`

`),r=k(I,"FOOTER",{class:!0});var L=g(r);a=c(L,`
  `),n=k(L,"DIV",{class:!0});var se=g(n);i=c(se,`
    `),o=k(se,"DIV",{class:!0});var ie=g(o);h=c(ie,`
      `),d=k(ie,"A",{href:!0,target:!0,rel:!0,class:!0});var H=g(d);f=c(H,"Edit this page"),H.forEach(p),m=c(ie,`
      `),v=k(ie,"SPAN",{});var pe=g(v);y=c(pe,`
        `),D=ne(pe,"svg",{xmlns:!0,"aria-hidden":!0,focusable:!0,x:!0,y:!0,viewBox:!0,width:!0,height:!0,class:!0});var J=g(D);F=ne(J,"path",{fill:!0,d:!0}),g(F).forEach(p),x=ne(J,"polygon",{fill:!0,points:!0}),g(x).forEach(p),J.forEach(p),oe=c(pe,`
      `),pe.forEach(p),X=c(ie,`
    `),ie.forEach(p),A=c(se,`
    `),P&&P.l(se),_=c(se,`
  `),se.forEach(p),E=c(L,`
  `),U=k(L,"DIV",{class:!0});var ae=g(U);Y=c(ae,`
    `),z&&z.l(ae),R=c(ae,`
    `),O&&O.l(ae),fe=c(ae,`
  `),ae.forEach(p),B=c(L,`
  `),G=k(L,"DIV",{class:!0});var he=g(G);K=c(he,`
    `),ee=k(he,"SPAN",{});var ve=g(ee);we=c(ve,"This site was built with "),W=k(ve,"A",{href:!0,target:!0,class:!0});var Ae=g(W);C=c(Ae,"SvelteKit"),Ae.forEach(p),ke=c(ve,"."),ve.forEach(p),Z=c(he,`
  `),he.forEach(p),Ee=c(L,`
`),L.forEach(p),me=c(I,`

`),this.h()},h(){s(d,"href",b="https://github.com/ota-meshi/eslint-plugin-svelte/edit/main/docs/"+Oe(t[2].url.pathname)),s(d,"target","_blank"),s(d,"rel","noopener noreferrer"),s(d,"class","svelte-eairo8"),s(F,"fill","currentColor"),s(F,"d","M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"),s(x,"fill","currentColor"),s(x,"points","45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"),s(D,"xmlns","http://www.w3.org/2000/svg"),s(D,"aria-hidden","true"),s(D,"focusable","false"),s(D,"x","0px"),s(D,"y","0px"),s(D,"viewBox","0 0 100 100"),s(D,"width","15"),s(D,"height","15"),s(D,"class","icon outbound"),s(o,"class","edit-link"),s(n,"class","footer-tools svelte-eairo8"),s(U,"class","footer-move svelte-eairo8"),s(W,"href","https://kit.svelte.dev/"),s(W,"target","_brank"),s(W,"class","svelte-eairo8"),s(G,"class","footer-text svelte-eairo8"),s(r,"class","svelte-eairo8"),V(r,"hidden-menu",t[1].hiddenMenu)},m(I,L){q(I,e,L),q(I,r,L),l(r,a),l(r,n),l(n,i),l(n,o),l(o,h),l(o,d),l(d,f),l(o,m),l(o,v),l(v,y),l(v,D),l(D,F),l(D,x),l(v,oe),l(o,X),l(n,A),P&&P.m(n,null),l(n,_),l(r,E),l(r,U),l(U,Y),z&&z.m(U,null),l(U,R),O&&O.m(U,null),l(U,fe),l(r,B),l(r,G),l(G,K),l(G,ee),l(ee,we),l(ee,W),l(W,C),l(ee,ke),l(G,Z),l(r,Ee),q(I,me,L)},p(I,[L]){L&4&&b!==(b="https://github.com/ota-meshi/eslint-plugin-svelte/edit/main/docs/"+Oe(I[2].url.pathname))&&s(d,"href",b),I[0].lastUpdated?P?P.p(I,L):(P=Rt(I),P.c(),P.m(n,_)):P&&(P.d(1),P=null),I[3]?z?z.p(I,L):(z=Vt(I),z.c(),z.m(U,R)):z&&(z.d(1),z=null),I[4]?O?O.p(I,L):(O=Mt(I),O.c(),O.m(U,fe)):O&&(O.d(1),O=null),L&2&&V(r,"hidden-menu",I[1].hiddenMenu)},i:Ze,o:Ze,d(I){I&&p(e),I&&p(r),P&&P.d(),z&&z.d(),O&&O.d(),I&&p(me)}}}function*Ct(t){for(const e of t)yield e,e.children&&e.children.length&&(yield*Ct(e.children))}function hr(t,e,r){let a,n;Ue(t,Qe,f=>r(2,a=f)),Ue(t,xt,f=>r(5,n=f));let{fileInfo:i={}}=e,{frontmatter:o={}}=e,h,d;return t.$$set=f=>{"fileInfo"in f&&r(0,i=f.fileInfo),"frontmatter"in f&&r(1,o=f.frontmatter)},t.$$.update=()=>{if(t.$$.dirty&36){let f,b;for(const m of Ct(n))if(!!m.path){if(b){r(4,d=m);break}if($(m.path,a)){r(3,h=f),b=m;continue}f=m}}},[i,o,a,h,d,n]}class vr extends Re{constructor(e){super(),Ve(this,e,hr,pr,Me,{fileInfo:0,frontmatter:1})}}function gr(t){let e,r,a,n,i,o,h,d,f,b,m,v,y,D,F,x,oe;r=new sr({}),r.$on("toggle-sidebar-open",t[3]),n=new mr({props:{sidebarOpen:t[0],hiddenMenu:t[2].hiddenMenu}});const X=t[7].default,A=Kt(X,t,t[6],null);return y=new vr({props:{frontmatter:t[2],fileInfo:t[1]}}),{c(){e=u(`





`),ze(r.$$.fragment),a=u(`

`),ze(n.$$.fragment),i=u(`

`),o=w("main"),h=u(`
  `),d=w("div"),f=u(`
    `),A&&A.c(),b=u(`
  `),m=u(`
`),v=u(`

`),ze(y.$$.fragment),D=u(`

`),this.h()},l(_){e=c(_,`





`),qe(r.$$.fragment,_),a=c(_,`

`),qe(n.$$.fragment,_),i=c(_,`

`),o=k(_,"MAIN",{class:!0});var E=g(o);h=c(E,`
  `),d=k(E,"DIV",{class:!0});var U=g(d);f=c(U,`
    `),A&&A.l(U),b=c(U,`
  `),U.forEach(p),m=c(E,`
`),E.forEach(p),v=c(_,`

`),qe(y.$$.fragment,_),D=c(_,`

`),this.h()},h(){s(d,"class","main-content svelte-1yegtko"),s(o,"class","svelte-1yegtko"),V(o,"hidden-menu",t[2].hiddenMenu)},m(_,E){q(_,e,E),Le(r,_,E),q(_,a,E),Le(n,_,E),q(_,i,E),q(_,o,E),l(o,h),l(o,d),l(d,f),A&&A.m(d,null),l(d,b),l(o,m),q(_,v,E),Le(y,_,E),q(_,D,E),F=!0,x||(oe=[dt(window,"resize",function(){It(t[0]?t[4]:null)&&(t[0]?t[4]:null).apply(this,arguments)}),dt(o,"click",function(){It(t[0]?t[4]:null)&&(t[0]?t[4]:null).apply(this,arguments)})],x=!0)},p(_,[E]){t=_;const U={};E&1&&(U.sidebarOpen=t[0]),E&4&&(U.hiddenMenu=t[2].hiddenMenu),n.$set(U),A&&A.p&&(!F||E&64)&&Wt(A,X,t,t[6],F?Jt(X,t[6],E,null):Zt(t[6]),null),E&4&&V(o,"hidden-menu",t[2].hiddenMenu);const Y={};E&4&&(Y.frontmatter=t[2]),E&2&&(Y.fileInfo=t[1]),y.$set(Y)},i(_){F||(S(r.$$.fragment,_),S(n.$$.fragment,_),S(A,_),S(y.$$.fragment,_),F=!0)},o(_){Q(r.$$.fragment,_),Q(n.$$.fragment,_),Q(A,_),Q(y.$$.fragment,_),F=!1},d(_){_&&p(e),Pe(r,_),_&&p(a),Pe(n,_),_&&p(i),_&&p(o),A&&A.d(_),_&&p(v),Pe(y,_),_&&p(D),x=!1,Qt(oe)}}}const Ft={"./README.md":()=>j(()=>import("./README.md-810ba876.js"),["pages/README.md-810ba876.js","chunks/index-f154218a.js"]),"./migration.md":()=>j(()=>import("./migration.md-591f3a18.js"),["pages/migration.md-591f3a18.js","chunks/index-f154218a.js"]),"./playground.md":()=>j(()=>import("./playground.md-3db8eeef.js"),["pages/playground.md-3db8eeef.js","assets/pages/playground.md-d6eac883.css","chunks/index-f154218a.js","chunks/preload-helper-a0169a62.js","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js"]),"./rules.md":()=>j(()=>import("./rules.md-bd1cb4ae.js"),["pages/rules.md-bd1cb4ae.js","chunks/index-f154218a.js"]),"./user-guide.md":()=>j(()=>import("./user-guide.md-d30ff8e7.js"),["pages/user-guide.md-d30ff8e7.js","chunks/index-f154218a.js"]),"./rules/button-has-type.md":()=>j(()=>import("./rules/button-has-type.md-9da88cb9.js"),["pages/rules/button-has-type.md-9da88cb9.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/comment-directive.md":()=>j(()=>import("./rules/comment-directive.md-be54016f.js"),["pages/rules/comment-directive.md-be54016f.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/first-attribute-linebreak.md":()=>j(()=>import("./rules/first-attribute-linebreak.md-90ece315.js"),["pages/rules/first-attribute-linebreak.md-90ece315.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/html-quotes.md":()=>j(()=>import("./rules/html-quotes.md-a81c7e2b.js"),["pages/rules/html-quotes.md-a81c7e2b.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/indent.md":()=>j(()=>import("./rules/indent.md-012760a1.js"),["pages/rules/indent.md-012760a1.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/max-attributes-per-line.md":()=>j(()=>import("./rules/max-attributes-per-line.md-a781c321.js"),["pages/rules/max-attributes-per-line.md-a781c321.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/mustache-spacing.md":()=>j(()=>import("./rules/mustache-spacing.md-a644d57b.js"),["pages/rules/mustache-spacing.md-a644d57b.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-at-debug-tags.md":()=>j(()=>import("./rules/no-at-debug-tags.md-a26fdcce.js"),["pages/rules/no-at-debug-tags.md-a26fdcce.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-at-html-tags.md":()=>j(()=>import("./rules/no-at-html-tags.md-5c7a7ba8.js"),["pages/rules/no-at-html-tags.md-5c7a7ba8.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-dupe-else-if-blocks.md":()=>j(()=>import("./rules/no-dupe-else-if-blocks.md-98733068.js"),["pages/rules/no-dupe-else-if-blocks.md-98733068.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-dupe-style-properties.md":()=>j(()=>import("./rules/no-dupe-style-properties.md-78331abf.js"),["pages/rules/no-dupe-style-properties.md-78331abf.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-dynamic-slot-name.md":()=>j(()=>import("./rules/no-dynamic-slot-name.md-cd6c338b.js"),["pages/rules/no-dynamic-slot-name.md-cd6c338b.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-inner-declarations.md":()=>j(()=>import("./rules/no-inner-declarations.md-88fe8dbd.js"),["pages/rules/no-inner-declarations.md-88fe8dbd.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-not-function-handler.md":()=>j(()=>import("./rules/no-not-function-handler.md-6fb75768.js"),["pages/rules/no-not-function-handler.md-6fb75768.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-object-in-text-mustaches.md":()=>j(()=>import("./rules/no-object-in-text-mustaches.md-bd33db96.js"),["pages/rules/no-object-in-text-mustaches.md-bd33db96.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-shorthand-style-property-overrides.md":()=>j(()=>import("./rules/no-shorthand-style-property-overrides.md-5c96a33c.js"),["pages/rules/no-shorthand-style-property-overrides.md-5c96a33c.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-target-blank.md":()=>j(()=>import("./rules/no-target-blank.md-5af5e300.js"),["pages/rules/no-target-blank.md-5af5e300.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-unknown-style-directive-property.md":()=>j(()=>import("./rules/no-unknown-style-directive-property.md-275143fd.js"),["pages/rules/no-unknown-style-directive-property.md-275143fd.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-unused-svelte-ignore.md":()=>j(()=>import("./rules/no-unused-svelte-ignore.md-e179ebab.js"),["pages/rules/no-unused-svelte-ignore.md-e179ebab.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/no-useless-mustaches.md":()=>j(()=>import("./rules/no-useless-mustaches.md-f74eb27d.js"),["pages/rules/no-useless-mustaches.md-f74eb27d.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/prefer-class-directive.md":()=>j(()=>import("./rules/prefer-class-directive.md-1804665d.js"),["pages/rules/prefer-class-directive.md-1804665d.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/prefer-style-directive.md":()=>j(()=>import("./rules/prefer-style-directive.md-f5fc2ad5.js"),["pages/rules/prefer-style-directive.md-f5fc2ad5.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/require-optimized-style-attribute.md":()=>j(()=>import("./rules/require-optimized-style-attribute.md-fd3308f9.js"),["pages/rules/require-optimized-style-attribute.md-fd3308f9.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/shorthand-attribute.md":()=>j(()=>import("./rules/shorthand-attribute.md-a8b64db9.js"),["pages/rules/shorthand-attribute.md-a8b64db9.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/shorthand-directive.md":()=>j(()=>import("./rules/shorthand-directive.md-5dde615d.js"),["pages/rules/shorthand-directive.md-5dde615d.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/spaced-html-comment.md":()=>j(()=>import("./rules/spaced-html-comment.md-f592200e.js"),["pages/rules/spaced-html-comment.md-f592200e.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"]),"./rules/system.md":()=>j(()=>import("./rules/system.md-a284c03a.js"),["pages/rules/system.md-a284c03a.js","chunks/index-f154218a.js"]),"./rules/valid-compile.md":()=>j(()=>import("./rules/valid-compile.md-a211eb7a.js"),["pages/rules/valid-compile.md-a211eb7a.js","chunks/index-f154218a.js","chunks/ESLintCodeBlock-98915dcc.js","assets/ESLintCodeBlock-3beb5c4a.css","chunks/linter-b7fa4a26.js","assets/linter-3d922392.css","chunks/rules-715edd37.js","chunks/preload-helper-a0169a62.js"])};async function jr({url:t}){const e=`./${Oe(t.pathname)}`;return Ft[e]?{props:{moduleData:await Ft[e]()}}:{props:{moduleData:{frontmatter:{title:"404",hiddenMenu:!0}}}}}function _r(t,e,r){let a,n,i;Ue(t,ft,v=>r(8,i=v));let{$$slots:o={},$$scope:h}=e,{moduleData:d}=e,f=!1;function b(){r(0,f=!f)}function m(){r(0,f=!1)}return t.$$set=v=>{"moduleData"in v&&r(5,d=v.moduleData),"$$scope"in v&&r(6,h=v.$$scope)},t.$$.update=()=>{if(t.$$.dirty&32&&r(2,a=d.frontmatter),t.$$.dirty&32&&r(1,n=d.fileInfo),t.$$.dirty&32){const v=d.toc;Xt(ft,i=v,i)}},[f,n,a,b,m,d,h,o]}class Ar extends Re{constructor(e){super(),Ve(this,e,_r,gr,Me,{moduleData:5})}}export{Ar as default,jr as load};
