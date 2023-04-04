import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import { Switch, Text, TextInput, View } from 'react-native';
import colors from './app/config/colors';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]
export default function App() {
  const [isNew, setIsNew] = useState(false)
  const [category, setCategory] = useState(categories[0])

  return (
    // <ListingsScreen/>
    <Screen>
      {/* <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)}/> */}
      <AppPicker 
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        placeholder='Category'
        icon='apps'
        items={categories}
      />
      <AppTextInput placeholder='Email' icon='email'/>
    </Screen>
  );
}
