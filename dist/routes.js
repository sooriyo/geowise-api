"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_module_1 = require("./src/modules/user/user.module");
const sensor_module_1 = require("./src/modules/sensor/sensor.module");
const sensor_reading_module_1 = require("./src/modules/sensor-reading/sensor-reading.module");
const polytunnel_module_1 = require("./src/modules/polytunnel/polytunnel.module");
const actuator_module_1 = require("./src/modules/actuator/actuator.module");
const crop_module_1 = require("./src/modules/crop/crop.module");
const crop_budget_module_1 = require("./src/modules/crop-budget/crop-budget.module");
const notification_module_1 = require("./src/modules/notification/notification.module");
const irrigation_logs_module_1 = require("./src/modules/irrigation-logs/irrigation-logs.module");
const fertilizer_shedule_module_1 = require("./src/modules/fertilizer-shedule/fertilizer-shedule.module");
exports.routes = [
    {
        path: 'User',
        module: user_module_1.UserModule,
    }, {
        path: 'sensors',
        module: sensor_reading_module_1.SensorReadingModule,
    }, {
        path: 'polytunnels',
        module: polytunnel_module_1.PolytunnelModule,
    }, {
        path: 'sensor',
        module: sensor_module_1.SensorModule,
    },
    {
        path: 'actuator',
        module: actuator_module_1.ActuatorModule,
    },
    {
        path: 'crop',
        module: crop_module_1.CropModule,
    },
    {
        path: 'crop',
        module: crop_budget_module_1.CropBudgetModule,
    },
    {
        path: 'notification',
        module: notification_module_1.NotificationModule,
    }, {
        path: 'irrigation-log',
        module: irrigation_logs_module_1.IrrigationLogsModule,
    },
    {
        path: 'fertilizer-schedule',
        module: fertilizer_shedule_module_1.FertilizerSheduleModule,
    },
];
//# sourceMappingURL=routes.js.map