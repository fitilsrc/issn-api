import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserRefreshTokenInput {
  @Field()
  refresh_token: string;
}
