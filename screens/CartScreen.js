import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function CartScreen({ navigation, ...props }) {

    return (
        <SafeAreaProvider>
            <View
                style={styles.paiCart}
            >

            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    paiCart: {
        backgroundColor: 'white',
    },
})