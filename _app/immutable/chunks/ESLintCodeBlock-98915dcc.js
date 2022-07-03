import{S as U,i as Z,s as F,N as G,Z as J,_ as K,e as C,t as c,c as I,a as N,b as d,d as g,f as P,h as V,j as _,J as W,v as X,w as Y,g as T,x as $,P as x,Q as ee,R as te,$ as se,k as ne,p as j,n as q,A as le,u as ie}from"./index-f154218a.js";import{E as oe,a as ae,p as fe,b as re}from"./linter-b7fa4a26.js";function H(t){let l,s,u,k,h,o;return{c(){l=C("label"),s=c(`
        `),u=C("input"),k=c(`
        Show Diff
      `),this.h()},l(f){l=I(f,"LABEL",{});var n=N(l);s=d(n,`
        `),u=I(n,"INPUT",{type:!0}),k=d(n,`
        Show Diff
      `),n.forEach(g),this.h()},h(){P(u,"type","checkbox")},m(f,n){V(f,l,n),_(l,s),_(l,u),u.checked=t[4],_(l,k),h||(o=W(u,"change",t[14]),h=!0)},p(f,n){n&16&&(u.checked=f[4])},d(f){f&&g(l),h=!1,o()}}}function ue(t){let l,s,u,k,h,o,f,n,y,D,p,E,S,b,L,A,B,a,w;const R=t[11].default,m=G(R,t,t[10],null);function Q(e){t[13](e)}let M={linter:t[7],config:{parser:"svelte-eslint-parser",parserOptions:{ecmaVersion:2020,sourceType:"module"},rules:t[0],env:{browser:!0,es2021:!0}},options:t[8],showDiff:t[4]&&t[1]};t[2]!==void 0&&(M.code=t[2]),n=new oe({props:M}),J.push(()=>K(n,"code",Q)),n.$on("result",t[9]);let r=t[1]&&H(t);return{c(){l=c(`

`),s=C("div"),u=c(`
  `),m&&m.c(),k=c(`
`),h=c(`

`),o=C("div"),f=c(`
  `),X(n.$$.fragment),D=c(`
  `),p=C("div"),E=c(`
    `),r&&r.c(),S=c(`
    `),b=C("span"),L=c(t[3]),A=c(`
  `),B=c(`
`),a=c(`

`),this.h()},l(e){l=d(e,`

`),s=I(e,"DIV",{class:!0});var i=N(s);u=d(i,`
  `),m&&m.l(i),k=d(i,`
`),i.forEach(g),h=d(e,`

`),o=I(e,"DIV",{class:!0});var v=N(o);f=d(v,`
  `),Y(n.$$.fragment,v),D=d(v,`
  `),p=I(v,"DIV",{class:!0});var z=N(p);E=d(z,`
    `),r&&r.l(z),S=d(z,`
    `),b=I(z,"SPAN",{});var O=N(b);L=d(O,t[3]),O.forEach(g),A=d(z,`
  `),z.forEach(g),B=d(v,`
`),v.forEach(g),a=d(e,`

`),this.h()},h(){P(s,"class","eslint-code-block-default-content svelte-1f8zmys"),T(b,"margin-left","16px",!1),P(p,"class","eslint-code-block-tools svelte-1f8zmys"),P(o,"class","eslint-code-block-root svelte-1f8zmys"),T(o,"height",t[6],!1)},m(e,i){V(e,l,i),V(e,s,i),_(s,u),m&&m.m(s,null),_(s,k),t[12](s),V(e,h,i),V(e,o,i),_(o,f),$(n,o,null),_(o,D),_(o,p),_(p,E),r&&r.m(p,null),_(p,S),_(p,b),_(b,L),_(p,A),_(o,B),V(e,a,i),w=!0},p(e,[i]){m&&m.p&&(!w||i&1024)&&x(m,R,e,e[10],w?te(R,e[10],i,null):ee(e[10]),null);const v={};i&1&&(v.config={parser:"svelte-eslint-parser",parserOptions:{ecmaVersion:2020,sourceType:"module"},rules:e[0],env:{browser:!0,es2021:!0}}),i&18&&(v.showDiff=e[4]&&e[1]),!y&&i&4&&(y=!0,v.code=e[2],se(()=>y=!1)),n.$set(v),e[1]?r?r.p(e,i):(r=H(e),r.c(),r.m(p,S)):r&&(r.d(1),r=null),(!w||i&8)&&ne(L,e[3]),i&64&&T(o,"height",e[6],!1)},i(e){w||(j(m,e),j(n.$$.fragment,e),w=!0)},o(e){q(m,e),q(n.$$.fragment,e),w=!1},d(e){e&&g(l),e&&g(s),m&&m.d(e),t[12](null),e&&g(h),e&&g(o),le(n),r&&r.d(),e&&g(a)}}}function ce(t,l,s){let u,{$$slots:k={},$$scope:h}=l;const o=ae();let f="",{rules:n={}}=l,{fix:y=!1}=l,D="",p={filename:"example.svelte",preprocess:fe,postprocess:re},E=y;function S(a){s(3,D=`${a.detail.time}ms`)}let b;ie(()=>{s(2,f=b.textContent.trim())});function L(a){J[a?"unshift":"push"](()=>{b=a,s(5,b)})}function A(a){f=a,s(2,f)}function B(){E=this.checked,s(4,E)}return t.$$set=a=>{"rules"in a&&s(0,n=a.rules),"fix"in a&&s(1,y=a.fix),"$$scope"in a&&s(10,h=a.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&s(6,u=`${Math.max(120,20*(1+f.split(`
`).length)+100)}px`)},[n,y,f,D,E,b,u,o,p,S,h,k,L,A,B]}class pe extends U{constructor(l){super(),Z(this,l,ce,ue,F,{rules:0,fix:1})}}export{pe as E};
