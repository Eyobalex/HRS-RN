import {ACTIONTYPES as A} from './ActionTypes';
import {baseUrl} from '../constants/baseUrl';

export const fetchListings = () => (dispatch) =>{
    dispatch(listingsLoading());

    return (
        fetch(baseUrl + 'listings').
            then(response=>{
           if (response.ok){
               return response;
           }else {
               let e= new Error(`ERROR ${response.status}: ${response.statusText}`)
               e.response = response;
               throw e;
           }
        }, (error) => {
                throw new Error(`Error ${error.message}`)
        }). then(response => response.json()).
            then(listings => dispatch(addListings(listings))).
            catch(e=> dispatch(listingsFailed(e.message)))
    )
}

export const addListings =(listings) => ({
    type: A.ADD_LISTINGS,
    payload: listings
});
export const listingsFailed= e => ({
    type: A.LISTINGS_FAILED,
    payload: e
});
export const listingsLoading= () => ({
    type: A.LISTINGS_LOADING
});


export const fetchUsers = () => dispatch => {
    dispatch(usersLoading());

    return (
        fetch(baseUrl+'users').
            then(response => {
                if (response.ok){
                    return response;
                }else {
                    let e = new Error(`ERROR ${response.status} ${response.statusText}`)
                    e.response = response;
                    throw e;
                }
        }, (error) => {
                throw new Error(`ERROR ${error.message}`);
        }).then(response => response.json()).
            then(users => dispatch(addUsers(users))).
            catch(error => dispatch(usersFailed(error)))

    )
}

export const addUsers = users=>({
    type: A.ADD_USERS,
    payload: users
});
export const usersLoading = () => ({
    type: A.USERS_LOADING
});
export const usersFailed = e => ({
    type: A.USERS_FAILED,
    payload: e
})
