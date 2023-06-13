import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type AnalyseUpdateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
