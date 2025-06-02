import { StyleSheet, View } from "react-native";
import TouchableOpacityDefault from "../button/TouchableOpacityDefault";
import LabelDefault from "../label/LabelDefault";

export default function SectionHeader(props) {

    return(
        <View
            style={[styles.paiHeader, props.style]}
        >
            <LabelDefault
                text={props.label}
                style={[
                    styles.label,
                    props.labelStyle
                ]}
            />
            <TouchableOpacityDefault
                onPress={() => console.log('')}
                style={[
                    styles.botao,
                    props.buttonStyle
                ]}
                activeOpacity={0.7}
                text={props.text || 'Ver tudo'}
                textStyle={[
                    styles.botaoText,
                    props.buttonTextStyle
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    paiHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    label: {
        fontFamily: 'PixelifySans-SemiBold',
        fontSize: 18
    },
    botao: {
        paddingVertical: 5,
        borderWidth: 0,
        shadowOpacity: 0,
        paddingHorizontal: 5
    },
    botaoText: {
        fontFamily: 'PixelifySans-Bold',
        fontSize: 18,
    }
})