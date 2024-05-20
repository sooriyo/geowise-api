"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorReadingModule = void 0;
const common_1 = require("@nestjs/common");
const sensor_reading_service_1 = require("./sensor-reading.service");
const sensor_reading_controller_1 = require("./sensor-reading.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sensorReading_schema_1 = require("../../schemas/sensorReading.schema");
let SensorReadingModule = class SensorReadingModule {
};
exports.SensorReadingModule = SensorReadingModule;
exports.SensorReadingModule = SensorReadingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sensorReading_schema_1.SensorReading])],
        controllers: [sensor_reading_controller_1.SensorReadingController],
        providers: [sensor_reading_service_1.SensorReadingService],
    })
], SensorReadingModule);
//# sourceMappingURL=sensor-reading.module.js.map