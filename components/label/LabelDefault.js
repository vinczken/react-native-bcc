import React from "react";
import { StyleSheet, Text } from "react-native";


export default React.memo( function LabelDefault(props) {

    return (
        <Text
        style={[styles.labelDefPai, props.style]}
        onPress={props.onPress}
        >
            {props.text}
        </Text>
    )
})

const styles = StyleSheet.create({
    labelDefPai: {
        fontFamily: 'PixelifySans-Regular',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400,
    }
})