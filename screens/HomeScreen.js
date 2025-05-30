import { useMemo, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import InputDefault from "../components/input/InputDefault";
import { ThemeBackgroundColor } from "../functions/GeneralsAux";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function HomeScreen({ navigation, ...props }) {
    const { theme } = useTheme();
    const [pesquisa, setPesquisa] = useState('');

    const homePai = useMemo(() => [
        ThemeBackgroundColor('#FFECDB', '#001643', theme),
    ])

    const homeInputsDefaultStyle = useMemo(() => [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#DBF9F0', '#F2C572', theme),
            { paddingTop: 10, paddingBottom: 11, paddingHorizontal: 13, fontSize: 18 }
        ],
        ThemeValue('#C490D1', '#AA7BAD', theme),
        ThemeValue('#F7F9F7', '#7676CE', theme),
        ThemeValue('#B3DEC1', '#F29188', theme)
    ], [theme]);

    return (
        <SafeAreaProvider>
            <View
                style={[styles.homePai, homePai]}
            >
                <View
                    style={[styles.homePesquisa]}
                >
                    <InputDefault
                        value={nome}
                        onChange={setNome}
                        placeholder={"Nome"}
                        style={[homeInputsDefaultStyle[0]]}
                        placeholderTextColor={homeInputsDefaultStyle[1]}
                        selectionColor={homeInputsDefaultStyle[1]}
                        borderColor={homeInputsDefaultStyle[2]}
                        borderColorFocused={homeInputsDefaultStyle[3]}
                        colorNotFocus={homeInputsDefaultStyle[1]}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    homePai: {
        flex: 1,
        flexDirection: 'column',
    },
    homePesquisa: {
        flexDirection: 'column',
    }
})