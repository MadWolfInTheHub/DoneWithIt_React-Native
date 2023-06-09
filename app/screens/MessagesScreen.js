import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';

const initialMessages = [
  {
    id: 1, 
    title: 'T1',
    description: 'D1',
    image: require('../assets/serhii.jpeg'),
  },
  {
    id: 2, 
    title: 'T2',
    description: 'D2',
    image: require('../assets/serhii.jpeg'),
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    // Delete the message from messages
    // call the server to delete the message

    setMessages(messages.filter(m => m.id !== message.id));
  }
  
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => 
          <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevron={true}
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => 
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
          />}
          ItemSeparatorComponent={ () => <ListItemSeparator/>}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2, 
                title: 'T2',
                description: 'D2',
                image: require('../assets/serhii.jpeg'),
              },
            ])
          }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({

})

export default MessagesScreen