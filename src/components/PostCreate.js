import React from 'react'
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin'

const PostCreate = (props) => {

  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <SelectInput
          label="Carracters Limit"
          source="charactersLimit"
          allowEmpty={true}
          choices={[
            { id: '140', name: '140' },
            { id: '250', name: '250' },
          ]} />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
