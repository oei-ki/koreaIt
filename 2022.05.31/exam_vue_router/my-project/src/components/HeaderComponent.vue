<template>
  <header id="header">
    <h1 id="top-logo">
      <a href="index.html">XWOOD</a>
    </h1>
    <!--메인메뉴-->
    <nav id="top-nav">
      <ul>
        <li v-for="(list,index) in menuList">
          <router-link v-bind:to="list.href">{{list.text}}</router-link>
          <!--company submenu-->
          <ul v-if="index == 0" class="sub-menu">
            <li v-for="list in companySubMeunList">
              <a v-bind:href="list.href">{{list.text}}</a>
            </li>
          </ul>
          <!--community submenu-->
          <ul v-if="index == 3" class="sub-menu">
            <li v-for="list in communitySubMeunList">
              <a v-bind:href="list.href">{{list.text}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
      menuList: [
        {href:'/company',text:'Company'},
        {href:'/product',text:'Product'},
        {href:'/gallery',text:'Gallery'},
        {href:'/notice',text:'Community'},
        {href:'/location',text:'Location'}
      ],
      companySubMeunList : [
        {href:'/company',text:'Introduce'},
        {href:'/ci',text:'CI'},
        {href:'/history',text:'History'}
      ],
      communitySubMeunList : [
        {href:'/notice',text:'notice'},
        {href:'/faq',text:'FAQ'}
      ]
    }
  }
}
</script>
<style>
</style>
