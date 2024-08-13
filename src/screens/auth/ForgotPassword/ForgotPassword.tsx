import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {successPresets} from '../SuccessScreen/SuccessScreenPresets';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    forgotPasswordSchema,
    ForgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPassword() {
    const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onBlur',
    });
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
            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{mb: 's40'}}
            />

            <Button
                disabled={!formState.isValid}
                onPress={handleSubmit(sendRequest)}
                title="Recuperar Senha"
            />
        </Screen>
    );
}
