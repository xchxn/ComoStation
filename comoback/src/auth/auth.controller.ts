import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  signUp(@Body() data: { id: string; name: string; password: string }): any {
    return this.authService.saveUserInformation(
      data.id,
      data.name,
      data.password,
    );
  }
  @Post()
  validCheck(@Body() data: { id: string }): any {
    return this.authService.idValidCheck(data.id);
  }
}
