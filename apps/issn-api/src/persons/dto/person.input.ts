import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PersonInput {
  @Field(() => String, {
    nullable: true
  })
  createdBy?: string;

  @Field(() => String, {
    nullable: true
  })
  updatedBy?: string;
}
