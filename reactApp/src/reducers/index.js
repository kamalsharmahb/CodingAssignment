let defaultState = {
    posts: [],
    users: []
};

const mainReducer = (state = defaultState, action) => {
    if (action.type === 'GET_ALL_POSTS') {
        return {
            ...state,
            posts: action.posts
        };
    } else if (action.type === 'GET_ALL_USERS') {
        return {
            ...state,
            users: action.users
        };
    } else {
        return {
            ...state
        };
    }
};

export default mainReducer;
