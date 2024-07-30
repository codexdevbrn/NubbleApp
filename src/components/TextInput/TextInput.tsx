import React, {useRef} from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontSizes, $fontFamily, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

export type InputPreset = 'password';

interface TextInputProps extends RNTextInputProps {
    label: string;
    preset?: InputPreset;
}

export function TextInput({
    preset,
    label,
    ...rnTextInputProps
}: TextInputProps) {
    const {colors} = useAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    function focusInput(){
        inputRef.current?.focus();
    }

    return (
        <Pressable onPress={focusInput}>
            <Box>
                <Text
                    preset="paragraphMedium"
                    mb="s4"
                    color="backgroundContrast"
                    bold>
                    {label}
                </Text>
                <Box {...$textInputContainer}>
                    {preset ? (
                        <RNTextInput
                            ref={inputRef}
                            placeholderTextColor={colors.gray2}
                            style={{...$textInputStyle}}
                            {...rnTextInputProps}
                            secureTextEntry
                            {...rnTextInputProps}
                        />
                    ) : (
                        <RNTextInput
                            style={{...$textInputStyle}}
                            {...rnTextInputProps}
                        />
                    )}
                </Box>
            </Box>
        </Pressable>
    );
}

const $textInputStyle: TextStyle = {
    padding: 0,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
};

const $textInputContainer: BoxProps = {
    borderWidth: 1,
    padding: 's16',
    borderColor: 'gray4',
    borderRadius: 'br12',
};
