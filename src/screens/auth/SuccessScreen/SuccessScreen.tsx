import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Router';

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
