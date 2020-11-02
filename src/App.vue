<template>
  <a-config-provider :locale="lang[$i18n.locale]">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import en_US from "ant-design-vue/lib/locale-provider/en_US";
import testService from "@/service/testService";
export default {
  data() {
    return {
      lang: {
        zh_CN: zh_CN,
        en_US: en_US,
      },
    };
  },
  created() {
    if (localStorage.colors) {
      window.less.modifyVars(JSON.parse(localStorage.colors));
    }
  },
  mounted() {
    window.a = this;
    testService
      .getLoginParams()
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
