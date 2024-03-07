import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileResponse {
  @Field(() => String, {
    nullable: true
  })
  url?: string;
}
