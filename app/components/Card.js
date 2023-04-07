import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Text from './Text';


const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.sudTitle} numberOfLines={2}>{subTitle}</Text>
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