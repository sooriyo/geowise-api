import { Repository } from 'typeorm';
import { CropBudget } from '../../schemas/cropBudget.schema';
import { CreateCropBudgetDTO } from './crop-budget.entity';
export declare class CropBudgetService {
    private cropRepository;
    constructor(cropRepository: Repository<CropBudget>);
    findAll(): Promise<CropBudget[]>;
    find(id: number): Promise<CropBudget>;
    create(createCropBudgetDTO: CreateCropBudgetDTO): Promise<CreateCropBudgetDTO & CropBudget>;
    update(id: number, updateCropBudgetDTO: CreateCropBudgetDTO): Promise<CropBudget>;
}
