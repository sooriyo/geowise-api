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
exports.IrrigationLog = void 0;
const typeorm_1 = require("typeorm");
const actuator_schema_1 = require("./actuator.schema");
let IrrigationLog = class IrrigationLog extends typeorm_1.BaseEntity {
};
exports.IrrigationLog = IrrigationLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], IrrigationLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], IrrigationLog.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], IrrigationLog.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => actuator_schema_1.Actuator, actuator => actuator.irrigationLogs),
    __metadata("design:type", actuator_schema_1.Actuator)
], IrrigationLog.prototype, "actuator", void 0);
exports.IrrigationLog = IrrigationLog = __decorate([
    (0, typeorm_1.Entity)('tbl_irrigation_log')
], IrrigationLog);
//# sourceMappingURL=irrigationLog.schema.js.map