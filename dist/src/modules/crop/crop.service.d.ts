import { Repository } from 'typeorm';
import { Crop } from '../../schemas/crop.schema';
import { CreateCropDTO, UpdateCropDTO } from './crop.entity';
export declare class CropService {
    private cropRepository;
    constructor(cropRepository: Repository<Crop>);
    findAll(): Promise<Crop[]>;
    find(id: number): Promise<Crop>;
    create(createCropDTO: CreateCropDTO): Promise<CreateCropDTO & Crop>;
    update(id: number, updateCropDTO: UpdateCropDTO): Promise<Crop>;
}
