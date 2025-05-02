import { BoolFilterDTO } from 'src/domain/Dtos/WhereDtos/BoolFilterDto';
import { DateTimeFilterDTO } from 'src/domain/Dtos/WhereDtos/DateTimeFilterDto';
import { NumberFilterDTO } from 'src/domain/Dtos/WhereDtos/NumberFilterDto';
import { StringFilterDTO } from 'src/domain/Dtos/WhereDtos/StringFilterDto';
import { WhereDTO } from 'src/domain/Dtos/WhereDtos/WhereDto';

export abstract class WherePersonDTO extends WhereDTO {
  name?: StringFilterDTO;
  lastName?: StringFilterDTO;
  document?: StringFilterDTO;
  hasChild?: BoolFilterDTO;
  birthdayDate?: DateTimeFilterDTO;
  gender?: StringFilterDTO;
}

export abstract class SortByPersonDTO {
  name?: 'asc' | 'desc';
  lastName?: 'asc' | 'desc';
  document?: 'asc' | 'desc';
  hasChild?: 'asc' | 'desc';
  birthdayDate?: 'asc' | 'desc';
  gender?: 'asc' | 'desc';
}

export abstract class CountPersonDTO {
  where?: WherePersonDTO;
}

export abstract class WherePersonRequestDTO {
  where?: WherePersonDTO;
  sort?: SortByPersonDTO;
  limit: number;
  offset: number;
}
