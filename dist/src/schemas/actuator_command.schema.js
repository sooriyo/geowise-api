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
exports.Actuator_command = void 0;
const typeorm_1 = require("typeorm");
const actuator_schema_1 = require("./actuator.schema");
let Actuator_command = class Actuator_command extends typeorm_1.BaseEntity {
};
exports.Actuator_command = Actuator_command;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Actuator_command.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actuator_command.prototype, "command", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Actuator_command.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actuator_schema_1.Actuator, actuator => actuator.actuator_command),
    __metadata("design:type", Array)
], Actuator_command.prototype, "actuators", void 0);
exports.Actuator_command = Actuator_command = __decorate([
    (0, typeorm_1.Entity)('tbl_actuator_command')
], Actuator_command);
//# sourceMappingURL=actuator_command.schema.js.map