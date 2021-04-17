(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],{56:function(n,t,e){},58:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),c=e.n(i),o=e(15),a=e.n(o),u=e(40),s=e(6),d=e(24),p=(e(49),e(34)),l=e(35),f=e(42),b=e(41),x=e(2),j=e(3),h="#fff",g="#f7cc10",m="#000";function O(){var n=Object(x.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 900px;\n  background-color: #1d1d1d;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n\n  @media (max-width: 992px) {\n    width: 750px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 320px;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(x.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: hsla(0, 0%, 78%, 0.5);\n  z-index: 1000;\n"]);return v=function(){return n},n}var w=j.a.div(v()),y=j.a.div(O()),k=document.querySelector("#modal-root"),z=function(n){Object(f.a)(e,n);var t=Object(b.a)(e);function e(){var n;Object(p.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).handleKeyDown=function(t){"Escape"===t.code&&n.props.onCloseModal(null)},n.handleBackdropClick=function(t){t.target===t.currentTarget&&n.props.onCloseModal(null)},n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(r.jsx)(w,{onClick:this.handleBackdropClick,children:Object(r.jsx)(y,{children:this.props.children})}),k)}}]),e}(i.Component),C=e(9),I=function(n){var t=Object(i.useState)(n||1),e=Object(C.a)(t,2),r=e[0],c=e[1];return{count:r,setCount:c,onChange:function(n){return c(Number(n.target.value))}}};d.a.initializeApp({apiKey:"AIzaSyAqe_cY_1FKYax-5rTXC1leYLzR8m2OqWE",authDomain:"lampaburger.firebaseapp.com",databaseURL:"https://lampaburger-default-rtdb.firebaseio.com",projectId:"lampaburger",storageBucket:"lampaburger.appspot.com",messagingSenderId:"375009946141",appId:"1:375009946141:web:bbf2ad5cc2b39e201134f4"});var B=function(){var n=function(){var n=Object(i.useState)(null),t=Object(C.a)(n,2);return{openItem:t[0],setOpenItem:t[1]}}(),t=n.openItem,e=n.setOpenItem,c=function(){var n=Object(i.useState)([]),t=Object(C.a)(n,2);return{orders:t[0],setOrders:t[1]}}(),o=function(n){var t=Object(i.useState)(null),e=Object(C.a)(t,2),r=e[0],c=e[1],o=n(),a=new n.GoogleAuthProvider;return Object(i.useEffect)((function(){o.onAuthStateChanged((function(n){c(n||null)}))}),[o,r]),{authentication:r,logIn:function(){return o.signInWithPopup(a)},logOut:function(){return o.signOut().then().catch((function(n){return console.error()}))}}}(d.a.auth);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,Object(s.a)({},o)),Object(r.jsx)(ve,Object(s.a)(Object(s.a)({},c),{},{openItem:t,setOpenItem:e})),Object(r.jsx)(on,{setOpenItem:e}),t&&Object(r.jsx)(z,{openItem:t,onCloseModal:e,children:Object(r.jsx)(Mt,Object(s.a)({openItem:t,setOpenItem:e},c))})]})},S=e(73),L=e(74),A=e(75);function F(){var n=Object(x.a)(["\n  margin-right: 10px;\n"]);return F=function(){return n},n}function M(){var n=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.2s linear;\n"]);return M=function(){return n},n}function D(){var n=Object(x.a)(["\n  color: ",";\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s linear;\n  margin-right: 20px;\n\n  :hover {\n    color: ",";\n  }\n"]);return D=function(){return n},n}function Q(){var n=Object(x.a)(["\n  color: ",";\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s linear;\n\n  :hover {\n    color: ",";\n  }\n"]);return Q=function(){return n},n}function E(){var n=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return E=function(){return n},n}function P(){var n=Object(x.a)(["\n  font-size: 24px;\n  font-weight: 700;\n"]);return P=function(){return n},n}function K(){var n=Object(x.a)(["\n  width: 30px;\n  margin-right: 15px;\n"]);return K=function(){return n},n}function N(){var n=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n"]);return N=function(){return n},n}function R(){var n=Object(x.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  z-index: 999;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 100px;\n  background-color: #0f0f0f;\n  color: ",";\n  transition: all 0.3s linear;\n\n  @media (max-width: 576px) {\n    padding: 10px 15px;\n  }\n"]);return R=function(){return n},n}var T=j.a.header(R(),h),U=j.a.a(N(),h),W=j.a.img(K()),Y=j.a.h1(P()),q=j.a.div(E()),J=j.a.button(Q(),h,g),G=j.a.button(D(),h,g),X=j.a.div(M()),_=j.a.p(F()),H=e.p+"static/media/burger.350271d5.svg",V=function(n){var t=n.authentication,e=n.logIn,i=n.logOut;return Object(r.jsxs)(T,{children:[Object(r.jsxs)(U,{href:"#",children:[Object(r.jsx)(W,{src:H,alt:"Logo LampaBurger"}),Object(r.jsxs)(Y,{children:["Lampa",Object(r.jsx)(Ie,{color:g,children:"Burger"})]})]}),Object(r.jsxs)(q,{children:[Object(r.jsx)(G,{children:Object(r.jsx)(S.a,{})}),t?Object(r.jsxs)(X,{children:[Object(r.jsx)(_,{children:t.displayName}),Object(r.jsx)(J,{onClick:i,children:Object(r.jsx)(L.a,{})})]}):Object(r.jsx)(J,{onClick:e,children:Object(r.jsx)(A.a,{})})]})]})};function Z(){var n=Object(x.a)(["\n  padding-top: 80px;\n  padding-bottom: 50px;\n"]);return Z=function(){return n},n}function $(){var n=Object(x.a)(["\n  font-size: 55px;\n  margin-bottom: 50px;\n\n  @media (max-width: 576px) {\n    font-size: 30px;\n    margin-bottom: 20px;\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(x.a)(["\n  color: ",";\n  background-size: cover;\n  background-color: ",";\n"]);return nn=function(){return n},n}var tn=j.a.main(nn(),h,m),en=j.a.h2($()),rn=j.a.section(Z()),cn={burger:[{name:"JS Burger",url:e.p+"static/media/js-burger.e7a9d1f6.png",id:1,price:150,description:"\u041c\u041d\u041e\u0413\u041e \u0411\u0415\u041a\u041e\u041d\u0410 / \u0421\u041e\u0423\u0421 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0421\u0410\u041b\u0410\u0422 / \u0414\u0412\u041e\u0419\u041d\u041e\u0419 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0411\u0415\u041a\u041e\u041d\u041e\u0412\u042b\u0419 \u0414\u0416\u0415\u041c / \u0421\u041e\u0423\u0421 BBQ / \u041a\u0420\u0410\u041d\u0427 \u041b\u0423\u041a /",weight:"335\u0433",shortcode:"\u041e\u0447\u0435\u043d\u044c \u0432\u043a\u0443\u0441\u043d\u044b\u0439 \u0431\u0443\u0440\u0433\u0435\u0440 \u0441 \u0431\u0435\u043a\u043e\u043d\u043e\u043c /",toppings:["\u0411\u0435\u043a\u043e\u043d","\u041a\u0435\u0442\u0447\u0443\u043f","\u0421\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440","\u041e\u0433\u0443\u0440\u0446\u044b","\u041f\u043e\u043c\u0438\u0434\u043e\u0440","\u0425\u0430\u043b\u0430\u043f\u0435\u043d\u044c\u043e"]},{name:"Angular Burger",url:e.p+"static/media/angular-burger.96ea2d3d.png",id:2,price:189.9,description:"\u0421\u0410\u041b\u0410\u0422 / \u0422\u041e\u041b\u0421\u0422\u0410\u042f \u041a\u041e\u0422\u041b\u0415\u0422\u0410 / \u041c\u041d\u041e\u0413\u041e \u0421\u042b\u0420\u0410 / \u0421\u041e\u0423\u0421 BBQ / \u041a\u0420\u0410\u041d\u0427 \u041b\u0423\u041a /",weight:"335\u0433",shortcode:"\u0411\u0443\u0440\u0433\u0435\u0440 \u0441 \u0442\u043e\u043b\u0441\u0442\u043e\u0439 \u043a\u043e\u0442\u043b\u0435\u0442\u043e\u0439 /",toppings:["\u0411\u0435\u043a\u043e\u043d","\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a"]},{name:"Grid Burger",url:e.p+"static/media/grid-burger.311b0762.png",id:3,price:175,description:"\u0414\u0412\u041e\u0419\u041d\u041e\u0419 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0411\u0415\u041a\u041e\u041d\u041e\u0412\u042b\u0419 \u0414\u0416\u0415\u041c / \u0421\u041e\u0423\u0421 BBQ / \u041a\u0420\u0410\u041d\u0427 \u041b\u0423\u041a /",shortcode:"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u0427\u0435\u0434\u0434\u0435\u0440 \u0438 \u0441\u043e\u0443\u0441 BBQ /",weight:"335\u0433",toppings:["\u0410\u043d\u0430\u043d\u0430\u0441","\u041c\u0430\u0439\u043e\u043d\u0435\u0437"]},{name:"React Burger",url:e.p+"static/media/react-burger.3f6c5cab.png",id:4,price:112,description:"\u0411\u0415\u041a\u041e\u041d / \u0421\u041e\u0423\u0421 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0421\u0410\u041b\u0410\u0422 / \u0414\u0412\u041e\u0419\u041d\u041e\u0419 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0411\u0415\u041a\u041e\u041d\u041e\u0412\u042b\u0419 \u0414\u0416\u0415\u041c / \u0421\u041e\u0423\u0421 BBQ / \u041a\u0420\u0410\u041d\u0427 \u041b\u0423\u041a /",shortcode:"\u0421\u0430\u043b\u0430\u0442 \u0438 \u0431\u0435\u043a\u043e\u043d\u043e\u0432\u044b\u0439 \u0434\u0436\u0435\u043c /",weight:"335\u0433",toppings:["\u0421\u043f\u0430\u0440\u0436\u0430","\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a","\u041a\u043e\u043d\u0436\u0443\u0442"]},{name:"Sass Burger",url:e.p+"static/media/sass-burger.f3b82ccf.png",id:5,price:169.9,description:"\u041c\u041d\u041e\u0413\u041e \u0411\u0415\u041a\u041e\u041d\u0410 / \u0421\u041e\u0423\u0421 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0421\u0410\u041b\u0410\u0422 / \u0414\u0412\u041e\u0419\u041d\u041e\u0419 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0411\u0415\u041a\u041e\u041d\u041e\u0412\u042b\u0419 \u0414\u0416\u0415\u041c / \u0421\u041e\u0423\u0421 BBQ / \u041a\u0420\u0410\u041d\u0427 \u041b\u0423\u041a /",shortcode:"\u0421\u043f\u043b\u043e\u0448\u043d\u043e\u0439 \u0431\u0435\u043a\u043e\u043d \u0438 \u0441\u0430\u043b\u0430\u0442 /",weight:"335\u0433",toppings:["\u041a\u0435\u0442\u0447\u0443\u043f","\u0421\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440"]},{name:"Vue Burger",url:e.p+"static/media/vue-burger.ef867b47.png",id:6,price:134,description:"\u0423\u041c\u0415\u0420\u0415\u041d\u041d\u041e \u0411\u0415\u041a\u041e\u041d\u0410 / \u0421\u041e\u0423\u0421 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0421\u0410\u041b\u0410\u0422 / \u0414\u0412\u041e\u0419\u041d\u041e\u0419 \u0427\u0415\u0414\u0414\u0415\u0420 / \u0411\u0415\u041a\u041e\u041d\u041e\u0412\u042b\u0419 \u0414\u0416\u0415\u041c / \u0421\u041e\u0423\u0421 BBQ / \u041a\u0420\u0410\u041d\u0427 \u041b\u0423\u041a /",shortcode:"\u041d\u0435\u0436\u043d\u044b\u0439 \u0432\u043a\u0443\u0441 \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u043f\u0440\u043e\u0436\u0430\u0440\u043a\u0438 \u0442\u043e\u043b\u0441\u0442\u043e\u0439 \u043a\u043e\u0442\u043b\u0435\u0442\u044b /",weight:"335\u0433",toppings:["\u0421\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440","\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043b\u0443\u043a"]}],other:[{name:"NPM Install Fries ",url:e.p+"static/media/sets1.4162fbdf.png",id:1,price:70,choices:["\u041f\u0435\u0440\u0435\u0446","\u0421\u043e\u043b\u044c"]},{name:"Landing Set",url:e.p+"static/media/sets2.d80a95a0.png",id:2,price:375,choices:["\u041a\u0435\u0442\u0447\u0443\u043f","\u041c\u0430\u0439\u043e\u043d\u0435\u0437"]},{name:"MultiPage Set",url:e.p+"static/media/sets3.4176e761.png",id:3,price:200,choices:["\u041c\u043e\u0440\u0441\u043a\u0430\u044f \u043a\u0430\u043f\u0443\u0441\u0442\u0430","\u0412\u0430\u0441\u0430\u0431\u0438"]},{name:"SinglePage Set",url:e.p+"static/media/sets4.e3fa5a9a.png",id:4,price:375.25,choices:["\u0421\u0432\u0438\u043d\u0438\u043d\u0430","\u0413\u043e\u0432\u044f\u0434\u0438\u043d\u0430","\u0411\u0430\u0440\u0430\u043d\u0438\u043d\u0430"]},{name:"Sugar For Your Code",url:e.p+"static/media/sets5.4d70203f.png",id:5,price:50.5,choices:["Coca-Cola","Sprite","Mirinda","Fanta"]},{name:"Webpack Set",url:e.p+"static/media/sets6.c028347d.png",id:6,price:184.2,choices:["\u041c\u0430\u0439\u043e\u043d\u0435\u0437","\u0411\u0430\u0440\u0431\u0435\u043a\u044e","\u041a\u0438\u0441\u043b\u043e-\u0441\u043e\u043b\u043e\u0434\u043a\u0438\u0439"]}]},on=function(n){var t=n.setOpenItem;return Object(r.jsxs)(tn,{children:[Object(r.jsx)(Mn,{}),Object(r.jsxs)(ke,{children:[Object(r.jsxs)(rn,{id:"menu",children:[Object(r.jsx)(en,{children:"\u0411\u0443\u0440\u0433\u0435\u0440\u044b"}),Object(r.jsx)(vn,{itemList:cn.burger,setOpenItem:t})]}),Object(r.jsxs)(rn,{children:[Object(r.jsx)(en,{children:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438 / \u0421\u0435\u0442\u0442\u044b"}),Object(r.jsx)(vn,{itemList:cn.other,setOpenItem:t})]})]})]})};function an(){var n=Object(x.a)(["\n  position: relative;\n  max-width: 350px;\n  top: -25px;\n  transition: all 0.3s linear;\n  margin-left: auto;\n  margin-right: auto;\n\n  :hover {\n    transform: rotate(5deg) scale(1.1);\n  }\n\n  @media (max-width: 576px) {\n    max-width: 100%;\n    top: -12px;\n  }\n"]);return an=function(){return n},n}function un(){var n=Object(x.a)(["\n  text-align: right;\n"]);return un=function(){return n},n}function sn(){var n=Object(x.a)(["\n  font-size: 25px;\n  text-transform: uppercase;\n  font-weight: 700;\n\n  @media (max-width: 576px) {\n    font-size: 20px;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(x.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 10px;\n  border-radius: 5px;\n"]);return dn=function(){return n},n}function pn(){var n=Object(x.a)(["\n  cursor: pointer;\n  max-width: 500px;\n  font-size: 20px;\n\n  @media (max-width: 576px) {\n    max-width: 100%;\n  }\n"]);return pn=function(){return n},n}function ln(){var n=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 35px;\n"]);return ln=function(){return n},n}var fn=j.a.ul(ln()),bn=j.a.li(pn()),xn=j.a.div(dn(),m,g),jn=j.a.p(sn()),hn=j.a.p(un()),gn=j.a.img(an()),mn=function(n){var t=n.topping&&n.topping.filter((function(n){return n.checked})).length,e=.1*n.price*t;return Number(((n.price+e)*n.count).toFixed(2))},On=function(n){return n.toLocaleString("ru-RU",{style:"currency",currency:"UAH"})},vn=function(n){var t=n.itemList,e=n.setOpenItem;return Object(r.jsx)(fn,{children:t.map((function(n){return Object(r.jsxs)(bn,{onClick:function(){return e(n)},children:[Object(r.jsxs)(xn,{children:[Object(r.jsx)(jn,{children:n.name}),Object(r.jsx)(hn,{children:On(n.price)})]}),Object(r.jsx)(gn,{src:n.url,alt:n.name})]},n.id)}))})},wn=e.p+"static/media/hd-1.0228b37b.jpg";function yn(){var n=Object(x.a)(["\n  padding: 10px 35px;\n  cursor: pointer;\n  color: #fff;\n  border: 1px solid #fff;\n  border-radius: 25px;\n  transition: all 0.2s linear;\n\n  :hover: {\n    background-color: rgba(255, 255, 255, 1);\n    color: rgb(53, 53, 53);\n  }\n"]);return yn=function(){return n},n}function kn(){var n=Object(x.a)(["\n  width: 475px;\n  margin-bottom: 60px;\n  line-height: 1.5em;\n  font-size: 26px;\n  font-weight: 500;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    font-size: 20px;\n  }\n"]);return kn=function(){return n},n}function zn(){var n=Object(x.a)(["\n  text-transform: uppercase;\n  font-size: 64px;\n  line-height: 1.2;\n  font-weight: 700;\n  margin-bottom: 25px;\n\n  @media (max-width: 576px) {\n    font-size: 33px;\n  }\n"]);return zn=function(){return n},n}function Cn(){var n=Object(x.a)(["\n  width: 680px;\n  padding-top: 150px;\n  padding-bottom: 150px;\n  color: ",";\n\n  @media (max-width: 992px) {\n    width: 750px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n"]);return Cn=function(){return n},n}function In(){var n=Object(x.a)(["\n  background: url(",");\n  background-size: cover;\n  width: 100%;\n"]);return In=function(){return n},n}var Bn=j.a.div(In(),wn),Sn=j.a.div(Cn(),h),Ln=j.a.h2(zn()),An=j.a.p(kn()),Fn=j.a.a(yn()),Mn=function(){return Object(r.jsx)(Bn,{children:Object(r.jsx)(ke,{children:Object(r.jsxs)(Sn,{children:[Object(r.jsxs)(Ln,{children:[Object(r.jsx)(Ie,{color:g,children:"Lampa"}),"\u0411\u0443\u0440\u0433\u0435\u0440 - \u0442\u0432\u043e\u0439 \u044f\u0440\u043a\u0438\u0439 \u0432\u043a\u0443\u0441!"]}),Object(r.jsxs)(An,{children:["\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 ",Object(r.jsx)(Ie,{color:g,children:"\u0411\u0423\u0420\u0413\u0415\u0420\u041e\u0412"})," \u0432 \u0412\u0438\u043d\u043d\u0438\u0446\u0435 \u0434\u043e 29 \u043c\u0438\u043d\u0443\u0442 \u0438\u043b\u0438 \u0441\u0430\u043c\u044b\u0439 \u044f\u0440\u043a\u0438\u0439"," ",Object(r.jsx)(Ie,{color:g,children:"\u0411\u0423\u0420\u0413\u0415\u0420"})," \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a!"]}),Object(r.jsx)(Fn,{href:"#menu",children:"\u041c\u0435\u043d\u044e"})]})})})},Dn=e(27),Qn=e(21),En=e.n(Qn);function Pn(){var n=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n  z-index: 10;\n  color: #000000;\n  font-size: 20px;\n  line-height: 15px;\n  background: #ffd900;\n  bottom: 6px;\n"]);return Pn=function(){return n},n}function Kn(){var n=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n  z-index: 10;\n  color: #000000;\n  font-size: 26px;\n  line-height: 15px;\n  background: #ffd900;\n  bottom: 6px;\n"]);return Kn=function(){return n},n}function Nn(){var n=Object(x.a)(["\n  height: 28px;\n  width: 28px;\n  border-radius: 14px;\n  position: absolute;\n  left: 14px;\n  bottom: 0;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 28px;\n  background: rgba(15, 15, 15, 0.75294);\n  font-size: 16px;\n  font-weight: 700;\n  z-index: 5;\n  border: none;\n  outline: none;\n  color: #f4f4f4;\n"]);return Nn=function(){return n},n}function Rn(){var n=Object(x.a)(["\n  position: relative;\n  width: 56px;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return Rn=function(){return n},n}var Tn=j.a.div(Rn()),Un=j.a.input(Nn()),Wn=j.a.button(Kn()),Yn=j.a.button(Pn()),qn=function(n){var t=n.count,e=n.setCount,i=n.onChange;return Object(r.jsxs)(Tn,{children:[Object(r.jsx)(Wn,{disabled:t<=1,onClick:function(){return e(t-1)},children:"-"}),Object(r.jsx)(Un,{type:"number",min:"1",max:"99",value:t,onChange:i}),Object(r.jsx)(Yn,{onClick:function(){return e(t+1)},children:"+"})]})};function Jn(){var n=Object(x.a)(["\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n  border-radius: 5px;\n"]);return Jn=function(){return n},n}function Gn(){var n=Object(x.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n  margin-bottom: 5px;\n"]);return Gn=function(){return n},n}function Xn(){var n=Object(x.a)(["\n  margin-bottom: 10px;\n"]);return Xn=function(){return n},n}function _n(){var n=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 500px;\n  margin-bottom: 15px;\n"]);return _n=function(){return n},n}var Hn=j.a.div(_n()),Vn=j.a.h3(Xn()),Zn=j.a.label(Gn()),$n=j.a.input(Jn()),nt=function(n){var t=n.toppings,e=n.checkToppings;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Vn,{children:"\u0414\u043e\u0431\u0430\u0432\u043a\u0438"}),Object(r.jsx)(Hn,{children:t.map((function(n,t){return Object(r.jsxs)(Zn,{children:[Object(r.jsx)($n,{type:"checkbox",checked:n.checked,onChange:function(){return e(t)}}),n.name]},t)}))})]})};function tt(){var n=Object(x.a)(["\n  cursor: pointer;\n  margin-right: 5px;\n"]);return tt=function(){return n},n}function et(){var n=Object(x.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n  margin-bottom: 5px;\n"]);return et=function(){return n},n}function rt(){var n=Object(x.a)(["\n  margin-bottom: 10px;\n"]);return rt=function(){return n},n}function it(){var n=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 500px;\n  margin-bottom: 15px;\n"]);return it=function(){return n},n}var ct=j.a.div(it()),ot=j.a.h3(rt()),at=j.a.label(et()),ut=j.a.input(tt()),st=function(n){var t=n.openItem,e=n.choice,i=n.checkChoices;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ot,{children:"\u0412\u044b\u0431\u043e\u0440:"}),Object(r.jsx)(ct,{children:t.choices.map((function(n,t){return Object(r.jsxs)(at,{children:[Object(r.jsx)(ut,{type:"radio",name:"choices",value:n,checked:e===n,onChange:i}),n]},t)}))})]})};function dt(){var n=Object(x.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: transparent;\n  cursor: pointer;\n"]);return dt=function(){return n},n}function pt(){var n=Object(x.a)(["\n  width: 65%;\n  color: #0f0f0f;\n  background: #ffd900;\n  padding: 12px;\n  text-align: center;\n  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n"]);return pt=function(){return n},n}function lt(){var n=Object(x.a)(["\n  display: block;\n  width: 65%;\n  color: #0f0f0f;\n  background: #ffd900;\n  padding: 12px;\n  text-align: center;\n  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n\n  :hover {\n    background: #f1ce03;\n  }\n"]);return lt=function(){return n},n}function ft(){var n=Object(x.a)(["\n  width: 35%;\n  color: #f4f4f4;\n  background: #0f0f0f;\n  text-align: center;\n  font-size: 18px;\n  text-transform: none;\n  display: block;\n"]);return ft=function(){return n},n}function bt(){var n=Object(x.a)(["\n  background: #0f0f0f;\n  display: flex;\n  align-items: center;\n  outline: none;\n  width: 100%;\n  border: 4px solid #ffd900;\n  font-size: 16px;\n  line-height: 20px;\n  text-transform: uppercase;\n  font-weight: 700;\n  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n  color: #0f0f0f;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  padding: 0;\n\n  :hover {\n    border: 4px solid #f1ce03;\n  }\n"]);return bt=function(){return n},n}function xt(){var n=Object(x.a)([""]);return xt=function(){return n},n}function jt(){var n=Object(x.a)([""]);return jt=function(){return n},n}function ht(){var n=Object(x.a)(["\n  width: 35%;\n"]);return ht=function(){return n},n}function gt(){var n=Object(x.a)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 148.8%;\n  color: #f4f4f4;\n  border-left: 4px solid #ffd900;\n  padding-left: 16px;\n  margin-bottom: 24px;\n"]);return gt=function(){return n},n}function mt(){var n=Object(x.a)(["\n  font-size: 38px;\n  line-height: 58px;\n  color: #f4f4f4;\n  margin-bottom: 15px;\n"]);return mt=function(){return n},n}function Ot(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 60%;\n  margin-right: 20px;\n"]);return Ot=function(){return n},n}function vt(){var n=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  color: ",";\n  padding: 40px;\n"]);return vt=function(){return n},n}var wt=j.a.div(vt(),h),yt=j.a.div(Ot()),kt=j.a.h2(mt()),zt=j.a.p(gt()),Ct=j.a.div(ht()),It=j.a.img(jt()),Bt=j.a.div(xt()),St=j.a.button(bt()),Lt=j.a.span(ft()),At=j.a.span(lt()),Ft=(j.a.span(pt()),j.a.button(dt())),Mt=function(n){var t=n.openItem,e=n.setOpenItem,c=n.orders,o=n.setOrders,a=t.name,u=t.url,d=t.weight,p=t.description,l=I(t.count),f=function(n){var t=n.topping?n.topping:n.toppings?function(n){return n.map((function(n){return{name:n,checked:!1}}))}(n.toppings):[],e=Object(i.useState)(t),r=Object(C.a)(e,2),c=r[0],o=r[1];return{toppings:c,checkToppings:function(n){return o(c.map((function(t,e){var r=Object(s.a)({},t);return e===n?Object(s.a)(Object(s.a)({},r),{},{checked:!r.checked}):r})))}}}(t),b=function(){var n=Object(i.useState)(""),t=Object(C.a)(n,2),e=t[0],r=t[1];return{choice:e,checkChoices:function(n){return r(n.target.value)}}}(),x=t.index>-1,j=Object(s.a)(Object(s.a)({},t),{},{count:l.count,topping:f.toppings,choice:b.choice});return Object(r.jsxs)(wt,{children:[Object(r.jsx)(Ft,{onClick:function(){return e(null)},children:Object(r.jsx)(En.a,{style:{color:"#f7cc10"}})}),Object(r.jsxs)(yt,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(kt,{children:a}),Object(r.jsxs)(zt,{children:[p," ",Object(r.jsx)(Ie,{color:g,children:d})]}),t.toppings&&Object(r.jsx)(nt,Object(s.a)({},f)),t.choices&&Object(r.jsx)(st,Object(s.a)(Object(s.a)({},b),{},{openItem:t}))]}),Object(r.jsx)(Bt,{children:Object(r.jsxs)(St,{type:"button",onClick:x?function(){var n=Object(Dn.a)(c);n[t.index]=j,o(n),e(null)}:function(){o([].concat(Object(Dn.a)(c),[j])),e(null)},disabled:t.choices&&!j.choice,children:[Object(r.jsx)(Lt,{children:On(mn(j))}),Object(r.jsx)(At,{children:x?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a \u0437\u0430\u043a\u0430\u0437\u0443"})]})})]}),Object(r.jsxs)(Ct,{children:[Object(r.jsx)(It,{src:u,alt:a}),Object(r.jsx)(qn,Object(s.a)({},l))]})]})},Dt=e(39),Qt=e.n(Dt);function Et(){var n=Object(x.a)(["\n  font-size: 12px;\n  line-height: 16px;\n  color: #888;\n"]);return Et=function(){return n},n}function Pt(){var n=Object(x.a)(["\n  background: transparent;\n  cursor: pointer;\n\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n"]);return Pt=function(){return n},n}function Kt(){var n=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Kt=function(){return n},n}function Nt(){var n=Object(x.a)(["\n  font-weight: 700;\n  padding-left: 8px;\n  color: #f4f4f4;\n  z-index: 1;\n  font-size: 16px;\n  line-height: 20px;\n  background-color: #1d1d1d;\n"]);return Nt=function(){return n},n}function Rt(){var n=Object(x.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: #f4f4f4;\n  font-weight: 600;\n  letter-spacing: -0.01488em;\n  padding-right: 8px;\n  background-color: #1d1d1d;\n  z-index: 1;\n"]);return Rt=function(){return n},n}function Tt(){var n=Object(x.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  margin-bottom: 4px;\n\n  ::before {\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    content: '';\n    background: #373737;\n    top: 10px;\n  }\n"]);return Tt=function(){return n},n}function Ut(){var n=Object(x.a)(["\n  width: calc(100% - 72px);\n  display: block;\n  margin-bottom: 2px;\n"]);return Ut=function(){return n},n}function Wt(){var n=Object(x.a)(["\n  width: 56px;\n  margin-bottom: 14px;\n"]);return Wt=function(){return n},n}function Yt(){var n=Object(x.a)(["\n  position: relative;\n  width: 56px;\n"]);return Yt=function(){return n},n}function qt(){var n=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 24px;\n  width: 100%;\n  transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n  font-size: 16px;\n"]);return qt=function(){return n},n}var Jt=j.a.li(qt()),Gt=j.a.div(Yt()),Xt=j.a.img(Wt()),_t=j.a.div(Ut()),Ht=j.a.div(Tt()),Vt=j.a.h5(Rt()),Zt=j.a.span(Nt()),$t=j.a.div(Kt()),ne=j.a.button(Pt()),te=j.a.small(Et()),ee=function(n){var t=n.order,e=n.onDelete,i=n.setOpenItem,c=n.index,o=t.name,a=t.url,u=t.choice,d=t.topping,p=t.shortcode,l=t.weight,f=t.count,b=I(f),x=Object(s.a)(Object(s.a)({},t),{},{count:b.count}),j=On(mn(x)),h=d.filter((function(n){return n.checked})).map((function(n){return n.name})).join(", ");return Object(r.jsxs)(Jt,{children:[Object(r.jsxs)(Gt,{children:[Object(r.jsx)(Xt,{src:a,alt:o}),Object(r.jsx)(qn,Object(s.a)({},b))]}),Object(r.jsxs)(_t,{children:[Object(r.jsxs)(Ht,{children:[Object(r.jsx)(Vt,{children:o}),Object(r.jsx)(Zt,{children:j})]}),Object(r.jsxs)($t,{children:[h&&Object(r.jsx)(te,{children:h}),u&&Object(r.jsx)(te,{children:u}),!h&&!u&&Object(r.jsxs)(te,{children:[p," ",l]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(ne,{onClick:function(){return i(Object(s.a)(Object(s.a)({},t),{},{index:c}))},children:Object(r.jsx)(Qt.a,{style:{color:"#f7cc10"}})}),Object(r.jsx)(ne,{onClick:function(){return e(c)},children:Object(r.jsx)(En.a,{style:{color:"#f7cc10"}})})]})]})]})]})};function re(){var n=Object(x.a)([""]);return re=function(){return n},n}function ie(){var n=Object(x.a)(["\n  border-color: #373737;\n  background: #373737;\n  color: #888;\n  outline: none;\n  font-size: 16px;\n  line-height: 20px;\n  padding: 12px;\n  text-transform: uppercase;\n  font-weight: 700;\n  transition: all 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  margin-left: auto;\n  margin-right: auto;\n\n  :hover {\n    background: #ffd900;\n    color: #0f0f0f;\n  }\n"]);return ie=function(){return n},n}function ce(){var n=Object(x.a)(["\n  margin-bottom: 20px;\n"]);return ce=function(){return n},n}function oe(){var n=Object(x.a)(["\n  margin-bottom: 5px;\n  width: 100%;\n"]);return oe=function(){return n},n}function ae(){var n=Object(x.a)(["\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n"]);return ae=function(){return n},n}function ue(){var n=Object(x.a)(["\n  width: 600px;\n  padding: 40px 30px 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #1d1d1d;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n"]);return ue=function(){return n},n}function se(){var n=Object(x.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n  }\n"]);return se=function(){return n},n}function de(){var n=Object(x.a)(["\n  font-size: 55px;\n  margin-bottom: 50px;\n  text-align: center;\n\n  @media (max-width: 576px) {\n    font-size: 30px;\n    margin-bottom: 20px;\n  }\n"]);return de=function(){return n},n}function pe(){var n=Object(x.a)(["\n  padding-top: 80px;\n  padding-bottom: 50px;\n  color: ",";\n"]);return pe=function(){return n},n}var le=j.a.section(pe(),h),fe=j.a.h2(de()),be=j.a.div(se()),xe=j.a.ul(ue()),je=j.a.form(ae()),he=j.a.input(oe()),ge=j.a.div(ce()),me=j.a.button(ie()),Oe=j.a.div(re()),ve=function(n){var t=n.orders,e=n.setOrders,i=n.setOpenItem,c=t.reduce((function(n,t){return mn(t)+n}),0),o=t.reduce((function(n,t){return n+t.count}),0),a=function(n){return e(t.filter((function(t,e){return e!==n})))};return Object(r.jsx)(ke,{children:Object(r.jsxs)(le,{children:[Object(r.jsx)(fe,{children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),Object(r.jsxs)(be,{children:[t.length>0?Object(r.jsx)(xe,{children:t.map((function(n,t){return Object(r.jsx)(ee,{order:n,onDelete:a,setOpenItem:i,index:t},n.id+n.name)}))}):Object(r.jsx)(Oe,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u043f\u0443\u0441\u0442"}),Object(r.jsxs)(je,{children:[Object(r.jsx)(he,{type:"text",name:""}),Object(r.jsx)(he,{type:"text",name:""}),Object(r.jsx)(he,{type:"text",name:""})]})]}),Object(r.jsxs)(ge,{children:["\u0412\u0441\u0435\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435: ",o]}),Object(r.jsxs)(ge,{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",On(c)]}),Object(r.jsx)(me,{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})})};function we(){var n=Object(x.a)(["\n  width: 1280px;\n  margin: 0 auto;\n\n  @media (max-width: 1283px) {\n    width: 940px;\n  }\n\n  @media (max-width: 992px) {\n    width: 700px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]);return we=function(){return n},n}var ye=j.a.div(we()),ke=function(n){var t=n.children;return Object(r.jsx)(ye,{children:t})};function ze(){var n=Object(x.a)(["\n  color: ",";\n"]);return ze=function(){return n},n}var Ce=j.a.span(ze(),(function(n){return n.color})),Ie=function(n){var t=n.color,e=n.children;return Object(r.jsx)(Ce,{color:t,children:e})};e(56);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(u.a,{children:Object(r.jsx)(B,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.60c7005a.chunk.js.map