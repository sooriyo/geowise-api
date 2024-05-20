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
exports.Sensor = void 0;
const typeorm_1 = require("typeorm");
const polytunnel_schema_1 = require("./polytunnel.schema");
const sensorReading_schema_1 = require("./sensorReading.schema");
let Sensor = class Sensor extends typeorm_1.BaseEntity {
};
exports.Sensor = Sensor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sensor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sensor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sensor.prototype, "sensorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sensor.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Sensor.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => polytunnel_schema_1.Polytunnel, polytunnel => polytunnel.sensors),
    __metadata("design:type", polytunnel_schema_1.Polytunnel)
], Sensor.prototype, "polytunnel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sensorReading_schema_1.SensorReading, sensorReading => sensorReading.sensor),
    __metadata("design:type", Array)
], Sensor.prototype, "sensorReadings", void 0);
exports.Sensor = Sensor = __decorate([
    (0, typeorm_1.Entity)('tbl_sensor')
], Sensor);
//# sourceMappingURL=sensor.schema.js.map