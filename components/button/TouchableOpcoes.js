import { StyleSheet, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeValue } from "../../functions/GeneralsAux";
import TouchableOpacityDefault from "./TouchableOpacityDefault";


export default function TouchableOpcoes(props) {
    const { theme } = useTheme();
    
    const defaultFunction = () => console.log('')

    const opcoes = ['Pedidos', 'Comprar Novamente', 'Conta', 'Favoritos']
    const opcoesFunctions = props.functions || Array.from({length: 4}, defaultFunction)

    const cores = [
        ThemeValue('#C59FC9', '#FFF7AE', theme),
        ThemeValue('#FFF2F6', '#F29188', theme)
    ]

    return (
        <View
            style={[styles.assuntos]}
        >

            {opcoes.map((item, index) => (

                <TouchableOpacityDefault
                    key={index}
                    text={item}
                    onPress={opcoesFunctions[index]} // MUDAR
                    style={[
                        styles.assuntosBotao,
                        { backgroundColor: cores[1] },
                    ]}
                    textStyle={[
                        styles.assuntosTexto,
                        { color: cores[0] }
                    ]}
                    borderColor={cores[0]}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    assuntos: {
        flexDirection: 'row',
        gap: 6,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    assuntosBotao: {
        height: 'auto',
        borderRadius: 100,
        paddingVertical: 3,
        paddingHorizontal: 10,
        overflow: 'visible',
    },
    assuntosTexto: {
        fontSize: 13,
        fontFamily: 'PixelifySans-Medium'
    }
})