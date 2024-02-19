import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  hashingPassword(@Body() data: { password: string }): any {
    return this.authService.salt(data.password);
  }
}
