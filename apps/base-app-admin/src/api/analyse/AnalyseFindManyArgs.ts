import { AnalyseWhereInput } from "./AnalyseWhereInput";
import { AnalyseOrderByInput } from "./AnalyseOrderByInput";

export type AnalyseFindManyArgs = {
  where?: AnalyseWhereInput;
  orderBy?: Array<AnalyseOrderByInput>;
  skip?: number;
  take?: number;
};
