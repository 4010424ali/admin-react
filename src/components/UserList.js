import React, { useState } from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  SelectInput,
  SimpleForm,
  ReferenceInput  
} from 'react-admin'

import axios from 'axios'


/* const ListActions = props => {
  const { className, basePath } = props;
  return (
    <TopToolbar className={className}>
      <CreateButton basePath={basePath} />
      <ImportButton {...props} />
    </TopToolbar>
  );
}; */




const UserList = (props) => {

  const [title, setTitle] = useState('')
const [email, setEmail] = useState('')



const handleClick = (e) => {
  e.preventDefault(); 

  if(e.target.id === "title" ) {
    setTitle(e.target.value)}
  else {
    setEmail(e.target.value)
  }
}

const handleSubmit = (e) => {
  e.preventDefault(); 
  
  const dataToSubmit = {
    title: title,
    email
  }
  axios.post("/api/sendMail",dataToSubmit)

}


  return (
<> 
    <List {...props} /* actions={<ListActions />} */>
      <SimpleForm onSubmit={handleSubmit}>
      <h1>Send Invites</h1>
     {/*  <ReferenceInput label="Select Huddle" source="title" reference="ChatRooms"> 
        <SelectInput optionText="title" id="title" value={title} onChange={handleClick}>
        </SelectInput>
        </ReferenceInput> */}
      <Datagrid onChange={handleClick} value={email} >
        <TextField source='id' />
        <EmailField source='email_address' />
        <EditButton basePath='/email_address' />
        <DeleteButton basePath='/email_address' />
      </Datagrid>
      </SimpleForm>
    </List>

    </>
  )
}

export default UserList
