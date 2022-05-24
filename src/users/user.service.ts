import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUserArgs } from './dto/args/get-user.args';
import { DeleteUserInput } from './dto/input/delete-user.input';

@Injectable()
export class UserService {
  private users: User[] = [];
  public getUsers(): User[] {
    return this.users;
  }
  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userID: uuidv4(),
      ...createUserData,
    };
    this.users.push(user);
    return user;
  }
  public getUserByID(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userID == getUserArgs.userID);
  }
  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find(
      (user) => user.userID == updateUserData.userID,
    );
    Object.assign(user, updateUserData);
    return user;
  }
  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userID === deleteUserData.userID,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return user;
  }
}
