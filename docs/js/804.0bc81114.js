"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[804],{2336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(1758),o=n(9104),c=n(8790);const i={class:"q-pa-md"},s={class:"q-gutter-y-md column"},l=["href"];function r(e,t,n,r,u,d){const p=(0,a.g2)("ListHeader"),h=(0,a.g2)("q-icon"),g=(0,a.g2)("q-input"),m=(0,a.g2)("q-item-label"),b=(0,a.g2)("q-item-section"),k=(0,a.g2)("q-item"),_=(0,a.g2)("q-separator"),v=(0,a.g2)("q-list");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(p,{bgcolor:"bg-orange-4"},{default:(0,a.k6)((()=>[(0,a.eW)("Danh sách bưu gửi")])),_:1}),(0,a.Lk)("div",s,[(0,a.bF)(g,{outlined:"",modelValue:e.searchText,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchText=t),placeholder:"Từ khóa",hint:"Tháng tra cứu",onKeyup:t[2]||(t[2]=(0,o.jR)((t=>e.traCuu()),["enter"])),dense:""},{append:(0,a.k6)((()=>[""!==e.searchText?((0,a.uX)(),(0,a.Wv)(h,{key:0,name:"close",onClick:t[0]||(t[0]=t=>e.searchText=""),class:"cursor-pointer"})):(0,a.Q3)("",!0),(0,a.bF)(h,{name:"search"})])),_:1},8,["modelValue"])]),(0,a.bF)(v,{bordered:""},{default:(0,a.k6)((()=>[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.itemBy(e.searchText),(t=>((0,a.uX)(),(0,a.CE)("div",{key:t.id},[(0,a.bF)(k,null,{default:(0,a.k6)((()=>[(0,a.bF)(b,null,{default:(0,a.k6)((()=>[(0,a.bF)(m,null,{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(t.senderName),1)])),_:2},1024),(0,a.bF)(m,{caption:"",lines:"2"},{default:(0,a.k6)((()=>[(0,a.Lk)("a",{target:"_blank",href:`https://zalo.me/${t.senderPhone}`},(0,c.v_)(t.senderPhone),9,l),(0,a.bF)(h,{name:"content_copy",onClick:n=>e.copyPhoneToClipboard(t.senderPhone)},null,8,["onClick"])])),_:2},1024),(0,a.bF)(m,{caption:"",lines:"2"},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(t.contentNote),1)])),_:2},1024)])),_:2},1024),(0,a.bF)(b,{side:"",top:""},{default:(0,a.k6)((()=>[(0,a.bF)(m,{caption:""},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(t.ttNumber),1)])),_:2},1024),(0,a.bF)(h,{name:"content_copy",onClick:n=>e.copyTextToClipboard(t)},null,8,["onClick"]),(0,a.bF)(m,{caption:""},{default:(0,a.k6)((()=>[(0,a.eW)("Số tiền: "+(0,c.v_)(parseInt(t.totalFeeSpecial).toLocaleString()),1)])),_:2},1024),(0,a.bF)(m,{caption:""},{default:(0,a.k6)((()=>[(0,a.eW)("COD: "+(0,c.v_)(t.codAmount?parseInt(t.codAmount).toLocaleString():""),1)])),_:2},1024),(0,a.bF)(m,{caption:""},{default:(0,a.k6)((()=>[(0,a.eW)((0,c.v_)(new Date(t.updatedDate).toLocaleString()),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,a.bF)(_,{spaced:"",inset:""})])))),128))])),_:1})])}var u=n(6980),d=n(1627),p=(n(6246),n(8018));const h=(0,a.pM)({components:{ListHeader:p.A},name:"PageItem",data(){return{searchText:""}},computed:{...(0,u.L8)("items",["itemBy"]),...(0,u.aH)("auth",["userDetails"])},methods:{...(0,u.i0)("items",["getItems"]),copyPhoneToClipboard(e){navigator.clipboard.writeText(e).then((function(){d.A.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){d.A.create({type:"negative",message:"Không thực hiện được!"+e})}))},copyTextToClipboard({ttNumber:e,senderName:t,recPhone:n,recAdd:a}){const{guiHangSMSText:o}=this.userDetails;navigator.clipboard.writeText(o.replace("[Tên khách hàng]",t).replace("[Mã vận đơn]",`${e}`)).then((function(){d.A.create({type:"positive",message:"Bạn đã sao chép thành công!"})}),(function(e){d.A.create({type:"negative",message:"Không thực hiện được!"+e})}))}},mounted(){const[e,t,n]=(new Date).toISOString().slice(0,10).split("-"),a=[n,t,e].join("/"),o=1===parseInt(n)?new Date(e,t-1,0).toISOString().slice(0,10).split("-").reverse().join("/"):[parseInt(n-1),t,e].join("/");this.getItems({tuNgay:o,denNgay:a})}});var g=n(2807),m=n(2801),b=n(492),k=n(3999),_=n(7743),v=n(5173),f=n(3796),T=n(386),F=n(8582),y=n.n(F);const A=(0,g.A)(h,[["render",r]]),C=A;y()(h,"components",{QInput:m.A,QIcon:b.A,QList:k.A,QItem:_.A,QItemSection:v.A,QItemLabel:f.A,QSeparator:T.A})}}]);