<template>
  <div class="com_banner" >
    <swiper :list="bannerList" :show-desc-mask="false" :aspect-ratio="400/900"></swiper>
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
        { img: "./static/images/banner_mobile_2.jpg" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>

