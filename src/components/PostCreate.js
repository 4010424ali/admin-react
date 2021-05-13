import React from 'react'
import { Create, SimpleForm, TextInput, DateTimeInput} from 'react-admin'

const PostCreate = (props) => {

  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='name' />
       <DateTimeInput label='Time' source='createdAt' />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
