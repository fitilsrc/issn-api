import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TokensResponse {
  @Field(() => String, {
    nullable: true
  })
  access_token?: string;

  @Field(() => Number, {
    nullable: true
  })
  expires_in?: number;

  @Field(() => Number, {
    nullable: true
  })
  refresh_expires_in?: number;

  @Field(() => String, {
    nullable: true
  })
  refresh_token?: string;

  @Field(() => String, {
    nullable: true
  })
  error?: string;
}
