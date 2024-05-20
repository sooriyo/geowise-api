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
exports.Crop = void 0;
const typeorm_1 = require("typeorm");
const polytunnel_schema_1 = require("./polytunnel.schema");
const cropBudget_schema_1 = require("./cropBudget.schema");
const fertilizerShedule_schema_1 = require("./fertilizerShedule.schema");
let Crop = class Crop extends typeorm_1.BaseEntity {
};
exports.Crop = Crop;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Crop.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Crop.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Crop.prototype, "variety", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Crop.prototype, "plantDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Number)
], Crop.prototype, "cropeAmount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => polytunnel_schema_1.Polytunnel, polytunnel => polytunnel.crops),
    __metadata("design:type", polytunnel_schema_1.Polytunnel)
], Crop.prototype, "polytunnel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cropBudget_schema_1.CropBudget, cropBudget => cropBudget.crop),
    __metadata("design:type", Array)
], Crop.prototype, "cropBudgets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => fertilizerShedule_schema_1.FertilizerSchedule, fertilizerSchedule => fertilizerSchedule.crop),
    __metadata("design:type", Array)
], Crop.prototype, "fertilizerSchedules", void 0);
exports.Crop = Crop = __decorate([
    (0, typeorm_1.Entity)('tbl_crop')
], Crop);
//# sourceMappingURL=crop.schema.js.map