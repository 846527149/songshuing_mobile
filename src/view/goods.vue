<template>
  <div class="index">
    <com_logo/>
    <com_menu/>
    <com_banner/>
    <div class="goods_bg">
      <div class="part-pane-title">精品松树
        <br>
        <span></span>
      </div>
      <div class="com_goods_list">
        <ul>
          <li v-for="(item,index) in goodsList" :key="index">
             <router-link :to="{ path: item.url, query: { code: item.code}}">
              <img :src="item.img" art="景观松树">
             </router-link>
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
import goodsResponse from "../../src/data/goods.json";

export default {
  name: "goods",
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
      goodsList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let goodsData = goodsResponse.goods;
      let goodsArray = [];
      goodsData.forEach(function(element, index) {
        goodsArray.push(element);
      });
      this.goodsList = goodsArray;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

