import { List, Datagrid, TextField, EditButton, ReferenceField, FunctionField, DateField, ReferenceArrayField, SingleFieldList, ChipField } from 'react-admin';

export const configurable_options_List = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField label="Id" source="id" />
            <ReferenceArrayField
                label="Product"
                reference="products"
                source="products"
            >
                <SingleFieldList>
                    <ChipField source="products_ids" />
                </SingleFieldList>
            </ReferenceArrayField>
            <EditButton />
        </Datagrid>
    </List>
);