import { FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'

import Button from '../components/Button'
import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../components/navigation/routes'
import Screen from '../components/Screen'
import AppText from '../components/Text'
import ActivityIndicator from '../components/ActivityIndicator'

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadListings();
    console.log(listings)
  }, [])

  const loadListings = async() => {
    setLoading(true)
    const response = await listingsApi.getListings();
    setLoading(false)

    if(!response.ok) return setError(true);

    setError(false);
    setListings(response.data)
  }
  
  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Couldn't retrieve the listings</AppText>
        <Button title="retry" onPress={loadListings}/>
      </>}
      <ActivityIndicator visible={loading}/>
      <FlatList
      data={listings}
      keyExtractor={listing => listing.id.toString()}
      renderItem={({ item }) => 
        <Card
          title={item.title}
          subTitle={`$ ${item.price}`}
          imageUrl={item.images[0].url}
          onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
        />
      }
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  }
})

export default ListingsScreen