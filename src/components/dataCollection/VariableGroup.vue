<template>
  <div class="variable-group-container">
    <div class="head-buttons">
      <a-button>{{ $t("dataCollection.groupList") }}</a-button>
      <a-button type="primary">{{
        $t("dataCollection.addNewDevice")
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
              >修改</a-button
            >
            <a-button @click="deleteGroup(record)" size="small" type="primary"
              >删除</a-button
            >
          </div>
        </template>
      </a-table>
    </div>
    <AddGroupModal :visible="true" />
  </div>
</template>

<script>
import dataCollectionService from "@/service/dataCollectionService";
import AddGroupModal from "@/components/dataCollection/AddGroupModal";
export default {
  components: { AddGroupModal },
  data() {
    return {
      groupList: [],
      dataCollectionService,
      columns: [],
    };
  },
  methods: {
    getGroups() {
      this.dataCollectionService.getGroups().then((res) => {
        this.groupList = res;
      });
    },
    modifyGroup(record) {
      console.log("modifyGroup", record);
    },
    deleteGroup(record) {
      console.log("deleteGroup", record);
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