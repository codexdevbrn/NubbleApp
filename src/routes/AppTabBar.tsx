import React from 'react';

import {
    Box,
    BoxProps,
    Icon,
    TextProps,
    TouchableOpacityBox,
    TouchableOpacityBoxProps,
} from '@components/index';
import {Text} from '@components/index';
import {useAppSafeArea} from '@hooks/index';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {$shadowProps} from '@theme/index';

import {mapScreenToProps} from './AppTabBarProps';
import {AppTabNavigatorParamList} from './AppTabNavigator';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    const {bottom} = useAppSafeArea();
    return (
        <Box style={[{paddingBottom: bottom}, $shadowProps]} {...$boxWrapper}>
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
                        {...$itemWrapper}
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
                            {...$label}
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

const $label: TextProps = {
    mt: 's4',
    preset: 'paragraphCaption',
    semiBold: true,
};

const $itemWrapper: TouchableOpacityBoxProps = {
    activeOpacity: 1,
    alignItems: 'center',
    accessibilityRole: 'button',
};

const $boxWrapper: BoxProps = {
    backgroundColor: 'background',
    pt: 's12',
    flexDirection: 'row',
};
