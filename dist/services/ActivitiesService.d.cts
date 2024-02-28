import { ActivityDto } from '../models/ActivityDto.cjs';
import { AddCreditRequest } from '../models/AddCreditRequest.cjs';
import { CreateActivityRequest } from '../models/CreateActivityRequest.cjs';
import { GetActivityAttendanceResponse } from '../models/GetActivityAttendanceResponse.cjs';
import { ListActivitiesResponse } from '../models/ListActivitiesResponse.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../models/ActivityCreditDto.cjs';
import '../models/ActivityCreditRequest.cjs';
import '../models/AttendanceDto.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

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
