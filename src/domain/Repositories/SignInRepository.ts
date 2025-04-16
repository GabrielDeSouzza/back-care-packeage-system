import { SignInDto } from '../Dtos/SignInData';
import { SignInResponseDto } from '../Dtos/SignInResponse';

export abstract class SignInRepository {
  abstract signIn(SignRequest: SignInDto): Promise<SignInResponseDto>;
}
