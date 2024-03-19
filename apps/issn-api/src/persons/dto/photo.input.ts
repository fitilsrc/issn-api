import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class PhotoInput {
  @Field(() => ID, {
    nullable: true
  })
  id?: number;

  @Field(() => String, {
    nullable: true
  })
  createdBy?: string;

  @Field(() => String, {
    nullable: true
  })
  updatedBy?: string;

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

  @Field(() => Number)
  personId: number;
}
