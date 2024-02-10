import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserCredentialInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
