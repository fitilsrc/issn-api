import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FileInput {
  @Field(() => String, {
    nullable: true
  })
  filename: string;
}

@InputType()
export class FileNamesInput {
  @Field(() => [String], {
    nullable: true
  })
  filenames?: string[];

  @Field(() => String, {
    nullable: true
  })
  bucket?: string[];
}
