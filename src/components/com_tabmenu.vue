<template>
  <div class="com_tabmenu_bg">
    <div class="com_tabmenu">
      <ul>
        <li>
          <a
            href="tel:13206349983"
            title="拨打电话"
          >
            <em>
              <img
                src="/static/images/phone.png"
                class="loaded"
              >
            </em>
            拨打电话
          </a>
        </li>
        <li>
          <router-link
            to="goods"
            title="景观松树"
          >
            <em>
              <img
                src="/static/images/menu.png"
                class="loaded"
              >
            </em>
            景观盆景
          </router-link>
        </li>
        <li>
          <router-link
            to="goods"
            title="造型盆景"
          >
            <em>
              <img
                src="/static/images/menu.png"
                class="loaded"
              >
            </em>
            造型松树
          </router-link>
        </li>
        <li>
          <router-link
            to="contact"
            title="联系我们"
          >
            <em>
              <img
                src="/static/images/contact.png"
                class="loaded"
              >
            </em>
            联系我们
          </router-link>
        </li>
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
</style>

