<template>
  <div>
    <a-modal
      :centered="true"
      :title="modalTitle"
      :visible="visible"
      :destroyOnClose="true"
      :confirm-loading="confirmLoading"
      :okButtonProps="{ props: { disabled: ableToCreate() } }"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
        <a-form-item :label="$t('dataCollection.groupName')">
          <a-input
            v-decorator="[
              'groupName',
              {
                rules: [
                  {
                    required: true,
                    message: $t('dataCollection.needGroupName'),
                  },
                ],
                validateTrigger: ['blur'],
                initialValue: hasInitValue ? details.groupName : '',
              },
            ]"
          />
        </a-form-item>
        <a-form-item :label="$t('dataCollection.collectInterval')">
          <a-input
            v-decorator="[
              'collectInterval',
              {
                rules: [
                  {
                    required: true,
                    message: $t('dataCollection.needCollectInterval'),
                  },
                ],
                validateTrigger: ['blur'],
                initialValue: hasInitValue ? details.collectInterval : '',
              },
            ]"
          />
        </a-form-item>
        <a-form-item :label="$t('dataCollection.reportInterval')">
          <a-input
            v-decorator="[
              'reportInterval',
              {
                rules: [
                  {
                    required: true,
                    message: $t('dataCollection.needReportInterval'),
                  },
                ],
                validateTrigger: ['blur'],
                initialValue: hasInitValue ? details.reportInterval : '',
              },
            ]"
          />
        </a-form-item>
        <a-form-item :label="$t('dataCollection.dataReport')">
          <a-select
            v-decorator="[
              'dataReport',
              {
                rules: [
                  {
                    required: true,
                    message: $t('dataCollection.needReportOrNot'),
                  },
                ],
                validateTrigger: ['blur'],
                initialValue: hasInitValue ? (details.dataReport ? 0 : 1) : '',
              },
            ]"
          >
            <a-select-option :value="0">{{
              $t("dataCollection.isTrue")
            }}</a-select-option>
            <a-select-option :value="1">{{
              $t("dataCollection.isFalse")
            }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
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
    details: {
      type: Object,
      default: {},
    },
    modalTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      confirmLoading: false,
    };
  },
  computed: {
    hasInitValue: function () {
      if (Object.keys(this.details).length) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    handleOk() {
      this.form.validateFields((err, values) => {
        console.log(err, values);
      });
    },
    handleCancel() {
      this.$emit("closeDrawer");
    },
    ableToCreate() {
      let flag = false;
      this.form.validateFields((err, values) => {
        if (Object.values(values).length == 0) {
          flag = true;
        } else {
          Object.values(values).map((v) => {
            if (v === "" || v === undefined) {
              flag = true;
            }
          });
        }
      });
      return flag;
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  watch: {
    details: function () {
      console.log("watching", this.details);
    },
  },
};
</script>

<style>
</style>