import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ANALYSE_TITLE_FIELD } from "../analyse/AnalyseTitle";

export const ConsultantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Consultants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Age" source="age" />
        <ReferenceField
          label="Analyses"
          source="analyse.id"
          reference="Analyse"
        >
          <TextField source={ANALYSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Job" source="job" />
        <TextField label="Kids" source="kids" />
        <TextField label="Last Name" source="lastName" />
        <BooleanField label="Married" source="married" />
        <TextField label="Phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Where They Come From" source="whereTheyComeFrom" />
        <TextField label="Why They Come" source="whyTheyCome" />
      </Datagrid>
    </List>
  );
};
