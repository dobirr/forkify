import axios from 'axios';
import {TIMEOUT_SEC} from './config';

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJSON = async function (url) {
    try {
        return await Promise.race([axios.get(url), timeout(TIMEOUT_SEC)]);
    } catch(err) {
        throw err;
    }
}