import {listings, users} from './reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';


export const configureStore = () => {
    return createStore(combineReducers({
        listings:listings,
        users:users
    }), applyMiddleware(thunk))
}
