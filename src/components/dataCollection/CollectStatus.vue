<template>
  <div style="height: 100%">
    <div class="collect-status-headbtns">
      <a-button
        @click="changeList('device')"
        :type="btnSelected == 'device' ? 'primary' : ''"
        >{{ $t("dataCollection.deviceList") }}</a-button
      >
      <a-button
        @click="changeList('variable')"
        :type="btnSelected == 'variable' ? 'primary' : ''"
        >{{ $t("dataCollection.variableList") }}</a-button
      >
    </div>
    <div class="data-collection-table-container">
      <div style="margin-top: 40px" v-if="btnSelected === 'device'">
        <a-table
          size="middle"
          :rowKey="(record) => record.id"
          :dataSource="deviceList"
          :columns="columns"
        ></a-table>
      </div>
      <div v-else>
        <div class="table-head-buttons">
          <a-select @change="selectChange" :defaultValue="selectList[0].name">
            <a-select-option v-for="v of selectList" :key="v.value">{{
              v.name
            }}</a-select-option>
          </a-select>
          <a-tooltip :title="$t('dataCollection.read')">
            <a-button style="margin: 0 10px 0 20px" type="primary">{{
              $t("dataCollection.read")
            }}</a-button>
          </a-tooltip>
          <a-tooltip :title="$t('dataCollection.refresh')">
            <a-button class="button-icon" type="primary">
              <i class="iconfont icon-refresh"></i>
              <span>{{ $t("dataCollection.refresh") }}</span>
            </a-button>
          </a-tooltip>
        </div>
        <a-table
          :dataSource="variableList"
          :rowKey="(record) => record.id"
          :columns="variableColumns"
          size="middle"
        >
          <template slot="updateTime" slot-scope="text">{{
            $moment(text).format("YYYY-MM-DD hh:mm:ss")
          }}</template>
          <template slot="operation">
            <div class="table-button-container">
              <a-tooltip :title="$t('dataCollection.refresh')">
                <div @click="refresh" class="table-button">
                  <i class="iconfont icon-refresh"></i>
                </div>
              </a-tooltip>
            </div>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import dataCollectionService from "@/service/dataCollectionService";
export default {
  data() {
    return {
      btnSelected: "device",
      dataCollectionService,
      deviceList: [],
      variableList: [],
      columns: [],
      variableColumns: [],
      selectList: [
        { name: "所有组", value: 0 },
        { name: "默认组", value: 1 },
        { name: "注塑机", value: "2" },
      ],
    };
  },
  methods: {
    getDeviceList() {
      this.dataCollectionService
        .getDevices()
        .then((res) => {
          this.deviceList = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVariableList() {
      this.dataCollectionService
        .getVariables()
        .then((res) => {
          this.variableList = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeList(v) {
      if (this.btnSelected !== v) {
        this.btnSelected = v;
      }
    },
    refresh() {
      console.log("doRefresh");
    },
    selectChange(val) {
      console.log(val);
    },
    initColumns() {
      this.columns = [
        {
          title: "ID",
          dataIndex: "id",
          sorter:(a, b) => a.id > b.id
        },
        {
          title: this.$t("dataCollection.deviceName"),
          dataIndex: "deviceName",
        },
        {
          title: this.$t("dataCollection.status"),
          dataIndex: "status",
        },
        {
          title: this.$t("dataCollection.apiType"),
          dataIndex: "apiType",
        },
        {
          title: this.$t("dataCollection.protocol"),
          dataIndex: "protocol",
        },
        {
          title: this.$t("dataCollection.searil"),
          dataIndex: "searil",
        },
        {
          title: this.$t("dataCollection.overtime"),
          dataIndex: "overtime",
        },
      ];
    },
    initVariableColumns() {
      this.variableColumns = [
        {
          title: "ID",
          dataIndex: "id",
          sorter: (a, b) => a.id > b.id,
        },
        {
          title: this.$t("dataCollection.variableName"),
          dataIndex: "variableName",
        },
        {
          title: this.$t("dataCollection.group"),
          dataIndex: "group",
        },
        {
          title: this.$t("dataCollection.assignedDevice"),
          dataIndex: "assignedDevice",
        },
        {
          title: this.$t("dataCollection.register"),
          dataIndex: "register",
        },
        {
          title: this.$t("dataCollection.variableValue"),
          dataIndex: "variableValue",
        },
        {
          title: this.$t("dataCollection.updateTime"),
          dataIndex: "updateTime",
          scopedSlots: { customRender: "updateTime" },
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
    this.getDeviceList();
    this.getVariableList();
    this.initColumns();
    this.initVariableColumns();
  },
};
</script>

<style scoped>
/* .collect-status-headbtns {
  margin: 20px;
  margin-bottom: 0;
} */
/* .data-collection-table-container {
  margin-top: 40px;
} */
.table-head-buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
}
</style>