import { useRef, useState } from "react";
import { StyleSheet, TextInput } from "react-native";


export default function InputDefault(props) {

    const borderColorFocused = props.borderColorFocused
    const borderColor = props.borderColor
    const [isFocus, setIsFocus] = useState(false);
    const ref = useRef(null);

    return (
        <TextInput
            ref={props.ref ? props.ref : ref}
            style={[styles.textInput, props.style, isFocus ? { borderColor: borderColorFocused, shadowColor: borderColorFocused } : { borderColor: borderColor, shadowColor: borderColor }]}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            selectionColor={'#C490D1'}
            value={props.value}
            onChange={props.onChange}
            onFocus={props.onFocus ? props.onFocus : (() => setIsFocus(true))}
            onBlur={props.onBlur ? props.onBlur : (() => setIsFocus(false))}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 'auto',
        width: 'auto',
        borderRadius: 7,

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,

        fontFamily: 'PixelifySans',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '400',
        borderWidth: 3, 
        shadowOpacity: 1, 
        shadowRadius: 0,
        
        shadowOffset: { width: 0, height: 4 }
    }
})