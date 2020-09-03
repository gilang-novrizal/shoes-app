import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "../screen/home"
import ProductDetails from "../screen/productDetails"

const Stack = createStackNavigator()

const ProductNav = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ProductDetails" 
            component={ProductDetails}
            options={({route})=>{
                return{title : route.params.product.name}
            }}/>
        </Stack.Navigator>
    )
}

export default ProductNav