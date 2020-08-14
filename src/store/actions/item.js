import * as actionTypes from './actionTypes';
import axios from '../../axios-order'

export const createInit = () => {
    return {
        type: actionTypes.CREATE_INIT
    };
};

export const createStart = () => {
    return {
        type: actionTypes.CREATE_START
    };
};

export const createSuccess = (id, itemData, token, userId) => {
    return {
        type: actionTypes.CREATE_SUCCESS,
        itemId: id,
        itemData: itemData,
        idToken: token,
        userId: userId
        
    };
};

export const createFail = (error) => {
    return {
        type: actionTypes.CREATE_FAIL,
        error: error
    };
};

// export const deleteItem = () => {
//         return {
//         type: actionTypes.CREATE_DELETE
//     };
// };



export const create = ( itemData, token) => {
    return dispatch => {
        dispatch(createStart());        
        axios.post( '/items.json?auth=' + token, itemData )
        .then(response => {
            dispatch(createSuccess(response.data.name, itemData, response.data.idToken, response.data.localId));
            })
        .catch(err => {
            dispatch(createFail(err.response.data.error));
        })
    
    };
};

export const fetchItemsSuccess = ( items ) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        items: items
    };
};

export const fetchItemsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ITEMS_FAIL,
        error: error
    };
};

export const fetchItemsStart = () => {
    return {
        type: actionTypes.FETCH_ITEMS_START
    };
};

export const fetchItems = (token, userId) => {
    return dispatch => {
        dispatch(fetchItemsStart());
        const queryParams = '?auth=' + token + '&createdBy="userId"&equalTo="' + userId + '"';
        axios.get( '/items.json' + queryParams)
            .then( res => {
                const fetchedItems = [];
                for ( let key in res.data ) {
                    fetchedItems.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchItemsSuccess(fetchedItems));
            } )
            .catch( err => {
                dispatch(fetchItemsFail(err));
            } );
    };
};