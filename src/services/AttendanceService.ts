/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttendanceDto } from '../models/AttendanceDto';
import type { CreateAttendanceRequest } from '../models/CreateAttendanceRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttendanceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param requestBody
     * @returns AttendanceDto Success
     * @throws ApiError
     */
    public createAttendance(
        requestBody: CreateAttendanceRequest,
    ): CancelablePromise<AttendanceDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/attendance/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
}
