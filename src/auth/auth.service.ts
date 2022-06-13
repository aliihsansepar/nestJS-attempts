import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignInAuthDto, SignUpAuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(dto: SignInAuthDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user not exist throw error
    if (!user) {
      throw new ForbiddenException('Credentials are invalid');
    }
    // if user exist check password correct
    const isCorrect = await argon.verify(user.password, dto.password);
    // if password not correct throw error
    if (!isCorrect) {
      throw new ForbiddenException('Credentials are invalid');
    }
    // if password correct return user without password
    delete user.password;
    return user;
  }

  async register(dto: SignUpAuthDto) {
    const password = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password,
        },
      });
      delete user.password;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
      }
      throw error;
    }
  }
}
