import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUserByIdArgs } from './dto/args/get-user-by-id.args';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User as UserModel } from '@prisma/client';
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUsers(): Promise<UserModel[]> {
    return this.prisma.user.findMany({});
  }
  async createUser(createUserData: CreateUserInput): Promise<UserModel> {
    const password = await argon.hash(createUserData.password);
    const user = await this.prisma.user.create({
      data: {
        name: createUserData.name,
        email: createUserData.email,
        password,
      },
    });
    return user;
  }

  async getUserByID(getUserArgs: GetUserByIdArgs): Promise<UserModel> {
    return this.prisma.user.findUnique({
      where: {
        id: getUserArgs.id,
      },
    });
  }
  async updateUser(updateUserData: UpdateUserInput): Promise<UserModel> {
    const password = await argon.hash(updateUserData.password);
    const user = await this.prisma.user.update({
      where: {
        id: updateUserData.id,
      },
      data: {
        name: updateUserData.name,
        password,
      },
    });
    return user;
  }
  public deleteUser(deleteUserData: DeleteUserInput): Promise<UserModel> {
    const user = this.prisma.user.delete({
      where: {
        id: deleteUserData.id,
      },
    });
    return user;
  }
}
