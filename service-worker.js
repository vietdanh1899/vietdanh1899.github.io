if(!self.define){let n,i={};const l=(l,e)=>(l=new URL(l+".js",e).href,i[l]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=l,n.onload=i,document.head.appendChild(n)}else n=l,importScripts(l),i()})).then((()=>{let n=i[l];if(!n)throw new Error(`Module ${l} didn’t register its module`);return n})));self.define=(e,r)=>{const u=n||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let s={};const g=n=>l(n,u),o={module:{uri:u},exports:s,require:g};i[u]=Promise.all(e.map((n=>o[n]||g(n)))).then((n=>(r(...n),s)))}}define(["./workbox-4f586afe"],(function(n){"use strict";n.setCacheNameDetails({prefix:"frontend_xosoblockchain"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/css/app.873b5334.css",revision:null},{url:"/img/account.9d049eea.png",revision:null},{url:"/img/bscweb.d4f90fee.png",revision:null},{url:"/img/bscweb02.8bdfd595.png",revision:null},{url:"/img/bscweb03.9155f688.png",revision:null},{url:"/img/bscweb04.86e5cfc3.png",revision:null},{url:"/img/bscweb05.6732bd1f.png",revision:null},{url:"/img/bscweb1.616fc393.png",revision:null},{url:"/img/bscweb2.5029883a.png",revision:null},{url:"/img/bscweb4.75177c5b.png",revision:null},{url:"/img/bscweb5.e39403b6.png",revision:null},{url:"/img/bscweb6.c57cea9e.png",revision:null},{url:"/img/bscweb7.db3da6c7.png",revision:null},{url:"/img/bscweb8.6551801a.png",revision:null},{url:"/img/bscweb9.9d0d98dd.png",revision:null},{url:"/img/bt2.7614d900.png",revision:null},{url:"/img/bt3.d631eada.png",revision:null},{url:"/img/bt4.c5d2d053.png",revision:null},{url:"/img/bt5.5d58997c.png",revision:null},{url:"/img/bt6.ca2162a9.png",revision:null},{url:"/img/bt7.75ccf2e7.png",revision:null},{url:"/img/coin.b6940cc9.png",revision:null},{url:"/img/confirmphrase.dc228c8a.png",revision:null},{url:"/img/createpassword.7cf4ea5c.png",revision:null},{url:"/img/createwalletscreen.12e6b138.png",revision:null},{url:"/img/donewallet.238efda7.png",revision:null},{url:"/img/error-404.cdf91e6e.png",revision:null},{url:"/img/extension.2a28ea80.png",revision:null},{url:"/img/firework.fdec3406.gif",revision:null},{url:"/img/improvemetamask.570a1ef5.png",revision:null},{url:"/img/loading.797fdaaf.svg",revision:null},{url:"/img/metamask1.024e0738.png",revision:null},{url:"/img/mint.8923043b.png",revision:null},{url:"/img/mint1.6441dbc4.png",revision:null},{url:"/img/mint2.e34273de.png",revision:null},{url:"/img/mint3.3c59bcc7.png",revision:null},{url:"/img/mint4.b6e84f68.png",revision:null},{url:"/img/number1.7f7c2b9f.png",revision:null},{url:"/img/penguin-1.2cad27f5.png",revision:null},{url:"/img/penguin-2.33a5b5ad.webp",revision:null},{url:"/img/penguin.ebfa7b19.png",revision:null},{url:"/img/phrase.08cb862b.png",revision:null},{url:"/img/ticket.0051f69e.png",revision:null},{url:"/img/vt1.d084d02c.png",revision:null},{url:"/img/vt2.f565c163.png",revision:null},{url:"/img/vt3.61bea275.png",revision:null},{url:"/img/vt4.3a747872.png",revision:null},{url:"/img/wallet1.c60a33b8.png",revision:null},{url:"/img/winter.195532f2.png",revision:null},{url:"/index.html",revision:"e5f2832cd95fbb8da459abac9a4cd80a"},{url:"/js/app.bbd43738.js",revision:null},{url:"/manifest.json",revision:"38bcca1622bffe437f638569869c3951"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
