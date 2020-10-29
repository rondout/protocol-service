<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      width="250"
      v-model="$store.state.collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo">
        <!-- <img
          v-if="$store.state.collapsed"
          style="width: 100%; height: 100%"
          src="../../assets/img/logo.svg"
          alt=""
        /> -->
        <!-- <img
          v-else
          style="width: 100%; height: 100%"
          src="@/assets/img/indexLogo.png"
          alt=""
        /> -->
        <div class="logo-font" style="width: 100%; height: 100%; color: white">
          XOS
        </div>
      </div>
      <IndexMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => ($store.state.collapsed = !$store.state.collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import IndexMenu from "@/components/index/IndexMenu";
import IndexContent from "@/components/index/IndexContent";
export default {
  components: { IndexMenu, IndexContent },
  data() {
    return {};
  },
};
</script>

<style scoped>
.logo-font {
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 64px;
  font-weight: bold;
}
</style>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0;
}
</style>
