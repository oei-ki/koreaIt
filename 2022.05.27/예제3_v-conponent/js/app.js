'use strict'
// 1.header-logo component를 생성하여 index.html, company.html #app 요소에 추가하시오.
Vue.component('header-logo', {
  template : '<h1><a href="http://naver.com">Home</a></h1>'
});
// 2.footerHeader(이름) 컴포넌트를 생성하여 index.html, company.html #app 요소에 추가하시오.
Vue.component('footerheader', {
  template : '<div class="footer-header"><h2><a href="index.html">logo</a></h2></div>'
});

let app = new Vue({
  el: '#app',
  data: {
    msg: 'hi vue.js!!',
    gnbList: [
      {link:'company.html',menu:'company'},
      {link:'product.html',menu:'product'},
      {link:'gallery.html',menu:'gallery'},
      {link:'notice.html',menu:'notice'}
    ]
  },
  components : {
    'footer-list' : {
      template:  '<ul><li><a href="#">list1</a></li><li><a href="#">list2</a></li></ul>'
    }
  }
});
