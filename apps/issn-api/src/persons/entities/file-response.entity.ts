import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileResponse {
  @Field(() => ID)
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

  @Field(() => String, {
    nullable: true
  })
  uri: string;

  @Field(() => Number)
  personId: number;
}
