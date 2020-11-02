<template>
  <div class="quick-settings-container">
    <div class="colors">
      <a-button
        v-for="v of colors"
        :style="'background:' + v"
        :key="v"
        @click="changeColor(v)"
        >{{ v }}</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "#f5222d",
        "#fa541c",
        "#fa8c16",
        "#faad14",
        "#fadb14",
        "#a0d911",
        "#52c41a",
        "#13c2c2",
        "#1890ff",
        "#2f54eb",
        "#722ed1",
        "#eb2f96",
        "#666666",
      ],
    };
  },
  methods: {
    changeColor(color) {
      window.less.modifyVars({
        "primary-color": color,
        primary: color,
        "link-color": color,
        "@btn-primary-bg": color,
      });
      localStorage.colors = JSON.stringify({
        "primary-color": color,
        primary: color,
        "link-color": color,
        "@btn-primary-bg": color,
      });
    },
  },
};
</script>

<style scoped>
.quick-settings-container {
  height: 100%;
}
</style>