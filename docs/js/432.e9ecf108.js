"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[432],{3036:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(1758),a=n(8790),l=n(9104);const o={class:"q-pa-md"},s={class:"q-gutter-y-md column"},c=(0,i.Lk)("div",{class:"text-subtitle1"},"Bảng kê các loại tiền",-1),d={class:"text-caption text-grey"},u={class:"row"},r={class:"col"},h={class:"col"},p={class:"col"},m={class:"row"},g={class:"col"},b={class:"col"},k={class:"col"},v={class:"row"},T={class:"col"},_={class:"col"},V={class:"col"},F=(0,i.Lk)("br",null,null,-1);function y(e,t,n,y,L,f){const $=(0,i.g2)("q-btn"),H=(0,i.g2)("ListHeader"),B=(0,i.g2)("q-icon"),C=(0,i.g2)("q-input"),q=(0,i.g2)("q-item-label"),D=(0,i.g2)("q-item-section"),A=(0,i.g2)("q-item"),w=(0,i.g2)("q-separator"),x=(0,i.g2)("q-list"),S=(0,i.g2)("q-card-section"),I=(0,i.g2)("q-card-actions"),Q=(0,i.g2)("q-card"),W=(0,i.g2)("q-dialog"),X=(0,i.gN)("close-popup");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(H,{bgcolor:"bg-orange-4"},{default:(0,i.k6)((()=>[(0,i.eW)("Danh sách "+(0,a.v_)(e.evns.length)+" Khách hàng EVN / Tổng: "+(0,a.v_)(e.tienDien.toLocaleString())+" / "+(0,a.v_)(e.evns.filter((e=>e.soTien>0)).length)+" ("+(0,a.v_)(e.tienLech.toLocaleString())+") ",1),(0,i.bF)($,{rounded:"",color:"primary",onClick:t[0]||(t[0]=t=>e.copySoDienThoaiToClipboard()),icon:"content_copy"}),(0,i.bF)($,{rounded:"",color:"primary",onClick:t[1]||(t[1]=t=>e.showDialog=!0),icon:"print"})])),_:1}),(0,i.Lk)("div",s,[(0,i.bF)(C,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":t[3]||(t[3]=t=>e.searchText=t),placeholder:"Từ khóa",hint:"Tìm kiếm theo thông tin thẻ BHYT",onKeyup:t[4]||(t[4]=(0,l.jR)((t=>e.timKiem(e.searchText)),["enter"])),dense:""},{append:(0,i.k6)((()=>[""!==e.searchText?((0,i.uX)(),(0,i.Wv)(B,{key:0,name:"close",onClick:t[2]||(t[2]=t=>e.searchText=""),class:"cursor-pointer"})):(0,i.Q3)("",!0),(0,i.bF)(B,{name:"search"})])),_:1},8,["modelValue"])]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.evns,(t=>((0,i.uX)(),(0,i.Wv)(x,{key:t.id},{default:(0,i.k6)((()=>[(0,i.bF)(A,null,{default:(0,i.k6)((()=>[(0,i.bF)(D,null,{default:(0,i.k6)((()=>[(0,i.bF)(q,null,{default:(0,i.k6)((()=>[(0,i.eW)((0,a.v_)(t.ten)+" ",1),(0,i.bF)(B,{onClick:n=>e.xacNhanLoaiBo(t),name:0==t.soTien?"do_not_disturb_on":"delete_forever",color:0==t.soTien?"red":"gray"},null,8,["onClick","name","color"])])),_:2},1024),(0,i.bF)(q,{caption:"",lines:"2"},{default:(0,i.k6)((()=>[(0,i.eW)((0,a.v_)(t.diaChi),1)])),_:2},1024),(0,i.bF)(q,{caption:"",lines:"2"},{default:(0,i.k6)((()=>[(0,i.eW)((0,a.v_)(t.soDienThoai),1)])),_:2},1024),(0,i.bF)(q,{caption:"",lines:"2"},{default:(0,i.k6)((()=>[(0,i.eW)((0,a.v_)(t.ghiChu),1)])),_:2},1024)])),_:2},1024),(0,i.bF)(D,{side:"",top:""},{default:(0,i.k6)((()=>[(0,i.bF)(q,{caption:""},{default:(0,i.k6)((()=>[(0,i.eW)((0,a.v_)(t.ma),1)])),_:2},1024),(0,i.bF)(B,{name:"content_copy",onClick:n=>e.copyTextToClipboard(t.ma)},null,8,["onClick"]),(0,i.bF)(q,{caption:""},{default:(0,i.k6)((()=>[(0,i.eW)("Số tiền: "+(0,a.v_)(parseInt(t.soTien).toLocaleString()),1)])),_:2},1024),(0,i.bF)(q,{caption:""},{default:(0,i.k6)((()=>[(0,i.eW)((0,a.v_)(new Date(t.updated_at).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,i.bF)(w,{spaced:"",inset:""})])),_:2},1024)))),128)),(0,i.bF)(W,{modelValue:e.showDialog,"onUpdate:modelValue":t[15]||(t[15]=t=>e.showDialog=t)},{default:(0,i.k6)((()=>[(0,i.bF)(Q,{class:"my-card"},{default:(0,i.k6)((()=>[(0,i.bF)(S,{class:"q-pt-none"},{default:(0,i.k6)((()=>[c,(0,i.Lk)("div",d,[(0,i.Lk)("div",u,[(0,i.Lk)("div",r,[(0,i.bF)(C,{dense:"",modelValue:e.t500,"onUpdate:modelValue":t[5]||(t[5]=t=>e.t500=t),label:"T500"},null,8,["modelValue"])]),(0,i.Lk)("div",h,[(0,i.bF)(C,{dense:"",modelValue:e.t200,"onUpdate:modelValue":t[6]||(t[6]=t=>e.t200=t),label:"T200"},null,8,["modelValue"])]),(0,i.Lk)("div",p,[(0,i.bF)(C,{dense:"",modelValue:e.t100,"onUpdate:modelValue":t[7]||(t[7]=t=>e.t100=t),label:"T100"},null,8,["modelValue"])])]),(0,i.Lk)("div",m,[(0,i.Lk)("div",g,[(0,i.bF)(C,{dense:"",modelValue:e.t50,"onUpdate:modelValue":t[8]||(t[8]=t=>e.t50=t),label:"T50"},null,8,["modelValue"])]),(0,i.Lk)("div",b,[(0,i.bF)(C,{dense:"",modelValue:e.t20,"onUpdate:modelValue":t[9]||(t[9]=t=>e.t20=t),label:"T20"},null,8,["modelValue"])]),(0,i.Lk)("div",k,[(0,i.bF)(C,{dense:"",modelValue:e.t10,"onUpdate:modelValue":t[10]||(t[10]=t=>e.t10=t),label:"T10"},null,8,["modelValue"])])]),(0,i.Lk)("div",v,[(0,i.Lk)("div",T,[(0,i.bF)(C,{dense:"",modelValue:e.t5,"onUpdate:modelValue":t[11]||(t[11]=t=>e.t5=t),label:"T5"},null,8,["modelValue"])]),(0,i.Lk)("div",_,[(0,i.bF)(C,{dense:"",modelValue:e.t2,"onUpdate:modelValue":t[12]||(t[12]=t=>e.t2=t),label:"T2"},null,8,["modelValue"])]),(0,i.Lk)("div",V,[(0,i.bF)(C,{dense:"",modelValue:e.t1,"onUpdate:modelValue":t[13]||(t[13]=t=>e.t1=t),label:"T1"},null,8,["modelValue"])])])])])),_:1}),(0,i.bF)(S,null,{default:(0,i.k6)((()=>[(0,i.eW)(" Tổng: "+(0,a.v_)((5e5*e.t500+2e5*e.t200+1e5*e.t100+5e4*e.t50+2e4*e.t20+1e4*e.t10+5e3*e.t5+2e3*e.t2+1e3*e.t1).toLocaleString())+" ",1),F,(0,i.eW)(" Còn thiếu: "+(0,a.v_)((e.tienDien+e.tienBHYT+e.tienBHXH-(5e5*e.t500+2e5*e.t200+1e5*e.t100+5e4*e.t50+2e4*e.t20+1e4*e.t10+5e3*e.t5+2e3*e.t2+1e3*e.t1)).toLocaleString()),1)])),_:1}),(0,i.bF)(w),(0,i.bF)(I,{align:"right"},{default:(0,i.k6)((()=>[(0,i.bo)((0,i.bF)($,{flat:"",color:"primary",round:"",icon:"print",onClick:t[14]||(t[14]=t=>e.print())},null,512),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}n(3009),n(3647),n(7458),n(1807),n(5512),n(5263),n(9875);var L=n(1627),f=n(8018);const $=(0,i.pM)({components:{ListHeader:f.A},name:"EVNPage",data(){return{searchText:"",evns:[],tienLech:0,tienDien:0,tienBHXH:0,tienBHYT:0,showDialog:!1,t500:"",t200:"",t100:"",t50:"",t20:"",t10:"",t5:"",t2:"",t1:""}},methods:{xacNhanLoaiBo(e){this.$q.dialog({title:"Confirm",message:"Bạn có muốn loại bỏ?",ok:{push:!0},cancel:{color:"negative"},persistent:!0}).onOk((()=>{this.soTienBangKhong(e)}))},async soTienBangKhong(e){const{data:t}=await this.$api.put(`/api/evns/${e.ma}/so-tien`,{soTien:0});this.updateEVN(t)},updateEVN(e){let t=this.evns.find((t=>t.ma===e.ma));t&&Object.assign(t,e)},async timKiem(e,t=!1){let n="/api/evns?";e&&(n+=`name=${e}`),t&&(n+=`homNay=${t}`);const{data:i}=await this.$api.get(n);this.evns=i,this.tienDien=await i.map((e=>e.soTien)).reduce(((e,t)=>e+parseInt(t)),0);const a=await i.map((e=>1e3*Math.ceil(e.soTien/1e3))).reduce(((e,t)=>e+parseInt(t)),0);this.tienLech=a-this.tienDien},copyTextToClipboard(e){navigator.clipboard.writeText(e).then((function(){L.A.create({type:"positive",message:`Bạn đã sao chép: ${e}`})}),(function(e){L.A.create({type:"negative",message:"Không thực hiện được!"+e})}))},copySoDienThoaiToClipboard(){navigator.clipboard.writeText([...new Set(this.evns.map((({ma:e,ten:t,soDienThoai:n})=>`${t} PD${e.slice(-5)}\t${n}`)))].join("\r\n")).then((function(){L.A.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){L.A.create({type:"negative",message:"Không thực hiện được!"+e})}))},async print(){let e=document.createElement("a");e.target="_blank";let t=`https://app.hotham.vn/nop-bhyt/${(new Date).toISOString().slice(0,10)}/pdf?n=1`;this.tienDien&&(t+=`&tienDien=${this.tienDien}`),this.tienBHYT&&(t+=`&tienBHYT=${this.tienBHYT}`),this.tienBHXH&&(t+=`&tienBHXH=${this.tienBHXH}`),this.t500&&(t+=`&t500=${this.t500}`),this.t200&&(t+=`&t200=${this.t200}`),this.t100&&(t+=`&t100=${this.t100}`),this.t50&&(t+=`&t50=${this.t50}`),this.t20&&(t+=`&t20=${this.t20}`),this.t10&&(t+=`&t10=${this.t10}`),this.t5&&(t+=`&t5=${this.t5}`),this.t2&&(t+=`&t2=${this.t2}`),this.t1&&(t+=`&t1=${this.t1}`),e.href=t,e.click()}},mounted(){this.$route.query.q?this.tienDien=parseInt(this.$route.query.tienDien):this.timKiem("",!0),this.$route.query.tienBHYT&&(this.tienBHYT+=parseInt(this.$route.query.tienBHYT)),this.$route.query.tienBHXH&&(this.tienBHXH+=parseInt(this.$route.query.tienBHXH))}});var H=n(2807),B=n(1693),C=n(2801),q=n(492),D=n(3999),A=n(7743),w=n(5173),x=n(3796),S=n(386),I=n(2156),Q=n(3316),W=n(4189),X=n(2669),U=n(8672),K=n(8582),Y=n.n(K);const N=(0,H.A)($,[["render",y]]),E=N;Y()($,"components",{QBtn:B.A,QInput:C.A,QIcon:q.A,QList:D.A,QItem:A.A,QItemSection:w.A,QItemLabel:x.A,QSeparator:S.A,QDialog:I.A,QCard:Q.A,QCardSection:W.A,QCardActions:X.A}),Y()($,"directives",{ClosePopup:U.A})}}]);