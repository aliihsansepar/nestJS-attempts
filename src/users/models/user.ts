import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;
}
