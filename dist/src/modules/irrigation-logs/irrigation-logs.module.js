"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrrigationLogsModule = void 0;
const common_1 = require("@nestjs/common");
const irrigation_logs_service_1 = require("./irrigation-logs.service");
const irrigation_logs_controller_1 = require("./irrigation-logs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const irrigationLog_schema_1 = require("../../schemas/irrigationLog.schema");
let IrrigationLogsModule = class IrrigationLogsModule {
};
exports.IrrigationLogsModule = IrrigationLogsModule;
exports.IrrigationLogsModule = IrrigationLogsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([irrigationLog_schema_1.IrrigationLog])],
        controllers: [irrigation_logs_controller_1.IrrigationLogsController],
        providers: [irrigation_logs_service_1.IrrigationLogsService],
    })
], IrrigationLogsModule);
//# sourceMappingURL=irrigation-logs.module.js.map