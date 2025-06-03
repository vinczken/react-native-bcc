import React, { useRef, useState } from "react";
import { StyleSheet, TextInput } from "react-native";


export default React.memo(function InputDefault({ inputCores, ...props}) {

    const [isFocus, setIsFocus] = useState(false);
    const ref = useRef(null);

    return (
        <TextInput
            value={props.value}
            onChangeText={props.onChange}
            placeholder={props.placeholder}
            style={[styles.textInput, inputCores[0], props.style, 
                isFocus ? 
                    { borderColor: inputCores[3], shadowColor: inputCores[3] } 
                    : { borderColor: inputCores[2], shadowColor: inputCores[2], color: inputCores[1] }]}
            placeholderTextColor={inputCores[1]}
            selectionColor={inputCores[1]}
            onFocus={props.onFocus ? props.onFocus : (() => setIsFocus(true))}
            onBlur={props.onBlur ? props.onBlur : (() => setIsFocus(false))}
            secureTextEntry={props.secureTextEntry}
            autoCorrect={false}
            autoComplete="off"
            textContentType="none"
            importantForAutofill="no"
            keyboardType={props.keyboardType || 'default'}
            editable={props.editable}
        />
    )
})

const styles = StyleSheet.create({
    textInput: {
        height: 'auto',
        width: 'auto',
        borderRadius: 7,

        paddingVertical: 15,
        paddingHorizontal: 16,

        fontFamily: 'PixelifySans-Regular',
        fontSize: 18,
        fontStyle: 'normal',
        borderWidth: 3, 
        shadowOpacity: 1, 
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 4 }
    }
})