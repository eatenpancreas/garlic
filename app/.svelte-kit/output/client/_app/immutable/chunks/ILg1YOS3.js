import{i as m,g as D,H,e as L,f as p,s as c,j as E,a as O,d as _,k as I,l as Y,m as j,n as k,o as C,q as M,r as S,c as V,t as $,u as q,h as w,v as P,w as W}from"./CT6-RewN.js";import{a as z,r as N,h,i as B,b as F}from"./BbttlLRP.js";function Q(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function G(t,e){return b(t,e)}function U(t,e){m(),e.intro=e.intro??!1;const r=e.target,l=w,u=_;try{for(var a=D(r);a&&(a.nodeType!==8||a.data!==H);)a=L(a);if(!a)throw p;c(!0),E(a),O();const o=b(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),p;return c(!1),o}catch(o){if(o===p)return e.recover===!1&&j(),m(),k(r),c(!1),G(t,e);throw o}finally{c(l),E(u)}}const d=new Map;function b(t,{target:e,anchor:r,props:l={},events:u,context:a,intro:o=!0}){m();var v=new Set,y=i=>{for(var s=0;s<i.length;s++){var n=i[s];if(!v.has(n)){v.add(n);var f=B(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};y(C(z)),N.add(y);var g=void 0,A=M(()=>{var i=r??e.appendChild(S());return V(()=>{if(a){$({});var s=q;s.c=a}u&&(l.$$events=u),w&&F(i,null),g=t(i,l)||{},w&&(P.nodes_end=_),a&&W()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}N.delete(y),i!==r&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(g,A),g}let R=new WeakMap;function X(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{U as h,G as m,Q as s,X as u};
