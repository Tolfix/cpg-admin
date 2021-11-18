import { 
    ArrayInput,
    BooleanInput,
    Create, DateInput, FormTab,
    NumberInput,
    ReferenceArrayInput, SelectArrayInput, SelectInput,
    SimpleFormIterator,
    TabbedForm,
    TextInput,
} from "react-admin";
//@ts-ignore
import RichTextInput from 'ra-input-rich-text';

export const CreateProducts = (props: any) =>
(
    <Create {...props}>
        <TabbedForm>
            <FormTab label="General">
                <ReferenceArrayInput source="category_uid" reference="categories">
                    <SelectInput
                        source="categories"
                        label="Categories"
                        required={true}
                        allowEmpty={false}
                        optionText="name"
                    />
                </ReferenceArrayInput>
                <TextInput required={true} label="Name" source="name" />
                <RichTextInput required={true} label="Description" source="description" />
                <BooleanInput label="Hidden" defaultValue={false} source="hidden" />
                <BooleanInput label="Special" defaultValue={false} source="special" />
            </FormTab>
            <FormTab label="Stock">
                <NumberInput min={0} required={true} defaultValue={0} label="Stock" source="stock" />
                <BooleanInput label="Enable Stock" defaultValue={false} source="BStock" />
            </FormTab>
            <FormTab label="Payments">
                <NumberInput min={0} required={true} label="Price" source="price" />
                <NumberInput min={0} required={true} defaultValue={0} label="Setup fee" source="setup_fee" />
                <NumberInput min={0} max={100} required={true} defaultValue={0} label="Tax Rate" source="tax_rate" />
            </FormTab>
            {/* <FormTab label="Miscellaneous">



            </FormTab> */}
        </TabbedForm>
    </Create>
);