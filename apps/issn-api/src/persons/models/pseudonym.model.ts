import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'pseudonym' })
export class Pseudonym {
  @Field(type => ID)
  id: number;

  @Field(() => String, {
    nullable: true
  })
  title?: string;

  @Field(() => String, {
    nullable: true
  })
  createdAt?: Date;

  @Field(() => String, {
    nullable: true
  })
  updatedAt?: Date;

  @Field(() => String, {
    nullable: true
  })
  createdBy?: string;

  @Field(() => String, {
    nullable: true
  })
  updatedBy?: string;

  @Field(() => Number)
  personId: number
}
