import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return 'login';
  }

  async register(dto: AuthDto) {
    const password = await argon.hash(dto.password);
    const user = await this.prisma.users.create({
      data: {
        name: dto.name,
        email: dto.email,
        password,
      },
    });
    delete user.password;
    return user;
  }
}
