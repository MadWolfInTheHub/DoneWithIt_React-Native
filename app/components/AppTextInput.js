import React from 'react'
import { View, TextInput, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && 
        <MaterialCommunityIcons 
          name={icon} 
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />}
      <TextInput
        // maxLength={4}
        // keyboardType="numeric"
        // clearButtonMode='always'
        // secureTextEntry
        // onChangeText={(text) => setFirstName(text)}
        // placeholder='First name'
        {...otherProps}
        style={defaultStyles.text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  }
})

export default AppTextInput