import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'document' })
export class DocumentResponse {
  @Field(() => ID, {
    nullable: true
  })
  id?: number;

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

  @Field(() => String, {
    nullable: true
  })
  title?: string;

  @Field(() => String, {
    nullable: true
  })
  series?: string;

  @Field(() => String, {
    nullable: true
  })
  issued?: Date;

  @Field(() => Number)
  aliasId: number;
}
