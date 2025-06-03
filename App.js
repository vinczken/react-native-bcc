import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import MainNavigator from './navigation/MainNavigator';
import { getLoggedInAuth } from './functions/Auth';

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const { setAuth } = useAuth();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          'PixelifySans-Regular': require('./assets/fonts/PixelifySans-Regular.ttf'),
          'PixelifySans-Black': require('./assets/fonts/PixelifySans-Black.ttf'),
          'PixelifySans-Bold': require('./assets/fonts/PixelifySans-Bold.ttf'),
          'PixelifySans-ExtraBold': require('./assets/fonts/PixelifySans-ExtraBold.ttf'),
          'PixelifySans-Medium': require('./assets/fonts/PixelifySans-ExtraBold.ttf'),
          'PixelifySans-SemiBold': require('./assets/fonts/PixelifySans-SemiBold.ttf'),
        });

        const user = await getLoggedInAuth();
        if (user) setAuth(user);
        else setAuth({ uid: 'invalido' });

      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return <MainNavigator onLayoutRootView={onLayoutRootView} />;
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}