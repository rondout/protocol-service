<template>
  <div>
    <a-time-picker use12-hours @change="onChange" />
    <a-time-picker use12-hours format="h:mm:ss A" @change="onChange" />
    <a-time-picker use12-hours format="h:mm a" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(time, timeString) {
      console.log(time, timeString);
    },
  },
};
</script>
