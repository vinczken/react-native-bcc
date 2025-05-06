import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function ScrollItems({array, ...props}){
    if(!array){
        array = [{nome: 'item1', populacao: 999} , {nome: 'item2', populacao: 999}, {nome: 'item3', populacao: 999}];
    }

    return (
        <View style={styles.pai}>
            <Text style={{fontWeight: 500, fontSize: 20, marginBottom: 5}}> Items: </Text>
            <View style={{height: 3, backgroundColor: '#cdcdcd', width: '100%', marginBottom: 10}}></View>
            <ScrollView style={styles.scroll}>
                {array.map((item, index) => (
                    <View style={styles.item} key={index}>
                        <Text>Cidade: {item.nome}, {'\t'}</Text>
                        <Text>População: {item.populacao}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    pai: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        padding: 10,
        borderColor: '#000',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        backgroundColor: '#fff',
        height: 250,
        overflow: 'scroll'
    },
    scroll: {
        padding: 5,
        gap: 25,
    }, 
    item: {
        display: 'flex',
        flexDirection: 'row',
    }
})