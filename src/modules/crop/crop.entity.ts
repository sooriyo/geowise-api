class CropEntity{
  name:string
  variety:string
  planDate:string
  cropAmount:number
  polytunnelId:number

}
export class CreateCropDTO extends CropEntity{}
export class UpdateCropDTO extends CropEntity{}