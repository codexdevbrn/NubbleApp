import React from 'react';
import {Dimensions, Image, ImageProps} from 'react-native';

import {Box, BoxProps, Text} from '@components/index';

interface PostHeaderProps {
    imageURL: string;
    author: string;
}

export function PostHeader({imageURL, author}: PostHeaderProps) {
    return (
        <Box {...$boxWrapper}>
            <Image {...$imageProps} source={{uri: imageURL}} />
            <Box paddingLeft="s12">
                <Text preset="paragraphMedium">{author}</Text>
            </Box>
        </Box>
    );
}

const $boxWrapper: BoxProps = {
    flexDirection: 'row',
    alignItems: 'center',
    mb: 's16',
    width: Dimensions.get('screen').width,
};
const $imageProps: ImageProps = {
    style: {
        borderRadius: 50,
        width: 32,
        height: 32,
        marginLeft: 24,
    },
    source: 0,
};
