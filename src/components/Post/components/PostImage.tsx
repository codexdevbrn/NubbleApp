import React from 'react';
import {Dimensions, ImageProps, Image as RNImage} from 'react-native';

interface PostImageProps {
    imageURL: string;
}

export function PostImage({imageURL}: PostImageProps) {
    return (
        <RNImage {...$imageProps} source={{uri: imageURL}} resizeMode="cover" />
    );
}

const $imageProps: ImageProps = {
    style: {
        paddingHorizontal: 0,
        width: Dimensions.get('screen').width,
        height: 260,
    },
    source: 0,
};
