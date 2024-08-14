import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ForgotPassword} from '../screens/auth/ForgotPassword/ForgotPassword';
import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';
import {SuccessScreen} from '../screens/auth/SuccessScreen/SuccessScreen';
import {SuccessProps} from '../screens/auth/SuccessScreen/SuccessScreenPresets';

export type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen: SuccessProps;
    ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
    const screenOptions = {
        headerShown: false,
        fullScreenGestureEnabled: true,
    };
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
