import React from 'react'
import { Edit, SimpleForm, TextInput, DateTimeInput, ArrayInput, SimpleFormIterator} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
      <ArrayInput source="invites">
          <SimpleFormIterator>
          <TextInput label="Email Address" source="email" type="email" />
        </SimpleFormIterator>
      </ArrayInput> 
        <DateTimeInput label='Published' source='time' />
      </SimpleForm>
    </Edit>

  )
}

export default PostEdit
