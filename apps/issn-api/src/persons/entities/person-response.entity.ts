import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PersonResponse {
  @Field(() => ID, {
    nullable: true
  })
  id?: number;

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
}
