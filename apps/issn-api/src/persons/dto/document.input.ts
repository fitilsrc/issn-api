import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DocumentInput {
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

  @Field(() => String)
  series?: string;

  @Field(() => String)
  issued?: Date;

  @Field(() => Number)
  aliasId: number;
}
