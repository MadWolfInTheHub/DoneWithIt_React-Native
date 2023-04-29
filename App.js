import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';

import navigationTheme from './app/components/navigation/navigationTheme';
import AppNavigator from './app/components/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/components/navigation/rootNavigation';
import logger from './app/utility/logger';

logger.start()


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async() => {
    const user = await authStorage.getUser();

    if(user) setUser(user);
  }

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }
    
    prepare();
  }, []);
    
    

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider  value={{ user, setUser }} >
      <OfflineNotice notification='No Internet Connection'/>
      
      <NavigationContainer ref={navigationRef} theme={navigationTheme} onReady={onLayoutRootView}>
        {
          user ?
          <AppNavigator/>
          :
          <AuthNavigator/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
