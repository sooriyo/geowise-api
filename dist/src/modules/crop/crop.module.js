"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropModule = void 0;
const common_1 = require("@nestjs/common");
const crop_service_1 = require("./crop.service");
const crop_controller_1 = require("./crop.controller");
const typeorm_1 = require("@nestjs/typeorm");
const crop_schema_1 = require("../../schemas/crop.schema");
let CropModule = class CropModule {
};
exports.CropModule = CropModule;
exports.CropModule = CropModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([crop_schema_1.Crop])],
        controllers: [crop_controller_1.CropController],
        providers: [crop_service_1.CropService],
    })
], CropModule);
//# sourceMappingURL=crop.module.js.map