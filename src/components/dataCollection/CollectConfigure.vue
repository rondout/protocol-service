<template>
  <div class="collect-configure-container">
    <div class="collect-configure-header">
      <a-button class="header-buttons" type="primary">{{
        $t("dataCollection.rebootCollectProgram")
      }}</a-button>
      <a-button class="header-buttons" type="primary">{{
        $t("dataCollection.importAndExportConfigure")
      }}</a-button>
      <a-button class="header-buttons" type="primary">{{
        $t("dataCollection.installProtocolPackage")
      }}</a-button>
    </div>
    <div class="collect-configure-content">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-button style="margin-bottom: 5px">{{
            $t("dataCollection.deviceList")
          }}</a-button>
          <a-table
            :pagination="false"
            size="middle"
            :dataSource="deviceList"
            :columns="deviceVolumns"
            :rowKey="(record) => record.id"
          ></a-table>
          <div class="bottom-config-buttons">
            <a-button size="small" type="primary">{{
              $t("dataCollection.addNewDevice")
            }}</a-button>
            <a-button size="small" type="primary">{{
              $t("dataCollection.copyDevice")
            }}</a-button>
            <a-button size="small" type="primary">{{
              $t("dataCollection.editDevice")
            }}</a-button>
            <a-button size="small" type="primary">{{
              $t("dataCollection.deleteDevice")
            }}</a-button>
          </div>
          <div class="pagination">
            <a-pagination
              v-model="deviceCurPage"
              :total="deviceTotal"
              :pageSize="devicePageSize"
              size="small"
            ></a-pagination>
          </div>
        </a-col>
        <a-col style="padding-left: 16px" :span="16">
          <a-button style="margin-bottom: 5px">{{
            $t("dataCollection.variableList")
          }}</a-button>
          <a-table
            :pagination="false"
            size="middle"
            :dataSource="variableList"
            :columns="variableColumns"
            :rowKey="(record) => record.id"
          ></a-table>
          <div class="bottom-config-buttons">
            <a-button size="small" type="primary">{{
              $t("dataCollection.addNewVariable")
            }}</a-button>
            <a-button size="small" type="primary">{{
              $t("dataCollection.copyVariable")
            }}</a-button>
            <a-button size="small" type="primary">{{
              $t("dataCollection.editVariable")
            }}</a-button>
            <a-button size="small" type="primary">{{
              $t("dataCollection.deleteVariable")
            }}</a-button>
          </div>
          <div class="pagination">
            <a-pagination
              v-model="variableCurPage"
              :total="variableTotal"
              :pageSize="variablePageSize"
              size="small"
            ></a-pagination>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import dataCollectionService from "@/service/dataCollectionService";
export default {
  data() {
    return {
      dataCollectionService,
      deviceList: [],
      deviceVolumns: [],
      variableList: [],
      variableColumns: [],
      deviceCurPage: 1,
      deviceTotal: 50,
      devicePageSize: 8,
      variableCurPage: 1,
      variableTotal: 50,
      variablePageSize: 10,
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
    initDeviceColumns() {
      this.deviceVolumns = [
        {
          title: "ID",
          dataIndex: "id",
        },
        {
          title: this.$t("dataCollection.protocol"),
          dataIndex: "protocol",
          fixed: "right",
          width: 200,
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
        // {
        //   title: this.$t("dataCollection.updateTime"),
        //   dataIndex: "updateTime",
        //   scopedSlots: { customRender: "updateTime" },
        // },
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
    this.initDeviceColumns();
    this.initVariableColumns();
  },
};
</script>

<style scoped>
.collect-configure-header {
  display: flex;
  justify-content: flex-end;
}
.header-buttons {
  margin-left: 10px;
}
.collect-configure-container {
  height: 100%;
}
.collect-configure-content {
  height: calc(100% - 32px);
  padding-top: 16px;
}
.bottom-config-buttons {
  padding: 10px 0;
}
.pagination,
.bottom-config-buttons {
  display: flex;
  justify-content: flex-end;
}
.bottom-config-buttons > button {
  margin-left: 6px;
}
</style>