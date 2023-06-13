/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyseWhereInput } from "./AnalyseWhereInput";
import { Type } from "class-transformer";
import { AnalyseOrderByInput } from "./AnalyseOrderByInput";

@ArgsType()
class AnalyseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyseWhereInput,
  })
  @Field(() => AnalyseWhereInput, { nullable: true })
  @Type(() => AnalyseWhereInput)
  where?: AnalyseWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalyseOrderByInput],
  })
  @Field(() => [AnalyseOrderByInput], { nullable: true })
  @Type(() => AnalyseOrderByInput)
  orderBy?: Array<AnalyseOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnalyseFindManyArgs as AnalyseFindManyArgs };
