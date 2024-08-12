import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export function FormTextInput<TFormType extends FieldValues>({
    control,
    name,
    rules,
    ...textInputProps
}: TextInputProps & UseControllerProps<TFormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field, fieldState}) => (
                <TextInput
                    errorMessage={fieldState.error?.message}
                    onBlur={field.onBlur}
                    onChangeText={field.onChange}
                    value={field.value}
                    boxProps={{mb: 's20'}}
                    {...textInputProps}
                />
            )}
        />
    );
}
