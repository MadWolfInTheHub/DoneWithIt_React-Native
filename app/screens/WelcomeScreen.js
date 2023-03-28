import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors';

function WelcomeScreen(props) {
  const tagLine = 'Sell What You Don\'t Need.';
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text>{tagLine}</Text>
      </View>
      <View 
        style={styles.loginButton}
      />
      <View 
        style={styles.registerButton}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
  }
});

export default WelcomeScreen;