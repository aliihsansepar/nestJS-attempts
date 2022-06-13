import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto, SignUpAuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin(@Body() dto: SignInAuthDto) {
    return this.authService.login(dto);
  }

  @Post('signup')
  signup(@Body() dto: SignUpAuthDto) {
    return this.authService.register(dto);
  }
}
