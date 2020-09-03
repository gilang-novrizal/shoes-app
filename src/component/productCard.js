import React from 'react'
import {Text, StyleSheet} from 'react-native'


import Card from "react-native-paper/lib/commonjs/components/Card/Card"


import RatingStar from "./rating"

const ProductCard = ({title, brand, harga, image, rating, onTouch})=>{
    return(
        <Card style={styles.root} onPress={onTouch}>
            <Card.Cover source={{uri : image}}/>
            <Card.Title title={title}/>
            <Card.Content>
                <RatingStar number={rating}/>
                <Text>{harga}</Text>
                <Text>{brand}</Text>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        margin: 5
    }
})

export default ProductCard