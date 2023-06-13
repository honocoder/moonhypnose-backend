import { Consultant } from "../consultant/Consultant";

export type Analyse = {
  consultant?: Consultant | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
