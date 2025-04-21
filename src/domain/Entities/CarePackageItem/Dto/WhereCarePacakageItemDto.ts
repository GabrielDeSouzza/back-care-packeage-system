import { StringFilterDTO } from 'src/domain/Dtos/WhereDtos/StringFilterDto';
import { WhereDTO } from 'src/domain/Dtos/WhereDtos/WhereDto';

export abstract class WhereCarePackageItemDTO extends WhereDTO {
  name?: StringFilterDTO;
}

export abstract class SortByCarePackageItemDTO {
  name?: 'asc' | 'desc';
}

export abstract class CountCarePackageItemDTO {
  where?: WhereCarePackageItemDTO;
}

export abstract class WhereCarePackageItemRequestDTO {
  where?: WhereCarePackageItemDTO;
  sort?: SortByCarePackageItemDTO;
  limit: number;
  offset: number;
}
