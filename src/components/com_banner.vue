<template>
  <div class="com_banner" >
    <swiper :list="bannerList" :show-desc-mask="false" height="160px"></swiper>
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
        { img: "http://media.songshuing.com/banner_mobile_1.jpg" },
        { img: "http://media.songshuing.com/banner_mobile_2.jpg" }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
</style>

