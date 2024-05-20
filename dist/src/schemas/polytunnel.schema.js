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
exports.Polytunnel = void 0;
const typeorm_1 = require("typeorm");
const user_schema_1 = require("./user.schema");
const crop_schema_1 = require("./crop.schema");
const sensor_schema_1 = require("./sensor.schema");
const actuator_schema_1 = require("./actuator.schema");
let Polytunnel = class Polytunnel extends typeorm_1.BaseEntity {
};
exports.Polytunnel = Polytunnel;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Polytunnel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Polytunnel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Polytunnel.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Polytunnel.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_schema_1.User, user => user.polytunnels),
    __metadata("design:type", user_schema_1.User)
], Polytunnel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => crop_schema_1.Crop, crop => crop.polytunnel),
    __metadata("design:type", Array)
], Polytunnel.prototype, "crops", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sensor_schema_1.Sensor, sensor => sensor.polytunnel),
    __metadata("design:type", Array)
], Polytunnel.prototype, "sensors", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => actuator_schema_1.Actuator, actuator => actuator.polytunnel),
    __metadata("design:type", Array)
], Polytunnel.prototype, "actuators", void 0);
exports.Polytunnel = Polytunnel = __decorate([
    (0, typeorm_1.Entity)('tbl_polytunnel')
], Polytunnel);
//# sourceMappingURL=polytunnel.schema.js.map