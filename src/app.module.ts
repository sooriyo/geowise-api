import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core'
import { routes } from '../routes'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from './config/typeorm.config'
import { ResponseInterceptor } from './interceptor/response.interceptor'
import { RequestInterceptor } from './interceptor/request.interceptor'
import { SensorReadingModule } from './modules/sensor-reading/sensor-reading.module';
import { SensorModule } from './modules/sensor/sensor.module';
import { CropModule } from './modules/crop/crop.module';
import { CropBudgetModule } from './modules/crop-budget/crop-budget.module';
import { ActuatorModule } from './modules/actuator/actuator.module';
import { FertilizerSheduleModule } from './modules/fertilizer-shedule/fertilizer-shedule.module';
import { PolytunnelModule } from './modules/polytunnel/polytunnel.module';
import { UserModule } from './modules/user/user.module';
import { NotificationModule } from './modules/notification/notification.module';
import { IrrigationLogsModule } from './modules/irrigation-logs/irrigation-logs.module';
import { MqttService } from './modules/mqtt/mqtt.service'


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    RouterModule.register(routes),
    SensorReadingModule,
    SensorModule,
    CropModule,
    CropBudgetModule,
    ActuatorModule,
    FertilizerSheduleModule,
    PolytunnelModule,
    UserModule,
    NotificationModule,
    IrrigationLogsModule,


  ],
  controllers: [AppController],
  providers: [
    AppService,
    MqttService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestInterceptor,
    },
  ],
})
export class AppModule {}
