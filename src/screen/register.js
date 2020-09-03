import React from "react"
import {useSelector, useDispatch} from "react-redux"
import { View, Text, StyleSheet } from "react-native"

import TextInput from "react-native-paper/lib/commonjs/components/TextInput/TextInput"
import Button from "react-native-paper/lib/commonjs/components/Button"

import {registerAction} from "../action"


const Register = ({navigation})=>{
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confpassword, setConfPassword] = React.useState("")

    const {user_id, loading, error} = useSelector((state)=>{
        return{
            user_id: state.userReducer.user_id,
            loading: state.userReducer.loadingregis,
            error: state.userReducer.errorregis
        }
    })

    const dispatch = useDispatch()
    handleRegister = ()=>{
        const user = {username, email, password, confpassword}
        console.log("data", user)
        
        dispatch(registerAction(user))

        setUsername("")
        setEmail("")
        setPassword("")
        setConfPassword("")
    }

    React.useEffect(()=>{
        if(user_id){
            navigation.navigate("Home")
        }
    })

    return(
        <View style={styles.root}>
            <Text>Register</Text>
            <TextInput
                mode="outlined"
                label="Username"
                value={username}
                onChangeText={(value)=>setUsername(value)}/>
            <TextInput
                mode="outlined"
                label="Email"
                value={email}
                onChangeText={(value)=>setEmail(value)}/>
            <TextInput
                mode="outlined"
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={(value)=>setPassword(value)}/>
            <TextInput
                mode="outlined"
                label="Confirm Password"
                value={confpassword}
                secureTextEntry
                onChangeText={(value)=>setConfPassword(value)}/>
            <Text>{error}</Text>
            <Button 
                style={styles.button}
                mode="contained"
                loading={loading}
                onPress={handleRegister}>
                Register
            </Button>
            <Button
                 style={styles.button}
                mode="contained"
                onPress={()=> navigation.navigate("Login")}
            >
                Login
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        flex: 1,
        justifyContent: "center",
    },
    button:{
        marginVertical: 10
    }
})

export default Register;