/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GlobalRole } from './GlobalRole';
import type { MembershipRole } from './MembershipRole';
export type MemberDto = {
    id: number;
    organizationRole: MembershipRole;
    email: string;
    name: string;
    role: GlobalRole;
};

