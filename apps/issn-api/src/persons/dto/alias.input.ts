import { Field, ID, InputType } from "@nestjs/graphql";
import { DocumentInput } from "./document.input";

@InputType()
export class AliasInput {
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
  firstName?: string;

  @Field(() => String, {
    nullable: true
  })
  secondName?: string;

  @Field(() => String, {
    nullable: true
  })
  surname?: string;

  @Field(() => String, {
    nullable: true
  })
  birthday?: Date;

  @Field(() => String, {
    nullable: true
  })
  deathday?: Date;

  @Field(() => String, {
    nullable: true
  })
  birthPlace?: string;

  @Field(() => String, {
    nullable: true
  })
  citizenship?: string;

  @Field(() => String, {
    nullable: true
  })
  gender?: string;

  @Field(() => Number)
  personId: number;

  @Field(() => [DocumentInput], {
    nullable: true
  })
  documents?: DocumentInput[];
}
