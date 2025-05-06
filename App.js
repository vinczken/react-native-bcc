import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import ScrollItems from './components/scrollItems';

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

  return (
    <View style={styles.container}>
      <Header />
      <ScrollItems array={cidadesJapao} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 20,

    backgroundColor: '#d8d8d8',
    height: '100%',
    width: '100%',
  },
});
