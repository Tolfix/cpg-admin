import { List, Datagrid, TextField, SingleFieldList, ChipField, BooleanField, ReferenceField, EditButton } from 'react-admin';

export const ListTransactions = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField label="Id" source="id" />
            <TextField label="uid" source="uid" />
            <TextField label="Payed" source="date" />
            <TextField label="Amount" source="amount" />
            <TextField label="Fees" source="fees" />
            <TextField label="Method" source="payment_method" />
            <EditButton />
        </Datagrid>
    </List>
);