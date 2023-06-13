import { AnalyseWhereUniqueInput } from "../analyse/AnalyseWhereUniqueInput";

export type ConsultantCreateInput = {
  age?: number | null;
  analyses?: AnalyseWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  job?: string | null;
  kids?: number | null;
  lastName?: string | null;
  married?: boolean | null;
  phone?: string | null;
  whereTheyComeFrom?: string | null;
  whyTheyCome?: string | null;
};
