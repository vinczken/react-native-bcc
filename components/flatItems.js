import { FlatList, StyleSheet, Text, View } from "react-native";


export default function FlatItems({array, ...props}){
    if(!array){
        array = [{nome: 'item1', populacao: 999} , {nome: 'item2', populacao: 999}, {nome: 'item3', populacao: 999}];
    }

    return (
        <View style={styles.paiFlatComp}>
            <Text style={{fontWeight: 500, fontSize: 20, marginBottom: 5}}> Items - (Flat List): </Text>
            <View style={{height: 3, backgroundColor: '#cdcdcd', width: '100%', marginBottom: 10}}></View>
            <FlatList style={styles.scrollFlatComp}
                data = {array}
                renderItem={({ item, index }) => (
                    <View style={styles.itemFlatComp} key={index}>
                        <Text>Cidade: {item.nome}, {'\t'}</Text>
                        <Text>População: {item.populacao}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={() => <View style={styles.separatorFlatComp} />}
                ListHeaderComponent={() => <Text style={{color: '#fff', backgroundColor: '#aaa', textAlign: 'center', fontSize: 18, fontWeight: 600, borderRadius: 6}}>Teste</Text>}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    paiFlatComp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        padding: 10,
        borderColor: '#000',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    scrollFlatComp: {
        padding: 5,
        gap: 25,
    }, 
    itemFlatComp: {
        display: 'flex',
        flexDirection: 'row',
    },
    separatorFlatComp: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    }
})