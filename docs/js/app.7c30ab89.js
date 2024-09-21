(()=>{var e={8054:(e,t,a)=>{"use strict";var s=a(9104),n=a(6501),o=a(8734),i=a(1758);function r(e,t,a,s,n,o){const r=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(r)}var h=a(6980);const c=(0,i.pM)({name:"App",methods:{...(0,h.i0)("auth",["firebaseUpdateUser","handleAuthStateChanged"])},computed:{...(0,h.L8)("auth",["isLogin","userDetails"])},async mounted(){await this.handleAuthStateChanged()}});var u=a(2807);const m=(0,u.A)(c,[["render",r]]),l=m;var d=a(9289),p=a(1573),g=a(2433),y=a(455);const T=[{path:"/",component:()=>Promise.all([a.e(121),a.e(70)]).then(a.bind(a,9070)),children:[{path:"",component:()=>Promise.all([a.e(121),a.e(996),a.e(532)]).then(a.bind(a,9532)),meta:{requireAuth:!0}},{path:"khl2",component:()=>Promise.all([a.e(121),a.e(996),a.e(300)]).then(a.bind(a,1488)),meta:{requireAuth:!0}},{path:"items",component:()=>Promise.all([a.e(121),a.e(996),a.e(804)]).then(a.bind(a,2336)),meta:{requireAuth:!0}},{path:"evn2",component:()=>Promise.all([a.e(121),a.e(996),a.e(432)]).then(a.bind(a,3036)),meta:{requireAuth:!1}},{path:"/settings",component:()=>Promise.all([a.e(121),a.e(504)]).then(a.bind(a,2504)),meta:{requireAuth:!0}},{path:"/ho-gia-dinh/:id",component:()=>Promise.all([a.e(121),a.e(996),a.e(970)]).then(a.bind(a,846)),meta:{requireAuth:!0}},{path:"/ho-so-chua-xu-ly",component:()=>Promise.all([a.e(121),a.e(996),a.e(829)]).then(a.bind(a,9299)),meta:{requireAuth:!0}},{path:"/ho-so-da-xu-ly",component:()=>Promise.all([a.e(121),a.e(996),a.e(56)]).then(a.bind(a,2056)),meta:{requireAuth:!0}},{path:"/ho-so-da-nop",component:()=>Promise.all([a.e(121),a.e(996),a.e(569)]).then(a.bind(a,8231)),meta:{requireAuth:!0}}]},{path:"/dang-nhap-ssm",name:"auth",component:()=>Promise.all([a.e(121),a.e(752)]).then(a.bind(a,5752)),meta:{requireAuth:!1}},{path:"/dang-ky-142010",name:"dka",component:()=>Promise.all([a.e(121),a.e(998)]).then(a.bind(a,3998)),meta:{requireAuth:!1}},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(121),a.e(271)]).then(a.bind(a,3271))}],f=T,B=(0,p.wE)((function({store:e}){const t=y.Bt,a=(0,y.aE)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:t("")});return a.beforeEach((async(e,t,a)=>{e.matched.some((e=>e.meta.requireAuth))&&!await(0,g.HW)()?a({path:"/dang-nhap-ssm",query:{next:e.fullPath}}):a()})),a}));async function b(e,t){const s=e(l);s.use(n.A,t);const i="function"===typeof d.A?await(0,d.A)({}):d.A,{storeKey:r}=await Promise.resolve().then(a.bind(a,9289)),h=(0,o.IG)("function"===typeof B?await B({store:i}):B);return i.$router=h,{app:s,store:i,storeKey:r,router:h}}var v=a(1304),j=a(7329),w=a(1627);const H={config:{},lang:v.A,plugins:{Dialog:j.A,Notify:w.A}};var S=a(9012);(0,S.k)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const L="";async function D({app:e,router:t,store:a,storeKey:s},n){let o=!1;const i=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},r=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},h=window.location.href.replace(window.location.origin,"");for(let u=0;!1===o&&u<n.length;u++)try{await n[u]({app:e,router:t,store:a,ssrContext:null,redirect:r,urlPath:h,publicPath:L})}catch(c){return c&&c.url?void r(c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(e.use(t),e.use(a,s),e.mount("#q-app"))}b(s.Ef,H).then((e=>{const[t,s]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(a.bind(a,660))]).then((t=>{const a=s(t).filter((e=>"function"===typeof e));D(e,a)}))}))},660:(e,t,a)=>{"use strict";a.r(t),a.d(t,{api:()=>h,apiKHL:()=>i,apiServices:()=>c,apiStore:()=>r,default:()=>u});var s=a(1573),n=a(6306),o=a.n(n);const i=o().create({baseURL:"https://api-portalkhl.vnpost.vn"}),r=o().create({baseURL:"https://store.hotham.vn/wordpress"}),h=o().create({baseURL:"https://app.hotham.vn",headers:{Authorization:"Bearer 2|N04KZuJ0sVeHX3puFzxXW9yEOWWvffrQh7El9e95"}}),c=o().create({baseURL:"https://ssm-api.vnpost.vn",headers:{Authorization:`Bearer ${localStorage.getItem("setIsLogin")}`}}),u=(0,s.zj)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=h}))},2433:(e,t,a)=>{"use strict";a.d(t,{HW:()=>u,e7:()=>h,mH:()=>c});var s=a(322),n=a(5106),o=a(5874),i={apiKey:"AIzaSyDraj3RaCTiGTK_Alsbslb-kbelw9Iyhgw",authDomain:"gvc-task.firebaseapp.com",projectId:"gvc-task",storageBucket:"gvc-task.appspot.com",messagingSenderId:"194642192267",appId:"1:194642192267:web:66bedc6e262d9fce83318e"};let r=(0,s.Wp)(i),h=(0,n.xI)(r),c=(0,o.C3)(r),u=()=>new Promise(((e,t)=>{const a=h.onAuthStateChanged((t=>{a(),e(t)}),t)}))},9289:(e,t,a)=>{"use strict";a.d(t,{A:()=>kt});var s={};a.r(s),a.d(s,{bhyts:()=>g,filteredBhyts:()=>T,getCurrentBhyt:()=>y,soDienThoais:()=>B,timBhyts:()=>f,tongMucDongBHXH:()=>S,tongSoBHXH:()=>L,tongSoThe:()=>D,tongTien:()=>b,tongTienBHXH:()=>H,tongTienBHXHDaThu:()=>j,tongTienBHYT:()=>w,tongTienBHYTDaThu:()=>v});var n={};a.r(n),a.d(n,{SET_CURRENT_BHYT:()=>N,SET_SEARCH_TEXT:()=>C,SET_SELECTED_USER:()=>k,capNhatThongTinBhyt:()=>K,getAllBhyts:()=>E,removeBhyt:()=>O,setBhyts:()=>A,setIsRemove:()=>$,setMaXa:()=>X,setSearchText:()=>x,setSelectedUser:()=>I,updateBhyt:()=>U});var o={};a.r(o),a.d(o,{XuatD03OrD05Excel:()=>re,batTatRemove:()=>V,capNhatBHXHTN:()=>Z,capNhatBienLai:()=>De,capNhatMaXa:()=>W,copyHoTenToClipboard:()=>Ke,daXyLy:()=>Ne,dongBoDuLieu:()=>Te,findBhyts:()=>xe,getAllBhyts:()=>Ce,getAllBhyts2:()=>ke,getBaoCaoChiTietGiaoDich:()=>ae,getBhytSsm:()=>Ie,getBhyts:()=>ie,getBhytsBySoBienLai:()=>oe,getDanhSachKhachHangTaiTuc:()=>te,getTraCuuThongTinBHXHTN:()=>Q,giaHan:()=>Be,hoSoChuaXuLy:()=>ue,hoSoDaXuLy:()=>me,huyThuBHXHTN:()=>Ue,huyThuBHYT:()=>Oe,huyThuTien:()=>Se,khachChuaNop:()=>he,lamMoiDanhSach:()=>$e,loaiBo:()=>Xe,luuBhyt:()=>de,maTraCuu:()=>pe,resetBhyt:()=>ne,saveBHXHTN:()=>ee,searchBhyts:()=>Y,selectUser:()=>F,setCurrentBhyt:()=>q,taiTuc:()=>fe,theoDoi:()=>Ee,thuTien:()=>Le,traCuuBHXH:()=>Pe,traCuuBhyts:()=>se,traCuuMaSoBHXH:()=>Ge,traCuuNoGroup:()=>ce,traCuuTheoTen:()=>ye,updateBhyt:()=>Ae,updateDenNgayBHXH:()=>He,updateDenNgayBHYTBT:()=>we,updateGhiChu:()=>ve,updateMaXacNhan:()=>je,updateTongTien:()=>be,xem:()=>ge,xoaHoGd:()=>le,xoaThanhVienHGD:()=>J});var i={};a.r(i),a.d(i,{findUser:()=>_e,isLogin:()=>qe,maXa:()=>Ve,mangLuoiId:()=>Fe,userDetails:()=>Ye,userName:()=>We,userOptions:()=>Je,users:()=>Me});var r={};a.r(r),a.d(r,{addMessage:()=>tt,addUser:()=>Ze,clearMessages:()=>at,setIsLogin:()=>st,setUserDetails:()=>Qe,updateUser:()=>et});var h={};a.r(h),a.d(h,{firebaseGetMessages:()=>ft,firebaseGetUsers:()=>Tt,firebaseSendMessage:()=>bt,firebaseStopGettingMessages:()=>Bt,firebaseUpdateUser:()=>gt,firebaseUpdateUserAll:()=>yt,getCurrentLoginInformations:()=>dt,handleAuthStateChanged:()=>pt,loginUser:()=>mt,logoutUser:()=>lt,registerUser:()=>ut});var c={};a.r(c),a.d(c,{itemBy:()=>Ht,items:()=>wt});var u={};a.r(u),a.d(u,{setItems:()=>St,setTokenFe:()=>Lt});var m={};a.r(m),a.d(m,{getItems:()=>Nt,loginUser:()=>Dt});var l=a(1573),d=a(6980);function p(){return{bhyts:[],isRemove:!1,maXa:"",searchText:"",selectedUser:null,currentBhyt:null}}function g(e){return e.bhyts}function y(e){return e.currentBhyt}const T=({searchText:e,selectedUser:t,bhyts:a})=>{let s=a;const n=e.toLowerCase().trim();return n&&(s=s.filter((e=>`${e.hoTen} ${e.ngaySinhDt}`.toLowerCase()?.includes(n)||e.maSoBhxh?.includes(n)||e.soCmnd?.includes(n)||e.soTheBhyt?.includes(n)||e.soDienThoai?.includes(n)||e.soDienThoai2?.includes(n)||e.ghiChu?.includes(n)||e.userName?.includes(n)))),t&&(s=s.filter((e=>e.userName==t))),s},f=e=>t=>t?[...e.bhyts.filter((e=>(e.hoTen+e.hoVaTen+e.maSoBhxh+e.maHoGd+e.soDienThoai+e.maKCB+e.soBienLai+"-"+e.denNgayDt).toLowerCase().includes(t.toLowerCase())))]:e.bhyts,B=e=>e.bhyts.map((e=>e.soDienThoai)),b=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.tongTien||e.soTienThu||0)).reduce(((e,t)=>e+parseInt(t)),0),v=e=>0===e.bhyts.length?0:e.bhyts.filter((e=>1==e.isBHYT)).map((e=>e.tongTien)).reduce(((e,t)=>e+parseInt(t)),0),j=e=>0===e.bhyts.length?0:e.bhyts.filter((e=>1==e.isBHXHTN)).map((e=>e.tienNop)).reduce(((e,t)=>e+parseInt(t)),0),w=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.tongTien||0)).reduce(((e,t)=>e+parseInt(t)),0),H=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.tienNop||0)).reduce(((e,t)=>e+parseInt(t)),0),S=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.mucDong||0)).reduce(((e,t)=>e+parseInt(t)),0),L=e=>0===e.bhyts.length?0:e.bhyts.filter((e=>e.mucDong)).reduce(((e,t)=>e+1),0),D=e=>e.bhyts.length;function N(e,t){e.currentBhyt=t}function C(e,t){e.searchText=t}function k(e,t){e.selectedUser=t}const x=(e,t)=>{e.searchText=t},I=(e,t)=>{e.selectedUser=t},A=(e,t)=>{e.bhyts=t},$=(e,t)=>{e.isRemove=!e.isRemove},X=(e,t)=>{e.maXa=t},E=(e,t)=>{e.bhyts=t},O=(e,t)=>{const a=e.bhyts.findIndex((e=>e.maSoBhxh===t));e.bhyts.splice(a,1)},U=(e,t)=>{if(e.isRemove){const a=e.bhyts.findIndex((e=>e.maSoBhxh===t.maSoBhxh||e.maSoBHXH===t.maSoBhxh));return-1!==a&&e.bhyts.splice(a,1),null}let a=e.bhyts.find((e=>e.maSoBhxh===t.maSoBhxh||e.maSoBHXH===t.maSoBhxh));a?Object.assign(a,t):e.bhyts.unshift(t)},K=(e,t)=>{let a=e.bhyts.find((e=>e.maSoBhxh===t.maSoBhxh||e.maSoBHXH===t.maSoBhxh));a?Object.assign(a,t):e.bhyts.unshift(t)};a(4748);var P=a(660),G=a(1627);const R={import:async(e,t)=>{let a={};if(navigator.onLine)try{a=await P.apiServices.post(e,t),a?G.A.create({type:"positive",message:"Bạn đã lưu thành công!"}):G.A.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(s){s.toString().includes("Network",0)&&G.A.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}else G.A.create({message:"Không có kết nối Internet !",color:"red"});return a},post:async(e,t)=>{let a={};if(navigator.onLine){let n={...t};delete n.createdAt,delete n.updatedAt,Object.keys(n).forEach((e=>(null===n[e]||void 0===n[e])&&delete n[e]));try{a=await P.apiServices.post(e,n),a?G.A.create({type:"positive",message:"Bạn đã lưu thành công!"}):G.A.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(s){s.toString().includes("Network",0)&&G.A.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}}else G.A.create({message:"Không có kết nối Internet !",color:"red"});return a},delete:async e=>{let t={};if(navigator.onLine)try{t=await P.apiServices.delete(e),t?G.A.create({type:"positive",message:"Bạn đã lưu thành công!"}):G.A.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(a){a.toString().includes("Network",0)&&G.A.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}else G.A.create({message:"Không có kết nối Internet !",color:"red"});return t},put:async(e,t)=>{let a={};if(navigator.onLine){let n={...t};delete n.createdAt,delete n.updatedAt,Object.keys(n).forEach((e=>(null===n[e]||void 0===n[e])&&delete n[e]));try{a=await P.apiServices.put(e,n),a?G.A.create({type:"positive",message:"Bạn đã lưu thành công!"}):G.A.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(s){s.toString().includes("Network",0)&&G.A.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}}else G.A.create({message:"Không có kết nối Internet !",color:"red"});return a},get:async e=>{let t={};if(navigator.onLine)try{t=await P.apiServices.get(e)}catch(a){a.toString().includes("Network",0)&&G.A.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}else G.A.create({message:"Không có kết nối Internet !",color:"red"});return t}};var z=a(5038),M=a.n(z);const _=()=>new Promise((e=>setTimeout(e,500)));function q({commit:e},t){e("SET_CURRENT_BHYT",t)}function Y({commit:e,state:t},a){e("SET_SEARCH_TEXT",a)}function F({commit:e},t){e("SET_SELECTED_USER",t)}const V=({commit:e},t)=>{e("setIsRemove",t)},W=({commit:e},t)=>{e("setMaXa",t)},J=({commit:e},t)=>{e("removeBhyt",t)},Q=async({dispatch:e},t)=>{try{const{data:a}=await P.apiServices.get(`/api/services/app/TraCuu/TraCuuThongTinBHXHTN?maSoBhxh=${t}`);return await e("saveBHXHTN",a.result.value.thongTinTns[0]),a.result.value.thongTinTns[0]}catch(a){G.A.create({type:"negative",message:"Đã xảy ra lỗi!"})}return{}},Z=async({dispatch:e,state:t},a)=>{let s=a.split(",");if(a||(s=t.bhyts.map((e=>e.maSoBhxh))),s.length>0)for(let n=0;n<s.length;n++)await _(),await e("getTraCuuThongTinBHXHTN",s[n])},ee=async({commit:e,rootGetters:t},{maSoBhxh:a,mucDong:s,maPhuongThucDong:n,thangBd:o,tienNop:i})=>{const r={1:1,3:3,6:4,12:7},{data:h}=await P.api.put(`/api/bhyts/${a}/tong-tien`,{isBHXHTN:0,denThangDt:M()(o).add(r[n]?r[n]-1:0,"months").endOf("month").format().slice(0,10),mucDong:s,maPhuongThucDong:n,tienNop:i,maXa:t["auth/maXa"]});await e("updateBhyt",h)},te=async({commit:e},t)=>{try{const{data:e}=await P.apiServices.post("/api/services/app/BaoCaoTongHopGDThu/DanhSachKhachHangTaiTuc",t);return e.result.items}catch(a){return G.A.create({type:"negative",message:"Đã xảy ra lỗi!"}),[]}},ae=async({commit:e},{tuThang:t="2023-01-01 00:00:00",denThang:a="2024-01-01 00:00:00",mangLuoiId:s=4580})=>{e("setBhyts",[]);try{const{data:n}=await P.apiServices.post("/api/services/app/BaoCaoTongHopGDThu/BaoCaoChiTietGiaoDich",{filterItems:[],maxResultCount:5e3,skipCount:0,mangLuoiId:s,tuThang:t,denThang:a,loaiGiaoDich:0});e("setBhyts",n.result.items)}catch(n){G.A.create({type:"negative",message:"Đã xảy ra lỗi!"})}},se=async({commit:e},t)=>{const{searchText:a,maXa:s}=t;if(!a)return;const n=a.split(",");if(1!==n.length);else{const t=a.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");let n=`/api/bhyts?name=${t}&maXa=${s}`;const{data:o}=await P.api.get(n);e("setBhyts",o)}},ne=async({commit:e},t)=>{e("setBhyts",t)},oe=async({commit:e},t)=>{const{data:a}=await P.api.get(`/api/bhyts?soBienLai=${t}`);a.forEach((t=>{e("updateBhyt",t)}));try{await dispatch("dongBoDuLieu",a.map((e=>e.maSoBhxh)).join())}catch(s){}},ie=async({commit:e},t)=>{const{completed:a,disabled:s,name:n,thang:o,maHoGd:i,chuaDongBo:r,taiTuc:h,hetHan:c,maXa:u,nam:m,userName:l,isBHXHTN:d,isBHYT:p,tienNop:g,taiTucBHXH:y,soBienLai:T,taiTucBHYTBT:f,isCMND:B,thangBienLai:b,thangBienLaiTN:v,isPhone:j}=t;let w="/api/bhyts?";o&&(w+=`thang=${o}`),u&&(w+=`&maXa=${u}`),h&&(w+=`&taiTuc=${h}`),c&&(w+=`&hetHan=${c}`),n&&(w+=`&name=${n}`),m&&(w+=`&nam=${m}`),l&&(w+=`&userName=${l}`),a&&(w+=`&completed=${a}`),s&&(w+=`&disabled=${s}`),i&&(w+=`&maHoGd=${i}`),r&&(w+=`&chuaDongBo=${r}`),d&&(w+=`&isBHXHTN=${d}`),p&&(w+=`&isBHYT=${p}`),B&&(w+=`&isCMND=${B}`),g&&(w+=`&tienNop=${g}`),y&&(w+=`&taiTucBHXH=${y}`),T&&(w+=`&soBienLai=${T}`),f&&(w+=`&taiTucBHYTBT=${f}`),b&&(w+=`&thangBienLai=${b}`),v&&(w+=`&thangBienLaiTN=${v}`),j&&(w+=`&isPhone=${j}`);const{data:H}=await P.api.get(w);e("setBhyts",H)},re=async({commit:e},t)=>{const{data:a}=await R.post("/api/services/app/KeKhai/XuatD03OrD05Excel",{daiLyIds:[52401],transactionIds:t});return a.result},he=async({commit:e},t)=>{const{data:a}=await R.post("/api/services/app/BaoCaoTongHopGDThu/DanhSachKhachHangTaiTuc",{denThang:M()().startOf("months").add(1,"months").format(),filterItems:[],loaiDichVu:1,mangLuoiId:4580,maxResultCount:5e3,skipCount:0,tuThang:M()().startOf("months").format(),type:-1});e("getAllBhyts",[...a.result.items.reverse()])},ce=async({commit:e,rootGetters:t},{mangLuoiId:a,keyMenu:s="5"})=>{const{data:n}=await R.post("/api/services/app/KeKhai/TraCuuNoGroup",{dateForm:"ngayLap",denNgay:M()().format(),filterItems:[],hoSoChuaThuTien:!1,hoSoQuaHan:0,keyMenu:s,mangLuoiId:a||t["auth/mangLuoiId"],maxResultCount:5e3,skipCount:0,tuNgay:M()().startOf("month").format()});e("getAllBhyts",[...n.result.items])},ue=async({commit:e},{mangLuoiId:t=4580})=>{const a=new Date;a.setDate(a.getDate()+2);const s=new Date;s.setDate(a.getDate()-32);const{data:n}=await R.post("/api/services/app/KeKhai/TraCuuNoGroup",{dateForm:"ngayLap",denNgay:a,filterItems:[],hoSoChuaThuTien:!1,hoSoQuaHan:0,keyMenu:"2",mangLuoiId:t,maxResultCount:5e3,skipCount:0,tuNgay:s});e("getAllBhyts",[...n.result.items])},me=async({commit:e},t)=>{let{thangTruoc:a=0,tuNgay:s,denNgay:n,mangLuoiId:o=4580}=t;n||(n=M()().startOf("months").add(1-a,"months").format()),s||(s=M()().startOf("months").subtract(a,"months").format());const{data:i}=await R.post("/api/services/app/KeKhai/TraCuuNoGroup",{dateForm:"ngayLap",denNgay:n,filterItems:[],hoSoChuaThuTien:!1,hoSoQuaHan:0,keyMenu:"1",mangLuoiId:o,maxResultCount:5e3,skipCount:0,tuNgay:s});e("getAllBhyts",[...i.result.items])},le=async({commit:e},t)=>{await R.get(`/api/xoaHoGd?maHoGd=${t}`)},de=async e=>{try{const{data:t}=await P.api.post("/api/bhyts",e);return t}catch(t){return{}}},pe=async({},e)=>{let{data:{result:t,success:a}}=await R.get(`/api/services/app/KeKhai/GetDSBienLai?bienlaiId=${e}`);return a?t[0]:null},ge=async({commit:e,rootGetters:t},a)=>{const{maSoBhxh:s}=a;let{data:{result:n}}=await R.get(`/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${s.slice(s.length-10)}`);const{thongTinTK1:o,thongTinTheHGD:i,trangThaiThe:r}=n;if(o)try{const s=await de({...a,...i,...o,...r,maXa:t["auth/maXa"]});return await e("updateBhyt",{...r,...s}),{...r,...s}}catch(h){await e("updateBhyt",{...a,...i,...o,...r})}return{...a,...i,...o,...r}},ye=async({commit:e,dispatch:t},{name:a,maXa:s,maHuyen:n,maTinh:o})=>{const i=a.split(","),r=JSON.parse(localStorage.getItem("hoTens"))||[];for(let c=0;c<i.length;c++){let{data:a}=await R.get(`/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=${o}&maHuyen=${n}&maXa=${s}&hoTen=${i[c]}&isCoDau=true&`);if(a.result.value.length){if(a.result.value.forEach((t=>{e("updateBhyt",t)})),!r.includes(i[c])){try{await t("dongBoDuLieu",a.result.value.map((e=>e.maSoBhxh)).join())}catch(h){}r.push(i[c]),localStorage.setItem("hoTens",JSON.stringify(r))}}else t("traCuuBhyts",{searchText:i[c],maXa:s})}},Te=async({dispatch:e},t)=>{const a=t.split(",").reverse();for(let n=0;n<a.length;n++){await _();const t=a[n];try{await e("xem",{maSoBhxh:t})}catch(s){console.log(s)}}},fe=async({commit:e},t)=>{const a=t.split(",");for(let n=0;n<a.length;n++){const e=a[n];try{await dispatch("xem",{maSoBhxh:e})}catch(s){console.log(s)}}},Be=async({commit:e},t)=>{for(let s=0;s<t.length;s++){await _();const{maSoBhxh:n,tongTien:o,maThuTuc:i,soBienLai:r,userId:h}=t[s];try{const{data:t}=await P.api.put(`/api/bhyts/${n}/tong-tien`,{tongTien:o,maThuTuc:i,soBienLai:r,userName:h,disabled:!0,completed:!0});await e("updateBhyt",t)}catch(a){console.log(a)}}},be=async({commit:e},{maSoBhxh:t,capNhatBHYT:a})=>{try{const{data:s}=await P.api.put(`/api/bhyts/${t}/tong-tien`,a);await e("updateBhyt",s)}catch(s){console.log(s)}},ve=async({commit:e},{maSoBhxh:t,ghiChu:a})=>{try{const{data:s}=await P.api.put(`/api/bhyts/${t}/tong-tien`,{ghiChu:a});await e("updateBhyt",s)}catch(s){console.log(s)}},je=async({commit:e},{maSoBhxh:t,maXacNhan:a,maXacNhanTN:s,ngayLap:n,ngayLapTN:o,soBienLai:i,soBienLaiTN:r})=>{try{const{data:h}=await P.api.put(`/api/bhyts/${t}/tong-tien`,{maXacNhan:a,maXacNhanTN:s,ngayLap:n,ngayLapTN:o,soBienLai:i,soBienLaiTN:r});return await e("updateBhyt",h),h}catch(h){return console.log(h),{}}},we=async({commit:e},{maSoBhxh:t,denNgayBHYTBT:a})=>{try{const{data:s}=await P.api.put(`/api/bhyts/${t}/tong-tien`,{denNgayBHYTBT:a});await e("updateBhyt",s)}catch(s){console.log(s)}},He=async({commit:e},{maSoBhxh:t,denThangDt:a,maPhuongThucDong:s,mucDong:n})=>{try{const{data:o}=await P.api.put(`/api/bhyts/${t}/tong-tien`,{denThangDt:a,maPhuongThucDong:s,mucDong:n});await e("updateBhyt",o)}catch(o){console.log(o)}},Se=async({commit:e,dispatch:t},{maSoBhxh:a,bienLaiId:s})=>{try{const{ngayBienLai:n}=s?await t("maTraCuu",s):{},{data:o}=await P.api.put(`/api/bhyts/${a}/tong-tien`,{userName:null,completed:0,tongTien:0,ngayLap:n?.split("/").reverse().join("-"),isBHYT:0});await e("updateBhyt",o)}catch(n){console.log(n)}},Le=async({commit:e},{maSoBhxh:t,tongTien:a,userName:s,tienNop:n,maXa:o})=>{try{if(n){const{data:a}=await P.api.put(`/api/bhyts/${t}/tong-tien`,{tienNop:n.replace(/\D/g,""),ngayLapTN:(new Date).toISOString().slice(0,10),userName:s,completed:1,isBHXHTN:1,maXa:o});await e("updateBhyt",a)}else{const{data:n}=await P.api.put(`/api/bhyts/${t}/tong-tien`,{tongTien:a.replace(/\D/g,""),ngayLap:(new Date).toISOString().slice(0,10),userName:s,completed:1,isBHYT:1});await e("updateBhyt",n)}}catch(i){console.log(i)}},De=async({commit:e},t)=>{for(let s=0;s<t.length;s++){await _();const{maSoBHXH:n,ngayBienLai:o,soBienLai:i,soTienThu:r}=t[s];try{const{data:t}=await P.api.put(`/api/bhyts/${n}/tong-tien`,{ngayLap:o,soBienLai:i,tongTien:r});await e("updateBhyt",t)}catch(a){console.log(a)}}},Ne=async({commit:e,dispatch:t,rootGetters:a},s)=>{const n=(new Date).getFullYear(),o=`${n}-${(new Date).getMonth()}`;for(let r=0;r<s.length;r++){const{maSoBhxh:h,tongTien:c,userId:u,trangThaiHoSo:m,maThuTuc:l,soBienLai:d,bienLaiId:p}=s[r];if(5!=m)if(0===l)try{const{ngayBienLai:s}=await t("maTraCuu",p),{data:n}=await P.api.put(`/api/bhyts/${h}/tong-tien`,{tienNop:c,userName:u,isBHXHTN:0,soBienLaiTN:d,bienLaiIdTN:p,completed:a["auth/userName"]==u&&9!==m,maThuTuc:l,ngayLapTN:s?.split("/").reverse().join("-"),maXa:a["auth/maXa"]});await e("updateBhyt",n),9===m&&n.denThangDt&&n.denThangDt.slice!==o&&await t("getTraCuuThongTinBHXHTN",h),n.hoTen||await t("xem",{maSoBhxh:h})}catch(i){console.log(i)}else try{const{ngayBienLai:s}=await t("maTraCuu",p),{data:o}=await P.api.put(`/api/bhyts/${h}/tong-tien`,{tongTien:c,isBHYT:0,userName:u,soBienLai:d,bienLaiId:p,completed:a["auth/userName"]==u&&9!==m,maThuTuc:l,ngayLap:s?.split("/").reverse().join("-")});await e("updateBhyt",o),(!o.hoTen||!o.denNgayDt||9===m&&parseInt(o.denNgayDt.slice(0,4))<=n)&&await t("xem",{maSoBhxh:h})}catch(i){console.log(i)}await _()}},Ce=async({commit:e},t)=>{const{completed:a,disabled:s,name:n,thang:o,maHoGd:i,chuaDongBo:r,taiTuc:h,hetHan:c,maXa:u,uniqid:m}=t;let l="/api/bhyts?";o&&(l+=`thang=${o}`),u&&(l+=`&maXa=${u}`),h&&(l+=`&taiTuc=${h}`),c&&(l+=`&hetHan=${c}`),n&&(l+=`&name=${n}`),a&&(l+=`&completed=${a}`),s&&(l+=`&disabled=${s}`),i&&(l+=`&maHoGd=${i}`),r&&(l+=`&chuaDongBo=${r}`),m&&(l+=`&uniqid=${m}`);const{data:d}=await P.api.get(l);d&&e("getAllBhyts",d)},ke=async({commit:e},t)=>{const{completed:a,disabled:s,name:n,thang:o,maHoGd:i,chuaDongBo:r,taiTuc:h,hetHan:c,maXa:u}=t;let m="https://cmsbudientulap.herokuapp.com/api/bhyts?";o&&(m+=`thang=${o}`),u&&(m+=`&maXa=${u}`),h&&(m+=`&taiTuc=${h}`),c&&(m+=`&hetHan=${c}`),n&&(m+=`&name=${n}`),a&&(m+=`&completed=${a}`),s&&(m+=`&disabled=${s}`),i&&(m+=`&maHoGd=${i}`),r&&(m+=`&chuaDongBo=${r}`);const{data:l}=await R.get(m);l&&e("getAllBhyts",l)},xe=async({searchText:e,isLogin:t})=>{const{data:a}=await R.getSsm(`/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=01&maHuyen=250&maXa=08986&hoTen=${e}&isCoDau=true&`,t);return a?a.result.value.map((e=>e.maSoBhxh)):[]},Ie=async({maSoBhxh:e,isLogin:t})=>{const{data:a}=await R.getSsm(`/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${e}`,t);return a?{...a.result.thongTinTheHGD,maHoGd:a.thongTinTK1.maHoGd}:{}},Ae=async e=>{const{data:t}=await P.api.put(`/api/bhyts/${e.maSoBhxh}`,e);return console.log(e),t},$e=()=>commit("getAllBhyts",[]),Xe=async({commit:e},{maSoBhxh:t,disabled:a})=>{const{data:s}=await P.api.put(`/api/bhyts/${t}/disabled`,{disabled:!("1"==a)});e("updateBhyt",s)},Ee=async({commit:e,rootGetters:t},{maSoBhxh:a,completed:s})=>{const{data:n}=await P.api.put(`/api/bhyts/${a}/completed`,{completed:!("1"==s),maXa:t["auth/maXa"]});e("updateBhyt",n)},Oe=async({commit:e},{maSoBhxh:t,userName:a})=>{const{data:s}=await P.api.put(`/api/bhyts/${t}/huy-thu-bhyt`,{isBHYT:0,completed:0,userName:a,ngayLap:null});e("updateBhyt",s)},Ue=async({commit:e},{maSoBhxh:t,userName:a})=>{const{data:s}=await P.api.put(`/api/bhyts/${t}/huy-thu-bhxhtn`,{isBHXHTN:0,completed:0,userName:a,ngayLapTN:null});e("updateBhyt",s)},Ke=({state:e})=>{navigator.clipboard.writeText(e.bhyts.map((e=>e.hoTen))).then((function(){G.A.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){G.A.create({type:"negative",message:"Không thực hiện được!"+e})}))};async function Pe({commit:e},t){try{const a=await P.api.get(`/api/bhyts/tra-cuu-bhyt/${t}`);e("capNhatThongTinBhyt",a.data)}catch(a){G.A.create({type:"negative",message:"Lỗi tra cứu BHXH: "+a.message,timeout:2e3})}}async function Ge({commit:e},{maTinh:t,maHuyen:a,maXa:s,hoTen:n}){try{const{data:o}=await P.api.get(`/api/tim-kiem-bhyts?maTinh=${t}&maHuyen=${a}&maXa=${s}&hoTen=${n}`);console.log(o.data),o.data.length&&o.data.forEach((t=>e("capNhatThongTinBhyt",t)))}catch(o){G.A.create({type:"negative",message:"Lỗi tra cứu BHXH: "+o.message,timeout:2e3})}}const Re={namespaced:!0,getters:s,mutations:n,actions:o,state:p};function ze(){return{userDetails:{},isLogin:"",users:{},messages:{}}}const Me=e=>{let t={};return Object.keys(e.users).forEach((a=>{a!==e.userDetails.userId&&(t[a]=e.users[a])})),t},_e=e=>t=>e.users[t],qe=e=>e.isLogin,Ye=e=>e.userDetails,Fe=e=>e.userDetails.mangLuoiId2||e.userDetails.mangLuoiId,Ve=e=>e.userDetails.maXa,We=e=>e.userDetails.id,Je=e=>[{label:"Tất cả",value:null},{label:e.userDetails?.userName,value:e.userDetails?.id}],Qe=(e,t)=>{e.userDetails=t},Ze=(e,t)=>{Vue.set(e.users,t.userId,t.userDetails)},et=(e,t)=>{Object.assign(e.users[t.userId],t.userDetails)},tt=(e,t)=>{Vue.set(e.messages,t.messageId,t.messageDetails)},at=e=>{e.messages={}},st=(e,t)=>{e.isLogin=t,localStorage.setItem("setIsLogin",t)};var nt=a(2433),ot=a(5106),it=a(5874),rt=a(6246),ht=a(6306),ct=a.n(ht);const ut=async({commit:e},{isLogin:t,smsText:a})=>{e("setIsLogin",t);try{await(0,ot.x9)(nt.e7,a.userNameOrEmailAddress+"@hotham.vn",a.password)}catch(s){await(0,ot.eJ)(nt.e7,`${a.userNameOrEmailAddress}@hotham.vn`,a.password).then((e=>{const s=e.user,n=(0,it.C3)();(0,it.hZ)((0,it.KR)(n,"users/"+s.uid),{smsText:a,isLogin:t,userId:s.uid,maTinh:"01",maHuyen:"250",maXa:"000"})}))}},mt=async({},{email:e,password:t})=>{await(0,ot.x9)(nt.e7,e,t)},lt=()=>{const e=(0,ot.xI)();(0,ot.CI)(e).then((()=>{commit("setUserDetails",{}),commit("setIsLogin","")}))},dt=async()=>{const{data:e}=await R.get("/api/services/app/Session/GetCurrentLoginInformations");return e.result.user},pt=async({commit:e,dispatch:t})=>{const a=(0,ot.xI)();await(0,ot.hg)(a,(a=>{if(a){const a=(0,it.C3)(),s=(0,ot.xI)(),n=s.currentUser.uid;(0,it.Zy)((0,it.KR)(a,"/users/"+n),(async a=>{if(a.exists()){const s=a.val();await e("setUserDetails",s);let{hetHan:o,isLogin:i}=s;if(!o){const{addToDate:e}=rt.Ay,t=e(new Date,{days:7});o=t.toISOString().slice(0,10)}console.log(rt.Ay.getDateDiff(new Date,new Date(o),"days")),await e("setIsLogin",i);let r=await t("getCurrentLoginInformations");if(r)s.maNhanVienThu||e("setUserDetails",{...s,...r,hetHan:o});else{let a={method:"post",maxBodyLength:1/0,url:"https://ssm-api.vnpost.vn/api/TokenAuth/Authenticate",headers:{Accept:"application/json","Content-Type":"application/json"},data:s.smsText};const{data:i}=await ct().request(a);e("setIsLogin",i.result.accessToken),r=await t("getCurrentLoginInformations");const h={...s,...r,userId:n,hetHan:o,isLogin:i.result.accessToken,isPro:!(rt.Ay.getDateDiff(new Date(o),new Date,"days")<0)&&s.isPro};e("setUserDetails",h);const c=(0,it.C3)();await(0,it.hZ)((0,it.KR)(c,"users/"+n),h),window.location.reload()}}else e("setIsLogin","")}),{onlyOnce:!0})}else e("setUserDetails",{}),e("setIsLogin","")}))},gt=({},{userId:e,updates:t})=>{const a=(0,it.C3)();(0,it.hZ)((0,it.KR)(a,"users/"+e+"/isLogin"),t.isLogin)},yt=({commit:e},{userId:t,updates:a})=>{const s=(0,it.C3)();(0,it.hZ)((0,it.KR)(s,"users/"+t),a).then((()=>{e("setUserDetails",a)}))},Tt=({commit:e})=>{nt.mH.ref("users").on("child_added",(t=>{let a=t.val(),s=t.key;e("addUser",{userId:s,userDetails:a})})),nt.mH.ref("users").on("child_changed",(t=>{let a=t.val(),s=t.key;e("updateUser",{userId:s,userDetails:a})}))},ft=({commit:e,state:t},a)=>{let s=t.userDetails.userId;messagesRef=nt.mH.ref("chats/"+s+"/"+a),messagesRef.on("child_added",(t=>{let a=t.val(),s=t.key;e("addMessage",{messageId:s,messageDetails:a})}))},Bt=({commit:e})=>{messagesRef&&(messagesRef.off("child_added"),e("clearMessages"))},bt=({},e)=>{nt.mH.ref("chats/"+state.userDetails.userId+"/"+e.otherUserId).push(e.message),e.message.from="them",nt.mH.ref("chats/"+e.otherUserId+"/"+state.userDetails.userId).push(e.message)},vt={namespaced:!0,getters:i,mutations:r,actions:h,state:ze};function jt(){const[e,t,a]=(new Date).toISOString().slice(0,10).split("-");return{ngay:a,thang:t,nam:e,items:[],tokenFe:""}}function wt(e){return e.items}const Ht=e=>t=>t?[...e.items.filter((e=>(e.ttNumber+e.senderName+e.senderPhone).toLowerCase().includes(t.toLowerCase())))]:e.items,St=(e,t)=>{e.items=t},Lt=(e,t)=>{e.tokenFe=t},Dt=async({commit:e},{username:t,password:a})=>{var s=JSON.stringify({username:t,password:a,ip:"",random:.8677049060452371}),n={headers:{capikey:"19001235","Content-Type":"application/json"}};const{data:{tokenFe:o}}=await P.apiKHL.post("/api/auth/signinKhl",s,n);e("setTokenFe",o)},Nt=async({commit:e,dispatch:t,state:a},{tuNgay:s,denNgay:n})=>{a.tokenFe||await t("loginUser",{username:"142010_THAMHT",password:"Abc@123456789"});const o=JSON.stringify({orgCode:"142010",tuNgay:s||[1,parseInt(a.thang),a.nam].join("/"),denNgay:n||new Date(a.nam,parseInt(a.thang),1).toISOString().slice(0,10).split("-").reverse().join("/"),pageNum:0,pageSize:5e3,sourceSystem:"KHL"}),i={headers:{Authorization:`Bearer ${a.tokenFe}`,"Content-Type":"application/json"}},{data:[r,h]}=await P.apiKHL.post("/khl/getItemDtl",o,i);e("setItems",h)},Ct={namespaced:!0,state:jt,getters:c,mutations:u,actions:m},kt=(0,l.M_)((function(){const e=(0,d.y$)({modules:{bhyts:Re,auth:vt,items:Ct},strict:!1});return e}))},5358:(e,t,a)=>{var s={"./af":8188,"./af.js":8188,"./ar":96,"./ar-dz":8495,"./ar-dz.js":8495,"./ar-kw":5891,"./ar-kw.js":5891,"./ar-ly":3194,"./ar-ly.js":3194,"./ar-ma":2195,"./ar-ma.js":2195,"./ar-sa":9393,"./ar-sa.js":9393,"./ar-tn":1867,"./ar-tn.js":1867,"./ar.js":96,"./az":3224,"./az.js":3224,"./be":1330,"./be.js":1330,"./bg":5096,"./bg.js":5096,"./bm":8746,"./bm.js":8746,"./bn":9303,"./bn-bd":6554,"./bn-bd.js":6554,"./bn.js":9303,"./bo":528,"./bo.js":528,"./br":5499,"./br.js":5499,"./bs":9828,"./bs.js":9828,"./ca":5855,"./ca.js":5855,"./cs":8481,"./cs.js":8481,"./cv":1694,"./cv.js":1694,"./cy":8903,"./cy.js":8903,"./da":5908,"./da.js":5908,"./de":5528,"./de-at":1732,"./de-at.js":1732,"./de-ch":4146,"./de-ch.js":4146,"./de.js":5528,"./dv":1313,"./dv.js":1313,"./el":138,"./el.js":138,"./en-au":8067,"./en-au.js":8067,"./en-ca":2545,"./en-ca.js":2545,"./en-gb":124,"./en-gb.js":124,"./en-ie":6107,"./en-ie.js":6107,"./en-il":3196,"./en-il.js":3196,"./en-in":1654,"./en-in.js":1654,"./en-nz":9557,"./en-nz.js":9557,"./en-sg":5451,"./en-sg.js":5451,"./eo":1591,"./eo.js":1591,"./es":6843,"./es-do":1009,"./es-do.js":1009,"./es-mx":5169,"./es-mx.js":5169,"./es-us":7224,"./es-us.js":7224,"./es.js":6843,"./et":7058,"./et.js":7058,"./eu":1297,"./eu.js":1297,"./fa":6658,"./fa.js":6658,"./fi":5674,"./fi.js":5674,"./fil":5204,"./fil.js":5204,"./fo":4428,"./fo.js":4428,"./fr":703,"./fr-ca":7812,"./fr-ca.js":7812,"./fr-ch":9411,"./fr-ch.js":9411,"./fr.js":703,"./fy":9738,"./fy.js":9738,"./ga":1235,"./ga.js":1235,"./gd":6032,"./gd.js":6032,"./gl":6424,"./gl.js":6424,"./gom-deva":3793,"./gom-deva.js":3793,"./gom-latn":4714,"./gom-latn.js":4714,"./gu":3383,"./gu.js":3383,"./he":6660,"./he.js":6660,"./hi":7264,"./hi.js":7264,"./hr":3201,"./hr.js":3201,"./hu":5604,"./hu.js":5604,"./hy-am":1067,"./hy-am.js":1067,"./id":9262,"./id.js":9262,"./is":3423,"./is.js":3423,"./it":3038,"./it-ch":3512,"./it-ch.js":3512,"./it.js":3038,"./ja":7558,"./ja.js":7558,"./jv":6071,"./jv.js":6071,"./ka":5927,"./ka.js":5927,"./kk":2625,"./kk.js":2625,"./km":7880,"./km.js":7880,"./kn":9486,"./kn.js":9486,"./ko":9405,"./ko.js":9405,"./ku":7155,"./ku.js":7155,"./ky":6028,"./ky.js":6028,"./lb":2837,"./lb.js":2837,"./lo":1474,"./lo.js":1474,"./lt":6967,"./lt.js":6967,"./lv":8297,"./lv.js":8297,"./me":1545,"./me.js":1545,"./mi":2573,"./mi.js":2573,"./mk":7259,"./mk.js":7259,"./ml":3826,"./ml.js":3826,"./mn":5368,"./mn.js":5368,"./mr":860,"./mr.js":860,"./ms":6947,"./ms-my":9418,"./ms-my.js":9418,"./ms.js":6947,"./mt":6906,"./mt.js":6906,"./my":1837,"./my.js":1837,"./nb":4503,"./nb.js":4503,"./ne":1286,"./ne.js":1286,"./nl":7981,"./nl-be":8103,"./nl-be.js":8103,"./nl.js":7981,"./nn":9387,"./nn.js":9387,"./oc-lnc":803,"./oc-lnc.js":803,"./pa-in":6742,"./pa-in.js":6742,"./pl":75,"./pl.js":75,"./pt":1731,"./pt-br":3352,"./pt-br.js":3352,"./pt.js":1731,"./ro":1776,"./ro.js":1776,"./ru":5746,"./ru.js":5746,"./sd":4100,"./sd.js":4100,"./se":8395,"./se.js":8395,"./si":8823,"./si.js":8823,"./sk":9385,"./sk.js":9385,"./sl":3852,"./sl.js":3852,"./sq":3247,"./sq.js":3247,"./sr":4290,"./sr-cyrl":6189,"./sr-cyrl.js":6189,"./sr.js":4290,"./ss":2177,"./ss.js":2177,"./sv":9038,"./sv.js":9038,"./sw":9741,"./sw.js":9741,"./ta":6932,"./ta.js":6932,"./te":5784,"./te.js":5784,"./tet":3334,"./tet.js":3334,"./tg":3602,"./tg.js":3602,"./th":9328,"./th.js":9328,"./tk":6774,"./tk.js":6774,"./tl-ph":5868,"./tl-ph.js":5868,"./tlh":9076,"./tlh.js":9076,"./tr":4954,"./tr.js":4954,"./tzl":4509,"./tzl.js":4509,"./tzm":7118,"./tzm-latn":7078,"./tzm-latn.js":7078,"./tzm.js":7118,"./ug-cn":2617,"./ug-cn.js":2617,"./uk":6131,"./uk.js":6131,"./ur":6532,"./ur.js":6532,"./uz":9932,"./uz-latn":7220,"./uz-latn.js":7220,"./uz.js":9932,"./vi":490,"./vi.js":490,"./x-pseudo":2154,"./x-pseudo.js":2154,"./yo":9955,"./yo.js":9955,"./zh-cn":8355,"./zh-cn.js":8355,"./zh-hk":9547,"./zh-hk.js":9547,"./zh-mo":374,"./zh-mo.js":374,"./zh-tw":979,"./zh-tw.js":979};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id=5358}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,(()=>{var e=[];a.O=(t,s,n,o)=>{if(!s){var i=1/0;for(u=0;u<e.length;u++){for(var[s,n,o]=e[u],r=!0,h=0;h<s.length;h++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](s[h])))?s.splice(h--,1):(r=!1,o<i&&(i=o));if(r){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,n,o]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,s)=>(a.f[s](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(996===e?"chunk-common":e)+"."+{56:"d70ef563",70:"59bd3126",271:"24897ac1",300:"75b48fb1",432:"1b08871e",504:"7bcaaad0",532:"d76ee728",569:"e4fc1875",752:"38ee2476",804:"965dfa92",829:"37d07b22",970:"f4de0f17",996:"ddcc445c",998:"c7368e60"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{300:"5ae00156",432:"5ae00156",532:"5ae00156",569:"5ae00156",804:"5ae00156",829:"5ae00156",970:"5ae00156"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="todolist:";a.l=(s,n,o,i)=>{if(e[s])e[s].push(n);else{var r,h;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==s||m.getAttribute("data-webpack")==t+o){r=m;break}}r||(h=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+o),r.src=s),e[s]=[n];var l=(t,a)=>{r.onerror=r.onload=null,clearTimeout(d);var n=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(a))),t)return t(a)},d=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),h&&document.head.appendChild(r)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,s,n,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",a.nc&&(i.nonce=a.nc);var r=a=>{if(i.onerror=i.onload=null,"load"===a.type)n();else{var s=a&&a.type,r=a&&a.target&&a.target.href||t,h=new Error("Loading CSS chunk "+e+" failed.\n("+s+": "+r+")");h.name="ChunkLoadError",h.code="CSS_CHUNK_LOAD_FAILED",h.type=s,h.request=r,i.parentNode&&i.parentNode.removeChild(i),o(h)}};return i.onerror=i.onload=r,i.href=t,s?s.parentNode.insertBefore(i,s.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var n=a[s],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var i=document.getElementsByTagName("style");for(s=0;s<i.length;s++){n=i[s],o=n.getAttribute("data-href");if(o===e||o===t)return n}},s=s=>new Promise(((n,o)=>{var i=a.miniCssF(s),r=a.p+i;if(t(i,r))return n();e(s,r,null,n,o)})),n={524:0};a.f.miniCss=(e,t)=>{var a={300:1,432:1,532:1,569:1,804:1,829:1,970:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=s(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={524:0};a.f.j=(t,s)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var o=new Promise(((a,s)=>n=e[t]=[a,s]));s.push(n[2]=o);var i=a.p+a.u(t),r=new Error,h=s=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,n[1](r)}};a.l(i,h,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,s)=>{var n,o,[i,r,h]=s,c=0;if(i.some((t=>0!==e[t]))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(h)var u=h(a)}for(t&&t(s);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},s=globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[121],(()=>a(8054)));s=a.O(s)})();