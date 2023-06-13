import { Analyse as TAnalyse } from "../api/analyse/Analyse";

export const ANALYSE_TITLE_FIELD = "title";

export const AnalyseTitle = (record: TAnalyse): string => {
  return record.title || String(record.id);
};
