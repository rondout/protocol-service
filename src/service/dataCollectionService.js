import axios from "axios"

export default {
    getDevices() {
        return new Promise((resolve, reject) => {
            resolve([
                { id: 1, deviceName: "PLC1", status: 0, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
                { id: 2, deviceName: "PLC2", status: 1, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
                { id: 3, deviceName: "PLC3", status: 2, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
                { id: 4, deviceName: "PLC4", status: 0, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
                { id: 5, deviceName: "PLC5", status: 1, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
                { id: 6, deviceName: "PLC6", status: 0, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
                { id: 7, deviceName: "PLC7", status: 2, apiType: "串口", protocol: "Modbus Tcp", searil: "COM", overtime: "100" },
            ])
        })
    },

    getVariables() {
        return new Promise((resolve, reject) => {
            resolve([
                { id: 1, variableName: "搅拌1", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
                { id: 2, variableName: "搅拌2", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
                { id: 3, variableName: "搅拌3", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
                { id: 4, variableName: "搅拌4", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
                { id: 5, variableName: "搅拌5", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
                { id: 6, variableName: "搅拌6", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
                { id: 7, variableName: "搅拌7", group: '注塑', assignedDevice: "三菱", register: "M", variableValue: "16", updateTime: 1603958318383 },
            ])
        })
    },

    getGroups() {
        return new Promise((resolve, reject) => {
            resolve([
                { id: 1, groupName: "搅拌1", collectInterval: '40s', reportInterval: "60", dataReport: true },
                { id: 2, groupName: "搅拌2", collectInterval: '40s', reportInterval: "60", dataReport: false },
                { id: 3, groupName: "搅拌3", collectInterval: '40s', reportInterval: "60", dataReport: true },
                { id: 4, groupName: "搅拌4", collectInterval: '40s', reportInterval: "60", dataReport: false },
                { id: 5, groupName: "搅拌5", collectInterval: '40s', reportInterval: "60", dataReport: true },
                { id: 6, groupName: "搅拌6", collectInterval: '40s', reportInterval: "60", dataReport: true },
                { id: 7, groupName: "搅拌7", collectInterval: '40s', reportInterval: "60", dataReport: true },
            ])
        })
    }

}