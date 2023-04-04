import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';

const ListingDetailsScreen = ({ title, subTitle, image}) => {
  return (
    <View>
      <Image 
        source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            image={require('../assets/serhii.jpeg')}
            title="Serhii Kryvenko"
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;