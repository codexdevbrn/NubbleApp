import React from 'react';

import {Screen, Text, Button, Icon} from '@components/index';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes/index';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
    function goBackToBegin() {
        navigation.goBack();
    }
    return (
        <Screen>
            <Icon {...route.params.icon} />
            <Text preset="headingLarge" bold mt="s24">
                {route.params.title}
            </Text>
            <Text preset="paragraphLarge" mt="s16">
                {route.params.subtitle}
            </Text>
            <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
        </Screen>
    );
}
