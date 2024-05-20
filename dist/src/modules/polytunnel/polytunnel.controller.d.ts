import { PolytunnelService } from './polytunnel.service';
import { CreatePolytunnelDTO, UpdatePolytunnelDTO } from './polytunnel.entity';
export declare class PolytunnelController {
    private readonly polytunnelService;
    constructor(polytunnelService: PolytunnelService);
    findAll(): Promise<import("../../schemas/polytunnel.schema").Polytunnel[]>;
    find(id: number): Promise<import("../../schemas/polytunnel.schema").Polytunnel>;
    create(createPolytunnelDTO: CreatePolytunnelDTO): Promise<CreatePolytunnelDTO & import("../../schemas/polytunnel.schema").Polytunnel>;
    update(id: number, updatePolytunnelDTO: UpdatePolytunnelDTO): Promise<import("../../schemas/polytunnel.schema").Polytunnel>;
}
