"use strict";(globalThis["webpackChunktodo_buudienxatulap"]=globalThis["webpackChunktodo_buudienxatulap"]||[]).push([[917],{689:(t,e,a)=>{a.r(e),a.d(e,{default:()=>q});var s=a(9835),o=a(1957);const n=(0,s.Uk)("Tra cứu thẻ BHYT"),h={class:"q-gutter-y-md column"};function i(t,e,a,i,l,u){const r=(0,s.up)("ListHeader"),c=(0,s.up)("q-icon"),p=(0,s.up)("q-input"),d=(0,s.up)("ThongTinTheBHYT"),g=(0,s.up)("q-separator"),m=(0,s.up)("q-list"),T=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(T,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,{bgcolor:"bg-orange-4"},{default:(0,s.w5)((()=>[n])),_:1}),(0,s._)("div",h,[(0,s.Wm)(p,{outlined:"",modelValue:l.searchText,"onUpdate:modelValue":e[1]||(e[1]=t=>l.searchText=t),onKeyup:(0,o.D2)(u.timKiem,["enter"]),placeholder:"Mã số BHXH",hint:"Mã số cách nhau bởi dấu phẩy, nhấn Enter để tìm kiếm",dense:""},{append:(0,s.w5)((()=>[""!==l.searchText?((0,s.wg)(),(0,s.j4)(c,{key:0,name:"close",onClick:e[0]||(e[0]=t=>l.searchText=""),class:"cursor-pointer"})):(0,s.kq)("",!0),(0,s.Wm)(c,{name:"search"})])),_:1},8,["modelValue","onKeyup"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.bhyts,(t=>((0,s.wg)(),(0,s.j4)(m,{key:t.id},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{bhyt:t},null,8,["bhyt"]),(0,s.Wm)(g,{spaced:"",inset:""})])),_:2},1024)))),128))])),_:1})}var l=a(3100),u=a(6950),r=a(8359),c=a(365),p=a(4026),d=a(1569),g=a(465);const m={components:{ThongTinTheBHYT:c.Z,ListHeader:p.Z},data(){return{searchText:"",bhyts:[]}},methods:{async timKiem(){if(window.close(),0===this.searchText.length||""===localStorage.getItem("setIsLogin"))return;this.bhyts=[],u.Z.show({spinner:r.Z,spinnerSize:"100px"});let t=this.searchText.split(",");for(let a=0;a<t.length;a++){const s=t[a];try{await this.xem(s)}catch(e){console.log(e)}}window.close(),u.Z.hide()},async luu(t){let{data:e}=await d.api.put(`/api/bhyts/${t.maSoBhxh}`,t);return e},async xem(t){let{data:e}=await g.Z.get(`/services/app/TraCuu/TraCuuThongTinBHYT?maSoBhxh=${t.slice(t.length-10)}`),{thongTinTK1:a,thongTinTheHGD:s}=e.result;if(a){let t=await this.luu({...s,maHoGd:a.maHoGd});this.bhyts.length>5&&(this.bhyts=[]),this.bhyts.push(t)}}},computed:{...(0,l.Se)("auth",["isLogin"])},async mounted(){localStorage.getItem("setIsLogin")||this.$router.push("/auth"),this.$route.query.q&&(this.searchText=this.$route.query.q);let{data:t}=await d.api.get("/api/maSoBhxhs");localStorage.setItem("dsMaSoBhxhsDaCapNhat",JSON.stringify(t));let e=await axios.get("/api/maHoGd");localStorage.setItem("maHoGds",JSON.stringify(e.data));let a=JSON.parse(localStorage.getItem("dsMaSoBhxhs"));console.log("danh sách mã số bh còn lại: "+a.length),console.log("Đã cập nhật thành công: "+t.length);let s=!1;while(s)t.includes(s)||(await this.xem(s),t.push(s)),s=a.pop(),localStorage.setItem("dsMaSoBhxhs",JSON.stringify(a));this.timKiem()}};var T=a(1639),y=a(9885),w=a(8627),x=a(2857),b=a(3246),S=a(2218),H=a(9984),Z=a.n(H);const f=(0,T.Z)(m,[["render",i]]),q=f;Z()(m,"components",{QPage:y.Z,QInput:w.Z,QIcon:x.Z,QList:b.Z,QSeparator:S.Z})}}]);