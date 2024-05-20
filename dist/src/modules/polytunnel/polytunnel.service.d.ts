import { Repository } from 'typeorm';
import { Polytunnel } from '../../schemas/polytunnel.schema';
import { CreatePolytunnelDTO, UpdatePolytunnelDTO } from './polytunnel.entity';
export declare class PolytunnelService {
    private polytunnelRepository;
    constructor(polytunnelRepository: Repository<Polytunnel>);
    findAll(): Promise<Polytunnel[]>;
    find(id: number): Promise<Polytunnel>;
    create(createPolytunnelDTO: CreatePolytunnelDTO): Promise<CreatePolytunnelDTO & Polytunnel>;
    update(id: number, updatePolytunnelDTO: UpdatePolytunnelDTO): Promise<Polytunnel>;
}
