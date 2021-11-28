import { BooleanField, Datagrid, EditButton, List, RichTextField, TextField, } from "react-admin";

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