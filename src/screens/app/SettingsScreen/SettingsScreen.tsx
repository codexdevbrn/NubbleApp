import React from 'react';

import {Screen, Text} from '@components/index';

export function SettingsScreen() {
    return (
        <Screen canGoBack>
            <Text preset="paragraphLarge">Settings</Text>
        </Screen>
    );
}
