<template>
  <div class="com_pane">
    <div class="com_pane_title">
      <h1><i class="git"></i>联系我们<a href="#">更多</a></h1>
    </div>
    <div class="com_contact_list">
      <ul>
        <li>{{newsList.companyname}}</li>
        <li>联系人：{{newsList.contactname}}</li>
        <li>联系电话：{{newsList.telephone1}}</li>
        <li>联系电话：{{newsList.telephone2}}</li>
        <li>联系地址：{{newsList.address}}</li>
        <li>公司网址：{{newsList.website}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import contactResponse from "../../src/data/contact.json";
export default {
  data() {
    return {
      newsList:contactResponse
    };
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

