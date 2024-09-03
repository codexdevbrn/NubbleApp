import React, {useState} from 'react';

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
    return (
        <Box {...$boxActionProps}>
            <PostActionsItem
                commentCount={commentCount}
                reactionCount={reactionCount}
                favoriteCount={favoriteCount}
            />
        </Box>
    );
}

function PostActionsItem({
    reactionCount,
    commentCount,
    favoriteCount,
}: PostActionsProps) {
    const [isHeartFocused, setIsHeartFocused] = useState(false);
    const [isFavoriteFocused, setIsFavoriteFocused] = useState(false);
    const [thisReactionCount, setThisReactionCount] = useState(reactionCount);
    const [thisFavoriteCount, setThisFavoriteCount] = useState(favoriteCount);

    function handleSubmitHeart() {
        setIsHeartFocused(isHeartFocused ? false : true);
        setThisReactionCount(prevReaction =>
            reactionCount >= prevReaction ? prevReaction + 1 : prevReaction - 1,
        );
    }
    function handleSubmitFavorite() {
        setIsFavoriteFocused(isFavoriteFocused ? false : true);
        setThisFavoriteCount(prevReaction =>
            favoriteCount >= prevReaction ? prevReaction + 1 : prevReaction - 1,
        );
    }
    return (
        <>
            <Box {...$boxProps}>
                <Icon
                    onPress={handleSubmitHeart}
                    name={isHeartFocused ? 'heartFill' : 'heart'}
                    color={isHeartFocused ? 'error' : 'backgroundContrast'}
                />
                <Text bold {...$textStyleProps}>
                    {thisReactionCount > 0 && thisReactionCount}
                </Text>
            </Box>
            <Box {...$itemBoxProps}>
                <Icon name="comment" color="backgroundContrast" />
                <Text bold {...$textStyleProps}>
                    {commentCount > 0 && commentCount}
                </Text>
            </Box>
            <Box {...$itemBoxProps}>
                <Icon
                    onPress={handleSubmitFavorite}
                    name={isFavoriteFocused ? 'bookMarkFill' : 'bookMark'}
                    color={isFavoriteFocused ? 'primary' : 'backgroundContrast'}
                />
                <Text bold {...$textStyleProps}>
                    {thisFavoriteCount > 0 && thisFavoriteCount}
                </Text>
            </Box>
        </>
    );
}

const $boxActionProps: BoxProps = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    mt: 's16',
};
const $boxProps: BoxProps = {
    flexDirection: 'row',
    alignItems: 'center',
    ml: 's24',
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
