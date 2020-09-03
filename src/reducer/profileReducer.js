import {GET_PROFILE} from "../action"

const INITIAL_STATE = {
  profile: []
}

const profileReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_PROFILE:
            console.log(action.payload)
            return{
                ...state,
                profile: action.payload}
        default:
            return state
    }
}

export default profileReducer