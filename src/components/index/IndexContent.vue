<template>
  <div class="content-container">
    <div
      @click="onClick('demo1')"
      :style="demo1Clicked ? 'border-color: red' : ''"
      class="demo1"
    ></div>
    <div
      @click="onClick('demo2')"
      :style="demo2Clicked ? 'border-color: red' : ''"
      class="demo2"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo1Clicked: false,
      demo2Clicked: false,
      onControll: false,
    };
  },
  methods: {
    onClick(v) {
      if (!this.onControll) {
        console.log(v, this.onControll);
      } else {
        console.log("按住controll", v);
        this[v + "Clicked"] = true;
      }
    },
    onKeyDown(e, v) {
      const that = this;
      document.onkeydown = function (e) {
        if (e.code.startsWith("Control")) {
          if (!that.onControll) {
            that.onControll = true;
          }
        }
      };
      document.onkeyup = onDestoey;
      function onDestoey() {
        that.onControll = false;
        that.demo1Clicked = that.demo2Clicked = false;
      }
    },
  },
  mounted() {
    this.onKeyDown();
  },
};
</script>

<style scoped>
.demo1,
.demo2 {
  width: 300px;
  height: 300px;
  background-color: green;
  border: 9px solid transparent;
}
.demo2 {
  background-color: blue;
  margin-top: 30px;
}
</style>
