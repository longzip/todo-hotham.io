"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[813],{8984:(t,e,o)=>{o.r(e),o.d(e,{default:()=>b});var s=o(9835),i=o(6970);function n(t,e,o,n,a,r){const u=(0,s.up)("ListHeader"),h=(0,s.up)("ThongTinTheBHYT"),g=(0,s.up)("q-separator"),l=(0,s.up)("q-list"),d=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Hồ Sơ Đã Nộp BDH (Tổng: "+(0,i.zw)(a.tongTien.toLocaleString())+"đ / "+(0,i.zw)(a.tongHoSo)+" HS)",1)])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.bhyts.filter((t=>t.userId==this.userDetails.id&&4==t.trangThaiHoSo)),(t=>((0,s.wg)(),(0,s.j4)(l,{key:t.id},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{bhyt:t},null,8,["bhyt"]),(0,s.Wm)(g,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var a=o(3100),r=o(636),u=o(4026);const h={components:{ThongTinTheBHYT:r.Z,ListHeader:u.Z},data(){return{searchText:"",tongTien:0,tongHoSo:0}},computed:{...(0,a.Se)("auth",["isLogin","userDetails"]),...(0,a.Se)("bhyts",["bhyts"])},methods:{...(0,a.nv)("bhyts",["hoSoDaXuLy","giaHan"]),sleep(t){return new Promise((e=>setTimeout(e,t)))}},async mounted(){await this.hoSoDaXuLy({mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId}),this.tongTien=this.bhyts.filter((t=>t.userId==this.userDetails.id&&4==t.trangThaiHoSo)).map((t=>t.tongTien)).reduce(((t,e)=>t+e),0),this.tongHoSo=this.bhyts.filter((t=>t.userId==this.userDetails.id&&4==t.trangThaiHoSo)).length}};var g=o(1639),l=o(9885),d=o(3246),T=o(2218),p=o(9984),c=o.n(p);const H=(0,g.Z)(h,[["render",n]]),b=H;c()(h,"components",{QPage:l.Z,QList:d.Z,QSeparator:T.Z})}}]);