/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseEntity } from './BaseEntity';
import type { GlobalRole } from './GlobalRole';
import type { Membership } from './Membership';
export type User = (BaseEntity & {
    email: string;
    name: string;
    memberships: Array<Membership>;
    role: GlobalRole;
});

