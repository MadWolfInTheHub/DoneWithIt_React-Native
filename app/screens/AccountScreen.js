import { FlatList, StyleSheet, View, } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import Screen from '../components/Screen'
import AppIcon from '../components/AppIcon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
  {
    title: 'My Listenings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    },
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
  }
]

const MyAccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Serhii Kryvenko'
          subTitle='krivenko.serhii@icloud.com'
          image={require('../assets/serhii.jpeg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={ ({item}) => 
          <ListItem
            title={item.title}
            IconComponent={
              <AppIcon 
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
          />
        }
        />
      </View>
      <ListItem
        title='Log out'
        IconComponent={
          <AppIcon 
            name='logout'
            backgroundColor='#ffe66d'
          />
        }
      />

    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20,
  },
})

export default MyAccountScreen