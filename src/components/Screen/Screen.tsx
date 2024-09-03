import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {
    Box,
    BoxProps,
    TouchableOpacityBox,
    Icon,
    Text,
    ScrollViewContainer,
    ViewContainer,
    TouchableOpacityBoxProps,
} from '@components/index';
import {useAppTheme} from '@hooks/index';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps extends BoxProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
    flatList?: boolean;
    resetPadding?: boolean;
}

export function Screen({
    children,
    canGoBack = false,
    scrollable = false,
    resetPadding,
    ...boxProps
}: ScreenProps) {
    const {colors} = useAppTheme();
    const {goBack} = useNavigation();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    const styleProps = resetPadding ? $resetScreenProps : $viewScreenProps;

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box {...styleProps} {...boxProps}>
                    {canGoBack && (
                        <Box>
                            <TouchableOpacityBox
                                {...$touchableOpacityStyle}
                                onPress={goBack}>
                                <Icon name="arrowLeft" color="primary" />
                                <Text preset="paragraphMedium" semiBold ml="s8">
                                    Voltar
                                </Text>
                            </TouchableOpacityBox>
                        </Box>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    );
}

const $touchableOpacityStyle: TouchableOpacityBoxProps = {
    mb: 's24',
    flexDirection: 'row',
};

const $viewScreenProps: BoxProps = {
    paddingHorizontal: 's24',
    style: {
        paddingTop: 20,
        paddingBottom: 20,
    },
};

const $resetScreenProps: BoxProps = {
    paddingHorizontal: 's0',
    style: {
        paddingTop: 0,
        paddingBottom: 0,
    },
};
