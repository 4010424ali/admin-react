import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  FunctionField,
} from 'react-admin';

const PostList = (props) => {
  // eslint-disable-next-line
  const history = useHistory();

  const handleClick = (id) => {
    axios.post(`SendInvites/${id}`);
  };

  const redirect = (id) => {
    window.location.href = `http://localhost:3001/${id}`;
  };

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="createdAt"></TextField>
        <FunctionField
          render={(record) => {
            return (
              <button onClick={() => redirect(record.id)}>
                View Chat Room
              </button>
            );
          }}
        />
        <FunctionField
          render={(record) => {
            return (
              <button onClick={() => handleClick(record.id)}>Send Email</button>
            );
          }}
        />

        <EditButton basePath="/ChatRooms" />
        <DeleteButton basePath="/ChatRooms" />
      </Datagrid>
    </List>
  );
};

export default PostList;
