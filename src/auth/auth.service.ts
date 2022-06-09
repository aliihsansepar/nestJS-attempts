import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.users.create({
      data: {
        email: dto.email,
        password: hash,
      },
    });
    delete user.password;
    return user;
  }
  async register() {
    return { msg: 'register' };
  }
}
