import React from 'react'
import { View } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const Icon = ({ 
  name, 
  size = 40, 
  backgroundColor = 'black', 
  iconColor = colors.white
  }) => {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <MaterialCommunityIcons 
      name={name}
      color={iconColor}
      size={size * 0.5} 
    />
  </View>
  )
}

// const styles = StyleSheet.create({
//   width: size,
//   height: size,
//   borderRadius: size / 2,
//   backgroundColor,
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginRight: 10,
// })

export default Icon