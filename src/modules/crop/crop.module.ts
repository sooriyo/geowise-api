import { Module } from '@nestjs/common';
import { CropService } from './crop.service';
import { CropController } from './crop.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Crop } from '../../schemas/crop.schema'

@Module({
  imports: [TypeOrmModule.forFeature([Crop])],
  controllers: [CropController],
  providers: [CropService],
})
export class CropModule {}
