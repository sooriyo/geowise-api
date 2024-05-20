declare class CropBudgetEntity {
    totalCost: number;
    expectedRevenue: number;
    expectedProfit: number;
    cropId: number;
}
export declare class CreateCropBudgetDTO extends CropBudgetEntity {
}
export declare class UpdateCropBudgetDTO extends CropBudgetEntity {
}
export {};
