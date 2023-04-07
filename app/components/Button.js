import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import Text from './Text';


function Button({ color = colors.primary, title, onPress}) {
  return (
    <TouchableOpacity 
      style={[ styles.button, {backgroundColor: color}] }
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    width: '100%',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    marginVertical: 10,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.white,
  },
})

export default Button;