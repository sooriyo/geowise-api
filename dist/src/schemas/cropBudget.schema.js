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
exports.CropBudget = void 0;
const typeorm_1 = require("typeorm");
const crop_schema_1 = require("./crop.schema");
let CropBudget = class CropBudget extends typeorm_1.BaseEntity {
};
exports.CropBudget = CropBudget;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CropBudget.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CropBudget.prototype, "totalCost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CropBudget.prototype, "expectedRevenue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CropBudget.prototype, "expectedProfit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => crop_schema_1.Crop, crop => crop.cropBudgets),
    __metadata("design:type", crop_schema_1.Crop)
], CropBudget.prototype, "crop", void 0);
exports.CropBudget = CropBudget = __decorate([
    (0, typeorm_1.Entity)('tbl_crop_budget')
], CropBudget);
//# sourceMappingURL=cropBudget.schema.js.map