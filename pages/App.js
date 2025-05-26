import { StyleSheet, View } from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; // Para controlar a tela de splash
import { useEffect } from 'react';
import Login from './Login';
// Mantenha a tela de splash visível enquanto carregamos os recursos
SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'PixelifySans': require('../assets/fonts/PixelifySans-VariableFont_wght.ttf'),
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
    <View
    style={styles.pai}
    >
      <Login 
        lightMode={true}
      />
    </View>
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
