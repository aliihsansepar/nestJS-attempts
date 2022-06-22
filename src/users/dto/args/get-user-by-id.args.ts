import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetUserByIdArgs {
  @Field(() => String)
  @IsNotEmpty()
  id: string;
}
