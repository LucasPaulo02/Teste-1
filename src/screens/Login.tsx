import {Box, Center, Heading, ScrollView, Text, VStack} from "native-base";
import {Controller, useForm} from "react-hook-form";
import {FormSignInDataProps} from "../types/LoginTypes";
import {Input} from "../components/input";
import Button from "../components/buton";
import {useNavigation} from "@react-navigation/native";
import {AuthNavigatorRoutesProps, NaoAutenticado} from "../routes/autenticacao.routes";


export function Login() {

    const {
        control,
        formState: {errors}
    } = useForm<FormSignInDataProps>({
        defaultValues: {
            email: "",
            password: "",
        }
    })

const navigation = useNavigation<AuthNavigatorRoutesProps>()


    function irParaCadastro(){
    navigation.navigate("cadastro")
    }

    return (
        <ScrollView contentContainerStyle={{
            flexGrow: 1
        }}>
            <VStack flex={1}>
                <Center marginY={24}>
                    <Heading>
                        Social Network,
                    </Heading>
                    <Text color={"#98f93"} fontSize={"lg"}>
                        By Colégio Realengo
                    </Text>
                </Center>

                <Center margin={4}>
                    <Controller
                        control={control}
                        name={"email"}
                        render={({field: {onChange, value}}) => (
                            <Input
                                icon={"email"}
                                placeholder={"E-mail"}
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
                                placeholder={"Password"}
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
                        title={"Login"}/>

                    <Button
                    variant={"outline"}
                    isLoading={"false"}
                    onPress={irParaCadastro}
                    title={"Cadastro"}
                    />


                </VStack>
            </VStack>
        </ScrollView>
    )
}
