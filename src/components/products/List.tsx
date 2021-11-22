import * as React from "react";
import { List, Datagrid, TextField, BooleanField, ReferenceField, EditButton, NumberField } from 'react-admin';

export const ListProducts = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField label="Id" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <ReferenceField label="Category" source="category_uid" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <BooleanField label="Enable stock" source="BStock" />
            <NumberField label="Stock" source="stock" />
            <BooleanField label="Special" source="special" />
            <BooleanField label="Hidden" source="hidden" />
            <NumberField label="Price" source="price" />
            <NumberField label="Type" source="payment_type" />
            <NumberField label="Recurring" source="recurring_method" />
            <NumberField label="Setup Fee" source="setup_fee" />
            <EditButton />
        </Datagrid>
    </List>
);