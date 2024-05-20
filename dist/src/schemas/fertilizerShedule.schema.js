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
exports.FertilizerSchedule = void 0;
const typeorm_1 = require("typeorm");
const crop_schema_1 = require("./crop.schema");
let FertilizerSchedule = class FertilizerSchedule extends typeorm_1.BaseEntity {
};
exports.FertilizerSchedule = FertilizerSchedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FertilizerSchedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FertilizerSchedule.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FertilizerSchedule.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FertilizerSchedule.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => crop_schema_1.Crop, crop => crop.fertilizerSchedules),
    __metadata("design:type", crop_schema_1.Crop)
], FertilizerSchedule.prototype, "crop", void 0);
exports.FertilizerSchedule = FertilizerSchedule = __decorate([
    (0, typeorm_1.Entity)('tbl_fertilizer_schedule')
], FertilizerSchedule);
//# sourceMappingURL=fertilizerShedule.schema.js.map