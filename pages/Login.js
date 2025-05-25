import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import InputDefault from '../components/input/InputDefault';
import LabelDefault from '../components/label/LabelDefault';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function Login() {
    return (
        <SafeAreaProvider>
            <View
                style={styles.loginPai}
            >
                <Image
                    source={require('../assets/login/cardsTop.png')}
                    style={[styles.cards]}
                />
                <SafeAreaView
                    style={styles.loginData}
                >
                    <View
                        style={[styles.divEmail]}
                    >
                        <LabelDefault
                            text={"Insira seu e-mail"}
                        />
                        <InputDefault
                        />
                    </View>
                </SafeAreaView>
                <Image
                    source={require('../assets/login/cardsBottom.png')}
                    style={[styles.cardsBottom]}
                />
            </View>
        </SafeAreaProvider>
    );
}
/*

*/
const styles = StyleSheet.create({
    loginPai: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F7F9F7',
        overflow: 'visible'
    },
    cards: {
        width: screenWidth,
        height: screenHeight * 0.4 ,
        position: 'absolute',
        zIndex: 0,
        resizeMode: 'none'
    },
    cardsBottom: {
        position: 'absolute',
        width: screenWidth,
        height: screenHeight * 0.4,
        bottom: 0,
        left: 0,
        resizeMode: 'cover',
        alignSelf: 'flex-start',
    },
    loginData: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});
