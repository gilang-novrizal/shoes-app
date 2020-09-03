import React from 'react'
import {View, StyleSheet} from 'react-native'

import ListIcon from "react-native-paper/lib/commonjs/components/List/ListIcon"

const RatingStar = ({number})=>{
    const renderStar = ()=>{
        let stars = []
        for (let i =0; i< number; i++){
            stars.push(
                <ListIcon
                key={i}
                color="#f1c40f"
                icon="star"
                style={styles.star}/>
            )
        }
        return stars
    }
return <View style={styles.root}>{renderStar()}</View>
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    star:{
        margin: 0,
        padding: 0,
        width: 20,
        height: 20
    }
})

export default RatingStar