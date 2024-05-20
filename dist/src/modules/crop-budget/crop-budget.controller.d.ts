import { CropBudgetService } from './crop-budget.service';
import { CreateCropBudgetDTO } from './crop-budget.entity';
import { CropBudget } from '../../schemas/cropBudget.schema';
export declare class CropBudgetController {
    private readonly cropBudgetService;
    constructor(cropBudgetService: CropBudgetService);
    findAll(): Promise<CropBudget[]>;
    find(id: number): Promise<CropBudget>;
    create(createCropBudgetDTO: CreateCropBudgetDTO): Promise<CropBudget>;
    update(id: number, updateCropBudgetDTO: CreateCropBudgetDTO): Promise<CropBudget>;
}
