import { Analyse } from "../analyse/Analyse";

export type Consultant = {
  age: number | null;
  analyses?: Analyse | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  job: string | null;
  kids: number | null;
  lastName: string | null;
  married: boolean | null;
  phone: string | null;
  updatedAt: Date;
  whereTheyComeFrom: string | null;
  whyTheyCome: string | null;
};
