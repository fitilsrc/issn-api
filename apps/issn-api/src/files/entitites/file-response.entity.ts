import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileResponse {
  @Field(() => String, {
    nullable: true
  })
  url?: string;
}

@ObjectType()
export class UploadPresignedUrlsResponse {
  @Field(() => String, {
    nullable: true
  })
  filename?: string;

  @Field(() => String, {
    nullable: true
  })
  url?: string;
}
