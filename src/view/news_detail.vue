<template>
  <div class="index">
    <com_logo />
    <com_menu />
    <com_banner />
    <div class="news_bg">
      <div class="part-pane-title">新闻动态
        <br>
        <span></span>
      </div>
      <div class="news_content">
        <div class="news_title">
          <h1>{{newsEntity.title}}</h1>
        </div>
        <div class="news_creater">
          <h1>创建时间：{{newsEntity.createdate}}&nbsp;&nbsp;共620人阅读</h1>
        </div>
        <div class="clear"></div>
        <div class="news_p">
          {{newsEntity.title}}
        </div>
      </div>
      <div class="mini_more">
        <router-link to="news">更多新闻动态</router-link>
      </div>
    </div>
    <com_contact />
    <com_footer />
    <com_tabmenu />
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
  name: "news_detail",
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
      newsEntity: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var code = this.$route.query.code;
      let newsData = newsResponse.news;
      let newsEntity_Data = null;
      newsData.forEach(function(element, index) {
        if (element.code == code) {
          newsEntity_Data = element;
        }
      });
      this.newsEntity = newsEntity_Data;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
.news_title {
  h1 {
    font-size: 18px;
    background: #fdfdfd;
    text-align: center;
    color: #444;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }
}
.news_p {
  padding: 10px;
}
.news_creater {
  margin-bottom: 15px;
  background: #fafafa;
  color: #444;
  height: 45px;
  line-height: 45px;
  font-weight: bold;
  font-size: 15px;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>

