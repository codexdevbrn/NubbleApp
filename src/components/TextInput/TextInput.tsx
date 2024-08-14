import React, {useRef} from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
} from 'react-native';
import {$fontSizes, $fontFamily, Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '@hooks/index';

export interface TextInputProps extends RNTextInputProps {
    label: string;
    errorMessage?: string;
    boxProps?: BoxProps;
    RightComponent?: React.ReactElement;
}

export function TextInput({
    label,
    errorMessage,
    boxProps,
    RightComponent,
    ...rnTextInputProps
}: TextInputProps) {
    const {colors} = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    const $textInputContainer: BoxProps = {
        flexDirection: 'row',
        borderWidth: errorMessage ? 2 : 1,
        padding: 's16',
        borderColor: errorMessage ? 'error' : 'gray4',
        borderRadius: 'br12',
    };

    function focusInput() {
        inputRef.current?.focus();
    }
    return (
        <Box {...boxProps}>
            <Text
                preset="paragraphMedium"
                mb="s4"
                color="backgroundContrast"
                bold>
                {label}
            </Text>
            <Pressable onPress={focusInput}>
                <Box {...$textInputContainer}>
                    <RNTextInput
                        autoCapitalize="none"
                        ref={inputRef}
                        {...rnTextInputProps}
                        placeholderTextColor={colors.gray2}
                        style={{...$textInputStyle}}
                    />
                    {RightComponent && (
                        <Box justifyContent="center" ml="s16">
                            {RightComponent}
                        </Box>
                    )}
                </Box>
                {errorMessage && (
                    <Text preset="paragraphSmall" bold color="error">
                        {errorMessage}
                    </Text>
                )}
            </Pressable>
        </Box>
    );
}

const $textInputStyle: TextStyle = {
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
};
