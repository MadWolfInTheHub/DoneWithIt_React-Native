import AnimatedLottieView from 'lottie-react-native';
import React from 'react'
import { View, StyleSheet } from 'react-native';


const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require('../assets/animations/loader2.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    opacity: 0.8,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'white',
  }
})

export default ActivityIndicator