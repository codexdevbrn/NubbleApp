import React from 'react';

import {Box, Text, Icon, BoxProps, TextProps} from '@components/index';

interface PostActionsProps {
    reactionCount: number;
    commentCount: number;
    favoriteCount: number;
}

export function PostActions({
    reactionCount,
    commentCount,
    favoriteCount,
}: PostActionsProps) {
    function handleSubmit() {
        return;
    }
    //TODO: make a hook form to actions
    return (
        <Box {...$boxWrapper}>
            <Box flexDirection="row" alignItems="center">
                <Icon onPress={handleSubmit} name="heartFill" color="error" />
                <Text {...$textStyleProps}>{reactionCount}</Text>
            </Box>
            <Box {...$itemBoxProps}>
                <Icon onPress={handleSubmit} name="comment" />
                <Text {...$textStyleProps}>{commentCount}</Text>
            </Box>
            <Box {...$itemBoxProps}>
                <Icon onPress={handleSubmit} name="bookMark" />
                <Text {...$textStyleProps}>{favoriteCount}</Text>
            </Box>
        </Box>
    );
}

const $boxWrapper: BoxProps = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    ml: 's28',
    mt: 's16',
};

const $itemBoxProps: BoxProps = {
    flexDirection: 'row',
    alignItems: 'center',
    ml: 's24',
};

const $textStyleProps: TextProps = {
    preset: 'paragraphMedium',
    style: {
        flexDirection: 'row',
    },
    ml: 's4',
};
