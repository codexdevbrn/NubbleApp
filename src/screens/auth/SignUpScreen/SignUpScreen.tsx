import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

import {successPresets} from '../SuccessScreen/SuccessScreenPresets';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function SignUpScreen() {
    const {reset} = useResetNavigationSuccess();
    function submitForm() {
        //Hook
        reset({
            title: successPresets.success.ScreenPresets.title,
            subtitle: successPresets.success.ScreenPresets.subtitle,
            icon: {
                name: successPresets.success.ScreenPresets.icon.name,
                color: successPresets.success.ScreenPresets.icon.color,
            },
        });
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
