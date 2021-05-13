import React from 'react';
import { Create, SimpleForm, TextInput, TopToolbar } from 'react-admin';

import { ImportButton } from 'react-admin-import-csv';

const ListActions = (props) => {
  const { className } = props;
  return (
    <TopToolbar className={className}>
      <ImportButton {...props} />
    </TopToolbar>
  );
};

const UserCreate = (props) => {
  return (
    <>
      <Create title="Create a User" {...props} actions={<ListActions />}>
        <SimpleForm>
          <TextInput source="email_address" />
        </SimpleForm>
      </Create>
    </>
  );
};

export default UserCreate;
