import { CreateAccreditationProfileRequest } from '../models/CreateAccreditationProfileRequest.cjs';
import { CriterionDto } from '../models/CriterionDto.cjs';
import { EvidenceDto } from '../models/EvidenceDto.cjs';
import { GetProgressReportResponse } from '../models/GetProgressReportResponse.cjs';
import { ListCriteriaResponse } from '../models/ListCriteriaResponse.cjs';
import { ListEvidenceResponse } from '../models/ListEvidenceResponse.cjs';
import { ProfileDto } from '../models/ProfileDto.cjs';
import { SaveEvidenceRequest } from '../models/SaveEvidenceRequest.cjs';
import { UpdateAccreditationProfileRequest } from '../models/UpdateAccreditationProfileRequest.cjs';
import { UpdateEvidenceRequest } from '../models/UpdateEvidenceRequest.cjs';
import { CancelablePromise } from '../core/CancelablePromise.cjs';
import { BaseHttpRequest } from '../core/BaseHttpRequest.cjs';
import '../models/AccreditationLevel.cjs';
import '../models/ProgramSize.cjs';
import '../models/ActivityFormatDto.cjs';
import '../models/MeasurementTypeDto.cjs';
import '../core/ApiRequestOptions.cjs';
import '../core/OpenAPI.cjs';

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
