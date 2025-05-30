import { StyleSheet } from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // Para controlar a tela de splash
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainNavigator from './navigation/MainNavigator';
// Mantenha a tela de splash visível enquanto carregamos os recursos
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'PixelifySans-Regular': require('./assets/fonts/PixelifySans-Regular.ttf'),
          'PixelifySans-Black': require('./assets/fonts/PixelifySans-Black.ttf'),
          'PixelifySans-Bold': require('./assets/fonts/PixelifySans-Bold.ttf'),
          'PixelifySans-ExtraBold': require('./assets/fonts/PixelifySans-ExtraBold.ttf'),
          'PixelifySans-Medium': require('./assets/fonts/PixelifySans-ExtraBold.ttf'),
          'PixelifySans-SemiBold': require('./assets/fonts/PixelifySans-SemiBold.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simula um carregamento mais longo
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);
  // Esconde a tela de splash quando o app estiver pronto


  return (
    <ThemeProvider>
      <MainNavigator
      />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({

  pai: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flex: 1,
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
  },
});
