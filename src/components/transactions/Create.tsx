import { Create, DateInput, FormTab, NumberInput, SelectInput, TabbedForm, TextInput } from "react-admin";

export const CreateTransactions = (props: any) =>
(
    <Create {...props}>
        <TabbedForm>
            <FormTab label="Info">
                <NumberInput required={true} label="Amount" source="amount" />
                <NumberInput required={true} label="Fees" source="fees" />
                <DateInput label="Payed at" source="date" defaultValue={new Date()} />
                <SelectInput required={true} source="payment_method" choices={[
                    { id: "none", name: "none" },
                    { id: "manual", name: "manual" },
                    { id: "paypal", name: "paypal" },
                    { id: "credit_card", name: "payment_pending" },
                    { id: "swish", name: "swish" },
                ]} />
            </FormTab>
        </TabbedForm>
    </Create>
);