import {FETCH_PRODUCTS} from '../types';


export const FetchProducts = () => async(dispatch)=>{
    const res = await fetch("/api/Products");
    dispatch({
        type:FETCH_PRODUCTS,
        payload:res.data
    });
};