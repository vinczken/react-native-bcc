import * as Iconoir from "iconoir-react-native";
import { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function TouchableOpacityIcon(props) {
    const [pressed, setPressed] = useState(false);
    const borderColor = props.borderColor
    const Icon = Iconoir[props.icon]

    return (
        <TouchableOpacity
            style={[styles.pressPaiDef,
            props.style,
            { borderColor: borderColor, shadowColor: borderColor },
            (pressed ? { borderBottomWidth: 0 } : {}),

            ]}
            onPress={props.onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            activeOpacity={props.activeOpacity ? props.activeOpacity : 1}
        >
            <Icon
                width={props.iconWidth || 0.055 * screenWidth}
                height={props.iconHeight || 0.055 * screenWidth}
                strokeWidth={props.strokeWidth || 4}
                color={props.iconColor}
            />
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
})