<template>
  <div class="com_banner" >
    <swiper :list="bannerList" :show-desc-mask="false"></swiper>
  </div>
</template>
<script>
import { Swiper } from "vux";
export default {
  components: {
    Swiper
  },
  data() {
    return {
      bannerList: [
        { img: "./static/images/banner_mobile_1.jpg" },
        { img: "./static/images/banner_02.jpg" },
        { img: "./static/images/banner_03.jpg" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

