import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from'yup'

import Screen from '../components/Screen'
import { Form, FormField, SubmitButton } from '../components/forms'

const RegisterScreen = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
  });

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: '', password: '', email: ''}}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        <FormField 
          placeholder="Name"
          icon='account'
          autoCapitalize='none'
          autoCorrect={false}
          name='name'
          textContentType='name'
        />
        <FormField 
          placeholder="Email"
          icon='email'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          name='email'
          textContentType='emailAddress'
        />
        <FormField 
          placeholder="Password"
          icon='lock'
          autoCapitalize='none'
          autoCorrect={false}
          name='password'
          textContentType='password'
        />
        <SubmitButton 
          title='Register'
        />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default RegisterScreen