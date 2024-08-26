import React from 'react';

import {Screen, Text, Button} from '@components/index';
import {AppTabScreenProps} from '@routes/index';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
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
