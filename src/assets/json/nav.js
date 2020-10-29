export default {
    "menu": {
        "TENANT_ADMIN": [
            {
                "name": "status",
                "path": "/status"
            },
            {
                "name": "quickSetting",
                "path": "/quickSetting"
            },
            {
                "name": "dataCollection",
                "path": "/dataCollection",
                "children": [
                    {
                        "name": "collectStatus",
                        "path": "/dataCollection/collectStatus"
                    },
                    {
                        "name": "collectConfigure",
                        "path": "/dataCollection/collectConfigure"
                    },
                    {
                        "name": "variableGroup",
                        "path": "/dataCollection/variableGroup"
                    }
                ]
            },
            {
                "name": "cloudService",
                "path": "/cloudService"
            },
            {
                "name": "logs",
                "path": "/logs"
            },
            // {
            //     "name": "alarms",
            //     "path": "/alarms",
            //     "children": [
            //         {
            //             "name": "alarmsRule",
            //             "path": "/alarms/alarmsRule"
            //         },
            //         {
            //             "name": "alarmNotifier",
            //             "path": "/alarms/alarmNotifier"
            //         },
            //         {
            //             "name": "alarmRecord",
            //             "path": "/alarms/alarmRecord"
            //         }
            //     ]
            // }
        ]
    }
}