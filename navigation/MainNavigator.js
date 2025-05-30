import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreen from "../screens/CadastroScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeNavigator from "./HomeNavigator";


export default function MainNavigator({...props}) {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Login' component={LoginScreen}  />
                <Stack.Screen name='Cadastro' component={CadastroScreen} />
                <Stack.Screen name='Home' component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}