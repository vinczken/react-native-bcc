import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TouchableOpacityIcon from "../components/button/TouchableOpacityIcon";
import TouchableOpcoes from "../components/button/TouchableOpcoes";
import InputSearch from "../components/input/InputSearch";
import LabelDefault from "../components/label/LabelDefault";
import EncontrarHistorico from "../components/produto/EncontrarHistorico";
import ProdutoContinuar from "../components/produto/ProdutoContinuar";
import ProdutoHistorico from "../components/produto/ProdutoHistorico";
import ProdutoNovamente from "../components/produto/ProdutoNovamente";
import SectionHeader from "../components/section/SectionHeader";
import { useTheme } from "../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../functions/GeneralsAux";
import { useState } from "react";
import ConfigModal from "../components/modal/ConfigModal";
import { AccountDefaultStyle } from "../components/defaultStyles/DefaultStyle";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function AccountScreen({ navigation, ...props }) {
    const { theme } = useTheme();
    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ConfigModal
                    visible={showModal}
                    exit={() => setShowModal(!showModal)}
                />
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.accountPai, AccountDefaultStyle('pai')]}
            >
                <SafeAreaView>
                    <View
                        style={[styles.accountPesquisa]}
                    >
                        <InputSearch
                            placeholder={"Pesquise por tipo"}
                            inputCores={AccountDefaultStyle('input')}
                            botaoCores={[
                                ThemeBackgroundColor('#ACACDE', '#F7F9F7', theme),
                                ThemeValue('#551159', '#7676CE', theme),
                                ThemeValue('#E5FCFF', '#ACACDE', theme)
                            ]}
                            assuntos={true}
                            assuntosCores={[
                                [
                                    ThemeBackgroundColor('#FFF7AE', '#ABDAFC', theme),
                                    [
                                        ThemeColor('#FF89B1', '#FF89B1', theme),
                                    ]
                                ],
                                ThemeValue('#FF89B1', '#FF89B1', theme)
                            ]}
                        />
                    </View>
                    <View
                        style={[styles.telaConfig, AccountDefaultStyle('config')]}
                    >
                        <View
                            style={styles.perfil}
                        >
                            <View
                                style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
                            >
                                <View
                                    style={[styles.iconPerfil, { borderColor: AccountDefaultStyle('perfil')[0], backgroundColor: AccountDefaultStyle('perfil')[1] }]}
                                >
                                    <FontAwesome
                                        name="user-circle-o"
                                        size={50}
                                        color={AccountDefaultStyle('perfil')[0]}
                                    />
                                </View>
                                <LabelDefault
                                    text={'Olá, Caio Silva'}
                                    style={{ fontSize: 22 }}
                                />
                            </View>
                            <TouchableOpacityIcon
                                icon={'EditPencil'}
                                iconColor={AccountDefaultStyle('perfil')[0]}
                                iconWidth={31}
                                iconHeight={31}
                                strokeWidth={2.50}
                                onPress={() => setShowModal(true)}
                                style={[
                                    styles.touchEdit,
                                ]}
                                activeOpacity={0.5}
                            />
                        </View>
                        <TouchableOpcoes
                        />
                        <View
                            style={styles.recentes}
                        >
                            <SectionHeader
                                style={{ marginTop: 10 }}
                                label='Seus pedidos mais recentes'
                                labelStyle={ThemeColor('#7676CE', '#', theme)}
                                buttonStyle={ThemeBackgroundColor('#CEEAFF', '#', theme)}
                                buttonTextStyle={ThemeColor('#7676CE', '#', theme)}
                            />
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View
                                    style={{ paddingTop: 15, flexDirection: 'row', gap: 10, marginHorizontal: 10 }}
                                >
                                    {Array.from({ length: 2 }, (_, index) => (
                                        <ProdutoHistorico
                                            key={index}
                                            nome={'Blister Triplo Pokémon...'}
                                            status={true}
                                        />
                                    ))}
                                    <EncontrarHistorico
                                    />
                                </View>
                            </ScrollView>
                        </View>
                        <View
                            style={styles.recentes}
                        >
                            <SectionHeader
                                style={{ marginTop: 0 }}
                                label='Comprar novamente'
                                labelStyle={ThemeColor('#7676CE', '#', theme)}
                                buttonStyle={ThemeBackgroundColor('#CEEAFF', '#', theme)}
                                buttonTextStyle={ThemeColor('#7676CE', '#', theme)}
                            />
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View
                                    style={{ paddingTop: 15, flexDirection: 'row', gap: 10, marginHorizontal: 10 }}
                                >
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <ProdutoNovamente
                                            key={index}
                                            nome={'Blister Triplo Pokémon...'}
                                            status={true}
                                        />
                                    ))}
                                </View>
                            </ScrollView>
                        </View>
                        <View
                            style={styles.recentes}
                        >
                            <SectionHeader
                                style={{ marginTop: 0 }}
                                label='Continue comprando'
                                labelStyle={ThemeColor('#7676CE', '#', theme)}
                                buttonStyle={ThemeBackgroundColor('#CEEAFF', '#', theme)}
                                buttonTextStyle={ThemeColor('#7676CE', '#', theme)}
                            />
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View
                                    style={{ paddingTop: 15, flexDirection: 'row', gap: 10, marginHorizontal: 10 }}
                                >
                                    {Array.from({ length: 3 }, (_, index) => (
                                        <ProdutoContinuar
                                            key={index}
                                            nome={'Cartas TCG Pokemon'}
                                            qtd={10}
                                        />
                                    ))}
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({
    accountPai: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 0,
    },
    accountPesquisa: {
        flexDirection: 'column',
        marginBottom: 10
    },
    telaConfig: {
        flex: 1,
        height: '100%'
    },
    perfil: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        gap: 10
    },
    touchEdit: {
        borderWidth: 0,
        shadowOpacity: 0,
        paddingVertical: 0,
        height: 'auto',
        width: 'auto',
        marginRight: 5,

    },
    iconPerfil: {
        borderRadius: 100,
        height: 54,
        width: 54,
        borderWidth: 2
    },
    recentes: {
        paddingVertical: 10
    }
})