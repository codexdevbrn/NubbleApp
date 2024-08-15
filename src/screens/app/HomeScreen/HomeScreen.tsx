import React from 'react';

import {Screen, Text, Button} from '@components/index';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamList} from '@routes/*';

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

export function HomeScreen({navigation}: HomeScreenProps) {
    function navigateSettings() {
        return navigation.navigate('SettingsScreen');
    }

    return (
        <Screen>
            <Text preset="paragraphLarge">Home Screen</Text>
            <Button onPress={navigateSettings} title="Continuar" />
        </Screen>
    );
}
