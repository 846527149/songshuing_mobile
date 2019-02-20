<template>
  <div class="com_pane">
    <div class="com_pane_title">
      <h1><i class="git"></i>新闻动态<a href="#">更多</a></h1>
    </div>
    <div class="com_news_list">
      <ul>
        <li
          v-for="(item,index) in newsList"
          :key="index"
        >
          <router-link :to="{ path: item.url, query: { code: item.code}}">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import newsResponse from "../../src/data/news.json";
export default {
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

