type GetProgressReportResponse = {
    coreCriteriaSatisfied: number;
    coreCriteriaRequired: number;
    commendationCriteriaSatisfied: number;
    commendationCriteriaRequired: number;
    isCoreCriteriaSatfied: boolean;
    isCommendationCriteriaSatisfied: boolean;
    isAchievesOutcomesSatisfied: boolean;
    recommendations: Array<string>;
};

export type { GetProgressReportResponse };
