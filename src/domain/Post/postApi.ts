import {PageAPI} from '@api/index';
import {REACT_APP_BASE_URL, REACT_APP_BEARER} from '@env';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
    let response = await fetch(`${REACT_APP_BASE_URL}/user/post`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${REACT_APP_BEARER}`,
        },
    });

    let data: PageAPI<PostAPI> = await response.json();
    console.log(data);

    return data;
}

export const postApi = {
    getList,
};
