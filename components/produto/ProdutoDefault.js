import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeBackgroundColor, ThemeColor } from "../../functions/GeneralsAux";
import LabelDefault from "../label/LabelDefault";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

function NomeProduto(nome, limite = 10){
    const nomeTruncado = nome.length > limite
        ? nome.substring(0, limite) + '...'
        : nome;

    return nomeTruncado
};

export default function ProdutoDefault(props) {
    const { theme } = useTheme();

    const produtoPai = ThemeBackgroundColor('#F7F9F7', '#27245E', theme);

    const nome = NomeProduto(props.nome, 18)

    return (
        <TouchableOpacity
            style={[styles.pressPaiDef,
            ]}
            onPress={props.onPress}
            activeOpacity={0.7}
        >

            <View
                style={[styles.paiProduto, produtoPai]}
            >
                <ImageBackground
                    source={require('../../assets/produto/produto.png')}
                    style={styles.imageProduto}
                    imageStyle={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
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
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8}}
                    >
                        <LabelDefault
                            text={'R$'}
                            style={[
                                ThemeColor('#551159', '#B3DEC1', theme),
                                styles.rs
                            ]}
                        />
                        <LabelDefault
                            text={props.preco}
                            style={[
                                ThemeColor('#551159', '#B3DEC1', theme),
                                styles.preco
                            ]}
                        />
                        <LabelDefault
                            text={`em 12x ${(props.preco/12).toFixed(2)}`}
                            style={[
                                ThemeColor('#C490D1', '#648ED8', theme),
                                styles.parcela
                            ]}
                        />
                    </View>
                    <LabelDefault
                        text={'frete grátis'}
                        style={[
                            ThemeColor('#B8336A', '#FF89B1', theme),
                            styles.frete
                        ]}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    paiProduto: {
        flex: 1,
        height: screenHeight * 0.2,
        width: 0.35 * screenWidth,
        marginHorizontal: 10,
        borderRadius: 5
    },
    imageProduto: {
        height: 0.248 * screenWidth,
    },
    produtoDados: {
        paddingVertical: 5,
        paddingHorizontal: 6
    },
    nome: {
        fontFamily: 'PixelifySans-Medium',
        fontSize: 15,
        marginBottom: 8
    },
    rs: {
        fontSize: 13
    },
    preco: {
        fontFamily: 'PixelifySans-Bold',
        fontSize: 17,
        marginRight: 5
    },
    parcela: {
        fontSize: 15
    },
    frete: {
        fontFamily: 'PixelifySans-Bold',
        fontSize: 15
    }
})