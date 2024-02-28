import { GlobalRole } from './GlobalRole.cjs';
import { MembershipRole } from './MembershipRole.cjs';

type MemberDto = {
    id: number;
    organizationRole: MembershipRole;
    email: string;
    name: string;
    role: GlobalRole;
};

export type { MemberDto };
