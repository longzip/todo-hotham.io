"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[917],{689:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var s=a(9835),o=a(1957);const n={class:"q-gutter-y-md column"};function h(t,e,a,h,i,l){const u=(0,s.up)("ListHeader"),r=(0,s.up)("q-icon"),c=(0,s.up)("q-input"),p=(0,s.up)("ThongTinTheBHYT"),d=(0,s.up)("q-separator"),g=(0,s.up)("q-list"),m=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{bgcolor:"bg-orange-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Tra cứu thẻ BHYT")])),_:1}),(0,s._)("div",n,[(0,s.Wm)(c,{outlined:"",modelValue:i.searchText,"onUpdate:modelValue":e[1]||(e[1]=t=>i.searchText=t),onKeyup:(0,o.D2)(l.timKiem,["enter"]),placeholder:"Mã số BHXH",hint:"Mã số cách nhau bởi dấu phẩy, nhấn Enter để tìm kiếm",dense:""},{append:(0,s.w5)((()=>[""!==i.searchText?((0,s.wg)(),(0,s.j4)(r,{key:0,name:"close",onClick:e[0]||(e[0]=t=>i.searchText=""),class:"cursor-pointer"})):(0,s.kq)("",!0),(0,s.Wm)(r,{name:"search"})])),_:1},8,["modelValue","onKeyup"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.bhyts,(t=>((0,s.wg)(),(0,s.j4)(g,{key:t.id},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{bhyt:t},null,8,["bhyt"]),(0,s.Wm)(d,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}a(9665);var i=a(3100),l=a(6950),u=a(8359),r=a(7482),c=a(4026),p=a(1569),d=a(465);const g={components:{ThongTinTheBHYT:r.Z,ListHeader:c.Z},data(){return{searchText:"",bhyts:[]}},methods:{async timKiem(){if(window.close(),0===this.searchText.length||""===localStorage.getItem("setIsLogin"))return;this.bhyts=[],l.Z.show({spinner:u.Z,spinnerSize:"100px"});let t=this.searchText.split(",");for(let a=0;a<t.length;a++){const s=t[a];try{await this.xem(s)}catch(e){console.log(e)}}window.close(),l.Z.hide()},async luu(t){let{data:e}=await p.api.put(`/api/bhyts/${t.maSoBhxh}`,t);return e},async xem(t){let{data:e}=await d.Z.get(`/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${t.slice(t.length-10)}`),{thongTinTK1:a,thongTinTheHGD:s}=e.result;if(a){let t=await this.luu({...s,maHoGd:a.maHoGd});this.bhyts.length>5&&(this.bhyts=[]),this.bhyts.push(t)}}},computed:{...(0,i.Se)("auth",["isLogin"])},async mounted(){localStorage.getItem("setIsLogin")||this.$router.push("/auth"),this.$route.query.q&&(this.searchText=this.$route.query.q);let{data:t}=await p.api.get("/api/maSoBhxhs");localStorage.setItem("dsMaSoBhxhsDaCapNhat",JSON.stringify(t));let e=await axios.get("/api/maHoGd");localStorage.setItem("maHoGds",JSON.stringify(e.data));let a=JSON.parse(localStorage.getItem("dsMaSoBhxhs"));console.log("danh sách mã số bh còn lại: "+a.length),console.log("Đã cập nhật thành công: "+t.length);let s=!1;while(s)t.includes(s)||(await this.xem(s),t.push(s)),s=a.pop(),localStorage.setItem("dsMaSoBhxhs",JSON.stringify(a));this.timKiem()}};var m=a(1639),T=a(9885),y=a(7471),w=a(2857),x=a(3246),b=a(2218),S=a(9984),H=a.n(S);const Z=(0,m.Z)(g,[["render",h]]),f=Z;H()(g,"components",{QPage:T.Z,QInput:y.Z,QIcon:w.Z,QList:x.Z,QSeparator:b.Z})}}]);