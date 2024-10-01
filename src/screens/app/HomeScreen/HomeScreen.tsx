import React, {memo} from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    RefreshControl,
    ViewStyle,
} from 'react-native';

import {Screen, PostItem} from '@components/index';
import {Post, usePostList} from '@domain/index';
import {useScrollToTop} from '@react-navigation/native';
import {AppTabScreenProps} from '@routes/index';
import {HomeEmpty, HomeHeader} from '@screens/index';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
    const {error, loading, postList, refresh, fetchNextPage} = usePostList();

    const flatListRef = React.useRef<FlatList<Post>>(null);
    useScrollToTop(flatListRef);

    const ListItem = memo(({item}: Omit<ListRenderItemInfo<Post>, "index" | "separators">) => {
        return <PostItem item={item} />;
    });

    const renderItem = ({item}: ListRenderItemInfo<Post>) => <ListItem item={item} />;

    const $flexProps: ViewStyle = {
        flex: postList.length === 0 ? 1 : undefined,
    };

    return (
        <Screen resetPadding>
            <FlatList
                ref={flatListRef}
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
                contentContainerStyle={$flexProps}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={
                    <HomeEmpty loading={loading} er={error} refetch={refresh} />
                }
            />
        </Screen>
    );
}
