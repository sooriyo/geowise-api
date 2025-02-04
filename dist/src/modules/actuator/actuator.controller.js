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
exports.ActuatorController = void 0;
const common_1 = require("@nestjs/common");
const actuator_service_1 = require("./actuator.service");
const actuator_entity_1 = require("./actuator.entity");
let ActuatorController = class ActuatorController {
    constructor(actuatorService) {
        this.actuatorService = actuatorService;
    }
    async findAll() {
        return await this.actuatorService.findAll();
    }
    async findOne(id) {
        return await this.actuatorService.find(id);
    }
    async create(createActuatorDTO) {
        return await this.actuatorService.create(createActuatorDTO);
    }
    async update(id, updateActuatorDTO) {
        return await this.actuatorService.update(id, updateActuatorDTO);
    }
};
exports.ActuatorController = ActuatorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActuatorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ActuatorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actuator_entity_1.CreateActuatorDTO]),
    __metadata("design:returntype", Promise)
], ActuatorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, actuator_entity_1.UpdateActuatorDTO]),
    __metadata("design:returntype", Promise)
], ActuatorController.prototype, "update", null);
exports.ActuatorController = ActuatorController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [actuator_service_1.ActuatorService])
], ActuatorController);
//# sourceMappingURL=actuator.controller.js.map