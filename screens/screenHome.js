import { Button, StyleSheet, View } from "react-native"
import Header from "../components/header"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen({navigation}){

    return (
        
        <View style={styles.paiHome} >
            <Text>screenHome</Text>
            <Header />
            <SafeAreaProvider>
                <SafeAreaView>
                    <Button title="Ir para Login" onPress={() => navigation.navigate('Login')}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    paiHome: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

})