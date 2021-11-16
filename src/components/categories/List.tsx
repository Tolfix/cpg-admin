import RichTextInput from "ra-input-rich-text";
import { BooleanField, BooleanInput, Create, Datagrid, DateInput, Edit, EditButton, FormTab, List, NumberInput, RichTextField, SelectInput, TabbedForm, TextField, TextInput } from "react-admin";

export const ListCategory = (props: any) =>
(
    <List {...props}>
        <Datagrid>
            <TextField label="Name" source="name" />
            <RichTextField label="Description" source="description"  />
            <BooleanField label="Private" source="private" />
            <EditButton />
        </Datagrid>
    </List>
);