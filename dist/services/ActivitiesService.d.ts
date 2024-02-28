import { ActivityDto } from '../models/ActivityDto.js';
import { AddCreditRequest } from '../models/AddCreditRequest.js';
import { CreateActivityRequest } from '../models/CreateActivityRequest.js';
import { GetActivityAttendanceResponse } from '../models/GetActivityAttendanceResponse.js';
import { ListActivitiesResponse } from '../models/ListActivitiesResponse.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../models/ActivityCreditDto.js';
import '../models/ActivityCreditRequest.js';
import '../models/AttendanceDto.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

declare class ActivitiesService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns ListActivitiesResponse Success
     * @throws ApiError
     */
    listActivities(): CancelablePromise<ListActivitiesResponse>;
    /**
     * @param requestBody
     * @returns ActivityDto Success
     * @throws ApiError
     */
    createActivity(requestBody: CreateActivityRequest): CancelablePromise<ActivityDto>;
    /**
     * @param activityId
     * @returns GetActivityAttendanceResponse Success
     * @throws ApiError
     */
    getActivityAttendance(activityId: number): CancelablePromise<GetActivityAttendanceResponse>;
    /**
     * @param id
     * @returns ActivityDto Success
     * @throws ApiError
     */
    getActivity(id: number): CancelablePromise<ActivityDto>;
    /**
     * @param activityId
     * @param requestBody
     * @returns ActivityDto Success
     * @throws ApiError
     */
    addCreditToActivity(activityId: number, requestBody: AddCreditRequest): CancelablePromise<ActivityDto>;
}

export { ActivitiesService };
