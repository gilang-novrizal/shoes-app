import {combineReducers} from 'redux'

import productReducer from "./productReducer"
import userReducer from "./userReducer"
import profileReducer from "./profileReducer"
import cartReducer from "./cartReducer"

const allReducers = combineReducers({productReducer, userReducer, profileReducer, cartReducer})

export default allReducers