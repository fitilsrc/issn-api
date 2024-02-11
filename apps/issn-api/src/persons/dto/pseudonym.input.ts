import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PseudonymInput {
  @Field(() => String, {
    nullable: true
  })
  createdBy?: string;

  @Field(() => String, {
    nullable: true
  })
  updatedBy?: string;

  @Field(() => String, {
    nullable: true
  })
  title?: string;

  @Field()
  personId: number
}
