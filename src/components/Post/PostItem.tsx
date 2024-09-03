import React from 'react';

import {
    PostHeader,
    PostBottom,
    PostActions,
    PostImage,
    Box,
} from '@components/index';
import {Post} from '@domain/index';

interface Props {
    item: Post;
}

export function PostItem({item}: Props) {
    return (
        <>
            <>
                <Box key={item.id} mb="s24">
                    <PostHeader
                        profileURL={item.author.profileURL}
                        author={item.author.userName}
                    />
                    <PostImage imageURL={item.imageURL} />
                    <PostActions
                        reactionCount={item.reactionCount}
                        commentCount={item.commentCount}
                        favoriteCount={item.favoriteCount}
                    />
                    <PostBottom
                        comment
                        userName={item.author.userName}
                        text={item.text}
                    />
                </Box>
            </>
        </>
    );
}
