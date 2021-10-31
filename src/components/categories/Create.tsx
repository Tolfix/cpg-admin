import RichTextInput from "ra-input-rich-text";
import { BooleanInput, Create, DateInput, FormTab, NumberInput, SelectInput, TabbedForm, TextInput } from "react-admin";

export const CreateCategory = (props: any) =>
(
    <Create {...props}>
        <TabbedForm>
            <FormTab label="General">
                <TextInput required={true} label="Name" source="name" />
                <RichTextInput required={true} label="Description" source="description"  />
                <BooleanInput defaultValue={false} label="Private" source="private" />
            </FormTab>
        </TabbedForm>
    </Create>
);