/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityCreditDto } from './ActivityCreditDto';
export type ActivityDto = {
    id: number;
    name: string;
    description: string;
    startsAt: string;
    endsAt: string;
    location?: string | null;
    credits?: Array<ActivityCreditDto> | null;
};

