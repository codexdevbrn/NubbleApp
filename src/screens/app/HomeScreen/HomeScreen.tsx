import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Screen, PostItem} from '@components/index';
import {Post, postService} from '@domain/index';
import {AppTabScreenProps} from '@routes/index';
import {HomeHeader} from '@screens/index';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
    const [postList, setPostList] = useState<Post[]>([]);
    useEffect(() => {
        postService.getList().then(list => setPostList(list));
    });

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return <PostItem item={item} />;
    }

    return (
        <Screen resetPadding>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListHeaderComponent={<HomeHeader />}
            />
        </Screen>
    );
}
