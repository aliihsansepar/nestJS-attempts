import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  country: string;

  @Field()
  @IsNotEmpty()
  city: string;

  @Field()
  @IsNotEmpty()
  state: string;

  @Field()
  @IsNotEmpty()
  street: string;

  @Field(() => Int)
  @IsNotEmpty()
  number: number;

  @Field(() => Int)
  @IsNotEmpty()
  zip: number;

  @Field()
  @IsOptional()
  description: string;

  @Field()
  @IsNotEmpty()
  user_id: string;
}
