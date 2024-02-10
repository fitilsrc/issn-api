import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SessionResponse {
  @Field(() => String, {
    nullable: true
  })
  id?: string;

  @Field(() => String, {
    nullable: true
  })
  username?: string;

  @Field(() => String, {
    nullable: true
  })
  userId?: string;

  @Field(() => String, {
    nullable: true
  })
  ipAddress?: string;

  @Field(() => Number, {
    nullable: true
  })
  start?: number;

  @Field(() => Number, {
    nullable: true
  })
  lastAccess?: number;

  @Field(() => String, {
    nullable: true
  })
  error?: string;
}
