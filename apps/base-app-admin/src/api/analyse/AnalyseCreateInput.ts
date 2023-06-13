import { ConsultantWhereUniqueInput } from "../consultant/ConsultantWhereUniqueInput";

export type AnalyseCreateInput = {
  consultant?: ConsultantWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
