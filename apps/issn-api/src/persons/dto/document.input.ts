import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class DocumentInput {
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
  title?: string;

  @Field(() => String, {
    nullable: true
  })
  series?: string;

  @Field(() => String, {
    nullable: true,
  })
  issued?: Date;

  @Field(() => Number, {
    nullable: true
  })
  aliasId?: number;
}
