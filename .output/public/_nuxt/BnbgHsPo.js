import{y as ge,ac as Oe,ad as Ee,A as me,I as X,r as Fe,j as T,L as ze,ae as Le,c as Y,O as Z,o as E,Q as ee,R as F,k as $e,S as Me,C as Ne,d as De,t as Re,_ as _e}from"./aHHwhUA4.js";import{u as Qe}from"./JXfwZP0H.js";const qe="$s";function Ve(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[o,s]=e;if(!o||typeof o!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+o);if(s!==void 0&&typeof s!="function")throw new Error("[nuxt] [useState] init must be a function: "+s);const n=qe+o,i=ge(),r=Oe(i.payload.state,n);if(r.value===void 0&&s){const c=s();if(Ee(c))return i.payload.state[n]=c,c;r.value=c}return r}const ye=Object.freeze({left:0,top:0,width:16,height:16}),ve=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),B=Object.freeze({...ye,...ve});Object.freeze({...B,body:"",hidden:!1});({...ye});const xe=Object.freeze({width:null,height:null}),be=Object.freeze({...xe,...ve});function He(e,t){const o={...e};for(const s in t){const n=t[s],i=typeof n;s in xe?(n===null||n&&(i==="string"||i==="number"))&&(o[s]=n):i===typeof o[s]&&(o[s]=s==="rotate"?n%4:n)}return o}const Ue=/[\s,]+/;function Be(e,t){t.split(Ue).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Ge(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:s(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?s(i):0)}}return t}const Ke=/(-?[0-9.]*[0-9]+[0-9.]*)/g,We=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function te(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const s=e.split(Ke);if(s===null||!s.length)return e;const n=[];let i=s.shift(),r=We.test(i);for(;;){if(r){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=s.shift(),i===void 0)return n.join("");r=!r}}function Je(e,t="defs"){let o="";const s=e.indexOf("<"+t);for(;s>=0;){const n=e.indexOf(">",s),i=e.indexOf("</"+t);if(n===-1||i===-1)break;const r=e.indexOf(">",i);if(r===-1)break;o+=e.slice(n+1,i).trim(),e=e.slice(0,s).trim()+e.slice(r+1)}return{defs:o,content:e}}function Xe(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ye(e,t,o){const s=Je(e);return Xe(s.defs,t+s.content+o)}const Ze=e=>e==="unset"||e==="undefined"||e==="none";function et(e,t){const o={...B,...e},s={...be,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,s].forEach(m=>{const f=[],w=m.hFlip,I=m.vFlip;let b=m.rotate;w?I?b+=2:(f.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),f.push("scale(-1 1)"),n.top=n.left=0):I&&(f.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),f.push("scale(1 -1)"),n.top=n.left=0);let v;switch(b<0&&(b-=Math.floor(b/4)*4),b=b%4,b){case 1:v=n.height/2+n.top,f.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:f.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:v=n.width/2+n.left,f.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}b%2===1&&(n.left!==n.top&&(v=n.left,n.left=n.top,n.top=v),n.width!==n.height&&(v=n.width,n.width=n.height,n.height=v)),f.length&&(i=Ye(i,'<g transform="'+f.join(" ")+'">',"</g>"))});const r=s.width,c=s.height,l=n.width,u=n.height;let a,d;r===null?(d=c===null?"1em":c==="auto"?u:c,a=te(d,l/u)):(a=r==="auto"?l:r,d=c===null?te(a,u/l):c==="auto"?u:c);const p={},y=(m,f)=>{Ze(f)||(p[m]=f.toString())};y("width",a),y("height",d);const h=[n.left,n.top,l,u];return p.viewBox=h.join(" "),{attributes:p,viewBox:h,body:i}}const tt=/\sid="(\S+)"/g,nt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ot=0;function st(e,t=nt){const o=[];let s;for(;s=tt.exec(e);)o.push(s[1]);if(!o.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{const r=typeof t=="function"?t(i):t+(ot++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+r+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}function it(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)o+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function rt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ct(e){return"data:image/svg+xml,"+rt(e)}function lt(e){return'url("'+ct(e)+'")'}const ne={...be,inline:!1},ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},at={display:"inline-block"},q={backgroundColor:"currentColor"},we={backgroundColor:"transparent"},oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},se={webkitMask:q,mask:q,background:we};for(const e in se){const t=se[e];for(const o in oe)t[e+o]=oe[o]}const z={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";z[e+"-flip"]=t,z[e.slice(0,1)+"-flip"]=t,z[e+"Flip"]=t});function ie(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const ft=(e,t)=>{const o=He(ne,t),s={...ut},n=t.mode||"svg",i={},r=t.style,c=typeof r=="object"&&!(r instanceof Array)?r:{};for(let m in t){const f=t[m];if(f!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":o[m]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Be(o,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?o[m]=Ge(f):typeof f=="number"&&(o[m]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete s["aria-hidden"];break;default:{const w=z[m];w?(f===!0||f==="true"||f===1)&&(o[w]=!0):ne[m]===void 0&&(s[m]=f)}}}const l=et(e,o),u=l.attributes;if(o.inline&&(i.verticalAlign="-0.125em"),n==="svg"){s.style={...i,...c},Object.assign(s,u);let m=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),s.innerHTML=st(l.body,f?()=>f+"ID"+m++:"iconifyVue"),X("svg",s)}const{body:a,width:d,height:p}=e,y=n==="mask"||(n==="bg"?!1:a.indexOf("currentColor")!==-1),h=it(a,{...u,width:d+"",height:p+""});return s.style={...i,"--svg":lt(h),width:ie(u.width),height:ie(u.height),...at,...y?q:we,...c},X("span",s)},dt=Object.create(null),pt=me({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,o=typeof t=="string"?dt[t]:typeof t=="object"?t:null;return o===null||typeof o!="object"||typeof o.body!="string"?this.$slots.default?this.$slots.default():null:ft({...B,...o},e)}}),Ie=/^[a-z0-9]+(-[a-z0-9]+)*$/,N=(e,t,o,s="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),u={provider:n.length>0?n[0]:s,prefix:l,name:c};return t&&!L(u)?null:u}const i=n[0],r=i.split("-");if(r.length>1){const c={provider:s,prefix:r.shift(),name:r.join("-")};return t&&!L(c)?null:c}if(o&&s===""){const c={provider:s,prefix:"",name:i};return t&&!L(c,o)?null:c}return null},L=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,Se=Object.freeze({left:0,top:0,width:16,height:16}),M=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...Se,...M}),V=Object.freeze({...G,body:"",hidden:!1});function ht(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const s=((e.rotate||0)+(t.rotate||0))%4;return s&&(o.rotate=s),o}function re(e,t){const o=ht(e,t);for(const s in V)s in M?s in e&&!(s in o)&&(o[s]=M[s]):s in t?o[s]=t[s]:s in e&&(o[s]=e[s]);return o}function gt(e,t){const o=e.icons,s=e.aliases||Object.create(null),n=Object.create(null);function i(r){if(o[r])return n[r]=[];if(!(r in n)){n[r]=null;const c=s[r]&&s[r].parent,l=c&&i(c);l&&(n[r]=[c].concat(l))}return n[r]}return Object.keys(o).concat(Object.keys(s)).forEach(i),n}function mt(e,t,o){const s=e.icons,n=e.aliases||Object.create(null);let i={};function r(c){i=re(s[c]||n[c],i)}return r(t),o.forEach(r),re(e,i)}function ke(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const s=gt(e);for(const n in s){const i=s[n];i&&(t(n,mt(e,n,i)),o.push(n))}return o}const yt={provider:"",aliases:{},not_found:{},...Se};function R(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function Ce(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!R(e,yt))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n||typeof i.body!="string"||!R(i,V))return null}const s=t.aliases||Object.create(null);for(const n in s){const i=s[n],r=i.parent;if(!n||typeof r!="string"||!o[r]&&!s[r]||!R(i,V))return null}return t}const ce=Object.create(null);function vt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const o=ce[e]||(ce[e]=Object.create(null));return o[t]||(o[t]=vt(e,t))}function Te(e,t){return Ce(t)?ke(t,(o,s)=>{s?e.icons[o]=s:e.missing.add(o)}):[]}function xt(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let A=!1;function je(e){return typeof e=="boolean"&&(A=e),A}function bt(e){const t=typeof e=="string"?N(e,!0,A):e;if(t){const o=k(t.provider,t.prefix),s=t.name;return o.icons[s]||(o.missing.has(s)?null:void 0)}}function wt(e,t){const o=N(e,!0,A);if(!o)return!1;const s=k(o.provider,o.prefix);return t?xt(s,o.name,t):(s.missing.add(o.name),!0)}function It(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),A&&!t&&!e.prefix){let n=!1;return Ce(e)&&(e.prefix="",ke(e,(i,r)=>{wt(i,r)&&(n=!0)})),n}const o=e.prefix;if(!L({prefix:o,name:"a"}))return!1;const s=k(t,o);return!!Te(s,e)}const St=Object.freeze({width:null,height:null}),kt=Object.freeze({...St,...M});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const H=Object.create(null);function Ct(e,t){H[e]=t}function U(e){return H[e]||H[""]}function K(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const W=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],$=[];for(;j.length>0;)j.length===1||Math.random()>.5?$.push(j.shift()):$.push(j.pop());W[""]=K({resources:["https://api.iconify.design"].concat($)});function Tt(e,t){const o=K(t);return o===null?!1:(W[e]=o,!0)}function J(e){return W[e]}const jt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let le=jt();function Pt(e,t){const o=J(e);if(!o)return 0;let s;if(!o.maxURL)s=0;else{let n=0;o.resources.forEach(r=>{n=Math.max(n,r.length)});const i=t+".json?icons=";s=o.maxURL-n-o.path.length-i.length}return s}function At(e){return e===404}const Ot=(e,t,o)=>{const s=[],n=Pt(e,t),i="icons";let r={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,u)=>{c+=l.length+1,c>=n&&u>0&&(s.push(r),r={type:i,provider:e,prefix:t,icons:[]},c=l.length),r.icons.push(l)}),s.push(r),s};function Et(e){if(typeof e=="string"){const t=J(e);if(t)return t.path}return"/"}const Ft=(e,t,o)=>{if(!le){o("abort",424);return}let s=Et(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});s+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;le(e+s).then(i=>{const r=i.status;if(r!==200){setTimeout(()=>{o(At(r)?"abort":"next",r)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},zt={prepare:Ot,send:Ft};function Lt(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return e.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const i=n.provider,r=n.prefix,c=n.name,l=o[i]||(o[i]=Object.create(null)),u=l[r]||(l[r]=k(i,r));let a;c in u.icons?a=t.loaded:r===""||u.missing.has(c)?a=t.missing:a=t.pending;const d={provider:i,prefix:r,name:c};a.push(d)}),t}function Pe(e,t){e.forEach(o=>{const s=o.loaderCallbacks;s&&(o.loaderCallbacks=s.filter(n=>n.id!==t))})}function $t(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const s=e.provider,n=e.prefix;t.forEach(i=>{const r=i.icons,c=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==n)return!0;const u=l.name;if(e.icons[u])r.loaded.push({provider:s,prefix:n,name:u});else if(e.missing.has(u))r.missing.push({provider:s,prefix:n,name:u});else return o=!0,!0;return!1}),r.pending.length!==c&&(o||Pe([e],i.id),i.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),i.abort))})}))}let Mt=0;function Nt(e,t,o){const s=Mt++,n=Pe.bind(null,o,s);if(!t.pending.length)return n;const i={id:s,icons:t,callback:e,abort:n};return o.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(i)}),n}function Dt(e,t=!0,o=!1){const s=[];return e.forEach(n=>{const i=typeof n=="string"?N(n,t,o):n;i&&s.push(i)}),s}var Rt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _t(e,t,o,s){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let r;if(e.random){let g=e.resources.slice(0);for(r=[];g.length>1;){const x=Math.floor(Math.random()*g.length);r.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}r=r.concat(g)}else r=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",u=0,a,d=null,p=[],y=[];typeof s=="function"&&y.push(s);function h(){d&&(clearTimeout(d),d=null)}function m(){l==="pending"&&(l="aborted"),h(),p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function f(g,x){x&&(y=[]),typeof g=="function"&&y.push(g)}function w(){return{startTime:c,payload:t,status:l,queriesSent:u,queriesPending:p.length,subscribe:f,abort:m}}function I(){l="failed",y.forEach(g=>{g(void 0,a)})}function b(){p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function v(g,x,C){const O=x!=="success";switch(p=p.filter(S=>S!==g),l){case"pending":break;case"failed":if(O||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){a=C,I();return}if(O){a=C,p.length||(r.length?D():I());return}if(h(),b(),!e.random){const S=e.resources.indexOf(g.resource);S!==-1&&S!==e.index&&(e.index=S)}l="completed",y.forEach(S=>{S(C)})}function D(){if(l!=="pending")return;h();const g=r.shift();if(g===void 0){if(p.length){d=setTimeout(()=>{h(),l==="pending"&&(b(),I())},e.timeout);return}I();return}const x={status:"pending",resource:g,callback:(C,O)=>{v(x,C,O)}};p.push(x),u++,d=setTimeout(D,e.rotate),o(g,t,x.callback)}return setTimeout(D),w}function Ae(e){const t={...Rt,...e};let o=[];function s(){o=o.filter(c=>c().status==="pending")}function n(c,l,u){const a=_t(t,c,l,(d,p)=>{s(),u&&u(d,p)});return o.push(a),a}function i(c){return o.find(l=>c(l))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:s}}function ue(){}const _=Object.create(null);function Qt(e){if(!_[e]){const t=J(e);if(!t)return;const o=Ae(t),s={config:t,redundancy:o};_[e]=s}return _[e]}function qt(e,t,o){let s,n;if(typeof e=="string"){const i=U(e);if(!i)return o(void 0,424),ue;n=i.send;const r=Qt(e);r&&(s=r.redundancy)}else{const i=K(e);if(i){s=Ae(i);const r=e.resources?e.resources[0]:"",c=U(r);c&&(n=c.send)}}return!s||!n?(o(void 0,424),ue):s.query(t,n,o)().abort}function ae(){}function Vt(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,$t(e)}))}function Ht(e){const t=[],o=[];return e.forEach(s=>{(s.match(Ie)?t:o).push(s)}),{valid:t,invalid:o}}function P(e,t,o){function s(){const n=e.pendingIcons;t.forEach(i=>{n&&n.delete(i),e.icons[i]||e.missing.add(i)})}if(o&&typeof o=="object")try{if(!Te(e,o).length){s();return}}catch(n){console.error(n)}s(),Vt(e)}function fe(e,t){e instanceof Promise?e.then(o=>{t(o)}).catch(()=>{t(null)}):t(e)}function Ut(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:s}=e,n=e.iconsToLoad;if(delete e.iconsToLoad,!n||!n.length)return;const i=e.loadIcon;if(e.loadIcons&&(n.length>1||!i)){fe(e.loadIcons(n,s,o),a=>{P(e,n,a)});return}if(i){n.forEach(a=>{const d=i(a,s,o);fe(d,p=>{const y=p?{prefix:s,icons:{[a]:p}}:null;P(e,[a],y)})});return}const{valid:r,invalid:c}=Ht(n);if(c.length&&P(e,c,null),!r.length)return;const l=s.match(Ie)?U(o):null;if(!l){P(e,r,null);return}l.prepare(o,s,r).forEach(a=>{qt(o,a,d=>{P(e,a.icons,d)})})}))}const Bt=(e,t)=>{const o=Dt(e,!0,je()),s=Lt(o);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,ae)}),()=>{l=!1}}const n=Object.create(null),i=[];let r,c;return s.pending.forEach(l=>{const{provider:u,prefix:a}=l;if(a===c&&u===r)return;r=u,c=a,i.push(k(u,a));const d=n[u]||(n[u]=Object.create(null));d[a]||(d[a]=[])}),s.pending.forEach(l=>{const{provider:u,prefix:a,name:d}=l,p=k(u,a),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),n[u][a].push(d))}),i.forEach(l=>{const u=n[l.provider][l.prefix];u.length&&Ut(l,u)}),t?Nt(t,s,i):ae},Gt=e=>new Promise((t,o)=>{const s=typeof e=="string"?N(e,!0):e;if(!s){o(e);return}Bt([s||e],n=>{if(n.length&&s){const i=bt(s);if(i){t({...G,...i});return}}o(e)})});({...kt});const de={backgroundColor:"currentColor"},Kt={backgroundColor:"transparent"},pe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},he={webkitMask:de,mask:de,background:Kt};for(const e in he){const t=he[e];for(const o in pe)t[e+o]=pe[o]}const Q={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Q[e+"-flip"]=t,Q[e.slice(0,1)+"-flip"]=t,Q[e+"Flip"]=t});je(!0);Ct("",zt);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!It(s))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const s="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;Tt(o,n)||console.error(s)}catch{console.error(s)}}}}({...G});const Wt=me({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){let t,o;const s=ge(),n=Qe(),i=e,r=Ve("icons",()=>({})),c=Fe(!1),l=T(()=>{var h;return((((h=n.nuxtIcon)==null?void 0:h.aliases)||{})[i.name]||i.name).replace(/^i-/,"")}),u=T(()=>{var h;return(h=r.value)==null?void 0:h[l.value]}),a=T(()=>s.vueApp.component(l.value)),d=T(()=>{var m,f,w;if(!i.size&&typeof((m=n.nuxtIcon)==null?void 0:m.size)=="boolean"&&!((f=n.nuxtIcon)!=null&&f.size))return;const h=i.size||((w=n.nuxtIcon)==null?void 0:w.size)||"1em";return String(Number(h))===h?`${h}px`:h}),p=T(()=>{var h;return((h=n==null?void 0:n.nuxtIcon)==null?void 0:h.class)??"icon"});async function y(){var h;a.value||(h=r.value)!=null&&h[l.value]||(c.value=!0,r.value[l.value]=await Gt(l.value).catch(()=>{}),c.value=!1)}return ze(()=>l.value,y),!a.value&&([t,o]=Le(()=>y()),t=await t,o()),(h,m)=>c.value?(E(),Y("span",{key:0,class:F(p.value),style:ee({width:d.value,height:d.value})},null,6)):u.value?(E(),Z($e(pt),{key:1,icon:u.value,class:F(p.value),width:d.value,height:d.value},null,8,["icon","class","width","height"])):a.value?(E(),Z(Me(a.value),{key:2,class:F(p.value),width:d.value,height:d.value},null,8,["class","width","height"])):(E(),Y("span",{key:3,class:F(p.value),style:ee({fontSize:d.value,lineHeight:d.value,width:d.value,height:d.value})},[Ne(h.$slots,"default",{},()=>[De(Re(e.name),1)],!0)],6))}}),Yt=_e(Wt,[["__scopeId","data-v-9c34c54e"]]);export{Yt as default};
