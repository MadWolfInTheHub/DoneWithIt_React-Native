import React from 'react'
import { Alert, Keyboard, View } from 'react-native'
import * as Notifications from 'expo-notifications';


import messageApi from "../api/messages"
import { Form, FormField, SubmitButton } from './forms';
import AppTextInput from './TextInput';

const ContactSellerForm = ({ listing }) => {
  const handleSubmit = async ({ message}, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messageApi.send(message, listing.id);

    if(!result.ok) {
      return Alert.alert('Error', "Couldn't send the message to seller")
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome",
        body: "Your message has been sent to the seller"
      },
      trigger: { seconds: 2 },
    });
  }

  return (
    <View>
      <Form
        initialValues={{ 
          message: ''
        }}
        onSubmit={handleSubmit}
      >
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name='message'
          placeholder='Message...'
        />
        <SubmitButton
          title='Contact seller'
        />      
      </Form>
    </View>
  )
}

export default ContactSellerForm