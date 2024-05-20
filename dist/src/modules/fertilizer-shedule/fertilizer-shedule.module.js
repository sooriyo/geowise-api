"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FertilizerSheduleModule = void 0;
const common_1 = require("@nestjs/common");
const fertilizer_shedule_service_1 = require("./fertilizer-shedule.service");
const fertilizer_shedule_controller_1 = require("./fertilizer-shedule.controller");
const typeorm_1 = require("@nestjs/typeorm");
const fertilizerShedule_schema_1 = require("../../schemas/fertilizerShedule.schema");
let FertilizerSheduleModule = class FertilizerSheduleModule {
};
exports.FertilizerSheduleModule = FertilizerSheduleModule;
exports.FertilizerSheduleModule = FertilizerSheduleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fertilizerShedule_schema_1.FertilizerSchedule])],
        controllers: [fertilizer_shedule_controller_1.FertilizerSheduleController],
        providers: [fertilizer_shedule_service_1.FertilizerSheduleService],
    })
], FertilizerSheduleModule);
//# sourceMappingURL=fertilizer-shedule.module.js.map