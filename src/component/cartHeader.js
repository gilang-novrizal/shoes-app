import React from 'react'
import AppbarHeader from "react-native-paper/lib/commonjs/components/Appbar/AppbarHeader"
import AppbarContent from "react-native-paper/lib/commonjs/components/Appbar/AppbarContent"
import AppbarBackAction from "react-native-paper/lib/commonjs/components/Appbar/AppbarBackAction"
import AppbarAction from "react-native-paper/lib/commonjs/components/Appbar/AppbarAction"

const CartHeader = ({onTouch,onRefresh})=>{
    return(
        <AppbarHeader>
            <AppbarBackAction onPress={onTouch}/>
            <AppbarContent title="Cart"/>
            <AppbarAction icon="refresh" onPress={onRefresh}/>
        </AppbarHeader>
    )
}

export default CartHeader