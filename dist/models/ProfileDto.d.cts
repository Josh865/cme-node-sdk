import { AccreditationLevel } from './AccreditationLevel.cjs';
import { ActivityFormatDto } from './ActivityFormatDto.cjs';
import { MeasurementTypeDto } from './MeasurementTypeDto.cjs';
import { ProgramSize } from './ProgramSize.cjs';

type ProfileDto = {
    id: number;
    programSize: ProgramSize;
    targetAccreditationLevel: AccreditationLevel;
    measurementTypes?: Array<MeasurementTypeDto> | null;
    activityFormats?: Array<ActivityFormatDto> | null;
};

export type { ProfileDto };
