import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { 
  Form, 
  FormField, 
  SubmitButton,
  FormPicker
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/FormImagePicker'
import useLocation from '../hooks/useLocation'

const categories = [
  { label: 'Furniture', value: 1, name: 'floor-lamp', backgroundColor: '#fc5c65'},
  { label: 'Cars', value: 2, name: 'car', backgroundColor: '#fd9644' },
  { label: 'Cameras', value: 3, name: 'camera', backgroundColor: '#fed330' },
  { label: 'Games', value: 4, name: 'cards', backgroundColor: '#26de81' },
  { label: 'Clothing', value: 5, name: 'shoe-heel', backgroundColor: '#2bcbba' },
  { label: 'Sports', value: 6, name: 'basketball', backgroundColor: '#45aaf2' },
  { label: 'Movies & Music', value: 7, name: 'headphones', backgroundColor: '#4b7bec' },
  { label: 'Books', value: 7, name: 'book', backgroundColor: 'purple' },
  { label: 'Other', value: 7, name: 'blank', backgroundColor: 'gray' },
]

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('title'),
  price: Yup.number().required().min(1).max(10000).label('price'),
  description: Yup.string().label('description'),
  category: Yup.object().required().nullable().label('category'),
  images: Yup.array().min(1, "Please select at least one image"),
});

const ListingEditScreen = () => {

  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ 
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location._j)}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          name='images'
        />
        <FormField 
          maxLength={255}
          name='title'
          placeholder='Title'
        />
        <FormField 
          name='price'
          placeholder='Price'
          keyboardType='numeric'
          maxLength={8}
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          width='50%'
        />
        <FormField 
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton 
          title='Post'
        />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
})

export default ListingEditScreen