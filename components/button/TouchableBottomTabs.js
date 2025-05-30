import * as Iconoir from "iconoir-react-native";
import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function TouchableBottomTabs({ route, navigation, icon, ...props}) {
    const [pressed, setPressed] = useState(false);

    const isFocused = navigation.isFocused() || false;

    const Icon = Iconoir[icon]
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            {...props}
            onPress={() => {
                props.onPress();
            }}
            style={[
                { 
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',

                    marginTop: 15
                }
            ]}
            activeOpacity={0.7}
        >
            <View
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: theme == 'light' ?
                        (
                            isFocused ? '#CFBAE1' : '#F7F9F7'
                        )
                        : (
                            isFocused ? '#551159' : '#210124'
                        ),
                    width: 0.13 * screenWidth,
                    height: 0.13 * screenWidth,
                    borderRadius: 7,
                }}
            >

                <Icon
                    width={0.1 * screenWidth}
                    height={0.1 * screenWidth}
                    strokeWidth={2.2}
                    color={
                        theme == 'light' ?
                            (
                                isFocused ? (props.iconColorFocus || '#B8336A')
                                    : (props.iconColor || '#CFBAE1')
                            ) : (
                                isFocused ? (props.iconColorFocus || '#ABDAFC')
                                    : (props.iconColor || '#6D5DA6'))}
                />
            </View>
        </TouchableOpacity>
    )
};
