import AnimatedLottieView from 'lottie-react-native';
import React from 'react'


const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require('../assets/animations/loader2.json')}
    />
  )
}

export default ActivityIndicator