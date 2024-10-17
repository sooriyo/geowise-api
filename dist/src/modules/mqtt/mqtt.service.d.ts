import { OnModuleInit } from '@nestjs/common';
export declare class MqttService implements OnModuleInit {
    private client;
    private readonly logger;
    constructor();
    onModuleInit(): void;
    private connectToBroker;
    private subscribeToTopics;
    private handleMessage;
}
