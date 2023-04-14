import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';
import { ListItem } from '../components/lists';
import Text from '../components/Text';

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  
  return (
    <View>
      <Image 
        source={listing.image}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
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