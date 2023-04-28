import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: 'username' });
    }

    async validate(username: string, passsword: string) {
        const user = await this.authService.validateUser(username, passsword);

        if (!user)
            throw new UnauthorizedException("invalid username and/or password");

        return user;
    }
}