import { DateTimeFilterDTO } from 'src/domain/Dtos/WhereDtos/DateTimeFilterDto';
import { NumberFilterDTO } from 'src/domain/Dtos/WhereDtos/NumberFilterDto';
import { StringFilterDTO } from 'src/domain/Dtos/WhereDtos/StringFilterDto';
import { WhereDTO } from 'src/domain/Dtos/WhereDtos/WhereDto';

export abstract class WhereCarePackageDTO extends WhereDTO {
  id?: StringFilterDTO;
  numberControl?: NumberFilterDTO;
  typeCarePackageId?: StringFilterDTO;
  personId?: StringFilterDTO;
  carePackageScheduleId?: StringFilterDTO;
  createdBy?: StringFilterDTO;
  updatedBy?: StringFilterDTO;
  updatedAt?: DateTimeFilterDTO;
  createdAt?: DateTimeFilterDTO;
}

export abstract class SortByCarePackageDTO {
  id?: 'asc' | 'desc';
  numberControl?: 'asc' | 'desc';
  typeCarePackageId?: 'asc' | 'desc';
  personId?: 'asc' | 'desc';
  carePackageScheduleId?: 'asc' | 'desc';
  createdBy?: 'asc' | 'desc';
  updatedBy?: 'asc' | 'desc';
  updatedAt?: 'asc' | 'desc';
  createdAt?: 'asc' | 'desc';
}

export abstract class CountCarePackageDTO {
  where?: WhereCarePackageDTO;
}

export abstract class WhereCarePackageRequestDTO {
  where?: WhereCarePackageDTO;
  sort?: SortByCarePackageDTO;
  limit: number;
  offset: number;
}
