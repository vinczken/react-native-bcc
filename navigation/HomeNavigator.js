import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import TouchableBottomTabs from "../components/button/TouchableBottomTabs";
import { useTheme } from "../contexts/ThemeContext";
import { ThemeValue } from "../functions/GeneralsAux";
import AccountScreen from "../screens/AccountScreen";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default function HomeNavigator({ navigator, ...props }) {
    const { theme } = useTheme();
    const BottomTabs = createBottomTabNavigator();

    return (
        <BottomTabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#F7F9F7',
                    height: screenHeight * 0.1,
                    backgroundColor: ThemeValue('#F7F9F7', '#210124', theme),
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                },
            })}

        >
            <BottomTabs.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={({ navigation, route }) => ({
                    tabBarButton: (props) => (
                        <TouchableBottomTabs
                            {...props}
                            route={route}
                            navigation={navigation}
                            icon={'HomeAlt'}
                        />
                    )
                })}
            />
            <BottomTabs.Screen
                name='AccountScreen'
                component={AccountScreen}
                options={({ navigation, route }) => ({
                    tabBarButton: (props) => (
                        <TouchableBottomTabs
                            {...props}
                            route={route}
                            navigation={navigation}
                            icon={'User'}
                        />
                    )
                })}
            />
            <BottomTabs.Screen
                name='CartScreen'
                component={CartScreen}
                options={({ navigation, route }) => ({
                    tabBarButton: (props) => (
                        <TouchableBottomTabs
                            {...props}
                            route={route}
                            navigation={navigation}
                            icon={'CartAlt'}
                        />
                    )
                })}
            />
        </BottomTabs.Navigator>
    )
}