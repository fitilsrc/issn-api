import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FileInput {
  @Field()
  filename: string;
}
