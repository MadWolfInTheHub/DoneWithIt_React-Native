import React, { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from '../config/styles'
import Text from './Text'
import Screen from './Screen'
import PickerItem from './PickerItem'

const Picker = ({
    items,
    icon,
    numberOfColumns = 1,
    placeholder,
    onSelectItem,
    PickerItemComponent = PickerItem,
    selectedItem,
    width='100%',
  }) => {
  const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={[styles.container, {width}]}>
          {icon && 
            <MaterialCommunityIcons 
              name={icon} 
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
          />}
          {selectedItem ? 
            <Text style={styles.text}>{selectedItem.label}</Text> 
            : 
            <Text style={styles.placeholder}>{placeholder}</Text>
          }
          <MaterialCommunityIcons 
              name='chevron-down' 
              size={20}
              color={defaultStyles.colors.medium}
            />
        </View>
      </TouchableWithoutFeedback>
      <Modal 
        visible={modalVisible}
        animationType='slide'
      >
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(!modalVisible)}></Button>
          <FlatList
            style={styles.listContainer}
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => 
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
            }
          />
        </Screen>
      </Modal>
    </>
    )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text: {
    flex: 1
  },
  listContainer: {
    flexDirection: 'row',
  }
})

export default Picker;