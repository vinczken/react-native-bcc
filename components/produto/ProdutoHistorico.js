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

export default function ProdutoHistorico(props) {
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
                    <LabelDefault
                        text={props.status ? 'Entregue' : 'Em andamento'}
                        style={[
                            ThemeColor('#B8336A', '#FF89B1', theme),
                            styles.status
                        ]}
                    />
                    <LabelDefault
                        text={'Ver mais'}
                        style={[
                            ThemeColor('#7676CE', '#FF89B1', theme),
                            styles.mais
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
        height: screenHeight * 0.19,
        width: 0.35 * screenWidth,
        marginHorizontal: 0,
        borderRadius: 10,
    },
    imageProduto: {
        height: 0.248 * screenWidth,
    },
    produtoDados: {
        paddingHorizontal: 6
    },
    nome: {
        fontFamily: 'PixelifySans-Regular',
        fontSize: 15,
        marginBottom: 4
    },
    status: {
        fontFamily: 'PixelifySans-SemiBold',
        fontSize: 15
    },
    mais: {
        fontFamily: 'PixelifySans-Bold',
        fontSize: 15,
        marginTop: 8
    }
})