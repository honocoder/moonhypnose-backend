/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ConsultantWhereUniqueInput } from "./ConsultantWhereUniqueInput";
import { ConsultantUpdateInput } from "./ConsultantUpdateInput";

@ArgsType()
class UpdateConsultantArgs {
  @Field(() => ConsultantWhereUniqueInput, { nullable: false })
  where!: ConsultantWhereUniqueInput;
  @Field(() => ConsultantUpdateInput, { nullable: false })
  data!: ConsultantUpdateInput;
}

export { UpdateConsultantArgs as UpdateConsultantArgs };
