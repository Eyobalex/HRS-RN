import {ACTIONTYPES as A} from '../ActionTypes';

export const users = (state={users:[], isLoading:false, error:null}, action) => {
    switch (action.type) {
        case A.ADD_USERS:
            return {...state, isLoading: false, error: null, users:action.payload};
        case A.USERS_LOADING:
            return {...state, users: [], isLoading: true, error: null};
        case A.USERS_FAILED:
            return {...state, users: [], isLoading: false, error: action.payload}
        default:
            return state;
    }
}
