import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import LabelDefault from "../label/LabelDefault";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

function NomeProduto(nome, limite = 10){
    const nomeTruncado = nome.length > limite
        ? nome.substring(0, limite) + '...'
        : nome;

    return nomeTruncado
};

export default function ProdutoNovamente(props) {
    const { theme } = useTheme();

    const produtoPai = ThemeValue('#F7F9F7', '#27245E', theme);
    const produtoBorder = ThemeValue('#CEEAFF', '#27245E', theme);

    const nome = NomeProduto(props.nome || '', 18)

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
                <ImageBackground
                    source={require('../../assets/produto/produto.png')}
                    style={styles.imageProduto}
                    imageStyle={{ borderRadius: 8, borderWidth: 5, borderColor: produtoPai }}
                />

                <View
                    style={styles.produtoDados}
                >
                    <LabelDefault
                        text={nome}
                        style={[
                            ThemeColor('#210124', '#FFF2F6', theme),
                            styles.nome
                        ]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pressPaiDef: {
        width: 'auto',
    },
    paiProduto: {
        borderWidth: 3,
        flex: 1,
        height: screenHeight * 0.16,
        width: 0.35 * screenWidth,
        borderRadius: 10,
    },
    imageProduto: {
        height: 0.28 * screenWidth,
    },
    produtoDados: {
        paddingHorizontal: 6
    },
    nome: {
        fontFamily: 'PixelifySans-Regular',
        fontSize: 15,
    },
})