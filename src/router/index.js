import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    component: () => import("@/components/index/Index"),
    children: [
      {
        path: "",
        redirect: "status"
      },
      {
        path: 'status',
        name: 'Status',
        component: () => import("@/components/home/Home")
      },
      {
        path: 'quickSetting',
        name: 'QuickSetting',
        component: () => import("@/components/quickSettings/QuickSettings")
      },
      {
        path: 'dataCollection',
        // name: 'Products',
        component: () => import("@/components/dataCollection/DataCllection"),
        children: [
          {
            path: "",
            redirect: "collectStatus"
          },
          {
            path: "collectStatus",
            name: "CollectStatus",
            component: () => import("@/components/dataCollection/CollectStatus")
          },
          {
            path: "collectConfigure",
            name: "CollectConfigure",
            component: () => import("@/components/dataCollection/CollectConfigure")
          },
          {
            path: "variableGroup",
            name: "VariableGroup",
            component: () => import("@/components/dataCollection/VariableGroup")
          }
        ]
      },
      {
        path: 'cloudService',
        name: 'cloudService',
        component: () => import("@/components/cloudService/CloudService")
      },
      {
        path: 'logs',
        name: 'logs',
        component: () => import("@/components/logs/Logs")
      },
      {
        path: 'alarms',
        // name: 'Alarms',
        component: () => import("@/components/products/Products"),
        children: [
          {
            path: "",
            redirect: "alarmsRule"
          },
          {
            path: "alarmsRule",
            name: "AlarmsRule",
            component: () => import("@/components/products/Child1")
          },
          {
            path: "alarmNotifier",
            name: "AlarmNotifier",
            component: () => import("@/components/products/Child2")
          },
          {
            path: "alarmRecord",
            name: "alarmRecord",
            component: () => import("@/components/products/Child3")
          }
        ]
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

console.log(process.env.NODE_ENV);
export default router
