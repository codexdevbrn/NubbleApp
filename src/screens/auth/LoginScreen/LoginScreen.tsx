import React from 'react';
import {Text} from '../../../components/Text/Text';
import {Box} from '../../../components/Box/Box';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
    function navigateToSignUpScreen() {
        return navigation.navigate('SignUpScreen');
    }

    function navigateToRequestPasswordScreen() {
        return navigation.navigate('ForgotPassword');
    }

    return (
        <Screen scrollable>
            <Text preset="headingLarge" bold mb="s8" mt="s12">
                Olá!
            </Text>
            <Text preset="paragraphLarge" mb="s40" color="backgroundContrast">
                Digite seu e-mail e senha para entrar
            </Text>
            <Box>
                <TextInput
                    boxProps={{mb: 's20'}}
                    label="E-mail"
                    placeholder="Digite sua senha"
                />
                <PasswordInput label="Senha" placeholder="Digite sua senha" />
            </Box>
            <Text
                onPress={navigateToRequestPasswordScreen}
                preset="paragraphSmall"
                color="buttonPrimary"
                mt="s8"
                bold>
                Esqueceu sua senha?
            </Text>
            <Button title="Entrar" backgroundColor="buttonPrimary" mt="s48" />
            <Button
                onPress={navigateToSignUpScreen}
                title="Criar uma nova conta"
                backgroundColor="background"
                mt="s12"
                preset="outline"
                borderColor="buttonPrimary"
            />
        </Screen>
    );
}
