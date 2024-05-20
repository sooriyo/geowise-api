import { FertilizerSheduleService } from './fertilizer-shedule.service';
import { CreateFertilizerSheduleDTO } from './fertilizer-shedule.entity';
import { FertilizerSchedule } from '../../schemas/fertilizerShedule.schema';
export declare class FertilizerSheduleController {
    private readonly fertilizerScheduleService;
    constructor(fertilizerScheduleService: FertilizerSheduleService);
    findAll(): Promise<FertilizerSchedule[]>;
    findOne(id: number): Promise<FertilizerSchedule>;
    create(createFertilizerSheduleDTO: CreateFertilizerSheduleDTO): Promise<FertilizerSchedule>;
    update(id: number, updateFertilizerSheduleDTO: CreateFertilizerSheduleDTO): Promise<FertilizerSchedule>;
}
