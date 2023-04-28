import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

import AppText from './Text'
import colors from '../config/colors'


const OfflineNotice = ({ notification }) => {
  const netINfo = useNetInfo();

  if(netINfo.type !== 'unknown' && netINfo.isInternetReachable === null) 
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>{notification}</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white
  }
})

export default OfflineNotice;