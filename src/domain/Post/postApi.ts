import {PageAPI} from '@api/index';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
    let response = await fetch('http://127.0.0.1:3333/user/post', {
        method: 'GET',
        headers: {
            Authorization:
                'Bearer OQ.qodR1CiQk3w3o9_Pf8Is8C4X8277FMP67lRt1x7LtgMBcDu-jDXCWU3CA_uS',
        },
    });

    let data: PageAPI<PostAPI> = await response.json();
    console.log(data);

    return data;
}

export const postApi = {
    getList,
};
