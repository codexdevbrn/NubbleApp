import React from 'react';
import {Dimensions, Image, ImageProps} from 'react-native';

import {Box, BoxProps, Text} from '@components/index';

interface PostHeaderProps {
    profileURL: string;
    author: string;
}

export function PostHeader({profileURL, author}: PostHeaderProps) {
    return (
        <Box {...$boxWrapper}>
            <Image {...$imageProps} source={{uri: profileURL}} />
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
    ml: 's24',
    width: Dimensions.get('screen').width,
};
const $imageProps: ImageProps = {
    style: {
        borderRadius: 14,
        width: 32,
        height: 32,
    },
    source: 0,
};
