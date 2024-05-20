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
exports.SensorReadingController = void 0;
const common_1 = require("@nestjs/common");
const sensor_reading_service_1 = require("./sensor-reading.service");
const sensor_reading_entity_1 = require("./sensor-reading.entity");
let SensorReadingController = class SensorReadingController {
    constructor(sensorReadingService) {
        this.sensorReadingService = sensorReadingService;
    }
    async findAll() {
        return this.sensorReadingService.findAll();
    }
    async find(id) {
        return this.sensorReadingService.find(id);
    }
    async create(createSensorReadingDTO) {
        return this.sensorReadingService.create(createSensorReadingDTO);
    }
    async update(id, updateSensorReadingDTO) {
        return this.sensorReadingService.update(id, updateSensorReadingDTO);
    }
};
exports.SensorReadingController = SensorReadingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SensorReadingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SensorReadingController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_reading_entity_1.CreateSensorReadingDTO]),
    __metadata("design:returntype", Promise)
], SensorReadingController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, sensor_reading_entity_1.UpdateSensorReadingDTO]),
    __metadata("design:returntype", Promise)
], SensorReadingController.prototype, "update", null);
exports.SensorReadingController = SensorReadingController = __decorate([
    (0, common_1.Controller)('reading'),
    __metadata("design:paramtypes", [sensor_reading_service_1.SensorReadingService])
], SensorReadingController);
//# sourceMappingURL=sensor-reading.controller.js.map