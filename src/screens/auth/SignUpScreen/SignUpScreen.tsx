import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
    function submitForm() {
        navigation.navigate('SuccessScreen');
    }
    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32" bold>
                Crie uma conta
            </Text>
            <TextInput
                label="Seu username"
                placeholder="@"
                boxProps={{mb: 's20'}}
            />
            <TextInput
                label="Nome completo"
                placeholder="Digite seu nome completo"
                boxProps={{mb: 's20'}}
            />
            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{mb: 's20'}}
            />
            <PasswordInput
                label="Senha"
                boxProps={{mb: 's48'}}
                placeholder="Digite sua senha"
            />
            <Button title="Criar uma conta" onPress={submitForm} />
        </Screen>
    );
}
