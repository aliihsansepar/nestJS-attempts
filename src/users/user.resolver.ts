import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/input/create-user.input';
import { GetUserByIdArgs } from './dto/args/get-user-by-id.args';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { User } from './models/user';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'getAllUsers', nullable: 'items' })
  async getUsers() {
    return this.userService.getUsers();
  }
  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }

  @Query(() => User, { name: 'getUserById', nullable: true })
  getUserByID(@Args() getUserArgs: GetUserByIdArgs): Promise<UserModel> {
    return this.userService.getUserByID(getUserArgs);
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserData: UpdateUserInput) {
    return this.userService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserInput') deleteUserData: DeleteUserInput) {
    return this.userService.deleteUser(deleteUserData);
  }
}
