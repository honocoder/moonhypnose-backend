/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ConsultantCreateInput } from "./ConsultantCreateInput";

@ArgsType()
class CreateConsultantArgs {
  @Field(() => ConsultantCreateInput, { nullable: false })
  data!: ConsultantCreateInput;
}

export { CreateConsultantArgs as CreateConsultantArgs };
