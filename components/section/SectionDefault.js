import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import TouchableOpacityIcon from "../button/TouchableOpacityIcon";
import LabelDefault from "../label/LabelDefault";
import ProdutoDefault from "../produto/ProdutoDefault";

export default function SectionDefault(props) {
    const { theme } = useTheme();
    const sectionLabelDefaultStyle = [
        ThemeColor('#C490D1', '#A4DEF9', theme),
        styles.label
    ]

    return (
        <View
            style={styles.paiSection}
        >
            <View
                style={styles.sectionBut}
            >
                <LabelDefault
                    text={props.sectionName}
                    style={sectionLabelDefaultStyle}
                />
                <TouchableOpacityIcon
                    onPress={props.buttonOnPress}
                    activeOpacity={0.5}
                    style={[
                        styles.button,
                        ThemeBackgroundColor('#FFDCBD', '#6D5DA6', theme),
                    ]}
                    strokeWidth={3}
                    iconColor={ThemeValue('#C490D1', '#0B0B35', theme)}
                    icon={'NavArrowRight'}
                />
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={styles.produtos}
                >
                    { Array.from({length: 5}, (_, index) => (
                        <ProdutoDefault
                            key={index}
                            nome={'Blister Triplo Pokémon...'}
                            preco={33.99}
                        />
                    ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    paiSection: {
        flexDirection: 'column',
        gap: 10,
        marginVertical: 10
    },
    sectionBut: {
        flexDirection: 'row',
        height: 'auto',
        alignItems: 'center',
        marginTop: -15
    },
    button: {
        borderWidth: 0,
        shadowOpacity: 0,
        height: 'auto',
        paddingVertical: 2,
        paddingHorizontal: 2
    },
    label: {
        fontFamily: 'PixelifySans-Bold',
        height: 'auto',
        paddingHorizontal: 15,
        fontSize: 20,
        marginLeft: 5
    },
    produtos: {
        flexDirection: 'row',
        marginBottom: 10
    }
})