import { MemberDto } from './MemberDto.cjs';
import './GlobalRole.cjs';
import './MembershipRole.cjs';

type OrganizationDto = {
    id: number;
    name: string;
    apiKey?: string | null;
    organizations: Array<OrganizationDto>;
    members: Array<MemberDto>;
};

export type { OrganizationDto };
