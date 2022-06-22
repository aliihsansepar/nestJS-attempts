import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
/* import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input'; */
import { User } from './models/user';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users', nullable: 'items' })
  async getUsers() {
    return this.userService.getUsers();
  }

  /* @Query(() => User, { name: 'user', nullable: true })
  getUserByID(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUserByID(getUserArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserData: UpdateUserInput): User {
    return this.userService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserInput') deleteUserData: DeleteUserInput): User {
    return this.userService.deleteUser(deleteUserData);
  } */
}
