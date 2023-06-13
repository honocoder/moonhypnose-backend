import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ScriptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
