'use strict'
Vue.component('footer-component',{
  template : '<footer><div class="inner"><div class="footer"><h2>footer-logo</h2></div></div></footer>'
});
// router
let mainComp = { template: '<main><div class="container">main-contents</div></main>' };
let companyComp = { template: '<main><div class="container">company-contents</div></main>' };
let productComp = { template: '<main><div class="container">product-contents</div></main>' };

let routes = [
  { path: '/', component: mainComp}, //변수처리가 가능하다
  { path: '/company', component:companyComp },
  { path: '/product', component: productComp},
  { path: '/gallery', component: { template: '<main><div class="container">gallery-contents</div></main>' }},
  { path: '/notice', component: { template: '<main><div class="container">notice-contents</div></main>' }}
]
let router = new VueRouter({
  routes //변수처리가 가능하다
  // routes:[
  //   { path: '/', component: { template: '<main><div class="container">main-contents</div></main>' }},
  //   { path: '/company', component: { template: '<main><div class="container">company-contents</div></main>' }},
  //   { path: '/product', component: { template: '<main><div class="container">product-contents</div></main>' }},
  //   { path: '/gallery', component: { template: '<main><div class="container">gallery-contents</div></main>' }},
  //   { path: '/notice', component: { template: '<main><div class="container">notice-contents</div></main>' }}
  // ]  /*주소창 뒤에 붙는 게 path? 그리고 붙으면 컴포넌트가 바뀌면서 내용이 바뀐다?*/
});

let app = new Vue({
  el: '#app',
  data : {
    gnbList: [
      {path: '/company', text: 'company'},
      {path: '/product', text: 'product'},
      {path: '/gallery', text: 'gallery'},
      {path: '/notice', text: 'notice'}
    ]
  },
  router
}); // 뷰 인스턴스에 라우터 추가

// let app = new Vue({
//   router
// }).$mount('#app'); // 뷰 인스턴스에 라우터 추가
