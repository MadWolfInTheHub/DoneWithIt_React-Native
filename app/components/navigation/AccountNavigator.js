import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyAccountScreen from '../../screens/AccountScreen';
import MessagesScreen from '../../screens/MessagesScreen';
import routes from './routes';


const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "default"
    }}
  >
    <Stack.Screen
      name="account"
      component={MyAccountScreen}
      options={{ 
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.MESSAGES}
      component={MessagesScreen}
    />
  </Stack.Navigator>
);

export default AccountNavigator; 