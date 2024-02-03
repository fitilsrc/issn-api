import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Pseudonym } from "./pseudonym.model";
import { Alias } from "./alias.model";

@ObjectType({ description: 'person' })
export class Person {
  @Field(type => ID)
  id: number;

  @Field(() => String, {
    nullable: true
  })
  createdAt?: Date;

  @Field(() => String, {
    nullable: true
  })
  updatedAt?: Date;

  @Field(() => String, {
    nullable: true
  })
  createdBy?: string;

  @Field(() => String, {
    nullable: true
  })
  updatedBy?: string;

  @Field(() => [Pseudonym], {
    nullable: true
  })
  pseudonyms?: Pseudonym[];

  @Field(() => [Alias], {
    nullable: true
  })
  aliases?: Alias[];
}
