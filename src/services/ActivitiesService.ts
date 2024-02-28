/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityDto } from '../models/ActivityDto';
import type { AddCreditRequest } from '../models/AddCreditRequest';
import type { CreateActivityRequest } from '../models/CreateActivityRequest';
import type { GetActivityAttendanceResponse } from '../models/GetActivityAttendanceResponse';
import type { ListActivitiesResponse } from '../models/ListActivitiesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivitiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ListActivitiesResponse Success
     * @throws ApiError
     */
    public listActivities(): CancelablePromise<ListActivitiesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activities/',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param requestBody
     * @returns ActivityDto Success
     * @throws ApiError
     */
    public createActivity(
        requestBody: CreateActivityRequest,
    ): CancelablePromise<ActivityDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/activities/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param activityId
     * @returns GetActivityAttendanceResponse Success
     * @throws ApiError
     */
    public getActivityAttendance(
        activityId: number,
    ): CancelablePromise<GetActivityAttendanceResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activities/{activityId}/attendance',
            path: {
                'activityId': activityId,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param id
     * @returns ActivityDto Success
     * @throws ApiError
     */
    public getActivity(
        id: number,
    ): CancelablePromise<ActivityDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/activities/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * @param activityId
     * @param requestBody
     * @returns ActivityDto Success
     * @throws ApiError
     */
    public addCreditToActivity(
        activityId: number,
        requestBody: AddCreditRequest,
    ): CancelablePromise<ActivityDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/activities/{activityId}/credits',
            path: {
                'activityId': activityId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
