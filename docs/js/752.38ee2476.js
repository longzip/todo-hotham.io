"use strict";(globalThis["webpackChunktodolist"]=globalThis["webpackChunktodolist"]||[]).push([[752],{5752:(t,e,s)=>{s.r(e),s.d(e,{default:()=>y});var a=s(1758);const o={class:"login-page"},r={class:"container"},n={class:"row justify-center"},l={class:"col-md-6"},i={class:"text-center q-mt-lg"};function m(t,e,s,m,u,d){const p=(0,a.g2)("q-input"),c=(0,a.g2)("q-btn"),h=(0,a.g2)("q-form"),b=(0,a.g2)("q-card");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",r,[(0,a.Lk)("div",n,[(0,a.Lk)("div",l,[(0,a.bF)(b,{class:"q-pa-md"},{default:(0,a.k6)((()=>[(0,a.bF)(h,{onSubmit:d.submitForm,class:"q-gutter-md"},{default:(0,a.k6)((()=>[(0,a.bF)(p,{modelValue:u.formData.email,"onUpdate:modelValue":e[0]||(e[0]=t=>u.formData.email=t),class:"q-mb-md",outlined:"",type:"text",label:"Tên đăng nhập"},null,8,["modelValue"]),(0,a.bF)(p,{modelValue:u.formData.password,"onUpdate:modelValue":e[1]||(e[1]=t=>u.formData.password=t),class:"q-mb-md",outlined:"",type:"password",label:"Mật khẩu"},null,8,["modelValue"]),(0,a.Lk)("div",i,[(0,a.bF)(c,{color:"primary",type:"submit",label:"Đăng nhập"})])])),_:1},8,["onSubmit"])])),_:1})])])])])}s(4748);var u=s(6980),d=s(6306),p=s.n(d);const c={data(){return{formData:{email:"",password:""}}},methods:{...(0,u.i0)("auth",["registerUser","loginUser"]),...(0,u.i0)("bhyts",["GetCurrentLoginInformations"]),sleep(t){return new Promise((e=>setTimeout(e,t)))},async submitForm(){const t={isWeb:!0,password:this.formData.password,rememberClient:!1,userNameOrEmailAddress:this.formData.email};let e={method:"post",maxBodyLength:1/0,url:"https://ssm-api.vnpost.vn/api/TokenAuth/Authenticate",headers:{Accept:"application/json","Content-Type":"application/json"},data:t};const{data:s}=await p().request(e),a=s.result.accessToken,o={smsText:t,isLogin:a};await this.registerUser(o),await this.sleep(2e3),this.$router.push("/")}},async mounted(){await this.sleep(2e3),localStorage.getItem("setIsLogin")&&this.$router.push("/")}};var h=s(2807),b=s(3316),g=s(9200),f=s(9270),w=s(1693),k=s(8582),q=s.n(k);const v=(0,h.A)(c,[["render",m]]),y=v;q()(c,"components",{QCard:b.A,QForm:g.A,QInput:f.A,QBtn:w.A})}}]);