import axios from 'axios';
const config = require('../config');

// import {
//     GET_ALL_POSTS,
//     GET_SCANRESULTS_COUNT,
//     GET_SCANRESULTS_DETAILS,
//     POST_SCANRESULT,
//     PUT_SCANRESULT,
//     DELETE_SCANRESULT
// } from ".";

export function loadAllPostResult(queryParams) {
    return dispatch => {
        return axios
            .get(config.node + 'posts', {
                params: queryParams,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(changePostResults(response.data));
            });
    };
}

export function changePostResults(posts) {
    return {
        type: 'GET_ALL_POSTS',
        posts: posts
    };
}

export function loadAllUserResult(queryParams) {
    return dispatch => {
        return axios
            .get(config.node + 'users', {
                params: queryParams,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(changeUserResults(response.data));
            });
    };
}

export function changeUserResults(users) {
    return {
        type: 'GET_ALL_USERS',
        users: users
    };
}
