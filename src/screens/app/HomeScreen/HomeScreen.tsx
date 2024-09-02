import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {
    Screen,
    Text,
    PostImage,
    PostHeader,
    Box,
    PostActions,
    PostBottom,
} from '@components/index';
import {Post, postService} from '@domain/index';
import {AppTabScreenProps} from '@routes/index';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
    const [postList, setPostList] = useState<Post[]>([]);
    useEffect(() => {
        postService.getList().then(list => setPostList(list));
    });

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return (
            <>
                <Box key={item.id} mb="s24">
                    <PostHeader
                        imageURL={item.author.profileURL}
                        author={item.author.userName}
                    />
                    <PostImage src={item.imageURL} />
                    <PostActions
                        reactionCount={item.reactionCount}
                        commentCount={item.commentCount}
                        favoriteCount={item.favoriteCount}
                    />
                    <PostBottom
                        userName={item.author.userName}
                        text={item.text}
                    />
                </Box>
            </>
        );
    }

    return (
        <Screen flatList>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </Screen>
    );
}
