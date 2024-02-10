import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserTokensInput {
  @Field()
  access_token: string;

  @Field()
  refresh_token: string;
}
