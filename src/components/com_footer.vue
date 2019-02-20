<template>
  <div class="com_footer">
    <div class="footer_eqcode">
      <img src="/static/images/eqcode.jpg">
    </div>
    <div class="footer_bq">
      <ul>
        <li>莱芜市景海园林农民专业合作社</li>
        <li>备案号：鲁ICP备18055830号-1 </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
.com_footer {
  margin-top: 10px;
  padding: 5px;
  height: 80px;
  background: #177c00;
  .footer_eqcode{
   float: left;
    img{
    display:block;
      height: 80px;
      width: 80px;
    }
  }
  .footer_bq{
    color: #fff;
    margin-left: 80px;
    padding: 10px;
    ul li{
    font-size: 14px;
    padding: 5px;

    }
  }
}
</style>

