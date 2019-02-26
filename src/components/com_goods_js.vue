<template>
  <div class="com_pane">
    <div class="com_pane_title">
      <h1><i class="git"></i>景观松树<a href="#">更多</a></h1>
    </div>
    <div class="com_goods_list">
      <ul>
        <li
          v-for="(item,index) in goodsList"
          :key="index"
        >
          <router-link :to="{ path: item.url, query: { code: item.code}}">
            <img
              v-lazy="item.img"
              art="景观松树"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import goodsResponse from "../../src/data/goods.json";
export default {
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
        if (element.type == "01") goodsArray.push(element);
      });
      this.goodsList = goodsArray;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

