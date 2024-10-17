import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttService implements OnModuleInit {
  private client: mqtt.MqttClient;
  private readonly logger = new Logger(MqttService.name);

  constructor() {
    this.logger.log('MqttService instantiated');
  }

  onModuleInit() {
    this.logger.log('Initializing module and connecting to broker');
    this.connectToBroker();
  }

  private connectToBroker() {
    const options: mqtt.IClientOptions = {
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

  private subscribeToTopics(topics: string[]) {
    topics.forEach((topic) => {
      this.client.subscribe(topic, (error) => {
        if (error) {
          this.logger.error(`Subscription error for ${topic}:`, error);
        } else {
          this.logger.log(`Successfully subscribed to topic ${topic}`);
        }
      });
    });
  }

  private handleMessage(topic: string, message: string) {
    try {
      const sensorData = JSON.parse(message);
      this.logger.log(sensorData);
    } catch (error) {
      this.logger.error('Failed to parse message:', error);
    }
  }
}
