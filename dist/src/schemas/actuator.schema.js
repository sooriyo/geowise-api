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
exports.Actuator = void 0;
const typeorm_1 = require("typeorm");
const polytunnel_schema_1 = require("./polytunnel.schema");
const irrigationLog_schema_1 = require("./irrigationLog.schema");
const actuator_command_schema_1 = require("./actuator_command.schema");
let Actuator = class Actuator extends typeorm_1.BaseEntity {
};
exports.Actuator = Actuator;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Actuator.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actuator.prototype, "actuatorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actuator.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actuator.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Actuator.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actuator.prototype, "controlCommand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => polytunnel_schema_1.Polytunnel, polytunnel => polytunnel.actuators),
    __metadata("design:type", polytunnel_schema_1.Polytunnel)
], Actuator.prototype, "polytunnel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => irrigationLog_schema_1.IrrigationLog, irrigationLog => irrigationLog.actuator),
    __metadata("design:type", Array)
], Actuator.prototype, "irrigationLogs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actuator_command_schema_1.Actuator_command, actuator_command => actuator_command.actuators),
    __metadata("design:type", Array)
], Actuator.prototype, "actuator_command", void 0);
exports.Actuator = Actuator = __decorate([
    (0, typeorm_1.Entity)('tbl_actuator')
], Actuator);
//# sourceMappingURL=actuator.schema.js.map