import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
    function submitForm() {}
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
            <TextInput
                preset="password"
                label="Senha"
                RightComponent={<Icon name="eyeOn" color="gray2" />}
                boxProps={{mb: 's48'}}
                placeholder="Digite sua senha"
            />
            <Button title="Criar uma conta" onPress={submitForm} />
        </Screen>
    );
}
