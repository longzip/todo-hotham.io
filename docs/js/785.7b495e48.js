"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[785],{6785:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var n=a(1758),l=a(9104),i=a(8790);const o={class:"row"},s={class:"col-7"},h={class:"col-4"},u={class:"col-1"},c=(0,n.Lk)("br",null,null,-1),r=(0,n.Lk)("br",null,null,-1);function d(e,t,a,d,g,m){const T=(0,n.g2)("q-input"),b=(0,n.g2)("q-select"),k=(0,n.g2)("q-icon"),p=(0,n.g2)("q-item-section"),B=(0,n.g2)("q-item"),y=(0,n.g2)("q-list"),f=(0,n.g2)("q-menu"),H=(0,n.g2)("q-card-section"),C=(0,n.g2)("q-badge"),X=(0,n.g2)("q-item-label"),D=(0,n.g2)("ThongTinTheBHYT"),_=(0,n.g2)("q-separator"),v=(0,n.g2)("q-card"),W=(0,n.g2)("BhytUpdateDialog"),N=(0,n.g2)("q-dialog"),F=(0,n.g2)("q-page"),S=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(F,{padding:""},{default:(0,n.k6)((()=>[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.bF)(H,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",o,[(0,n.Lk)("div",s,[(0,n.bF)(T,{label:"Tìm kiếm",outlined:"",modelValue:g.searchText,"onUpdate:modelValue":[t[0]||(t[0]=e=>g.searchText=e),e.searchBhyts],debounce:"900",ref:"inputSearch",onKeyup:t[1]||(t[1]=(0,l.jR)((e=>m.timKiem(g.searchText)),["enter"])),dense:""},null,8,["modelValue","onUpdate:modelValue"])]),(0,n.Lk)("div",h,[(0,n.bF)(b,{modelValue:g.selectedUser,"onUpdate:modelValue":[t[2]||(t[2]=e=>g.selectedUser=e),e.selectUser],options:m.userOptions,label:"Lọc theo người dùng",outlined:"","emit-value":"","map-options":"",dense:""},null,8,["modelValue","options","onUpdate:modelValue"])]),(0,n.Lk)("div",u,[(0,n.eW)(" Menu "),(0,n.bF)(k,{name:"expand_more",dense:""}),e.userDetails.isPro?((0,n.uX)(),(0,n.Wv)(f,{key:0,"touch-position":""},{default:(0,n.k6)((()=>[(0,n.bF)(y,{style:{"min-width":"100px"}},{default:(0,n.k6)((()=>[(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBhytByName},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tìm tất cả")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.printPhuLucThanhVienHGD},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("In phụ lục thành viên HGD")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[3]||(t[3]=e=>m.loadBhytByUserName(1))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đã thu tiền BHYT")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[4]||(t[4]=e=>m.loadBhytByUserName(0))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đã thu tiền BHXH")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.taiTucBHYT1thang},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục 1 tháng (Me)")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.taiTucBHYT2thang},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục 2 tháng (Me)")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[5]||(t[5]=e=>m.loadBhyts({thang:1}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục 1 tháng (All)")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[6]||(t[6]=e=>m.loadBhyts({thang:2}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục 2 tháng (All)")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[7]||(t[7]=t=>m.loadBHXHTNs({tienNop:1,taiTucBHXH:1,userName:e.userDetails.id}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục BHXH (1 tháng)")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[8]||(t[8]=t=>m.loadBHXHTNs({tienNop:1,userName:e.userDetails.id}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("BHXH (me)")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[9]||(t[9]=t=>m.loadBHXHTNs({tienNop:1,maXa:e.userDetails.maXa}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("BHXH (All)")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadTaiTucBHYTBT},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("BHYT bổ trợ")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBhytsHetHan},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đã hết hạn")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBhytsDisable},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đã liên hệ")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBhytsCompleted},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đánh dấu sao")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBhytThang},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Biên thu BHYT")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBHXHThang},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Biên thu BHXH TN")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBaoCaoChiTietGiaoDich},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Báo cáo Chi Tiết Giao Dịch")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.inC17},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("In C17")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.printDanhSachTraThe},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("In Danh sách trả thẻ")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.copyMaSoBhxhToClipboard},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Copy tất cả mã số BHXH")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:e.copyHoTenToClipboard},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Copy tất cả họ tên")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.copySoDienThoaiToClipboard},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Copy tất cả số điện thoại")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.copyNamePhoneClipboard},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Lưu danh bạ")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:e.batTatRemove},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tắt/Bật danh sách")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[10]||(t[10]=e=>m.timMoi(g.searchText))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tìm mới")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadBhytByNamSinh},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tìm theo năm sinh")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadTaiTucBHYT},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục BHYT (ssm)")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:m.loadTaiTucBHXH},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục BHXH (ssm)")])),_:1})])),_:1},8,["onClick"])),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[11]||(t[11]=t=>e.capNhatBHXHTN(g.searchText))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đồng bộ BHXH TN")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[12]||(t[12]=t=>e.resetBhyt(g.searchText?e.bhyts.filter((e=>e.userName!==g.searchText)):[]))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Xóa danh sách")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[13]||(t[13]=t=>e.resetBhyt(g.searchText?e.bhyts.filter((e=>e.userName===g.searchText)):[]))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Giữ lại danh sách")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[14]||(t[14]=t=>e.resetBhyt(g.searchText?e.bhyts.filter((e=>!(e.soDienThoai||e.soDienThoai2))):[]))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Thiếu số điện thoại")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[15]||(t[15]=t=>m.loadBHXHTNs({isCMND:1,maXa:e.userDetails.maXa}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Thiếu CCCD")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[16]||(t[16]=e=>m.loadBhytByUserNameTaiTuc())},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Tái tục")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[17]||(t[17]=t=>e.getBhyts({isPhone:!0,maXa:e.userDetails.maXa,name:g.searchText}))},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Có số điện thoại")])),_:1})])),_:1})),[[S]]),(0,n.bo)(((0,n.uX)(),(0,n.Wv)(B,{clickable:"",onClick:t[18]||(t[18]=e=>m.loadBhytByUserName())},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.eW)("Đã thu tiền")])),_:1})])),_:1})),[[S]])])),_:1})])),_:1})):(0,n.Q3)("",!0)])])])),_:1}),(0,n.bF)(H,null,{default:(0,n.k6)((()=>[(0,n.bF)(y,null,{default:(0,n.k6)((()=>[e.userDetails.isPro?((0,n.uX)(),(0,n.Wv)(X,{key:0,header:""},{default:(0,n.k6)((()=>[(0,n.eW)(" Số lượng: "),(0,n.bF)(C,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,i.v_)(e.filteredBhyts.length),1)])),_:1}),(0,n.eW)("/Trung bình đóng: "+(0,i.v_)(parseInt(m.tongTienBHYT/(e.filteredBhyts.length||1)).toLocaleString())+"/BHYT: "+(0,i.v_)(parseInt((m.tongTienBHYT/(e.filteredBhyts.length||1)*.0264).toFixed(0)).toLocaleString())+"đ/thẻ",1),c,(0,n.eW)(" Tổng tiền: "),(0,n.bF)(C,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,i.v_)(parseInt(m.tongTienBHYT).toLocaleString()),1)])),_:1}),(0,n.eW)(" : BHYT: "+(0,i.v_)(parseInt((.0264*m.tongTienBHYT).toFixed(0)).toLocaleString())+"đ ",1),r,(0,n.Lk)("span",null,[(0,n.eW)("BHXHTN "+(0,i.v_)(e.tongSoBHXH)+": ",1),(0,n.bF)(C,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,i.v_)(parseInt(e.tongTienBHXH).toLocaleString()),1)])),_:1}),(0,n.eW)(" : BHXH: "+(0,i.v_)(parseInt((.049*e.tongTienBHXH).toFixed(0)).toLocaleString())+"đ",1)]),(0,n.Lk)("span",null," + BHXH (năm): "+(0,i.v_)(parseInt(e.tongMucDongBHXH).toLocaleString())+"đ : BHXH: "+(0,i.v_)(parseInt((.049*(.22*e.tongMucDongBHXH-66e3*e.tongSoBHXH)*12).toFixed(0)).toLocaleString())+"đ/năm",1)])),_:1})):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.filteredBhyts,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id},[(0,n.bF)(D,{bhyt:e},null,8,["bhyt"]),(0,n.bF)(_,{spaced:"",inset:""})])))),128))])),_:1})])),_:1})])),_:1}),(0,n.bF)(N,{modelValue:g.dialogShow,"onUpdate:modelValue":t[19]||(t[19]=e=>g.dialogShow=e),persistent:""},{default:(0,n.k6)((()=>[(0,n.bF)(W)])),_:1},8,["modelValue"])])),_:1})}a(3009),a(3647),a(7458),a(1807),a(5512),a(5263),a(9875),a(4559);var g=a(6980),m=a(1348),T=a(1627);const b=(0,n.Lk)("div",{class:"text-h6"},"Cập nhật thông tin BHYT",-1);function k(e,t,a,l,i,o){const s=(0,n.g2)("q-space"),h=(0,n.g2)("q-btn"),u=(0,n.g2)("q-card-section"),c=(0,n.g2)("q-input"),r=(0,n.g2)("q-form"),d=(0,n.g2)("q-card"),g=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.Wv)(d,null,{default:(0,n.k6)((()=>[(0,n.bF)(u,{class:"row items-center q-pb-lg"},{default:(0,n.k6)((()=>[b,(0,n.bF)(s),(0,n.bo)((0,n.bF)(h,{icon:"close",flat:"",round:"",dense:""},null,512),[[g]])])),_:1}),(0,n.bF)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(r,{onSubmit:o.submit,class:"q-gutter-md"},{default:(0,n.k6)((()=>[(0,n.bF)(c,{modelValue:o.form.maPhuongThucDong,"onUpdate:modelValue":t[0]||(t[0]=e=>o.form.maPhuongThucDong=e),label:"Phương thức đóng (1,3,6,12 tháng)"},null,8,["modelValue"]),(0,n.bF)(c,{modelValue:o.form.mucDong,"onUpdate:modelValue":t[1]||(t[1]=e=>o.form.mucDong=e),label:"Mức thu nhập lựa chọn"},null,8,["modelValue"]),(0,n.bF)(c,{modelValue:o.form.denThangDt,"onUpdate:modelValue":t[2]||(t[2]=e=>o.form.denThangDt=e),type:"date",label:"Đến tháng"},null,8,["modelValue"]),(0,n.bF)(h,{type:"submit",label:"Lưu",color:"primary"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})}const p={name:"BhytUpdateDialog",computed:{...(0,g.L8)("bhyts",["getCurrentBhyt"]),form(){return{maSoBhxh:this.getCurrentBhyt.maSoBhxh,mucDong:this.getCurrentBhyt.mucDong,maPhuongThucDong:this.getCurrentBhyt.maPhuongThucDong,denThangDt:this.getCurrentBhyt.denThangDt}}},methods:{...(0,g.i0)("bhyts",["setCurrentBhyt","updateDenNgayBHXH"]),async submit(){await this.updateDenNgayBHXH(this.form),this.setCurrentBhyt(null)}}};var B=a(2807),y=a(3316),f=a(4189),H=a(3676),C=a(1693),X=a(9200),D=a(9270),_=a(8672),v=a(8582),W=a.n(v);const N=(0,B.A)(p,[["render",k]]),F=N;W()(p,"components",{QCard:y.A,QCardSection:f.A,QSpace:H.A,QBtn:C.A,QForm:X.A,QInput:D.A}),W()(p,"directives",{ClosePopup:_.A});const S={components:{ThongTinTheBHYT:m.A,BhytUpdateDialog:F},data(){return{searchText:"",tuNgayDenNgay:"",soBienLai:"",selectedUser:null,dialogShow:!1}},computed:{...(0,g.L8)("bhyts",["bhyts","filteredBhyts","tongTienBHXH","tongMucDongBHXH","tongSoBHXH","getCurrentBhyt"]),...(0,g.aH)("auth",["userDetails"]),userOptions(){return[{label:"Tất cả",value:null},{label:this.userDetails?.id,value:this.userDetails?.id},{label:this.userDetails?.maNhanVienThu?.slice(0,4),value:this.userDetails?.maNhanVienThu}]},tongTienBHYT(){return 0===this.filteredBhyts.length?0:this.filteredBhyts.map((e=>e.tongTien||0)).reduce(((e,t)=>e+parseInt(t)),0)}},methods:{...(0,g.i0)("bhyts",["getBhyts","resetBhyt","traCuuBhyts","updateBhyt","hoSoDaXuLy","dongBoDuLieu","traCuuTheoTen","getDanhSachKhachHangTaiTuc","copyHoTenToClipboard","batTatRemove","capNhatBHXHTN","searchBhyts","selectUser"]),...(0,g.i0)("auth",["firebaseUpdateUser","handleAuthStateChanged"]),sleep(e){return new Promise((t=>setTimeout(t,e)))},taiTucBHYT1thang(){this.getBhyts({thang:1,completed:"0",disabled:"0",taiTuc:"1",userName:this.userDetails.id})},taiTucBHYT2thang(){this.getBhyts({thang:2,completed:"0",disabled:"0",taiTuc:"1",userName:this.userDetails.id})},async loadTaiTucBHXH(){const e=await this.getDanhSachKhachHangTaiTuc({filterItems:[],maxResultCount:500,skipCount:0,mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId,tuThang:"2020-01-01 00:00:00",denThang:"2025-01-01 00:00:00",type:-1,loaiDichVu:0});this.capNhatBHXHTN([...new Set(e.map((e=>e.maSoBHXH)))].join())},async loadTaiTucBHYT(){const e=await this.getDanhSachKhachHangTaiTuc({filterItems:[],maxResultCount:5e3,skipCount:0,mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId,tuThang:"2020-01-01 00:00:00",denThang:"2025-01-01 00:00:00",type:-1,loaiDichVu:1});this.dongBoDuLieu([...new Set(e.map((e=>e.maSoBHXH)))].join())},async loadBaoCaoChiTietGiaoDich(){const e=new Date,t=e.getFullYear(),a=e.getMonth();2!==this.searchText.split(" : ").length&&(this.tuNgayDenNgay=this.searchText=`${new Date(t,a-2,1).toISOString().slice(0,10)} : ${new Date(2024,12,31).toISOString().slice(0,10)}`),this.$q.dialog({title:"Báo cáo chi tiết giao dịch",message:"Từ ngày : đến ngày?",prompt:{model:this.searchText,type:"text"},cancel:!0,persistent:!0}).onOk((async e=>{const t=e.split(" : ");try{await this.hoSoDaXuLy({tuNgay:t[0],denNgay:t[1],mangLuoiId:this.userDetails.quaTrinhCongTac.mangLuoiId})}catch(a){T.A.create({message:"Không thể kế nối đến máy chủ !",color:"red"})}}))},async inC17(){if(!this.bhyts.length&&!this.tuNgayDenNgay)return T.A.create({type:"negative",message:"Vào báo cáo giao dịch trước khi xuất C17."}),void this.loadBaoCaoChiTietGiaoDich();this.$q.dialog({title:"In C17 (quyển)",message:"Số biên lai?",prompt:{model:this.soBienLai,type:"text"},cancel:!0,persistent:!0}).onOk((async e=>{if(!e)return;const t=new Map;for(let o=1;o<10;o++)await t.set(`${e}0${o}`,{tongTien:0,tienBHYT:0,tienBHXH:0,soBienLai:`${e}0${o}`,ngayLap:null});for(let o=10;o<100;o++)await t.set(`${e}${o}`,{tongTien:0,tienBHYT:0,tienBHXH:0,soBienLai:`${e}${o}`,ngayLap:null});await t.set(`${parseInt(e+99)+1}`,{tongTien:0,tienBHYT:0,tienBHXH:0,soBienLai:`${parseInt(e+99)+1}`,ngayLap:null});const a=await this.bhyts.filter((t=>t.soBienLai.startsWith(e)));if(!a.length)return T.A.create({type:"negative",message:"Không tìm thấy quyển biên lai!"}),null;for(let o=0;o<this.bhyts.length;o++){const e=this.bhyts[o];if(t.has(e.soBienLai)){const a=t.get(e.soBienLai);t.set(e.soBienLai,{...a,ngayLap:e.ngayLap,tienBHYT:1===e.maThuTuc?parseInt(e.tongTien)+a.tienBHYT:a.tienBHYT,tienBHXH:0===e.maThuTuc?parseInt(e.tongTien)+a.tienBHXH:a.tienBHXH,tongTien:parseInt(e.tongTien)+a.tongTien})}}await this.sleep(1e3);const n=await fetch(`https://app.hotham.vn/api/mau-c17-all/1/pdf?tienBHYT=${a.filter((e=>1==e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0)}&tienBHXH=${a.filter((e=>0==e.maThuTuc)).map((e=>e.tongTien)).reduce(((e,t)=>e+t),0)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([...t.values()])}),l=await n.blob();if(l.errors)throw console.error(l.errors),new Error("Failed to fetch API");var i=document.createElement("a");i.href=window.URL.createObjectURL(l),i.download=`${(new Date).toISOString().slice(0,10)}-tham-tu-lap-c17.pdf`,i.click()}))},async print(e){let t=document.createElement("a");t.target="_blank";let a=`https://app.hotham.vn/mau-c17/${(new Date).toISOString().slice(0,10)}/pdf?maSoBhxhs=${e}`;t.href=a,t.click()},loadBhytByNamSinh(){this.$q.dialog({title:"Tìm thẻ BHYT theo năm sinh",message:"Nhập năm sinh?",prompt:{model:this.searchText,isValid:e=>4==e.length,type:"number"},cancel:!0,persistent:!0}).onOk((e=>{this.getBhyts({completed:"0",disabled:"0",maXa:this.userDetails.maXa,nam:e})}))},loadBhytByUserNameTaiTuc(){this.getBhyts({userName:this.searchText,completed:"0",disabled:"0"})},loadBhytByUserName(e){this.searchText,1===e?this.getBhyts({userName:this.userDetails.maNhanVienThu,isBHYT:1}):0===e?this.getBhyts({userName:this.userDetails.maNhanVienThu,isBHXHTN:1}):this.getBhyts({userName:this.searchText})},loadBhytByName(){this.$q.dialog({title:"Tìm thẻ BHYT",message:"Nhập nội dung tìm kiếm?",prompt:{model:this.searchText,isValid:e=>e.length>=2,type:"text"},cancel:!0,persistent:!0}).onOk((e=>{this.getBhyts({name:e,maXa:e.length<9?this.userDetails.maXa:null})}))},loadBhytThang(){this.$q.dialog({title:"Tháng biên lai",message:"Nhập tháng?",prompt:{model:(new Date).getMonth()+1,type:"text"},cancel:!0,persistent:!0}).onOk((e=>{this.getBhyts({thangBienLai:e,userName:this.userDetails.id})}))},loadBHXHThang(){this.$q.dialog({title:"Tháng biên lai",message:"Nhập tháng?",prompt:{model:(new Date).getMonth()+1,type:"text"},cancel:!0,persistent:!0}).onOk((e=>{this.getBhyts({thangBienLaiTN:e,userName:this.userDetails.id})}))},loadBhyts({thang:e=1}){this.searchText="",this.getBhyts({thang:e,completed:"0",disabled:"0",taiTuc:"1",maXa:this.userDetails.maXa,name:this.searchText})},loadTaiTucBHYTBT(){this.searchText="",this.getBhyts({maXa:this.userDetails.maXa,taiTucBHYTBT:"1"})},loadBHXHTNs(e){this.getBhyts({...e,name:this.searchText})},loadBhytsHetHan(){this.getBhyts({maXa:this.userDetails.maXa,completed:"0",disabled:"0",hetHan:"1",name:this.searchText})},loadBhytsDisable(){this.getBhyts({maXa:this.userDetails.maXa,disabled:1})},loadBhytsCompleted(){this.getBhyts({maXa:this.userDetails.maXa,completed:1,disabled:"0"})},async timKiem(e){const t=e.split("|");t.length>1&&(this.searchText=e=t[0]);const a=e.split(","),n=/[0-9]/g;for(let o=0;o<a.length;o++){const t=a[o].split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),l=t.match(n);if(l){if(1===a.length)try{await this.getBhyts({name:l.join(""),maXa:l.length<9?this.userDetails.maXa:null})}catch(i){}await this.dongBoDuLieu(l.join("")),await this.sleep(500)}else try{await this.traCuuTheoTen({name:t,maXa:this.userDetails.maXa,maHuyen:this.userDetails.maHuyen,maTinh:this.userDetails.maTinh})}catch(i){T.A.create({type:"negative",message:"Không thực hiện được!"+i}),a.length,await this.traCuuBhyts({searchText:e,maXa:this.userDetails.maXa})}}this.$refs.inputSearch.select();const l={...this.$route.query,q:e};this.$router.replace({query:l})},async timMoi(e){const t=e.split(","),a=JSON.parse(localStorage.getItem("hoTens"))||[],n=t.filter((e=>!a.includes(e)));this.searchText=n.join(),this.timKiem(this.searchText)},async khoiTao(){this.resetBhyt([]),this.$route.query.key&&(this.key=await this.saveBHYT(this.$route.query.key))},async printDanhSachTraThe(){let e=document.createElement("a");e.target="_blank",e.href=`https://app.hotham.vn/danh-sach-tra-the/1/pdf?maSoBhxhs=${this.bhyts.map((e=>e.maSoBhxh)).join(",")}`,e.click()},copyMaSoBhxhToClipboard(){navigator.clipboard.writeText(this.bhyts.map((e=>e.maSoBhxh))).then((function(){T.A.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){T.A.create({type:"negative",message:"Không thực hiện được!"+e})}))},copySoDienThoaiToClipboard(){navigator.clipboard.writeText([...new Set(this.bhyts.map((e=>e.soDienThoai2||e.soDienThoai)))].join("\r\n")).then((function(){T.A.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){T.A.create({type:"negative",message:"Không thực hiện được!"+e})}))},copyNamePhoneClipboard(){const e=new Map;for(let t of this.bhyts)e.set(t.soDienThoai2||t.soDienThoai,t);this.download("NamePhone.csv","Name\tPhone\r\n"+[...new Set([...e.values()].map((({soDienThoai2:e,soDienThoai:t,hoTen:a,ngaySinhDt:n,denNgayDt:l,userName:i,soTheBhyt:o})=>`${a} T${new Date(l).getMonth()+1}${o?.slice(0,2)||""}${i==this.userDetails.id||i==this.userDetails.maNhanVienThu?"":"_"}${new Date(n).getFullYear()}\t${e||t}`))).values()].join("\r\n"))},download(e,t){var a=document.createElement("a");if(a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!0,!0),a.dispatchEvent(n)}else a.click()},async printPhuLucThanhVienHGD(){if(this.bhyts.length>15||0===this.bhyts.length)return void T.A.create({type:"negative",message:"Không thực hiện được!"});let e=document.createElement("a");e.target="_blank",e.href=`https://app.hotham.vn/thanh-vien-ho-gia-dinh/1/pdf?maXaUpdate=${this.userDetails.maXa}&maSoBhxhs=${this.bhyts.map((e=>e.maSoBhxh)).join(",")}`,e.click()}},watch:{getCurrentBhyt:function(e){this.dialogShow=!!e},userDetails:async function({maXa:e}){await this.getBhyts({thang:1,completed:"0",disabled:"0",taiTuc:"1",maXa:e})}}};var x=a(7716),L=a(9313),w=a(492),A=a(9519),I=a(3999),q=a(7743),$=a(5173),Y=a(3796),V=a(3954),U=a(386),Q=a(2156);const M=(0,B.A)(S,[["render",d]]),P=M;W()(S,"components",{QPage:x.A,QCard:y.A,QCardSection:f.A,QInput:D.A,QSelect:L.A,QIcon:w.A,QMenu:A.A,QList:I.A,QItem:q.A,QItemSection:$.A,QItemLabel:Y.A,QBadge:V.A,QSeparator:U.A,QDialog:Q.A}),W()(S,"directives",{ClosePopup:_.A})}}]);