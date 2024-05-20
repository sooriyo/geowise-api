import { Injectable, OnModuleInit, Logger } from "@nestjs/common";
import * as mqtt from "mqtt";

@Injectable()
export class MqttService implements OnModuleInit {
  private client: mqtt.MqttClient;
  private readonly logger = new Logger(MqttService.name);

  constructor() {
    this.logger.log("MqttService instantiated");
  }

  onModuleInit() {
    this.logger.log("Initializing module and connecting to broker");
    this.connectToBroker();
  }

  private connectToBroker() {
    const options: mqtt.IClientOptions = {
      host: "15.235.192.41",
      port: 1883,
      username: "thimira",
      password: "371701"
    };

    this.client = mqtt.connect(options);
    this.logger.log(`Attempting to connect to MQTT broker at ${options.host}:${options.port}`);

    const topics = ["geowise/sensor"];

    this.client.on("connect", () => {
      this.logger.log("Successfully connected to MQTT broker");
      this.client.subscribe(topics, {}, (error, granted) => {
        if (error) {
          this.logger.error("Subscription error:", error);
        } else {
          granted.forEach(grant => {
            this.logger.log(`Successfully subscribed to topic ${grant.topic} with QoS ${grant.qos}`);
          });
        }
      });
    });

    this.client.on("message", (topic, message) => {
      this.handleMessage(topic, message.toString());
    });

    this.client.on("error", (error) => {
      this.logger.error("MQTT connection error:", error);
    });
  }

  private handleMessage(topic: string, message: string) {
    if (topic === "geowise/sensor") {
      try {
        const sensorData = JSON.parse(message);
        this.logger.log(`Received data from ${topic}: ${message}`);
        this.logger.log(`Moisture: ${sensorData.moisture}`);
        this.logger.log(`Humidity: ${sensorData.humidity}`);
        this.logger.log(`Temperature (C): ${sensorData.temperatureC}`);
        this.logger.log(`Temperature (F): ${sensorData.temperatureF}`);
      } catch (error) {
        this.logger.error(`Error parsing message: ${message}`, error);
      }
    }
  }

  public publish(topic: string, message: string): void {
    this.client.publish(topic, message, {}, (error) => {
      if (error) {
        this.logger.error(`Failed to publish message to topic ${topic}`, error);
      } else {
        this.logger.log(`Message published to topic ${topic}: ${message}`);
      }
    });
  }
}
