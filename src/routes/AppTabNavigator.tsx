import React from 'react';

import {
    BottomTabBarProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
    FavoritesScreen,
    HomeScreen,
    MyProfileScreen,
    NewPostScreen,
} from '@screens/index';

import {AppTabBar} from './AppTabBar';

export type AppTabNavigatorParamList = {
    HomeScreen: undefined;
    NewPostScreen: undefined;
    FavoritesScreen: undefined;
    MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigatorParamList>();

export function AppTabNavigator() {
    function renderTabBar(props: BottomTabBarProps) {
        return <AppTabBar {...props} />;
    }
    return (
        <Tab.Navigator
            tabBar={renderTabBar}
            initialRouteName="HomeScreen"
            backBehavior="history"
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
            <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
        </Tab.Navigator>
    );
}
