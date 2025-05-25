import { StyleSheet, TextInput, View } from "react-native";


export default function InputDefault(props) {

    return(
        <View
        style={styles.inputDefPai}
        >
            <TextInput
            style={styles.textInput}
            placeholder={props.placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputDefPai: {
        flex: 1,
    },
    textInput: {
        height: '10vh',
        width: '80vw',
        backgroundColor: '#CEEAFF',
        borderRadius: 5,
    }
})