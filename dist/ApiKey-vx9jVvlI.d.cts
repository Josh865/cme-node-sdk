import { BaseEntity } from './models/BaseEntity.cjs';
import { MembershipRole } from './models/MembershipRole.cjs';
import { GlobalRole } from './models/GlobalRole.cjs';

type User = (BaseEntity & {
    email: string;
    name: string;
    memberships: Array<Membership>;
    role: GlobalRole;
});

type Membership = (BaseEntity & {
    role: MembershipRole;
    userId: number;
    user: User;
    organizationId: number;
    organization: Organization;
});

type Organization = (BaseEntity & {
    name: string;
    organizations: Array<Organization>;
    memberships: Array<Membership>;
    apiKeys: Array<ApiKey>;
});

type ApiKey = {
    id: number;
    key: string;
    description?: string | null;
    organizationId: number;
    organization: Organization;
    createdAt: string;
};

export type { ApiKey as A, Membership as M, Organization as O, User as U };
