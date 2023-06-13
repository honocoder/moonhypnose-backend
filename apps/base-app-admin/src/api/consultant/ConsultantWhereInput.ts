import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AnalyseWhereUniqueInput } from "../analyse/AnalyseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ConsultantWhereInput = {
  age?: IntNullableFilter;
  analyses?: AnalyseWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  job?: StringNullableFilter;
  kids?: IntNullableFilter;
  lastName?: StringNullableFilter;
  married?: BooleanNullableFilter;
  phone?: StringNullableFilter;
  whereTheyComeFrom?: StringNullableFilter;
  whyTheyCome?: StringNullableFilter;
};
