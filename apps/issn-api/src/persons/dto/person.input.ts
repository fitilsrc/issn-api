import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class PersonInput {
  @Field(() => ID, {
    nullable: true
  })
  id?: number;

  @Field(() => String, {
    nullable: true
  })
  uuid: string;

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
  gender?: string;

  @Field(() => String, {
    nullable: true
  })
  details?: string;

  @Field(() => String, {
    nullable: true
  })
  signs?: string;

  @Field(() => String, {
    nullable: true
  })
  nationality?: string;

  @Field(() => String, {
    nullable: true
  })
  religion?: string;

  @Field(() => String, {
    nullable: true
  })
  ideology?: string;
}
