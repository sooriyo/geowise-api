import { IrrigationLogsService } from './irrigation-logs.service';
import { IrrigationLog } from '../../schemas/irrigationLog.schema';
export declare class IrrigationLogsController {
    private readonly irrigationLogsService;
    constructor(irrigationLogsService: IrrigationLogsService);
    findAll(): Promise<IrrigationLog[]>;
    findOne(id: number): Promise<IrrigationLog>;
}
