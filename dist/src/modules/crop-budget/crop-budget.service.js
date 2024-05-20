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
exports.CropBudgetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cropBudget_schema_1 = require("../../schemas/cropBudget.schema");
let CropBudgetService = class CropBudgetService {
    constructor(cropRepository) {
        this.cropRepository = cropRepository;
    }
    async findAll() {
        return await this.cropRepository.find();
    }
    async find(id) {
        return await this.cropRepository.findOneBy({ id });
    }
    async create(createCropBudgetDTO) {
        return await this.cropRepository.save(createCropBudgetDTO);
    }
    async update(id, updateCropBudgetDTO) {
        const result = await this.cropRepository.update(id, updateCropBudgetDTO);
        return this.cropRepository.findOneBy({ id });
    }
};
exports.CropBudgetService = CropBudgetService;
exports.CropBudgetService = CropBudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cropBudget_schema_1.CropBudget)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CropBudgetService);
//# sourceMappingURL=crop-budget.service.js.map