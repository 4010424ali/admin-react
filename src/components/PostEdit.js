import React from 'react'
import { Edit, SimpleForm, TextInput, SelectInput} from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='chair' />
        <SelectInput
          label="Carracters Limit"
          source="charactersLimit"
          allowEmpty={true}
          choices={[
            { id: '140', name: '140' },
            { id: '250', name: '250' },
          ]} />
      </SimpleForm>
    </Edit>

  )
}

export default PostEdit
