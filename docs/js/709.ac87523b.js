"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[709],{8765:(e,t,a)=>{a.r(t),a.d(t,{default:()=>oe});var l=a(9835),o=a(6970),i=a(1957);const n={class:"q-gutter-y-md column"},s=(0,l._)("div",{class:"text-subtitle1"},"Nộp BHYT",-1),d={class:"text-caption text-grey"},u={class:"row"},h={class:"col"},c={class:"col"},r={class:"col"},m={class:"row"},T={class:"col"},p={class:"col"},g={class:"col"},y={class:"row"},H={class:"col"},w={class:"col"},D={class:"col"},V=(0,l._)("br",null,null,-1),b=(0,l._)("div",{class:"text-subtitle1"},"Nộp BHXH",-1),B={class:"text-caption text-grey"},_={class:"row"},S={class:"col"},v={class:"col"},W={class:"col"},f={class:"row"},I={class:"col"},X={class:"col"},k={class:"col"},C={class:"row"},N={class:"col"},L={class:"col"},U={class:"col"},x=(0,l._)("br",null,null,-1);function Y(e,t,a,Y,q,$){const Z=(0,l.up)("q-btn"),z=(0,l.up)("ListHeader"),Q=(0,l.up)("q-icon"),K=(0,l.up)("q-input"),E=(0,l.up)("ThongTinTheBHYT"),j=(0,l.up)("q-separator"),O=(0,l.up)("q-list"),P=(0,l.up)("q-card-section"),A=(0,l.up)("q-card-actions"),F=(0,l.up)("q-card"),G=(0,l.up)("q-dialog"),J=(0,l.up)("q-page"),M=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(J,null,{default:(0,l.w5)((()=>[(0,l.Wm)(z,{bgcolor:"bg-orange-4"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{rounded:"",color:"primary",label:"Tháng trước",onClick:t[0]||(t[0]=e=>$.xemThangTruoc()),icon:"arrow_back"}),(0,l.Uk)(" BHYT-"+(0,o.zw)(e.bhyts.filter((e=>1===e.maThuTuc)).length)+" ("+(0,o.zw)(q.tham.toLocaleString())+"-"+(0,o.zw)(q.tongTien.toLocaleString())+"đ) + BHXHTN-"+(0,o.zw)(e.bhyts.filter((e=>0===e.maThuTuc)).length)+" ("+(0,o.zw)(q.thamTN.toLocaleString())+"-"+(0,o.zw)(q.tongTienTN.toLocaleString())+"đ) / Đã nộp BHYT: "+(0,o.zw)(q.daNopBHYT.toLocaleString())+" - Đã nộp BHXH: "+(0,o.zw)(q.daNopBHXH.toLocaleString())+" ",1),(0,l.Wm)(Z,{rounded:"",color:"primary",onClick:t[1]||(t[1]=e=>$.dongBo()),icon:"sync"}),(0,l.Wm)(Z,{rounded:"",color:"primary",onClick:t[2]||(t[2]=e=>$.copyTextToClipboard()),icon:"content_copy"}),(0,l.Wm)(Z,{rounded:"",color:"primary",onClick:t[3]||(t[3]=e=>$.download()),icon:"download"}),(0,l.Wm)(Z,{rounded:"",color:"primary",onClick:$.truocKhiInBHYT,icon:"print"},null,8,["onClick"]),(0,l.Wm)(Z,{rounded:"",color:"primary",onClick:$.truocKhiInBHXH,icon:"print"},null,8,["onClick"])])),_:1}),(0,l._)("div",n,[(0,l.Wm)(K,{outlined:"",modelValue:q.searchText,"onUpdate:modelValue":t[5]||(t[5]=e=>q.searchText=e),onKeyup:t[6]||(t[6]=(0,i.D2)((e=>$.traCuuTheoTen(q.searchText)),["enter"])),placeholder:"Họ và tên",hint:"Nhập họ và tên rồi nhấn Enter để tìm kiếm",dense:""},{append:(0,l.w5)((()=>[""!==q.searchText?((0,l.wg)(),(0,l.j4)(Q,{key:0,name:"close",onClick:t[4]||(t[4]=e=>q.searchText=""),class:"cursor-pointer"})):(0,l.kq)("",!0),(0,l.Wm)(Q,{name:"search"})])),_:1},8,["modelValue"])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.bhyts,(e=>((0,l.wg)(),(0,l.j4)(O,{key:e.id},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{bhyt:e},null,8,["bhyt"]),(0,l.Wm)(j,{spaced:"",inset:""})])),_:2},1024)))),128)),(0,l.Wm)(G,{modelValue:q.showDialogBHYT,"onUpdate:modelValue":t[17]||(t[17]=e=>q.showDialogBHYT=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(P,{class:"q-pt-none"},{default:(0,l.w5)((()=>[s,(0,l._)("div",d,[(0,l._)("div",u,[(0,l._)("div",h,[(0,l.Wm)(K,{dense:"",modelValue:q.t500,"onUpdate:modelValue":t[7]||(t[7]=e=>q.t500=e),label:"T500"},null,8,["modelValue"])]),(0,l._)("div",c,[(0,l.Wm)(K,{dense:"",modelValue:q.t200,"onUpdate:modelValue":t[8]||(t[8]=e=>q.t200=e),label:"T200"},null,8,["modelValue"])]),(0,l._)("div",r,[(0,l.Wm)(K,{dense:"",modelValue:q.t100,"onUpdate:modelValue":t[9]||(t[9]=e=>q.t100=e),label:"T100"},null,8,["modelValue"])])]),(0,l._)("div",m,[(0,l._)("div",T,[(0,l.Wm)(K,{dense:"",modelValue:q.t50,"onUpdate:modelValue":t[10]||(t[10]=e=>q.t50=e),label:"T50"},null,8,["modelValue"])]),(0,l._)("div",p,[(0,l.Wm)(K,{dense:"",modelValue:q.t20,"onUpdate:modelValue":t[11]||(t[11]=e=>q.t20=e),label:"T20"},null,8,["modelValue"])]),(0,l._)("div",g,[(0,l.Wm)(K,{dense:"",modelValue:q.t10,"onUpdate:modelValue":t[12]||(t[12]=e=>q.t10=e),label:"T10"},null,8,["modelValue"])])]),(0,l._)("div",y,[(0,l._)("div",H,[(0,l.Wm)(K,{dense:"",modelValue:q.t5,"onUpdate:modelValue":t[13]||(t[13]=e=>q.t5=e),label:"T5"},null,8,["modelValue"])]),(0,l._)("div",w,[(0,l.Wm)(K,{dense:"",modelValue:q.t2,"onUpdate:modelValue":t[14]||(t[14]=e=>q.t2=e),label:"T2"},null,8,["modelValue"])]),(0,l._)("div",D,[(0,l.Wm)(K,{dense:"",modelValue:q.t1,"onUpdate:modelValue":t[15]||(t[15]=e=>q.t1=e),label:"T1"},null,8,["modelValue"])])])])])),_:1}),(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Tổng: "+(0,o.zw)((5e5*q.t500+2e5*q.t200+1e5*q.t100+5e4*q.t50+2e4*q.t20+1e4*q.t10+5e3*q.t5+2e3*q.t2+1e3*q.t1).toLocaleString())+" ",1),V,(0,l.Uk)(" Còn thiếu: "+(0,o.zw)((q.daNopBHYT-(5e5*q.t500+2e5*q.t200+1e5*q.t100+5e4*q.t50+2e4*q.t20+1e4*q.t10+5e3*q.t5+2e3*q.t2+1e3*q.t1)).toLocaleString()),1)])),_:1}),(0,l.Wm)(j),(0,l.Wm)(A,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(Z,{flat:"",color:"primary",round:"",icon:"print",onClick:t[16]||(t[16]=e=>$.print(1))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(G,{modelValue:q.showDialogBHXH,"onUpdate:modelValue":t[28]||(t[28]=e=>q.showDialogBHXH=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{class:"my-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(P,{class:"q-pt-none"},{default:(0,l.w5)((()=>[b,(0,l._)("div",B,[(0,l._)("div",_,[(0,l._)("div",S,[(0,l.Wm)(K,{dense:"",modelValue:q.t500,"onUpdate:modelValue":t[18]||(t[18]=e=>q.t500=e),label:"T500"},null,8,["modelValue"])]),(0,l._)("div",v,[(0,l.Wm)(K,{dense:"",modelValue:q.t200,"onUpdate:modelValue":t[19]||(t[19]=e=>q.t200=e),label:"T200"},null,8,["modelValue"])]),(0,l._)("div",W,[(0,l.Wm)(K,{dense:"",modelValue:q.t100,"onUpdate:modelValue":t[20]||(t[20]=e=>q.t100=e),label:"T100"},null,8,["modelValue"])])]),(0,l._)("div",f,[(0,l._)("div",I,[(0,l.Wm)(K,{dense:"",modelValue:q.t50,"onUpdate:modelValue":t[21]||(t[21]=e=>q.t50=e),label:"T50"},null,8,["modelValue"])]),(0,l._)("div",X,[(0,l.Wm)(K,{dense:"",modelValue:q.t20,"onUpdate:modelValue":t[22]||(t[22]=e=>q.t20=e),label:"T20"},null,8,["modelValue"])]),(0,l._)("div",k,[(0,l.Wm)(K,{dense:"",modelValue:q.t10,"onUpdate:modelValue":t[23]||(t[23]=e=>q.t10=e),label:"T10"},null,8,["modelValue"])])]),(0,l._)("div",C,[(0,l._)("div",N,[(0,l.Wm)(K,{dense:"",modelValue:q.t5,"onUpdate:modelValue":t[24]||(t[24]=e=>q.t5=e),label:"T5"},null,8,["modelValue"])]),(0,l._)("div",L,[(0,l.Wm)(K,{dense:"",modelValue:q.t2,"onUpdate:modelValue":t[25]||(t[25]=e=>q.t2=e),label:"T2"},null,8,["modelValue"])]),(0,l._)("div",U,[(0,l.Wm)(K,{dense:"",modelValue:q.t1,"onUpdate:modelValue":t[26]||(t[26]=e=>q.t1=e),label:"T1"},null,8,["modelValue"])])])])])),_:1}),(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Tổng: "+(0,o.zw)((5e5*q.t500+2e5*q.t200+1e5*q.t100+5e4*q.t50+2e4*q.t20+1e4*q.t10+5e3*q.t5+2e3*q.t2+1e3*q.t1).toLocaleString())+" ",1),x,(0,l.Uk)(" Còn thiếu: "+(0,o.zw)((q.daNopBHXH-(5e5*q.t500+2e5*q.t200+1e5*q.t100+5e4*q.t50+2e4*q.t20+1e4*q.t10+5e3*q.t5+2e3*q.t2+1e3*q.t1)).toLocaleString()),1)])),_:1}),(0,l.Wm)(j),(0,l.Wm)(A,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(Z,{flat:"",color:"primary",round:"",icon:"print",onClick:t[27]||(t[27]=e=>$.print(0))},null,512),[[M]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var q=a(3100),$=a(4881),Z=a(4026),z=a(4328);const Q={components:{ThongTinTheBHYT:$.Z,ListHeader:Z.Z},data(){return{searchText:"",coTheIn:1,tham:0,thamTN:0,dsTheBHYT:[],dsSoBHXH:[],tongTien:0,tongTienTN:0,thangTruoc:0,daNopBHYT:0,daNopBHXH:0,ngay:0,showDialogBHYT:!1,showDialogBHXH:!1,t500:"",t200:"",t100:"",t50:"",t20:"",t10:"",t5:"",t2:"",t1:""}},computed:{...(0,q.Se)("auth",["isLogin","userDetails"]),...(0,q.Se)("bhyts",["bhyts","soDienThoais"])},methods:{...(0,q.nv)("bhyts",["hoSoDaXuLy","daXyLy","XuatD03OrD05Excel"]),async truocKhiInBHYT(){await this.hoSoDaXuLy({mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId}),this.coTheIn=0,this.showDialogBHYT=!0,z.Z.create({type:"positive",message:"Đang xuất C17 BHYT, vui lòng đợi ...!"}),await this.daXyLy(this.bhyts.filter((e=>e.userId===this.userDetails.id&&4===e.trangThaiHoSo&&1===e.maThuTuc&&(new Date).getDate()-this.ngay===new Date(e.ngayNopHoSo).getDate()))),this.coTheIn=1,this.printC17(1)},async truocKhiInBHXH(){await this.hoSoDaXuLy({mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId}),this.coTheIn=0,this.showDialogBHXH=!0,z.Z.create({type:"positive",message:"Đang xuất C17 BHXH tự nguyện, vui lòng đợi ...!"}),await this.daXyLy(this.bhyts.filter((e=>e.userId===this.userDetails.id&&4===e.trangThaiHoSo&&0===e.maThuTuc&&(new Date).getDate()-this.ngay===new Date(e.ngayNopHoSo).getDate()))),this.coTheIn=1,this.printC17(0)},dongBo(){this.daXyLy(this.bhyts)},traCuuTheoTen(e){this.thangTruoc=parseInt(e),this.xemThangTruoc()},copyTextToClipboard(){navigator.clipboard.writeText([...new Set(this.soDienThoais)].join()).then((function(){z.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){z.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},xemThangTruoc(){this.thangTruoc=this.thangTruoc+1,this.loadData()},sleep(e=3e3){return new Promise((t=>setTimeout(t,e)))},async loadData(){const e=(new Date).getDate();try{await this.hoSoDaXuLy({thangTruoc:this.thangTruoc,mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId})}catch(t){z.Z.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}this.tham=await this.bhyts.filter((e=>e.userId===this.userDetails.id&&[4,8,9].includes(e.trangThaiHoSo)&&1===e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.thamTN=await this.bhyts.filter((e=>e.userId===this.userDetails.id&&[4,8,9].includes(e.trangThaiHoSo)&&0===e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.daNopBHYT=await this.bhyts.filter((t=>t.userId===this.userDetails.id&&[4].includes(t.trangThaiHoSo)&&1===t.maThuTuc&&e-this.ngay===new Date(t.ngayNopHoSo).getDate())).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.daNopBHXH=await this.bhyts.filter((t=>t.userId===this.userDetails.id&&[4].includes(t.trangThaiHoSo)&&0===t.maThuTuc&&e-this.ngay===new Date(t.ngayNopHoSo).getDate())).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.tongTien=await this.bhyts.filter((e=>e.userId!==this.userDetails.id&&[4,8,9].includes(e.trangThaiHoSo)&&1===e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.tongTienTN=await this.bhyts.filter((e=>e.userId!==this.userDetails.id&&[4,8,9].includes(e.trangThaiHoSo)&&0===e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0),this.dsTheBHYT=this.bhyts.filter((e=>e.userId===this.userDetails.id&&4===e.trangThaiHoSo&&1===e.maThuTuc&&(new Date).getDate()-this.ngay===new Date(e.ngayNopHoSo).getDate())).map((e=>e.maSoBhxh)).join(),this.dsSoBHXH=this.bhyts.filter((e=>e.userId===this.userDetails.id&&4===e.trangThaiHoSo&&0===e.maThuTuc&&(new Date).getDate()-this.ngay===new Date(e.ngayNopHoSo).getDate())).map((e=>e.maSoBhxh)).join(),console.log(this.dsSoBHXH)},async download(){const e=await this.XuatD03OrD05Excel(this.bhyts.filter((e=>e.userId===this.userDetails.id)).map((e=>e.transactionId)));e.forEach((e=>{let t=document.createElement("a");t.href=`data:${e.fileType};base64,${e.base64}`,t.download=e.fileName,t.click()}))},async print(e){let t=document.createElement("a");t.target="_blank";let a=`https://app.hotham.vn/nop-bhyt/${(new Date).toISOString().slice(0,10)}/pdf?`;this.daNopBHYT&&1===e&&(a+=`tienBHYT=${this.daNopBHYT}`),this.daNopBHXH&&0===e&&(a+=`&tienBHXH=${this.daNopBHXH}`),this.t500&&(a+=`&t500=${this.t500}`),this.t200&&(a+=`&t200=${this.t200}`),this.t100&&(a+=`&t100=${this.t100}`),this.t50&&(a+=`&t50=${this.t50}`),this.t20&&(a+=`&t20=${this.t20}`),this.t10&&(a+=`&t10=${this.t10}`),this.t5&&(a+=`&t5=${this.t5}`),this.t2&&(a+=`&t2=${this.t2}`),this.t1&&(a+=`&t1=${this.t1}`),t.href=a,t.click()},async printC17(e){let t=document.createElement("a");t.target="_blank";let a=`https://app.hotham.vn/mau-c17/${(new Date).toISOString().slice(0,10)}/pdf?tongTien=${1===e?this.daNopBHYT:this.daNopBHXH}&maSoBhxhs=${1===e?this.dsTheBHYT:this.dsSoBHXH}`;t.href=a,t.click()}},async mounted(){this.$route.query.ngay&&(this.ngay=parseInt(this.$route.query.ngay)),this.$route.query.thang&&(this.thangTruoc=parseInt(this.$route.query.thang)),await this.sleep(2e3),this.loadData()}};var K=a(1639),E=a(9885),j=a(4455),O=a(7471),P=a(2857),A=a(3246),F=a(2218),G=a(2074),J=a(4458),M=a(3190),R=a(1821),ee=a(2146),te=a(9984),ae=a.n(te);const le=(0,K.Z)(Q,[["render",Y]]),oe=le;ae()(Q,"components",{QPage:E.Z,QBtn:j.Z,QInput:O.Z,QIcon:P.Z,QList:A.Z,QSeparator:F.Z,QDialog:G.Z,QCard:J.Z,QCardSection:M.Z,QCardActions:R.Z}),ae()(Q,"directives",{ClosePopup:ee.Z})}}]);