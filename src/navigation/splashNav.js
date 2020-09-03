import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'

import Login from "../screen/login"
import Register from "../screen/register"
import SplashScreen from "../screen/splashScreen"

import HomeNavigation from "./homeNav"
import { keepLogin } from '../action'
const Stack = createStackNavigator()

const SplashNavigation = ()=>{

    const {user_id, loading} = useSelector((state)=>{
        return{
            user_id: state.userReducer.user_id,
            loading: state.userReducer.authloading
        }
    })

    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(keepLogin())
    }, [])

    if(loading){
        return <SplashScreen/>
    }
    return(
        <Stack.Navigator headerMode="none">
            {/* <Stack.Screen name="Home" component={HomeNavigation}/> */}
            {user_id?(
                <Stack.Screen name="Home" component={HomeNavigation}/>
            ):(
                <>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                </>
            )}
          
            
        </Stack.Navigator>
    )
}

export default SplashNavigation