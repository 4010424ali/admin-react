import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Moment from 'react-moment';


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

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="createdAt"><Moment format="MMMM Do YYYY, h:mm:ss a"> </Moment></TextField>
        <FunctionField
          render={(record) => {
            return record.secureUrl ? (
                <a rel="noopener noreferrer" href={`https://open-huddle.netlify.app/u/${record.secureUrl}`} target="_blank"><button>Enter chatroom</button></a>
            )
            :
            (
                <a rel="noopener noreferrer" href={`https://open-huddle.netlify.app/${record.id}`} target="_blank"><button>Enter Chatroom</button></a>
            );
          }}
        />
        <FunctionField
          render={(record) => {
            return (
              <button>
                <CopyToClipboard text={record.secureUrl ? `https://open-huddle.netlify.app/u/${record.secureUrl}`:`https://open-huddle.netlify.app/${record.id}`}>
                <span>Copy to clipboard</span>
                </CopyToClipboard>
              </button>
            );
          }}
        />

  {/*       <FunctionField
          render={(record) => {
            return (
              <button onClick={() => handleClick(record.id)}>Send Email</button>
            );
          }}
        /> */}

        <EditButton basePath="/ChatRooms" />
        <DeleteButton basePath="/ChatRooms" />
      </Datagrid>
    </List>
  );
};

export default PostList;
