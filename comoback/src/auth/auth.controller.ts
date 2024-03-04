import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(
    @Body()
    data: {
      id: string;
      nickname: string;
      password: string;
      pwcheck: string;
    },
  ): any {
    return this.authService.saveUserInformation(
      data.id,
      data.nickname,
      data.password,
    );
  }
  //발견된 버그
  //db에 저장시 0으로 시작하는 경우 0 다음문자열부터 저장됨.
  @Post('idvalidcheck')
  idValidCheck(@Body() data: { id: string }): any {
    console.log(data.id);
    return this.authService.idValidCheck(data.id);
  }
  @Post('nicknamevalidcheck')
  nicknameValidCheck(@Body() data: { nickname: string }): any {
    console.log(data.nickname);
    return this.authService.nicknameValidCheck(data.nickname);
  }
  @Post('login')
  login(@Body() data: { id: string; password: string }): any {
    console.log(data.id);
    return this.authService.login(data.id, data.password);
  }
}
