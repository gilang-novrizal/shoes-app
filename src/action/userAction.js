import Axios from 'axios'
import {LOGIN, URL, LOGIN_START, LOGIN_END, REGISTER, REGISTER_START, REGISTER_END, REGISTER_ERROR, LOGIN_ERROR, KEEP_LOGIN_START, KEEP_LOGIN_END, KEEP_LOGIN, LOG_OUT} from "./helpers"
import AsyncStorage from '@react-native-community/async-storage';

export const loginAction = (body)=>{
    return async (dispatch)=>{
        try {
            dispatch({type: LOGIN_START})

            console.log(body)
            const res = await Axios.post(URL + "/api/login", body)
            console.log(res.data)
            await AsyncStorage.setItem("token", res.data.token)
            await AsyncStorage.setItem("id", res.data.user_id.toString())
            dispatch({type: LOGIN, payload: res.data})

            dispatch({type: LOGIN_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
            dispatch({type: LOGIN_ERROR, payload: error.response.data})
        }
    }
}

export const keepLogin = ()=>{
    return async(dispatch)=>{
        try {
            dispatch({type: KEEP_LOGIN_START})

            const token = await AsyncStorage.getItem("token")
            if(!token){
                dispatch({type: KEEP_LOGIN_END})
                return
            }

            const res = await Axios.post(URL + "/api/keeplogin", {token})
            dispatch({type: KEEP_LOGIN, payload: res.data})

            dispatch({type: KEEP_LOGIN_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
            dispatch({type: KEEP_LOGIN_END})
        }
    }
}

export const registerAction = (body)=>{
    return async (dispatch)=>{
        try {
            dispatch({type: REGISTER_START})

            
            const res = await Axios.post(URL + "/api/register", body)
            console.log(res.data)
            await AsyncStorage.setItem("token", res.data.token)
            await AsyncStorage.setItem("id", res.data.user_id.toString())
            dispatch({type: REGISTER, payload: res.data})

            dispatch({type: REGISTER_END})
        } catch (error) {
            console.log(error.response? error.response.data : error)
            dispatch({type: REGISTER_ERROR, payload: error.response.data})
        }
    }
}

export const logoutAction =()=>{
    return async (dispatch)=>{
        try {
            await AsyncStorage.clear()
            dispatch({type: LOG_OUT})
        } catch (error) {
            console.log(error)
        }
    }
}