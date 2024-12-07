import {NavigationContainer} from "@react-navigation/native";
import {AutenticacaoRotas} from "./autenticacao.routes";
import {Box} from "native-base";


export function Routes() {
    return (
        <Box flex={"1"}>
            <NavigationContainer>
                <AutenticacaoRotas />
            </NavigationContainer>

        </Box>
)

}
