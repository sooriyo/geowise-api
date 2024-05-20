declare class CropEntity {
    name: string;
    variety: string;
    planDate: string;
    cropAmount: number;
    polytunnelId: number;
}
export declare class CreateCropDTO extends CropEntity {
}
export declare class UpdateCropDTO extends CropEntity {
}
export {};
