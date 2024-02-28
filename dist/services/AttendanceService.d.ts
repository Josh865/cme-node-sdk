import { AttendanceDto } from '../models/AttendanceDto.js';
import { CreateAttendanceRequest } from '../models/CreateAttendanceRequest.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

declare class AttendanceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param requestBody
     * @returns AttendanceDto Success
     * @throws ApiError
     */
    createAttendance(requestBody: CreateAttendanceRequest): CancelablePromise<AttendanceDto>;
}

export { AttendanceService };
