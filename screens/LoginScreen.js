import { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TouchableOpacityDefault from '../components/button/TouchableOpacityDefault';
import InputDefault from '../components/input/InputDefault';
import LabelDefault from '../components/label/LabelDefault';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from '../functions/GeneralsAux';
import { Login } from '../functions/Login';
import { LoginDefaultStyle } from '../components/defaultStyles/DefaultStyle';
import ImageTheme from '../components/imageTheme/ImageTheme';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function LoginScreen({ navigation, ...props }) {
    const { setAuth } = useAuth();
    const { theme } = useTheme();

    const [email, setEmail] = useState('caio@yahoo.com');
    const [senha, setSenha] = useState('1234567');
    const [error, setError] = useState('');

    const loginPaiStyle = ThemeBackgroundColor('#F7F9F7', '#001643', theme)

    const Validar = async () => {
        try {
            const res = await Login(email, senha, setAuth);
            console.log(res);

            if (res.success) {
                navigation.navigate('Home');
            } else {
                setError(res.error);
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    return (
        <SafeAreaProvider>
            <View
                style={[styles.loginPai, loginPaiStyle]}
            >

                <ImageTheme
                    light={require('../assets/login/cardsTopLight.png')}
                    dark={require('../assets/login/cardsTopDark.png')}
                    style={[styles.cardsTop]}
                />
                <ImageTheme
                    light={require('../assets/login/cardsBottomLight.png')}
                    dark={require('../assets/login/cardsBottomDark.png')}
                    style={[styles.cardsBottom]}
                />

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
                                    style={LoginDefaultStyle('label')}
                                />
                                <InputDefault
                                    value={email}
                                    onChange={setEmail}
                                    placeholder={"E-mail"}
                                    inputCores={LoginDefaultStyle('input')}
                                />
                            </View>
                            <View
                                style={[styles.divDados]}
                            >
                                <LabelDefault
                                    text={"Insira sua senha"}
                                    style={LoginDefaultStyle('label')}
                                />
                                <InputDefault
                                    value={senha}
                                    onChange={setSenha}
                                    placeholder={"Senha"}
                                    inputCores={LoginDefaultStyle('input')}
                                />
                                <TouchableOpacityDefault
                                    text={"Esqueceu sua senha?"}
                                    style={[
                                        {
                                            borderWidth: 0,
                                            paddingVertical: 0,
                                            shadowOpacity: 0,
                                            justifyContent: 'left',
                                            alignItems: 'left'
                                        }
                                    ]}
                                    textStyle={[
                                        styles.labelDefaultFixo,
                                        styles.labelDefaultClick,
                                        ThemeColor('#B8336A', '#FFF7AE', theme),
                                        styles.esqueceuSenha
                                    ]}
                                    onPress={() => console.log('')}
                                    activeOpacity={0.2}
                                />
                            </View>
                        </View>
                        <View
                            style={[styles.bottomInteract]}
                        >
                            {error ? (
                                <LabelDefault
                                    text={error}
                                    style={[
                                        LoginDefaultStyle('label'),
                                        { textAlign: 'center', color: '#648ED8', fontFamily: 'PixelifySans-Medium' }
                                    ]}
                                />
                            ) : (
                                <></>
                            )}
                            <TouchableOpacityDefault
                                onPress={() => Validar()}
                                text={"Entrar"}
                                style={[
                                    ThemeBackgroundColor('#B74F87', '#4703A6', theme),
                                ]}
                                textStyle={[
                                    ThemeColor('#E5FCFF', '#F7F9F7', theme),
                                    { margin: 0 }
                                ]}
                                borderColor={ThemeValue('#551159', '#A4DEF9', theme)}
                            />
                            <View
                                style={[styles.criarContaContent]}
                            >
                                <LabelDefault
                                    text={"Sua primeira vez aqui?"}
                                    style={[
                                        LoginDefaultStyle('label'),
                                        styles.labelDefaultFixo
                                    ]}
                                />
                                <TouchableOpacityDefault
                                    text={"Crie uma conta"}
                                    style={[
                                        {
                                            borderWidth: 0,
                                            paddingVertical: 0,
                                            shadowOpacity: 0,
                                        }
                                    ]}
                                    textStyle={[
                                        styles.labelDefaultFixo,
                                        styles.labelDefaultClick,
                                        ThemeColor('#B8336A', '#97F9F9', theme),
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
        margin: 0
    },
    labelDefaultClick: {
        fontFamily: 'PixelifySans-Bold',
    },
    esqueceuSenha: {
        fontFamily: 'PixelifySans-Regular',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400,
    }
});
