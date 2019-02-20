<template>
  <div class="index">
    <com_logo/>
    <com_menu/>
    <com_banner/>
    <div class="goods_bg">
      <div class="part-pane-title">新闻动态
        <br>
        <span></span>
      </div>
      <div class="com_news_list">
        <ul>
          <li v-for="(item,index) in newsList" :key="index">
            <router-link :to="{ path: item.url, query: { code: item.code}}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <com_contact/>
    <com_footer/>
    <com_tabmenu/>
  </div>
</template>

<script>
import com_menu from "../components/com_menu";
import com_logo from "../components/com_logo";
import com_banner from "../components/com_banner";
import com_contact from "../components/com_contact";
import com_tabmenu from "../components/com_tabmenu";
import com_footer from "../components/com_footer";
import newsResponse from "../../src/data/news.json";

export default {
  name: "news",
  components: {
    com_menu,
    com_logo,
    com_banner,
    com_contact,
    com_tabmenu,
    com_footer
  },
  data() {
    return {
       newsList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let newsData = newsResponse.news;
      let newsArray = [];
      newsData.forEach(function(element, index) {
        if (element.type == "01") newsArray.push(element);
      });
      this.newsList = newsArray;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

