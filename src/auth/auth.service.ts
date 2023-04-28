import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async login(user: any) {
        const payload = { sub: user.id, username: user.username };

        return {
            token: this.jwtService.sign(payload, { privateKey: process.env.JWT_SECRET }),
            user
        };
    }

    async validateUser(username: string, password: string) {
        const user = await this.userService.findByUsername(username);
        if (!user) return null;

        const isPasswordValid = compareSync(password, user.password);
        if (!isPasswordValid) return null;

        return user;
    }
}