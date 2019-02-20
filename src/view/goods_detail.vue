<template>
  <div class="index">
    <com_logo />
    <com_menu />
    <com_banner />
    <div class="goods_bg">
      <div class="part-pane-title">景观展示
        <br>
        <span></span>
      </div>
      <div class="goods_content">
        <img
          :src="goodsEntity.img"
          art="景观松树"
        />
      </div>
      <div class="mini_more">
         <router-link to="goods">更多景观松树</router-link>
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
import goodsResponse from "../../src/data/goods.json";
export default {
  name: "goods_detail",
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
      goodsEntity: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var code = this.$route.query.code;
      let goodsData = goodsResponse.goods;
      let goodsEntity_Data = null;
      goodsData.forEach(function(element, index) {
        if (element.code == code) {
          goodsEntity_Data = element;
        }
      });
      this.goodsEntity = goodsEntity_Data;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

