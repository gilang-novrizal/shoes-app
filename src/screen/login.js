import React from 'react'
import {connect} from 'react-redux'
import {View, StyleSheet} from 'react-native'
import {Text, TextInput, Button} from 'react-native-paper'

import {loginAction} from "../action"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         };
    }

    componentDidUpdate(){
        if(this.props.user_id){
            this.props.navigation.navigate("Home")
        }
    }

    handleLogin = ()=>{
        console.log("username : ", this.state.username)
        console.log("password : ", this.state.password)
        this.props.loginAction(this.state)
        this.setState({username: "", password: ""})
    }
    render() {
        const {loading, error} = this.props
        return (
            <View style={styles.root}>
                <Text>Login Page</Text>
                <TextInput
                    mode="outlined"
                    label="Username or email"
                    value={this.state.username}
                    onChangeText={(value)=> this.setState({username : value})}/>
                <TextInput
                    mode="outlined"
                    label="Password"
                    value={this.state.password}
                    onChangeText={(value)=> this.setState({password : value})}
                    secureTextEntry/>
                <Text>{error}</Text>
                <Button
                    mode="contained"
                    loading={loading}
                    style={styles.button}
                    onPress={this.handleLogin}>
                     Login
                </Button>
                <Button
                    mode="text"
                    color="#0984e3"
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Register')}>
                    Sign Up
                </Button>
            </View>
        );
    }
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

const mapStateToProps = (state)=>{
   return{
       user_id: state.userReducer.user_id,
       loading: state.userReducer.loading,
       error: state.userReducer.error
   } 
}

export default connect(mapStateToProps, {loginAction})(Login)