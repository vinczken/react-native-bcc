import { Button, StyleSheet, View } from "react-native"
import Header from "../components/header"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function CadastroScreen({navigation}){

    return (
        
        <View style={styles.paiCadastro} >
            <Text>screenCadastro</Text>
            <Header />
            <SafeAreaProvider>
                <SafeAreaView>
                    <Button title="Voltar" onPress={() => {navigation.goBack()}}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    paiCadastro: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

})