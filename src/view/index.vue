<template>
  <div>
    <com_logo />
    <com_menu />
    <com_banner />
    <com_goods_js />
    <com_goods_pj />
    <com_news />
    <com_contact />
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

export default {
  name: "index",
  components: {
    com_menu,
    com_logo,
    com_banner,
    com_goods_js,
    com_goods_pj,
    com_news,
    com_contact
  }
};
</script>

