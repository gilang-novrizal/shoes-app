import Axios from 'axios'
import {GET_PRODUCT, GET_CAROUSEL, URL} from './helpers'

// get product
export const getProducts = ()=>{
    return async(dispatch) =>{
        try {
            const res = await Axios.get(URL + '/api/produk')
            dispatch({ type: GET_PRODUCT, payload: res.data})
        } catch (error) {
            console.log(error.response ? error.response.data : error)
        }
    }
}

// get carousel
export const getCarousel = ()=>{
    return async(dispatch) =>{
        try {
            const res = await Axios.get(URL + "/api/carousel")
            dispatch({ type: GET_CAROUSEL, payload: res.data})
        } catch (error) {
            console.log(error.response ? error.response.data : error)
        }
    }
}