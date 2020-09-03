import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'


import Account from "../screen/account"
import Cart from "../screen/cart"
import ProductNav from "./productNav"


const Wallet = ()=>{
    return(
        <View>
            <Text>Wallet</Text>
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

            if (route.name === 'Product-Nav') {
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
        <Tab.Screen name="Product-Nav" component={ProductNav}/>
        <Tab.Screen name="Cart" component={Cart}/>
        <Tab.Screen name="Wallet" component={Wallet}/>
        <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>    
    )
}

export default HomeNavigation