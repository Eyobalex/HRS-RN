import {ACTIONTYPES as A} from '../ActionTypes';

export const listings = (state={listings:[], isLoading:false, error:null}, action) => {
    switch (action.type) {
        case A.ADD_LISTINGS:
            return {...state, isLoading: false, error: null, listings:action.payload};
        case A.LISTINGS_LOADING:
            return {...state, listings: [], isLoading: true, error: null};
        case A.LISTINGS_FAILED:
            return {...state, listings: [], isLoading: false, error: action.payload}
        default:
            return state;
    }

}
