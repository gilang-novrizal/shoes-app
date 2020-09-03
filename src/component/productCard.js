import React from 'react'
import {StyleSheet} from 'react-native'
import {Text, Card} from 'react-native-paper'

import RatingStar from "./rating"

const ProductCard = ({title, brand, harga, image, rating})=>{
    return(
        <Card style={styles.root}>
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