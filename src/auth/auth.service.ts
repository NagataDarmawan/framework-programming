import { Injectable } from '@nestjs/common';
import { registerDto } from './dto/register.dto.js';
import { User } from './entities/user-entity.js';
import { loginDto } from './dto/login.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';

@Injectable()
export class AuthService {
    //register
    register(registerDto: registerDto): User {
        const newUser: User = {
            id: 1,
            username: registerDto.username,
            email: registerDto.email,
            password: registerDto.password
        };
        return newUser;
    }

    //login
    login(loginDto: loginDto): { message: string } {
        return { message: 'Berhasil Login' };
    }

    forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
        return {
            message: `Link reset password berhasil dikirim ke ${forgotPasswordDto.email}`
        };
    }

    resetPassword(resetPasswordDto: ResetPasswordDto) {
        return {
            message: 'Password reset successfully',
            token: resetPasswordDto.token
        };
    }
}
