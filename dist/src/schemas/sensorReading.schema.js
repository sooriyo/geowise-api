"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorReading = void 0;
const typeorm_1 = require("typeorm");
const sensor_schema_1 = require("./sensor.schema");
let SensorReading = class SensorReading extends typeorm_1.BaseEntity {
};
exports.SensorReading = SensorReading;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SensorReading.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], SensorReading.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SensorReading.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SensorReading.prototype, "humidity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SensorReading.prototype, "soilMoisture", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], SensorReading.prototype, "lightIntensity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sensor_schema_1.Sensor, sensor => sensor.sensorReadings),
    __metadata("design:type", sensor_schema_1.Sensor)
], SensorReading.prototype, "sensor", void 0);
exports.SensorReading = SensorReading = __decorate([
    (0, typeorm_1.Entity)('tbl_sensor_reading')
], SensorReading);
//# sourceMappingURL=sensorReading.schema.js.map