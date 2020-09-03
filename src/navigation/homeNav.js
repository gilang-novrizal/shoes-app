import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'

import Home from "../screen/home"
import Account from "../screen/account"


const Wallet = ()=>{
    return(
        <View>
            <Text>Wallet</Text>
        </View>
    )
}


const Cart = () =>{
    return(
        <View>
            <Text>Cart</Text>
        </View>
    )
}
const Tab = createBottomTabNavigator()

const HomeNavigation = ()=>{
    return(
    <Tab.Navigator
    screenOptions={({route})=>({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Wallet') {
                iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Account') {
                iconName = focused ? 'account' : 'account-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
        },
    })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Wallet" component={Wallet}/>
        <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>    
    )
}

export default HomeNavigation