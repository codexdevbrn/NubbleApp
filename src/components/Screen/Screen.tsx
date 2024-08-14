import React from 'react';
import {
    Box,
    TouchableOpacityBox,
    Icon,
    Text,
    ScrollViewContainer,
    ViewContainer,
} from '@components/index';
import {useAppSafeArea, useAppTheme} from '@hooks/index';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({
    children,
    canGoBack = false,
    scrollable = false,
}: ScreenProps) {
    const {colors} = useAppTheme();
    const {top, bottom} = useAppSafeArea();
    const {goBack} = useNavigation();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box
                    paddingBottom="s24"
                    paddingHorizontal="s24"
                    style={{paddingTop: top, paddingBottom: bottom}}>
                    {canGoBack && (
                        <TouchableOpacityBox
                            onPress={goBack}
                            mb="s24"
                            flexDirection="row">
                            <Icon name="arrowLeft" color="primary" />
                            <Text preset="paragraphMedium" semiBold ml="s8">
                                Voltar
                            </Text>
                        </TouchableOpacityBox>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    );
}
