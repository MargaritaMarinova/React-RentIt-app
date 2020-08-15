import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    items: null,
    totalPrice: 0,
    error: false,
    building: false
};

const ITEM_PRICE = {
    item: 0.5
    
};

const addItemRent = ( state, action ) => {
    const updatedItem = { [action.itemName]: state.items[action.itemName] + 1 } //true
    const updatedItems = updateObject( state.items, updatedItem );
    const updatedState = {
        items: updatedItems,
        totalPrice: state.totalPrice + ITEM_PRICE[action.itemName],
        building: true
    }
    return updateObject( state, updatedState );
};

const removeItemRent = (state, action) => {
    const updatedItem = { [action.itemName]: state.items[action.itemName] - 1 }
    const updatedItems = updateObject( state.items, updatedItem );
    const updatedSt = {
        items: updatedItems,
        totalPrice: state.totalPrice - ITEM_PRICE[action.itemName],
        building: true
    }
    return updateObject( state, updatedSt );
};

const setItems = (state, action) => {
    return updateObject( state, {
        items: {},
        totalPrice: 0,
        error: false,
        building: false
    } );
};

const fetchItemsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_ITEM_RENT: return addItemRent( state, action );
        case actionTypes.REMOVE_ITEM_RENT: return removeItemRent(state, action);
        case actionTypes.SET_ITEMS: return setItems(state, action);    
        case actionTypes.FETCH_ITEMS_FAILED: return fetchItemsFailed(state, action);
        default: return state;
    }
};

export default reducer;