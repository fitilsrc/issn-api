import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class StatusResponse {
  @Field(() => String, {
    nullable: true
  })
  status?: string;

  @Field(() => String, {
    nullable: true
  })
  message?: string;
}
