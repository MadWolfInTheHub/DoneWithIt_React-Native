import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from'expo-image-picker'

import colors from '../../config/colors';
import logger from '../../utility/logger';


function ImageInput  ({ imageUri, onChangeImage}) {

  useEffect(() => {
    requestPermission();
  }, [])
  
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted) 
      alert('You need to enable permission to access the library.');
  };

  const handlePress =() => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage(null)},
      { text: 'No', }
    ])
  }

  const selectImage = async() => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if(!result.canceled) onChangeImage(result.assets[0].uri)
    } catch (error) {
      logger.log('Error reading an image', error)
    }

  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri && 
          (<Image 
            source={{ uri: imageUri }} 
            style={styles.image}
            // onPress={onRemoveImage}
          />)
        }
        {!imageUri &&
          (<MaterialCommunityIcons 
            style={styles.icon}
            name='camera'
            size={50}
            color={colors.medium}
            // onPress={onAddImage}
          />)
        }
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.light,
    borderRadius: 15
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;