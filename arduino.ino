DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);
WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifi_ssid);

  WiFi.begin(wifi_ssid, wifi_password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  String message = "";
  for (unsigned int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.println(message);

  if (String(topic) == buzzer_topic) {

    DynamicJsonDocument doc(1024);
    DeserializationError error = deserializeJson(doc, message);
    if (error) {
      Serial.print(F("deserializeJson() failed: "));
      Serial.println(error.c_str());
      return;
    }

    int isActive = doc["isActive"];
    if (isActive == 1) {
      digitalWrite(BUZZER_PIN, HIGH);
    } else if (isActive == 0) {
      digitalWrite(BUZZER_PIN, LOW);
    }
  }
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP32Client", mqtt_user, mqtt_password)) {
      Serial.println("connected");
      client.subscribe(mqtt_topic);
      client.subscribe(buzzer_topic);
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(9600);
  Serial.println("Initializing DHT sensor...");
  dht_sensor.begin();
  Serial.println("DHT sensor initialized.");
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  int moistureValue = analogRead(AOUT_PIN);
  float humidity = dht_sensor.readHumidity();
  float temperatureC = dht_sensor.readTemperature();
  float temperatureF = dht_sensor.readTemperature(true);

  if (isnan(temperatureC) || isnan(temperatureF) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
  } else {
    float moisturePercent = map(moistureValue, 0, 4095, 0, 100);
    if (moisturePercent < 0) moisturePercent = 0;
    if (moisturePercent > 100) moisturePercent = 100;



    if (humidity == 100.0) {
      Serial.println("Warning: Humidity reading is 100%. This might indicate a sensor issue or extreme environmental conditions.");
    }

    char payload[100];
    snprintf(payload, sizeof(payload), "{\"moisture\":%.2f,\"humidity\":%.2f,\"temperatureC\":%.2f,\"temperatureF\":%.2f}",
             moisturePercent, humidity, temperatureC, temperatureF);

    Serial.print("Publishing message: ");
    // Serial.println(payload);
    client.publish(mqtt_topic, payload);
  }

  delay(2000);
}