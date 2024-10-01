import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
    const [error, setError] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [postList, setPostList] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    async function fetchInitialPage() {
        try {
            setError(null);
            setLoading(true);
            const {data, meta} = await postService.getList(1);
            setPostList(data);
            if (meta.hasNextPage) {
                setPage(2);
                setHasNextPage(true);
            } else {
                setHasNextPage(false);
            }
        } catch (er) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function fetchNextPage() {
        if (loading || !hasNextPage) {
            return;
        }
        try {
            setError(null);
            setLoading(true);
            const {data, meta} = await postService.getList(page);
            setPostList(prev => [...prev, ...data]);
            if (meta.hasNextPage) {
                setPage(prev => prev + 1);
            } else {
                setHasNextPage(false);
            }
        } catch (er) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInitialPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        postList,
        error,
        loading,
        refresh: fetchInitialPage,
        fetchNextPage,
    };
}
