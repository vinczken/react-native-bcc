import { SectionList, StyleSheet, Text, View } from "react-native";


export default function SectionItems({array, ...props}){

    return (
        <View style={styles.paiSectComp}>
            <Text style={{fontWeight: '500', fontSize: 20, marginBottom: 5}}> Items - (Section List): </Text>
            <View style={{height: 3, backgroundColor: '#cdcdcd', width: '100%', marginBottom: 10}}/>
            <SectionList 
                style={styles.scrollSectComp}
                sections = {array}
                renderItem={({ item, index }) => (
                    <View style={styles.itemFlatComp} key={index}>
                        <Text>Cidade: {item.nome}, {'\t'}</Text>
                        <Text>População: {item.populacao}</Text>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.separatorSectComp} />}
                renderSectionHeader={({ section: {regiao} }) => (
                <Text style={{color: '#fff', backgroundColor: '#aaa', textAlign: 'center', fontSize: 18, fontWeight: '600', borderRadius: 6}}>{regiao}</Text>
                )}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    paiSectComp: {
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
    scrollSectComp: {
        padding: 5,
        gap: 25,
    }, 
    itemFlatComp: {
        display: 'flex',
        flexDirection: 'row',
    },
    separatorSectComp: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    }
})