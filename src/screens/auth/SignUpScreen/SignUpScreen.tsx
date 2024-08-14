import React from 'react';
import {
    Screen,
    Text,
    Button,
    FormTextInput,
    FormPasswordInput,
} from '@components/index';
import {successPresets} from '@screens/index';
import {useResetNavigationSuccess} from '@hooks/index';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
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
