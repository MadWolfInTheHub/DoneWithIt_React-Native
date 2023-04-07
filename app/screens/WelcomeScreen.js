import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors';
import Button from '../components/Button';

function WelcomeScreen(props) {
  const tagLine = 'Sell What You Don\'t Need.';
  return (
    <ImageBackground 
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text style={styles.tagline}>{tagLine}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button color={colors.primary} title='login' onPress={() => console.log('Tapped')}/>
        <Button color={colors.secondary} title='register' onPress={() => console.log('Tapped reg')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
    height: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 20,
  }
});

export default WelcomeScreen;