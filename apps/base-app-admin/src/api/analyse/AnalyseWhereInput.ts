import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnalyseWhereInput = {
  consultant?: ConsultantWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
