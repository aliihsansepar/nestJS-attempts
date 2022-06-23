import { Field, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/models/address';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [Address])
  addresses: Address[];
}
