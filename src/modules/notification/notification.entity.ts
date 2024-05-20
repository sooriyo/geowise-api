class NotificationEntity{
  title:string
  parameter:string
  thresholdValue:number
  status:string
  userId:number

}

export class CreateNotificationDTO extends NotificationEntity{}
export class UpdateNotificationDTO extends NotificationEntity{}