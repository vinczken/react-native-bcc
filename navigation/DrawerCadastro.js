import { createDrawerNavigator } from "@react-navigation/drawer";
import CadastroScreen from "../screens/screenCadastro";
import LoginScreen from "../screens/screenLogin";
import HomeScreen from "../screens/screenHome";

export default function DrawerCadastro({navigation}) {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Cadastro">
            <Drawer.Screen name='Home' component={HomeScreen} options={{title: 'Home'}} />
            <Drawer.Screen name='Login' component={LoginScreen} options={{title: 'Login'}} />
            <Drawer.Screen name='Cadastro' component={CadastroScreen} options={{title: 'Cadastro'}} />
        </Drawer.Navigator>
    )
}