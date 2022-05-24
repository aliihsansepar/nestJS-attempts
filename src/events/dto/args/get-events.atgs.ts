import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
@ArgsType()
export class GetEventsArgs {
  @Field()
  id: number;
}
