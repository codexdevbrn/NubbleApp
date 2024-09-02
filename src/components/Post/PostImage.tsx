import React from 'react';
import {Dimensions, Image as RNImage} from 'react-native';

interface PostImageProps {
    src: string;
}

export function PostImage({src}: PostImageProps) {
    return (
        <RNImage
            source={{uri: src}}
            resizeMode="cover"
            style={{
                width: Dimensions.get('screen').width,
                height: 300,
            }}
        />
    );
}
