"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const routes_1 = require("../routes");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const response_interceptor_1 = require("./interceptor/response.interceptor");
const request_interceptor_1 = require("./interceptor/request.interceptor");
const sensor_reading_module_1 = require("./modules/sensor-reading/sensor-reading.module");
const sensor_module_1 = require("./modules/sensor/sensor.module");
const crop_module_1 = require("./modules/crop/crop.module");
const crop_budget_module_1 = require("./modules/crop-budget/crop-budget.module");
const actuator_module_1 = require("./modules/actuator/actuator.module");
const fertilizer_shedule_module_1 = require("./modules/fertilizer-shedule/fertilizer-shedule.module");
const polytunnel_module_1 = require("./modules/polytunnel/polytunnel.module");
const user_module_1 = require("./modules/user/user.module");
const notification_module_1 = require("./modules/notification/notification.module");
const irrigation_logs_module_1 = require("./modules/irrigation-logs/irrigation-logs.module");
const mqtt_service_1 = require("./modules/mqtt/mqtt.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env`,
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.dataSourceOptions),
            core_1.RouterModule.register(routes_1.routes),
            sensor_reading_module_1.SensorReadingModule,
            sensor_module_1.SensorModule,
            crop_module_1.CropModule,
            crop_budget_module_1.CropBudgetModule,
            actuator_module_1.ActuatorModule,
            fertilizer_shedule_module_1.FertilizerSheduleModule,
            polytunnel_module_1.PolytunnelModule,
            user_module_1.UserModule,
            notification_module_1.NotificationModule,
            irrigation_logs_module_1.IrrigationLogsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            mqtt_service_1.MqttService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_interceptor_1.ResponseInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: request_interceptor_1.RequestInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map