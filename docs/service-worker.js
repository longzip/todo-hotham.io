if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,l)=>{const c=n||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let r={};const o=n=>i(n,c),a={module:{uri:c},exports:r,require:o};e[c]=Promise.all(s.map((n=>a[n]||o(n)))).then((n=>(l(...n),r)))}}define(["./workbox-a91ef639"],(function(n){"use strict";n.setCacheNameDetails({prefix:"todolist"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"CNAME",revision:"0e219fadb83de280d8280b5f5177e63e"},{url:"css/300.5ae00156.css",revision:null},{url:"css/432.5ae00156.css",revision:null},{url:"css/535.5ae00156.css",revision:null},{url:"css/569.5ae00156.css",revision:null},{url:"css/804.5ae00156.css",revision:null},{url:"css/829.5ae00156.css",revision:null},{url:"css/970.5ae00156.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.c7997c93.css",revision:null},{url:"evn.js",revision:"75522f8fa07f2ddb3d56b6f60577509d"},{url:"evn2.js",revision:"b6c4fb36f7bd53f223fee6880839326b"},{url:"evn3.js",revision:"b6c4fb36f7bd53f223fee6880839326b"},{url:"favicon.ico",revision:"edeae2f6e791ac848d6654a0387286bb"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"hgd.js",revision:"931d178994bb77b071867348e31070f3"},{url:"icons/apple-icon-120x120.png",revision:"90fb6ad20133f212fce94f16088ab1c7"},{url:"icons/apple-icon-152x152.png",revision:"2295ab4edbea0417db93ed1449462937"},{url:"icons/apple-icon-167x167.png",revision:"fd050c5b7a502c50ce959d6a0465e48b"},{url:"icons/apple-icon-180x180.png",revision:"94cdc0bab50152792ef0fc13a8cb9f52"},{url:"icons/apple-launch-1080x2340.png",revision:"96beb7bf8c5fa42e61f6a9dc1453fcd6"},{url:"icons/apple-launch-1125x2436.png",revision:"a93ef9498caaf29184b2233e8e303d97"},{url:"icons/apple-launch-1170x2532.png",revision:"3f45560a579fa2190ea727649e15b99b"},{url:"icons/apple-launch-1179x2556.png",revision:"212a1925ad04ae7b76be23948aa323de"},{url:"icons/apple-launch-1242x2208.png",revision:"4140a34b6d96c1b54d160d4ebc2bc9d6"},{url:"icons/apple-launch-1242x2688.png",revision:"2bbc6d127945171bd73ed993e8bf7a18"},{url:"icons/apple-launch-1284x2778.png",revision:"047c56650ddaaea1a7e4370e2b133a26"},{url:"icons/apple-launch-1290x2796.png",revision:"bf3a5d8bd6044815fc8c3dc0a591b4ba"},{url:"icons/apple-launch-1536x2048.png",revision:"3415840456cd54847859908ef240e6da"},{url:"icons/apple-launch-1620x2160.png",revision:"39d14a98cc7d90c73bc7c090339df435"},{url:"icons/apple-launch-1668x2224.png",revision:"6223b547370b296857e1a6949bd1656f"},{url:"icons/apple-launch-1668x2388.png",revision:"d7c28adb412a5552e26a65349428ae20"},{url:"icons/apple-launch-2048x2732.png",revision:"7fc261043bd724b8ae52d7ddc3cf9282"},{url:"icons/apple-launch-750x1334.png",revision:"973eabef01d9de62a5a69dae499aa246"},{url:"icons/apple-launch-828x1792.png",revision:"d609b84e9e60b09ef25a31bb7307ad87"},{url:"icons/favicon-128x128.png",revision:"5b2b7a56130ef7dcff8b3bd8b774fbb1"},{url:"icons/favicon-16x16.png",revision:"c66c09ca43f63b0e76d531a904e352f9"},{url:"icons/favicon-32x32.png",revision:"a2c47fdf2d86b0563c1acd300b6f5e68"},{url:"icons/favicon-96x96.png",revision:"251802fc28cb6a106965d0dd8d04b7f9"},{url:"icons/icon-128x128.png",revision:"5b2b7a56130ef7dcff8b3bd8b774fbb1"},{url:"icons/icon-192x192.png",revision:"599e0645744ec1e7ca346529a4fc17ae"},{url:"icons/icon-256x256.png",revision:"c1ad93b93956d585f79948951bddb95d"},{url:"icons/icon-384x384.png",revision:"c453df34e47208b5103487e2e121fb06"},{url:"icons/icon-512x512.png",revision:"0cc05619990a8e0cae95d200d37897b4"},{url:"icons/ms-icon-144x144.png",revision:"54ff21d750bca9cd0d7aff29fc3fd199"},{url:"icons/safari-pinned-tab.svg",revision:"e4cd48e66da22e1151f1b58f8a617b93"},{url:"index.html",revision:"765e6ffafdcd287c5af3e9a1c87d7134"},{url:"js/271.24897ac1.js",revision:null},{url:"js/300.75b48fb1.js",revision:null},{url:"js/432.1b08871e.js",revision:null},{url:"js/504.7bcaaad0.js",revision:null},{url:"js/535.ea8440cd.js",revision:null},{url:"js/56.605bdb9b.js",revision:null},{url:"js/569.6925cce0.js",revision:null},{url:"js/752.38ee2476.js",revision:null},{url:"js/804.965dfa92.js",revision:null},{url:"js/829.042a5e55.js",revision:null},{url:"js/970.82f02d6f.js",revision:null},{url:"js/995.18c9b341.js",revision:null},{url:"js/998.c7368e60.js",revision:null},{url:"js/app.6e9bc666.js",revision:null},{url:"js/chunk-common.3e1977b8.js",revision:null},{url:"js/vendor.a7376c16.js",revision:null},{url:"manifest.json",revision:"32644cfeade08843dd389ebccf95e6d8"},{url:"print.css",revision:"20c8532f778392c84c5ac4a59ba9ef96"},{url:"printv2.css",revision:"20c8532f778392c84c5ac4a59ba9ef96"},{url:"robots.txt",revision:"6978a616c585d03cb5b542a891995efb"},{url:"ssm.js",revision:"fa662a801e5253b3d62ea58b7639adcb"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
