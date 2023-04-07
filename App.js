import { Button, Switch, Text, TextInput, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'


import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import colors from './app/config/colors';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/TextInput';
import AppPicker from './app/components/Picker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {

  return (
    // <MessagesScreen/>
    <ListingEditScreen/>
    // <RegisterScreen/>
    // <ListingsScreen/>
    // <WelcomeScreen></WelcomeScreen>
    // <LoginScreen/>
    // <Screen>
    //   {/* <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/> */}
    //   <AppPicker 
    //     selectedItem={category}
    //     onSelectItem={item => setCategory(item)}
    //     placeholder='Category'
    //     icon='apps'
    //     items={categories}
    //   />
    //   <AppTextInput placeholder='Email' icon='email'/>
    // </Screen>
  );
}
