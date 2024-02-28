import { AccreditationLevel } from './AccreditationLevel.cjs';
import { ProgramSize } from './ProgramSize.cjs';

type CreateAccreditationProfileRequest = {
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypeIds?: Array<number> | null;
    activityFormatIds?: Array<number> | null;
};

export type { CreateAccreditationProfileRequest };
