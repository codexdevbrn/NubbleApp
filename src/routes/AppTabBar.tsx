import React from 'react';

import {Box, Icon, TouchableOpacityBox} from '@components/index';
import {Text} from '@components/index';
import {useAppSafeArea} from '@hooks/index';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {$shadowProps} from '@theme/index';

import {mapScreenToProps} from './AppTabBarProps';
import {AppTabNavigatorParamList} from './AppTabNavigator';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    const {bottom} = useAppSafeArea();
    return (
        <Box
            style={[{paddingBottom: bottom}, $shadowProps]}
            backgroundColor="background"
            pt="s12"
            flexDirection="row">
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const isFocused = state.index === index;

                const tabItem =
                    mapScreenToProps[
                        route.name as keyof AppTabNavigatorParamList
                    ];

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacityBox
                        key={route.key}
                        activeOpacity={1}
                        alignItems="center"
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{flex: 1}}>
                        <Icon
                            color={isFocused ? 'primary' : 'backgroundContrast'}
                            name={
                                isFocused
                                    ? tabItem.icon.isFocused
                                    : tabItem.icon.unfocused
                            }
                        />
                        <Text
                            mt="s4"
                            preset="paragraphCaption"
                            semiBold
                            color={
                                isFocused ? 'primary' : 'backgroundContrast'
                            }>
                            {tabItem.label}
                        </Text>
                    </TouchableOpacityBox>
                );
            })}
        </Box>
    );
}
