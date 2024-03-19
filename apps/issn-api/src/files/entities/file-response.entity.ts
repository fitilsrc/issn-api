import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileResponse {
  @Field(() => String, {
    nullable: true
  })
  url?: string;
}

@ObjectType()
export class PresignedUrlsResponse {
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