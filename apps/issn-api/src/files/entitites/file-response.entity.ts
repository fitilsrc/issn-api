import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileResponse {
  @Field(() => String, {
    nullable: true
  })
  url?: string;
}

@ObjectType()
export class FileNamesPutPresignedResponse {
  @Field(() => String, {
    nullable: true
  })
  urls?: string;
}
