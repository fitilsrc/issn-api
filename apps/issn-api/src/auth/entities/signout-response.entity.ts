import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SignOutResponse {
  @Field(() => String, {
    nullable: true
  })
  message?: string;

  @Field(() => String, {
    nullable: true
  })
  error?: string;
}
