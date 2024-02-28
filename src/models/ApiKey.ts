/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organization } from './Organization';
export type ApiKey = {
    id: number;
    key: string;
    description?: string | null;
    organizationId: number;
    organization: Organization;
    createdAt: string;
};

