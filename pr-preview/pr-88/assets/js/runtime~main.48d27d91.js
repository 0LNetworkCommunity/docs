(()=>{"use strict";var e,r,t,a,o,n={},c={};function f(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return n[e].call(t.exports,t,t.exports,f),t.exports}f.m=n,e=[],f.O=(r,t,a,o)=>{if(!t){var n=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],o=e[d][2];for(var c=!0,i=0;i<t.length;i++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](t[i])))?t.splice(i--,1):(c=!1,o<n&&(n=o));if(c){e.splice(d--,1);var b=a();void 0!==b&&(r=b)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,a,o]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var c=2&a&&e;"object"==typeof c&&!~r.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,f.d(o,n),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({4:"c141421f",22:"033b831b",85:"1f391b9e",234:"d523e098",351:"228858ef",368:"a94703ab",414:"393be207",460:"a847a89d",507:"5e013b89",513:"4c3fb466",518:"a7bd4aaa",629:"aba21aa0",661:"5e95c892",664:"3b32a354",817:"14eb3368",818:"1e4232ab",829:"4dcd4f21",859:"18c41134",918:"17896441",920:"1a4e3797",971:"c377a04b",980:"a7456010"}[e]||e)+"."+{4:"bedc2c07",22:"01bf5c4d",27:"fb69b5f5",85:"f68cc648",234:"38094883",351:"cff2a036",368:"1d08ae3b",414:"45d5108b",426:"9f23680a",460:"8d08c049",507:"eac0918f",513:"900c296c",518:"b9d97c95",629:"ca78289a",661:"8c86d957",664:"1b0d8204",772:"ffb3aa18",817:"019bdb36",818:"52996149",829:"4da514b6",859:"84ce75ba",894:"3b507165",918:"e5525d30",920:"0d2eac9d",945:"11fcc792",971:"45bf8f34",980:"2c3dad25"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="open-libra-core-docs:",f.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var c,i;if(void 0!==t)for(var b=document.getElementsByTagName("script"),d=0;d<b.length;d++){var u=b[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+t),c.src=e),a[e]=[r];var l=(r,t)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),i&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/pr-preview/pr-88/",f.gca=function(e){return e={17896441:"918",c141421f:"4","033b831b":"22","1f391b9e":"85",d523e098:"234","228858ef":"351",a94703ab:"368","393be207":"414",a847a89d:"460","5e013b89":"507","4c3fb466":"513",a7bd4aaa:"518",aba21aa0:"629","5e95c892":"661","3b32a354":"664","14eb3368":"817","1e4232ab":"818","4dcd4f21":"829","18c41134":"859","1a4e3797":"920",c377a04b:"971",a7456010:"980"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=f.p+f.u(r),c=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],c=t[1],i=t[2],b=0;if(n.some((r=>0!==e[r]))){for(a in c)f.o(c,a)&&(f.m[a]=c[a]);if(i)var d=i(f)}for(r&&r(t);b<n.length;b++)o=n[b],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(d)},t=self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();