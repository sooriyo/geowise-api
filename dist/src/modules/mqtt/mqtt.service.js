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
var MqttService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MqttService = void 0;
const common_1 = require("@nestjs/common");
const mqtt = require("mqtt");
let MqttService = MqttService_1 = class MqttService {
    constructor() {
        this.logger = new common_1.Logger(MqttService_1.name);
        this.logger.log('MqttService instantiated');
    }
    onModuleInit() {
        this.logger.log('Initializing module and connecting to broker');
        this.connectToBroker();
    }
    connectToBroker() {
        const options = {
            host: '15.235.192.41',
            port: 1883,
            username: 'sadee',
            password: 'qwerty',
        };
        this.client = mqtt.connect(options);
        this.logger.log(`Attempting to connect to MQTT broker at ${options.host}:${options.port}`);
        this.client.on('connect', () => {
            this.logger.log('Successfully connected to MQTT broker');
            this.subscribeToTopics(['esp/geowise']);
        });
        this.client.on('message', (topic, message) => {
            this.handleMessage(topic, message.toString());
        });
        this.client.on('error', (error) => {
            this.logger.error('MQTT connection error:', error);
        });
    }
    subscribeToTopics(topics) {
        topics.forEach((topic) => {
            this.client.subscribe(topic, (error) => {
                if (error) {
                    this.logger.error(`Subscription error for ${topic}:`, error);
                }
                else {
                    this.logger.log(`Successfully subscribed to topic ${topic}`);
                }
            });
        });
    }
    handleMessage(topic, message) {
        try {
            const sensorData = JSON.parse(message);
            this.logger.log(sensorData);
        }
        catch (error) {
            this.logger.error('Failed to parse message:', error);
        }
    }
};
exports.MqttService = MqttService;
exports.MqttService = MqttService = MqttService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MqttService);
//# sourceMappingURL=mqtt.service.js.map