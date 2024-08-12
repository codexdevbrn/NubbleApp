import React from 'react';
import {useForm} from 'react-hook-form';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Router';
import {Alert} from 'react-native';
import {FormTextInput} from '../../../components/FormTextInput/FormTextInput';
import {FormPasswordInput} from '../../../components/FormPasswordInput/FormPasswordInput';

type LoginFormType = {
    email: string;
    password: string;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
    function navigateToSignUpScreen() {
        return navigation.navigate('SignUpScreen');
    }

    function navigateToRequestPasswordScreen() {
        return navigation.navigate('ForgotPassword');
    }

    const {control, formState, handleSubmit} = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    function submitForm({email, password}: LoginFormType) {
        Alert.alert(`Email: ${email} / Senha: ${password}`);
    }

    return (
        <Screen scrollable>
            <Text preset="headingLarge" bold mb="s8" mt="s12">
                Olá!
            </Text>
            <Text preset="paragraphLarge" mb="s40" color="backgroundContrast">
                Digite seu e-mail e senha para entrar
            </Text>
            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                rules={{
                    required: 'E-mail obrigatório',
                    pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: 'E-mail inválido',
                    },
                }}
            />
            <FormPasswordInput
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{mb: 's20'}}
                rules={{
                    required: 'Senha obrigatória',
                    minLength: {
                        value: 8,
                        message: 'Senha deve ter no mínimo 8 caracteres',
                    },
                }}
            />
            {/* TODO: Refactor press request password */}
            <Text
                onPress={navigateToRequestPasswordScreen}
                preset="paragraphSmall"
                color="buttonPrimary"
                mt="s8"
                bold>
                Esqueceu sua senha?
            </Text>
            <Button
                disabled={!formState.isValid}
                onPress={handleSubmit(submitForm)}
                title="Entrar"
                mt="s48"
            />
            <Button
                onPress={navigateToSignUpScreen}
                title="Criar uma nova conta"
                backgroundColor="background"
                mt="s12"
                preset="outline"
            />
        </Screen>
    );
}
