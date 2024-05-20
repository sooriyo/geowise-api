import { Module } from '@nestjs/common';
import { ActuatorService } from './actuator.service';
import { ActuatorController } from './actuator.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Actuator } from '../../schemas/actuator.schema'

@Module({
  imports: [TypeOrmModule.forFeature([Actuator])],
  controllers: [ActuatorController],
  providers: [ActuatorService],
})
export class ActuatorModule {}
