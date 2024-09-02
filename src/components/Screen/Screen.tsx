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
import {useAppSafeArea, useAppTheme} from '@hooks/index';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
    flatList?: boolean;
}

export function Screen({
    children,
    canGoBack = false,
    scrollable = false,
    flatList = false,
}: ScreenProps) {
    const {colors} = useAppTheme();
    const {top, bottom} = useAppSafeArea();
    const {goBack} = useNavigation();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    const $boxWrapper: BoxProps = {
        pb: 's24',
        paddingHorizontal: flatList ? 's0' : 's24',
    };

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box
                    {...$boxWrapper}
                    style={{paddingTop: top, paddingBottom: bottom}}>
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
