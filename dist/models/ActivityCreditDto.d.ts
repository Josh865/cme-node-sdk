type ActivityCreditDto = {
    id: number;
    creditTypeId: number;
    name: string;
    abbreviation?: string | null;
    credits: number;
};

export type { ActivityCreditDto };
