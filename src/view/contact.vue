<template>
  <div class="index">
    <com_logo/>
    <com_menu/>
    <com_banner/>
    <div class="contact_bg">
      <div class="part-pane-title">联系我们
        <br>
        <span></span>
      </div>
      <div class="contact_content">
        <div id="allmap" class="map"></div>
      </div>
    </div>
    <com_contact/>
    <com_footer/>
    <com_tabmenu/>
  </div>
</template>

<script>
import com_menu from "../components/com_menu";
import com_logo from "../components/com_logo";
import com_banner from "../components/com_banner";
import com_contact from "../components/com_contact";
import com_tabmenu from "../components/com_tabmenu";
import com_footer from "../components/com_footer";
import BMap from "BMap";
export default {
  name: "about",
  components: {
    com_menu,
    com_logo,
    com_banner,
    com_contact,
    com_tabmenu,
    com_footer,
    BMap
  },
  data() {
    return {
      map: ""
    };
  },
  mounted() {
    //创建实例
    var map = new BMap.Map("allmap");
    //创建坐标点
    var point = new BMap.Point(117.906882,36.221992);
    var marker = new BMap.Marker(point);
	  map.addOverlay(marker);
    //初始化实例，传入坐标点并设置地图级别
    map.centerAndZoom(point, 12);
    map.enableScrollWheelZoom(true);
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/index.less");
.map {
  height: 300px;
  width: 100%;
  display: block;
  margin-top: 20px;
}
.contact_content{
  padding: 5px;
}
</style>

