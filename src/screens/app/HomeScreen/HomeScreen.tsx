import React from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {Screen, PostItem} from '@components/index';
import {Post, usePostList} from '@domain/index';
import {AppTabScreenProps} from '@routes/index';
import {HomeEmpty, HomeHeader} from '@screens/index';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
    const {error, loading, postList, refresh, fetchNextPage} = usePostList();

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return <PostItem item={item} />;
    }

    return (
        <Screen resetPadding>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={item => item.id}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.1}
                renderItem={renderItem}
                refreshing={loading}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh} />
                }
                contentContainerStyle={{
                    flex: postList.length === 0 ? 1 : undefined,
                }}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={
                    <HomeEmpty loading={loading} er={error} refetch={refresh} />
                }
            />
        </Screen>
    );
}
