import { GlobalRole } from './GlobalRole.js';
import { MembershipRole } from './MembershipRole.js';

type MemberDto = {
    id: number;
    organizationRole: MembershipRole;
    email: string;
    name: string;
    role: GlobalRole;
};

export type { MemberDto };
