import {combineReducers} from 'redux'

import productReducer from "./productReducer"
import userReducer from "./userReducer"
import profileReducer from "./profileReducer"

const allReducers = combineReducers({productReducer, userReducer, profileReducer})

export default allReducers