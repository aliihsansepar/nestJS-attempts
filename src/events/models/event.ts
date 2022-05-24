import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Event {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  isDone?: boolean;
}
