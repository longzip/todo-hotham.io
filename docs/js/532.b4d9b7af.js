"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[532],{2960:(e,n,o)=>{o.r(n),o.d(n,{default:()=>$});var a=o(9835),t=o(6970),s=o(1957);const i={class:"q-pa-md"},l={class:"q-gutter-y-md column"},h=["href"],d={class:"text-strike"},u={class:"text-bold"},r={class:"text-strike"},c={class:"text-h6"},g=["href"],p={class:"text-h6"},m={class:"row items-center justify-end"};function T(e,n,o,T,w,C){const D=(0,a.up)("q-btn"),y=(0,a.up)("ListHeader"),k=(0,a.up)("q-icon"),f=(0,a.up)("q-input"),W=(0,a.up)("q-item-label"),S=(0,a.up)("q-item-section"),_=(0,a.up)("q-badge"),v=(0,a.up)("q-item"),N=(0,a.up)("q-separator"),H=(0,a.up)("q-list"),V=(0,a.up)("q-card-section"),b=(0,a.up)("q-card-actions"),I=(0,a.up)("q-card"),L=(0,a.up)("q-dialog"),Z=(0,a.up)("q-date"),O=(0,a.up)("q-popup-proxy"),P=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(y,{bgcolor:"bg-orange-4"},{default:(0,a.w5)((()=>[(0,a.Uk)("KHL "+(0,t.zw)(e.doanhThu.toLocaleString())+"đ / "+(0,t.zw)(e.tongSoBuuGui)+" bưu gửi ",1),(0,a.Wm)(D,{rounded:"",color:"primary",onClick:n[0]||(n[0]=n=>e.copySoDienThoaiToClipboard()),icon:"content_copy"}),(0,a.Wm)(D,{rounded:"",color:"primary",onClick:n[1]||(n[1]=n=>e.copyChiCODToClipboard()),icon:"done_all"})])),_:1}),(0,a._)("div",l,[(0,a.Wm)(f,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":n[3]||(n[3]=n=>e.searchText=n),placeholder:"Từ khóa",hint:`Cước còn: ${(e.doanhThu-e.tongCuocDaThanhToan).toLocaleString()}đ / đã trừ: ${e.tongCuocDaThanhToan.toLocaleString()}đ / `,onKeyup:n[4]||(n[4]=(0,s.D2)((n=>e.traCuu()),["enter"])),dense:""},{append:(0,a.w5)((()=>[""!==e.searchText?((0,a.wg)(),(0,a.j4)(k,{key:0,name:"close",onClick:n[2]||(n[2]=n=>e.searchText=""),class:"cursor-pointer"})):(0,a.kq)("",!0),(0,a.Wm)(k,{name:"search"})])),_:1},8,["modelValue","hint"])]),(0,a.Wm)(H,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.khls.sort((function(e,n){return n.soLuong-e.soLuong})),(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.senderPhone},[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(n.senderName)+" ",1)])),_:2},1024),(0,a.Wm)(W,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a._)("a",{href:`tel:${n.senderPhone}`},(0,t.zw)(n.senderPhone),9,h)])),_:2},1024),(0,a.Wm)(W,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(n.senderAdd),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(S,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{name:"info",onClick:o=>e.showItems(n.senderPhone),class:"cursor-pointer"},null,8,["onClick"]),(0,a.Uk)(),(0,a.Wm)(_,{color:"teal",label:n.soLuong},null,8,["label"])])),_:2},1024),(0,a.Wm)(k,{name:"access_time",onClick:o=>e.showKHL(n.senderPhone)},null,8,["onClick"]),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("strong",null,"COD: "+(0,t.zw)(parseInt(n.tongCOD-n.soTienDaChiCOD).toLocaleString()),1),(0,a.Uk)(),(0,a._)("span",d,(0,t.zw)(parseInt(n.tongCOD).toLocaleString()),1)])),_:2},1024),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a._)("strong",u,"Còn nợ: "+(0,t.zw)(parseInt(n.tongCuoc-n.soTienDaTruCongNo).toLocaleString()),1),(0,a.Uk)(),(0,a._)("span",r,(0,t.zw)(parseInt(n.soTienDaTruCongNo).toLocaleString()),1)])),_:2},1024),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Tổng cước: "+(0,t.zw)(parseInt(n.tongCuoc).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(N,{spaced:"",inset:""})])))),128))])),_:1}),(0,a.Wm)(L,{modelValue:e.showSelectedItems,"onUpdate:modelValue":n[5]||(n[5]=n=>e.showSelectedItems=n),"full-height":""},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{class:"column full-height"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Uk)((0,t.zw)(e.khl.hoTen)+" ",1),(0,a.Wm)(_,{label:e.selectItems.length},null,8,["label"])])])),_:1}),(0,a.Wm)(V,{class:"col q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{bordered:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.allCods.filter((n=>n.soDienThoai==e.khl.soDienThoai)),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{color:"primary",name:"paid"})])),_:1}),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{overline:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.tenNguoiHuong),1)])),_:2},1024),(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.soTaiKhoanNganHang)+"-"+(0,t.zw)(e.tenNganHang),1)])),_:2},1024),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Đã chi: "+(0,t.zw)(parseInt(e.soTienCODvePaypost-e.soTienBuTruCongNo).toLocaleString()),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(S,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(e.ngayLamViec),1)])),_:2},1024),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("COD: "+(0,t.zw)(parseInt(e.soTienCODvePaypost).toLocaleString()),1)])),_:2},1024),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Cước:"+(0,t.zw)(parseInt(e.soTienBuTruCongNo).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128)),(0,a.Wm)(N,{spaced:"",inset:"item"}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.selectItems,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n.id},[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(n.senderName),1)])),_:2},1024),(0,a.Wm)(W,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a._)("a",{href:`tel:${n.senderPhone}`},(0,t.zw)(n.senderPhone),9,g)])),_:2},1024),(0,a.Wm)(W,{caption:"",lines:"2"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(n.contentNote),1)])),_:2},1024)])),_:2},1024),(0,a.Wm)(S,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(n.ttNumber),1)])),_:2},1024),(0,a.Wm)(k,{name:"content_copy",onClick:o=>e.copyTextToClipboard(n.ttNumber)},null,8,["onClick"]),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Số tiền: "+(0,t.zw)(parseInt(n.totalFeeSpecial).toLocaleString()),1)])),_:2},1024),(0,a.Wm)(W,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,t.zw)(new Date(n.updatedDate).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.Wm)(N,{spaced:"",inset:""})])))),128))])),_:1})])),_:1}),(0,a.Wm)(b,{align:"right",class:"bg-white text-teal"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(D,{flat:"",label:"OK"},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(L,{modelValue:e.showDialog,"onUpdate:modelValue":n[18]||(n[18]=n=>e.showDialog=n),"full-height":""},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{class:"column full-height"},{default:(0,a.w5)((()=>[(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[(0,a._)("div",p,(0,t.zw)(e.khl.hoTen)+" - "+(0,t.zw)(e.khl.soDienThoai),1)])),_:1}),(0,a.Wm)(V,{class:"col q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{modelValue:e.khl.hoTen,"onUpdate:modelValue":n[6]||(n[6]=n=>e.khl.hoTen=n),label:"Họ và tên"},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:e.khl.maCRM,"onUpdate:modelValue":n[8]||(n[8]=n=>e.khl.maCRM=n),label:"Mã CRM"},{append:(0,a.w5)((()=>[(0,a.Wm)(k,{name:"content_copy",onClick:n[7]||(n[7]=n=>e.copyTextDienThoaiToClipboard(e.khl.maCRM))})])),_:1},8,["modelValue"]),(0,a.Wm)(f,{modelValue:e.khl.hopDong,"onUpdate:modelValue":n[9]||(n[9]=n=>e.khl.hopDong=n),label:"Hợp đồng DVBC"},null,8,["modelValue"]),(0,a.Wm)(f,{modelValue:e.khl.ngayHopDong,"onUpdate:modelValue":n[11]||(n[11]=n=>e.khl.ngayHopDong=n),label:"Ngày hợp đồng",mask:"date",rules:["date"],dense:e.dense},{append:(0,a.w5)((()=>[(0,a.Wm)(k,{name:"event",class:"cursor-pointer"},{default:(0,a.w5)((()=>[(0,a.Wm)(O,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{modelValue:e.khl.ngayHopDong,"onUpdate:modelValue":n[10]||(n[10]=n=>e.khl.ngayHopDong=n)},{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.wy)((0,a.Wm)(D,{label:"Đóng",color:"primary",flat:"",dense:e.dense},null,8,["dense"]),[[P]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","dense"]),(0,a.Wm)(f,{modelValue:e.khl.tenNguoiHuong,"onUpdate:modelValue":n[12]||(n[12]=n=>e.khl.tenNguoiHuong=n),label:"Tên người hưởng",dense:e.dense},null,8,["modelValue","dense"]),(0,a.Wm)(f,{modelValue:e.khl.soTaiKhoanNganHang,"onUpdate:modelValue":n[13]||(n[13]=n=>e.khl.soTaiKhoanNganHang=n),label:"Số tài khoản ngân hàng",dense:e.dense},null,8,["modelValue","dense"]),(0,a.Wm)(f,{modelValue:e.khl.tenNganHang,"onUpdate:modelValue":n[14]||(n[14]=n=>e.khl.tenNganHang=n),label:"Tên ngân hàng",dense:e.dense},null,8,["modelValue","dense"]),(0,a.Wm)(f,{modelValue:e.khl.soTienBuTruCongNo,"onUpdate:modelValue":n[15]||(n[15]=n=>e.khl.soTienBuTruCongNo=n),label:"Số tiền trừ công nợ",dense:e.dense},null,8,["modelValue","dense"]),(0,a.Wm)(f,{modelValue:e.khl.soTienCODvePaypost,"onUpdate:modelValue":n[17]||(n[17]=n=>e.khl.soTienCODvePaypost=n),label:"Số tiền COD về Paypost",dense:e.dense},{after:(0,a.w5)((()=>[(0,a.Wm)(D,{round:"",dense:"",flat:"",icon:"send",onClick:n[16]||(n[16]=n=>e.updateKHL(e.khl))})])),_:1},8,["modelValue","dense"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}o(9665);var w=o(9981),C=o.n(w),D=o(4328),y=o(6950),k=o(8359),f=o(4026);const W=(0,a.aZ)({components:{ListHeader:f.Z},name:"KHLPage",data(){const[e,n,o]=(new Date).toISOString().slice(0,10).split("-");return{ngayLamViec:[e,n,o].join("/"),showDialog:!1,showSelectedItems:!1,ngay:o,thang:n,nam:e,searchText:[n,e].join("/"),tokenFe:"",dsDonHang:[],khls:[],tongSoBuuGui:0,doanhThu:0,tongCuocDaThanhToan:0,khl:{hoTen:"Nguyễn Văn Thìn",soDienThoai:"0978333963",hopDong:"Mlinh-191022-622000",ngayHopDong:"2022/10/19",soTienCODvePaypost:4e6,soTienBuTruCongNo:77500,soTienDaTruCongNo:0,tenNguoiHuong:"Nguyễn Văn Thìn",soTaiKhoanNganHang:"1618081988",tenNganHang:"MB",maCRM:"14200A04000622000"},selectItems:[],cods:[],allCods:[]}},methods:{sleep(){return new Promise((e=>setTimeout(e,1500)))},async login(){var e=JSON.stringify({username:"142010_THAMHT",password:"Abc@123456789",ip:"",random:.8677049060452371}),n={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/api/auth/signinKhl",headers:{capikey:"19001235","Content-Type":"application/json"},data:e};const{data:{tokenFe:o}}=await C().post("https://api-portalkhl.vnpost.vn/api/auth/signinKhl",e,n);this.tokenFe=o},async loadData(e=0){this.dsDonHang=[],this.tokenFe||await this.login();var n=JSON.stringify({orgCode:"142010",tuNgay:[1,parseInt(this.thang-e||12),this.nam].join("/"),denNgay:new Date(this.nam,parseInt(this.thang-e),1).toISOString().slice(0,10).split("-").reverse().join("/"),pageNum:0,pageSize:5e3,sourceSystem:"KHL"}),o={method:"post",maxBodyLength:1/0,url:"https://api-portalkhl.vnpost.vn/khl/getItemDtl",headers:{Authorization:`Bearer ${this.tokenFe}`,"Content-Type":"application/json"},data:n};y.Z.show({spinner:k.Z,spinnerSize:"100px"});const{data:[a,t]}=await C()(o);this.tongSoBuuGui=a,this.doanhThu=t.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0),y.Z.hide(),this.dsDonHang=t;const s=new Map,i=t.map((({senderPhone:e,senderName:n,senderAdd:o})=>({senderPhone:e,senderName:n,senderAdd:o})));for(let l=0;l<i.length;l++){const e=i[l];if(!s.has(e.senderPhone)){const n=t.filter((n=>n.senderPhone===e.senderPhone));s.set(e.senderPhone,{...e,soLuong:n.length,tongCuoc:n.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0),tongCOD:n.filter((e=>e.codAmount)).reduce(((e,{codAmount:n})=>e+parseInt(n)),0),soTienDaTruCongNo:this.tongSoTienBuTruCongNoDaTru(e.senderPhone),soTienDaChiCOD:this.tongSoTienDaChiCOD(e.senderPhone)})}}this.khls=[...s.values()]},async traCuu(){const[e,n]=this.searchText.split("/");this.thang=e,this.nam=n,this.loadData()},async findItems(e){return this.dsDonHang.filter((n=>n.senderPhone===e))},async tongCuoc(e){return e.reduce(((e,{totalFeeSpecial:n})=>e+parseInt(n)),0)},async tongSoTienBuTruCongNo(e){const n=await this.tongCuoc(await this.findItems(e))-this.cods.reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0);return parseInt(n).toLocaleString()},tongSoTienBuTruCongNoDaTru(e){const n=this.allCods.filter((n=>n.soDienThoai==e)).reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0);return n},tongSoTienDaChiCOD(e){const n=this.allCods.filter((n=>n.soDienThoai==e)).reduce(((e,{soTienCODvePaypost:n})=>e+parseInt(n)),0);return n},async updateKHL({soDienThoai:e,hoTen:n,hopDong:o,ngayHopDong:a,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:i,maCRM:l,soTienCODvePaypost:h,soTienBuTruCongNo:d}){try{const{data:u}=await this.$api.post("https://app.hotham.vn/api/cods",{soDienThoai:e,hoTen:n,hopDong:o,ngayHopDong:a,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:i,maCRM:l,soTienCODvePaypost:h.replaceAll(".",""),soTienBuTruCongNo:d.replaceAll(".",""),ngayLamViec:this.ngayLamViec}),r=this.cods.find((n=>n.soDienThoai===e&&new Date(n.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10)));r?Object.assign(r,u):this.allCods.push(u),await this.$api.put(`https://app.hotham.vn/api/khls/${e}`,{hoTen:n,hopDong:o,ngayHopDong:a,tenNguoiHuong:t,soTaiKhoanNganHang:s,tenNganHang:i,maCRM:l}),this.showDialog=!1,D.Z.create({type:"positive",message:"Đã ghi nhận thành công!"})}catch(u){D.Z.create({type:"negative",message:"Không lưu được thông tin khách hàng!"+err})}},async loadKHL(e){try{const{data:n}=await this.$api.get(`https://app.hotham.vn/api/khls/${e}`);this.khl=n}catch(n){D.Z.create({type:"negative",message:"Lỗi hệ thống!"+err})}},async loadCods(e){try{y.Z.show({spinner:k.Z,spinnerSize:"100px"});const{data:n}=await this.$api.get(`https://app.hotham.vn/api/cods?name=${e}`);this.cods=n,y.Z.hide()}catch(n){D.Z.create({type:"negative",message:"Lỗi hệ thống!"+err})}},async loadAllCods(){const{data:e}=await this.$api.get("https://app.hotham.vn/api/cods");this.allCods=e,this.tongCuocDaThanhToan=this.allCods.reduce(((e,{soTienBuTruCongNo:n})=>e+parseInt(n)),0)},async showKHL(e){await this.loadCods(e),await this.loadKHL(e),this.khl.soTienBuTruCongNo=await this.tongSoTienBuTruCongNo(e);const n=this.cods.find((n=>n.soDienThoai===e&&new Date(n.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10)));n&&(this.khl.soTienCODvePaypost=parseInt(n.soTienCODvePaypost).toLocaleString(),this.khl.soTienBuTruCongNo=parseInt(n.soTienBuTruCongNo).toLocaleString()),this.showDialog=!0},async showItems(e){await this.loadKHL(e),this.selectItems=this.dsDonHang.filter((n=>n.senderPhone===e)),this.showSelectedItems=!0},copyTextToClipboard(e){navigator.clipboard.writeText(`Để theo dõi định vị bưu gửi https://www.hotham.vn/tra-cuu-hang-buu-dien?q=${e}. (Bạn chỉ cần bấm vào link)`).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copySoDienThoaiToClipboard(){navigator.clipboard.writeText(this.khls.map((e=>e.senderPhone)).join()).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},copyTextDienThoaiToClipboard(e){navigator.clipboard.writeText(e).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},async copyChiCODToClipboard(){await this.loadAllCods(),navigator.clipboard.writeText(`${this.allCods.filter((e=>new Date(e.ngayLamViec).toISOString().slice(0,10)===(new Date).toISOString().slice(0,10))).map((({hoTen:e,hopDong:n,ngayHopDong:o,soTienCODvePaypost:a,soTienBuTruCongNo:t,tenNguoiHuong:s,soTaiKhoanNganHang:i,tenNganHang:l,maCRM:h})=>[e,n,o,a,t,a-t,s,i,l,,h].join("\t"))).join("\r\n")}\n`).then((function(){D.Z.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){D.Z.create({type:"negative",message:"Không thực hiện được!"+e})}))},async khoiTao(){await this.loadAllCods(),this.ngay<3?(await this.loadData(1),this.searchText=[this.thang-1||12,this.nam].join("/")):await this.loadData()}},mounted(){this.khoiTao()}});var S=o(1639),_=o(4455),v=o(7471),N=o(2857),H=o(2765),V=o(7088),b=o(3246),I=o(490),L=o(1233),Z=o(3115),O=o(990),P=o(2218),B=o(2074),U=o(4458),z=o(3190),K=o(1821),x=o(2146),q=o(9984),Q=o.n(q);const A=(0,S.Z)(W,[["render",T]]),$=A;Q()(W,"components",{QBtn:_.Z,QInput:v.Z,QIcon:N.Z,QPopupProxy:H.Z,QDate:V.Z,QList:b.Z,QItem:I.Z,QItemSection:L.Z,QItemLabel:Z.Z,QBadge:O.Z,QSeparator:P.Z,QDialog:B.Z,QCard:U.Z,QCardSection:z.Z,QCardActions:K.Z}),Q()(W,"directives",{ClosePopup:x.Z})}}]);