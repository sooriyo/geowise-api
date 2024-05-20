"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropBudgetModule = void 0;
const common_1 = require("@nestjs/common");
const crop_budget_service_1 = require("./crop-budget.service");
const crop_budget_controller_1 = require("./crop-budget.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cropBudget_schema_1 = require("../../schemas/cropBudget.schema");
let CropBudgetModule = class CropBudgetModule {
};
exports.CropBudgetModule = CropBudgetModule;
exports.CropBudgetModule = CropBudgetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cropBudget_schema_1.CropBudget])],
        controllers: [crop_budget_controller_1.CropBudgetController],
        providers: [crop_budget_service_1.CropBudgetService],
    })
], CropBudgetModule);
//# sourceMappingURL=crop-budget.module.js.map