import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {zodResolver} from '@hookform/resolvers/zod';

import {successPresets} from '../SuccessScreen/SuccessScreenPresets';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {signUpSchema, SignUpSchema} from './signUpSchema';

export function SignUpScreen() {
    const {reset} = useResetNavigationSuccess();
    const {control, formState, handleSubmit} = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onBlur',
    });
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
            <FormTextInput
                control={control}
                name="username"
                label="Seu username"
                placeholder="@"
                boxProps={{mb: 's20'}}
            />
            <FormTextInput
                autoCapitalize="words"
                control={control}
                name="fullName"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                boxProps={{mb: 's20'}}
            />
            <FormTextInput
                autoCapitalize="words"
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                rules={{
                    required: 'E-mail obrigatório',
                }}
                boxProps={{mb: 's20'}}
            />
            <FormPasswordInput
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                rules={{
                    required: 'Senha obrigatória',
                }}
            />
            <Button
                disabled={!formState.isValid}
                title="Criar uma conta"
                onPress={handleSubmit(submitForm)}
            />
        </Screen>
    );
}
