import { 
    ArrayInput,
    BooleanInput,
    Create, DateInput, FormTab,
    NumberInput,
    ReferenceArrayInput, SelectArrayInput, SelectInput,
    SimpleFormIterator,
    TabbedForm,
} from "react-admin";
//@ts-ignore
import RichTextInput from 'ra-input-rich-text';

export const CreateInvoices = (props: any) =>
(
    <Create {...props}>
        <TabbedForm>
            <FormTab label="General">
                <ReferenceArrayInput source="customer_uid" reference="customers">
                    <SelectInput
                        source="customers"
                        label="Customer"
                        required={true}
                        allowEmpty={false}
                        optionText={
                            (record: { personal: {first_name: any; last_name: any;} }) => 
                            `${record.personal.first_name} ${record.personal.last_name}`}
                    />
                </ReferenceArrayInput>
                <SelectInput required={true} source="status" choices={[
                    { id: "draft", name: "draft" },
                    { id: "refunded", name: "refunded" },
                    { id: "collections", name: "collections" },
                    { id: "payment_pending", name: "payment_pending" },
                    { id: "active", name: "active" },
                    { id: "pending", name: "pending" },
                    { id: "fruad", name: "fruad" },
                    { id: "cancelled", name: "cancelled" },
                ]} />
                <SelectInput required={true} source="payment_method" choices={[
                    { id: "none", name: "none" },
                    { id: "manual", name: "manual" },
                    { id: "bank", name: "bank" },
                    { id: "paypal", name: "paypal" },
                    { id: "credit_card", name: "credit_card" },
                    { id: "swish", name: "swish" },
                ]} />
                <NumberInput required={true} label="Amount" source="amount" />
                <NumberInput min={0} max={100} required={true} label="Tax Rate" source="tax_rate" />
                <BooleanInput label="Paid" defaultValue={false} source="paid" />
                <BooleanInput label="Notified" defaultValue={false} source="notified" />
            </FormTab>
            <FormTab label="Dates">
                <DateInput label="Invoiced date" source="dates.invoice_date" defaultValue={new Date().toLocaleDateString()} />
                <DateInput label="Due date" source="dates.due_date" defaultValue={new Date().toLocaleDateString()} />
            </FormTab>
            <FormTab label="Miscellaneous">
                
                <RichTextInput source="notes" />

                <ArrayInput required={true} source="items">
                    <SimpleFormIterator>
                        <RichTextInput source="notes" />
                        <NumberInput required={true} label="Amount" source="amount" />
                        <NumberInput label="Quantity" defaultValue={1} source="quantity" />
                        <ReferenceArrayInput source="product_id" reference="products">
                            <SelectInput
                                source="product"
                                label="Product"
                                required={true}
                                allowEmpty={false}
                                optionText={"name"}
                            />
                        </ReferenceArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>

                <ReferenceArrayInput source="transactions" reference="transactions">
                    <SelectArrayInput optionText="uid" />
                </ReferenceArrayInput>

            </FormTab>
        </TabbedForm>
    </Create>
);