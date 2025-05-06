import { StyleSheet, Text, View } from "react-native";


export default function Header(){
    return (
        <View style={style.pai}>
            <Text style={style.titulo}>Header - Bem Vindo</Text>
            <Text style={style.subtitulo}>Sub-título</Text>
        </View>
    )
}

const style = StyleSheet.create({
    pai:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,

        paddingTop: 55,
        paddingBottom: 30,
        backgroundColor: "#fff",

        borderRadius: 18,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderBottomWidth: 4,
        borderColor: "#000",

    },
    titulo:{
        fontSize: 30,
        fontWeight: 600
    },
    subtitulo: {
        fontSize: 15,
        fontWeight: 300,
    }
})