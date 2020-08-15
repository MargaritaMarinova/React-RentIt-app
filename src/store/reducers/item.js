import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    items: [],
    loading: false,
    created: false
};

const createInit = ( state, action ) => {
    return updateObject( state, { created: false } );
};

const createStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const createSuccess = ( state, action ) => {
    const newItem = updateObject( action.itemData, { id: action.itemId } );
    return updateObject( state, {
        loading: false,
        created: true,
        items: state.items.concat( newItem )
    } );
};

const createFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchItemsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchItemsSuccess = ( state, action ) => {
    return updateObject( state, {
        items: action.items,
        loading: false
    } );
};

const fetchItemsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CREATE_INIT: return createInit( state, action );
        case actionTypes.CREATE_START: return createStart( state, action );
        case actionTypes.CREATE_SUCCESS: return createSuccess( state, action )
        case actionTypes.CREATE_FAIL: return createFail( state, action );
        //case actionTypes.CREATE_DELETE: return createFail( state, action );
        case actionTypes.FETCH_ITEMS_START: return fetchItemsStart( state, action );
        case actionTypes.FETCH_ITEMS_SUCCESS: return fetchItemsSuccess( state, action );
        case actionTypes.FETCH_ITEMS_FAIL: return fetchItemsFail( state, action );
        default: return state;
    }
};

export default reducer;