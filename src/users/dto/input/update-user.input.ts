import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  surname: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsNotEmpty()
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  subricription: boolean;
}
