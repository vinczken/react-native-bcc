import { useMemo, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TouchableOpacityDefault from '../components/button/TouchableOpacityDefault';
import InputDefault from '../components/input/InputDefault';
import LabelDefault from '../components/label/LabelDefault';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from '../functions/GeneralsAux';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function LoginScreen({ navigation, ...props }) {
    const { theme } = useTheme();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const loginPaiStyle = useMemo (() => 
        ThemeBackgroundColor('#F7F9F7', '#001643', theme), 
    [theme]);

    const loginLabelDefaultStyle = useMemo (() => 
        ThemeColor('#210124', '#F7F9F7', theme),
    [theme]);
    const loginInputsDefaultStyle = useMemo(() => [
        [
            ThemeBackgroundColor('#CEEAFF', '#7676CE', theme),
            ThemeColor('#551159', '#F7F9F7', theme)
        ],
        ThemeValue('#C490D1', '#C59FC9', theme),
        ThemeValue('#F7F9F7', '#001643', theme),
        ThemeValue('#FF89B1', '#C59FC9', theme)
    ], [theme]);

    const Validar = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaProvider>
            <View
                style={[styles.loginPai, loginPaiStyle]}
            >
                { theme == 'light' ? (
                    <>
                        <Image
                            source={require('../assets/login/cardsTopLight.png')}
                            style={[styles.cardsTop]}
                        />
                        <Image
                            source={require('../assets/login/cardsBottomLight.png')}
                            style={[styles.cardsBottom]}
                        />
                    </>
                ) : (
                    <>
                        <Image
                            source={require('../assets/login/cardsTopDark.png')}
                            style={[styles.cardsTop]}
                        />
                        <Image
                            source={require('../assets/login/cardsBottomDark.png')}
                            style={[styles.cardsBottom]}
                        />
                    </>
                )}

                <SafeAreaView>
                    <View
                        style={styles.mainLogin}
                    >

                        <View
                            style={styles.loginData}
                        >
                            <View
                                style={[styles.divDados]}
                            >
                                <LabelDefault
                                    text={"Insira seu e-mail"}
                                    style={loginLabelDefaultStyle}
                                />
                                <InputDefault
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={"E-mail"}
                                    style={loginInputsDefaultStyle[0]}
                                    placeholderTextColor={loginInputsDefaultStyle[1]}
                                    selectionColor={loginInputsDefaultStyle[1]}
                                    borderColor={loginInputsDefaultStyle[2]}
                                    borderColorFocused={loginInputsDefaultStyle[3]}
                                    colorNotFocus={loginInputsDefaultStyle[1]}
                                />
                            </View>
                            <View
                                style={[styles.divDados]}
                            >
                                <LabelDefault
                                    text={"Insira sua senha"}
                                    style={loginLabelDefaultStyle}
                                />
                                <InputDefault
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder={"Senha"}
                                    style={loginInputsDefaultStyle[0]}
                                    placeholderTextColor={loginInputsDefaultStyle[1]}
                                    selectionColor={loginInputsDefaultStyle[1]}
                                    borderColor={loginInputsDefaultStyle[2]}
                                    borderColorFocused={loginInputsDefaultStyle[3]}
                                    colorNotFocus={loginInputsDefaultStyle[1]}
                                />
                                <LabelDefault
                                    text={"Esqueceu sua senha?"}
                                    style={useMemo (() => ThemeColor('#B8336A', '#FFF7AE', theme), [theme])}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.bottomInteract]}
                        >
                            <TouchableOpacityDefault
                                onPress={Validar}
                                text={"Entrar"}
                                style={[
                                    useMemo(() => ThemeBackgroundColor('#B74F87', '#4703A6', theme), [theme]),
                                    useMemo(() => ThemeColor('#E5FCFF', '#F7F9F7', theme), [theme]),
                                ]}
                                borderColor={useMemo(() => ThemeValue('#551159', '#A4DEF9', theme), [theme])}
                            />
                            <View
                                style={[styles.criarContaContent]}
                            >
                                <LabelDefault
                                    text={"Sua primeira vez aqui?"}
                                    style={[loginLabelDefaultStyle]}
                                />
                                <TouchableOpacityDefault
                                    text={"Crie uma conta"}
                                    style={[
                                        useMemo(() => ThemeColor('#B8336A', '#97F9F9', theme), [theme]), 
                                        styles.labelDefaultClick,
                                        styles.labelDefaultFixo
                                    ]}
                                    onPress={() => navigation.navigate('Cadastro')}
                                    activeOpacity={0.2}
                                />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
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
        gap: 10,
        marginBottom: 21
    },
    bottomInteract: {
        height: 'auto',
        width: '100%',
        gap: 19,
    },
    criarContaContent: {
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'center',
        width: 'auto'
    },
    labelDefaultFixo: {
        fontSize: 16,
        shadowOpacity: 0,
        margin: 0
    },
    labelDefaultClick: {
        fontFamily: 'PixelifySans-Bold',
        borderWidth: 0, 
        paddingVertical: 0
    }
});
