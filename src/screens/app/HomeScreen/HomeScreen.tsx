import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Screen, PostItem} from '@components/index';
import {Post, postService} from '@domain/index';
import {AppTabScreenProps} from '@routes/index';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
    const [postList, setPostList] = useState<Post[]>([]);
    useEffect(() => {
        postService.getList().then(list => setPostList(list));
    });

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return <PostItem item={item} />;
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
