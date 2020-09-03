import Axios from 'axios'
import {GET_PROFILE, URL} from "./helpers"
import AsyncStorage from '@react-native-community/async-storage';

export const getProfile = (body)=>{
    return async(dispatch)=>{
        try {
            const Id = await AsyncStorage.getItem("id")
            console.log(Id)
            const res = await Axios.get(URL + "/api/profile/get/" +  Id)
            console.log(res.data)
            dispatch({type: GET_PROFILE, payload: res.data})
        } catch (error) {
            console.log(error)
        }
    }
}