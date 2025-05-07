import { Button, StyleSheet, View } from "react-native"
import Header from "../components/header"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function LoginScreen({navigation}){

    return (
        
        <View style={styles.paiLogin} >
            <Text>screeLogin</Text>
            <Header />
            <SafeAreaProvider>
                <SafeAreaView>
                    <Button title="Ir para Cadastrar" onPress={() => navigation.navigate('Cadastro')}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    paiLogin: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

})