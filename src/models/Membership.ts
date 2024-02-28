/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseEntity } from './BaseEntity';
import type { MembershipRole } from './MembershipRole';
import type { Organization } from './Organization';
import type { User } from './User';
export type Membership = (BaseEntity & {
    role: MembershipRole;
    userId: number;
    user: User;
    organizationId: number;
    organization: Organization;
});

