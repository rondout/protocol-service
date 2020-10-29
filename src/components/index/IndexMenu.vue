<template>
  <div>
    <div class="index-menu-container" v-if="$store.state.collapsed">
      <a-menu
        theme="dark"
        @click="menuClick"
        mode="inline"
        :key="i"
        v-for="(v, i) of $nav.menu.TENANT_ADMIN"
        :default-selected-keys="['1']"
        :selectedKeys="selectedKey"
        :inline-collapsed="$store.state.collapsed"
      >
        <a-menu-item v-if="!v.children" :key="v.path">
          <i :class="'iconfont icon-' + v.name"></i>
          <a-icon style="display: none" type="pie-chart" />
          <span>{{ $t('menu.' + v.name)}}</span>
        </a-menu-item>
        <a-sub-menu @titleClick="subMenuChange" v-else :key="v.path">
          <span style="display: flex; align-items: center" slot="title">
            <i :class="'iconfont icon-' + v.name"></i>
            <a-icon style="display: none" type="pie-chart" />
            <span>{{ $t('menu.' + v.name)}}</span>
          </span>
          <a-menu-item v-for="item of v.children" :key="item.path">
            <i :class="'iconfont icon-' + item.name"></i>
            <a-icon style="display: none" type="pie-chart" />
            <span>{{ $t('menu.' + item.name) }}</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="index-menu-container" v-else>
      <a-menu
        theme="dark"
        :openKeys="openSubMenu"
        @click="menuClick"
        mode="inline"
        :key="i"
        v-for="(v, i) of $nav.menu.TENANT_ADMIN"
        :default-selected-keys="['1']"
        :selectedKeys="selectedKey"
        :inline-collapsed="$store.state.collapsed"
      >
        <a-menu-item v-if="!v.children" :key="v.path">
          <i :class="'iconfont icon-' + v.name"></i>
          <a-icon style="display: none" type="pie-chart" />
          <span>{{ $t('menu.' + v.name) }}</span>
        </a-menu-item>
        <a-sub-menu @titleClick="subMenuChange" v-else :key="v.path">
          <span style="display: flex; align-items: center" slot="title">
            <i :class="'iconfont icon-' + v.name"></i>
            <a-icon style="display: none" type="pie-chart" />
            <span>{{ $t('menu.' + v.name) }}</span>
          </span>
          <a-menu-item v-for="item of v.children" :key="item.path">
            <i :class="'iconfont icon-' + item.name"></i>
            <a-icon style="display: none" type="pie-chart" />
            <span>{{ $t('menu.' + item.name) }}</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedKey: [],
      openSubMenu: [],
    };
  },
  methods: {
    menuClick({ item, key, keyPath }) {
      this.selectedKey = [key];
      if (keyPath.length === 1) {
        this.openSubMenu = [];
      }
      if (this.$route.path !== this.selectedKey[0]) {
        this.$router.push({ path: this.selectedKey[0] });
      }
    },
    subMenuChange({ key, domEvent }) {
      if (this.openSubMenu !== [key]) {
        this.openSubMenu = [key];
        for (let item of this.$nav.menu.TENANT_ADMIN) {
          if (item.path === key) {
            this.selectedKey = [item.children[0].path];
          }
        }
        if (this.$route.path !== this.selectedKey[0]) {
          this.$router.push({ path: this.selectedKey[0] });
        }
      }
      if (this.$store.state.indexMenuDrawer) {
        this.$store.state.indexMenuDrawer = false;
      }
    },
    initMenu() {
      let path = this.$route.path.split("/");
      if (path.length === 3) {
        this.openSubMenu = ["/" + path[1]];
      }
      this.selectedKey = [this.$route.path];
    },
  },
  created() {
    this.initMenu();
  },
  watch: {
    "$route.path": function () {
      this.initMenu();
    },
  },
};
</script>

<style>
.ant-menu-item {
  display: flex;
  align-items: center;
}
.index-menu-container {
  overflow-y: auto;
  height: calc(100% - 64px);
}
</style>