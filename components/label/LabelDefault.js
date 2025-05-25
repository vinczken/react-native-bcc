import { StyleSheet, Text } from "react-native";


export default function LabelDefault(props) {

    return (
        <Text
        style={styles.labelDefPai}
        >
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    labelDefPai: {
        fontFamily: 'PixelifySans',
        color: '#210124',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 400,
    }
})