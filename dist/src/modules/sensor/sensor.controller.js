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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorController = void 0;
const common_1 = require("@nestjs/common");
const sensor_service_1 = require("./sensor.service");
const sensor_entity_1 = require("./sensor.entity");
const mqtt_service_1 = require("../mqtt/mqtt.service");
let SensorController = class SensorController {
    constructor(sensorService, mqttService) {
        this.sensorService = sensorService;
        this.mqttService = mqttService;
    }
    sendData(data) {
        const topic = 'geowise/sensor';
        const message = JSON.stringify(data);
        return 'Data sent to ESP32';
    }
    async find(id) {
        return this.sensorService.find(id);
    }
    async create(createSensorDTO) {
        return this.sensorService.create(createSensorDTO);
    }
    async update(id, updateSensorDTO) {
        return this.sensorService.update(id, updateSensorDTO);
    }
    async findAll() {
        return this.sensorService.findAll();
    }
};
exports.SensorController = SensorController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_entity_1.SensorData]),
    __metadata("design:returntype", String)
], SensorController.prototype, "sendData", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_entity_1.CreateSensorDTO]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sensor_entity_1.UpdateSensorDTO]),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SensorController.prototype, "findAll", null);
exports.SensorController = SensorController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [sensor_service_1.SensorService, mqtt_service_1.MqttService])
], SensorController);
//# sourceMappingURL=sensor.controller.js.map