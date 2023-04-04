import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function AppButton({ color, title, onPress}) {



  return (
    <TouchableOpacity 
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <AppText styles={styles.text}>{title}</AppText>
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

export default AppButton;