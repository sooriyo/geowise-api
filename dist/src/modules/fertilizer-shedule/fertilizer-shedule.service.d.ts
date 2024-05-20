import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema';
import { CreateFertilizerSheduleDTO } from './fertilizer-shedule.entity';
import { Repository } from 'typeorm';
export declare class FertilizerSheduleService {
    private cropRepository;
    constructor(cropRepository: Repository<FertilizerSchedule>);
    findAll(): Promise<FertilizerSchedule[]>;
    find(id: number): Promise<FertilizerSchedule>;
    create(createFertilizerSheduleDTO: CreateFertilizerSheduleDTO): Promise<CreateFertilizerSheduleDTO & FertilizerSchedule>;
    update(id: number, updateFertilizerSheduleDTO: CreateFertilizerSheduleDTO): Promise<FertilizerSchedule>;
}
