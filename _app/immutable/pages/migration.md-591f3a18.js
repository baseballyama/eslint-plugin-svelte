import{S as Oa,i as ya,s as Ra,t as s,e as a,b as n,c as l,f as o,h as p,d as t,l as Da,V as wa,a as r,j as e,D as bn}from"../chunks/index-f154218a.js";function Xa(xn){let v,h;return{c(){v=s(`
    `),h=a("meta"),this.h()},l(d){v=n(d,`
    `),h=l(d,"META",{property:!0,content:!0}),this.h()},h(){document.title="Migration Guide",o(h,"property","og:title"),o(h,"content","Migration Guide")},m(d,f){p(d,v,f),p(d,h,f)},d(d){d&&t(v),d&&t(h)}}}function Ia(xn){let v,h,d,f,Pt,se,At,St,dt,E,ne,Nt,bt,Ke,xt,Ct,ft,_,Qe,Dt,Ot,I,yt,Rt,We,wt,Xt,ut,O,It,M,Mt,Lt,vt,k,ae,Ft,Tt,Ye,jt,ht,g,Ze,Gt,Bt,$e,Ht,Ut,qt,zt,Et,P,Vt,N,Jt,L,et,Kt,Qt,Wt,Yt,le,re,F,oe,Zt,ie,$t,T,ce,es,pe,ts,ss,ns,b,as,u,tt,ls,rs,os,st,is,cs,nt,ps,ds,fs,us,vs,m,hs,x,Es,at,_s,gs,de,y,j,fe,ms,ue,ks,G,ve,Ps,he,As,B,Ee,Ss,_e,Ns,H,ge,bs,me,xs,Cs,Ds,C,Os,lt,ys,Rs,ke,A,U,Pe,ws,Ae,Xs,q,Se,Is,Ne,Ms,z,be,Ls,xe,Fs,V,Ce,Ts,De,js,J,Oe,Gs,ye,Bs,K,Re,Hs,we,Us,qs,zs,D,Vs,rt,ot,Js,Ks,Xe,R,Q,Ie,Qs,Me,Ws,W,Le,Ys,Fe,Zs,Y,Te,$s,je,en,Z,Ge,tn,Be,sn,nn,an,ln,rn,w=!Ma.title&&Xa();return{c(){v=s(`

`),w&&w.c(),h=Da(),d=s(`

  `),f=a("h1"),Pt=s(`


`),se=a("a"),At=s("#"),St=s(" Migration Guide"),dt=s(`
`),E=a("h2"),ne=a("a"),Nt=s("#"),bt=s(" From "),Ke=a("code"),xt=s("eslint-plugin-svelte"),Ct=s(" v1 To v2"),ft=s(`
`),_=a("p"),Qe=a("code"),Dt=s("eslint-plugin-svelte"),Ot=s(" v1 was an alias for "),I=a("a"),yt=s("eslint-plugin-svelte3"),Rt=s(", but "),We=a("code"),wt=s("eslint-plugin-svelte"),Xt=s(" v2 is now an independent eslint-plugin."),ut=s(`
`),O=a("p"),It=s("If you want the previous behavior, replace it with "),M=a("a"),Mt=s("eslint-plugin-svelte3"),Lt=s("."),vt=s(`
`),k=a("h2"),ae=a("a"),Ft=s("#"),Tt=s(" From "),Ye=a("code"),jt=s("@ota-meshi/eslint-plugin-svelte"),ht=s(`
`),g=a("p"),Ze=a("code"),Gt=s("@ota-meshi/eslint-plugin-svelte"),Bt=s(" has been renamed to "),$e=a("code"),Ht=s("eslint-plugin-svelte"),Ut=s("."),qt=a("br"),zt=s(`
Therefore, you need to replace the package name, and the presets, rules, and settings specified in the configuration.`),Et=s(`
`),P=a("ul"),Vt=s(`
`),N=a("li"),Jt=s(`
`),L=a("p"),et=a("code"),Kt=s("package.json"),Qt=a("br"),Wt=s(`
Replace the package name.`),Yt=s(`
`),le=a("pre"),re=a("code"),F=a("span"),oe=a("span"),Zt=s("-"),ie=a("span"),$t=s(`  "@ota-meshi/eslint-plugin-svelte": "^0.X.X"
`),T=a("span"),ce=a("span"),es=s("+"),pe=a("span"),ts=s(`  "eslint-plugin-svelte": "^X.X.X"
`),ss=s(`
`),ns=s(`
`),b=a("li"),as=s(`
`),u=a("p"),tt=a("code"),ls=s(".eslintrc.*"),rs=a("br"),os=s(`
Replace `),st=a("code"),is=s("@ota-meshi/svelte"),cs=s(" with "),nt=a("code"),ps=s("svelte"),ds=s(" as a string."),fs=a("br"),us=s(`
Examples:`),vs=s(`
`),m=a("ul"),hs=s(`
`),x=a("li"),Es=s(`
`),at=a("p"),_s=s("Presets"),gs=s(`
`),de=a("pre"),y=a("code"),j=a("span"),fe=a("span"),ms=s(" "),ue=a("span"),ks=s(` "extends": [
`),G=a("span"),ve=a("span"),Ps=s("-"),he=a("span"),As=s(`    "plugin:@ota-meshi/svelte/recommended"
`),B=a("span"),Ee=a("span"),Ss=s("+"),_e=a("span"),Ns=s(`    "plugin:svelte/recommended"
`),H=a("span"),ge=a("span"),bs=s(" "),me=a("span"),xs=s(` ],
`),Cs=s(`
`),Ds=s(`
`),C=a("li"),Os=s(`
`),lt=a("p"),ys=s("Rules"),Rs=s(`
`),ke=a("pre"),A=a("code"),U=a("span"),Pe=a("span"),ws=s(" "),Ae=a("span"),Xs=s(` "rules": {
`),q=a("span"),Se=a("span"),Is=s("-"),Ne=a("span"),Ms=s(`    "@ota-meshi/svelte/no-dupe-else-if-blocks": "error",
`),z=a("span"),be=a("span"),Ls=s("+"),xe=a("span"),Fs=s(`    "svelte/no-dupe-else-if-blocks": "error",
`),V=a("span"),Ce=a("span"),Ts=s("-"),De=a("span"),js=s(`    "@ota-meshi/svelte/button-has-type": "error",
`),J=a("span"),Oe=a("span"),Gs=s("+"),ye=a("span"),Bs=s(`    "svelte/button-has-type": "error",
`),K=a("span"),Re=a("span"),Hs=s(" "),we=a("span"),Us=s(` },
`),qs=s(`
`),zs=s(`
`),D=a("li"),Vs=s(`
`),rt=a("p"),ot=a("code"),Js=s("settings"),Ks=s(`
`),Xe=a("pre"),R=a("code"),Q=a("span"),Ie=a("span"),Qs=s(" "),Me=a("span"),Ws=s(` "settings": {
`),W=a("span"),Le=a("span"),Ys=s("-"),Fe=a("span"),Zs=s(`    "@ota-meshi/svelte": { ... }
`),Y=a("span"),Te=a("span"),$s=s("+"),je=a("span"),en=s(`    "svelte": { ... }
`),Z=a("span"),Ge=a("span"),tn=s(" "),Be=a("span"),sn=s(` },
`),nn=s(`
`),an=s(`
`),ln=s(`
`),rn=s(`
`),this.h()},l(i){v=n(i,`

`);const c=wa('[data-svelte="svelte-at8rza"]',document.head);w&&w.l(c),h=Da(),c.forEach(t),d=n(i,`

  `),f=l(i,"H1",{id:!0,tabindex:!0});var _t=r(f);Pt=n(_t,`


`),se=l(_t,"A",{href:!0});var Cn=r(se);At=n(Cn,"#"),Cn.forEach(t),St=n(_t," Migration Guide"),_t.forEach(t),dt=n(i,`
`),E=l(i,"H2",{id:!0,tabindex:!0});var it=r(E);ne=l(it,"A",{href:!0});var Dn=r(ne);Nt=n(Dn,"#"),Dn.forEach(t),bt=n(it," From "),Ke=l(it,"CODE",{});var On=r(Ke);xt=n(On,"eslint-plugin-svelte"),On.forEach(t),Ct=n(it," v1 To v2"),it.forEach(t),ft=n(i,`
`),_=l(i,"P",{});var $=r(_);Qe=l($,"CODE",{});var yn=r(Qe);Dt=n(yn,"eslint-plugin-svelte"),yn.forEach(t),Ot=n($," v1 was an alias for "),I=l($,"A",{href:!0,target:!0});var Rn=r(I);yt=n(Rn,"eslint-plugin-svelte3"),Rn.forEach(t),Rt=n($,", but "),We=l($,"CODE",{});var wn=r(We);wt=n(wn,"eslint-plugin-svelte"),wn.forEach(t),Xt=n($," v2 is now an independent eslint-plugin."),$.forEach(t),ut=n(i,`
`),O=l(i,"P",{});var gt=r(O);It=n(gt,"If you want the previous behavior, replace it with "),M=l(gt,"A",{href:!0,target:!0});var Xn=r(M);Mt=n(Xn,"eslint-plugin-svelte3"),Xn.forEach(t),Lt=n(gt,"."),gt.forEach(t),vt=n(i,`
`),k=l(i,"H2",{id:!0,tabindex:!0});var mt=r(k);ae=l(mt,"A",{href:!0});var In=r(ae);Ft=n(In,"#"),In.forEach(t),Tt=n(mt," From "),Ye=l(mt,"CODE",{});var Mn=r(Ye);jt=n(Mn,"@ota-meshi/eslint-plugin-svelte"),Mn.forEach(t),mt.forEach(t),ht=n(i,`
`),g=l(i,"P",{});var ee=r(g);Ze=l(ee,"CODE",{});var Ln=r(Ze);Gt=n(Ln,"@ota-meshi/eslint-plugin-svelte"),Ln.forEach(t),Bt=n(ee," has been renamed to "),$e=l(ee,"CODE",{});var Fn=r($e);Ht=n(Fn,"eslint-plugin-svelte"),Fn.forEach(t),Ut=n(ee,"."),qt=l(ee,"BR",{}),zt=n(ee,`
Therefore, you need to replace the package name, and the presets, rules, and settings specified in the configuration.`),ee.forEach(t),Et=n(i,`
`),P=l(i,"UL",{});var He=r(P);Vt=n(He,`
`),N=l(He,"LI",{});var Ue=r(N);Jt=n(Ue,`
`),L=l(Ue,"P",{});var kt=r(L);et=l(kt,"CODE",{});var Tn=r(et);Kt=n(Tn,"package.json"),Tn.forEach(t),Qt=l(kt,"BR",{}),Wt=n(kt,`
Replace the package name.`),kt.forEach(t),Yt=n(Ue,`
`),le=l(Ue,"PRE",{class:!0});var jn=r(le);re=l(jn,"CODE",{});var on=r(re);F=l(on,"SPAN",{class:!0});var cn=r(F);oe=l(cn,"SPAN",{class:!0});var Gn=r(oe);Zt=n(Gn,"-"),Gn.forEach(t),ie=l(cn,"SPAN",{class:!0});var Bn=r(ie);$t=n(Bn,`  "@ota-meshi/eslint-plugin-svelte": "^0.X.X"
`),Bn.forEach(t),cn.forEach(t),T=l(on,"SPAN",{class:!0});var pn=r(T);ce=l(pn,"SPAN",{class:!0});var Hn=r(ce);es=n(Hn,"+"),Hn.forEach(t),pe=l(pn,"SPAN",{class:!0});var Un=r(pe);ts=n(Un,`  "eslint-plugin-svelte": "^X.X.X"
`),Un.forEach(t),pn.forEach(t),on.forEach(t),jn.forEach(t),ss=n(Ue,`
`),Ue.forEach(t),ns=n(He,`
`),b=l(He,"LI",{});var qe=r(b);as=n(qe,`
`),u=l(qe,"P",{});var S=r(u);tt=l(S,"CODE",{});var qn=r(tt);ls=n(qn,".eslintrc.*"),qn.forEach(t),rs=l(S,"BR",{}),os=n(S,`
Replace `),st=l(S,"CODE",{});var zn=r(st);is=n(zn,"@ota-meshi/svelte"),zn.forEach(t),cs=n(S," with "),nt=l(S,"CODE",{});var Vn=r(nt);ps=n(Vn,"svelte"),Vn.forEach(t),ds=n(S," as a string."),fs=l(S,"BR",{}),us=n(S,`
Examples:`),S.forEach(t),vs=n(qe,`
`),m=l(qe,"UL",{});var X=r(m);hs=n(X,`
`),x=l(X,"LI",{});var ze=r(x);Es=n(ze,`
`),at=l(ze,"P",{});var Jn=r(at);_s=n(Jn,"Presets"),Jn.forEach(t),gs=n(ze,`
`),de=l(ze,"PRE",{class:!0});var Kn=r(de);y=l(Kn,"CODE",{});var ct=r(y);j=l(ct,"SPAN",{class:!0});var dn=r(j);fe=l(dn,"SPAN",{class:!0});var Qn=r(fe);ms=n(Qn," "),Qn.forEach(t),ue=l(dn,"SPAN",{class:!0});var Wn=r(ue);ks=n(Wn,` "extends": [
`),Wn.forEach(t),dn.forEach(t),G=l(ct,"SPAN",{class:!0});var fn=r(G);ve=l(fn,"SPAN",{class:!0});var Yn=r(ve);Ps=n(Yn,"-"),Yn.forEach(t),he=l(fn,"SPAN",{class:!0});var Zn=r(he);As=n(Zn,`    "plugin:@ota-meshi/svelte/recommended"
`),Zn.forEach(t),fn.forEach(t),B=l(ct,"SPAN",{class:!0});var un=r(B);Ee=l(un,"SPAN",{class:!0});var $n=r(Ee);Ss=n($n,"+"),$n.forEach(t),_e=l(un,"SPAN",{class:!0});var ea=r(_e);Ns=n(ea,`    "plugin:svelte/recommended"
`),ea.forEach(t),un.forEach(t),H=l(ct,"SPAN",{class:!0});var vn=r(H);ge=l(vn,"SPAN",{class:!0});var ta=r(ge);bs=n(ta," "),ta.forEach(t),me=l(vn,"SPAN",{class:!0});var sa=r(me);xs=n(sa,` ],
`),sa.forEach(t),vn.forEach(t),ct.forEach(t),Kn.forEach(t),Cs=n(ze,`
`),ze.forEach(t),Ds=n(X,`
`),C=l(X,"LI",{});var Ve=r(C);Os=n(Ve,`
`),lt=l(Ve,"P",{});var na=r(lt);ys=n(na,"Rules"),na.forEach(t),Rs=n(Ve,`
`),ke=l(Ve,"PRE",{class:!0});var aa=r(ke);A=l(aa,"CODE",{});var te=r(A);U=l(te,"SPAN",{class:!0});var hn=r(U);Pe=l(hn,"SPAN",{class:!0});var la=r(Pe);ws=n(la," "),la.forEach(t),Ae=l(hn,"SPAN",{class:!0});var ra=r(Ae);Xs=n(ra,` "rules": {
`),ra.forEach(t),hn.forEach(t),q=l(te,"SPAN",{class:!0});var En=r(q);Se=l(En,"SPAN",{class:!0});var oa=r(Se);Is=n(oa,"-"),oa.forEach(t),Ne=l(En,"SPAN",{class:!0});var ia=r(Ne);Ms=n(ia,`    "@ota-meshi/svelte/no-dupe-else-if-blocks": "error",
`),ia.forEach(t),En.forEach(t),z=l(te,"SPAN",{class:!0});var _n=r(z);be=l(_n,"SPAN",{class:!0});var ca=r(be);Ls=n(ca,"+"),ca.forEach(t),xe=l(_n,"SPAN",{class:!0});var pa=r(xe);Fs=n(pa,`    "svelte/no-dupe-else-if-blocks": "error",
`),pa.forEach(t),_n.forEach(t),V=l(te,"SPAN",{class:!0});var gn=r(V);Ce=l(gn,"SPAN",{class:!0});var da=r(Ce);Ts=n(da,"-"),da.forEach(t),De=l(gn,"SPAN",{class:!0});var fa=r(De);js=n(fa,`    "@ota-meshi/svelte/button-has-type": "error",
`),fa.forEach(t),gn.forEach(t),J=l(te,"SPAN",{class:!0});var mn=r(J);Oe=l(mn,"SPAN",{class:!0});var ua=r(Oe);Gs=n(ua,"+"),ua.forEach(t),ye=l(mn,"SPAN",{class:!0});var va=r(ye);Bs=n(va,`    "svelte/button-has-type": "error",
`),va.forEach(t),mn.forEach(t),K=l(te,"SPAN",{class:!0});var kn=r(K);Re=l(kn,"SPAN",{class:!0});var ha=r(Re);Hs=n(ha," "),ha.forEach(t),we=l(kn,"SPAN",{class:!0});var Ea=r(we);Us=n(Ea,` },
`),Ea.forEach(t),kn.forEach(t),te.forEach(t),aa.forEach(t),qs=n(Ve,`
`),Ve.forEach(t),zs=n(X,`
`),D=l(X,"LI",{});var Je=r(D);Vs=n(Je,`
`),rt=l(Je,"P",{});var _a=r(rt);ot=l(_a,"CODE",{});var ga=r(ot);Js=n(ga,"settings"),ga.forEach(t),_a.forEach(t),Ks=n(Je,`
`),Xe=l(Je,"PRE",{class:!0});var ma=r(Xe);R=l(ma,"CODE",{});var pt=r(R);Q=l(pt,"SPAN",{class:!0});var Pn=r(Q);Ie=l(Pn,"SPAN",{class:!0});var ka=r(Ie);Qs=n(ka," "),ka.forEach(t),Me=l(Pn,"SPAN",{class:!0});var Pa=r(Me);Ws=n(Pa,` "settings": {
`),Pa.forEach(t),Pn.forEach(t),W=l(pt,"SPAN",{class:!0});var An=r(W);Le=l(An,"SPAN",{class:!0});var Aa=r(Le);Ys=n(Aa,"-"),Aa.forEach(t),Fe=l(An,"SPAN",{class:!0});var Sa=r(Fe);Zs=n(Sa,`    "@ota-meshi/svelte": { ... }
`),Sa.forEach(t),An.forEach(t),Y=l(pt,"SPAN",{class:!0});var Sn=r(Y);Te=l(Sn,"SPAN",{class:!0});var Na=r(Te);$s=n(Na,"+"),Na.forEach(t),je=l(Sn,"SPAN",{class:!0});var ba=r(je);en=n(ba,`    "svelte": { ... }
`),ba.forEach(t),Sn.forEach(t),Z=l(pt,"SPAN",{class:!0});var Nn=r(Z);Ge=l(Nn,"SPAN",{class:!0});var xa=r(Ge);tn=n(xa," "),xa.forEach(t),Be=l(Nn,"SPAN",{class:!0});var Ca=r(Be);sn=n(Ca,` },
`),Ca.forEach(t),Nn.forEach(t),pt.forEach(t),ma.forEach(t),nn=n(Je,`
`),Je.forEach(t),an=n(X,`
`),X.forEach(t),ln=n(qe,`
`),qe.forEach(t),rn=n(He,`
`),He.forEach(t),this.h()},h(){o(se,"href","/eslint-plugin-svelte/migration/#migration-guide"),o(f,"id","migration-guide"),o(f,"tabindex","-1"),o(ne,"href","/eslint-plugin-svelte/migration/#from-eslint-plugin-svelte-v1-to-v2"),o(E,"id","from-eslint-plugin-svelte-v1-to-v2"),o(E,"tabindex","-1"),o(I,"href","https://github.com/sveltejs/eslint-plugin-svelte3"),o(I,"target","_blank"),o(M,"href","https://github.com/sveltejs/eslint-plugin-svelte3"),o(M,"target","_blank"),o(ae,"href","/eslint-plugin-svelte/migration/#from-ota-meshi-eslint-plugin-svelte"),o(k,"id","from-ota-meshi-eslint-plugin-svelte"),o(k,"tabindex","-1"),o(oe,"class","token prefix deleted"),o(ie,"class","token line"),o(F,"class","token deleted-sign deleted"),o(ce,"class","token prefix inserted"),o(pe,"class","token line"),o(T,"class","token inserted-sign inserted"),o(le,"class","language-diff"),o(fe,"class","token prefix unchanged"),o(ue,"class","token line"),o(j,"class","token unchanged"),o(ve,"class","token prefix deleted"),o(he,"class","token line"),o(G,"class","token deleted-sign deleted"),o(Ee,"class","token prefix inserted"),o(_e,"class","token line"),o(B,"class","token inserted-sign inserted"),o(ge,"class","token prefix unchanged"),o(me,"class","token line"),o(H,"class","token unchanged"),o(de,"class","language-diff"),o(Pe,"class","token prefix unchanged"),o(Ae,"class","token line"),o(U,"class","token unchanged"),o(Se,"class","token prefix deleted"),o(Ne,"class","token line"),o(q,"class","token deleted-sign deleted"),o(be,"class","token prefix inserted"),o(xe,"class","token line"),o(z,"class","token inserted-sign inserted"),o(Ce,"class","token prefix deleted"),o(De,"class","token line"),o(V,"class","token deleted-sign deleted"),o(Oe,"class","token prefix inserted"),o(ye,"class","token line"),o(J,"class","token inserted-sign inserted"),o(Re,"class","token prefix unchanged"),o(we,"class","token line"),o(K,"class","token unchanged"),o(ke,"class","language-diff"),o(Ie,"class","token prefix unchanged"),o(Me,"class","token line"),o(Q,"class","token unchanged"),o(Le,"class","token prefix deleted"),o(Fe,"class","token line"),o(W,"class","token deleted-sign deleted"),o(Te,"class","token prefix inserted"),o(je,"class","token line"),o(Y,"class","token inserted-sign inserted"),o(Ge,"class","token prefix unchanged"),o(Be,"class","token line"),o(Z,"class","token unchanged"),o(Xe,"class","language-diff")},m(i,c){p(i,v,c),w&&w.m(document.head,null),e(document.head,h),p(i,d,c),p(i,f,c),e(f,Pt),e(f,se),e(se,At),e(f,St),p(i,dt,c),p(i,E,c),e(E,ne),e(ne,Nt),e(E,bt),e(E,Ke),e(Ke,xt),e(E,Ct),p(i,ft,c),p(i,_,c),e(_,Qe),e(Qe,Dt),e(_,Ot),e(_,I),e(I,yt),e(_,Rt),e(_,We),e(We,wt),e(_,Xt),p(i,ut,c),p(i,O,c),e(O,It),e(O,M),e(M,Mt),e(O,Lt),p(i,vt,c),p(i,k,c),e(k,ae),e(ae,Ft),e(k,Tt),e(k,Ye),e(Ye,jt),p(i,ht,c),p(i,g,c),e(g,Ze),e(Ze,Gt),e(g,Bt),e(g,$e),e($e,Ht),e(g,Ut),e(g,qt),e(g,zt),p(i,Et,c),p(i,P,c),e(P,Vt),e(P,N),e(N,Jt),e(N,L),e(L,et),e(et,Kt),e(L,Qt),e(L,Wt),e(N,Yt),e(N,le),e(le,re),e(re,F),e(F,oe),e(oe,Zt),e(F,ie),e(ie,$t),e(re,T),e(T,ce),e(ce,es),e(T,pe),e(pe,ts),e(N,ss),e(P,ns),e(P,b),e(b,as),e(b,u),e(u,tt),e(tt,ls),e(u,rs),e(u,os),e(u,st),e(st,is),e(u,cs),e(u,nt),e(nt,ps),e(u,ds),e(u,fs),e(u,us),e(b,vs),e(b,m),e(m,hs),e(m,x),e(x,Es),e(x,at),e(at,_s),e(x,gs),e(x,de),e(de,y),e(y,j),e(j,fe),e(fe,ms),e(j,ue),e(ue,ks),e(y,G),e(G,ve),e(ve,Ps),e(G,he),e(he,As),e(y,B),e(B,Ee),e(Ee,Ss),e(B,_e),e(_e,Ns),e(y,H),e(H,ge),e(ge,bs),e(H,me),e(me,xs),e(x,Cs),e(m,Ds),e(m,C),e(C,Os),e(C,lt),e(lt,ys),e(C,Rs),e(C,ke),e(ke,A),e(A,U),e(U,Pe),e(Pe,ws),e(U,Ae),e(Ae,Xs),e(A,q),e(q,Se),e(Se,Is),e(q,Ne),e(Ne,Ms),e(A,z),e(z,be),e(be,Ls),e(z,xe),e(xe,Fs),e(A,V),e(V,Ce),e(Ce,Ts),e(V,De),e(De,js),e(A,J),e(J,Oe),e(Oe,Gs),e(J,ye),e(ye,Bs),e(A,K),e(K,Re),e(Re,Hs),e(K,we),e(we,Us),e(C,qs),e(m,zs),e(m,D),e(D,Vs),e(D,rt),e(rt,ot),e(ot,Js),e(D,Ks),e(D,Xe),e(Xe,R),e(R,Q),e(Q,Ie),e(Ie,Qs),e(Q,Me),e(Me,Ws),e(R,W),e(W,Le),e(Le,Ys),e(W,Fe),e(Fe,Zs),e(R,Y),e(Y,Te),e(Te,$s),e(Y,je),e(je,en),e(R,Z),e(Z,Ge),e(Ge,tn),e(Z,Be),e(Be,sn),e(D,nn),e(m,an),e(b,ln),e(P,rn)},p:bn,i:bn,o:bn,d(i){i&&t(v),w&&w.d(i),t(h),i&&t(d),i&&t(f),i&&t(dt),i&&t(E),i&&t(ft),i&&t(_),i&&t(ut),i&&t(O),i&&t(vt),i&&t(k),i&&t(ht),i&&t(g),i&&t(Et),i&&t(P)}}}const Ma={},Fa={children:[{level:1,id:"migration-guide",title:" Migration Guide",children:[{level:2,id:"from-eslint-plugin-svelte-v1-to-v2",title:" From eslint-plugin-svelte v1 To v2",children:[]},{level:2,id:"from-ota-meshi-eslint-plugin-svelte",title:" From @ota-meshi/eslint-plugin-svelte",children:[]}]}]},Ta={timestamp:1656891647e3,lastUpdated:"7/3/2022, 11:40:47 PM"};class ja extends Oa{constructor(v){super(),ya(this,v,null,Ia,Ra,{})}}export{ja as default,Ta as fileInfo,Ma as frontmatter,Fa as toc};
