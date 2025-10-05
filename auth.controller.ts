import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(ThrottlerGuard)
  async login(@Body() credentials: { email: string; password: string }) {
    return { accessToken: 'fake-jwt-token' };
  }
}