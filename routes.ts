import { Routes } from '@nestjs/core'
import { UserModule } from './src/modules/user/user.module'
import { SensorModule } from './src/modules/sensor/sensor.module'
import { SensorReadingModule } from './src/modules/sensor-reading/sensor-reading.module'
import { PolytunnelModule } from './src/modules/polytunnel/polytunnel.module'
import { ActuatorModule } from './src/modules/actuator/actuator.module'
import { CropModule } from './src/modules/crop/crop.module'
import { CropBudgetModule } from './src/modules/crop-budget/crop-budget.module'
import { NotificationModule } from './src/modules/notification/notification.module'
import { IrrigationLogsModule } from './src/modules/irrigation-logs/irrigation-logs.module'
import { FertilizerSheduleModule } from './src/modules/fertilizer-shedule/fertilizer-shedule.module'


export const routes: Routes = [

  {
    path: 'User',
    module: UserModule,
  }, {
    path: 'sensors',
    module: SensorReadingModule,
  },{
    path: 'polytunnels',
    module: PolytunnelModule,
  }, {
    path: 'sensor',
    module: SensorModule,
  },
  {
    path: 'actuator',
    module: ActuatorModule,
  },
  {
    path: 'crop',
    module: CropModule,
  },
  {
    path: 'crop',
    module: CropBudgetModule,
  },
  {
    path: 'notification',
    module: NotificationModule,
  },{
    path: 'irrigation-log',
    module: IrrigationLogsModule,
  },
  {
    path: 'fertilizer-schedule',
    module: FertilizerSheduleModule,
  },



]
