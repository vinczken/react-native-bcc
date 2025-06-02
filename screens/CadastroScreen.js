import { Circle } from 'iconoir-react-native';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TouchableOpacityDefault from '../components/button/TouchableOpacityDefault';
import InputDefault from '../components/input/InputDefault';
import LabelDefault from '../components/label/LabelDefault';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from '../functions/GeneralsAux';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function CadastroScreen({ navigation, ...props }) {
    const { theme } = useTheme();
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('')

    const cadastroLabelDefaultStyle = [
        ThemeColor('#210124', '#FFF2F6', theme),
        { marginLeft: 4, fontSize: 15 }
    ]
    const cadastroInputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#DBF9F0', '#F2C572', theme),
            { paddingTop: 10, paddingBottom: 11, paddingHorizontal: 13, fontSize: 18 }
        ],
        ThemeValue('#C490D1', '#AA7BAD', theme),
        ThemeValue('#F7F9F7', '#7676CE', theme),
        ThemeValue('#B3DEC1', '#F29188', theme),
    ]

    return (
        <SafeAreaProvider>
            <View
                style={[styles.cadastroPai, ThemeBackgroundColor('#FFF7AE', '#210124', theme)]}
            >
                {theme == 'light' ? (
                    <Image
                        source={require('../assets/cadastro/cardsLight.png')}
                        style={[styles.cards]}
                    />
                ) : (
                    <Image
                        source={require('../assets/cadastro/cardsDark.png')}
                        style={[styles.cards]}
                    />
                )}

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
                                        style={[cadastroLabelDefaultStyle, { fontSize: 19, marginLeft: 0, fontFamily: 'PixelifySans-Medium' }]}
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
                                        style={[cadastroLabelDefaultStyle]}
                                    />
                                    <InputDefault
                                        value={nome}
                                        onChange={setNome}
                                        placeholder={"Nome"}
                                        inputCores={cadastroInputsDefaultStyle}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira seu usuário'}
                                        style={[cadastroLabelDefaultStyle]}
                                    />
                                    <InputDefault
                                        value={usuario}
                                        onChange={setUsuario}
                                        placeholder={"Usuário"}
                                        inputCores={cadastroInputsDefaultStyle}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira seu e-mail'}
                                        style={[cadastroLabelDefaultStyle]}
                                    />
                                    <InputDefault
                                        value={email}
                                        onChange={setEmail}
                                        placeholder={"E-mail"}
                                        inputCores={cadastroInputsDefaultStyle}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira sua senha'}
                                        style={[cadastroLabelDefaultStyle]}
                                    />
                                    <InputDefault
                                        value={senha}
                                        onChange={setSenha}
                                        placeholder={"Senha"}
                                        inputCores={cadastroInputsDefaultStyle}
                                    />
                                </View>
                                <View
                                    style={[styles.inputDado]}
                                >
                                    <LabelDefault
                                        text={'Insira sua senha novamente'}
                                        style={[cadastroLabelDefaultStyle]}
                                    />
                                    <InputDefault
                                        value={senhaConfirmacao}
                                        onChange={setSenhaConfirmacao}
                                        placeholder={"Senha novamente"}
                                        inputCores={cadastroInputsDefaultStyle}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                            <View
                                style={{ flexDirection: 'column', gap: 15, marginTop: 10 }}
                            >
                                <TouchableOpacityDefault
                                    onPress={() => console.log('criar')}
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
                                        style={[cadastroLabelDefaultStyle, { fontSize: 16 }]}
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