import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {setEnableLogging} from "expo/devtools";
import {Login} from "../screens/Login";
import {Cadastro} from "../screens/Cadastro";

export type NaoAutenticado={
    login: undefined;
    cadastro: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<NaoAutenticado>

const {Navigator, Screen}= createNativeStackNavigator()

export function AutenticacaoRotas(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="login" component={Login}/>
            <Screen name="Cadastro" component={Cadastro}/>
        </Navigator>
    )
}