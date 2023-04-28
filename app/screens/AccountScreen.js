import { FlatList, StyleSheet, View, } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import Screen from '../components/Screen'
import Icon from '../components/Icon'
import { ListItem, ListItemSeparator } from '../components/lists'
import useAuth from '../auth/useAuth'

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
    targetScreen: 'Messages'
  }
]

const MyAccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth()

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
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
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        }
        />
      </View>
      <ListItem
        title='Log out'
        IconComponent={
          <Icon 
            name='logout'
            backgroundColor='#ffe66d'
          />
        }
        onPress={() => logOut()}
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