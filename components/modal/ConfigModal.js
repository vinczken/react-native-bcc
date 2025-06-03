import { Dimensions, Modal, ScrollView, StyleSheet, View } from "react-native";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import { useTheme } from "../../contexts/ThemeContext";
import { AccountDefaultStyle } from "../defaultStyles/DefaultStyle";
import InputDefault from "../input/InputDefault";
import { FastArrowDown, Xmark } from "iconoir-react-native";
import LabelDefault from "../label/LabelDefault";
import TouchableOpacityIcon from "../button/TouchableOpacityIcon";
import { useCallback, useEffect, useState } from "react";
import TouchableOpacityDefault from "../button/TouchableOpacityDefault";
import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { deleteAuth, setAuthWith } from "../../functions/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function ConfigModal(props) {

    const { theme } = useTheme();
    const [editado, setEditado] = useState([false, false, false]);
    const [nome, setNome] = useState(auth.currentUser.displayName)
    const [email, setEmail] = useState('caio@')
    const [senha, setSenha] = useState('123456')
    const [senhaNova, setSenhaNova] = useState('')

    const handleChange = (value) => (text) => {
        switch (value) {
            case nome:
                setNome(text)
                break;

            case email:
                setEmail(text)
                break;

            case senhaNova:
                setSenhaNova(text)
                break;

            case senha:
                setSenha(text)
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        setEditado([
            nome !== auth.currentUser.displayName,
            email !== auth.currentUser.email,
            senhaNova !== ''
        ]);
    }, [nome, email, senhaNova]);

    const Linha = ({ cor }) => (
        <View style={{ width: '88%', height: 3, backgroundColor: cor, borderRadius: 100 }} />
    )

    const Header = ({ text }) => (
        <>
            <View
                style={styles.header}
            >
                <FastArrowDown
                    color={ThemeValue('#210124', '#', theme)}
                    strokeWidth={2.5}
                    height={0.08 * screenWidth}
                    width={0.08 * screenWidth}
                    style={styles.iconHeader}
                />
                <LabelDefault
                    text={text}
                    style={styles.headerLabel}
                />
            </View>
            < Linha cor={ThemeValue('#210124', '#210124', theme)} />
        </>
    )


    const [isUpdating, setIsUpdating] = useState(false);
    const Alterar = async () => {
        setIsUpdating(true);
        try {
            if (!senha) {
                alert('Por favor, informe sua senha atual');
                return;
            }

            const user = auth.currentUser;
            if (!user) throw new Error('Usuário não autenticado');

            // Reautenticação
            const credential = EmailAuthProvider.credential(user.email, senha);
            await reauthenticateWithCredential(user, credential);

            // Executar atualizações
            const updates = [];

            if (editado[0] && nome !== user.displayName) {
                updates.push(updateProfile(user, { displayName: nome }));
            }

            if (editado[1] && email !== user.email) {
                updates.push(updateEmail(user, email));
            }

            if (editado[2] && senhaNova) {
                if (senhaNova.length < 6) throw new Error('Senha muito curta');
                updates.push(updatePassword(user, senhaNova));
            }

            await Promise.all(updates);

            // Atualizar AsyncStorage
            await AsyncStorage.setItem('@auth_data', JSON.stringify({
                uid: user.uid,
                email: email,
                displayName: nome
            }));

            await setAuthWith(user)
            alert('Dados atualizados!');

        } catch (error) {
            console.error(error);
            alert(`Erro: ${error.message}`);
        } finally {
            setIsUpdating(false);
        }
    };

    const [editing, setEditing] = useState({});

    const MudarDado = ({ dado, index, value, setValue }) => {

        return (
            <>
                <LabelDefault
                    text={dado}
                    style={[styles.dado, ThemeColor('#7676CE', '#', theme)]}
                />
                <View style={styles.infoInputBot}>
                    <InputDefault
                        placeholder={dado}
                        value={value}
                        onChange={handleChange(value)}
                        inputCores={[
                            [
                                ThemeColor('#210124', '#750D37', theme),
                                ThemeBackgroundColor('#CEEAFF', '#ACACDE', theme),
                            ],
                            ThemeValue('#CFBAE1', '#FFF2F6', theme),
                            ThemeValue('#F7F9F7', '#0B0B35', theme),
                            ThemeValue('#ACACDE', '#F7F9F7', theme),
                        ]}
                        style={[styles.infoInput]}
                    //secureTextEntry={dado.includes('Senha')}
                    />
                    {dado.includes('Senha Atual') ? (
                        <></>
                    ) : (
                        <TouchableOpacityIcon
                            icon={editing ? 'Check' : 'EditPencil'}
                            iconColor={ThemeValue('#F7F9F7', '#', theme)}
                            iconWidth={23}
                            iconHeight={23}
                            strokeWidth={2.8}
                            onPress={() => {
                                if (editing) {
                                    // Quando clica no check, verifica se houve mudança
                                    if (value !== auth[dado.toLowerCase()]) {
                                        setEditado(prev => {
                                            const newEditado = [...prev];
                                            newEditado[index] = true;
                                            return newEditado;
                                        });
                                    }
                                }
                                setEditing(!editing);
                            }}
                            style={[
                                styles.dadoBut,
                                editing
                                    ? ThemeBackgroundColor('#648ED8', '#', theme)
                                    : ThemeBackgroundColor('#ACACDE', '#', theme)
                            ]}
                            borderColor={editing
                                ? ThemeValue('#C1E0F7', '#', theme)
                                : ThemeValue('#7676CE', '#', theme)}
                            activeOpacity={1}
                        />
                    )}
                </View>
            </>
        );
    };

    return (
        <Modal
            transparent={true}
            visible={props.visible}
            animationType="fade"
        >
            <View style={[styles.backdrop,]}>
                <View style={[styles.modal, { backgroundColor: ThemeValue('#F7F9F7', '#', theme), borderColor: ThemeValue('#CEEAFF', '#', theme) }]}>
                    <View
                        style={{ alignItems: 'flex-end' }}
                    >
                        <Xmark
                            color={ThemeValue('#A61F5E', '#', theme)}
                            strokeWidth={2.5}
                            height={0.08 * screenWidth}
                            width={0.08 * screenWidth}
                            style={styles.iconHeader}
                            onPress={props.exit}
                        />
                    </View>
                    <ScrollView>
                        <View
                            style={styles.config}
                        >
                            <Header text={'Alterar informações'} />
                            <View
                                style={styles.informacoes}
                            >
                                <MudarDado dado={'Nome'} index={0} value={nome} setValue={setNome} />
                                <MudarDado dado={'Email'} index={1} value={email} setValue={setEmail} />
                                <MudarDado dado={'Senha Nova'} index={2} value={senhaNova} setValue={setSenhaNova} />
                                <MudarDado dado={'Senha Atual'} value={senha} setValue={setSenha} />

                                <TouchableOpacityDefault
                                    onPress={() => Alterar()}
                                    text={isUpdating ? "Salvando..." : "Salvar"}
                                    disabled={isUpdating}
                                    style={[
                                        ThemeBackgroundColor('#648ED8', '#4703A6', theme),
                                        { marginTop: 15, opacity: isUpdating ? 0.7 : 1 }
                                    ]}
                                    textStyle={[
                                        ThemeColor('#F7F9F7', '#F7F9F7', theme),
                                    ]}
                                    borderColor={ThemeValue('#C1E0F7', '#A4DEF9', theme)}
                                />
                            </View>
                            <View
                                style={styles.header}
                            >
                                <FastArrowDown
                                    color={ThemeValue('#A61F5E', '#', theme)}
                                    strokeWidth={2.5}
                                    height={0.08 * screenWidth}
                                    width={0.08 * screenWidth}
                                    style={styles.iconHeader}
                                />
                                <LabelDefault
                                    text={'Deletar conta'}
                                    style={[styles.headerLabel, ThemeColor('#A61F5E', '#', theme)]}
                                />
                            </View>
                            <Linha cor={ThemeValue('#A61F5E', '#', theme)} />
                            <View
                                style={styles.informacoes}
                            >
                                <TouchableOpacityDefault
                                    onPress={() => {
                                        deleteAuth(senha)
                                    }}
                                    text={'Deletar'}
                                    disabled={isUpdating}
                                    style={[
                                        ThemeBackgroundColor('#648ED8', '#4703A6', theme),
                                        { marginTop: 15, opacity: isUpdating ? 0.7 : 1, width: '100%' }
                                    ]}
                                    textStyle={[
                                        ThemeColor('#F7F9F7', '#F7F9F7', theme),
                                    ]}
                                    borderColor={ThemeValue('#C1E0F7', '#A4DEF9', theme)}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.75,
        borderRadius: 15,
        borderWidth: 8,
    },
    config: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        marginLeft: 40,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingVertical: 5
    },
    headerLabel: {
        fontSize: 24,
        fontFamily: 'PixelifySans-Bold'
    },
    informacoes: {
        flex: 1,
        paddingHorizontal: 0,
    },
    infoInput: {
        width: screenWidth * 0.5,
        height: screenWidth * 0.07
    },
    infoInputBot: {
        flexDirection: 'row',
        gap: 5
    },
    dado: {
        fontFamily: 'PixelifySans-Medium',
        fontSize: 20,
    },
    dadoBut: {
        height: 0.08 * screenWidth,
        width: 0.08 * screenWidth,
        paddingVertical: 0
    },

})