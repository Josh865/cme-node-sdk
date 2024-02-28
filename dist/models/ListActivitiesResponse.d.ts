import { ActivityDto } from './ActivityDto.js';
import './ActivityCreditDto.js';

type ListActivitiesResponse = {
    data: Array<ActivityDto>;
};

export type { ListActivitiesResponse };
