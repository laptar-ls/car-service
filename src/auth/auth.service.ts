import {Injectable} from '@nestjs/common';

@Injectable()
export class AuthService {

    singin(){return 'I have signed in'}

    singup(){return 'I have signed up'}
}