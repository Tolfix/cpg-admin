import { List, Datagrid, TextField, SingleFieldList, ChipField, ReferenceField, EditButton, FunctionField, ReferenceArrayField, Pagination, PaginationProps } from 'react-admin';

const PostPagination = (props: JSX.IntrinsicAttributes & PaginationProps) => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;


export const ListTransactions = (props: any) => (
    <List {...props} pagination={<PostPagination />}>
        <Datagrid>
            <TextField label="Id" source="id" />
            <TextField label="uid" source="uid" />
            <ReferenceField label="Customer" source="customer_uid" reference="customers">
                <FunctionField 
                    // @ts-ignore
                    render={(record) => 
                    `${record.personal.first_name} ${record.personal.last_name}`} 
                    source="personal.first_name"
                />
            </ReferenceField>
            <ReferenceArrayField
                label="Invoices"
                reference="invoices"
                source="invoices"
            >
                <SingleFieldList>
                    <ChipField source="id" />
                </SingleFieldList>
            </ReferenceArrayField>
            <TextField label="Payed" source="date" />
            <TextField label="Amount" source="amount" />
            <TextField label="Fees" source="fees" />
            <TextField label="Method" source="payment_method" />
            <EditButton />
        </Datagrid>
    </List>
);