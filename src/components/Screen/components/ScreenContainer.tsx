import React from 'react';
import {Dimensions, ScrollView, View, ViewStyle} from 'react-native';

interface Props {
    children: React.ReactNode;
    backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
    return (
        <ScrollView
            {...$viewProps}
            keyboardShouldPersistTaps="handled"
            style={{backgroundColor}}>
            {children}
        </ScrollView>
    );
}

export function ViewContainer({children, backgroundColor}: Props) {
    return (
        <View {...$viewProps} style={{backgroundColor}}>
            {children}
        </View>
    );
}

const $viewProps: ViewStyle = {
    flex: 1,
    width: Dimensions.get('screen').width,
};
