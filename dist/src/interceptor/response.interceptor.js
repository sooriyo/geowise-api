"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const date_fns_1 = require("date-fns");
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        const now = Date.now();
        return next.handle().pipe((0, operators_1.map)((data) => {
            let errorCode;
            let errorMessage;
            if (data instanceof common_1.HttpException) {
                errorCode = data.getStatus();
                errorMessage = data.getResponse();
            }
            return {
                response: context.switchToHttp().getResponse().statusCode,
                request_id: context.switchToHttp().getRequest().headers['x-request-id'],
                path: context.switchToHttp().getRequest().path,
                timestamp: (0, date_fns_1.format)(now, 'yyyy-MM-dd HH:mm:ss'),
                error: errorCode,
                message: errorMessage,
                data: data,
            };
        }), (0, rxjs_1.catchError)((error) => {
            console.error('Unhandled Error:', error);
            throw error;
        }));
    }
};
exports.ResponseInterceptor = ResponseInterceptor;
exports.ResponseInterceptor = ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map