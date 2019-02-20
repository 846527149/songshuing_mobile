<template>
  <div class="index">
    <com_logo/>
    <com_menu/>
    <com_banner/>
    <com_goods_js/>
    <com_goods_pj/>
    <com_news/>
    <com_contact/>
    <com_tabmenu/>
    <com_footer/>
  </div>
</template>

<script>
import com_menu from "../components/com_menu";
import com_logo from "../components/com_logo";
import com_banner from "../components/com_banner";
import com_goods_js from "../components/com_goods_js";
import com_goods_pj from "../components/com_goods_pj";
import com_news from "../components/com_news";
import com_contact from "../components/com_contact";
import com_tabmenu from "../components/com_tabmenu";
import com_footer from "../components/com_footer";


export default {
  name: "index",
  components: {
    com_menu,
    com_logo,
    com_banner,
    com_goods_js,
    com_goods_pj,
    com_news,
    com_contact,
    com_tabmenu,
    com_footer
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
</style>

