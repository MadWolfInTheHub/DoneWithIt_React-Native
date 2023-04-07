import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Icon from './Icon';
import Text from './Text';

const CategoryPickerItem = ({ onPress, item }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          size={80}
          name={item.name}
          backgroundColor={item.backgroundColor}
          iconColor={item.iconColor}
        />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '30%'
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
})

export default CategoryPickerItem