"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[619],{1946:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(9835),u=n(1957);const a={class:"q-gutter-y-md column"};function s(e,t,n,s,r,h){const i=(0,o.up)("q-btn"),l=(0,o.up)("ListHeader"),c=(0,o.up)("q-icon"),d=(0,o.up)("q-input"),p=(0,o.up)("ThongTinTheBHYT"),T=(0,o.up)("q-separator"),m=(0,o.up)("q-list"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l,{bgcolor:"bg-orange-4"},{default:(0,o.w5)((()=>[(0,o.Uk)("Tìm thẻ BHYT"),(0,o.Wm)(i,{rounded:"",color:"primary",label:"Tải",onClick:t[0]||(t[0]=e=>h.dongBo()),icon:"sync"})])),_:1}),(0,o._)("div",a,[(0,o.Wm)(d,{outlined:"",modelValue:r.searchText,"onUpdate:modelValue":t[2]||(t[2]=e=>r.searchText=e),onKeyup:t[3]||(t[3]=(0,u.D2)((t=>e.traCuuTheoTen(r.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,o.w5)((()=>[""!==r.searchText?((0,o.wg)(),(0,o.j4)(c,{key:0,name:"close",onClick:t[1]||(t[1]=e=>r.searchText=""),class:"cursor-pointer"})):(0,o.kq)("",!0),(0,o.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.bhyts,(e=>((0,o.wg)(),(0,o.j4)(m,{key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{bhyt:e},null,8,["bhyt"]),(0,o.Wm)(T,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var r=n(3100),h=n(365),i=n(4026);const l={components:{ThongTinTheBHYT:h.Z,ListHeader:i.Z},data(){return{searchText:""}},computed:{...(0,r.Se)("auth",["isLogin"]),...(0,r.Se)("bhyts",["bhyts"])},methods:{...(0,r.nv)("bhyts",["traCuuTheoTen","dongBoDuLieu"]),dongBo(){this.dongBoDuLieu(this.bhyts.map((e=>e.maSoBhxh)).join())}},async mounted(){this.$route.query.q&&(this.searchText=this.$route.query.q,await this.traCuuTheoTen(this.$route.query.q),this.dongBo())}};var c=n(1639),d=n(9885),p=n(4455),T=n(7471),m=n(2857),g=n(3246),b=n(2218),y=n(9984),q=n.n(y);const k=(0,c.Z)(l,[["render",s]]),w=k;q()(l,"components",{QPage:d.Z,QBtn:p.Z,QInput:T.Z,QIcon:m.Z,QList:g.Z,QSeparator:b.Z})}}]);