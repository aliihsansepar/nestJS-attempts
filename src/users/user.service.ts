import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUserArgs } from './dto/args/get-user.args';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User as UserModel } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUsers(): Promise<UserModel[]> {
    return this.prisma.user.findMany({});
  }
  /*   public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      id: uuidv4(),
      ...createUserData,
    };
    return user;
  }
  public getUserByID(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.id == getUserArgs.id);
  }
  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find((user) => user.id == updateUserData.id);
    Object.assign(user, updateUserData);
    return user;
  }
  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.id === deleteUserData.id,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return user;
  } */
}
