import { SignInDto } from '../Dtos/SingInData';
import { SingInResponseDto } from '../Dtos/SingInResponse';

export abstract class SingInRepository {
  abstract signIn(SignRequest: SignInDto): Promise<SingInResponseDto>;
}
