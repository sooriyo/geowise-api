"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActuatorModule = void 0;
const common_1 = require("@nestjs/common");
const actuator_service_1 = require("./actuator.service");
const actuator_controller_1 = require("./actuator.controller");
const typeorm_1 = require("@nestjs/typeorm");
const actuator_schema_1 = require("../../schemas/actuator.schema");
let ActuatorModule = class ActuatorModule {
};
exports.ActuatorModule = ActuatorModule;
exports.ActuatorModule = ActuatorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([actuator_schema_1.Actuator])],
        controllers: [actuator_controller_1.ActuatorController],
        providers: [actuator_service_1.ActuatorService],
    })
], ActuatorModule);
//# sourceMappingURL=actuator.module.js.map