
import {FETCH_PRODUCTS} from '../types';

export const ReducerProduct = (state={},action ) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return {items:action.payload};
            default:
                return state;

    }

};