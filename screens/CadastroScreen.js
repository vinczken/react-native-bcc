import { Circle } from 'iconoir-react-native';
import { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TouchableOpacityDefault from '../components/button/TouchableOpacityDefault';
import InputDefault from '../components/input/InputDefault';
import LabelDefault from '../components/label/LabelDefault';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Cadastro } from '../functions/Cadastro';
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from '../functions/GeneralsAux';
import ImageTheme from '../components/imageTheme/ImageTheme';
import { CadastroDefaultStyle } from '../components/defaultStyles/DefaultStyle';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function CadastroScreen({ navigation, ...props }) {
    const { setAuth } = useAuth();
    const { theme } = useTheme();

    const [nome, setNome] = useState('Caio')
    const [usuario, setUsuario] = useState('caiozika123')
    const [email, setEmail] = useState('caio@yahoo.com')
    const [senha, setSenha] = useState('1234567')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('1234567')
    const [error, setError] = useState('');
    
    useEffect(() => {
        setError('')
    }, [nome, usuario, email, senha, senhaConfirmacao])

    const Validar = async () => {
        if (!(senha == senhaConfirmacao)) {
            setError('Senhas diferentes')
            return
        } 

        try {
            const res = await Cadastro(email, senha, nome, setAuth);
            console.log(res);

            if (res.success) {
                console.log('Usuário criado:', res.user?.displayName);
                navigation.navigate('Login');
            } else {
                setError(res.message);
                console.log(res);
            }
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    return (
        <SafeAreaProvider>
            <View
                style={[styles.cadastroPai, ThemeBackgroundColor('#FFF7AE', '#210124', theme)]}
            >
                <ImageTheme
                    light={require('../assets/cadastro/cardsLight.png')}
                    dark={require('../assets/cadastro/cardsDark.png')}
                    style={[styles.cards]}
                />

                <SafeAreaView>
                    <View
                        style={[
                            styles.cadastroDados,
                            ThemeBackgroundColor('#F7F9F7', '#7676CE', theme),
                            { borderColor: ThemeValue('#FFCFA3', '#4703A6', theme), shadowColor: ThemeValue('#FFCFA3', '#4703A6', theme) },
                        ]}
                    >
                        <View
                            style={{ flex: 1, justifyContent: 'center', gap: 15 }}
                        >

                            <View
                                style={[styles.perfil, { marginLeft: 4 }]}
                            >

                                <Circle
                                    width={40}
                                    height={40}

                                    strokeWidth={4.2}
                                    color={ThemeValue('#B3DEC1', '#FF89B1', theme)}
                                    fill={ThemeValue('#CEE9D7', '#AD7EC2', theme)}
                                />
                                <View
                                    style={{ flexDirection: 'column' }}
                                >

                                    <LabelDefault
                                        text={usuario ? usuario : 'Seu Usuário'}
                                        style={[CadastroDefaultStyle('label'), { fontSize: 19, marginLeft: 0, fontFamily: 'PixelifySans-Medium' }]}
                                    />
                                    <LabelDefault
                                        text={email ? email : 'Seu email'}
                                        style={[{ fontSize: 16, color: (ThemeValue('#750D37', '#97F9F9', theme)) }]}
                                    />
                                </View>
                            </View>
                            <View
                                style={styles.inputsCad}
                            >
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira seu nome'}
                                        style={[CadastroDefaultStyle('label')]}
                                    />
                                    <InputDefault
                                        value={nome}
                                        onChange={setNome}
                                        placeholder={"Nome"}
                                        inputCores={CadastroDefaultStyle('input')}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira seu usuário'}
                                        style={[CadastroDefaultStyle('label')]}
                                    />
                                    <InputDefault
                                        value={usuario}
                                        onChange={setUsuario}
                                        placeholder={"Usuário"}
                                        inputCores={CadastroDefaultStyle('input')}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira seu e-mail'}
                                        style={[CadastroDefaultStyle('label')]}
                                    />
                                    <InputDefault
                                        value={email}
                                        onChange={setEmail}
                                        placeholder={"E-mail"}
                                        inputCores={CadastroDefaultStyle('input')}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira sua senha'}
                                        style={[CadastroDefaultStyle('label')]}
                                    />
                                    <InputDefault
                                        value={senha}
                                        onChange={setSenha}
                                        placeholder={"Senha"}
                                        inputCores={CadastroDefaultStyle('input')}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira sua senha novamente'}
                                        style={[CadastroDefaultStyle('label')]}
                                    />
                                    <InputDefault
                                        value={senhaConfirmacao}
                                        onChange={setSenhaConfirmacao}
                                        placeholder={"Senha novamente"}
                                        inputCores={CadastroDefaultStyle('input')}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                            <View
                                style={{ flexDirection: 'column', gap: 15, marginTop: 10 }}
                            >
                                {error ? (
                                    <LabelDefault
                                        text={error}
                                        style={[
                                            CadastroDefaultStyle('label'),
                                            { textAlign: 'center', color: '#648ED8', fontFamily: 'PixelifySans-Medium' }
                                        ]}
                                    />
                                ) : (
                                    <></>
                                )}
                                <TouchableOpacityDefault
                                    onPress={() => Validar()}
                                    text={"Criar conta"}
                                    style={[
                                        ThemeBackgroundColor('#E5FCFF', '#321934', theme),
                                        { marginHorizontal: 15 }
                                    ]}
                                    textStyle={[
                                        ThemeColor('#B8336A', '#FFC6D9', theme),
                                    ]}
                                    borderColor={ThemeValue('#CFBAE1', '#9303A6', theme)}
                                />
                                <View
                                    style={{ flexDirection: 'row', gap: 6, justifyContent: 'center' }}
                                >
                                    <LabelDefault
                                        text={"Já possui uma conta?"}
                                        style={[CadastroDefaultStyle('label'), { fontSize: 16 }]}
                                    />
                                    <TouchableOpacityDefault
                                        text={"Entre com a sua conta"}
                                        style={[
                                            { borderWidth: 0, paddingVertical: 0, shadowOpacity: 0 }
                                        ]}
                                        textStyle={[
                                            ThemeColor('#B8336A', '#FF89B1', theme),
                                            { fontSize: 16, fontFamily: 'PixelifySans-Bold' }
                                        ]}
                                        onPress={() => navigation.navigate('Login')}
                                        activeOpacity={0.2}

                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    cadastroPai: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
    },
    cards: {
        width: screenWidth,
        height: screenHeight * 0.22,
        position: 'absolute',
        bottom: 0,
        zIndex: 999
    },
    cadastroDados: {
        marginTop: 42,
        width: screenWidth * 0.92,
        height: screenHeight * 0.7,
        justifyContent: 'top',
        flexDirection: 'column',

        borderWidth: 8,
        borderRadius: 18,
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 10 },

        paddingTop: 30,
        paddingHorizontal: 21,
        paddingBottom: 57

    },
    perfil: {
        height: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    inputsCad: {
        gap: 10,
    }
})