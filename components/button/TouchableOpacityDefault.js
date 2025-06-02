import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TouchableOpacityDefault({ keyDiv, ...props }) {
    const [pressed, setPressed] = useState(false);
    const borderColor = props.borderColor

    return (
        <TouchableOpacity
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={props.onPress}
            style={[styles.pressPaiDef, 
                props.style,
                {borderColor: borderColor, shadowColor: borderColor},
                (pressed ? {borderBottomWidth: 0} : {}),
            ]}
            activeOpacity={props.activeOpacity ? props.activeOpacity : 1}
        >
                <Text
                    style={[styles.pressText, props.textStyle]}
                >
                    {
                        props.text
                    }
                </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    pressPaiDef: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 22,
        zIndex: 999,
        elevation: 999,

        borderWidth: 3,
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 4 },
        borderRadius: 6
    },
    pressText: {
        fontFamily: 'PixelifySans-ExtraBold',
        fontSize: 22,
        color: '#ffffff',
        margin: 0
    },
})