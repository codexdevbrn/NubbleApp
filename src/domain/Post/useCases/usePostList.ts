import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
    const [error, setError] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [postList, setPostList] = useState<Post[]>([]);
    const [page, setPage] = useState(1);

    async function fetchInitialPage() {
        try {
            setError(null);
            setLoading(true);
            const list = await postService.getList(1);
            setPostList(list);
            setPage(2);
        } catch (er) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function fetchNextPage() {
        if (loading) {
            return;
        }
        try {
            setError(null);
            setLoading(true);
            const list = await postService.getList(page);
            setPostList(prev => [...prev, ...list]);
            setPage(prev => prev + 1);
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
