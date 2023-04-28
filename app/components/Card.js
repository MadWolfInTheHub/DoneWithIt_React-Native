import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import Text from './Text';


const Card = ({ title, subTitle, imageUrl,thumbnailUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          preview={{ uri: thumbnailUrl }}
          tint='light'
          uri={ imageUrl }
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.sudTitle} numberOfLines={2}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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