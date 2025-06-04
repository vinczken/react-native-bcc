import { FastArrowDown } from "iconoir-react-native";
import { Dimensions, View } from "react-native";
import LabelDefault from "../label/LabelDefault";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function Header({ styles, text, color, ...props }) {
    return (
        <>
            <View
                style={styles.header}
            >
                <FastArrowDown
                    color={color}
                    strokeWidth={2.5}
                    height={0.08 * screenWidth}
                    width={0.08 * screenWidth}
                    style={styles.iconHeader}
                />
                <LabelDefault
                    text={text}
                    style={[styles.headerLabel, { color: color }]}
                />
            </View>
            <View style={{ width: '88%', height: 3, backgroundColor: color, borderRadius: 100, marginBottom: 15 }} />
        </>
    )
}