/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberDto } from './MemberDto';
export type OrganizationDto = {
    id: number;
    name: string;
    apiKey?: string | null;
    organizations: Array<OrganizationDto>;
    members: Array<MemberDto>;
};

