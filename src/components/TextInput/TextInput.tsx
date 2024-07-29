import React from 'react';
import {
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

interface TextInputProps extends RNTextInputProps {
    label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
    return (
        <Box>
            <Text preset="paragraphMedium" mb="s4">
                {label}
            </Text>
            <RNTextInput
                style={{borderWidth: 1, height: 50}}
                {...rnTextInputProps}
            />
        </Box>
    );
}
