import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BannerDefault from "../components/banner/BannerDefault";
import InputSearch from "../components/input/InputSearch";
import SectionDefault from "../components/section/SectionDefault";
import { useTheme } from "../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../functions/GeneralsAux";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function HomeScreen({ navigation, ...props }) {
    const { theme } = useTheme();

    const homePai = ThemeBackgroundColor('#FFECDB', '#0B0B35', theme)
    const homeInputsDefaultStyle = [
        [
            ThemeColor('#750D37', '#750D37', theme),
            ThemeBackgroundColor('#DBF9F0', '#ACACDE', theme),
        ],
        ThemeValue('#C490D1', '#FFF2F6', theme),
        ThemeValue('#FFECDB', '#0B0B35', theme),
        ThemeValue('#C490D1', '#F7F9F7', theme)
    ]

    const banners = [[
        'Oferta do',
        'dia 40% OFF',
        'em pedidos',
        'de TCG!!!'
    ], [
        '50% OFF',
        'em booster',
        'packs de',
        'Pokémon!'
    ], [
        'Oferta do',
        'dia 25% OFF',
        'em decks',
        'de Magic!'
    ], [
        'Black Friday',
        '70% OFF',
        'em todos os',
        'card games!'
    ]]

    return (
        <SafeAreaProvider>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.homePai, homePai]}
            >
                <SafeAreaView
                    style={{ gap: 10 }}
                >
                    <View
                        style={[styles.homePesquisa]}
                    >
                        <InputSearch
                            placeholder={"Pesquise por tipo"}
                            inputCores={homeInputsDefaultStyle}
                            botaoCores={[
                                ThemeBackgroundColor('#C490D1', '#F7F9F7', theme),
                                ThemeValue('#750D37', '#7676CE', theme),
                                ThemeValue('#E5FCFF', '#ACACDE', theme)
                            ]}
                            assuntos={true}
                            assuntosCores={[
                                [
                                    ThemeBackgroundColor('#DBF9F0', '#B8336A', theme),
                                    [
                                        ThemeColor('#83C291', '#FFCFA3', theme),
                                    ]
                                ],
                                ThemeValue('#83C291', '#FFCFA3', theme)
                            ]}
                        />
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 0 }}
                        pagingEnabled={false}
                        snapToInterval={0.99 * screenWidth}
                        decelerationRate='fast'
                    >
                        <View
                            style={styles.banners}
                        >
                            {banners.map((item, index) => (
                                <BannerDefault
                                    key={index}
                                    text={item}
                                />
                            ))

                            }
                        </View>
                    </ScrollView>
                    <View
                        style={styles.secoes}
                    >
                        {Array.from({ length: 5 }, (_, index) => (
                            <SectionDefault
                                key={index}
                                sectionName={'Copag Blister (' + index + ')'}
                            />
                        ))
                        }

                    </View>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    homePai: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 0
    },
    homePesquisa: {
        flexDirection: 'column',
    },
    banners: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        gap: 10
    },
    secoes: {
    }
})