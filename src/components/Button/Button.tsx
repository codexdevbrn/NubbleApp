import React from 'react';

import {
    Text,
    TouchableOpacityBox,
    TouchableOpacityBoxProps,
    ActivityIndicator,
    buttonPresets,
} from '@components/index';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
    disabled?: boolean;
}

export function Button({
    title,
    loading,
    preset = 'primary',
    disabled,
    ...touchableOpacityBoxProps
}: ButtonProps) {
    const buttonPreset =
        buttonPresets[preset][disabled ? 'disabled' : 'default'];

    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            borderRadius="br16"
            paddingHorizontal="s14"
            alignItems="center"
            justifyContent="center"
            height={50}
            {...buttonPreset.container}
            {...touchableOpacityBoxProps}>
            {loading ? (
                <ActivityIndicator color={buttonPreset.content} />
            ) : (
                <Text
                    preset="paragraphMedium"
                    bold
                    color={buttonPreset.content}>
                    {title}
                </Text>
            )}
        </TouchableOpacityBox>
    );
}
