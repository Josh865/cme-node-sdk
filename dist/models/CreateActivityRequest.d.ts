import { ActivityCreditRequest } from './ActivityCreditRequest.js';

type CreateActivityRequest = {
    name: string;
    description: string;
    startsAt: string;
    endsAt: string;
    location?: string | null;
    credits?: Array<ActivityCreditRequest> | null;
};

export type { CreateActivityRequest };
