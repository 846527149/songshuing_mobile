<template>
  <div>
    <card>
      <div slot="content">
        <swiper :list="bannerlist"></swiper>
        <grid :show-lr-borders="false">
          <grid-item :label="item.label" v-for="(item, index) in girdMenuList" :key="index">
            <img slot="icon" :src="item.icon">
          </grid-item>
        </grid>
      </div>
    </card>
    <card>
      <div slot="content">
        <div class="remdiv">1</div>
      </div>
    </card>
  </div>
</template>

<script>
import { Card } from "vux";
import { Swiper } from "vux";
import { Grid, GridItem } from "vux";

export default {
  components: {
    Card,
    Swiper,
    Grid,
    GridItem
  },
  methods: {},
  data() {
    return {
      girdMenuList: [
        {
          label: "健康自测",
          icon: "./static/images/ic_checkup_report_checkup.png",
          url: "#"
        },
        {
          label: "慢病管理",
          icon: "./static/images/ic_checkup_report_contrast.png",
          url: "#"
        },
        {
          label: "体检定制",
          icon: "./static/images/ic_checkup_report_healthmanager.png",
          url: "#"
        },
        {
          label: "报告查询",
          icon: "./static/images/ic_checkup_report_screening.png",
          url: "#"
        }
      ],
      bannerlist: [
        {
          url: "#:",
          img:
            "https://img.zcool.cn/community/0112495544ca5d0000019ae9813de3.jpg@1280w_1l_2o_100sh.jpg",
          title: "新人专属套餐优惠"
        },
        {
          url: "#:",
          img:
            "https://img.zcool.cn/community/015f475544ca5d0000019ae9dd838f.jpg@1280w_1l_2o_100sh.jpg",
          title: "体检中心系统正式上线"
        },
        {
          url: "#:",
          img:
            "https://img.zcool.cn/community/01a8735544ca5d0000019ae9821574.jpg@1280w_1l_2o_100sh.jpg",
          title: "糖尿病人每日一餐推荐"
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import "../assets/less/index.less";
html {
  font-family: @main_font-family;
}
body {
  background: @main_backgroud;
  padding: 0;
  margin: 0;
}
.remdiv {
  height: 150px;
}
a {
  text-decoration: none;
}
</style>
