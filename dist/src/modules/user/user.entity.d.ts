declare class UserEntity {
    userProfile: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
}
export declare class CreateUserDTO extends UserEntity {
}
export declare class UpdateUserDTO extends UserEntity {
}
export {};
