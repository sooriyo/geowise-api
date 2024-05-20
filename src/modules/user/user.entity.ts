class UserEntity{
  userProfile:string;
  name:string;
  email:string;
  phone:string;
  address:string;
  password:string;
}
export class CreateUserDTO extends UserEntity{}
export class UpdateUserDTO extends UserEntity{}