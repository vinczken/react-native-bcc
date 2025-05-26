import { Pressable, StyleSheet, Text } from "react-native";

export default function PressableDefault(props) {

    return (
        <Pressable
            style={[styles.pressPaiDef, props.style]}
            onPress={props.onPress}
            onLayout={(event) => {
                const { x, y, width, height } = event.nativeEvent.layout;
                console.log('Pressable Layout:', { x, y, width, height });
                // Verifique se a altura (height) inclui o paddingTop e paddingBottom
            }}
        >
            <Text
                style={[styles.pressText]}
            >
                {
                    props.text
                }

            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressPaiDef: {
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingBottom: 16,
        //paddingTop: 16,
        backgroundColor: 'red'
    },
    pressText: {
        fontFamily: 'PixelifySans',
        fontSize: 25,
        color: '#ffffff'
    },
})