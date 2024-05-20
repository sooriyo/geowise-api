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
exports.SensorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sensor_schema_1 = require("../../schemas/sensor.schema");
let SensorService = class SensorService {
    constructor(sensorRepository) {
        this.sensorRepository = sensorRepository;
    }
    async findAll() {
        return await this.sensorRepository.find();
    }
    async find(id) {
        return await this.sensorRepository.findOneBy({ id });
    }
    async create(createSensorDTO) {
        return await this.sensorRepository.save(createSensorDTO);
    }
    async update(id, updateSensorDTO) {
        const result = await this.sensorRepository.update(id, updateSensorDTO);
        return this.sensorRepository.findOneBy({ id });
    }
};
exports.SensorService = SensorService;
exports.SensorService = SensorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sensor_schema_1.Sensor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SensorService);
//# sourceMappingURL=sensor.service.js.map