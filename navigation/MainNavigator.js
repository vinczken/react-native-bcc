import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreen from "../screens/CadastroScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeNavigator from "./HomeNavigator";
import { getLoggedInAuth } from "../functions/Auth";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { View } from "react-native";


export default function MainNavigator({ ...props }) {
    const { auth, setAuth } = useAuth();

    const Stack = createNativeStackNavigator();

    return (
        <View style={{ flex: 1 }} onLayout={props.onLayoutRootView}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    {auth?.uid && auth.uid !== 'invalido' ? (
                        <Stack.Screen name="Home" component={HomeNavigator} />
                    ) : (
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Cadastro" component={CadastroScreen} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}