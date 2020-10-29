<template>
  <div>
    <a-modal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ 'ModalText' }}</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      confirmLoading: false,
    };
  },
  methods: {
      handleOk() {},
      handleCancel() {},
  },
  created() {
    console.log(this.visible);
  },
};
</script>

<style>
</style>