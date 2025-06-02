import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import SvgPokemonSvg from "../../assets/tcg/pokemonSvg";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import OutlineLabel from "../label/OutlineLabel";


const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const size = 204

export default function BannerDefault({ ...props }) {
    const { theme } = useTheme();

    const loginLabelDefaultStyle = [
        ThemeColor('#210124', '#F7F9F7', theme),
    ]

    return (
        <View
            style={styles.paiBanner}
        >
            <ImageBackground
                source={require('../../assets/tcg/tcg-pokemon.png')}
                style={styles.bg}
                //resizeMode="cover"
                imageStyle={{ borderRadius: 12 }}
            >
                <View
                    style={styles.label}
                >
                    <OutlineLabel
                        borderColor={ThemeValue('#FF89B1', '#B3DEC1', theme)}
                        textColor={ThemeValue('#F7F9F7', '#210124', theme)}
                        text={props.text}
                    />
                </View>
            </ImageBackground>
            <SvgPokemonSvg
                width={204}
                height={204}
                style={styles.pokemon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    paiBanner: {
        height: 0.23 * screenHeight,
        width: 0.96 * screenWidth,
        borderRadius: 10,
    },
    bg: {
        flex: 1,
        width: '100%',
        height: 0.2 * screenHeight,
    },
    pokemon: {
        position: 'absolute',
        width: size,
        height: size,
        left: 190,
        top: 35,
    },
    label: {
        height: 0.2 * screenHeight,
        marginLeft: 30
    }
})