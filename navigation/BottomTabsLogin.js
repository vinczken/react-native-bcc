import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/screenHome";
import CadastroScreen from "../screens/screenCadastro";
import LoginScreen from "../screens/screenLogin";


export default function BottomTabsLogin({navigation}){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Home' component={HomeScreen} options={{tabBarLabel: 'Home', headerShown: true}} />
            <Tab.Screen name='Login' component={LoginScreen} options={{tabBarLabel: 'Login', headerShown: true}} />
            <Tab.Screen name='Cadastro' component={CadastroScreen} options={{tabBarLabel: 'Cadastro'}} />
        </Tab.Navigator>
    )
}