class ActuatorEntity{
  name:string
  type:string
  isActive:boolean
  controlCommand:string
  polytunnelId:number

}
export class CreateActuatorDTO extends ActuatorEntity{}
export class UpdateActuatorDTO extends ActuatorEntity{}