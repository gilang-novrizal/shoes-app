import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {View, Image, StyleSheet} from "react-native"
import {Text, Button, Avatar} from "react-native-paper"
import { getProfile, logoutAction } from "../action"
import AsyncStorage from "@react-native-community/async-storage"
import {Ava} from "../img"


const Account = () =>{
    const {user_id, profile} = useSelector((state)=>{
        return{
            user_id: state.userReducer.user_id,
            profile: state.profileReducer.profile
        }
    })

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getProfile())
    },[]
    )

    console.log(profile)
    return(
        <View style={styles.root}>
            <Text>Account Page</Text>
          
            {profile?
                (<View style={styles.imageContainer}>
                <Image source={Ava} style={styles.image}/>
            </View>):(<Avatar.Image size={24} source={{uri: profile.image}}/>)}
            
            <Text>{profile.address}</Text>
            <Text>{profile.phone}</Text>
            <Text>{profile.gender}</Text>
            <Button mode="contained" onPress={()=> dispatch(logoutAction())}>Logout</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        marginVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 130,
        height: 130,
    },
})

export default Account
