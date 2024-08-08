import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';

export function SuccessScreen() {
    function goBackHome() {
        //TODO: reset navigation
    }
    return (
        <Screen>
            <Icon name="checkRound" color="success" />
            <Text preset="headingLarge" bold mt="s24">
                Title
            </Text>
            <Text preset="paragraphLarge" mt="s16">
                subtitle
            </Text>
            <Button onPress={goBackHome} title="Voltar ao início" mt="s40" />
        </Screen>
    );
}
