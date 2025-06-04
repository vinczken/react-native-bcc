import { Dimensions, Modal, ScrollView, StyleSheet, View } from "react-native";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import { useTheme } from "../../contexts/ThemeContext";
import TouchableOpacityIcon from "../button/TouchableOpacityIcon";
import { useEffect, useState } from "react";
import TouchableOpacityDefault from "../button/TouchableOpacityDefault";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { deleteAuth, setAuthWith, updateDisplayName, updateUserEmail, updateUserPassword } from "../../functions/Auth";
import HeaderModal from "./HeaderModal";
import LabelInputModal from "./LabelInput";
import { useAuth } from "../../contexts/AuthContext";
import LabelDefault from "../label/LabelDefault";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function ConfigModal(props) {
    const { setAuth } = useAuth();
    const { theme } = useTheme();
    const [editado, setEditado] = useState([false, false, false]);
    const [nome, setNome] = useState(auth.currentUser.displayName)
    const [email, setEmail] = useState(auth.currentUser.email)
    const [senha, setSenha] = useState('123456')
    const [senhaNova, setSenhaNova] = useState('')

    const [confirmacao, setConfirmacao] = useState('')

    useEffect(() => {
        setEditado([
            nome !== auth.currentUser.displayName,
            email !== auth.currentUser.email,
            senhaNova !== ''
        ]);
    }, [nome, email, senhaNova]);

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const Alterar = async () => {
        setIsUpdating(true);
        try {
            if (!senha) {
                alert('Por favor, informe sua senha atual');
                return;
            }

            if (editado[2] && senhaNova) {
                if (senhaNova.length < 6) throw new Error('Senha muito curta');
            }

            const user = auth.currentUser;
            if (!user) throw new Error('Usuário não autenticado');

            const credential = EmailAuthProvider.credential(user.email, senha);
            const res = await reauthenticateWithCredential(user, credential);

            if (res.user) {
                if (editado[0] && nome !== user.displayName) {
                    await updateDisplayName(nome);
                }

                if (editado[1] && email !== user.email) {
                    await updateUserEmail(email, senha);
                }

                if (editado[2] && senhaNova) {
                    await updateUserPassword(email, senha);
                }

                await setAuthWith(user, setAuth);
            }
        } catch (error) {
            console.error(error);
            alert(`Erro: ${error.message}`);
        } finally {
            setIsUpdating(false);
        }
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
                        <TouchableOpacityIcon
                            icon={'Xmark'}
                            iconColor={ThemeValue('#7676CE', '#', theme)}
                            strokeWidth={2.5}
                            iconHeight={0.08 * screenWidth}
                            iconWidth={0.08 * screenWidth}
                            onPress={props.exit}
                            style={[styles.iconExit]}
                            activeOpacity={1}
                        />
                    </View>
                    <ScrollView>
                        <View
                            style={styles.config}
                        >
                            <HeaderModal text={'Alterar informações'} styles={styles} color={ThemeValue('#210124', '#', theme)} />
                            <View
                                style={styles.informacoes}
                            >
                                <LabelInputModal key={0} textLabel={'Nome'} index={0} value={nome} onChange={setNome} styles={styles} editado={editado} setEditado={setEditado} />
                                <LabelInputModal key={1} textLabel={'Email'} index={1} value={email} onChange={setEmail} styles={styles} editado={editado} setEditado={setEditado} />
                                <LabelInputModal key={2} textLabel={'Senha Nova'} index={2} value={senhaNova} onChange={setSenhaNova} styles={styles} editado={editado} setEditado={setEditado} />
                                <LabelInputModal key={3} textLabel={'Senha Atual'} index={3} value={senha} onChange={setSenha} styles={styles} editado={editado} setEditado={setEditado} />

                                <TouchableOpacityDefault
                                    onPress={() => Alterar()}
                                    text={isUpdating ? "Salvando..." : "Salvar"}
                                    disabled={isUpdating}
                                    style={[
                                        ThemeBackgroundColor('#648ED8', '#4703A6', theme),
                                        { marginVertical: 20, opacity: isUpdating ? 0.7 : 1, height: 0.1 * screenWidth, paddingVertical: 0 }
                                    ]}
                                    textStyle={[
                                        ThemeColor('#F7F9F7', '#F7F9F7', theme),
                                    ]}
                                    borderColor={ThemeValue('#C1E0F7', '#A4DEF9', theme)}
                                />
                            </View>
                            <HeaderModal text={'Deletar conta'} styles={styles} color={ThemeValue('#A61F5E', '#', theme)} />
                            <View
                                style={[styles.informacoes, { height: 0.6 * screenHeight }]}
                            >

                                <View
                                    style={{ flexDirection: 'row' }}
                                >

                                    <LabelDefault
                                        text={'Digite \''}
                                        style={[styles.dado]}
                                    />
                                    <LabelDefault
                                        text={'Deletar minha conta'}
                                        style={[styles.dado, ThemeColor('#B8336A', '#', theme), { marginLeft: 0 }]}
                                    />
                                    <LabelDefault
                                        text={'\''}
                                        style={[styles.dado, { marginLeft: 0 }]}
                                    />
                                </View>
                                <LabelInputModal disableLabel={true} textLabel={'Digite aqui :C'} value={confirmacao} onChange={setConfirmacao} styles={styles} editado={editado} setEditado={setEditado} />

                                <TouchableOpacityDefault
                                    onPress={() => {
                                        setIsDeleting(true)
                                        deleteAuth(senha)       //ALTERAR AQUI!!!!!!!!!!!!!!!!!!!!
                                        setIsDeleting(false)
                                    }}
                                    text={isDeleting ? 'Deletando...' : 'Deletar'}
                                    disabled={isDeleting}
                                    style={[
                                        ThemeBackgroundColor('#648ED8', '#4703A6', theme),
                                        { marginVertical: 15, opacity: isUpdating ? 0.7 : 1, height: 0.1 * screenWidth, paddingVertical: 0 }
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
    iconExit: {
        paddingVertical: 0,
        marginTop: 10,
        paddingHorizontal: 8,
        borderWidth: 0,
        shadowOpacity: 0
    },
    informacoes: {
        flex: 1,
        paddingHorizontal: 0,
    },
    infoInput: {
        width: screenWidth * 0.5,
        height: screenWidth * 0.08,
        paddingVertical: 0,
        paddingHorizontal: 10
    },
    infoInputBot: {
        flexDirection: 'row',
        gap: 5,
    },
    dado: {
        fontFamily: 'PixelifySans-Medium',
        fontSize: 20,
        marginLeft: 8
    },
    dadoBut: {
        height: 0.08 * screenWidth,
        width: 0.08 * screenWidth,
        paddingVertical: 0
    },

})