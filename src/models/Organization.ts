/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKey } from './ApiKey';
import type { BaseEntity } from './BaseEntity';
import type { Membership } from './Membership';
export type Organization = (BaseEntity & {
    name: string;
    organizations: Array<Organization>;
    memberships: Array<Membership>;
    apiKeys: Array<ApiKey>;
});

