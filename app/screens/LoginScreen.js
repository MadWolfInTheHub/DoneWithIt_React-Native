import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'


import Screen from '../components/Screen'
import { Form, FormField, SubmitButton, ErrorMessage } from '../components/forms'
import authApi from '../api/auth'
import useAuth from '../auth/useAuth'


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const LoginScreen = () => {
  const { logIn } = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async({ email, password }) => {
    const result = await authApi.login(email, password);

    if(!result.ok) return setLoginFailed(true)

    setLoginFailed(false);
    logIn(result.data);
  }

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />
      <Form
        initialValues={{ email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
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
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder="password"
          textContentType='password'
          secureTextEntry
        />
        <SubmitButton 
          title='Login'
        />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20, 
  },
})

export default LoginScreen;