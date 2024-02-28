import { ActivityDto } from './ActivityDto.cjs';
import './ActivityCreditDto.cjs';

type ListActivitiesResponse = {
    data: Array<ActivityDto>;
};

export type { ListActivitiesResponse };
