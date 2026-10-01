import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { registerDto } from './dto/register.dto.js';
import { loginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/Register')
    register(@Body() registerDto: registerDto) {
        return this.authService.register(registerDto);
    }

    @Post('/Login')
    login(@Body() loginDto: loginDto) {
        return this.authService.login(loginDto);
    }

    @Post('/forgot-password')
    forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto);
    }

    @Post('/reset-password')
    resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        // Ubah dari authService.forgotPassword() menjadi authService.resetPassword()
        return this.authService.resetPassword(resetPasswordDto);
    }
}