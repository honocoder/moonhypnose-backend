import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AnalyseTitle } from "../analyse/AnalyseTitle";

export const ConsultantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Age" source="age" />
        <ReferenceInput
          source="analyses.id"
          reference="Analyse"
          label="Analyses"
        >
          <SelectInput optionText={AnalyseTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Job" source="job" />
        <NumberInput step={1} label="Kids" source="kids" />
        <TextInput label="Last Name" source="lastName" />
        <BooleanInput label="Married" source="married" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Where They Come From" source="whereTheyComeFrom" />
        <TextInput label="Why They Come" source="whyTheyCome" />
      </SimpleForm>
    </Edit>
  );
};
