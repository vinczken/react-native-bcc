import { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PressableDefault from '../components/button/PressableDefault';
import InputDefault from '../components/input/InputDefault';
import LabelDefault from '../components/label/LabelDefault';
import { LightDarkModeBackgroundColor, LightDarkModeColor } from '../functions/GeneralsAux';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const labelDefaultStyle = LightDarkModeColor('#210124', '#F7F9F7', props.lightMode)
    const inputsDefaultStyle = [
        [
            LightDarkModeBackgroundColor('#CEEAFF', '#7676CE', props.lightMode),
            LightDarkModeColor('#551159', '#F7F9F7', props.lightMode)
        ], 
        props.lightMode ? '#C490D1' : '#C59FC9',
        props.lightMode ? '#F7F9F7' : '#001643',
        props.lightMode ? '#FF89B1' : '#C59FC9'
    ]

    return (
        <SafeAreaProvider>
            <View
                style={[styles.loginPai, LightDarkModeBackgroundColor('#F7F9F7', '#001643', props.lightMode)]}
            >
                {props.lightMode ? (
                    <Image
                        source={require('../assets/login/cardsTopLight.png')}
                        style={[styles.cardsTop]}
                    />
                ) : (
                    <Image
                        source={require('../assets/login/cardsTopDark.png')}
                        style={[styles.cardsTop]}
                    />
                )}

                <SafeAreaView>
                    <View
                        style={styles.mainLogin}
                    >

                        <View
                            style={styles.loginData}
                        >
                            <View
                                style={[styles.divDados, { marginBottom: 21 }]}
                            >
                                <LabelDefault
                                    text={"Insira seu e-mail"}
                                    style={labelDefaultStyle}
                                />
                                <InputDefault
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={"E-mail"}
                                    style={inputsDefaultStyle[0]}
                                    placeholderTextColor={inputsDefaultStyle[1]}
                                    selectionColor={inputsDefaultStyle[1]}
                                    borderColor={inputsDefaultStyle[2]}
                                    borderColorFocused={inputsDefaultStyle[3]}
                                />
                            </View>
                            <View
                                style={[styles.divDados]}
                            >
                                <LabelDefault
                                    text={"Insira sua senha"}
                                    style={labelDefaultStyle}
                                />
                                <InputDefault
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder={"Senha"}
                                    style={inputsDefaultStyle[0]}
                                    placeholderTextColor={inputsDefaultStyle[1]}
                                    selectionColor={inputsDefaultStyle[1]}
                                    borderColor={inputsDefaultStyle[2]}
                                    borderColorFocused={inputsDefaultStyle[3]}
                                />
                                <LabelDefault
                                    text={"Esqueceu sua senha?"}
                                    style={LightDarkModeColor('#B8336A', '#FFF7AE', props.lightMode)}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.bottomInteract]}
                        >
                            <PressableDefault
                                onPress={() => console.log('hi')}
                                text={"Entrar"}
                                style={[
                                    //LightDarkModeBackgroundColor('#B74F87', '#4703A6', props.lightMode),
                                ]}
                            />
                            <LabelDefault
                                text={"Sua primeira vez aqui?"}
                                style={labelDefaultStyle}
                            />
                        </View>
                    </View>
                </SafeAreaView>

                {props.lightMode ? (
                    <Image
                        source={require('../assets/login/cardsBottomLight.png')}
                        style={[styles.cardsBottom]}
                    />
                ) : (
                    <Image
                        source={require('../assets/login/cardsBottomDark.png')}
                        style={[styles.cardsBottom]}
                    />
                )}
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
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
    },
    cardsTop: {
        width: screenWidth,
        height: screenHeight * 0.4,
        position: 'absolute',
        zIndex: 0,
        resizeMode: 'none'
    },
    cardsBottom: {
        position: 'absolute',
        width: screenWidth,
        height: screenHeight * 0.44,
        bottom: '-5.5%',
        left: 0,
        zIndex: 0,
        resizeMode: 'contain',
    },
    mainLogin: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
        gap: 15
    },
    loginData: {
        height: 'auto'
    },
    divDados: {
        width: screenWidth * 0.75,
        gap: 10
    },
    esqueceSenha: {
        fontSize: 17,
        margin: 0
    },
    bottomInteract: {
        height: 'auto',
        width: '100%'
    }
});
