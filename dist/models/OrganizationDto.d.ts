import { MemberDto } from './MemberDto.js';
import './GlobalRole.js';
import './MembershipRole.js';

type OrganizationDto = {
    id: number;
    name: string;
    apiKey?: string | null;
    organizations: Array<OrganizationDto>;
    members: Array<MemberDto>;
};

export type { OrganizationDto };
