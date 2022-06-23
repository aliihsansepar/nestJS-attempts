import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  addres: string;

  @Field()
  description: string;

  @Field()
  user_id: string;
}
