import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppText from './AppText';


const Card = ({ title, subTitle, image }) => {
  console.log(title)
  return (
    <View style={styles.card}>
      <Image source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.sudTitle} >{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 7,
  },
  sudTitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  }  
})

export default Card