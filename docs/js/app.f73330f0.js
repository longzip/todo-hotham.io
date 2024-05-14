(()=>{var e={8911:(e,t,a)=>{"use strict";var s=a(1957),n=a(1947),i=a(499),o=a(9835);function r(e,t,a,s,n,i){const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(r)}var h=a(3100);const c=(0,o.aZ)({name:"App",methods:{...(0,h.nv)("auth",["firebaseUpdateUser","handleAuthStateChanged"])},computed:{...(0,h.Se)("auth",["isLogin","userDetails"])},async mounted(){await this.handleAuthStateChanged()}});var u=a(1639);const l=(0,u.Z)(c,[["render",r]]),m=l;var d=a(8135),p=a(3340),g=a(4987),y=a(8339);const T=[{path:"/",component:()=>Promise.all([a.e(736),a.e(713)]).then(a.bind(a,5144)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(64),a.e(26)]).then(a.bind(a,6650)),meta:{requireAuth:!0}},{path:"khl2",component:()=>Promise.all([a.e(736),a.e(64),a.e(729)]).then(a.bind(a,8870)),meta:{requireAuth:!0}},{path:"items",component:()=>Promise.all([a.e(736),a.e(64),a.e(14)]).then(a.bind(a,5285)),meta:{requireAuth:!0}},{path:"evn2",component:()=>Promise.all([a.e(736),a.e(64),a.e(48)]).then(a.bind(a,8528)),meta:{requireAuth:!1}},{path:"/settings",component:()=>Promise.all([a.e(736),a.e(950)]).then(a.bind(a,5950)),meta:{requireAuth:!0}},{path:"/ho-gia-dinh/:id",component:()=>Promise.all([a.e(736),a.e(64),a.e(927)]).then(a.bind(a,1043)),meta:{requireAuth:!0}},{path:"/dang-nhap-ssm",name:"auth",component:()=>Promise.all([a.e(736),a.e(144)]).then(a.bind(a,4144)),meta:{requireAuth:!1}},{path:"/dang-ky-142010",name:"dka",component:()=>Promise.all([a.e(736),a.e(901)]).then(a.bind(a,9901)),meta:{requireAuth:!1}},{path:"/ho-so-chua-xu-ly",component:()=>Promise.all([a.e(736),a.e(64),a.e(259)]).then(a.bind(a,9675)),meta:{requireAuth:!0}},{path:"/ho-so-da-xu-ly",component:()=>Promise.all([a.e(736),a.e(64),a.e(701)]).then(a.bind(a,8701)),meta:{requireAuth:!0}},{path:"/ho-so-da-nop",component:()=>Promise.all([a.e(736),a.e(64),a.e(813)]).then(a.bind(a,8984)),meta:{requireAuth:!0}}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(862)]).then(a.bind(a,1862))}],f=T,b=(0,p.BC)((function({store:e}){const t=y.r5,a=(0,y.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:t("")});return a.beforeEach((async(e,t,a)=>{e.matched.some((e=>e.meta.requireAuth))&&!await(0,g.ts)()?a({path:"/dang-nhap-ssm",query:{next:e.fullPath}}):a()})),a}));async function B(e,t){const s=e(m);s.use(n.Z,t);const o="function"===typeof d.Z?await(0,d.Z)({}):d.Z,{storeKey:r}=await Promise.resolve().then(a.bind(a,8135)),h=(0,i.Xl)("function"===typeof b?await b({store:o}):b);return o.$router=h,{app:s,store:o,storeKey:r,router:h}}var v=a(4393),j=a(2100),w=a(4328);const H={config:{},lang:v.Z,plugins:{Dialog:j.Z,Notify:w.Z}};var S=a(368);(0,S.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const N="";async function L({app:e,router:t,store:a,storeKey:s},n){let i=!1;const o=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},r=e=>{if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=o(e);null!==t&&(window.location.href=t,window.location.reload())},h=window.location.href.replace(window.location.origin,"");for(let u=0;!1===i&&u<n.length;u++)try{await n[u]({app:e,router:t,store:a,ssrContext:null,redirect:r,urlPath:h,publicPath:N})}catch(c){return c&&c.url?void r(c.url):void console.error("[Quasar] boot error:",c)}!0!==i&&(e.use(t),e.use(a,s),e.mount("#q-app"))}B(s.ri,H).then((e=>{const[t,s]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(a.bind(a,1569))]).then((t=>{const a=s(t).filter((e=>"function"===typeof e));L(e,a)}))}))},1569:(e,t,a)=>{"use strict";a.r(t),a.d(t,{api:()=>h,apiKHL:()=>o,apiServices:()=>c,apiStore:()=>r,default:()=>u});var s=a(3340),n=a(9981),i=a.n(n);const o=i().create({baseURL:"https://api-portalkhl.vnpost.vn"}),r=i().create({baseURL:"https://store.hotham.vn/wordpress"}),h=i().create({baseURL:"https://app.hotham.vn",headers:{Authorization:"Bearer 2|N04KZuJ0sVeHX3puFzxXW9yEOWWvffrQh7El9e95"}}),c=i().create({baseURL:"https://ssm-api.vnpost.vn",headers:{Authorization:`Bearer ${localStorage.getItem("setIsLogin")}`}}),u=(0,s.xr)((({app:e})=>{e.config.globalProperties.$axios=i(),e.config.globalProperties.$api=h}))},4987:(e,t,a)=>{"use strict";a.d(t,{N$:()=>c,lX:()=>h,ts:()=>u});var s=a(7141),n=a(363),i=a(4747),o={apiKey:"AIzaSyDraj3RaCTiGTK_Alsbslb-kbelw9Iyhgw",authDomain:"gvc-task.firebaseapp.com",projectId:"gvc-task",storageBucket:"gvc-task.appspot.com",messagingSenderId:"194642192267",appId:"1:194642192267:web:66bedc6e262d9fce83318e"};let r=(0,s.ZF)(o),h=(0,n.v0)(r),c=(0,i.N8)(r),u=()=>new Promise(((e,t)=>{const a=h.onAuthStateChanged((t=>{a(),e(t)}),t)}))},8135:(e,t,a)=>{"use strict";a.d(t,{Z:()=>rt});var s={};a.r(s),a.d(s,{bhyts:()=>g,soDienThoais:()=>T,timBhyts:()=>y,tongSoThe:()=>w,tongTien:()=>f,tongTienBHXH:()=>j,tongTienBHXHDaThu:()=>B,tongTienBHYT:()=>v,tongTienBHYTDaThu:()=>b});var n={};a.r(n),a.d(n,{getAllBhyts:()=>N,removeBhyt:()=>L,setBhyts:()=>H,setIsRemove:()=>S,updateBhyt:()=>D});var i={};a.r(i),a.d(i,{XuatD03OrD05Excel:()=>R,batTatRemove:()=>A,capNhatBHXHTN:()=>U,capNhatBienLai:()=>ue,copyHoTenToClipboard:()=>je,daXyLy:()=>le,dongBoDuLieu:()=>te,findBhyts:()=>pe,getAllBhyts:()=>me,getAllBhyts2:()=>de,getBaoCaoChiTietGiaoDich:()=>z,getBhytSsm:()=>ge,getBhyts:()=>M,getBhytsBySoBienLai:()=>q,getDanhSachKhachHangTaiTuc:()=>P,getTraCuuThongTinBHXHTN:()=>K,giaHan:()=>se,hoSoChuaXuLy:()=>F,hoSoDaXuLy:()=>_,huyThuBHXHTN:()=>ve,huyThuBHYT:()=>Be,huyThuTien:()=>he,khachChuaNop:()=>Y,lamMoiDanhSach:()=>Te,loaiBo:()=>fe,luuBhyt:()=>J,maTraCuu:()=>Q,resetBhyt:()=>E,saveBHXHTN:()=>Z,taiTuc:()=>ae,theoDoi:()=>be,thuTien:()=>ce,traCuuBhyts:()=>G,traCuuTheoTen:()=>ee,updateBhyt:()=>ye,updateDenNgayBHYTBT:()=>re,updateGhiChu:()=>ie,updateMaXacNhan:()=>oe,updateTongTien:()=>ne,xem:()=>W,xoaHoGd:()=>V,xoaThanhVienHGD:()=>O});var o={};a.r(o),a.d(o,{findUser:()=>Ne,isLogin:()=>Le,userDetails:()=>De,users:()=>Se});var r={};a.r(r),a.d(r,{addMessage:()=>Ce,addUser:()=>Ie,clearMessages:()=>$e,setIsLogin:()=>Xe,setUserDetails:()=>ke,updateUser:()=>xe});var h={};a.r(h),a.d(h,{firebaseGetMessages:()=>_e,firebaseGetUsers:()=>Fe,firebaseSendMessage:()=>Je,firebaseStopGettingMessages:()=>Ve,firebaseUpdateUser:()=>Re,firebaseUpdateUserAll:()=>Ye,getCurrentLoginInformations:()=>qe,handleAuthStateChanged:()=>Me,loginUser:()=>Ge,logoutUser:()=>Ee,registerUser:()=>ze});var c={};a.r(c),a.d(c,{itemBy:()=>tt,items:()=>et});var u={};a.r(u),a.d(u,{setItems:()=>at,setTokenFe:()=>st});var l={};a.r(l),a.d(l,{getItems:()=>it,loginUser:()=>nt});var m=a(3340),d=a(3100);function p(){return{bhyts:[],isRemove:!1}}function g(e){return e.bhyts}const y=e=>t=>t?[...e.bhyts.filter((e=>(e.hoTen+e.hoVaTen+e.maSoBhxh+e.maHoGd+e.soDienThoai+e.maKCB+e.soBienLai+"-"+e.denNgayDt).toLowerCase().includes(t.toLowerCase())))]:e.bhyts,T=e=>e.bhyts.map((e=>e.soDienThoai)),f=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.tongTien||e.soTienThu||0)).reduce(((e,t)=>e+parseInt(t)),0),b=e=>0===e.bhyts.length?0:e.bhyts.filter((e=>1==e.isBHYT)).map((e=>e.tongTien)).reduce(((e,t)=>e+parseInt(t)),0),B=e=>0===e.bhyts.length?0:e.bhyts.filter((e=>1==e.isBHXHTN)).map((e=>e.tienNop)).reduce(((e,t)=>e+parseInt(t)),0),v=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.tongTien||0)).reduce(((e,t)=>e+parseInt(t)),0),j=e=>0===e.bhyts.length?0:e.bhyts.map((e=>e.tienNop||0)).reduce(((e,t)=>e+parseInt(t)),0),w=e=>e.bhyts.length,H=(e,t)=>{e.bhyts=t},S=(e,t)=>{e.isRemove=!e.isRemove},N=(e,t)=>{e.bhyts=t},L=(e,t)=>{const a=e.bhyts.findIndex((e=>e.maSoBhxh===t));e.bhyts.splice(a,1)},D=(e,t)=>{if(e.isRemove){const a=e.bhyts.findIndex((e=>e.maSoBhxh===t.maSoBhxh||e.maSoBHXH===t.maSoBhxh));return-1!==a&&e.bhyts.splice(a,1),null}let a=e.bhyts.find((e=>e.maSoBhxh===t.maSoBhxh||e.maSoBHXH===t.maSoBhxh));a?Object.assign(a,t):e.bhyts.unshift(t)};a(9665);var k=a(1569),I=a(4328);const x={import:async(e,t)=>{let a={};if(navigator.onLine)try{a=await k.apiServices.post(e,t),a?I.Z.create({type:"positive",message:"Bạn đã lưu thành công!"}):I.Z.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(s){s.toString().includes("Network",0)&&I.Z.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}else I.Z.create({message:"Không có kết nối Internet !",color:"red"});return a},post:async(e,t)=>{let a={};if(navigator.onLine){let n={...t};delete n.createdAt,delete n.updatedAt,Object.keys(n).forEach((e=>(null===n[e]||void 0===n[e])&&delete n[e]));try{a=await k.apiServices.post(e,n),a?I.Z.create({type:"positive",message:"Bạn đã lưu thành công!"}):I.Z.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(s){s.toString().includes("Network",0)&&I.Z.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}}else I.Z.create({message:"Không có kết nối Internet !",color:"red"});return a},delete:async e=>{let t={};if(navigator.onLine)try{t=await k.apiServices.delete(e),t?I.Z.create({type:"positive",message:"Bạn đã lưu thành công!"}):I.Z.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(a){a.toString().includes("Network",0)&&I.Z.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}else I.Z.create({message:"Không có kết nối Internet !",color:"red"});return t},put:async(e,t)=>{let a={};if(navigator.onLine){let n={...t};delete n.createdAt,delete n.updatedAt,Object.keys(n).forEach((e=>(null===n[e]||void 0===n[e])&&delete n[e]));try{a=await k.apiServices.put(e,n),a?I.Z.create({type:"positive",message:"Bạn đã lưu thành công!"}):I.Z.create({type:"negative",message:"Lưu dữ liệu thất bại!"})}catch(s){s.toString().includes("Network",0)&&I.Z.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}}else I.Z.create({message:"Không có kết nối Internet !",color:"red"});return a},get:async e=>{let t={};if(navigator.onLine)try{t=await k.apiServices.get(e)}catch(a){a.toString().includes("Network",0)&&I.Z.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}else I.Z.create({message:"Không có kết nối Internet !",color:"red"});return t}};var C=a(3878),$=a.n(C);const X=()=>new Promise((e=>setTimeout(e,500))),A=({commit:e},t)=>{e("setIsRemove",t)},O=({commit:e},t)=>{e("removeBhyt",t)},K=async({dispatch:e},t)=>{try{const{data:a}=await k.apiServices.get(`/api/services/app/TraCuu/TraCuuThongTinBHXHTN?maSoBhxh=${t}`);return await e("saveBHXHTN",a.result.value.thongTinTns[0]),a.result.value.thongTinTns[0]}catch(a){I.Z.create({type:"negative",message:"Đã xảy ra lỗi!"})}return{}},U=async({dispatch:e,state:t},a)=>{let s=a.split(",");if(a||(s=t.bhyts.map((e=>e.maSoBhxh))),s.length>0)for(let n=0;n<s.length;n++)await X(),await e("getTraCuuThongTinBHXHTN",s[n])},Z=async({commit:e},{maSoBhxh:t,mucDong:a,maPhuongThucDong:s,thangBd:n,tienNop:i})=>{const o={1:1,3:3,6:4,12:7},{data:r}=await k.api.put(`/api/bhyts/${t}/tong-tien`,{isBHXHTN:0,denThangDt:$()(n).add(o[s]?o[s]-1:0,"months").endOf("month").format().slice(0,10),mucDong:a,maPhuongThucDong:s,tienNop:i});await e("updateBhyt",r)},P=async({commit:e},t)=>{e("setBhyts",[]);try{const{data:a}=await k.apiServices.post("/api/services/app/BaoCaoTongHopGDThu/DanhSachKhachHangTaiTuc",t);e("setBhyts",a.result.items)}catch(a){I.Z.create({type:"negative",message:"Đã xảy ra lỗi!"})}},z=async({commit:e},{tuThang:t="2023-01-01 00:00:00",denThang:a="2024-01-01 00:00:00",mangLuoiId:s=4580})=>{e("setBhyts",[]);try{const{data:n}=await k.apiServices.post("/api/services/app/BaoCaoTongHopGDThu/BaoCaoChiTietGiaoDich",{filterItems:[],maxResultCount:5e3,skipCount:0,mangLuoiId:s,tuThang:t,denThang:a,loaiGiaoDich:0});e("setBhyts",n.result.items)}catch(n){I.Z.create({type:"negative",message:"Đã xảy ra lỗi!"})}},G=async({commit:e},t)=>{e("setBhyts",[]);const{searchText:a,maXa:s}=t;if(!a)return;const n=a.split(",");if(1!==n.length);else{const t=a.split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");let n=`/api/bhyts?name=${t}&maXa=${s}`;const{data:i}=await k.api.get(n);e("setBhyts",i)}},E=async({commit:e},t)=>{e("setBhyts",t)},q=async({commit:e},t)=>{const{data:a}=await k.api.get(`/api/bhyts?soBienLai=${t}`);a.forEach((t=>{e("updateBhyt",t)}));try{await dispatch("dongBoDuLieu",a.map((e=>e.maSoBhxh)).join())}catch(s){}},M=async({commit:e},t)=>{const{completed:a,disabled:s,name:n,thang:i,maHoGd:o,chuaDongBo:r,taiTuc:h,hetHan:c,maXa:u,nam:l,userName:m,isBHXHTN:d,isBHYT:p,tienNop:g,taiTucBHXH:y,soBienLai:T,taiTucBHYTBT:f}=t;let b="/api/bhyts?";i&&(b+=`thang=${i}`),u&&(b+=`&maXa=${u}`),h&&(b+=`&taiTuc=${h}`),c&&(b+=`&hetHan=${c}`),n&&(b+=`&name=${n}`),l&&(b+=`&nam=${l}`),m&&(b+=`&userName=${m}`),a&&(b+=`&completed=${a}`),s&&(b+=`&disabled=${s}`),o&&(b+=`&maHoGd=${o}`),r&&(b+=`&chuaDongBo=${r}`),d&&(b+=`&isBHXHTN=${d}`),p&&(b+=`&isBHYT=${p}`),g&&(b+=`&tienNop=${g}`),y&&(b+=`&taiTucBHXH=${y}`),T&&(b+=`&soBienLai=${T}`),f&&(b+=`&taiTucBHYTBT=${f}`);const{data:B}=await k.api.get(b);e("setBhyts",B)},R=async({commit:e},t)=>{const{data:a}=await x.post("/api/services/app/KeKhai/XuatD03OrD05Excel",{daiLyIds:[52401],transactionIds:t});return a.result},Y=async({commit:e},t)=>{const{data:a}=await x.post("/api/services/app/BaoCaoTongHopGDThu/DanhSachKhachHangTaiTuc",{denThang:$()().startOf("months").add(1,"months").format(),filterItems:[],loaiDichVu:1,mangLuoiId:4580,maxResultCount:1500,skipCount:0,tuThang:$()().startOf("months").format(),type:-1});e("getAllBhyts",[...a.result.items.reverse()])},F=async({commit:e},{mangLuoiId:t=4580})=>{const a=new Date;a.setDate(a.getDate()+2);const s=new Date;s.setDate(a.getDate()-32);const{data:n}=await x.post("/api/services/app/KeKhai/TraCuuNoGroup",{dateForm:"ngayLap",denNgay:a,filterItems:[],hoSoChuaThuTien:!1,hoSoQuaHan:0,keyMenu:"2",mangLuoiId:t,maxResultCount:500,skipCount:0,tuNgay:s});e("getAllBhyts",[...n.result.items])},_=async({commit:e},t)=>{let{thangTruoc:a=0,tuNgay:s,denNgay:n,mangLuoiId:i=4580}=t;n||(n=$()().startOf("months").add(1-a,"months").format()),s||(s=$()().startOf("months").subtract(a,"months").format());const{data:o}=await x.post("/api/services/app/KeKhai/TraCuuNoGroup",{dateForm:"ngayLap",denNgay:n,filterItems:[],hoSoChuaThuTien:!1,hoSoQuaHan:0,keyMenu:"1",mangLuoiId:i,maxResultCount:500,skipCount:0,tuNgay:s});e("getAllBhyts",[...o.result.items])},V=async({commit:e},t)=>{await x.get(`/api/xoaHoGd?maHoGd=${t}`)},J=async e=>{try{const{data:t}=await k.api.post("/api/bhyts",e);return t}catch(t){return{}}},Q=async({},e)=>{let{data:{result:t,success:a}}=await x.get(`/api/services/app/KeKhai/GetDSBienLai?bienlaiId=${e}`);return a?t[0]:null},W=async({commit:e},t)=>{const{maSoBhxh:a}=t;let{data:{result:s}}=await x.get(`/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${a.slice(a.length-10)}`);const{thongTinTK1:n,thongTinTheHGD:i,trangThaiThe:o}=s;await e("updateBhyt",{...t,...i,...n,...o});const r=await J({...t,...i,...n,...o});return await e("updateBhyt",r),r},ee=async({commit:e,dispatch:t},{name:a,maXa:s,maHuyen:n,maTinh:i})=>{const o=a.split(","),r=JSON.parse(localStorage.getItem("hoTens"))||[];for(let c=0;c<o.length;c++){let{data:a}=await x.get(`/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=${i}&maHuyen=${n}&maXa=${s}&hoTen=${o[c]}&isCoDau=true&`);if(a.result.value.length&&(a.result.value.forEach((t=>{e("updateBhyt",t)})),!r.includes(o[c]))){try{await t("dongBoDuLieu",a.result.value.map((e=>e.maSoBhxh)).join())}catch(h){}r.push(o[c]),localStorage.setItem("hoTens",JSON.stringify(r))}}},te=async({dispatch:e},t)=>{const a=t.split(",");for(let n=0;n<a.length;n++){await X();const t=a[n];try{await e("xem",{maSoBhxh:t})}catch(s){console.log(s)}}},ae=async({commit:e},t)=>{const a=t.split(",");for(let n=0;n<a.length;n++){const e=a[n];try{await dispatch("xem",{maSoBhxh:e})}catch(s){console.log(s)}}},se=async({commit:e},t)=>{for(let s=0;s<t.length;s++){await X();const{maSoBhxh:n,tongTien:i,maThuTuc:o,soBienLai:r,userId:h}=t[s];try{const{data:t}=await k.api.put(`/api/bhyts/${n}/tong-tien`,{tongTien:i,maThuTuc:o,soBienLai:r,userName:h,disabled:!0,completed:!0});await e("updateBhyt",t)}catch(a){console.log(a)}}},ne=async({commit:e},{maSoBhxh:t,capNhatBHYT:a})=>{try{const{data:s}=await k.api.put(`/api/bhyts/${t}/tong-tien`,a);await e("updateBhyt",s)}catch(s){console.log(s)}},ie=async({commit:e},{maSoBhxh:t,ghiChu:a})=>{try{const{data:s}=await k.api.put(`/api/bhyts/${t}/tong-tien`,{ghiChu:a});await e("updateBhyt",s)}catch(s){console.log(s)}},oe=async({commit:e},{maSoBhxh:t,maXacNhan:a,maXacNhanTN:s,ngayLap:n,ngayLapTN:i,soBienLai:o,soBienLaiTN:r})=>{try{const{data:h}=await k.api.put(`/api/bhyts/${t}/tong-tien`,{maXacNhan:a,maXacNhanTN:s,ngayLap:n,ngayLapTN:i,soBienLai:o,soBienLaiTN:r});return await e("updateBhyt",h),h}catch(h){return console.log(h),{}}},re=async({commit:e},{maSoBhxh:t,denNgayBHYTBT:a})=>{try{const{data:s}=await k.api.put(`/api/bhyts/${t}/tong-tien`,{denNgayBHYTBT:a});await e("updateBhyt",s)}catch(s){console.log(s)}},he=async({commit:e,dispatch:t},{maSoBhxh:a,userName:s,bienLaiId:n})=>{try{const{ngayBienLai:i}=await t("maTraCuu",n),{data:o}=await k.api.put(`/api/bhyts/${a}/tong-tien`,{userName:s,disabled:0,tongTien:0,ngayLap:i?.split("/").reverse().join("-"),isBHYT:0});await e("updateBhyt",o)}catch(i){console.log(i)}},ce=async({commit:e},{maSoBhxh:t,tongTien:a,userName:s,tienNop:n,maXa:i})=>{try{if(n){const{data:a}=await k.api.put(`/api/bhyts/${t}/tong-tien`,{tienNop:n.replace(/\D/g,""),ngayLap:(new Date).toISOString().slice(0,10),userName:s,disabled:1,isBHXHTN:1,maXa:i});await e("updateBhyt",a)}else{const{data:n}=await k.api.put(`/api/bhyts/${t}/tong-tien`,{tongTien:a.replace(/\D/g,""),ngayLap:(new Date).toISOString().slice(0,10),userName:s,disabled:1,isBHYT:1});await e("updateBhyt",n)}}catch(o){console.log(o)}},ue=async({commit:e},t)=>{for(let s=0;s<t.length;s++){await X();const{maSoBHXH:n,ngayBienLai:i,bienLaiId:o,soBienLai:r,soTienThu:h}=t[s];try{const{data:t}=await k.api.put(`/api/bhyts/${n}/tong-tien`,{ngayLap:i,soBienLai:r,tongTien:h});await e("updateBhyt",t)}catch(a){console.log(a)}}},le=async({commit:e,dispatch:t},a)=>{const s=(new Date).getFullYear(),n=`${s}-${(new Date).getMonth()}`;for(let o=0;o<a.length;o++){const{maSoBhxh:r,tongTien:h,userId:c,trangThaiHoSo:u,maThuTuc:l,soBienLai:m,bienLaiId:d}=a[o];if(5!=u)if(0===l)try{const{ngayBienLai:a}=await t("maTraCuu",d),{data:s}=await k.api.put(`/api/bhyts/${r}/tong-tien`,{tienNop:h,userName:c,isBHXHTN:0,soBienLaiTN:m,bienLaiIdTN:d,disabled:9!==u,maThuTuc:l,ngayLapTN:a?.split("/").reverse().join("-")});await e("updateBhyt",s),9===u&&s.denThangDt&&s.denThangDt.slice!==n&&await t("getTraCuuThongTinBHXHTN",r),s.hoTen||await t("xem",{maSoBhxh:r})}catch(i){console.log(i)}else try{const{ngayBienLai:a}=await t("maTraCuu",d),{data:n}=await k.api.put(`/api/bhyts/${r}/tong-tien`,{tongTien:h,isBHYT:0,userName:c,soBienLai:m,bienLaiId:d,disabled:9!==u,maThuTuc:l,ngayLap:a?.split("/").reverse().join("-")});await e("updateBhyt",n),(!n.hoTen||!n.denNgayDt||9===u&&parseInt(n.denNgayDt.slice(0,4))<=s)&&await t("xem",{maSoBhxh:r})}catch(i){console.log(i)}await X()}},me=async({commit:e},t)=>{const{completed:a,disabled:s,name:n,thang:i,maHoGd:o,chuaDongBo:r,taiTuc:h,hetHan:c,maXa:u,uniqid:l}=t;let m="/api/bhyts?";i&&(m+=`thang=${i}`),u&&(m+=`&maXa=${u}`),h&&(m+=`&taiTuc=${h}`),c&&(m+=`&hetHan=${c}`),n&&(m+=`&name=${n}`),a&&(m+=`&completed=${a}`),s&&(m+=`&disabled=${s}`),o&&(m+=`&maHoGd=${o}`),r&&(m+=`&chuaDongBo=${r}`),l&&(m+=`&uniqid=${l}`);const{data:d}=await k.api.get(m);d&&e("getAllBhyts",d)},de=async({commit:e},t)=>{const{completed:a,disabled:s,name:n,thang:i,maHoGd:o,chuaDongBo:r,taiTuc:h,hetHan:c,maXa:u}=t;let l="https://cmsbudientulap.herokuapp.com/api/bhyts?";i&&(l+=`thang=${i}`),u&&(l+=`&maXa=${u}`),h&&(l+=`&taiTuc=${h}`),c&&(l+=`&hetHan=${c}`),n&&(l+=`&name=${n}`),a&&(l+=`&completed=${a}`),s&&(l+=`&disabled=${s}`),o&&(l+=`&maHoGd=${o}`),r&&(l+=`&chuaDongBo=${r}`);const{data:m}=await x.get(l);m&&e("getAllBhyts",m)},pe=async({searchText:e,isLogin:t})=>{const{data:a}=await x.getSsm(`/api/services/app/TraCuu/TraCuuMaSoBHXH?maTinh=01&maHuyen=250&maXa=08986&hoTen=${e}&isCoDau=true&`,t);return a?a.result.value.map((e=>e.maSoBhxh)):[]},ge=async({maSoBhxh:e,isLogin:t})=>{const{data:a}=await x.getSsm(`/api/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${e}`,t);return a?{...a.result.thongTinTheHGD,maHoGd:a.thongTinTK1.maHoGd}:{}},ye=async e=>{const{data:t}=await k.api.put(`/api/bhyts/${e.maSoBhxh}`,e);return t},Te=()=>commit("getAllBhyts",[]),fe=async({commit:e},{maSoBhxh:t,disabled:a})=>{const{data:s}=await k.api.put(`/api/bhyts/${t}/disabled`,{disabled:!("1"==a)});e("updateBhyt",s)},be=async({commit:e},{maSoBhxh:t,completed:a})=>{const{data:s}=await k.api.put(`/api/bhyts/${t}/completed`,{completed:!("1"==a)});e("updateBhyt",s)},Be=async({commit:e},{maSoBhxh:t})=>{const{data:a}=await k.api.put(`/api/bhyts/${t}/huy-thu-bhyt`,{isBHYT:0,disabled:0,ngayLap:null});e("updateBhyt",a)},ve=async({commit:e},{maSoBhxh:t})=>{const{data:a}=await k.api.put(`/api/bhyts/${t}/huy-thu-bhxhtn`,{isBHXHTN:0,disabled:0,ngayLapTN:null});e("updateBhyt",a)},je=({state:e})=>{navigator.clipboard.writeText(e.bhyts.map((e=>e.hoTen))).then((function(){I.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){I.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},we={namespaced:!0,getters:s,mutations:n,actions:i,state:p};function He(){return{userDetails:{},isLogin:"",users:{},messages:{}}}const Se=e=>{let t={};return Object.keys(e.users).forEach((a=>{a!==e.userDetails.userId&&(t[a]=e.users[a])})),t},Ne=e=>t=>e.users[t],Le=e=>e.isLogin,De=e=>e.userDetails,ke=(e,t)=>{e.userDetails=t},Ie=(e,t)=>{Vue.set(e.users,t.userId,t.userDetails)},xe=(e,t)=>{Object.assign(e.users[t.userId],t.userDetails)},Ce=(e,t)=>{Vue.set(e.messages,t.messageId,t.messageDetails)},$e=e=>{e.messages={}},Xe=(e,t)=>{e.isLogin=t,localStorage.setItem("setIsLogin",t)};var Ae=a(4987),Oe=a(363),Ke=a(4747),Ue=a(4170),Ze=a(9981),Pe=a.n(Ze);const ze=async({commit:e},{isLogin:t,smsText:a})=>{e("setIsLogin",t);try{await(0,Oe.e5)(Ae.lX,a.userNameOrEmailAddress+"@hotham.vn",a.password)}catch(s){await(0,Oe.Xb)(Ae.lX,`${a.userNameOrEmailAddress}@hotham.vn`,a.password).then((e=>{const s=e.user,n=(0,Ke.N8)();(0,Ke.t8)((0,Ke.iH)(n,"users/"+s.uid),{smsText:a,isLogin:t,userId:s.uid,maTinh:"01",maHuyen:"250",maXa:"000"})}))}},Ge=async({},{email:e,password:t})=>{await(0,Oe.e5)(Ae.lX,e,t)},Ee=()=>{const e=(0,Oe.v0)();(0,Oe.w7)(e).then((()=>{commit("setUserDetails",{}),commit("setIsLogin","")}))},qe=async()=>{const{data:e}=await x.get("/api/services/app/Session/GetCurrentLoginInformations");return e.result.user},Me=async({commit:e,dispatch:t})=>{const a=(0,Oe.v0)();await(0,Oe.Aj)(a,(a=>{if(a){const a=(0,Ke.N8)(),s=(0,Oe.v0)(),n=s.currentUser.uid;(0,Ke.jM)((0,Ke.iH)(a,"/users/"+n),(async a=>{if(a.exists()){const s=a.val();await e("setUserDetails",s);let{hetHan:i,isLogin:o}=s;if(!i){const{addToDate:e}=Ue["default"],t=e(new Date,{days:15});i=t.toISOString().slice(0,10)}console.log(Ue["default"].getDateDiff(new Date,new Date(i),"days")),Ue["default"].getDateDiff(new Date(i),new Date,"days")<0&&window.location.replace("https://longwebstudio.amycos.vn/cua-hang/phan-mem-quan-ly-tai-tuc-bao-hiem-lws/"),await e("setIsLogin",o);let r=await t("getCurrentLoginInformations");if(r)s.maNhanVienThu||e("setUserDetails",{...s,...r,hetHan:i});else{let a={method:"post",maxBodyLength:1/0,url:"https://ssm-api.vnpost.vn/api/TokenAuth/Authenticate",headers:{Accept:"application/json","Content-Type":"application/json"},data:s.smsText};const{data:o}=await Pe().request(a);e("setIsLogin",o.result.accessToken),r=await t("getCurrentLoginInformations");const h={...s,...r,userId:n,hetHan:i,isLogin:o.result.accessToken};e("setUserDetails",h);const c=(0,Ke.N8)();await(0,Ke.t8)((0,Ke.iH)(c,"users/"+n),h),window.location.reload()}}else e("setIsLogin","")}),{onlyOnce:!0})}else e("setUserDetails",{}),e("setIsLogin","")}))},Re=({},{userId:e,updates:t})=>{const a=(0,Ke.N8)();(0,Ke.t8)((0,Ke.iH)(a,"users/"+e+"/isLogin"),t.isLogin)},Ye=({commit:e},{userId:t,updates:a})=>{const s=(0,Ke.N8)();(0,Ke.t8)((0,Ke.iH)(s,"users/"+t),a).then((()=>{e("setUserDetails",a)}))},Fe=({commit:e})=>{Ae.N$.ref("users").on("child_added",(t=>{let a=t.val(),s=t.key;e("addUser",{userId:s,userDetails:a})})),Ae.N$.ref("users").on("child_changed",(t=>{let a=t.val(),s=t.key;e("updateUser",{userId:s,userDetails:a})}))},_e=({commit:e,state:t},a)=>{let s=t.userDetails.userId;messagesRef=Ae.N$.ref("chats/"+s+"/"+a),messagesRef.on("child_added",(t=>{let a=t.val(),s=t.key;e("addMessage",{messageId:s,messageDetails:a})}))},Ve=({commit:e})=>{messagesRef&&(messagesRef.off("child_added"),e("clearMessages"))},Je=({},e)=>{Ae.N$.ref("chats/"+state.userDetails.userId+"/"+e.otherUserId).push(e.message),e.message.from="them",Ae.N$.ref("chats/"+e.otherUserId+"/"+state.userDetails.userId).push(e.message)},Qe={namespaced:!0,getters:o,mutations:r,actions:h,state:He};function We(){const[e,t,a]=(new Date).toISOString().slice(0,10).split("-");return{ngay:a,thang:t,nam:e,items:[],tokenFe:""}}function et(e){return e.items}const tt=e=>t=>t?[...e.items.filter((e=>(e.ttNumber+e.senderName+e.senderPhone).toLowerCase().includes(t.toLowerCase())))]:e.items,at=(e,t)=>{e.items=t},st=(e,t)=>{e.tokenFe=t},nt=async({commit:e},{username:t,password:a})=>{var s=JSON.stringify({username:t,password:a,ip:"",random:.8677049060452371}),n={headers:{capikey:"19001235","Content-Type":"application/json"}};const{data:{tokenFe:i}}=await k.apiKHL.post("/api/auth/signinKhl",s,n);e("setTokenFe",i)},it=async({commit:e,dispatch:t,state:a},{tuNgay:s,denNgay:n})=>{a.tokenFe||await t("loginUser",{username:"142010_THAMHT",password:"Abc@123456789"});const i=JSON.stringify({orgCode:"142010",tuNgay:s||[1,parseInt(a.thang),a.nam].join("/"),denNgay:n||new Date(a.nam,parseInt(a.thang),1).toISOString().slice(0,10).split("-").reverse().join("/"),pageNum:0,pageSize:5e3,sourceSystem:"KHL"}),o={headers:{Authorization:`Bearer ${a.tokenFe}`,"Content-Type":"application/json"}},{data:[r,h]}=await k.apiKHL.post("/khl/getItemDtl",i,o);e("setItems",h)},ot={namespaced:!0,state:We,getters:c,mutations:u,actions:l},rt=(0,m.h)((function(){const e=(0,d.MT)({modules:{bhyts:we,auth:Qe,items:ot},strict:!1});return e}))},6700:(e,t,a)=>{var s={"./af":3902,"./af.js":3902,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":6916,"./ar-tn.js":6916,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":3706,"./bs.js":3706,"./ca":112,"./ca.js":112,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":1809,"./ja.js":1809,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":6611,"./mk.js":6611,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":8812,"./ss.js":8812,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":926,"./th.js":926,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id=6700}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=e,(()=>{var e=[];a.O=(t,s,n,i)=>{if(!s){var o=1/0;for(u=0;u<e.length;u++){for(var[s,n,i]=e[u],r=!0,h=0;h<s.length;h++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](s[h])))?s.splice(h--,1):(r=!1,i<o&&(o=i));if(r){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,n,i]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,s)=>(a.f[s](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{14:"a5bbdf45",26:"dd749ac9",48:"5cabf551",64:"087ba22f",144:"5a0ea9fb",259:"929f0e57",701:"da4f5c89",713:"c96de0c8",729:"f13f7a05",813:"4a51367b",862:"e70f811b",901:"bc168585",927:"6e7c82c7",950:"9b6c530a"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{14:"5ae00156",26:"5ae00156",48:"5ae00156",259:"5ae00156",729:"5ae00156",813:"5ae00156",927:"5ae00156"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="todolist:";a.l=(s,n,i,o)=>{if(e[s])e[s].push(n);else{var r,h;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==s||l.getAttribute("data-webpack")==t+i){r=l;break}}r||(h=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+i),r.src=s),e[s]=[n];var m=(t,a)=>{r.onerror=r.onload=null,clearTimeout(d);var n=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((e=>e(a))),t)return t(a)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),h&&document.head.appendChild(r)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,s,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=a=>{if(i.onerror=i.onload=null,"load"===a.type)s();else{var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||t,h=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");h.code="CSS_CHUNK_LOAD_FAILED",h.type=o,h.request=r,i.parentNode.removeChild(i),n(h)}};return i.onerror=i.onload=o,i.href=t,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var n=a[s],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){n=o[s],i=n.getAttribute("data-href");if(i===e||i===t)return n}},s=s=>new Promise(((n,i)=>{var o=a.miniCssF(s),r=a.p+o;if(t(o,r))return n();e(s,r,null,n,i)})),n={143:0};a.f.miniCss=(e,t)=>{var a={14:1,26:1,48:1,259:1,729:1,813:1,927:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=s(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,s)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var i=new Promise(((a,s)=>n=e[t]=[a,s]));s.push(n[2]=i);var o=a.p+a.u(t),r=new Error,h=s=>{if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",r.name="ChunkLoadError",r.type=i,r.request=o,n[1](r)}};a.l(o,h,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,s)=>{var n,i,[o,r,h]=s,c=0;if(o.some((t=>0!==e[t]))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(h)var u=h(a)}for(t&&t(s);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},s=globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=a.O(void 0,[736],(()=>a(8911)));s=a.O(s)})();