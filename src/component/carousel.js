import React from 'react'
import {StyleSheet} from 'react-native'
import { Card} from 'react-native-paper'

const ProductCarousel = ({image})=>{
    return(
        <Card>
            <Card.Cover source={{uri : image}}/>
        </Card>
    )
}

export default ProductCarousel