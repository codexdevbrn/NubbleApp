import React from 'react';

import {PasswordInput, PasswordInputProps} from '@components/index';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

export function FormPasswordInput<TFormType extends FieldValues>({
    control,
    name,
    rules,
    ...passwordInputProps
}: PasswordInputProps & UseControllerProps<TFormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field, fieldState}) => (
                <PasswordInput
                    errorMessage={fieldState.error?.message}
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    value={field.value}
                    {...passwordInputProps}
                    boxProps={{mb: 's20'}}
                />
            )}
        />
    );
}
