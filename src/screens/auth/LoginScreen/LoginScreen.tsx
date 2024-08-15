import React from 'react';
import {Alert} from 'react-native';

import {
    Text,
    Button,
    Screen,
    FormTextInput,
    FormPasswordInput,
    Box,
} from '@components/index';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@routes/index';
import {useForm} from 'react-hook-form';

import {loginSchema, LoginSchema} from './loginSchema';

type LoginScreenProps = NativeStackScreenProps<
    AuthStackParamList,
    'LoginScreen'
>;

export function LoginScreen({navigation}: LoginScreenProps) {
    function navigateToSignUpScreen() {
        return navigation.navigate('SignUpScreen');
    }

    function navigateToRequestPasswordScreen() {
        return navigation.navigate('ForgotPassword');
    }

    const {control, formState, handleSubmit} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });

    function submitForm({email, password}: LoginSchema) {
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
            <FormTextInput control={control} name="email" label="E-mail" />
            <FormPasswordInput
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{mb: 's20'}}
            />
            <Box pr="s200">
                <Text
                    onPress={navigateToRequestPasswordScreen}
                    preset="paragraphSmall"
                    color="buttonPrimary"
                    mt="s8"
                    bold>
                    Esqueceu sua senha?
                </Text>
            </Box>
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
