import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import React from 'react'
import AppText from './AppText';
import colors from '../config/colors';

const ListItem = ({ 
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {

  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image 
            style={styles.image}
            source={image}/>}
            <View style={styles.details}>
              <AppText style={styles.title}>{title}</AppText>
             {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500'
  },
  subTitle: {
    color: colors.medium,
  }
});

export default ListItem