import { OrganizationDto } from './OrganizationDto.cjs';
import './MemberDto.cjs';
import './GlobalRole.cjs';
import './MembershipRole.cjs';

type ListOrganizationsReponse = {
    data: Array<OrganizationDto>;
};

export type { ListOrganizationsReponse };
