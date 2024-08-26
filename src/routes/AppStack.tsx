import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen} from '@screens/index';

import {AppTabNavigator, AppTabNavigatorParamList} from './AppTabNavigator';

export type AppStackParamList = {
    AppTabNavigator: NavigatorScreenParams<AppTabNavigatorParamList>;
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
            initialRouteName="AppTabNavigator">
            <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
