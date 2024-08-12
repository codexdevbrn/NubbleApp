import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {successPresets} from '../SuccessScreen/SuccessScreenPresets';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function ForgotPassword() {
    const {reset} = useResetNavigationSuccess();
    function sendRequest() {
        //Hook
        reset({
            title: successPresets.sendInstructions.ScreenPresets.title,
            subtitle: successPresets.sendInstructions.ScreenPresets.subtitle,
            icon: {
                name: successPresets.sendInstructions.ScreenPresets.icon.name,
                color: successPresets.sendInstructions.ScreenPresets.icon.color,
            },
        });
    }

    return (
        <Screen canGoBack>
            <Text preset="headingLarge" bold mt="s16">
                Esqueci minha senha
            </Text>
            <Text preset="paragraphLarge" mt="s16" mb="s32">
                Digite seu e-mail e enviaremos as instruções para redefinição de
                senha
            </Text>
            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{mb: 's40'}}
            />
            <Button onPress={sendRequest} title="Recuperar Senha" />
        </Screen>
    );
}
