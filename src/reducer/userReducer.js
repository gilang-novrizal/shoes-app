import {LOGIN, LOGIN_START, LOGIN_END, LOGIN_ERROR, REGISTER, REGISTER_START, REGISTER_END, REGISTER_ERROR, KEEP_LOGIN_START, KEEP_LOGIN_END, KEEP_LOGIN, LOG_OUT} from "../action"

const INTIAL_STATE ={
    user_id: null,
    username: "",
    email: "",
    role: "",
    status: null,
    token: "",
    loading: false,
    error: false,
    loadingregis: false,
    errorregis: false,
    authloading: false
}

const userReducer = (state = INTIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN:
            console.log(action.payload)
            return{...state,
                user_id: action.payload.user_id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                status: action.payload.status,
                token: action.payload.token
            }
        case LOGIN_START:
            return{
                ...state,
                loading: true
            }
        case LOGIN_END:
            return{
                ...state,
                loading: false            
            }
        case LOGIN_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload            
            }
        case REGISTER:
            return{
                ...state,
                user_id: action.payload.user_id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                status: action.payload.status,
                token: action.payload.token
            }
            case REGISTER_START:
                return{
                    ...state,
                    loadingregis: true
                }
            case REGISTER_END:
                return{
                    ...state,
                    loadingregis: false            
                }
            case REGISTER_ERROR:
                return{
                    ...state,
                    loadingregis: false,
                    error: action.payload            
                }
            case KEEP_LOGIN_START:
                return { ...state, authloading: true}
            case KEEP_LOGIN_END:
                return {...state, authloading: false}
            case KEEP_LOGIN:
                return{...state,
                    user_id: action.payload.user_id,
                    username: action.payload.username,
                    email: action.payload.email,
                    role: action.payload.role,
                    status: action.payload.status,
                    token: action.payload.token
                }
            case LOG_OUT:
                return INTIAL_STATE
        default:
            return state
    }
}
export default userReducer

