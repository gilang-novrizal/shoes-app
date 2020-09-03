import {CART_START, GET_CART, CART_END} from "../action"

const INITIAL_STATE = {
    cart: [],
    loading: false,
    total : 0
}

const cartReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case CART_START:
            return {...state, loading: true}
        case CART_END:
            return {...state, loading: false}
        case GET_CART:
            return {...state, cart: action.payload.result, total: action.payload.total.TotalCart }
        default:
            return state
    }
}

export default cartReducer