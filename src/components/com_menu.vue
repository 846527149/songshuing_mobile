<template>
  <div class="com_menu_bg">
    <div class="com_menu">
      <ul>
        <li :class="item.class" v-for="(item, index) in menuData" :key="index">
          <router-link :to="item.link">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        { title: "网站首页", link: "/", class: "menu-item current-menu-item" },
        { title: "公司介绍", link: "about", class: "menu-item" },
        { title: "造型松树", link: "goods_zxs", class: "menu-item" },
        { title: "造型盆景", link: "goods_pj", class: "menu-item" },
        { title: "新闻动态", link: "news", class: "menu-item" },
        { title: "工程案例", link: "goods_zxs", class: "menu-item" },
        { title: "联系我们", link: "contact", class: "menu-item" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

