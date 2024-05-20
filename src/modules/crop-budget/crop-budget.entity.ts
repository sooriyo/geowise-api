class CropBudgetEntity
{
  totalCost:number
  expectedRevenue :number
  expectedProfit  :number
  cropId        :number
}
export class CreateCropBudgetDTO extends CropBudgetEntity {}
export class UpdateCropBudgetDTO extends CropBudgetEntity {}