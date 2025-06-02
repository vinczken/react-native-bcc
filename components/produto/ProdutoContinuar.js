import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeColor, ThemeValue } from "../../functions/GeneralsAux";
import LabelDefault from "../label/LabelDefault";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

function NomeProduto(nome, limite = 10) {
    const nomeTruncado = nome.length > limite
        ? nome.substring(0, limite) + '...'
        : nome;

    return nomeTruncado
};

export default function ProdutoContinuar(props) {
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
                <View
                    style={[styles.imgs]}
                >
                    <ImageBackground
                        source={require('../../assets/produto/produto.png')}
                        style={[styles.imageProduto, { right: 18 }]}
                        imageStyle={[styles.imageStyle, { borderColor: produtoPai }]}
                    >
                        <View style={styles.overlay3} />
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/produto/produto.png')}
                        style={[styles.imageProduto]}
                        imageStyle={[styles.imageStyle, { borderColor: produtoPai }]}
                    >
                        <View style={styles.overlay2} />
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/produto/produto.png')}
                        style={[styles.imageProduto, { left: 18 }]}
                        imageStyle={[styles.imageStyle, { borderColor: produtoPai }]}
                    >
                        <View style={styles.overlay1} />
                    </ImageBackground>
                </View>

                <View
                    style={styles.produtoDados}
                >
                    <LabelDefault
                        text={nome}
                        style={[
                            ThemeColor('#210124', '#FFF2F6', theme),
                            styles.nome,
                            { fontFamily: 'PixelifySans-Medium' }
                        ]}
                    />
                    <LabelDefault
                        text={`${props.qtd}x visto(s)`}
                        style={[
                            ThemeColor('#ACACDE', '#FFF2F6', theme),
                            styles.nome,
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
        height: screenHeight * 0.17,
        width: 0.55 * screenWidth,
        borderRadius: 10,
    },
    imgs: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageProduto: {
        position: 'absolute',
        height: 0.258 * screenWidth,
        width: 0.288 * screenWidth
    },
    imageStyle: { 
        borderRadius: 15, 
        borderWidth: 5,  
    },
    overlay1: {
        ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do pai
        backgroundColor: 'rgba(255, 255, 255, 0)', 
    },
    overlay2: {
        ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do pai
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    },
    overlay3: {
        ...StyleSheet.absoluteFillObject, // Preenche todo o espaço do pai
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    },
    produtoDados: {
        marginTop: 110,
        alignItems: 'center',
        paddingHorizontal: 6
    },
    nome: {
        fontFamily: 'PixelifySans-Regular',
        fontSize: 15,
    },
})