import { OrganizationDto } from './OrganizationDto.js';
import './MemberDto.js';
import './GlobalRole.js';
import './MembershipRole.js';

type ListOrganizationsReponse = {
    data: Array<OrganizationDto>;
};

export type { ListOrganizationsReponse };
