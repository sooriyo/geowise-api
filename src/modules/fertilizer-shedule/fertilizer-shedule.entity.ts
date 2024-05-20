class FertilizerSheduleEntity {
  name:string
  details:string
  cropId:number
}

export class CreateFertilizerSheduleDTO extends FertilizerSheduleEntity {}
export class UpdateFertilizerSheduleDTO extends FertilizerSheduleEntity {}