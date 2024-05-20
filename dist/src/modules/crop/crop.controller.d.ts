import { CropService } from './crop.service';
import { CreateCropDTO, UpdateCropDTO } from './crop.entity';
import { Crop } from '../../schemas/crop.schema';
export declare class CropController {
    private readonly cropService;
    constructor(cropService: CropService);
    findAll(): Promise<Crop[]>;
    findOne(id: number): Promise<Crop>;
    create(createCropDTO: CreateCropDTO): Promise<Crop>;
    update(id: number, updateCropDTO: UpdateCropDTO): Promise<Crop>;
}
