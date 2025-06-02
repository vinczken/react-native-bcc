import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import InputSearch from "../input/InputSearch";
import LabelDefault from "../label/LabelDefault";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function EncontrarHistorico(props) {
    const { theme } = useTheme();

    const produtoPai = ThemeValue('#F7F9F7', '#27245E', theme);
    const produtoBorder = ThemeValue('#CEEAFF', '#27245E', theme);

    const inputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#CEEAFF', '#ACACDE', theme),
            {  width: 0.32 * screenWidth, borderRadius: 10 }
        ],
        ThemeValue('#ACACDE', '#FFF2F6', theme),
        ThemeValue('#F7F9F7', '#0B0B35', theme),
        ThemeValue('#ACACDE', '#F7F9F7', theme)
    ]

    return (
        <TouchableOpacity
            style={[styles.pressPaiDef,
            ]}
            onPress={props.onPress}
            activeOpacity={0.7}
        >

            <View
                style={[
                    styles.paiProduto,
                    { backgroundColor: produtoPai, borderColor: produtoBorder }]}
            >
                <View
                    style={styles.produtoDados}
                >
                    <LabelDefault
                        text={'Não consegue encontrar seu pedido?'}
                        style={[
                            ThemeColor('#210124', '#FFF2F6', theme),
                            styles.encontrarPedido
                        ]}
                    />
                </View>
                <InputSearch
                    placeholder={"Buscar pedidos"}
                    inputCores={inputsDefaultStyle}
                    botaoCores={[
                        [
                            ThemeBackgroundColor('#ACACDE', '#F7F9F7', theme),
                            { marginLeft: 10 }
                        ],
                        ThemeValue('#7676CE', '#7676CE', theme),
                        ThemeValue('#F7F9F7', '#ACACDE', theme)
                    ]}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pressPaiDef: {
        width: 'auto',
    },
    paiProduto: {
        justifyContent: 'center',
        borderWidth: 3,
        flex: 1,
        height: screenHeight * 0.16,
        width: 0.55 * screenWidth,
        borderRadius: 10,
        alignItems: 'center',
        gap: 15
    },
    produtoDados: {
        paddingHorizontal: 6,
    },
    encontrarPedido: {
        textAlign: 'center',
        fontFamily: 'PixelifySans-Medium',
        fontSize: 18,
        width: 0.45 * screenWidth,
    },
})