import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InputSearch from "../components/input/InputSearch";
import { useTheme } from "../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../functions/GeneralsAux";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function CartScreen({ navigation, ...props }) {
    const { theme } = useTheme();

    const cartPai = ThemeBackgroundColor('#B3DEC1', '#0B0B35', theme)

    const cartInputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#F7F9F7', '#ACACDE', theme),
        ],
        ThemeValue('#FFCFA3', '#FFF2F6', theme),
        ThemeValue('#B3DEC1', '#0B0B35', theme),
        ThemeValue('#F29188', '#F7F9F7', theme)
    ]

    return (
        <SafeAreaProvider>
            <View
                style={[styles.cartPai, cartPai]}
            >
                <SafeAreaView>
                    <View
                        style={[styles.cartPesquisa]}
                    >
                        <InputSearch
                            placeholder={"Pesquise por tipo"}
                            inputCores={cartInputsDefaultStyle}
                            botaoCores={[
                                ThemeBackgroundColor('#FFCFA3', '#F7F9F7', theme),
                                ThemeValue('#B74F87', '#7676CE', theme),
                                ThemeValue('#E5FCFF', '#ACACDE', theme)
                            ]}
                            assuntosCores={[
                                [
                                    ThemeBackgroundColor('#C1E0F7', '#', theme),
                                    [
                                        ThemeColor('#648ED8', '#', theme),
                                    ]
                                ],
                                ThemeValue('#648ED8', '#', theme)
                            ]}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    cartPai: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 0
    },
    cartPesquisa: {
        flexDirection: 'column',
    }
})