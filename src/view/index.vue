<template>
  <div>
    <com_logo/>
    <com_menu/>
    <com_banner/>
  </div>
</template>

<script>
import com_menu from "../components/com_menu";
import com_logo from "../components/com_logo";
import com_banner from "../components/com_banner";


export default {
  name: "index",
  components: {
    com_menu,
    com_logo,
    com_banner
  }
};
</script>

