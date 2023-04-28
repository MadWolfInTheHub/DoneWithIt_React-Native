import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Yup from'yup'

import Screen from '../components/Screen'
import { Form, FormField, SubmitButton } from '../components/forms'
import usersApi from '../api/user'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'
import AppText from '../components/Text'
import colors from '../config/colors'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'
import logger from '../utility/logger'

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)

  const [error, setError] = useState()
  const { logIn } = useAuth()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(5).label('Password'),
  });

  const handleSubmit = async( userInfo ) => {
    const result = await registerApi.request(JSON.stringify(userInfo));

    if(!result.ok) {
      if(result.data) setError(result.data.error)
      else {
        setError("An unexpected error occurred")
        logger.log(result)
      }
      return
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password,
    )
    
    logIn(authToken)
  }

  return (
    <>
      {/* <ActivityIndicator visible={true}/> */}
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: '', password: '', email: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {
            error &&
            <AppText style={styles.errorText}>{error}</AppText>
          }
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
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  errorContainer: {
    alignItems: 'center',
  },
  errorText: {
    color: colors.danger,
    fontWeight: 'bold',
  },
})

export default RegisterScreen