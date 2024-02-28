import { AttendanceDto } from '../models/AttendanceDto.cjs';
import { CreateAttendanceRequest } from '../models/CreateAttendanceRequest.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

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
