import {Center, Heading, ScrollView, VStack} from "native-base";
import {styles} from "react-native-gifted-charts/dist/BarChart/styles";
import {Controller, useForm} from "react-hook-form";
import {FormSignInDataProps} from "../types/LoginTypes";
import {LoginType} from "../types/CadastroType";
import {Input} from "../components/input";
import Button from "../components/buton";
import {useNavigation} from "@react-navigation/native";
import {AuthNavigatorRoutesProps} from "../routes/autenticacao.routes";

export function Cadastro() {
    const {
        control,
        formState: {errors}
    } = useForm<LoginType>({
        defaultValues: {}
    })

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function irParaLogin() {
        navigation.navigate("login")
    }

    return (
        <ScrollView>
            contentContainerStyle={{
            flexGrow: 1,
        }}
            showsVerticalScrollIndicator={false}

            <Center mt={"40"}>
                <Heading>
                    Crie sua conta
                </Heading>
            </Center>
            <Center padding={4}>
                <Controller
                    control={control}
                    name={"name"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"person"}
                            placeholder={"Infome seu nome"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.name?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={"email"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"email"}
                            placeholder={"Infome seu email"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.email?.message}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={"password"}
                    render={({field: {onChange, value}}) => (
                        <Input
                            icon={"lock"}
                            placeholder={"Infome sua senha"}
                            onChangeText={onChange}
                            value={value}
                            autoCapitalize={"none"}
                            errorMessage={errors.password?.message}
                        />
                    )}
                />

            </Center>

            <VStack margin={4} space={2}>
                <Button
                    variant={"outline"}
                    onPress={() => {

                    }}
                    title={"Cadastrar"}/>

                <Button
                    variant={"outline"}
                    isLoading={false}
                    onPress={irParaLogin}
                    title={"Voltar"}
                />

            </VStack>
        </ScrollView>
    )
}