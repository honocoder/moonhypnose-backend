import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsultantTitle } from "../consultant/ConsultantTitle";

export const AnalyseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="consultant.id"
          reference="Consultant"
          label="Consultant"
        >
          <SelectInput optionText={ConsultantTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
