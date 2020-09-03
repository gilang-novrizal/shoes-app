import Axios from 'axios'
import {GET_CART, CART_END, CART_START, URL} from "./helpers"

export const getCartData = (id)=>{
    return async(dispatch)=>{
        try {
            dispatch({type: CART_START})

            const res = await Axios.get(URL + "/api/cart/get/" + id)
            
            dispatch({type: GET_CART, payload: res.data})

            dispatch({type: CART_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}


export const editCart = (id, body)=>{
    return async(dispatch)=>{
        try {
            dispatch({type: CART_START})

            const edit = await Axios.patch(URL + "/api/cart/edit", body)
            const res = await Axios.get(URL + "/api/cart/get/" + id)
            dispatch({type: GET_CART, payload: res.data})
            
            dispatch({type: CART_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}

export const deleteCart = (id, product_id, order_number)=>{
    return async(dispatch)=>{
        try {
            dispatch({type: CART_START})

            const del = await Axios.delete(URL + "/api/cart/delete/" + order_number + "/" + product_id)
            const res = await Axios.get(URL + "/api/cart/get/" + id)
            dispatch({type: GET_CART, payload: res.data})
            
            dispatch({type: CART_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}

export const addToCart = (id, body)=>{
    return async(dispatch)=>{
        try {
            Axios.post(URL + "/api/cart/add", body)
            const res = await Axios.get(URL + "/api/cart/get/" + id)
            dispatch({type: GET_CART, payload: res.data})
        } catch (error) {
            console.log(error.response? error.response.data : error)
        }
    }
}