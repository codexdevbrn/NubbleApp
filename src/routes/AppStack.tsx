import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SettingsScreen} from '@screens/index';

export type AppStackParamList = {
    HomeScreen: undefined;
    SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
    const screenOptions = {
        headerShown: false,
        fullScreenGestureEnabled: true,
    };
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
