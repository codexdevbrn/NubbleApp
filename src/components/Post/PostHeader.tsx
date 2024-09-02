import React from 'react';
import {Image, ImageProps} from 'react-native';

import {Box, BoxProps, Text} from '@components/index';

interface PostHeaderProps {
    imageURL: string;
    author: string;
}

export function PostHeader({imageURL, author}: PostHeaderProps) {
    return (
        <Box {...$boxWrapper}>
            <Image {...$imageProps} source={{uri: imageURL}} />
            <Box paddingLeft="s8">
                <Text preset="paragraphCaption">{author}</Text>
            </Box>
        </Box>
    );
}

const $boxWrapper: BoxProps = {
    flexDirection: 'row',
    alignItems: 'center',
    mb: 's16',
    width: 100,
};
const $imageProps: ImageProps = {
    style: {
        borderRadius: 50,
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    source: 0,
};
