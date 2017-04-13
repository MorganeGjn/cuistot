import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    LongTextInput,
    EditButton,
    DisabledInput,
    SimpleForm,
    TextInput,
} from 'admin-on-rest/lib/mui';

const defaultSort = { field: 'first_name', order: 'ASC' };

export const GourmetList = props => (
    <List {...props} sort={defaultSort}>
        <Datagrid>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="created_at" />
            <TextField source="updated_at" />
            <EditButton />
        </Datagrid>
    </List>
);

const GourmetTitle = ({ record }) => <span>Training {record ? `"${record.name}"` : ''}</span>;

export const GourmetEdit = props => (
    <Edit title={<GourmetTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="gourmet_id" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="created_at" />
            <TextInput source="updated_at" />
            <LongTextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const GourmetCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="created_at" />
            <TextInput source="updated_at" />
            <LongTextInput source="description" />
        </SimpleForm>
    </Create>
);
