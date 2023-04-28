import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from'@expo/vector-icons';


import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
import useNotifications from '../../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  useNotifications()

  return (
    <Tab.Navigator
      screenOptions={{ 
        activeBackgroundColor: 'tomato',
        activeTintColor: 'white',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        options={{ 
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons
              name='home'
              size={size}
              color={color}
            />
        }}
        name={routes.FEED}
        component={FeedNavigator}
      />
      <Tab.Screen
        options={({ navigation }) => ({ 
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          )
        })}

        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
      />
      <Tab.Screen
          options={{ 
            tabBarIcon: ({ size, color }) =>
              <MaterialCommunityIcons
                name='account'
                size={size}
                color={color}
              />
          }}
        name={routes.ACCOUNT}
        component={AccountNavigator}
      />
    </Tab.Navigator>
)}

export default AppNavigator;