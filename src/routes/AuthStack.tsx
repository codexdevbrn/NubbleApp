import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    ForgotPassword,
    LoginScreen,
    SignUpScreen,
    SuccessProps,
    SuccessScreen,
} from '@screens/index';

export type AuthStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen: SuccessProps;
    ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
    const screenOptions = {
        headerShown: false,
        fullScreenGestureEnabled: true,
    };
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    );
}
