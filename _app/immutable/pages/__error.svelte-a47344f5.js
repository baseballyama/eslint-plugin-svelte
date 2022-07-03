import{S as D,i as H,s as K,t as o,e as b,b as l,c as k,a as v,d as f,f as L,h as q,j as r,k as A,D as B}from"../chunks/index-f154218a.js";import{b as Q}from"../chunks/paths-396f020f.js";function U(i){let a,n,u,h,t,T,p,d=i[1].message+"",E,C,m,O,_,P,S;return{c(){a=o(`



`),n=b("h1"),u=o(i[0]),h=o(`
`),t=b("blockquote"),T=o(`
  `),p=b("p"),E=o(d),C=o(`
  `),m=b("p"),O=o("Take me "),_=b("a"),P=o("home"),S=o(`
`),this.h()},l(e){a=l(e,`



`),n=k(e,"H1",{});var s=v(n);u=l(s,i[0]),s.forEach(f),h=l(e,`
`),t=k(e,"BLOCKQUOTE",{});var c=v(t);T=l(c,`
  `),p=k(c,"P",{});var x=v(p);E=l(x,d),x.forEach(f),C=l(c,`
  `),m=k(c,"P",{});var j=v(m);O=l(j,"Take me "),_=k(j,"A",{href:!0});var y=v(_);P=l(y,"home"),y.forEach(f),j.forEach(f),S=l(c,`
`),c.forEach(f),this.h()},h(){L(_,"href",Q+"/")},m(e,s){q(e,a,s),q(e,n,s),r(n,u),q(e,h,s),q(e,t,s),r(t,T),r(t,p),r(p,E),r(t,C),r(t,m),r(m,O),r(m,_),r(_,P),r(t,S)},p(e,[s]){s&1&&A(u,e[0]),s&2&&d!==(d=e[1].message+"")&&A(E,d)},i:B,o:B,d(e){e&&f(a),e&&f(n),e&&f(h),e&&f(t)}}}function G({error:i,status:a}){return{props:{error:i,status:a}}}function w(i,a,n){let{status:u,error:h}=a;return i.$$set=t=>{"status"in t&&n(0,u=t.status),"error"in t&&n(1,h=t.error)},[u,h]}class I extends D{constructor(a){super(),H(this,a,w,U,K,{status:0,error:1})}}export{I as default,G as load};
