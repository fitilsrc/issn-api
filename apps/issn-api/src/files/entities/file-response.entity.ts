import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PresignedUrlResponse {
  @Field(() => String, {
    nullable: true
  })
  filename?: string;

  @Field(() => String, {
    nullable: true
  })
  bucket?: string;

  @Field(() => String, {
    nullable: true
  })
  url?: string;
}
