import { Module } from '@nestjs/common';
import { CropBudgetService } from './crop-budget.service';
import { CropBudgetController } from './crop-budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema'
import { CropBudget } from '../../schemas/cropBudget.schema'

@Module({

  imports: [TypeOrmModule.forFeature([CropBudget])],
  controllers: [CropBudgetController],
  providers: [CropBudgetService],
})
export class CropBudgetModule {}
