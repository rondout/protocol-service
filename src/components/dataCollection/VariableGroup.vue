<template>
  <div class="variable-group-container">
    <div class="head-buttons">
      <a-button>{{ $t("dataCollection.groupList") }}</a-button>
      <a-button @click="openDrawer" type="primary">{{
        $t("dataCollection.addNewGroup")
      }}</a-button>
    </div>
    <div class="variable-table-container">
      <a-table
        :dataSource="groupList"
        :rowKey="(record) => record.id"
        :columns="columns"
        size="middle"
      >
        <template slot="dataReport" slot-scope="text">{{
          text === true
            ? $t("dataCollection.isTrue")
            : $t("dataCollection.isFalse")
        }}</template>
        <template slot="operation" slot-scope="text, record">
          <div class="table-button-container">
            <a-button
              size="small"
              type="primary"
              style="margin-right: 10px"
              @click="modifyGroup(record)"
              >{{ $t("dataCollection.modify") }}</a-button
            >
            <a-button
              @click="deleteGroup(record)"
              size="small"
              type="danger"
              >{{ $t("dataCollection.delete") }}</a-button
            >
          </div>
        </template>
      </a-table>
    </div>
    <ConfigGroupModal
      :details="modalDetails"
      :visible="visible"
      :modalTitle="modalTitle"
      @closeDrawer="closeDrawer"
    />
  </div>
</template>

<script>
import dataCollectionService from "@/service/dataCollectionService";
import ConfigGroupModal from "@/components/dataCollection/ConfigGroupModal";
export default {
  components: { ConfigGroupModal },
  data() {
    return {
      groupList: [],
      dataCollectionService,
      columns: [],
      visible: false,
      modalDetails: {},
      modalTitle: this.$t("dataCollection.addNewGroup"),
    };
  },
  methods: {
    getGroups() {
      this.dataCollectionService.getGroups().then((res) => {
        this.groupList = res;
      });
    },
    modifyGroup(record) {
      this.modalTitle = this.$t("dataCollection.modifyGroup");
      this.modalDetails = record;
      this.visible = true;
    },
    deleteGroup(record) {
      const that = this;
      this.$confirm({
        title:
          that.$t("dataCollection.deleteGroupTitle")[0] +
          record.groupName +
          that.$t("dataCollection.deleteGroupTitle")[1],
        centered: true,
        content: that.$t("dataCollection.deleteGroupContent"),
        onOk() {
          // 发起删除请求
        },
        onCancel() {},
      });
    },
    closeDrawer() {
      this.visible = false;
    },
    openDrawer() {
      this.modalDetails = {};
      this.modalTitle = this.$t("dataCollection.addNewGroup");
      this.visible = true;
    },
    refresh() {},
    initColumns() {
      this.columns = [
        {
          title: "ID",
          dataIndex: "id",
          sorter: (a, b) => a.id > b.id,
        },
        {
          title: this.$t("dataCollection.groupName"),
          dataIndex: "groupName",
        },
        {
          title: this.$t("dataCollection.collectInterval"),
          dataIndex: "collectInterval",
        },
        {
          title: this.$t("dataCollection.reportInterval"),
          dataIndex: "reportInterval",
        },
        {
          title: this.$t("dataCollection.dataReport"),
          dataIndex: "dataReport",
          scopedSlots: { customRender: "dataReport" },
        },
        {
          title: this.$t("dataCollection.operation"),
          //   dataIndex: "updateTime",
          width: 150,
          scopedSlots: { customRender: "operation" },
          customCell: () => {
            return {
              style: {
                padding: "0 10px 0 0 !important",
                margin: "0 !important",
              },
            };
          },
        },
      ];
    },
  },
  created() {
    this.initColumns();
    this.getGroups();
  },
};
</script>

<style scoped>
.head-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>