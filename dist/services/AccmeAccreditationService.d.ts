import { CreateAccreditationProfileRequest } from '../models/CreateAccreditationProfileRequest.js';
import { CriterionDto } from '../models/CriterionDto.js';
import { EvidenceDto } from '../models/EvidenceDto.js';
import { GetProgressReportResponse } from '../models/GetProgressReportResponse.js';
import { ListCriteriaResponse } from '../models/ListCriteriaResponse.js';
import { ListEvidenceResponse } from '../models/ListEvidenceResponse.js';
import { ProfileDto } from '../models/ProfileDto.js';
import { SaveEvidenceRequest } from '../models/SaveEvidenceRequest.js';
import { UpdateAccreditationProfileRequest } from '../models/UpdateAccreditationProfileRequest.js';
import { UpdateEvidenceRequest } from '../models/UpdateEvidenceRequest.js';
import { CancelablePromise } from '../core/CancelablePromise.js';
import { BaseHttpRequest } from '../core/BaseHttpRequest.js';
import '../models/AccreditationLevel.js';
import '../models/ProgramSize.js';
import '../models/ActivityFormatDto.js';
import '../models/MeasurementTypeDto.js';
import '../core/ApiRequestOptions.js';
import '../core/OpenAPI.js';

declare class AccmeAccreditationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @param id
     * @returns CriterionDto Success
     * @throws ApiError
     */
    getAccmeAccreditationCriterion(id: number): CancelablePromise<CriterionDto>;
    /**
     * @param id
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    getEvidenceForAccmeAccreditationCriterion(id: number): CancelablePromise<EvidenceDto>;
    /**
     * @returns ListCriteriaResponse Success
     * @throws ApiError
     */
    listAccmeAccreditationCriterion(): CancelablePromise<ListCriteriaResponse>;
    /**
     * @param id
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    getAccmeAccreditationEvidence(id: number): CancelablePromise<EvidenceDto>;
    /**
     * @param id
     * @param requestBody
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    updateAccmeAccreditationEvidence(id: number, requestBody: UpdateEvidenceRequest): CancelablePromise<EvidenceDto>;
    /**
     * @returns ListEvidenceResponse Success
     * @throws ApiError
     */
    listEvidence(): CancelablePromise<ListEvidenceResponse>;
    /**
     * @param requestBody
     * @returns EvidenceDto Success
     * @throws ApiError
     */
    saveAccmeAccreditationEvidence(requestBody: SaveEvidenceRequest): CancelablePromise<EvidenceDto>;
    /**
     * @param requestBody
     * @returns ProfileDto Success
     * @throws ApiError
     */
    saveAccmeAccreditationProfile(requestBody: CreateAccreditationProfileRequest): CancelablePromise<ProfileDto>;
    /**
     * @returns ProfileDto Success
     * @throws ApiError
     */
    getAccmeAccreditationProfile(): CancelablePromise<ProfileDto>;
    /**
     * @param id
     * @param requestBody
     * @returns ProfileDto Success
     * @throws ApiError
     */
    updateAccmeAccreditationProfile(id: number, requestBody: UpdateAccreditationProfileRequest): CancelablePromise<ProfileDto>;
    /**
     * @returns GetProgressReportResponse Success
     * @throws ApiError
     */
    getAccmeAccreditationProgressReport(): CancelablePromise<GetProgressReportResponse>;
}

export { AccmeAccreditationService };
