import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from '../api/expoPushTokens';
import logger from '../utility/logger';

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if(notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener);
  }, [])

  const registerForPushNotifications = async() => {
    const permission = await Notifications.getPermissionsAsync()
    if(!permission.granted) return;

    try {
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data)
    } catch (error) {
      logger.log('Error at getting a push token', error)
    }
  }
}