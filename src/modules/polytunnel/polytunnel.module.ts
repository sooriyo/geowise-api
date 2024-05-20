import { Module } from '@nestjs/common';
import { PolytunnelService } from './polytunnel.service';
import { PolytunnelController } from './polytunnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Sensor } from '../../schemas/sensor.schema'
import { Polytunnel } from '../../schemas/polytunnel.schema'

@Module({
  imports: [TypeOrmModule.forFeature([Polytunnel])],
  controllers: [PolytunnelController],
  providers: [PolytunnelService],
})
export class PolytunnelModule {}
