import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class PersonInput {
  @Field(() => ID, {
    nullable: true
  })
  id?: number;

  @Field(() => String, {
    nullable: true
  })
  createdBy?: string;

  @Field(() => String, {
    nullable: true
  })
  updatedBy?: string;
}
