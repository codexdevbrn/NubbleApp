import React from 'react';

import {Icon, IconName, Text} from '@components/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    FavoritesScreen,
    HomeScreen,
    MyProfileScreen,
    NewPostScreen,
} from '@screens/index';
import {ThemeColors} from '@theme/*';

export type AppTabNavigatorParamList = {
    HomeScreen: undefined;
    NewPostScreen: undefined;
    FavoritesScreen: undefined;
    MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabNavigatorParamList>();

function getIconType(
    routeName: string,
    color: ThemeColors = 'primary',
    isFocused = false,
) {
    let iconName: IconName = 'comment';
    let iconColor = color;

    if (routeName === 'HomeScreen') {
        isFocused ? (iconName = 'homeFill') : (iconName = 'home');
    } else if (routeName === 'NewPostScreen') {
        iconName = 'newPost';
    } else if (routeName === 'FavoritesScreen') {
        isFocused ? (iconName = 'bookMarkFill') : (iconName = 'bookMark');
    } else if (routeName === 'MyProfileScreen') {
        isFocused ? (iconName = 'profileFill') : (iconName = 'profile');
    }

    return <Icon name={iconName} color={iconColor} />;
}

function getLabelType(routeName: string, color: ThemeColors = 'primary') {
    let textLabel;
    let textLabelColor = color;

    if (routeName === 'HomeScreen') {
        textLabel = 'Inicío';
    } else if (routeName === 'NewPostScreen') {
        textLabel = 'Novo Post';
    } else if (routeName === 'FavoritesScreen') {
        textLabel = 'Favoritos';
    } else if (routeName === 'MyProfileScreen') {
        textLabel = 'Meu Perfil';
    }

    return (
        <Text preset="paragraphCaption" semiBold color={textLabelColor}>
            {textLabel}
        </Text>
    );
}

export function AppTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    return getIconType(
                        route.name,
                        focused ? 'primary' : 'backgroundContrast',
                        focused,
                    );
                },
            })}>
            <Tab.Screen
                options={({route}) => ({
                    tabBarLabel: ({focused}) => {
                        return getLabelType(
                            route.name,
                            focused ? 'primary' : 'backgroundContrast',
                        );
                    },
                })}
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                options={({route}) => ({
                    tabBarLabel: ({focused}) => {
                        return getLabelType(
                            route.name,
                            focused ? 'primary' : 'backgroundContrast',
                        );
                    },
                })}
                name="NewPostScreen"
                component={NewPostScreen}
            />
            <Tab.Screen
                options={({route}) => ({
                    tabBarLabel: ({focused}) => {
                        return getLabelType(
                            route.name,
                            focused ? 'primary' : 'backgroundContrast',
                        );
                    },
                })}
                name="FavoritesScreen"
                component={FavoritesScreen}
            />
            <Tab.Screen
                options={({route}) => ({
                    tabBarLabel: ({focused}) => {
                        return getLabelType(
                            route.name,
                            focused ? 'primary' : 'backgroundContrast',
                        );
                    },
                })}
                name="MyProfileScreen"
                component={MyProfileScreen}
            />
        </Tab.Navigator>
    );
}
