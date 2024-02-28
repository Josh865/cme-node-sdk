/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCreditRequest } from './ActivityCreditRequest';
export type CreateActivityRequest = {
    name: string;
    description: string;
    startsAt: string;
    endsAt: string;
    location?: string | null;
    credits?: Array<ActivityCreditRequest> | null;
};

