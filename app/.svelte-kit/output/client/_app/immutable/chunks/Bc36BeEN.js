import{S as N,G as q,I as B,J as g,K as G,L as b,U as d,M as o,N as A,v as Z,O as $,P as j,Q as C,R as V,T as z,V as M,W as J,X as Q,Y as W,Z as X,y as U,_ as F,$ as H,a0 as k,a1 as p,a2 as ee}from"./CT6-RewN.js";import{l as re}from"./DIeogL5L.js";function O(r,a=null,P){if(typeof r!="object"||r===null||N in r)return r;const y=j(r);if(y!==q&&y!==B)return r;var u=new Map,c=C(r),m=g(0);c&&u.set("length",g(r.length));var w;return new Proxy(r,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&$();var i=u.get(e);return i===void 0?(i=g(n.value),u.set(e,i)):o(i,O(n.value,w)),!0},deleteProperty(f,e){var n=u.get(e);if(n===void 0)e in f&&u.set(e,g(d));else{if(c&&typeof e=="string"){var i=u.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&o(i,t)}o(n,d),Y(m)}return!0},get(f,e,n){var v;if(e===N)return r;var i=u.get(e),t=e in f;if(i===void 0&&(!t||(v=A(f,e))!=null&&v.writable)&&(i=g(O(t?f[e]:d,w)),u.set(e,i)),i!==void 0){var s=b(i);return s===d?void 0:s}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var i=u.get(e);i&&(n.value=b(i))}else if(n===void 0){var t=u.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==d)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(f,e){var s;if(e===N)return!0;var n=u.get(e),i=n!==void 0&&n.v!==d||Reflect.has(f,e);if(n!==void 0||Z!==null&&(!i||(s=A(f,e))!=null&&s.writable)){n===void 0&&(n=g(i?O(f[e],w):d),u.set(e,n));var t=b(n);if(t===d)return!1}return i},set(f,e,n,i){var R;var t=u.get(e),s=e in f;if(c&&e==="length")for(var v=n;v<t.v;v+=1){var I=u.get(v+"");I!==void 0?o(I,d):v in f&&(I=g(d),u.set(v+"",I))}t===void 0?(!s||(R=A(f,e))!=null&&R.writable)&&(t=g(void 0),o(t,O(n,w)),u.set(e,t)):(s=t.v!==d,o(t,O(n,w)));var _=Reflect.getOwnPropertyDescriptor(f,e);if(_!=null&&_.set&&_.set.call(i,n),!s){if(c&&typeof e=="string"){var h=u.get("length"),x=Number(e);Number.isInteger(x)&&x>=h.v&&o(h,x+1)}Y(m)}return!0},ownKeys(f){b(m);var e=Reflect.ownKeys(f).filter(t=>{var s=u.get(t);return s===void 0||s.v!==d});for(var[n,i]of u)i.v!==d&&!(n in f)&&e.push(n);return e},setPrototypeOf(){G()}})}function Y(r,a=1){o(r,r.v+a)}let E=!1;function ne(r){var a=E;try{return E=!1,[r(),E]}finally{E=a}}const te={get(r,a){if(!r.exclude.includes(a))return r.props[a]},set(r,a){return!1},getOwnPropertyDescriptor(r,a){if(!r.exclude.includes(a)&&a in r.props)return{enumerable:!0,configurable:!0,value:r.props[a]}},has(r,a){return r.exclude.includes(a)?!1:a in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(a=>!r.exclude.includes(a))}};function fe(r,a,P){return new Proxy({props:r,exclude:a},te)}function ue(r,a,P,y){var K;var u=(P&p)!==0,c=!re||(P&k)!==0,m=(P&F)!==0,w=(P&ee)!==0,f=!1,e;m?[e,f]=ne(()=>r[a]):e=r[a];var n=N in r||H in r,i=m&&(((K=A(r,a))==null?void 0:K.set)??(n&&a in r&&(l=>r[a]=l)))||void 0,t=y,s=!0,v=!1,I=()=>(v=!0,s&&(s=!1,w?t=U(y):t=y),t);e===void 0&&y!==void 0&&(i&&c&&V(),e=I(),i&&i(e));var _;if(c)_=()=>{var l=r[a];return l===void 0?I():(s=!0,v=!1,l)};else{var h=(u?M:J)(()=>r[a]);h.f|=z,_=()=>{var l=b(h);return l!==void 0&&(t=void 0),l===void 0?t:l}}if((P&Q)===0)return _;if(i){var x=r.$$legacy;return function(l,S){return arguments.length>0?((!c||!S||x||f)&&i(S?_():l),l):_()}}var R=!1,L=X(e),D=M(()=>{var l=_(),S=b(L);return R?(R=!1,S):L.v=l});return u||(D.equals=W),function(l,S){if(arguments.length>0){const T=S?b(D):c&&m?O(l):l;return D.equals(T)||(R=!0,o(L,T),v&&t!==void 0&&(t=T),U(()=>b(D))),l}return b(D)}}export{O as a,ue as p,fe as r};
