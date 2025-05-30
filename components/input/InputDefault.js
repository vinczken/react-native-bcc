import React, { useRef, useState } from "react";
import { StyleSheet, TextInput } from "react-native";


export default React.memo(function InputDefault(props) {

    const [isFocus, setIsFocus] = useState(false);
    const ref = useRef(null);

    return (
        <TextInput
            ref={props.ref ? props.ref : ref}
            style={[styles.textInput, props.style, isFocus ? { borderColor: props.borderColorFocused, shadowColor: props.borderColorFocused } : { borderColor: props.borderColor, shadowColor: props.borderColor, color: props.colorNotFocus }]}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            selectionColor={'#C490D1'}
            value={props.value}
            onChangeText={props.onChange}
            onFocus={props.onFocus ? props.onFocus : (() => setIsFocus(true))}
            onBlur={props.onBlur ? props.onBlur : (() => setIsFocus(false))}
            secureTextEntry={props.secureTextEntry}
            autoCorrect={false}
        />
    )
})

const styles = StyleSheet.create({
    textInput: {
        height: 'auto',
        width: 'auto',
        borderRadius: 7,

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,

        fontFamily: 'PixelifySans-Regular',
        fontSize: 18,
        fontStyle: 'normal',
        borderWidth: 3, 
        shadowOpacity: 1, 
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 4 }
    }
})