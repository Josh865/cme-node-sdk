import { ActivityCreditDto } from './ActivityCreditDto.cjs';

type ActivityDto = {
    id: number;
    name: string;
    description: string;
    startsAt: string;
    endsAt: string;
    location?: string | null;
    credits?: Array<ActivityCreditDto> | null;
};

export type { ActivityDto };