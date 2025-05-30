import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function AccountScreen({ navigation, ...props }) {

    return (
        <SafeAreaProvider>
            <View
                style={styles.paiAccount}
            >

            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    paiAccount: {
        backgroundColor: 'white',
    },
})