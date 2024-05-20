import { IrrigationLog } from '../../schemas/irrigationLog.schema';
import { Repository } from 'typeorm';
export declare class IrrigationLogsService {
    private sensorRepository;
    constructor(sensorRepository: Repository<IrrigationLog>);
    findAll(): Promise<IrrigationLog[]>;
    find(id: number): Promise<IrrigationLog>;
}
