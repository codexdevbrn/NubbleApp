import {REACT_APP_BASE_URL, REACT_APP_BEARER} from '@env';
import axios from 'axios';

export const api = axios.create({
    baseURL: `${REACT_APP_BASE_URL}`,
    headers: {
        Authorization: `Bearer ${REACT_APP_BEARER}`,
    },
});
