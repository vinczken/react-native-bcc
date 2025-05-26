import { StyleSheet, Text } from "react-native";


export default function LabelDefault(props) {

    return (
        <Text
        style={[styles.labelDefPai, props.style]}
        onPress={props.onPress}
        >
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    labelDefPai: {
        fontFamily: 'PixelifySans',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400,
    }
})