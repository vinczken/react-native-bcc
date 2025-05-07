import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ScrollItems from './components/scrollItems';
import FlatItems from './components/flatItems';
import SectionItems from './components/sectionItems';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/screenHome';
import LoginScreen from './screens/screenLogin';
import CadastroScreen from './screens/screenCadastro';

export default function App() {
  const cidadesJapao = [
    { nome: "Tóquio", populacao: 13960000 },
    { nome: "Yokohama", populacao: 3775000 },
    { nome: "Osaka", populacao: 2725000 },
    { nome: "Nagoya", populacao: 2296000 },
    { nome: "Sapporo", populacao: 1952000 },
    { nome: "Fukuoka", populacao: 1620000 },
    { nome: "Kobe", populacao: 1513000 },
    { nome: "Kyoto", populacao: 1464000 },
    { nome: "Kawasaki", populacao: 1548000 },
    { nome: "Saitama", populacao: 1342000 }
  ];

  const cidadesPorRegiao = [
    {
      regiao: "Kanto",
      data: [
        { nome: "Tóquio", populacao: 13960000 },
        { nome: "Yokohama", populacao: 3775000 },
        { nome: "Kawasaki", populacao: 1548000 },
        { nome: "Saitama", populacao: 1342000 }
      ]
    },
    {
      regiao: "Kansai",
      data: [
        { nome: "Osaka", populacao: 2725000 },
        { nome: "Kyoto", populacao: 1464000 },
        { nome: "Kobe", populacao: 1513000 }
      ]
    },
    {
      regiao: "Chubu",
      data: [
        { nome: "Nagoya", populacao: 2296000 }
      ]
    },
    {
      regiao: "Hokkaido",
      data: [
        { nome: "Sapporo", populacao: 1952000 }
      ]
    },
    {
      regiao: "Kyushu",
      data: [
        { nome: "Fukuoka", populacao: 1620000 }
      ]
    }
  ];

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Cadastro' component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    backgroundColor: '#d8d8d8',
    height: '100%',
    width: '100%',
  },
});

{/*
    <View style={styles.container}>
    <Header />
    <ScrollView>
    <ScrollItems array={cidadesJapao} />
    <FlatItems array={cidadesJapao} />
    <SectionItems array={cidadesPorRegiao} />
    <StatusBar style="auto" />
    </ScrollView>
    </View>
    */}