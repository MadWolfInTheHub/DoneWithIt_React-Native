import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Text from './Text'

const PickerItem = ({  onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text:{
    padding: 20,
  },
});

export default PickerItem